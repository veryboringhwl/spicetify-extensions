
        (async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
var xe=Object.create;var K=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var ve=Object.getOwnPropertyNames;var we=Object.getPrototypeOf,Me=Object.prototype.hasOwnProperty;var V=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Ce=(n,e,t,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of ve(e))!Me.call(n,a)&&a!==t&&K(n,a,{get:()=>e[a],enumerable:!(o=_e(e,a))||o.enumerable});return n};var c=(n,e,t)=>(t=n!=null?xe(we(n)):{},Ce(e||!n||!n.__esModule?K(t,"default",{value:n,enumerable:!0}):t,n));var b=V((Re,X)=>{X.exports=Spicetify.ReactJSX});var I=V((Ee,ee)=>{ee.exports=Spicetify.React});var Z=V((Ie,ne)=>{ne.exports=Spicetify.ReactDOM});var Y=c(b(),1),w=(n,e=16)=>({size:t=e,fill:o="currentColor"})=>(0,Y.jsx)("svg",{viewBox:`0 0 ${e} ${e}`,width:t,height:t,fill:o,dangerouslySetInnerHTML:{__html:n}}),y={editButton:'<path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z"/>',settings:'<path d="M8 5.36a2.68 2.68 90 100 5.36 2.68 2.68 90 000-5.36zM6.7 8.04a1.34 1.34 90 112.68 0 1.34 1.34 90 01-2.68 0zM11.55 3.21a.95.9487 90 01-1.1042-.76l-.3484-1.8974a.4744.4744 90 00-.3685-.3779 8.1365 8.1365 90 00-3.3755 0 .4744.4744 90 00-.3685.3779l-.3471 1.8974a.9514.9514 90 01-1.2542.7209l-1.8211-.6486a.4757.4757 90 00-.5119.1273c-.7625.8402-1.34 1.8318-1.6911 2.9118a.4717.4717 90 00.1447.5065l1.4767 1.2475a.9434.9434 90 010 1.4418l-1.4767 1.2475a.4717.4717 90 00-.1447.5065A8.0212 8.0212 90 002.0502 13.4268a.4757.4757 90 00.5119.1273l1.8224-.6486a.9487.9487 90 011.2542.7209l.3457 1.8974c.0348.1876.1809.3377.3685.3765a8.1405 8.1405 90 003.3768 0 .473.473 90 00.3672-.3765l.3484-1.8974a.9514.9514 90 011.2542-.7209l1.8211.6486c.1809.0643.3832.0134.5119-.1273.7625-.8402 1.34-1.8318 1.6911-2.9118a.4717.4717 90 00-.1447-.5065l-1.4767-1.2475a.942.942 90 010-1.4418l1.4767-1.2475a.4717.4717 90 00.1447-.5065A8.0199 8.0199 90 0014.0298 2.6532a.4757.4757 90 00-.5119-.1273l-1.8224.6486a.9514.9514 90 01-.1487.0402zm-8.8708.7772 1.2556.4462a2.2914 2.2914 90 003.0217-1.742l.2372-1.2998a6.8407 6.8407 90 011.6951 0l.2385 1.2998a2.2887 2.2887 90 003.0217 1.742L13.4 3.9892c.3417.4476.6258.9353.8442 1.4526l-1.0104.8536a2.2834 2.2834 90 000 3.4894l1.0117.8536a6.6866 6.6866 90 01-.8442 1.4526l-1.2556-.4476a2.2914 2.2914 90 00-3.0217 1.742l-.2385 1.2998a6.8327 6.8327 90 01-1.6951 0l-.2372-1.2998a2.2887 2.2887 90 00-3.0217-1.742L2.68 12.0908a6.6826 6.6826 90 01-.8442-1.4526l1.0104-.8549a2.2834 2.2834 90 000-3.488l-1.0117-.8536c.2198-.5172.5038-1.005.8442-1.4526z"/>',github:'<path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>',close:'<path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"/>',warning:'<path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A1 1 0 0 0 3 21h18a1 1 0 0 0 .884-1.5zM13 18h-2v-2h2zm-2-4V9h2l0 5z"/>',more:'<path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>',questionMark:'<path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333ZM12 15.5a1 1 0 110 2 1 1 0 010-2Zm0-8.75a2.75 2.75 0 012.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 01-1.5 0c0-1.01.297-1.574 1.051-2.359l.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 00-2.493-.128l-.007.128a.75.75 0 01-1.5 0A2.75 2.75 0 0112 6.75Z"/>',dropdown:'<path d="M20.4614 6.3469a1.506 1.506 90 00-2.1125.1919L12 14.1564l-6.349-7.6175a1.4997 1.4997 90 10-2.3028 1.922L10.8486 17.4613a1.4992 1.4992 90 002.3028 0L20.6518 8.4608A1.5019 1.5019 90 0020.4614 6.3469Z"/>',palette:'<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',duplicate:'<path d="M15 4.5 13 2.5h-1.5L8.5 0H2C1.5 0 1 .5 1 1v10.5c0 .5.5 1 1 1h2.5v2.5c0 .5.5 1 1 1h8.5c.6 0 1-.5 1-1ZM2.5 1.5h5v1c0 .5.5 1 1 1L9.5 3.5l0 7.5H2.5zM6 14.5v-2h4c.5 0 1-.5 1-1V4h1v1c0 .5 0 .5.5.5h1l0 9z"/>'};y.React={editButton:w(y.editButton,24),settings:w(y.settings,16),github:w(y.github,96),close:w(y.close,32),warning:w(y.warning,24),more:w(y.more,16),questionMark:w(y.questionMark,24),dropdown:w(y.dropdown,24),palette:w(y.palette,24),duplicate:w(y.duplicate,512)};var O=y;(()=>{let n=`.Modal__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(var(--spice-rgb-shadow), 0.5);
  border-radius: 7px;
}

.Modal {
  background-color: unset;
}

.Modal__container {
  display: flex;
  flex-direction: column;
  background-color: rgba(var(--spice-rgb-main), 0.9) !important;
  backdrop-filter: blur(20px) saturate(1.4) brightness(1.2);
  width: 500px;
  max-height: 500px;
  border-radius: 7px;
  box-shadow: 0 0px 20px rgba(var(--spice-rgb-shadow), 0.5) !important;
}

.Modal__container--large {
  max-height: 80vh;
  width: clamp(550px, 60vw, 650px);
}

.Modal__header {
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 12px;
  border-bottom: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);
}

.Modal__titleContainer {
  display: flex;
  gap: 8px;
}

.Modal__icon {
  display: flex;
  align-items: center;
}

.Modal__title {
  display: flex;
}

.Modal__buttonContainer {
  display: flex;
  align-items: center;
  gap: 8px;
}

.Modal__buttonContainer .Modal__button {
  background-color: var(--spice-highlight);
  border-radius: 8px;
  height: 34px;
  cursor: pointer;
  padding: 8px;
  border: 0;
}

.Modal__buttonContainer .Modal__button:hover {
  transform: scale(1.1);
}

.Modal__buttonContainer .Modal__button:active {
  transform: scale(0.9);
}

.Modal__content {
  display: flex;
  padding: 16px 24px !important;
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}`,e="esbuild-inline-css-D--GitHub-spicetify-extensions-shared-popupModal-scss";if(document.getElementById(e))return;let t=document.createElement("style");t.id=e,t.textContent=n,document.head.appendChild(t)})();var A=c(I(),1),te=c(Z(),1);var u=c(b(),1),C=null,T=null,G=()=>{T&&C&&(T.unmount(),C.remove(),document.body.style.overflow="auto",document.removeEventListener("keydown",oe),document.removeEventListener("mousedown",ae),C=null,T=null)},oe=n=>{n.key==="Escape"&&G()},ae=n=>{n.target.classList.contains("Modal__overlay")&&G()},ie=({title:n="",content:e,isLarge:t=!0,buttons:o=!1,icon:a=""}={})=>{C=document.getElementById("popup-modal"),C||(C=document.createElement("popup-modal"),C.id="popup-modal",document.body.appendChild(C)),T=te.default.createRoot(C),document.body.style.overflow="hidden",document.addEventListener("keydown",oe),document.addEventListener("mousedown",ae);let s=(0,A.memo)(()=>(0,u.jsx)("div",{className:"Modal__overlay",children:(0,u.jsx)("div",{className:"Modal",children:(0,u.jsxs)("div",{className:`Modal__container${t?" Modal__container--large":""}`,children:[(0,u.jsxs)("div",{className:"Modal__header",children:[(0,u.jsxs)("div",{className:"Modal__titleContainer",children:[(0,u.jsx)("div",{className:"Modal__icon",children:a}),(0,u.jsx)("h1",{className:"Modal__title",children:n})]}),(0,u.jsxs)("div",{className:"Modal__buttonContainer",children:[o&&(0,u.jsx)(Spicetify.ReactComponent.TooltipWrapper,{label:"GitHub",placement:"top",children:(0,u.jsx)("button",{type:"button",className:"Modal__button Modal__button--github",onClick:()=>window.open("https://github.com/veryboringhwl/spicetify"),children:(0,u.jsx)(O.React.github,{size:18})})}),(0,u.jsx)(Spicetify.ReactComponent.TooltipWrapper,{label:"Close",placement:"top",children:(0,u.jsx)("button",{type:"button",className:"Modal__button Modal__button--close",onClick:()=>G(),children:(0,u.jsx)(O.React.close,{size:18})})})]})]}),(0,u.jsx)("div",{className:"Modal__content",children:A.default.isValidElement(e)?e:A.default.createElement(e)})]})})}));T.render((0,u.jsx)(s,{}))};ie.hide=G;var re=ie;var _=c(I(),1);var q=c(I(),1),se=c(Z(),1),F=c(b(),1);function De({titleText:n,descriptionText:e,cancelText:t="Cancel",confirmText:o="Confirm",onConfirm:a,onClose:s,onOpen:p,onOutside:M,confirmLabel:x,allowHTML:g}){let L=q.default.memo(()=>{let[N,z]=Spicetify.React.useState(!0),P=document.querySelector(".ReactModalPortal:last-of-type");return q.default.useEffect(()=>{N&&p?.()},[N,p]),(0,F.jsx)(Spicetify.ReactComponent.RemoteConfigProvider,{configuration:Spicetify.Platform.RemoteConfiguration,children:(0,F.jsx)(Spicetify.ReactComponent.ConfirmDialog,{titleText:n,descriptionText:e,cancelText:t,confirmText:o,isOpen:N,onOutside:()=>{z(!1),M?.(),P?.remove()},onClose:()=>{z(!1),s?.(),P?.remove()},onConfirm:()=>{z(!1),a?.(),P?.remove()},confirmLabel:x,allowHTML:g})})});se.default.createRoot(document.createElement("div")).render((0,F.jsx)(L,{}))}var le=De;(()=>{let n=`.themeOptionDropdown {
  position: relative;
  min-width: 100px;
  width: fit-content;
  font-size: 14px !important;
  cursor: pointer;
}
.themeOptionDropdown.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.themeOptionDropdown .themeOptionDropdownButton {
  display: flex;
  border: none;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  background: rgba(var(--spice-rgb-selected-row), 0.1);
  color: rgba(var(--spice-rgb-text), 0.8);
  border-radius: 4px;
  height: 32px;
  width: 100%;
}
.themeOptionDropdown .themeOptionDropdownArrow {
  display: flex;
}
.themeOptionDropdown .themeOptionDropdownMenu {
  background: var(--spice-card);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: rgba(var(--spice-rgb-text), 0.8);
  border: solid rgba(var(--spice-rgb-subtext), 0.1) 1px;
  overflow-y: scroll;
  scrollbar-width: none;
  max-height: 250px;
}
.themeOptionDropdown .themeOptionDropdownMenu .themeOptionDropdownOptions {
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 32px;
  cursor: pointer;
}
.themeOptionDropdown .themeOptionDropdownMenu .themeOptionDropdownOptions:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.themeOptionDropdown .themeOptionDropdownMenu .themeOptionDropdownOptions:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.themeOptionDropdown .themeOptionDropdownMenu .themeOptionDropdownOptions:hover, .themeOptionDropdown .themeOptionDropdownMenu .themeOptionDropdownOptions.selected {
  background: var(--spice-button);
}`,e="esbuild-inline-css-D--GitHub-spicetify-extensions-shared-dropdown-scss";if(document.getElementById(e))return;let t=document.createElement("style");t.id=e,t.textContent=n,document.head.appendChild(t)})();var R=c(I(),1);var D=c(b(),1),ke=(0,R.memo)(({value:n,options:e,onChange:t,disabled:o})=>{let a=(0,R.useId)(),s=(0,R.useRef)(null),p=`--dropdown-anchor-${a.replace(/:/g,"id")}`,M=g=>{t?.({target:{value:g.value}}),s.current?.hidePopover()},x=e.find(g=>g.value===n)?.label||"Select...";return(0,D.jsxs)("div",{className:`themeOptionDropdown ${o?"disabled":""}`,children:[(0,D.jsxs)("button",{className:"themeOptionDropdownButton",popovertarget:a,popovertargetaction:"toggle",disabled:o,style:{anchorName:p},children:[(0,D.jsx)("div",{className:"themeOptionDropdownText",children:x}),(0,D.jsx)("div",{className:"themeOptionDropdownArrow",children:(0,D.jsx)(O.React.dropdown,{size:12})})]}),(0,D.jsx)("div",{popover:"auto",id:a,ref:s,className:"themeOptionDropdownMenu",style:{top:`calc(anchor(${p} bottom) + 4px)`,left:`anchor(${p} left)`,width:`anchor-size(${p} width)`},children:e.map(g=>(0,D.jsx)("div",{className:`themeOptionDropdownOptions ${n===g.value?"selected":""}`,onClick:()=>M(g),children:g.label},g.value))})]})}),de=ke;var r=c(b(),1);async function pe(n=0,e=50,t=[]){let o=await Spicetify.Platform.LibraryAPI.getContents({offset:n,limit:e}),a=o.items.filter(s=>s?.type==="playlist"&&s?.isOwnedBySelf);return t.push(...a),o.items.length===e&&o.totalLength>n+e?pe(n+e,e,t):t}async function ce(n,e=0,t=100,o=[]){let a=await Spicetify.Platform.PlaylistAPI.getContents(n,{offset:e,limit:t}),s=a.items,p=o.concat(s);return s.length===t&&a.totalLength>e+t?ce(n,e+t,t,p):{items:p,totalLength:p.length}}async function Oe(n){let e=new Map,t=new Map;n.forEach(a=>{if(a?.album?.uri){let s=a.album.uri;t.has(s)||t.set(s,[]),t.get(s).push(a.uri)}});let o=Array.from(t.keys()).map(async a=>{let s=await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum,{uri:a,locale:Spicetify.Locale.getLocale(),offset:0,limit:500}),p=s.data?.albumUnion?.tracksV2||s.data?.albumUnion?.tracks;p?.items&&p.items.forEach(M=>{if(M?.track?.uri){let x=M.track.playcount;e.set(M.track.uri,x!=null?Number.parseInt(x,10):"N/A")}})});return await Promise.allSettled(o),Object.fromEntries(e)}var Le=n=>{if(!n)return"";let t=["live","remix","mix","acoustic","instrumental","radio","version","ver","edit","mono","stereo","deluxe","intro","outro","remastered","bonus","feat","ft","explicit","clean","piano","guitar","cover","original","extended","album","single"].join("|"),o=new RegExp(`\\b(${t})\\b`,"gi");return n.toLowerCase().replace(/\(.*?\)|\[.*?\]/g,"").replace(o,"").replace(/-/g," ").replace(/[^\p{L}\p{N}\s]/gu,"").replace(/\s+/g," ").trim()};function Ne({selectedPlaylist:n}){let[e,t]=(0,_.useState)([]),[o,a]=(0,_.useState)(n?.uri||""),[s,p]=(0,_.useState)([]),[M,x]=(0,_.useState)({}),[g,L]=(0,_.useState)({exact:[],likely:[],possible:[]});(0,_.useEffect)(()=>{(async()=>{try{let i=await pe();t(i),n&&i.some(m=>m.uri===n.uri)?a(n.uri):a(n?.uri||"")}catch(i){console.error("Error fetching playlists:",i)}})()},[n]);let N=(0,_.useCallback)(i=>{let m=i.filter(l=>l?.uri&&l.name),d=(l,E,ye=U=>U)=>{let U=l.reduce((k,Q)=>{let j=ye(E(Q)),J=k.get(j)||[];return J.push(Q),k.set(j,J),k},new Map);return Array.from(U.values()).filter(k=>k.length>1).map(k=>({sourceTrack:k[0],duplicates:k.slice(1)}))},f=d(m,l=>l.uri),v=new Set(f.flatMap(l=>[l.sourceTrack.uri,...l.duplicates.map(E=>E.uri)])),h=m.filter(l=>!v.has(l.uri)),B=d(h,l=>l.name,l=>l?.toLowerCase().trim()),S=new Set(B.flatMap(l=>[l.sourceTrack.uri,...l.duplicates.map(E=>E.uri)])),be=h.filter(l=>!S.has(l.uri)),he=d(be,l=>l.name,Le);L({exact:f,likely:B,possible:he})},[]),z=async(i,m,d)=>{le({titleText:"Remove Track",descriptionText:"Are you sure you want to remove this Track? You will not be able to recover it!",confirmText:"Remove",onConfirm:async()=>{await Spicetify.Platform.PlaylistAPI.remove(o,[{uri:d.uri,uid:d.uid}]),L(f=>{let v=[...f[i]],h=v[m];if(h){h.duplicates=h.duplicates.filter(S=>!(S.uri===d.uri&&S.uid===d.uid));let B=v.filter(S=>S.duplicates.length>0);return{...f,[i]:B}}return f}),p(f=>f.filter(v=>!(v.uri===d.uri&&v.uid===d.uid)))}})};(0,_.useEffect)(()=>{(async()=>{let i={exact:[],likely:[],possible:[]};if(!o){p([]),L(i),x({});return}p([]),L(i),x({});try{let d=(await ce(o)).items;if(p(d),N(d),d.length>0&&Spicetify.GraphQL&&Spicetify.Locale){let f=await Oe(d);x(f)}}catch(m){console.error("Error fetching playlist tracks:",m)}})()},[o,N]);let P=({track:i})=>{let m=M[i.uri],d=typeof m=="number"?m.toLocaleString():m;return(0,r.jsxs)("div",{className:"find-dupes-group__details",children:[i.artists?`Artists: ${i.artists.map(f=>f.name).join(", ")}`:"",i.album?.name&&(0,r.jsxs)("span",{className:"find-dupes-group__album",children:[" Album: ",i.album.name]}),m!==void 0&&(0,r.jsxs)("span",{className:"find-dupes-group__playcount",children:[" ","Plays: ",d??"Loading..."]})]})},H=(i,m,d)=>(0,r.jsxs)("div",{className:"find-dupes__group-section",children:[(0,r.jsx)("p",{className:"find-dupes__group-section-heading",children:`${i} (${m.length} found)`}),(0,r.jsx)("ul",{className:"find-dupes__group-list",children:m.map((f,v)=>(0,r.jsxs)("li",{className:`find-dupes-group find-dupes-group--${d}`,children:[(0,r.jsxs)("div",{className:"find-dupes-group__source",children:["Source: ",f.sourceTrack.name,(0,r.jsx)(P,{track:f.sourceTrack})]}),(0,r.jsx)("div",{className:"find-dupes-group__duplicates-heading",children:"Duplicates:"}),(0,r.jsx)("ul",{className:"find-dupes-group__duplicates-list",children:f.duplicates.map(h=>(0,r.jsxs)("li",{className:"find-dupes-group__duplicate-item",children:[(0,r.jsxs)("div",{className:"find-dupes-group__duplicate-content",children:[(0,r.jsx)("span",{className:"find-dupes-group__duplicate-name",children:h.name}),(0,r.jsx)(P,{track:h})]}),(0,r.jsx)("button",{className:"find-dupes-group__delete-button",onClick:()=>z(d,v,h),children:"Delete"})]},h.uri+(h.uid||"")))})]},`${f.sourceTrack.uri}-${v}`))})]}),W=e.find(i=>i.uri===o),fe=W?.name||n?.name||"Selected Playlist",ge=e.map(i=>({value:i.uri,label:i.name}));return(0,r.jsxs)("div",{className:"find-dupes",children:[(0,r.jsxs)("div",{className:"find-dupes__header",children:[(0,r.jsx)("span",{className:"find-dupes__header-label",children:"Select Playlist:"}),(0,r.jsx)(de,{value:o,options:ge,onChange:i=>a(i.target.value),disabled:e.length===0})]}),o&&(0,r.jsxs)(r.Fragment,{children:[W&&(0,r.jsxs)("p",{className:"find-dupes__details",children:["Playlist: ",fe," (",s.length," tracks)"]}),H("Exact Duplicates (Same URI)",g.exact,"exact"),H("Likely Duplicates (Same Name)",g.likely,"likely"),H("Possible Duplicates (Similar Name)",g.possible,"possible")]})]})}var ue=Ne;(()=>{let n=`.find-dupes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.find-dupes__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.find-dupes__header-label {
  color: var(--spice-text);
  font-weight: bold;
}

.find-dupes__details {
  font-size: 1.25em;
  color: var(--spice-text);
}

.find-dupes__group-section {
  background-color: var(--spice-player);
  border: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);
  border-radius: 6px;
  padding: 15px;
}

.find-dupes__group-section-heading {
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 1.2em;
  color: var(--spice-text);
}

.find-dupes__group-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.find-dupes-group {
  padding: 15px;
  border-radius: 4px;
  border: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);
  border-left-width: 5px;
  border-left-style: solid;
  transition: background-color 0.2s ease;
  list-style: none;
}

.find-dupes-group--exact {
  border-left-color: #f24e5c;
}

.find-dupes-group--likely {
  border-left-color: #ffc726;
}

.find-dupes-group--possible {
  border-left-color: #58ff33;
}

.find-dupes-group__source {
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--spice-text);
  font-size: 1.05em;
}

.find-dupes-group__duplicates-heading {
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: normal;
  color: var(--spice-subtext);
  font-size: 0.95em;
}

.find-dupes-group__duplicates-list {
  list-style: none;
  padding: 0 0 0 15px;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.find-dupes-group__duplicate-item {
  padding: 10px 0;
  font-size: 1em;
  color: #e0e0e0;
  border-bottom: 1px solid rgba(var(--spice-rgb-selected-row), 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.find-dupes-group__duplicate-item:last-child {
  border-bottom: none;
}

.find-dupes-group__duplicate-name {
  display: block;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.find-dupes-group__details {
  color: var(--spice-subtext);
  font-size: 0.9em;
  margin-top: 3px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.find-dupes-group__album {
  display: inline-block;
  margin-left: 5px;
}

.find-dupes-group__delete-button {
  background-color: #f24e5c;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85em;
  font-weight: bold;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.find-dupes-group__delete-button:hover {
  background-color: #d32f2f;
}

.find-dupes-group__delete-button:active {
  background-color: #b71c1c;
  transform: scale(0.98);
}`,e="esbuild-inline-css-D--GitHub-spicetify-extensions-extensions-findDupeTracks-styles-scss";if(document.getElementById(e))return;let t=document.createElement("style");t.id=e,t.textContent=n,document.head.appendChild(t)})();var me=c(b(),1),$=null,Pe=new Spicetify.ContextMenuV2.Item({children:"Find Duplicates",leadingIcon:O.duplicate,onClick:async()=>{let n=await Spicetify.Platform.PlaylistAPI.getMetadata($),e={uri:$,name:n.name};re({title:"Find Duplicates",content:(0,me.jsx)(ue,{selectedPlaylist:e}),isLarge:!0})},shouldAdd:(n,e,t)=>{let o=Spicetify.ContextMenuV2.parseProps(n);if(!o||!Array.isArray(o))return $=null,!1;let[a]=o,s=Spicetify.URI.isPlaylistV1OrV2(a[0]);return s?$=a[0]:$=null,s}});Pe.register();
})();
