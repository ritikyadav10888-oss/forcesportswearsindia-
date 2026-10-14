// @ts-nocheck -- canvas editor ported as-is from the original studio script (fabric.js 5, plain DOM).
/**
 * Force Design Studio engine. Drives the markup rendered by DesignStudio.tsx: four fabric.js canvases
 * (front, back, left and right sleeve), text / logo / clipart tools, colour variants from the
 * tools/force-kit catalog, the team roster and the quote spec.
 * Call startStudio once the markup is mounted and fabric is on window; it returns a cleanup function.
 */
export interface StudioOptions {
  params: URLSearchParams;
  onClose?: () => void;
  onBack?: () => void;
  onEnquiry?: (data: { spec: string; quantity: number }) => void;
}

export function startStudio(root: HTMLElement, opts: StudioOptions): () => void {
  const $=s=>root.querySelector(s), $$=s=>Array.from(root.querySelectorAll(s));
  const fabric=window.fabric;
  let dead=false;                                   // set on unmount; async callbacks stop here
  const ac=new AbortController(), timers=[];
  const on=(el,ev,fn)=>el.addEventListener(ev,fn,{signal:ac.signal});
  /* containers this module fills; emptied so a remount (React strict mode) starts clean */
  ['#ways','#swatches','#clips','#views','#sizes','#tFont','#prodInfo','#variants','#actions','#roster'].forEach(s=>{ $(s).innerHTML=''; });

  /* Product settings come from ProductCustomizeModal as URLSearchParams: embed, name, code, fabric, front, back, left, right, variants, design, colour, sleeves */
  const Q=opts.params;
  const EMBED=Q.get('embed')==='1';
  const PRODUCT=Q.get('front') ? {name:Q.get('name')||'Custom jersey', code:Q.get('code')||'', fabric:Q.get('fabric')||'', front:Q.get('front'), back:Q.get('back')||'', left:Q.get('left')||'', right:Q.get('right')||''} : null;
  /* colour variants: [{name, front, back?, left?, right?}]; the first is the product as pictured */
  let VARIANTS=[];
  if(PRODUCT){ try{ VARIANTS=JSON.parse(Q.get('variants')||'[]'); }catch(_){} VARIANTS.unshift({name:'As pictured', front:PRODUCT.front, back:PRODUCT.back, left:PRODUCT.left, right:PRODUCT.right}); }
  const V=()=>VARIANTS[S.variant]||VARIANTS[0];
  let CAT_PENDING=!!(PRODUCT && Q.get('design'));

  /* ===== Business settings: edit these to match your rates ===== */
  const PRICING = {
    base:{halftone:449, polo:349, tee:249, custom:449},                 // ₹ per blank garment
    side:{print:60, embroidery:120},          // ₹ per decorated side (front, back, each sleeve)
    tiers:[[10,0.05],[25,0.10],[50,0.15],[100,0.20]] // [min qty, discount]
  };
  const GARMENT_COLOURS = [
    ['Navy','#1B2A4A'],['Black','#16171A'],['White','#F7F7F5'],['Royal blue','#1F4FB5'],['Red','#C21A24'],
    ['Maroon','#6E1423'],['Bottle green','#14532D'],['Grey melange','#9CA3AF'],['Yellow','#F5C518'],['Orange','#EA6A12'],['Sky blue','#7CC3EC']
  ];
  const FONTS = [['Graduate','Collegiate'],['Bebas Neue','Block'],['Anton','Impact'],['Oswald','Oswald'],['Saira Stencil One','Stencil'],['Teko','Athletic'],['Saira Condensed','Condensed'],['Barlow','Clean'],['Pacifico','Script'],['Permanent Marker','Marker']];
  const INK = ['#FFFFFF','#111111','#F2B705','#C21A24','#1F4FB5','#14532D','#EA6A12','#9CA3AF'];
  const VIEWS = [['front','Front'],['back','Back'],['left','Left sleeve'],['right','Right sleeve']];
  const AREA_DRAWN = {front:{x:160,y:118,w:180,h:330}, back:{x:150,y:82,w:200,h:360}, left:{x:150,y:150,w:200,h:200}, right:{x:150,y:150,w:200,h:200}};
  const AREA_PHOTO = {front:{x:150,y:140,w:200,h:350}, back:{x:145,y:112,w:210,h:378}, left:{x:186,y:175,w:128,h:210}, right:{x:186,y:175,w:128,h:210}};
  const AREA_PRODUCT = {front:{x:145,y:120,w:210,h:380}, back:{x:140,y:85,w:220,h:410}, left:{x:150,y:150,w:200,h:200}, right:{x:150,y:150,w:200,h:200}};
  /* sleeve areas on 3/4 side photos (shirt facing left for the left side, right for the right side) */
  const AREA_SIDE_PHOTO = {left:{x:262,y:140,w:178,h:260}, right:{x:48,y:140,w:178,h:260}};
  /* sleeve areas on side photos made by tools/force-kit/force_sleeves.py (catalog design with "sleeveView":"side") */
  const AREA_SIDE_KIT = {left:{x:220,y:185,w:195,h:215}, right:{x:85,y:185,w:195,h:215}};
  const AREA = JSON.parse(JSON.stringify(PRODUCT?AREA_PRODUCT:AREA_PHOTO));
  /* Halftone Pro photos live in the kit/ folder: <id>-front.webp, <id>-back.webp, <id>-left.webp, <id>-right.webp */
  const COLOURWAYS = [
    ['teal','Teal','#172c43','#158e80'],
    ['ocean','Ocean blue','#162c46','#0092c2'],
    ['royal','Royal blue','#162a45','#036ca7'],
    ['grey','Grey & navy','#1e2c45','#9c98a5'],
    ['yellow','Yellow','#22303c','#e9da00'],
    ['orange','Orange','#21283e','#d4441f'],
    ['lime','Lime & green','#08503b','#acbf14'],
    ['peach','Peach & maroon','#632a29','#e3a289'],
    ['pink','Pink','#9a2340','#dc7b91'],
    ['red','Red & navy','#1f263e','#a62026'],
    ['sky','Sky blue','#1b2d47','#5dabd5'],
    ['mint','Mint','#1e2f47','#a0cacd']
  ];
  const PRODUCT_NAME = {halftone:'Halftone Pro sublimation polo', polo:'Plain polo shirt', tee:'Round neck tee', custom:PRODUCT?PRODUCT.name:''};
  const W=500, H=560;

  const S = {product:PRODUCT?'custom':'halftone', way:'teal', colour:PRODUCT?'#1B2A4A':'#16a08f', method:'print', view:'front', sizes:{XS:0,S:0,M:0,L:0,XL:0,XXL:0,'3XL':0,'4XL':0}, roster:[], active:-1, variant:0};
  const SIZES=Object.keys(S.sizes);

  /* ===== helpers ===== */
  function hex2rgb(h){h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');const n=parseInt(h,16);return[n>>16&255,n>>8&255,n&255];}
  function mix(a,b,t){const A=hex2rgb(a),B=hex2rgb(b);return'#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('');}
  function lum(h){const[r,g,b]=hex2rgb(h);return(0.299*r+0.587*g+0.114*b)/255;}
  const inr = n => '₹'+Math.round(n).toLocaleString('en-IN');

  /* ===== garment artwork (SVG, recoloured live) ===== */
  function garmentSVG(product, view, c){
    const light = lum(c)>0.6, dark=mix(c,'#000000',light?0.12:0.28), hi=mix(c,'#ffffff',0.18);
    const seam = light?'rgba(0,0,0,.22)':'rgba(0,0,0,.35)', stitch = light?'rgba(0,0,0,.25)':'rgba(255,255,255,.28)';
    const defs = `<defs><linearGradient id="sh" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset=".2" stop-color="#000" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".07"/><stop offset=".8" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient>
    <linearGradient id="sv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".06"/><stop offset="1" stop-color="#000" stop-opacity=".12"/></linearGradient></defs>`;
    let s='';
    if(view==='front'||view==='back'){
      const neck = view==='back' ? 'Q250,56 300,42' : (product==='polo' ? 'Q250,60 302,42' : 'Q250,92 300,42');
      const body = `M150,60 L200,42 ${neck} L350,60 L455,120 L425,215 L370,190 L372,515 Q250,532 128,515 L130,190 L75,215 L45,120 Z`;
      s += `<path d="${body}" fill="${c}"/><path d="${body}" fill="url(#sh)"/><path d="${body}" fill="url(#sv)"/>`;
      s += `<path d="M205,300 Q220,400 208,500" stroke="#000" stroke-opacity=".06" stroke-width="8" fill="none"/><path d="M300,280 Q288,380 298,505" stroke="#000" stroke-opacity=".05" stroke-width="10" fill="none"/>`;
      s += `<path d="M45,120 L75,215 L88,209 L59,116 Z" fill="${dark}"/><path d="M455,120 L425,215 L412,209 L441,116 Z" fill="${dark}"/>`;
      s += `<path d="M150,60 Q140,130 130,190" stroke="${seam}" stroke-width="1.6" fill="none"/><path d="M350,60 Q360,130 370,190" stroke="${seam}" stroke-width="1.6" fill="none"/>`;
      s += `<path d="M130,503 Q250,520 371,503" stroke="${stitch}" stroke-width="1.4" stroke-dasharray="4 3" fill="none"/>`;
      if(product==='polo'){
        if(view==='front'){
          s += `<path d="M196,44 Q250,28 304,44 L298,54 Q250,42 202,54 Z" fill="${dark}"/>`;
          s += `<path d="M205,48 Q250,62 295,48 L253,74 L247,74 Z" fill="${dark}"/>`;
          s += `<rect x="238" y="72" width="24" height="112" rx="2" fill="${c}" stroke="${seam}" stroke-width="1.4"/><rect x="238" y="72" width="24" height="112" fill="url(#sh)" opacity=".5"/>`;
          [96,126,156].forEach(y=>{ s += `<circle cx="250" cy="${y}" r="4.2" fill="${mix(c,'#ffffff',0.55)}" stroke="${seam}" stroke-width="1"/>`; });
          s += `<path d="M200,44 Q224,68 247,74 L240,110 Q214,102 177,63 Z" fill="${c}" stroke="${dark}" stroke-width="2"/>`;
          s += `<path d="M300,44 Q276,68 253,74 L260,110 Q286,102 323,63 Z" fill="${c}" stroke="${dark}" stroke-width="2"/>`;
          s += `<path d="M180,66 Q214,100 239,106" stroke="${stitch}" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/><path d="M320,66 Q286,100 261,106" stroke="${stitch}" stroke-width="1.2" stroke-dasharray="3 3" fill="none"/>`;
        } else {
          s += `<path d="M196,43 Q250,24 304,43 L300,60 Q250,46 200,60 Z" fill="${c}" stroke="${dark}" stroke-width="2"/><path d="M196,43 Q250,24 304,43" stroke="${hi}" stroke-width="2" fill="none" opacity=".6"/>`;
        }
      } else {
        s += `<path d="M200,42 ${neck}" stroke="${dark}" stroke-width="11" fill="none" stroke-linecap="round"/>`;
      }
    } else {
      const body='M118,110 Q250,84 382,110 L438,430 Q250,452 62,430 Z';
      s += `<path d="${body}" fill="${c}"/><path d="${body}" fill="url(#sh)"/><path d="${body}" fill="url(#sv)"/>`;
      s += `<path d="M68,398 Q250,420 432,398 L438,430 Q250,452 62,430 Z" fill="${dark}"/>`;
      s += `<path d="M118,110 Q250,84 382,110" stroke="${seam}" stroke-width="2" fill="none"/>`;
      s += `<path d="M72,392 Q250,413 428,392" stroke="${stitch}" stroke-width="1.4" stroke-dasharray="4 3" fill="none"/>`;
      s += `<text x="250" y="80" text-anchor="middle" font-family="Arial" font-size="14" font-weight="700" fill="${light?'#00000055':'#ffffff55'}">${view==='left'?'LEFT':'RIGHT'} SLEEVE</text>`;
    }
    return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${defs}${s}</svg>`);
  }

  /* ===== clipart ===== */
  const CLIPART = [
    ['Star','<polygon points="50,5 61,38 96,38 68,59 79,93 50,72 21,93 32,59 4,38 39,38"/>'],
    ['Shield','<path d="M50 4 L90 18 V48 C90 74 72 89 50 96 C28 89 10 74 10 48 V18 Z"/>'],
    ['Crown','<path d="M8 78 L14 30 L34 52 L50 20 L66 52 L86 30 L92 78 Z M8 84 H92 V94 H8 Z"/>'],
    ['Bolt','<path d="M58 4 L18 56 H46 L40 96 L82 40 H54 Z"/>'],
    ['Flame','<path d="M50 96 C26 96 14 80 14 62 C14 44 28 34 32 18 C40 28 42 36 42 44 C48 34 52 20 50 4 C70 18 86 40 86 62 C86 80 74 96 50 96 Z"/>'],
    ['Heart','<path d="M50 88 C20 66 6 50 6 32 C6 18 17 8 30 8 C40 8 46 14 50 22 C54 14 60 8 70 8 C83 8 94 18 94 32 C94 50 80 66 50 88 Z"/>'],
    ['Cricket ball','<path fill-rule="evenodd" d="M50 6 A44 44 0 1 1 49.9 6 Z M37 10 C48 36 48 64 37 90 L42 92 C54 64 54 36 42 8 Z M58 8 C46 36 46 64 58 92 L63 90 C52 64 52 36 63 10 Z"/>'],
    ['Trophy','<path fill-rule="evenodd" d="M28 8 H72 V14 H90 V26 C90 40 80 48 68 50 C64 58 58 62 54 64 V76 H66 V84 H34 V76 H46 V64 C42 62 36 58 32 50 C20 48 10 40 10 26 V14 H28 Z M18 22 V26 C18 34 24 40 30 42 C28 36 28 30 28 22 Z M82 22 H72 C72 30 72 36 70 42 C76 40 82 34 82 26 Z M28 88 H72 V96 H28 Z"/>'],
    ['Ring badge','<path fill-rule="evenodd" d="M50 4 A46 46 0 1 1 49.9 4 Z M50 15 A35 35 0 1 0 50.1 15 Z"/>']
  ];

  /* ===== canvases ===== */
  fabric.Object.prototype.set({transparentCorners:false, cornerColor:'#0891B2', cornerStrokeColor:'#ffffff', borderColor:'#0891B2', cornerStyle:'circle', cornerSize:12, padding:4, borderScaleFactor:1.5});
  const PROPS=['kind','role','curve','locked','lockMovementX','lockMovementY','lockScalingX','lockScalingY','lockRotation','hasControls','editable','name'];
  const C={}, HIST={};
  let showGuide=true, loading=false;

  function clipFor(view){ const a=AREA[view]; return new fabric.Rect({left:a.x, top:a.y, width:a.w, height:a.h, absolutePositioned:true}); }

  VIEWS.forEach(([v])=>{
    const c = new fabric.Canvas($('#cv-'+v), {width:W, height:H, preserveObjectStacking:true, selection:true, enableRetinaScaling:true});
    C[v]=c; HIST[v]={stack:[], idx:-1};
    c.on('after:render', e=>{
      if(!showGuide || v!==S.view) return; const ctx=e.ctx||c.contextContainer; const a=AREA[v]; const vt=c.viewportTransform;
      ctx.save(); ctx.transform(vt[0],vt[1],vt[2],vt[3],vt[4],vt[5]);
      const active=!!c.getActiveObject();
      ctx.setLineDash([6,5]); ctx.lineWidth=1.2; ctx.strokeStyle= lum(S.colour)>0.6 ? 'rgba(0,0,0,'+(active?.55:.22)+')' : 'rgba(255,255,255,'+(active?.7:.28)+')';
      ctx.strokeRect(a.x+.5,a.y+.5,a.w,a.h);
      if(active){ ctx.setLineDash([]); ctx.font='900 10px Roboto, sans-serif'; ctx.fillStyle=ctx.strokeStyle; ctx.fillText('PRINT AREA', a.x+4, a.y-6); }
      ctx.restore();
    });
    c.on('object:added', e=>{ if(!e.target.clipPath) e.target.clipPath=clipFor(v); });
    ['object:added','object:modified','object:removed'].forEach(ev=>c.on(ev,()=>{ if(!loading) pushHist(v); scheduleUpdate(); }));
    c.on('selection:created', onSelect); c.on('selection:updated', onSelect); c.on('selection:cleared', onSelect);
    c.on('text:changed', ()=>{ syncTextPanel(); scheduleUpdate(); });
  });

  function applyGarment(v, cb){
    if(dead) return;
    const c=C[v], done=()=>{ if(dead) return; c.requestRenderAll(); cb&&cb(); };
    if(S.product==='custom'){
      if(CAT_PENDING) return done();
      const url=V()[v];
      if(!url) return fabric.Image.fromURL(garmentSVG(v==='back'?'polo':'tee', v, S.colour), img=>{ if(!dead) c.setBackgroundImage(img, done); });
      fabric.Image.fromURL(url, img=>{
        if(dead) return; if(!img || !img.width) return done();
        const k=Math.min(W/img.width, H/img.height);
        img.set({left:(W-img.width*k)/2, top:(H-img.height*k)/2, scaleX:k, scaleY:k});
        if(v==='front' && !S.sampled){ S.sampled=true; const col=sampleColour(img.getElement()); if(col){ S.colour=col; ['back','left','right'].forEach(x=>{ if(!V()[x]) applyGarment(x); }); } }
        c.setBackgroundImage(img, done);
      }, url.charAt(0)==='/' ? {crossOrigin:'anonymous'} : {});
    } else if(S.product==='halftone'){
      fabric.Image.fromURL('/design-studio/kit/'+S.way+'-'+v+'.webp', img=>{
        if(dead) return; if(!img || !img.width) return done();
        const k=W/img.width; img.set({left:0, top:0, scaleX:k, scaleY:k}); c.setBackgroundImage(img, done);
      });
    } else fabric.Image.fromURL(garmentSVG(S.product, v, S.colour), img=>{ if(!dead) c.setBackgroundImage(img, done); });
  }
  /* average colour of the product photo, used to colour the drawn sleeves */
  function sampleColour(el){
    try{ const cv=document.createElement('canvas'), n=40; cv.width=n; cv.height=n; const x=cv.getContext('2d'); x.drawImage(el,0,0,n,n);
      const d=x.getImageData(0,0,n,n).data; let r=0,g=0,b=0,k=0;
      for(let i=0;i<d.length;i+=4){ if(d[i+3]>200){ r+=d[i]; g+=d[i+1]; b+=d[i+2]; k++; } }
      if(k) return '#'+[r,g,b].map(v=>Math.round(v/k).toString(16).padStart(2,'0')).join('');
    }catch(_){}
    return null;
  }
  function setAreas(){
    Object.assign(AREA, JSON.parse(JSON.stringify(S.product==='custom'?AREA_PRODUCT:S.product==='halftone'?AREA_PHOTO:AREA_DRAWN)));
    if(S.product==='custom'){
      if(V().cat) Object.assign(AREA, JSON.parse(JSON.stringify(AREA_PHOTO)));
      ['left','right'].forEach(v=>{ if(V().side || (!V().cat && V()[v])) AREA[v]=Object.assign({}, (V().kitSide?AREA_SIDE_KIT:AREA_SIDE_PHOTO)[v]); });
    }
    VIEWS.forEach(([v])=>C[v].getObjects().forEach(o=>{ o.clipPath=clipFor(v); o.dirty=true; }));
  }
  function applyGarmentAll(){ let n=0; VIEWS.forEach(([v])=>applyGarment(v, ()=>{ if(++n===4) scheduleUpdate(); })); }

  /* history */
  function snapshot(v){ const j=C[v].toJSON(PROPS); delete j.backgroundImage; return JSON.stringify(j); }
  function pushHist(v){ const h=HIST[v]; const s=snapshot(v); if(h.stack[h.idx]===s) return; h.stack=h.stack.slice(0,h.idx+1); h.stack.push(s); if(h.stack.length>60) h.stack.shift(); h.idx=h.stack.length-1; updateHistBtns(); }
  function restore(v, s){
    loading=true; const c=C[v];
    c.loadFromJSON(s, ()=>{ c.getObjects().forEach(o=>{ o.clipPath=clipFor(v); }); applyGarment(v, ()=>{ loading=false; c.requestRenderAll(); onSelect(); scheduleUpdate(); }); });
  }
  function undo(){ const h=HIST[S.view]; if(h.idx<=0) return; h.idx--; restore(S.view, h.stack[h.idx]); updateHistBtns(); }
  function redo(){ const h=HIST[S.view]; if(h.idx>=h.stack.length-1) return; h.idx++; restore(S.view, h.stack[h.idx]); updateHistBtns(); }
  function updateHistBtns(){ const h=HIST[S.view]; $('#undo').disabled=h.idx<=0; $('#redo').disabled=h.idx>=h.stack.length-1; }
  $('#undo').onclick=undo; $('#redo').onclick=redo;

  /* sizing */
  const board=$('#board'), wrap=$('#boardwrap');
  function resize(){
    const narrow = matchMedia('(max-width:960px)').matches;
    const r=wrap.getBoundingClientRect();
    let w = narrow ? Math.min(r.width, 560) : Math.min(r.width, (r.height-4)*W/H);
    w=Math.max(220, Math.floor(w)); const h=Math.round(w*H/W), z=w/W;
    board.style.width=w+'px'; board.style.height=h+'px';
    VIEWS.forEach(([v])=>{ C[v].setDimensions({width:w, height:h}); C[v].setZoom(z); C[v].requestRenderAll(); });
  }
  const ro=new ResizeObserver(resize); ro.observe(wrap);

  /* views */
  const viewsEl=$('#views'), thumbs={};
  VIEWS.forEach(([v,label])=>{
    const b=document.createElement('button'); b.type='button'; b.className='view'; b.dataset.view=v;
    const img=document.createElement('img'); img.alt=''; thumbs[v]=img;
    const t=document.createElement('span'); t.textContent=label; const sm=document.createElement('small'); sm.id='vc-'+v;
    b.append(img,t,sm); b.onclick=()=>setView(v); viewsEl.appendChild(b);
  });
  function setView(v){
    if(S.view!==v) C[S.view].discardActiveObject().requestRenderAll();
    S.view=v; VIEWS.forEach(([k])=>{ C[k].wrapperEl.hidden = k!==v; });
    $$('.view').forEach(b=>b.setAttribute('aria-pressed', b.dataset.view===v?'true':'false'));
    C[v].requestRenderAll(); updateHistBtns(); onSelect();
  }

  /* selection + panels */
  const cur = () => C[S.view];
  const sel = () => cur().getActiveObject();
  function showTab(t){ $$('.tabs [data-tab]').forEach(b=>b.setAttribute('aria-selected', b.dataset.tab===t?'true':'false')); $$('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==t); }
  $$('.tabs [data-tab]').forEach(b=>b.onclick=()=>showTab(b.dataset.tab));

  const ICON = {
    dup:'<path d="M8 8h12v12H8z"/><path d="M4 16V4h12"/>', up:'<path d="m12 5-6 6M12 5l6 6M12 5v14"/>', down:'<path d="m12 19-6-6M12 19l6-6M12 19V5"/>',
    center:'<path d="M12 3v18M7 8h10v8H7z"/>', flip:'<path d="M12 3v18M4 7l5 5-5 5zM20 7l-5 5 5 5z"/>', lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    unlock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>', del:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'
  };
  function actBtn(id,label,icon,fn,danger){ const b=document.createElement('button'); b.type='button'; b.className='btn'; b.id=id; b.title=label;
    b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+icon+'</svg><span>'+label+'</span>';
    if(danger) b.style.color='#C21A24'; b.onclick=fn; return b; }
  function renderActions(o){
    const a=$('#actions'); a.innerHTML='';
    if(!o){ const n=document.createElement('span'); n.className='note'; n.textContent=cur().getObjects().length?'Select an item on the shirt to move, resize or rotate it':'This side is blank. Add text, an image or clipart from the left.'; a.appendChild(n); return; }
    const locked=!!o.locked;
    a.append(
      actBtn('aDup','Duplicate',ICON.dup,duplicate), actBtn('aUp','Forward',ICON.up,()=>{ o.bringForward(); cur().requestRenderAll(); pushHist(S.view); }),
      actBtn('aDown','Back',ICON.down,()=>{ o.sendBackwards(); cur().requestRenderAll(); pushHist(S.view); }),
      actBtn('aCenter','Centre',ICON.center,()=>{ const ar=AREA[S.view]; o.set({left:ar.x+ar.w/2, originX:'center'}); o.setCoords(); cur().requestRenderAll(); pushHist(S.view); }),
      actBtn('aFlip','Flip',ICON.flip,()=>{ o.set('flipX',!o.flipX); cur().requestRenderAll(); pushHist(S.view); }),
      actBtn('aLock',locked?'Unlock':'Lock',locked?ICON.unlock:ICON.lock,()=>{ setLock(o,!o.locked); renderActions(o); pushHist(S.view); }),
      actBtn('aDel','Delete',ICON.del,removeSel,true)
    );
  }
  function setLock(o,l){ o.set({locked:l, lockMovementX:l, lockMovementY:l, lockScalingX:l, lockScalingY:l, lockRotation:l, hasControls:!l}); cur().requestRenderAll(); }
  function duplicate(){ const o=sel(); if(!o) return; o.clone(cl=>{ cl.set({left:o.left+14, top:o.top+14}); cl.clipPath=clipFor(S.view); cur().add(cl).setActiveObject(cl); cur().requestRenderAll(); }, PROPS); }
  function removeSel(){ const c=cur(); const objs=c.getActiveObjects(); if(!objs.length) return; c.discardActiveObject(); objs.forEach(o=>c.remove(o)); c.requestRenderAll(); }

  function onSelect(){
    const o=sel(); renderActions(o);
    $('#textAdd').hidden=false; $('#textEdit').hidden=true; $('#imgEdit').hidden=true; $('#clipEdit').hidden=true;
    if(!o) return;
    if(o.type==='i-text'||o.type==='text'){ $('#textAdd').hidden=true; $('#textEdit').hidden=false; syncTextPanel(); showTab('text'); }
    else if(o.kind==='photo'){ $('#imgEdit').hidden=false; $('#iOpacity').value=o.opacity; $('#iRemoveWhite').checked=!!(o.filters&&o.filters.length); showTab('upload'); }
    else if(o.kind==='clip'){ $('#clipEdit').hidden=false; buildColorRow($('#cFill'), getFill(o), col=>{ setFill(o,col); cur().requestRenderAll(); pushHist(S.view); scheduleUpdate(); }); showTab('clipart'); }
  }

  /* colour rows */
  function buildColorRow(el, current, onPick, allowNone){
    el.innerHTML='';
    if(allowNone){ const n=document.createElement('button'); n.type='button'; n.className='dot'; n.title='None'; n.style.background='linear-gradient(135deg,transparent 45%,#C21A24 45%,#C21A24 55%,transparent 55%),var(--panel)'; n.setAttribute('aria-pressed', !current?'true':'false'); n.onclick=()=>{ onPick(''); buildColorRow(el,'',onPick,allowNone); }; el.appendChild(n); }
    INK.forEach(col=>{ const d=document.createElement('button'); d.type='button'; d.className='dot'; d.style.background=col; d.title=col; d.setAttribute('aria-pressed', current && current.toLowerCase()===col.toLowerCase()?'true':'false'); d.onclick=()=>{ onPick(col); buildColorRow(el,col,onPick,allowNone); }; el.appendChild(d); });
    const p=document.createElement('label'); p.className='picker'; p.title='Custom colour'; const inp=document.createElement('input'); inp.type='color'; inp.value=current&&/^#/.test(current)?current:'#ffffff';
    inp.oninput=()=>onPick(inp.value); inp.onchange=()=>buildColorRow(el,inp.value,onPick,allowNone); p.appendChild(inp); el.appendChild(p);
  }
  function getFill(o){ if(o._objects) return o._objects[0].fill; return o.fill; }
  function setFill(o,col){ if(o._objects) o._objects.forEach(p=>p.set('fill',col)); else o.set('fill',col); o.dirty=true; }

  /* text */
  const fontSel=$('#tFont'); FONTS.forEach(([f,l])=>{ const op=document.createElement('option'); op.value=f; op.textContent=l+' · '+f; op.style.fontFamily='"'+f+'"'; fontSel.appendChild(op); });
  function newText(str, opts){
    const t=new fabric.IText(str, Object.assign({fontFamily:'Graduate', fontSize:40, fill:'#FFFFFF', stroke:'', strokeWidth:0, paintFirst:'stroke', strokeLineJoin:'round', originX:'center', originY:'center', textAlign:'center', kind:'text', curve:0, charSpacing:0}, opts));
    return t;
  }
  function addObj(o, view){ const v=view||S.view; C[v].add(o); if(v===S.view){ C[v].setActiveObject(o); } C[v].requestRenderAll(); }
  function areaCenter(v){ const a=AREA[v]; return {left:a.x+a.w/2, top:a.y+a.h/2}; }
  $('#addText').onclick=()=>{ const s=$('#newText').value.trim()||'TEXT'; const fg=lum(S.colour)>0.6?'#111111':'#FFFFFF'; addObj(newText(s, Object.assign(areaCenter(S.view),{fill:fg}))); };
  $('#addText2').onclick=()=>{ cur().discardActiveObject(); onSelect(); $('#newText').focus(); };

  function applyCurve(t){
    try{
      t.set({path:null}); t.initDimensions();
      const k=(t.curve||0)/100;
      if(k){ const w=t.width; t.set({path:new fabric.Path(`M 0 0 Q ${w/2} ${-k*w*1.1} ${w} 0`, {visible:false, fill:'', stroke:''}), editable:false}); }
      else t.set({editable:true});
      t.initDimensions(); t.setCoords(); t.dirty=true;
    }catch(e){ t.set({path:null, curve:0}); }
  }
  function syncTextPanel(){
    const t=sel(); if(!t || (t.type!=='i-text'&&t.type!=='text')) return;
    if(document.activeElement!==$('#tContent')) $('#tContent').value=t.text;
    fontSel.value=t.fontFamily; $('#tStrokeW').value=t.strokeWidth||0; $('#tSize').value=Math.round(t.fontSize);
    $('#tSpace').value=t.charSpacing||0; $('#tCurve').value=t.curve||0; $('#tBold').checked=t.fontWeight==='bold'; $('#tItalic').checked=t.fontStyle==='italic';
    buildColorRow($('#tFill'), t.fill, col=>setT({fill:col}));
    buildColorRow($('#tStroke'), t.stroke, col=>setT({stroke:col, strokeWidth: col? (t.strokeWidth||2):0}), true);
  }
  function setT(p, recurve){
    const t=sel(); if(!t) return; t.set(p);
    if(recurve || t.curve) applyCurve(t); else { t.initDimensions && t.initDimensions(); t.setCoords(); }
    cur().requestRenderAll(); scheduleUpdate(); clearTimeout(setT._h); setT._h=setTimeout(()=>pushHist(S.view),350);
  }
  $('#tContent').oninput=e=>setT({text:e.target.value||' '});
  fontSel.onchange=e=>{ const f=e.target.value; (document.fonts?document.fonts.load('40px "'+f+'"'):Promise.resolve()).catch(()=>{}).then(()=>{ fabric.util.clearFabricFontCache(f); setT({fontFamily:f}); }); };
  $('#tStrokeW').oninput=e=>{ const v=parseFloat(e.target.value); const t=sel(); setT({strokeWidth:v, stroke: v&&!t.stroke ? '#111111' : t.stroke}); };
  $('#tSize').oninput=e=>setT({fontSize:parseFloat(e.target.value)});
  $('#tSpace').oninput=e=>setT({charSpacing:parseFloat(e.target.value)});
  $('#tCurve').oninput=e=>setT({curve:parseFloat(e.target.value)}, true);
  $('#tBold').onchange=e=>setT({fontWeight:e.target.checked?'bold':'normal'});
  $('#tItalic').onchange=e=>setT({fontStyle:e.target.checked?'italic':'normal'});

  /* quick adds */
  $('#qNameNum').onclick=()=>{
    const fg=lum(S.colour)>0.6?'#111111':'#FFFFFF', a=AREA.back;
    const r=S.roster[S.active>=0?S.active:0];
    addObj(newText(r&&r.name?r.name.toUpperCase():'PLAYER', {left:a.x+a.w/2, top:a.y+48, fontSize:38, fill:fg, role:'name'}), 'back');
    addObj(newText(r&&r.number?r.number:'10', {left:a.x+a.w/2, top:a.y+170, fontSize:150, fill:fg, stroke:'#F2B705', strokeWidth:3, role:'num'}), 'back');
    setView('back');
  };
  $('#qChest').onclick=()=>{ const fg=lum(S.colour)>0.6?'#111111':'#FFFFFF', a=AREA.front; addObj(newText('TEAM NAME',{left:a.x+a.w/2, top:a.y+120, fontSize:40, fill:fg}),'front'); setView('front'); };

  /* uploads */
  function addImageFromURL(url){
    fabric.Image.fromURL(url, img=>{
      const a=AREA[S.view]; const s=Math.min(a.w*0.6/img.width, a.h*0.5/img.height);
      img.set(Object.assign(areaCenter(S.view),{originX:'center', originY:'center', scaleX:s, scaleY:s, kind:'photo'}));
      addObj(img);
    });
  }
  function readFile(f){ if(!f || !/^image\//.test(f.type)) return; const r=new FileReader(); r.onload=()=>addImageFromURL(r.result); r.readAsDataURL(f); }
  $('#upFile').onchange=e=>{ readFile(e.target.files[0]); e.target.value=''; };
  $('#iOpacity').oninput=e=>{ const o=sel(); if(!o) return; o.set('opacity',parseFloat(e.target.value)); cur().requestRenderAll(); clearTimeout(setT._h); setT._h=setTimeout(()=>pushHist(S.view),350); };
  $('#iRemoveWhite').onchange=e=>{ const o=sel(); if(!o||!o.applyFilters) return;
    o.filters = e.target.checked ? [new fabric.Image.filters.RemoveColor({color:'#FFFFFF', distance:0.18})] : [];
    o.applyFilters(); cur().requestRenderAll(); pushHist(S.view); scheduleUpdate(); };
  let dd=0;
  on(board,'dragenter',e=>{ e.preventDefault(); dd++; $('#drop').hidden=false; });
  on(board,'dragover',e=>e.preventDefault());
  on(board,'dragleave',()=>{ if(--dd<=0){ dd=0; $('#drop').hidden=true; } });
  on(board,'drop',e=>{ e.preventDefault(); dd=0; $('#drop').hidden=true; readFile(e.dataTransfer.files&&e.dataTransfer.files[0]); });
  on(document,'paste',e=>{ const it=[...(e.clipboardData?.items||[])].find(i=>i.type.startsWith('image/')); if(it) readFile(it.getAsFile()); });

  /* clipart */
  const clipsEl=$('#clips');
  function addClip(svgInner, view, opts){
    const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">'+svgInner+'</svg>';
    fabric.loadSVGFromString(svg,(objs,o)=>{
      const g=fabric.util.groupSVGElements(objs,o); const v=view||S.view;
      const col=(opts&&opts.fill)||(lum(S.colour)>0.6?'#111111':'#F2B705'); setFill(g,col);
      const size=(opts&&opts.size)||90, s=size/Math.max(g.width,g.height);
      g.set(Object.assign(areaCenter(v),{originX:'center',originY:'center',scaleX:s,scaleY:s,kind:'clip'}, opts&&opts.pos||{}));
      addObj(g, v);
    });
  }
  CLIPART.forEach(([name,inner])=>{ const b=document.createElement('button'); b.type='button'; b.className='clip'; b.title=name; b.setAttribute('aria-label','Add '+name);
    b.innerHTML='<svg viewBox="0 0 100 100">'+inner+'</svg>'; b.onclick=()=>addClip(inner); clipsEl.appendChild(b); });

  /* product / colour / method */
  const swEl=$('#swatches');
  GARMENT_COLOURS.forEach(([n,c])=>{ const b=document.createElement('button'); b.type='button'; b.className='swatch'; b.style.background=c; b.title=n; b.dataset.c=c; b.setAttribute('aria-label',n);
    b.onclick=()=>setColour(c); swEl.appendChild(b); });
  const cust=document.createElement('label'); cust.className='swatch custom'; cust.title='Custom colour'; const ci=document.createElement('input'); ci.type='color'; ci.id='garCustom'; ci.setAttribute('aria-label','Custom garment colour'); ci.oninput=()=>setColour(ci.value); cust.appendChild(ci); swEl.appendChild(cust);
  function setColour(c){ S.colour=c; syncProduct(); applyGarmentAll(); }
  const waysEl=$('#ways');
  COLOURWAYS.forEach(([id,n,d,m])=>{ const b=document.createElement('button'); b.type='button'; b.className='way'; b.dataset.way=id; b.title=n; b.setAttribute('aria-label',n);
    b.style.background='linear-gradient(135deg,'+d+' 50%,'+m+' 50%)'; b.onclick=()=>{ S.way=id; S.colour=m; syncProduct(); applyGarmentAll(); }; waysEl.appendChild(b); });
  $$('[data-seg]').forEach(g=>on(g,'click',e=>{ const b=e.target.closest('button'); if(!b) return; const k=g.dataset.seg; S[k]=b.dataset.val;
    if(k==='product'){ if(S.product==='halftone'){ const w=COLOURWAYS.find(x=>x[0]===S.way); S.colour=w[3]; } else if(!GARMENT_COLOURS.some(x=>x[1]===S.colour)) S.colour='#1B2A4A'; setAreas(); applyGarmentAll(); }
    syncProduct(); scheduleUpdate(); }));
  function colourName(c){ if(S.product==='custom') return (/^colour /i.test(V().name)?V().name:'Colour '+V().name)+(PRODUCT.code?' · Code '+PRODUCT.code:''); if(S.product==='halftone'){ const w=COLOURWAYS.find(x=>x[0]===S.way); return w?w[1]:''; } const f=GARMENT_COLOURS.find(x=>x[1].toLowerCase()===c.toLowerCase()); return f?f[0]:'Custom '+c.toUpperCase(); }
  function syncProduct(){
    $$('[data-seg]').forEach(g=>g.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed', S[g.dataset.seg]===b.dataset.val?'true':'false')));
    const custom=S.product==='custom'; $('[data-seg="product"]').hidden=custom; $('#colField').hidden=custom; $('#prodInfo').hidden=!custom;
    const ph=S.product==='halftone'; waysEl.hidden=!ph; swEl.hidden=ph; $('#colLbl').textContent=ph?'Colourway':'Garment colour';
    $$('.way').forEach(b=>b.setAttribute('aria-pressed', b.dataset.way===S.way?'true':'false'));
    $$('.swatch[data-c]').forEach(b=>b.setAttribute('aria-pressed', b.dataset.c.toLowerCase()===S.colour.toLowerCase()?'true':'false'));
    $('#garname').textContent=colourName(S.colour);
    $('#methodNote').textContent = S.method==='embroidery' ? 'Stitched with thread. Best for logos and short text. Photos and fine gradients are not suitable.' : 'Full colour print. Works for photos, gradients and any number of colours.';
  }

  /* team roster */
  const rosterEl=$('#roster');
  function field(val, ph, label){ const i=document.createElement('input'); i.type='text'; i.value=val||''; i.placeholder=ph; i.setAttribute('aria-label',label); return i; }
  function renderRoster(){
    rosterEl.innerHTML='';
    if(!S.roster.length){ const e=document.createElement('div'); e.className='empty'; e.textContent='No players yet. Add each player, or paste your team list.'; rosterEl.appendChild(e); }
    S.roster.forEach((r,i)=>{
      const row=document.createElement('div'); row.className='rrow'+(i===S.active?' on':'');
      const n=document.createElement('b'); n.textContent=i+1;
      const nm=field(r.name,'Name','Player '+(i+1)+' name'); nm.maxLength=20;
      nm.oninput=()=>{ r.name=nm.value; previewRow(i); };
      const no=field(r.number,'No.','Player '+(i+1)+' number'); no.maxLength=3; no.inputMode='numeric';
      no.oninput=()=>{ r.number=no.value.replace(/[^0-9]/g,''); no.value=r.number; previewRow(i); };
      const sz=document.createElement('select'); sz.setAttribute('aria-label','Player '+(i+1)+' size');
      SIZES.forEach(v=>{ const o=document.createElement('option'); o.value=v; o.textContent=v; sz.appendChild(o); }); sz.value=r.size;
      sz.onchange=()=>{ r.size=sz.value; updatePrice(); };
      const x=document.createElement('button'); x.type='button'; x.className='x'; x.textContent='×'; x.title='Remove player'; x.setAttribute('aria-label','Remove player '+(i+1));
      x.onclick=()=>{ S.roster.splice(i,1); if(S.active>=S.roster.length) S.active=-1; renderRoster(); updatePrice(); };
      [nm,no,sz].forEach(el=>el.addEventListener('focus',()=>previewRow(i)));
      row.append(n,nm,no,sz,x); rosterEl.appendChild(row);
    });
  }
  /* show a roster row's name and number on the back (preview only, not an undo step) */
  function previewRow(i){
    S.active=i; $$('.rrow').forEach((el,k)=>el.classList.toggle('on', k===i));
    const r=S.roster[i]; const objs=C.back.getObjects();
    const nm=objs.find(o=>o.role==='name'), nu=objs.find(o=>o.role==='num');
    if(r && nm && r.name){ nm.set('text', r.name.toUpperCase()); if(nm.curve) applyCurve(nm); else { nm.initDimensions(); nm.setCoords(); } }
    if(r && nu && r.number){ nu.set('text', r.number); nu.initDimensions(); nu.setCoords(); }
    if(S.view!=='back') setView('back');
    C.back.requestRenderAll(); scheduleUpdate();
  }
  $('#rAdd').onclick=()=>{ const last=S.roster[S.roster.length-1]; S.roster.push({name:'', number:'', size:last?last.size:'M'}); renderRoster(); updatePrice();
    const rows=$$('.rrow'); rows[rows.length-1].querySelector('input').focus(); };
  $('#rPaste').onclick=()=>{ const b=$('#rPasteBox'), show=b.hidden; b.hidden=!show; $('#rPasteApply').hidden=!show; if(show) b.focus(); };
  $('#rPasteApply').onclick=()=>{
    $('#rPasteBox').value.split(/\r?\n/).map(l=>l.trim()).filter(Boolean).forEach(l=>{
      const part=l.split(/\s*[,;\t]\s*/);
      let size=(part[2]||'').toUpperCase().replace(/^2XL$/,'XXL').replace(/^XXXL$/,'3XL');
      if(!SIZES.includes(size)) size='M';
      S.roster.push({name:(part[0]||'').slice(0,20), number:(part[1]||'').replace(/[^0-9]/g,'').slice(0,3), size:size});
    });
    $('#rPasteBox').value=''; $('#rPasteBox').hidden=true; $('#rPasteApply').hidden=true; renderRoster(); updatePrice();
  };
  function totals(){ const t={}; SIZES.forEach(v=>t[v]=S.sizes[v]); S.roster.forEach(r=>{ t[r.size]=(t[r.size]||0)+1; }); return t; }
  function extraCount(){ return SIZES.reduce((a,v)=>a+S.sizes[v],0); }

  /* sizes + price */
  const sizesEl=$('#sizes');
  Object.keys(S.sizes).forEach(sz=>{ const l=document.createElement('label'); l.textContent=sz; const i=document.createElement('input'); i.type='number'; i.min='0'; i.id='sz-'+sz; i.value=S.sizes[sz]; i.inputMode='numeric';
    i.oninput=()=>{ S.sizes[sz]=Math.max(0,parseInt(i.value,10)||0); updatePrice(); }; l.appendChild(i); sizesEl.appendChild(l); });
  function sidesUsed(){ return VIEWS.filter(([v])=>C[v].getObjects().length>0); }
  function updatePrice(){
    const tot=totals(), qty=Object.values(tot).reduce((a,b)=>a+b,0), used=sidesUsed();
    const Qs=$('#qtySum'); Qs.innerHTML='';
    const q1=document.createElement('span'); const qb=document.createElement('b'); qb.textContent=qty; q1.append(qb,' pieces in total');
    const q2=document.createElement('span'); q2.textContent=S.roster.length+(S.roster.length===1?' player':' players')+' + '+extraCount()+' extra';
    const q3=document.createElement('span'); q3.textContent=SIZES.filter(v=>tot[v]).map(v=>v+' × '+tot[v]).join(' · ')||'Add players or extra pieces to set the quantity';
    Qs.append(q1,q2,q3);
    const base=PRICING.base[S.product], deco=used.length*PRICING.side[S.method], unit=base+deco;
    let disc=0; PRICING.tiers.forEach(([m,d])=>{ if(qty>=m) disc=d; });
    const per=unit*(1-disc), total=per*qty;
    $('#pTotal').textContent=inr(total);
    $('#pPer').textContent= qty ? inr(per)+' per piece · '+qty+' pcs' : 'Add players or quantities to see the total';
    $('#pSave').textContent= disc&&qty ? 'Bulk discount '+Math.round(disc*100)+'% · you save '+inr(unit*disc*qty) : '';
    const L=$('#pLines'); L.innerHTML='';
    const add=(a,b)=>{ const x=document.createElement('span'); x.textContent=a; const y=document.createElement('span'); y.textContent=b; L.append(x,y); };
    add(PRODUCT_NAME[S.product]+' · '+colourName(S.colour), inr(base));
    used.forEach(([v,l])=>add(l+' · '+(S.method==='print'?'print':'embroidery'), inr(PRICING.side[S.method])));
    if(!used.length) add('No decoration yet', inr(0));
    const T=$('#tiers'); T.innerHTML=''; PRICING.tiers.forEach(([m,d])=>{ const s=document.createElement('span'); s.textContent=m+'+ pcs −'+Math.round(d*100)+'%'; if(disc===d&&qty>=m) s.className='on'; T.appendChild(s); });
    VIEWS.forEach(([v])=>{ const n=C[v].getObjects().length; $('#vc-'+v).textContent = n ? n+(n===1?' item':' items') : 'Blank'; });
    updateSpec(qty, per, total, disc, used, tot);
  }
  function describe(o){ if(o.type==='i-text'||o.type==='text') return '"'+o.text.replace(/\n/g,' ')+'" ('+o.fontFamily+', '+String(o.fill).toUpperCase()+(o.stroke&&o.strokeWidth?' outline '+String(o.stroke).toUpperCase():'')+(o.curve?', curved':'')+')';
    if(o.kind==='photo') return 'Uploaded image'+(o.filters&&o.filters.length?' (white removed)':''); if(o.kind==='clip') return 'Clipart ('+String(getFill(o)).toUpperCase()+')'; return o.type; }
  function updateSpec(qty, per, total, disc, used, tot){
    const lines=['FORCE DESIGN STUDIO · QUOTE REQUEST',
      'Product: '+PRODUCT_NAME[S.product]+' · '+colourName(S.colour)+(PRODUCT&&PRODUCT.fabric?' · Fabric '+PRODUCT.fabric:''),
      ...(Q.get('version')?['Version: '+Q.get('version')]:[]),
      'Decoration: '+(S.method==='print'?'Print (DTF)':'Embroidery')];
    VIEWS.forEach(([v,l])=>{ const objs=C[v].getObjects(); if(objs.length) lines.push(l+': '+objs.map(describe).join('; ')); });
    if(!used.length) lines.push('No artwork added yet');
    lines.push('Total: '+qty+' pcs · '+(SIZES.filter(v=>tot[v]).map(v=>v+' × '+tot[v]).join(', ')||'—'));
    if(S.roster.length){ lines.push('Team roster ('+S.roster.length+'):'); S.roster.forEach((r,i)=>lines.push('  '+(i+1)+'. '+(r.name||'(no name)').toUpperCase()+' · #'+(r.number||'-')+' · '+r.size)); }
    if(extraCount()) lines.push('Extra pieces without name/number: '+SIZES.filter(v=>S.sizes[v]).map(v=>v+' × '+S.sizes[v]).join(', '));
    if(!PRODUCT) lines.push('Estimate: '+inr(per)+' × '+qty+' = '+inr(total)+(disc?' (incl. '+Math.round(disc*100)+'% bulk discount)':''));
    const n=$('#notes').value.trim(); if(n) lines.push('Notes: '+n);
    $('#spec').value=lines.join('\n');
  }
  $('#wa').onclick=()=>{ const txt=$('#spec').value+'\n\nPlease share your quote. I will send the artwork files here.'; window.open('https://wa.me/919930155224?text='+encodeURIComponent(txt),'_blank','noopener'); };
  $('#notes').oninput=()=>updatePrice();
  $('#copy').onclick=e=>{ const b=e.currentTarget, txt=$('#spec').value; const done=m=>{ b.textContent=m; setTimeout(()=>b.textContent='Copy spec for quote',2200); };
    const fb=()=>{ const t=$('#spec'); t.focus(); t.select(); done('Selected · press Ctrl+C'); };
    try{ navigator.clipboard.writeText(txt).then(()=>done('Copied'),fb); }catch(_){ fb(); } };

  /* thumbnails + updates */
  let upT=null;
  function scheduleUpdate(){ clearTimeout(upT); upT=setTimeout(()=>{ if(dead) return; updatePrice(); refreshThumbs(); },160); }
  function refreshThumbs(){
    showGuide=false;
    VIEWS.forEach(([v])=>{ const c=C[v]; const act=c.getActiveObject(); try{ thumbs[v].src=c.toDataURL({format:'png', multiplier:144/c.getWidth()}); }catch(_){} });
    showGuide=true; cur().requestRenderAll();
  }

  /* keyboard */
  on(document,'keydown',e=>{
    const tag=(e.target.tagName||'').toLowerCase(); if(tag==='input'||tag==='textarea'||tag==='select') return;
    const o=sel(); if(o&&o.isEditing) return;
    if((e.key==='Delete'||e.key==='Backspace')&&o){ e.preventDefault(); removeSel(); }
    else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){ e.preventDefault(); e.shiftKey?redo():undo(); }
    else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){ e.preventDefault(); redo(); }
    else if(o && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key) && !o.locked){ e.preventDefault(); const d=e.shiftKey?10:2;
      if(e.key==='ArrowUp') o.top-=d; if(e.key==='ArrowDown') o.top+=d; if(e.key==='ArrowLeft') o.left-=d; if(e.key==='ArrowRight') o.left+=d; o.setCoords(); cur().requestRenderAll(); scheduleUpdate(); }
  });

  /* ===== starter design (example, editable) ===== */
  loading=true;
  const fa=AREA.front, ba=AREA.back;
  C.front.add(newText('TITANS',{left:fa.x+fa.w/2, top:fa.y+125, fontFamily:'Graduate', fontSize:44, fill:'#F2B705', stroke:'#FFFFFF', strokeWidth:1.5, curve:18}));
  applyCurve(C.front.getObjects()[0]);
  C.back.add(newText('SHARMA',{left:ba.x+ba.w/2, top:ba.y+48, fontSize:38, fill:'#FFFFFF', role:'name'}));
  C.back.add(newText('18',{left:ba.x+ba.w/2, top:ba.y+175, fontSize:150, fill:'#F2B705', stroke:'#FFFFFF', strokeWidth:3, role:'num'}));
  loading=false;
  addClip(CLIPART[0][1], 'right', {fill:'#F2B705', size:64});

  syncProduct(); setView('front'); resize(); applyGarmentAll();
  timers.push(setTimeout(()=>{ if(dead) return; VIEWS.forEach(([v])=>{ HIST[v]={stack:[], idx:-1}; pushHist(v); C[v].discardActiveObject(); }); setView('front'); updateHistBtns(); scheduleUpdate(); }, 400));
  if(document.fonts){
    Promise.all(FONTS.map(([f])=>document.fonts.load('40px "'+f+'"').catch(()=>{})).concat([document.fonts.load('800 40px "Saira Condensed"').catch(()=>{})]))
     .then(()=>document.fonts.ready).then(()=>{ if(dead) return; fabric.util.clearFabricFontCache(); VIEWS.forEach(([v])=>{ C[v].getObjects().forEach(o=>{ if(o.initDimensions){ if(o.curve) applyCurve(o); else { o.initDimensions(); o.setCoords(); } o.dirty=true; } }); C[v].requestRenderAll(); }); scheduleUpdate(); });
  }
  /* opened from a product's Customize button on the website */
  if(PRODUCT){
    const info=$('#prodInfo'); const t=document.createElement('strong'); t.textContent=PRODUCT.name; info.appendChild(t);
    if(PRODUCT.code){ const c=document.createElement('span'); c.textContent='Code '+PRODUCT.code; info.appendChild(c); }
    if(PRODUCT.fabric){ const f=document.createElement('span'); f.textContent='Fabric: '+PRODUCT.fabric; info.appendChild(f); }
    if(Q.get('version')){ const vv=document.createElement('span'); vv.textContent='Version: '+Q.get('version'); info.appendChild(vv); }
    $('#brandTitle').textContent='Customize · '+PRODUCT.name;
    $('#brandSub').textContent='Add names, numbers and logos on the front, back and sleeves';
    /* no prices for catalogue products: we quote from the design, pattern and quantity */
    ['#priceBox','#pLines','#tiers'].forEach(id=>{ $(id).hidden=true; });
    $('#contactNote').textContent='Send us your design and quantities. We will share the price, MOQ and delivery time based on your design and pattern.';
  }
  if(EMBED){
    $('#closeBtn').hidden=!opts.onClose; $('#closeBtn').onclick=()=>opts.onClose&&opts.onClose();
    $('#backBtn').hidden=!opts.onBack; $('#backBtn').onclick=()=>opts.onBack&&opts.onBack();
    $('#enq').hidden=!opts.onEnquiry; $('#enq').onclick=()=>{ const q=Object.values(totals()).reduce((a,b)=>a+b,0); opts.onEnquiry&&opts.onEnquiry({spec:$('#spec').value, quantity:q}); };
  }
  renderRoster();
  function renderVariants(){
    const box=$('#variants'); box.innerHTML=''; $('#varField').hidden=VARIANTS.length<2;
    VARIANTS.forEach((vr,i)=>{ const b=document.createElement('button'); b.type='button'; b.className='var'; b.title=vr.name; b.setAttribute('aria-pressed', i===S.variant?'true':'false');
      const im=document.createElement('img'); im.src=vr.thumb||vr.front; im.alt=''; im.loading='lazy'; const t=document.createElement('span'); t.textContent=vr.name; b.append(im,t);
      b.onclick=()=>{ if(S.variant===i) return; S.variant=i; S.sampled=false; $$('.var').forEach((x,k)=>x.setAttribute('aria-pressed', k===i?'true':'false')); setAreas(); applyGarmentAll(); scheduleUpdate(); };
      box.appendChild(b); });
  }
  /* Designs processed by tools/force-kit have front/back/left/right for every colour in catalog/.
     ?design=ppt-1&colour=peach,326 picks the design and the first colour id that exists. */
  if(CAT_PENDING){
    const did=Q.get('design'), want=(Q.get('colour')||'').split(',');
    let over={}; try{ over=JSON.parse(Q.get('sleeves')||'{}'); }catch(_){}
    fetch('/design-studio/catalog/catalog.json').then(r=>r.ok?r.json():[]).then(list=>{
      const d=(list||[]).find(x=>x.id===did);
      if(!d || !d.colours.length) throw new Error('design not in catalog');
      const base='/design-studio/catalog/'+d.id+'/';
      const kitSide=d.sleeveView==='side' && !Object.keys(over).length;   // side sleeves already in catalog/<design>/
      VARIANTS=d.colours.map(c=>{ const o=over[c.id], f=base+c.id;
        return {name:/^Colour \d+$/.test(c.name)?'Original':c.name, cat:true, side:!!o||kitSide, kitSide, front:f+'-front.webp', back:f+'-back.webp', left:o?o.left:f+'-left.webp', right:o?o.right:f+'-right.webp', thumb:f+'-thumb.webp'}; });
      const pick=want.map(w=>d.colours.findIndex(c=>c.id===w)).find(i=>i>=0);
      S.variant=pick===undefined?0:pick;
    }).catch(()=>{}).then(()=>{ if(dead) return; CAT_PENDING=false; renderVariants(); setAreas(); applyGarmentAll(); scheduleUpdate(); });
  } else if(PRODUCT){
    renderVariants();
    if(V().left||V().right){ setAreas(); applyGarmentAll(); }
  }

  return ()=>{
    dead=true; ac.abort(); ro.disconnect();
    clearTimeout(upT); clearTimeout(setT._h); timers.forEach(clearTimeout);
    VIEWS.forEach(([v])=>{ try{ C[v].dispose(); }catch(_){} });
  };

}
