
        (async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
var a=document.createElement("style");a.textContent=`
  body.minimised .Root__top-container {
    grid-template-areas:
    "global-nav global-nav global-nav"
    "main-view main-view main-view"
    "main-view main-view main-view" !important;
    gap: 0px !important;
  }
  body.minimised .Root__globalNav {
    margin-bottom: unset;
  }
  body.minimised .Root__nav-bar,
  body.minimised .Root__now-playing-bar,
  body.minimised .Root__right-sidebar {
    display: none !important;
  }
`;document.head.appendChild(a);var l="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z",m="M3.646 11.648l-2.418 2.417.707.707 2.418-2.418L5.999 14v-4h-4l1.647 1.648zm11.125-9.712l-.707-.707-2.418 2.418L10 2v4h4l-1.647-1.647 2.418-2.417z",r=()=>{let e=document.querySelector(".lyrics-config-button-container");if(!e)return;let t=e.querySelector("button.minimise");if(!t){t=document.createElement("button"),t.classList.add("minimise","lyrics-config-button"),t.setAttribute("type","button");let i=()=>{let n=document.body.classList.contains("minimised"),s=n?m:l,o=n?"Exit fullscreen":"Enter fullscreen";t.innerHTML=`<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: middle;"><path d="${s}"/></svg>`,t.setAttribute("aria-label",o),t.title=o};i(),t.addEventListener("click",()=>{document.body.classList.toggle("minimised"),i()}),e.appendChild(t)}},d=new MutationObserver(r);d.observe(document.body,{childList:!0,subtree:!0});
})();
