"use client";

import React, { memo, useEffect, useRef } from 'react';
import './designStudio.css';
import { startStudio, StudioOptions } from './studioEngine';
import { BRAND_DETAILS } from '../../data/brandData';
import { getCDNUrl } from '../../utils/cdnUtils';

const FABRIC_SRC = 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.0/fabric.min.js';
const FONTS_HREF =
    'https://fonts.googleapis.com/css2?family=Anton&family=Barlow:wght@400;500;600;700&family=Bebas+Neue&family=Graduate&family=Oswald:wght@500;700&family=Pacifico&family=Permanent+Marker&family=Saira+Condensed:wght@600;700;800&family=Saira+Stencil+One&family=Teko:wght@500;600&display=swap';

let fabricPromise: Promise<void> | null = null;

// fabric.js 5 is loaded once from the CDN (its npm build pulls in node-only canvas/jsdom).
function loadFabric(): Promise<void> {
    if ((window as unknown as { fabric?: unknown }).fabric) return Promise.resolve();
    if (!fabricPromise) {
        fabricPromise = new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = FABRIC_SRC;
            s.async = true;
            s.onload = () => resolve();
            s.onerror = () => {
                fabricPromise = null;
                reject(new Error('Could not load the design editor'));
            };
            document.head.appendChild(s);
        });
    }
    return fabricPromise;
}

function loadFonts() {
    if (document.getElementById('fds-fonts')) return;
    const link = document.createElement('link');
    link.id = 'fds-fonts';
    link.rel = 'stylesheet';
    link.href = FONTS_HREF;
    document.head.appendChild(link);
}

type DesignStudioProps = Omit<StudioOptions, 'params'> & {
    /** Product settings: embed, name, code, fabric, front, back, left, right, variants, design, colour, sleeves */
    params: URLSearchParams;
};

/**
 * Force Design Studio: the Customize editor. The markup is static; studioEngine.ts wires it up
 * once on mount, so the component never re-renders while the customer is designing.
 */
function DesignStudio({ params, onClose, onBack, onEnquiry }: DesignStudioProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    // keep the latest callbacks without restarting the editor
    const callbacks = useRef({ onClose, onBack, onEnquiry });
    callbacks.current = { onClose, onBack, onEnquiry };

    useEffect(() => {
        let stop: (() => void) | undefined;
        let cancelled = false;
        loadFonts();
        loadFabric()
            .then(() => {
                if (cancelled || !rootRef.current) return;
                stop = startStudio(rootRef.current, {
                    params,
                    onClose: callbacks.current.onClose && (() => callbacks.current.onClose?.()),
                    onBack: callbacks.current.onBack && (() => callbacks.current.onBack?.()),
                    onEnquiry: callbacks.current.onEnquiry && ((d) => callbacks.current.onEnquiry?.(d)),
                });
            })
            .catch((err) => console.error(err));
        return () => {
            cancelled = true;
            stop?.();
        };
    }, [params]);

    return (
        <div className="fds" ref={rootRef}>
            <div className="app">
                <header className="top">
                    <div className="brand">
                        <div className="mark" aria-hidden="true"><img src={getCDNUrl(BRAND_DETAILS.logo)} alt="" width={44} height={44} /></div>
                        <div>
                            <h1 id="brandTitle">Force Design Studio</h1>
                            <p id="brandSub">Design your team polo or tee · Force Sports &amp; Wears India</p>
                        </div>
                    </div>
                    <div className="hist">
                        <button type="button" className="btn" id="undo" title="Undo (Ctrl+Z)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 14 4 9l5-5" /><path d="M4 9h10a6 6 0 0 1 0 12h-3" /></svg>Undo
                        </button>
                        <button type="button" className="btn" id="redo" title="Redo (Ctrl+Y)">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 14 5-5-5-5" /><path d="M20 9H10a6 6 0 0 0 0 12h3" /></svg>Redo
                        </button>
                        <button type="button" className="btn" id="backBtn" hidden>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>Back to products
                        </button>
                        <button type="button" className="btn" id="closeBtn" hidden>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>Close
                        </button>
                    </div>
                </header>

                {/* TOOLS */}
                <aside className="pane tools" aria-label="Design tools">
                    <div className="tabs" role="tablist">
                        <button type="button" role="tab" data-tab="product" aria-selected="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M8 3 3 6l2 5 2-1v11h10V10l2 1 2-5-5-3a4 4 0 0 1-8 0Z" /></svg>Product
                        </button>
                        <button type="button" role="tab" data-tab="text" aria-selected="false">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 6V4h14v2M12 4v16M9 20h6" /></svg>Text
                        </button>
                        <button type="button" role="tab" data-tab="upload" aria-selected="false">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m3 16 5-5 4 4 3-3 6 6" /><circle cx="16" cy="9" r="1.6" /></svg>Upload
                        </button>
                        <button type="button" role="tab" data-tab="clipart" aria-selected="false">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="m12 3 2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7Z" /></svg>Clipart
                        </button>
                    </div>

                    <section className="tabpanel" data-panel="product">
                        <h2>Garment</h2>
                        <div className="prodinfo" id="prodInfo" hidden />
                        <div className="field" id="varField" hidden><span>Colour</span><div className="variants" id="variants" /></div>
                        <div className="seg" data-seg="product">
                            <button type="button" data-val="halftone">Halftone Pro polo</button>
                            <button type="button" data-val="polo">Plain polo</button>
                            <button type="button" data-val="tee">Round neck tee</button>
                        </div>
                        <div className="field" id="colField">
                            <span id="colLbl">Colourway</span>
                            <div className="swatches" id="ways" />
                            <div className="swatches" id="swatches" />
                            <div className="garname" id="garname" />
                        </div>
                        <h2>Decoration</h2>
                        <div className="seg" data-seg="method">
                            <button type="button" data-val="print">Print (DTF)</button>
                            <button type="button" data-val="embroidery">Embroidery</button>
                        </div>
                        <p className="sub" id="methodNote" />
                        <h2>Quick add</h2>
                        <div className="quick">
                            <button type="button" className="btn wide" id="qNameNum">Add player name &amp; number on back</button>
                            <button type="button" className="btn wide" id="qChest">Add team name on front chest</button>
                        </div>
                    </section>

                    <section className="tabpanel" data-panel="text" hidden>
                        <div id="textAdd" className="quick">
                            <h2>Add text</h2>
                            <textarea id="newText" rows={2} placeholder="Type your text" defaultValue="TEAM NAME" />
                            <button type="button" className="btn pri wide" id="addText">Add text to the shirt</button>
                        </div>
                        <div id="textEdit" hidden className="quick">
                            <h2>Edit text</h2>
                            <textarea id="tContent" rows={2} aria-label="Text" />
                            <label className="field"><span>Font</span><select id="tFont" /></label>
                            <div className="field"><span>Colour</span><div className="color-row" id="tFill" /></div>
                            <div className="field"><span>Outline</span><div className="color-row" id="tStroke" /></div>
                            <label className="field"><span>Outline thickness</span><input type="range" id="tStrokeW" min="0" max="8" step="0.5" /></label>
                            <div className="two">
                                <label className="field"><span>Size</span><input type="range" id="tSize" min="12" max="160" step="1" /></label>
                                <label className="field"><span>Letter spacing</span><input type="range" id="tSpace" min="-100" max="600" step="10" /></label>
                            </div>
                            <label className="field"><span>Arc / curve</span><input type="range" id="tCurve" min="-60" max="60" step="1" /></label>
                            <div className="row">
                                <label className="check"><input type="checkbox" id="tBold" /> Bold</label>
                                <label className="check"><input type="checkbox" id="tItalic" /> Italic</label>
                            </div>
                            <button type="button" className="btn wide" id="addText2">Add another text</button>
                        </div>
                    </section>

                    <section className="tabpanel" data-panel="upload" hidden>
                        <h2>Upload your logo or photo</h2>
                        <p className="sub">PNG, JPG or SVG. You can also drag a file onto the shirt or paste an image.</p>
                        <span className="btn pri wide file">Choose image<input type="file" id="upFile" accept="image/*" aria-label="Upload image" /></span>
                        <div id="imgEdit" hidden className="quick">
                            <h2>Edit image</h2>
                            <label className="check"><input type="checkbox" id="iRemoveWhite" /> Remove white background</label>
                            <label className="field"><span>Opacity</span><input type="range" id="iOpacity" min="0.1" max="1" step="0.01" /></label>
                        </div>
                        <div className="empty">Tip: high-resolution logos print and embroider best. We check every file before production.</div>
                    </section>

                    <section className="tabpanel" data-panel="clipart" hidden>
                        <h2>Clipart</h2>
                        <div className="clips" id="clips" />
                        <div id="clipEdit" hidden className="quick">
                            <h2>Clipart colour</h2>
                            <div className="color-row" id="cFill" />
                        </div>
                    </section>
                </aside>

                {/* CANVAS */}
                <main className="work" aria-label="Design canvas">
                    <div className="actions" id="actions" />
                    <div className="boardwrap" id="boardwrap">
                        <div className="board" id="board">
                            <canvas id="cv-front" /><canvas id="cv-back" /><canvas id="cv-left" /><canvas id="cv-right" />
                            <div className="drop" id="drop" hidden>Drop to add to the shirt</div>
                        </div>
                    </div>
                    <div className="views" id="views" role="group" aria-label="Garment side" />
                </main>

                {/* ORDER */}
                <aside className="pane order" aria-label="Price and order">
                    <div className="price" id="priceBox">
                        <span className="lbl">Estimated total</span>
                        <span className="big" id="pTotal">₹0</span>
                        <span className="per" id="pPer" />
                        <span className="save" id="pSave" />
                    </div>
                    <div className="lines" id="pLines" />
                    <div className="field">
                        <span>Team roster</span>
                        <p className="hint">One row per player: name, number and size. Click a row to preview it on the back.</p>
                        <div className="roster" id="roster" />
                        <div className="two">
                            <button type="button" className="btn" id="rAdd">+ Add player</button>
                            <button type="button" className="btn" id="rPaste">Paste a list</button>
                        </div>
                        <textarea id="rPasteBox" rows={4} hidden aria-label="Paste players" placeholder={'One player per line: NAME, NUMBER, SIZE\nSHARMA, 18, L\nKHAN, 7, XL'} />
                        <button type="button" className="btn" id="rPasteApply" hidden>Add these players</button>
                    </div>
                    <div className="field"><span>Extra pieces without name or number</span><div className="sizes" id="sizes" /></div>
                    <div className="qtysum" id="qtySum" aria-live="polite" />
                    <div className="tiers" id="tiers" />
                    <label className="field"><span>Special instructions</span><textarea id="notes" rows={2} placeholder="e.g. Need delivery by 20 Oct, sponsor logo on right sleeve" /></label>
                    <div className="field"><span>Design spec</span><textarea id="spec" className="spec" readOnly /></div>
                    <button type="button" className="btn wa wide" id="wa">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" /></svg>Send design on WhatsApp
                    </button>
                    <button type="button" className="btn wide" id="enq" hidden>Send as enquiry</button>
                    <button type="button" className="btn wide" id="copy">Copy spec for quote</button>
                    <p className="contact" id="contactNote">Or call <b>+91 99301 55224</b>. Final price is confirmed after artwork check.</p>
                </aside>
            </div>
        </div>
    );
}

// The editor owns this DOM after mount; skip re-renders unless the product settings change.
export default memo(DesignStudio, (a, b) => a.params.toString() === b.params.toString());
