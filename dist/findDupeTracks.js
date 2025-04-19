
        (async function() {
          while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
var ce=Object.create;var Z=Object.defineProperty;var de=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var ue=Object.getPrototypeOf,me=Object.prototype.hasOwnProperty;var B=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var fe=(e,n,t,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of pe(n))!me.call(e,o)&&o!==t&&Z(e,o,{get:()=>n[o],enumerable:!(s=de(n,o))||s.enumerable});return e};var m=(e,n,t)=>(t=e!=null?ce(ue(e)):{},fe(n||!e||!e.__esModule?Z(t,"default",{value:e,enumerable:!0}):t,e));var y=B((ve,q)=>{q.exports=Spicetify.ReactJSX});var A=B((we,Q)=>{Q.exports=Spicetify.React});var F=B((Ce,j)=>{j.exports=Spicetify.ReactDOM});var W=m(y(),1),h=(e,n=16)=>({size:t=n,fill:s="currentColor"})=>(0,W.jsx)("svg",{viewBox:`0 0 ${n} ${n}`,width:t,height:t,fill:s,dangerouslySetInnerHTML:{__html:e}}),b={editButton:'<path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z"/>',settings:'<path d="M8 5.36a2.68 2.68 90 100 5.36 2.68 2.68 90 000-5.36zM6.7 8.04a1.34 1.34 90 112.68 0 1.34 1.34 90 01-2.68 0zM11.55 3.21a.95.9487 90 01-1.1042-.76l-.3484-1.8974a.4744.4744 90 00-.3685-.3779 8.1365 8.1365 90 00-3.3755 0 .4744.4744 90 00-.3685.3779l-.3471 1.8974a.9514.9514 90 01-1.2542.7209l-1.8211-.6486a.4757.4757 90 00-.5119.1273c-.7625.8402-1.34 1.8318-1.6911 2.9118a.4717.4717 90 00.1447.5065l1.4767 1.2475a.9434.9434 90 010 1.4418l-1.4767 1.2475a.4717.4717 90 00-.1447.5065A8.0212 8.0212 90 002.0502 13.4268a.4757.4757 90 00.5119.1273l1.8224-.6486a.9487.9487 90 011.2542.7209l.3457 1.8974c.0348.1876.1809.3377.3685.3765a8.1405 8.1405 90 003.3768 0 .473.473 90 00.3672-.3765l.3484-1.8974a.9514.9514 90 011.2542-.7209l1.8211.6486c.1809.0643.3832.0134.5119-.1273.7625-.8402 1.34-1.8318 1.6911-2.9118a.4717.4717 90 00-.1447-.5065l-1.4767-1.2475a.942.942 90 010-1.4418l1.4767-1.2475a.4717.4717 90 00.1447-.5065A8.0199 8.0199 90 0014.0298 2.6532a.4757.4757 90 00-.5119-.1273l-1.8224.6486a.9514.9514 90 01-.1487.0402zm-8.8708.7772 1.2556.4462a2.2914 2.2914 90 003.0217-1.742l.2372-1.2998a6.8407 6.8407 90 011.6951 0l.2385 1.2998a2.2887 2.2887 90 003.0217 1.742L13.4 3.9892c.3417.4476.6258.9353.8442 1.4526l-1.0104.8536a2.2834 2.2834 90 000 3.4894l1.0117.8536a6.6866 6.6866 90 01-.8442 1.4526l-1.2556-.4476a2.2914 2.2914 90 00-3.0217 1.742l-.2385 1.2998a6.8327 6.8327 90 01-1.6951 0l-.2372-1.2998a2.2887 2.2887 90 00-3.0217-1.742L2.68 12.0908a6.6826 6.6826 90 01-.8442-1.4526l1.0104-.8549a2.2834 2.2834 90 000-3.488l-1.0117-.8536c.2198-.5172.5038-1.005.8442-1.4526z"/>',github:'<path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>',close:'<path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143"/>',warning:'<path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A1 1 0 0 0 3 21h18a1 1 0 0 0 .884-1.5zM13 18h-2v-2h2zm-2-4V9h2l0 5z"/>',more:'<path d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>',questionMark:'<path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2Zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333ZM12 15.5a1 1 0 110 2 1 1 0 010-2Zm0-8.75a2.75 2.75 0 012.75 2.75c0 1.01-.297 1.574-1.051 2.359l-.169.171c-.622.622-.78.886-.78 1.47a.75.75 0 01-1.5 0c0-1.01.297-1.574 1.051-2.359l.169-.171c.622-.622.78-.886.78-1.47a1.25 1.25 0 00-2.493-.128l-.007.128a.75.75 0 01-1.5 0A2.75 2.75 0 0112 6.75Z"/>',dropdown:'<path d="M20.4614 6.3469a1.506 1.506 90 00-2.1125.1919L12 14.1564l-6.349-7.6175a1.4997 1.4997 90 10-2.3028 1.922L10.8486 17.4613a1.4992 1.4992 90 002.3028 0L20.6518 8.4608A1.5019 1.5019 90 0020.4614 6.3469Z"/>',palette:'<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',duplicate:'<path d="M15 4.5 13 2.5h-1.5L8.5 0H2C1.5 0 1 .5 1 1v10.5c0 .5.5 1 1 1h2.5v2.5c0 .5.5 1 1 1h8.5c.6 0 1-.5 1-1ZM2.5 1.5h5v1c0 .5.5 1 1 1L9.5 3.5l0 7.5H2.5zM6 14.5v-2h4c.5 0 1-.5 1-1V4h1v1c0 .5 0 .5.5.5h1l0 9z"/>'};b.React={editButton:h(b.editButton,24),settings:h(b.settings,16),github:h(b.github,96),close:h(b.close,32),warning:h(b.warning,24),more:h(b.more,16),questionMark:h(b.questionMark,24),dropdown:h(b.dropdown,24),palette:h(b.palette,24),duplicate:h(b.duplicate,512)};var D=b;(()=>{let e=`.Modal__overlay {
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
}`,n="esbuild-inline-css-D--GitHub-spicetify-extensions-shared-popupModal-scss";if(document.getElementById(n))return;let t=document.createElement("style");t.id=n,t.textContent=e,document.head.appendChild(t)})();var R=m(A(),1),J=m(F(),1);var p=m(y(),1),x=null,P=null,I=()=>{P&&x&&(P.unmount(),x.remove(),document.body.style.overflow="auto",document.removeEventListener("keydown",K),document.removeEventListener("mousedown",X),x=null,P=null)},K=e=>{e.key==="Escape"&&I()},X=e=>{e.target.classList.contains("Modal__overlay")&&I()},Y=({title:e="",content:n,isLarge:t=!0,buttons:s=!1,icon:o=""}={})=>{x=document.getElementById("popup-modal"),x||(x=document.createElement("popup-modal"),x.id="popup-modal",document.body.appendChild(x)),P=J.default.createRoot(x),document.body.style.overflow="hidden",document.addEventListener("keydown",K),document.addEventListener("mousedown",X);let l=(0,R.memo)(()=>(0,p.jsx)("div",{className:"Modal__overlay",children:(0,p.jsx)("div",{className:"Modal",children:(0,p.jsxs)("div",{className:`Modal__container${t?" Modal__container--large":""}`,children:[(0,p.jsxs)("div",{className:"Modal__header",children:[(0,p.jsxs)("div",{className:"Modal__titleContainer",children:[(0,p.jsx)("div",{className:"Modal__icon",children:o}),(0,p.jsx)("h1",{className:"Modal__title",children:e})]}),(0,p.jsxs)("div",{className:"Modal__buttonContainer",children:[s&&(0,p.jsx)(Spicetify.ReactComponent.TooltipWrapper,{label:"GitHub",placement:"top",children:(0,p.jsx)("button",{type:"button",className:"Modal__button Modal__button--github",onClick:()=>window.open("https://github.com/veryboringhwl/spicetify"),children:(0,p.jsx)(D.React.github,{size:18})})}),(0,p.jsx)(Spicetify.ReactComponent.TooltipWrapper,{label:"Close",placement:"top",children:(0,p.jsx)("button",{type:"button",className:"Modal__button Modal__button--close",onClick:()=>I(),children:(0,p.jsx)(D.React.close,{size:18})})})]})]}),(0,p.jsx)("div",{className:"Modal__content",children:R.default.isValidElement(n)?n:R.default.createElement(n)})]})})}));P.render((0,p.jsx)(l,{}))};Y.hide=I;var ee=Y;var w=m(A(),1);var V=m(A(),1),ne=m(F(),1),G=m(y(),1);function ge({titleText:e,descriptionText:n,cancelText:t="Cancel",confirmText:s="Confirm",onConfirm:o,onClose:l,onOpen:f,onOutside:v,confirmLabel:C,allowHTML:z}){let L=V.default.memo(()=>{let[S,c]=Spicetify.React.useState(!0),d=document.querySelector(".ReactModalPortal:last-of-type");return V.default.useEffect(()=>{S&&f?.()},[S,f]),(0,G.jsx)(Spicetify.ReactComponent.RemoteConfigProvider,{configuration:Spicetify.Platform.RemoteConfiguration,children:(0,G.jsx)(Spicetify.ReactComponent.ConfirmDialog,{titleText:e,descriptionText:n,cancelText:t,confirmText:s,isOpen:S,onOutside:()=>{c(!1),v?.(),d?.remove()},onClose:()=>{c(!1),l?.(),d?.remove()},onConfirm:()=>{c(!1),o?.(),d?.remove()},confirmLabel:C,allowHTML:z})})});ne.default.createRoot(document.createElement("div")).render((0,G.jsx)(L,{}))}var te=ge;var a=m(y(),1);async function oe(e,n=0,t=100,s=[]){let o=await Spicetify.Platform.PlaylistAPI.getContents(e,{offset:n,limit:t}),l=o.items,f=s.concat(l);return l.length===t&&o.totalLength>n+t?oe(e,n+t,t,f):{items:f,totalLength:f.length}}async function be(e){let n=new Map,t=new Map;e.forEach(o=>{if(o?.album?.uri){let l=o.album.uri;t.has(l)||t.set(l,[]),t.get(l).push(o.uri)}});let s=Array.from(t.keys()).map(async o=>{let l=await Spicetify.GraphQL.Request(Spicetify.GraphQL.Definitions.getAlbum,{uri:o,locale:Spicetify.Locale.getLocale(),offset:0,limit:500}),f=l.data?.albumUnion?.tracksV2||l.data?.albumUnion?.tracks;f?.items&&f.items.forEach(v=>{if(v?.track?.uri){let C=v.track.playcount;n.set(v.track.uri,C!=null?Number.parseInt(C,10):"N/A")}})});return await Promise.allSettled(s),Object.fromEntries(n)}var ye=e=>{if(!e)return"";let t=["live","remix","mix","acoustic","instrumental","radio","version","ver","edit","mono","stereo","deluxe","intro","outro","remastered","bonus","feat","ft","explicit","clean","original","extended","album","single"].join("|"),s=new RegExp(`\\b(${t})\\b`,"gi");return e.toLowerCase().replace(/\(.*?\)|\[.*?\]/g,"").replace(s,"").replace(/-/g," ").replace(/[^\p{L}\p{N}\s]/gu,"").replace(/\s+/g," ").trim()};function _e({selectedPlaylist:e}){let[n,t]=(0,w.useState)([]),[s,o]=(0,w.useState)({}),[l,f]=(0,w.useState)({exact:[],likely:[],possible:[]}),v=(0,w.useCallback)(c=>{let d=c.filter(i=>i?.uri&&i.name),r=(i,N,re=$=>$)=>{let $=i.reduce((M,H)=>{let O=re(N(H)),U=M.get(O)||[];return U.push(H),M.set(O,U),M},new Map);return Array.from($.values()).filter(M=>M.length>1).map(M=>({sourceTrack:M[0],duplicates:M.slice(1)}))},u=r(d,i=>i.uri),_=new Set(u.flatMap(i=>[i.sourceTrack.uri,...i.duplicates.map(N=>N.uri)])),g=d.filter(i=>!_.has(i.uri)),E=r(g,i=>i.name,i=>i?.toLowerCase().trim()),k=new Set(E.flatMap(i=>[i.sourceTrack.uri,...i.duplicates.map(N=>N.uri)])),se=g.filter(i=>!k.has(i.uri)),le=r(se,i=>i.name,ye);f({exact:u,likely:E,possible:le})},[]),C=async(c,d,r)=>{te({titleText:"Remove Track",descriptionText:"Are you sure you want to remove this Track? You will not be able to recover it!",confirmText:"Remove",onConfirm:async()=>{await Spicetify.Platform.PlaylistAPI.remove(e.uri,[{uri:r.uri,uid:r.uid}]),f(u=>{let _=[...u[c]],g=_[d];if(g){g.duplicates=g.duplicates.filter(k=>!(k.uri===r.uri&&k.uid===r.uid));let E=_.filter(k=>k.duplicates.length>0);return{...u,[c]:E}}return u}),t(u=>u.filter(_=>!(_.uri===r.uri&&_.uid===r.uid)))}})};(0,w.useEffect)(()=>{(async()=>{let c={exact:[],likely:[],possible:[]};if(!e?.uri){t([]),f(c),o({});return}t([]),f(c),o({});try{let r=(await oe(e.uri)).items;if(t(r),v(r),r.length>0&&Spicetify.GraphQL&&Spicetify.Locale){let u=await be(r);o(u)}}catch(d){console.error("Error fetching playlist tracks:",d)}})()},[e,v]);let z=({track:c})=>{let d=s[c.uri],r=typeof d=="number"?d.toLocaleString():d;return(0,a.jsxs)("div",{className:"find-dupes-group__details",children:[c.artists?`Artists: ${c.artists.map(u=>u.name).join(", ")}`:"",c.album?.name&&(0,a.jsxs)("span",{className:"find-dupes-group__album",children:[" Album: ",c.album.name]}),d!==void 0&&(0,a.jsxs)("span",{className:"find-dupes-group__playcount",children:[" ","Plays: ",r??"Loading..."]})]})},L=(c,d,r)=>(0,a.jsxs)("div",{className:"find-dupes__group-section",children:[(0,a.jsx)("p",{className:"find-dupes__group-section-heading",children:`${c} (${d.length} found)`}),(0,a.jsx)("ul",{className:"find-dupes__group-list",children:d.map((u,_)=>(0,a.jsxs)("li",{className:`find-dupes-group find-dupes-group--${r}`,children:[(0,a.jsxs)("div",{className:"find-dupes-group__source",children:["Source: ",u.sourceTrack.name,(0,a.jsx)(z,{track:u.sourceTrack})]}),(0,a.jsx)("div",{className:"find-dupes-group__duplicates-heading",children:"Duplicates:"}),(0,a.jsx)("ul",{className:"find-dupes-group__duplicates-list",children:u.duplicates.map(g=>(0,a.jsxs)("li",{className:"find-dupes-group__duplicate-item",children:[(0,a.jsxs)("div",{className:"find-dupes-group__duplicate-content",children:[(0,a.jsx)("span",{className:"find-dupes-group__duplicate-name",children:g.name}),(0,a.jsx)(z,{track:g})]}),(0,a.jsx)("button",{className:"find-dupes-group__delete-button",onClick:()=>C(r,_,g),children:"Delete"})]},g.uri+(g.uid||"")))})]},`${u.sourceTrack.uri}-${_}`))})]}),S=e?.name||"Selected Playlist";return(0,a.jsx)("div",{className:"find-dupes",children:e?.uri&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{className:"find-dupes__details",children:["Playlist: ",S," (",n.length," tracks)"]}),L("Exact Duplicates (Same URI)",l.exact,"exact"),L("Likely Duplicates (Same Name)",l.likely,"likely"),L("Possible Duplicates (Similar Name)",l.possible,"possible")]})})}var ae=_e;(()=>{let e=`.find-dupes {
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
}
`,n="esbuild-inline-css-D--GitHub-spicetify-extensions-extensions-findDupeTracks-styles-css";if(document.getElementById(n))return;let t=document.createElement("style");t.id=n,t.textContent=e,document.head.appendChild(t)})();var ie=m(y(),1),T=null,he=new Spicetify.ContextMenuV2.Item({children:"Find Duplicates",leadingIcon:D.duplicate,onClick:async()=>{let e=await Spicetify.Platform.PlaylistAPI.getMetadata(T),n={uri:T,name:e.name};ee({title:"Find Duplicates",content:(0,ie.jsx)(ae,{selectedPlaylist:n}),isLarge:!0})},shouldAdd:(e,n,t)=>{let s=Spicetify.ContextMenuV2.parseProps(e);if(!s||!Array.isArray(s))return T=null,!1;let[o]=s,l=Spicetify.URI.isPlaylistV1OrV2(o[0]);return l?T=o[0]:T=null,l}});he.register();
})();
