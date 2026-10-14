FORCE KIT TOOL  -  front photos se FRONT / BACK / LEFT SLEEVE / RIGHT SLEEVE banana
=====================================================================================

1) EK BAAR SETUP (Windows)
   - python.org se Python 3 install karo. Install ke time "Add Python to PATH" par tick zaroor lagana.
   - Command Prompt kholo aur ye chalao:
         pip install pillow numpy opencv-python

2) PHOTOS TAYAAR KARO
   - Google Drive se "New folder" (jisme ppt 1 ... ppt 31 hain) poora download karo aur unzip karo.
     Jaise:  D:\designs\ppt 1\red.png,  D:\designs\ppt 2\339.png ...
   - Har design ka ek alag folder ho. Folder ke andar har colour ki front photo (PNG).
   - Agar kisi colour ki BACK photo bhi hai, usi folder mein rakh do. Tool use khud pehchan lega,
     aur usi se baaki saare colours ka back banayega. Numbered jodi (339 front, 340 back) apne aap judti hai.
   - Jis design mein back photo nahi hai, uska back front se banaya jaata hai (collar, button,
     chest logo hata kar). Ye andaze wala back hai - asli back photo ho to zaroor daalna.

3) CHALAO
   - Command Prompt mein is folder (force-kit-tool) mein jao:
         cd D:\force-kit-tool
   - Phir:
         python force_catalog.py "D:\designs" "D:\catalog"
   - Har colour ke liye lagbhag 2 second lagte hain. 8000 photos = lagbhag 4-5 ghante.
   - Beech mein band ho jaye to wahi command dobara chalao. Jo design ban chuke hain wo skip ho jaate hain.

4) NATEEJA  (D:\catalog)
   - D:\catalog\ppt-2\red-front.webp, red-back.webp, red-left.webp, red-right.webp, red-thumb.webp
   - D:\catalog\catalog.json  = saare designs aur colours ki list (website editor isi ko padhta hai)
   - Design ka naam badalna ho to catalog.json mein "name" badal do.

5) WEBSITE PAR
   - Poora D:\catalog folder website par editor (index.html) ke saath "catalog" naam se upload karo:
         design/index.html
         design/catalog/catalog.json
         design/catalog/ppt-2/...
   - Editor khulte hi catalog.json padh kar saare designs dikha dega.

Dhyan do:
   - Ye tool Force polo template (jo aapki sab photos mein hai) ke liye set hai. Round neck,
     V-neck ya full sleeve ka template alag hai - unke liye ek sample bhejo, main set kar dunga.
   - Recolour kiye gaye backs ko ek nazar dekh lena. Kabhi-kabhi koi chhota hissa (jaise safed panel)
     thoda alag rang le sakta hai.

6) SIDE SLEEVE (force_sleeves.py)  -  jis design ki side-view photo hai
   - Front photo se bani sleeve seedhi hoti hai. Agar design ki ek SIDE photo hai (kisi bhi ek colour ki),
     to us se har colour ki asli dikhne wali LEFT aur RIGHT sleeve ban jaati hai.
   - Pehle force_catalog.py chala lo (design catalog mein hona chahiye). Phir:
         python force_sleeves.py "SIDE_PHOTO.png" "D:\designs\<design folder>" "D:\catalog\<design-id>"
     jaise:
         python force_sleeves.py "side ocean.png" "D:\designs\halftone pro" "D:\catalog\halftone-pro"
   - Ye har colour ki <colour>-left.webp aur <colour>-right.webp badal deta hai, aur catalog.json
     (aur us design ki .done file) mein "sleeveView": "side" laga deta hai. Haath se kuch nahi likhna.
   - Website editor "side" design par sleeve ka print area upar ki baanh par rakhta hai (AREA_SIDE_KIT).
   - force_catalog.py dobara chalane par bhi "side" bana rehta hai. Lekin agar kisi design ki .done file
     delete karke use dobara banaya, to sleeves phir se front wali ban jaayengi - force_sleeves.py dobara chalao.
   - Side photo ka background kaala/dark hona chahiye (tool use hata deta hai).
