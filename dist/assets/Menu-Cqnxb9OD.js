import{r as l,aL as K,o as oe,q as ne,v as W,_ as v,x as Me,y as re,z as U,E as $,F as G,G as se,aZ as He,C as de,a_ as je,a$ as Ke,b0 as we,aO as Ce,b1 as ze,b2 as te,b3 as Ue,A as We,aW as qe,b4 as Ve,w as Ge,aq as Ye}from"./index-Wkrug-03.js";function Se(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function Xe(e,t=166){let o;function n(...s){const r=()=>{e.apply(this,s)};clearTimeout(o),o=setTimeout(r,t)}return n.clear=()=>{clearTimeout(o)},n}function no(e,t){var o,n;return l.isValidElement(e)&&t.indexOf((o=e.type.muiName)!=null?o:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function ue(e){return K(e).defaultView||window}function Ae(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Ie=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Ze(e){return ne("MuiPaper",e)}oe("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Je=["className","component","elevation","square","variant"],Qe=e=>{const{square:t,elevation:o,variant:n,classes:s}=e,r={root:["root",n,!t&&"rounded",n==="elevation"&&`elevation${o}`]};return se(r,Ze,s)},et=W("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return v({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&v({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Me("#fff",Ie(t.elevation))}, ${Me("#fff",Ie(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),tt=l.forwardRef(function(t,o){const n=re({props:t,name:"MuiPaper"}),{className:s,component:r="div",elevation:a=1,square:c=!1,variant:u="elevation"}=n,m=U(n,Je),b=v({},n,{component:r,elevation:a,square:c,variant:u}),g=Qe(b);return $.jsx(et,v({as:r,ownerState:b,className:G(g.root,s),ref:o},m))}),ot=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],nt={entering:{opacity:1},entered:{opacity:1}},rt=l.forwardRef(function(t,o){const n=He(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:a=!0,children:c,easing:u,in:m,onEnter:b,onEntered:g,onEntering:w,onExit:x,onExited:P,onExiting:D,style:E,timeout:f=s,TransitionComponent:N=je}=t,i=U(t,ot),d=l.useRef(null),h=de(d,c.ref,o),y=T=>_=>{if(T){const R=d.current;_===void 0?T(R):T(R,_)}},p=y(w),S=y((T,_)=>{Ke(T);const R=we({style:E,timeout:f,easing:u},{mode:"enter"});T.style.webkitTransition=n.transitions.create("opacity",R),T.style.transition=n.transitions.create("opacity",R),b&&b(T,_)}),A=y(g),I=y(D),H=y(T=>{const _=we({style:E,timeout:f,easing:u},{mode:"exit"});T.style.webkitTransition=n.transitions.create("opacity",_),T.style.transition=n.transitions.create("opacity",_),x&&x(T)}),F=y(P),O=T=>{r&&r(d.current,T)};return $.jsx(N,v({appear:a,in:m,nodeRef:d,onEnter:S,onEntered:A,onEntering:p,onExit:H,onExited:F,onExiting:I,addEndListener:O,timeout:f},i,{children:(T,_)=>l.cloneElement(c,v({style:v({opacity:0,visibility:T==="exited"&&!m?"hidden":void 0},nt[T],E,c.props.style),ref:h},_))}))});function st(e){return ne("MuiBackdrop",e)}oe("MuiBackdrop",["root","invisible"]);const it=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],at=e=>{const{classes:t,invisible:o}=e;return se({root:["root",o&&"invisible"]},st,t)},lt=W("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})(({ownerState:e})=>v({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),ct=l.forwardRef(function(t,o){var n,s,r;const a=re({props:t,name:"MuiBackdrop"}),{children:c,className:u,component:m="div",components:b={},componentsProps:g={},invisible:w=!1,open:x,slotProps:P={},slots:D={},TransitionComponent:E=rt,transitionDuration:f}=a,N=U(a,it),i=v({},a,{component:m,invisible:w}),d=at(i),h=(n=P.root)!=null?n:g.root;return $.jsx(E,v({in:x,timeout:f},N,{children:$.jsx(lt,v({"aria-hidden":!0},h,{as:(s=(r=D.root)!=null?r:b.Root)!=null?s:m,className:G(d.root,u,h==null?void 0:h.className),ownerState:v({},i,h==null?void 0:h.ownerState),classes:d,ref:o,children:c}))}))});function ut(e){const t=K(e);return t.body===e?ue(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ce(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ne(e){return parseInt(ue(e).getComputedStyle(e).paddingRight,10)||0}function dt(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function Le(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,a=>{const c=r.indexOf(a)===-1,u=!dt(a);c&&u&&ce(a,s)})}function ge(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function pt(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(ut(n)){const a=Ae(K(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${Ne(n)+a}px`;const c=K(n).querySelectorAll(".mui-fixed");[].forEach.call(c,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${Ne(u)+a}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=K(n).body;else{const a=n.parentElement,c=ue(n);r=(a==null?void 0:a.nodeName)==="HTML"&&c.getComputedStyle(a).overflowY==="scroll"?a:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:a,property:c})=>{r?a.style.setProperty(c,r):a.style.removeProperty(c)})}}function ft(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class ht{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&ce(t.modalRef,!1);const s=ft(o);Le(o,t.mount,t.modalRef,s,!0);const r=ge(this.containers,a=>a.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=ge(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=pt(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=ge(this.containers,a=>a.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&ce(t.modalRef,o),Le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const a=r.modals[r.modals.length-1];a.modalRef&&ce(a.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const mt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function vt(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function gt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function bt(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||gt(e))}function Pt(e){const t=[],o=[];return Array.from(e.querySelectorAll(mt)).forEach((n,s)=>{const r=vt(n);r===-1||!bt(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function xt(){return!0}function Et(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=Pt,isEnabled:a=xt,open:c}=e,u=l.useRef(!1),m=l.useRef(null),b=l.useRef(null),g=l.useRef(null),w=l.useRef(null),x=l.useRef(!1),P=l.useRef(null),D=de(t.ref,P),E=l.useRef(null);l.useEffect(()=>{!c||!P.current||(x.current=!o)},[o,c]),l.useEffect(()=>{if(!c||!P.current)return;const i=K(P.current);return P.current.contains(i.activeElement)||(P.current.hasAttribute("tabIndex")||P.current.setAttribute("tabIndex","-1"),x.current&&P.current.focus()),()=>{s||(g.current&&g.current.focus&&(u.current=!0,g.current.focus()),g.current=null)}},[c]),l.useEffect(()=>{if(!c||!P.current)return;const i=K(P.current),d=p=>{E.current=p,!(n||!a()||p.key!=="Tab")&&i.activeElement===P.current&&p.shiftKey&&(u.current=!0,b.current&&b.current.focus())},h=()=>{const p=P.current;if(p===null)return;if(!i.hasFocus()||!a()||u.current){u.current=!1;return}if(p.contains(i.activeElement)||n&&i.activeElement!==m.current&&i.activeElement!==b.current)return;if(i.activeElement!==w.current)w.current=null;else if(w.current!==null)return;if(!x.current)return;let S=[];if((i.activeElement===m.current||i.activeElement===b.current)&&(S=r(P.current)),S.length>0){var A,I;const H=!!((A=E.current)!=null&&A.shiftKey&&((I=E.current)==null?void 0:I.key)==="Tab"),F=S[0],O=S[S.length-1];typeof F!="string"&&typeof O!="string"&&(H?O.focus():F.focus())}else p.focus()};i.addEventListener("focusin",h),i.addEventListener("keydown",d,!0);const y=setInterval(()=>{i.activeElement&&i.activeElement.tagName==="BODY"&&h()},50);return()=>{clearInterval(y),i.removeEventListener("focusin",h),i.removeEventListener("keydown",d,!0)}},[o,n,s,a,c,r]);const f=i=>{g.current===null&&(g.current=i.relatedTarget),x.current=!0,w.current=i.target;const d=t.props.onFocus;d&&d(i)},N=i=>{g.current===null&&(g.current=i.relatedTarget),x.current=!0};return $.jsxs(l.Fragment,{children:[$.jsx("div",{tabIndex:c?0:-1,onFocus:N,ref:m,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:D,onFocus:f}),$.jsx("div",{tabIndex:c?0:-1,onFocus:N,ref:b,"data-testid":"sentinelEnd"})]})}function yt(e){return typeof e=="function"?e():e}function Rt(e){return e?e.props.hasOwnProperty("in"):!1}const Tt=new ht;function kt(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=Tt,closeAfterTransition:r=!1,onTransitionEnter:a,onTransitionExited:c,children:u,onClose:m,open:b,rootRef:g}=e,w=l.useRef({}),x=l.useRef(null),P=l.useRef(null),D=de(P,g),[E,f]=l.useState(!b),N=Rt(u);let i=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(i=!1);const d=()=>K(x.current),h=()=>(w.current.modalRef=P.current,w.current.mount=x.current,w.current),y=()=>{s.mount(h(),{disableScrollLock:n}),P.current&&(P.current.scrollTop=0)},p=Ce(()=>{const R=yt(t)||d().body;s.add(h(),R),P.current&&y()}),S=l.useCallback(()=>s.isTopModal(h()),[s]),A=Ce(R=>{x.current=R,R&&(b&&S()?y():P.current&&ce(P.current,i))}),I=l.useCallback(()=>{s.remove(h(),i)},[i,s]);l.useEffect(()=>()=>{I()},[I]),l.useEffect(()=>{b?p():(!N||!r)&&I()},[b,I,N,r,p]);const H=R=>M=>{var C;(C=R.onKeyDown)==null||C.call(R,M),!(M.key!=="Escape"||M.which===229||!S())&&(o||(M.stopPropagation(),m&&m(M,"escapeKeyDown")))},F=R=>M=>{var C;(C=R.onClick)==null||C.call(R,M),M.target===M.currentTarget&&m&&m(M,"backdropClick")};return{getRootProps:(R={})=>{const M=ze(e);delete M.onTransitionEnter,delete M.onTransitionExited;const C=v({},M,R);return v({role:"presentation"},C,{onKeyDown:H(C),ref:D})},getBackdropProps:(R={})=>{const M=R;return v({"aria-hidden":!0},M,{onClick:F(M),open:b})},getTransitionProps:()=>{const R=()=>{f(!1),a&&a()},M=()=>{f(!0),c&&c(),r&&I()};return{onEnter:Se(R,u==null?void 0:u.props.onEnter),onExited:Se(M,u==null?void 0:u.props.onExited)}},rootRef:D,portalRef:A,isTopModal:S,exited:E,hasTransition:N}}function Mt(e){return ne("MuiModal",e)}oe("MuiModal",["root","hidden","backdrop"]);const wt=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Ct=e=>{const{open:t,exited:o,classes:n}=e;return se({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},Mt,n)},St=W("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>v({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),It=W(ct,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Nt=l.forwardRef(function(t,o){var n,s,r,a,c,u;const m=re({name:"MuiModal",props:t}),{BackdropComponent:b=It,BackdropProps:g,className:w,closeAfterTransition:x=!1,children:P,container:D,component:E,components:f={},componentsProps:N={},disableAutoFocus:i=!1,disableEnforceFocus:d=!1,disableEscapeKeyDown:h=!1,disablePortal:y=!1,disableRestoreFocus:p=!1,disableScrollLock:S=!1,hideBackdrop:A=!1,keepMounted:I=!1,onBackdropClick:H,open:F,slotProps:O,slots:T}=m,_=U(m,wt),R=v({},m,{closeAfterTransition:x,disableAutoFocus:i,disableEnforceFocus:d,disableEscapeKeyDown:h,disablePortal:y,disableRestoreFocus:p,disableScrollLock:S,hideBackdrop:A,keepMounted:I}),{getRootProps:M,getBackdropProps:C,getTransitionProps:q,portalRef:he,isTopModal:pe,exited:j,hasTransition:fe}=kt(v({},R,{rootRef:o})),Y=v({},R,{exited:j}),V=Ct(Y),X={};if(P.props.tabIndex===void 0&&(X.tabIndex="-1"),fe){const{onEnter:k,onExited:L}=q();X.onEnter=k,X.onExited=L}const Z=(n=(s=T==null?void 0:T.root)!=null?s:f.Root)!=null?n:St,ie=(r=(a=T==null?void 0:T.backdrop)!=null?a:f.Backdrop)!=null?r:b,ae=(c=O==null?void 0:O.root)!=null?c:N.root,J=(u=O==null?void 0:O.backdrop)!=null?u:N.backdrop,me=te({elementType:Z,externalSlotProps:ae,externalForwardedProps:_,getSlotProps:M,additionalProps:{ref:o,as:E},ownerState:Y,className:G(w,ae==null?void 0:ae.className,V==null?void 0:V.root,!Y.open&&Y.exited&&(V==null?void 0:V.hidden))}),ve=te({elementType:ie,externalSlotProps:J,additionalProps:g,getSlotProps:k=>C(v({},k,{onClick:L=>{H&&H(L),k!=null&&k.onClick&&k.onClick(L)}})),className:G(J==null?void 0:J.className,g==null?void 0:g.className,V==null?void 0:V.backdrop),ownerState:Y});return!I&&!F&&(!fe||j)?null:$.jsx(Ue,{ref:he,container:D,disablePortal:y,children:$.jsxs(Z,v({},me,{children:[!A&&b?$.jsx(ie,v({},ve)):null,$.jsx(Et,{disableEnforceFocus:d,disableAutoFocus:i,disableRestoreFocus:p,isEnabled:pe,open:F,children:l.cloneElement(P,X)})]}))})}),Lt=l.createContext({});function Ft(e){return ne("MuiList",e)}oe("MuiList",["root","padding","dense","subheader"]);const Ot=["children","className","component","dense","disablePadding","subheader"],$t=e=>{const{classes:t,disablePadding:o,dense:n,subheader:s}=e;return se({root:["root",!o&&"padding",n&&"dense",s&&"subheader"]},Ft,t)},Dt=W("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>v({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),At=l.forwardRef(function(t,o){const n=re({props:t,name:"MuiList"}),{children:s,className:r,component:a="ul",dense:c=!1,disablePadding:u=!1,subheader:m}=n,b=U(n,Ot),g=l.useMemo(()=>({dense:c}),[c]),w=v({},n,{component:a,dense:c,disablePadding:u}),x=$t(w);return $.jsx(Lt.Provider,{value:g,children:$.jsxs(Dt,v({as:a,className:G(x.root,r),ref:o,ownerState:w},b,{children:[m,s]}))})}),_t=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function be(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function Fe(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function _e(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}function le(e,t,o,n,s,r){let a=!1,c=s(e,t,t?o:!1);for(;c;){if(c===e.firstChild){if(a)return!1;a=!0}const u=n?!1:c.disabled||c.getAttribute("aria-disabled")==="true";if(!c.hasAttribute("tabindex")||!_e(c,r)||u)c=s(e,c,o);else return c.focus(),!0}return!1}const Bt=l.forwardRef(function(t,o){const{actions:n,autoFocus:s=!1,autoFocusItem:r=!1,children:a,className:c,disabledItemsFocusable:u=!1,disableListWrap:m=!1,onKeyDown:b,variant:g="selectedMenu"}=t,w=U(t,_t),x=l.useRef(null),P=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});We(()=>{s&&x.current.focus()},[s]),l.useImperativeHandle(n,()=>({adjustStyleForScrollbar:(i,{direction:d})=>{const h=!x.current.style.width;if(i.clientHeight<x.current.clientHeight&&h){const y=`${Ae(K(i))}px`;x.current.style[d==="rtl"?"paddingLeft":"paddingRight"]=y,x.current.style.width=`calc(100% + ${y})`}return x.current}}),[]);const D=i=>{const d=x.current,h=i.key,y=K(d).activeElement;if(h==="ArrowDown")i.preventDefault(),le(d,y,m,u,be);else if(h==="ArrowUp")i.preventDefault(),le(d,y,m,u,Fe);else if(h==="Home")i.preventDefault(),le(d,null,m,u,be);else if(h==="End")i.preventDefault(),le(d,null,m,u,Fe);else if(h.length===1){const p=P.current,S=h.toLowerCase(),A=performance.now();p.keys.length>0&&(A-p.lastTime>500?(p.keys=[],p.repeating=!0,p.previousKeyMatched=!0):p.repeating&&S!==p.keys[0]&&(p.repeating=!1)),p.lastTime=A,p.keys.push(S);const I=y&&!p.repeating&&_e(y,p);p.previousKeyMatched&&(I||le(d,y,!1,u,be,p))?i.preventDefault():p.previousKeyMatched=!1}b&&b(i)},E=de(x,o);let f=-1;l.Children.forEach(a,(i,d)=>{if(!l.isValidElement(i)){f===d&&(f+=1,f>=a.length&&(f=-1));return}i.props.disabled||(g==="selectedMenu"&&i.props.selected||f===-1)&&(f=d),f===d&&(i.props.disabled||i.props.muiSkipListHighlight||i.type.muiSkipListHighlight)&&(f+=1,f>=a.length&&(f=-1))});const N=l.Children.map(a,(i,d)=>{if(d===f){const h={};return r&&(h.autoFocus=!0),i.props.tabIndex===void 0&&g==="selectedMenu"&&(h.tabIndex=0),l.cloneElement(i,h)}return i});return $.jsx(At,v({role:"menu",ref:E,className:c,onKeyDown:D,tabIndex:s?0:-1},w,{children:N}))});function Ht(e){return ne("MuiPopover",e)}oe("MuiPopover",["root","paper"]);const jt=["onEntering"],Kt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],zt=["slotProps"];function Oe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function $e(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function De(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Pe(e){return typeof e=="function"?e():e}const Ut=e=>{const{classes:t}=e;return se({root:["root"],paper:["paper"]},Ht,t)},Wt=W(Nt,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Be=W(tt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),qt=l.forwardRef(function(t,o){var n,s,r;const a=re({props:t,name:"MuiPopover"}),{action:c,anchorEl:u,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:b,anchorReference:g="anchorEl",children:w,className:x,container:P,elevation:D=8,marginThreshold:E=16,open:f,PaperProps:N={},slots:i,slotProps:d,transformOrigin:h={vertical:"top",horizontal:"left"},TransitionComponent:y=Ve,transitionDuration:p="auto",TransitionProps:{onEntering:S}={},disableScrollLock:A=!1}=a,I=U(a.TransitionProps,jt),H=U(a,Kt),F=(n=d==null?void 0:d.paper)!=null?n:N,O=l.useRef(),T=de(O,F.ref),_=v({},a,{anchorOrigin:m,anchorReference:g,elevation:D,marginThreshold:E,externalPaperSlotProps:F,transformOrigin:h,TransitionComponent:y,transitionDuration:p,TransitionProps:I}),R=Ut(_),M=l.useCallback(()=>{if(g==="anchorPosition")return b;const k=Pe(u),B=(k&&k.nodeType===1?k:K(O.current).body).getBoundingClientRect();return{top:B.top+Oe(B,m.vertical),left:B.left+$e(B,m.horizontal)}},[u,m.horizontal,m.vertical,b,g]),C=l.useCallback(k=>({vertical:Oe(k,h.vertical),horizontal:$e(k,h.horizontal)}),[h.horizontal,h.vertical]),q=l.useCallback(k=>{const L={width:k.offsetWidth,height:k.offsetHeight},B=C(L);if(g==="none")return{top:null,left:null,transformOrigin:De(B)};const xe=M();let Q=xe.top-B.vertical,ee=xe.left-B.horizontal;const Ee=Q+L.height,ye=ee+L.width,Re=ue(Pe(u)),Te=Re.innerHeight-E,ke=Re.innerWidth-E;if(E!==null&&Q<E){const z=Q-E;Q-=z,B.vertical+=z}else if(E!==null&&Ee>Te){const z=Ee-Te;Q-=z,B.vertical+=z}if(E!==null&&ee<E){const z=ee-E;ee-=z,B.horizontal+=z}else if(ye>ke){const z=ye-ke;ee-=z,B.horizontal+=z}return{top:`${Math.round(Q)}px`,left:`${Math.round(ee)}px`,transformOrigin:De(B)}},[u,g,M,C,E]),[he,pe]=l.useState(f),j=l.useCallback(()=>{const k=O.current;if(!k)return;const L=q(k);L.top!==null&&(k.style.top=L.top),L.left!==null&&(k.style.left=L.left),k.style.transformOrigin=L.transformOrigin,pe(!0)},[q]);l.useEffect(()=>(A&&window.addEventListener("scroll",j),()=>window.removeEventListener("scroll",j)),[u,A,j]);const fe=(k,L)=>{S&&S(k,L),j()},Y=()=>{pe(!1)};l.useEffect(()=>{f&&j()}),l.useImperativeHandle(c,()=>f?{updatePosition:()=>{j()}}:null,[f,j]),l.useEffect(()=>{if(!f)return;const k=Xe(()=>{j()}),L=ue(u);return L.addEventListener("resize",k),()=>{k.clear(),L.removeEventListener("resize",k)}},[u,f,j]);let V=p;p==="auto"&&!y.muiSupportAuto&&(V=void 0);const X=P||(u?K(Pe(u)).body:void 0),Z=(s=i==null?void 0:i.root)!=null?s:Wt,ie=(r=i==null?void 0:i.paper)!=null?r:Be,ae=te({elementType:ie,externalSlotProps:v({},F,{style:he?F.style:v({},F.style,{opacity:0})}),additionalProps:{elevation:D,ref:T},ownerState:_,className:G(R.paper,F==null?void 0:F.className)}),J=te({elementType:Z,externalSlotProps:(d==null?void 0:d.root)||{},externalForwardedProps:H,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:X,open:f},ownerState:_,className:G(R.root,x)}),{slotProps:me}=J,ve=U(J,zt);return $.jsx(Z,v({},ve,!qe(Z)&&{slotProps:me,disableScrollLock:A},{children:$.jsx(y,v({appear:!0,in:f,onEntering:fe,onExited:Y,timeout:V},I,{children:$.jsx(ie,v({},ae,{children:w}))}))}))});function Vt(e){return ne("MuiMenu",e)}oe("MuiMenu",["root","paper","list"]);const Gt=["onEntering"],Yt=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Xt={vertical:"top",horizontal:"right"},Zt={vertical:"top",horizontal:"left"},Jt=e=>{const{classes:t}=e;return se({root:["root"],paper:["paper"],list:["list"]},Vt,t)},Qt=W(qt,{shouldForwardProp:e=>Ge(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),eo=W(Be,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),to=W(Bt,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),ro=l.forwardRef(function(t,o){var n,s;const r=re({props:t,name:"MuiMenu"}),{autoFocus:a=!0,children:c,className:u,disableAutoFocusItem:m=!1,MenuListProps:b={},onClose:g,open:w,PaperProps:x={},PopoverClasses:P,transitionDuration:D="auto",TransitionProps:{onEntering:E}={},variant:f="selectedMenu",slots:N={},slotProps:i={}}=r,d=U(r.TransitionProps,Gt),h=U(r,Yt),y=Ye(),p=v({},r,{autoFocus:a,disableAutoFocusItem:m,MenuListProps:b,onEntering:E,PaperProps:x,transitionDuration:D,TransitionProps:d,variant:f}),S=Jt(p),A=a&&!m&&w,I=l.useRef(null),H=(C,q)=>{I.current&&I.current.adjustStyleForScrollbar(C,{direction:y?"rtl":"ltr"}),E&&E(C,q)},F=C=>{C.key==="Tab"&&(C.preventDefault(),g&&g(C,"tabKeyDown"))};let O=-1;l.Children.map(c,(C,q)=>{l.isValidElement(C)&&(C.props.disabled||(f==="selectedMenu"&&C.props.selected||O===-1)&&(O=q))});const T=(n=N.paper)!=null?n:eo,_=(s=i.paper)!=null?s:x,R=te({elementType:N.root,externalSlotProps:i.root,ownerState:p,className:[S.root,u]}),M=te({elementType:T,externalSlotProps:_,ownerState:p,className:S.paper});return $.jsx(Qt,v({onClose:g,anchorOrigin:{vertical:"bottom",horizontal:y?"right":"left"},transformOrigin:y?Xt:Zt,slots:{paper:T,root:N.root},slotProps:{root:R,paper:M},open:w,ref:o,transitionDuration:D,TransitionProps:v({onEntering:H},d),ownerState:p},h,{classes:P,children:$.jsx(to,v({onKeyDown:F,actions:I,autoFocus:a&&(O===-1||m),autoFocusItem:A,variant:f},b,{className:G(S.list,b.className),children:c}))}))});export{Lt as L,ro as M,Se as c,Xe as d,no as i,ue as o};