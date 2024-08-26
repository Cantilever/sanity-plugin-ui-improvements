import { definePlugin } from 'sanity';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ":root,[data-scheme=light]{--border-color:#c5c8ce;--section-background-color:#fff;--box-shadow:rgba(0,0,0,.16) 0px 1px 4px;--box-shadow-focus:rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px;--scroller-background:#f2f5f8;--dashed-border-color:#e0e0e0;--text-color:#000;--input-background:#fff;--input-border:#c5c8ce;--active-color:#556bfc}@media (prefers-color-scheme:dark){:root{--border-color:#393d4f;--section-background-color:#1c1e29;--box-shadow-focus:rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px;--scroller-background:#161820;--dashed-border-color:#2a2d3a;--text-color:#fff;--input-background:#1c1e29;--input-border:#393d4f}}[data-ui=DialogCard]{max-width:none!important}[data-ui=Grid]{& td{min-width:200px!important}}[data-ui=Container]{max-width:75rem!important}.pt-block{max-width:none!important}form>[data-ui=Stack]{grid-gap:30px;&>[data-ui=Stack]{background:var(--section-background-color);border:1px solid var(--border-color);border-radius:5px;box-shadow:var(--box-shadow);color:var(--card-fg-color);padding:10px 20px 20px;transition:all .5s ease;&:focus-within{box-shadow:var(--box-shadow-focus)}}}[data-testid=document-panel-scroller]{background:var(--scroller-background)}[data-ui=ArrayInput__content]>[data-ui=Card]>div>div{border-bottom:1px dashed var(--dashed-border-color);&:last-child{border-bottom:none}}a,button{&[data-pressed],&[data-selected]{background-color:var(--active-color);color:#fff;span,svg{color:#fff}svg{fill:#fff;path{stroke:#fff}}}}[data-ui=DocumentListPane],[data-ui=ListPane]{& ul li{border-bottom:1px solid var(--dashed-border-color);padding:0;a{margin-bottom:0;>div{padding:10px}}&:first-child{border-top:1px solid var(--dashed-border-color)}}}[data-ui=DocumentListPane]{& ul li:last-child{border-bottom:none}& [data-as=input]{background:var(--input-background);border:1px solid var(--input-border);border-radius:5px;color:var(--text-color);padding:10px}}[data-testid=field-groups]{background-color:transparent!important;border-bottom:1px solid var(--border-color);& [data-ui=Tab]{border:1px solid var(--border-color);box-shadow:var(--box-shadow)!important;padding:15px}}";
styleInject(css_248z);

const sanityUIImprovements = definePlugin({
  name: 'sanity-plugin-ui-improvements',
});

export { sanityUIImprovements };
//# sourceMappingURL=index.esm.js.map
