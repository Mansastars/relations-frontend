import{E as Pe,R as ye,j as l,D as it,k as L,l as Y,C as at}from"./index-BLOzz4TG.js";import{c as U,y as lt,M as ct,T as ut,a as ce,g as ue,s as V,_ as E,b as je,u as de,e as pe,j as dt,m as pt,d as Q,k as ft,I as He,Q as ht,N as mt,r as vt}from"./mergeSlotProps-B-v11Acr.js";import{_ as gt,c as Ze,d as Et,u as we,b as Ue,e as xt,a as bt}from"./index-CfVf_BDK.js";const Be={disabled:!1};var Pt=function(t){return t.scrollTop},ve="unmounted",Z="exited",ee="entering",ae="entered",Ie="exiting",q=function(e){gt(t,e);function t(r,s){var o;o=e.call(this,r,s)||this;var i=s,a=i&&!i.isMounting?r.enter:r.appear,c;return o.appearStatus=null,r.in?a?(c=Z,o.appearStatus=ee):c=ae:r.unmountOnExit||r.mountOnEnter?c=ve:c=Z,o.state={status:c},o.nextCallback=null,o}t.getDerivedStateFromProps=function(s,o){var i=s.in;return i&&o.status===ve?{status:Z}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(s){var o=null;if(s!==this.props){var i=this.state.status;this.props.in?i!==ee&&i!==ae&&(o=ee):(i===ee||i===ae)&&(o=Ie)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var s=this.props.timeout,o,i,a;return o=i=a=s,s!=null&&typeof s!="number"&&(o=s.exit,i=s.enter,a=s.appear!==void 0?s.appear:i),{exit:o,enter:i,appear:a}},n.updateStatus=function(s,o){if(s===void 0&&(s=!1),o!==null)if(this.cancelNextCallback(),o===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:Pe.findDOMNode(this);i&&Pt(i)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Z&&this.setState({status:ve})},n.performEnter=function(s){var o=this,i=this.props.enter,a=this.context?this.context.isMounting:s,c=this.props.nodeRef?[a]:[Pe.findDOMNode(this),a],d=c[0],h=c[1],v=this.getTimeouts(),M=a?v.appear:v.enter;if(!s&&!i||Be.disabled){this.safeSetState({status:ae},function(){o.props.onEntered(d)});return}this.props.onEnter(d,h),this.safeSetState({status:ee},function(){o.props.onEntering(d,h),o.onTransitionEnd(M,function(){o.safeSetState({status:ae},function(){o.props.onEntered(d,h)})})})},n.performExit=function(){var s=this,o=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:Pe.findDOMNode(this);if(!o||Be.disabled){this.safeSetState({status:Z},function(){s.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Ie},function(){s.props.onExiting(a),s.onTransitionEnd(i.exit,function(){s.safeSetState({status:Z},function(){s.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(s,o){o=this.setNextCallback(o),this.setState(s,o)},n.setNextCallback=function(s){var o=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,o.nextCallback=null,s(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(s,o){this.setNextCallback(o);var i=this.props.nodeRef?this.props.nodeRef.current:Pe.findDOMNode(this),a=s==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],d=c[0],h=c[1];this.props.addEndListener(d,h)}s!=null&&setTimeout(this.nextCallback,s)},n.render=function(){var s=this.state.status;if(s===ve)return null;var o=this.props,i=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=U(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ye.createElement(Ze.Provider,{value:null},typeof i=="function"?i(s,a):ye.cloneElement(ye.Children.only(i),a))},t}(ye.Component);q.contextType=Ze;q.propTypes={};function ie(){}q.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ie,onEntering:ie,onEntered:ie,onExit:ie,onExiting:ie,onExited:ie};q.UNMOUNTED=ve;q.EXITED=Z;q.ENTERING=ee;q.ENTERED=ae;q.EXITING=Ie;const yt=lt();function Tt(e=yt){return Et(e)}function Ke(...e){return e.reduce((t,n)=>n==null?t:function(...s){t.apply(this,s),n.apply(this,s)},()=>{})}function Rt(e,t=166){let n;function r(...s){const o=()=>{e.apply(this,s)};clearTimeout(n),n=setTimeout(o,t)}return r.clear=()=>{clearTimeout(n)},r}function Hn(e,t){var n,r;return l.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function z(e){return e&&e.ownerDocument||document}function Ee(e){return z(e).defaultView||window}let ze=0;function St(e){const[t,n]=l.useState(e),r=e||t;return l.useEffect(()=>{t==null&&(ze+=1,n(`mui-${ze}`))},[t]),r}const We=it.useId;function Un(e){if(We!==void 0){const t=We();return e??t}return St(e)}function Bn({controlled:e,default:t,name:n,state:r="value"}){const{current:s}=l.useRef(e!==void 0),[o,i]=l.useState(t),a=s?e:o,c=l.useCallback(d=>{s||i(d)},[]);return[a,c]}function et(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function tt(){const e=Tt(ct);return e[ut]||e}const Ge=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},nt=e=>e.scrollTop;function Te(e,t){var n,r;const{timeout:s,easing:o,style:i={}}=e;return{duration:(n=i.transitionDuration)!=null?n:typeof s=="number"?s:s[t.mode]||0,easing:(r=i.transitionTimingFunction)!=null?r:typeof o=="object"?o[t.mode]:o,delay:i.transitionDelay}}function Ct(e){return ce("MuiPaper",e)}ue("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const kt=["className","component","elevation","square","variant"],Mt=e=>{const{square:t,elevation:n,variant:r,classes:s}=e,o={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return pe(o,Ct,s)},Nt=V("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return E({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&E({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${je("#fff",Ge(t.elevation))}, ${je("#fff",Ge(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),wt=l.forwardRef(function(t,n){const r=de({props:t,name:"MuiPaper"}),{className:s,component:o="div",elevation:i=1,square:a=!1,variant:c="elevation"}=r,d=U(r,kt),h=E({},r,{component:o,elevation:i,square:a,variant:c}),v=Mt(h);return L.jsx(Nt,E({as:o,ownerState:h,className:Y(v.root,s),ref:n},d))}),It=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function le(e){var t;const{elementType:n,externalSlotProps:r,ownerState:s,skipResolvingSlotProps:o=!1}=e,i=U(e,It),a=o?{}:dt(r,s),{props:c,internalRef:d}=pt(E({},i,{externalSlotProps:a})),h=Q(d,a==null?void 0:a.ref,(t=e.additionalProps)==null?void 0:t.ref);return ft(n,E({},c,{ref:h}),s)}const Dt=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ot(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Lt(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=r=>e.ownerDocument.querySelector(`input[type="radio"]${r}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function Ft(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Lt(e))}function $t(e){const t=[],n=[];return Array.from(e.querySelectorAll(Dt)).forEach((r,s)=>{const o=Ot(r);o===-1||!Ft(r)||(o===0?t.push(r):n.push({documentOrder:s,tabIndex:o,node:r}))}),n.sort((r,s)=>r.tabIndex===s.tabIndex?r.documentOrder-s.documentOrder:r.tabIndex-s.tabIndex).map(r=>r.node).concat(t)}function _t(){return!0}function At(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:s=!1,getTabbable:o=$t,isEnabled:i=_t,open:a}=e,c=l.useRef(!1),d=l.useRef(null),h=l.useRef(null),v=l.useRef(null),M=l.useRef(null),T=l.useRef(!1),P=l.useRef(null),w=Q(t.ref,P),R=l.useRef(null);l.useEffect(()=>{!a||!P.current||(T.current=!n)},[n,a]),l.useEffect(()=>{if(!a||!P.current)return;const u=z(P.current);return P.current.contains(u.activeElement)||(P.current.hasAttribute("tabIndex")||P.current.setAttribute("tabIndex","-1"),T.current&&P.current.focus()),()=>{s||(v.current&&v.current.focus&&(c.current=!0,v.current.focus()),v.current=null)}},[a]),l.useEffect(()=>{if(!a||!P.current)return;const u=z(P.current),p=f=>{R.current=f,!(r||!i()||f.key!=="Tab")&&u.activeElement===P.current&&f.shiftKey&&(c.current=!0,h.current&&h.current.focus())},m=()=>{const f=P.current;if(f===null)return;if(!u.hasFocus()||!i()||c.current){c.current=!1;return}if(f.contains(u.activeElement)||r&&u.activeElement!==d.current&&u.activeElement!==h.current)return;if(u.activeElement!==M.current)M.current=null;else if(M.current!==null)return;if(!T.current)return;let I=[];if((u.activeElement===d.current||u.activeElement===h.current)&&(I=o(P.current)),I.length>0){var _,D;const H=!!((_=R.current)!=null&&_.shiftKey&&((D=R.current)==null?void 0:D.key)==="Tab"),F=I[0],$=I[I.length-1];typeof F!="string"&&typeof $!="string"&&(H?$.focus():F.focus())}else f.focus()};u.addEventListener("focusin",m),u.addEventListener("keydown",p,!0);const S=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&m()},50);return()=>{clearInterval(S),u.removeEventListener("focusin",m),u.removeEventListener("keydown",p,!0)}},[n,r,s,i,a,o]);const g=u=>{v.current===null&&(v.current=u.relatedTarget),T.current=!0,M.current=u.target;const p=t.props.onFocus;p&&p(u)},O=u=>{v.current===null&&(v.current=u.relatedTarget),T.current=!0};return L.jsxs(l.Fragment,{children:[L.jsx("div",{tabIndex:a?0:-1,onFocus:O,ref:d,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:w,onFocus:g}),L.jsx("div",{tabIndex:a?0:-1,onFocus:O,ref:h,"data-testid":"sentinelEnd"})]})}function jt(e){return typeof e=="function"?e():e}const Ht=l.forwardRef(function(t,n){const{children:r,container:s,disablePortal:o=!1}=t,[i,a]=l.useState(null),c=Q(l.isValidElement(r)?r.ref:null,n);if(we(()=>{o||a(jt(s)||document.body)},[s,o]),we(()=>{if(i&&!o)return He(n,i),()=>{He(n,null)}},[n,i,o]),o){if(l.isValidElement(r)){const d={ref:c};return l.cloneElement(r,d)}return L.jsx(l.Fragment,{children:r})}return L.jsx(l.Fragment,{children:i&&at.createPortal(r,i)})});function Ut(e){const t=z(e);return t.body===e?Ee(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ge(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ve(e){return parseInt(Ee(e).getComputedStyle(e).paddingRight,10)||0}function Bt(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,r=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||r}function qe(e,t,n,r,s){const o=[t,n,...r];[].forEach.call(e.children,i=>{const a=o.indexOf(i)===-1,c=!Bt(i);a&&c&&ge(i,s)})}function Ce(e,t){let n=-1;return e.some((r,s)=>t(r)?(n=s,!0):!1),n}function Kt(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(Ut(r)){const i=et(z(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${Ve(r)+i}px`;const a=z(r).querySelectorAll(".mui-fixed");[].forEach.call(a,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${Ve(c)+i}px`})}let o;if(r.parentNode instanceof DocumentFragment)o=z(r).body;else{const i=r.parentElement,a=Ee(r);o=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:r}n.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{n.forEach(({value:o,el:i,property:a})=>{o?i.style.setProperty(a,o):i.style.removeProperty(a)})}}function zt(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class Wt{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let r=this.modals.indexOf(t);if(r!==-1)return r;r=this.modals.length,this.modals.push(t),t.modalRef&&ge(t.modalRef,!1);const s=zt(n);qe(n,t.mount,t.modalRef,s,!0);const o=Ce(this.containers,i=>i.container===n);return o!==-1?(this.containers[o].modals.push(t),r):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),r)}mount(t,n){const r=Ce(this.containers,o=>o.modals.indexOf(t)!==-1),s=this.containers[r];s.restore||(s.restore=Kt(s,n))}remove(t,n=!0){const r=this.modals.indexOf(t);if(r===-1)return r;const s=Ce(this.containers,i=>i.modals.indexOf(t)!==-1),o=this.containers[s];if(o.modals.splice(o.modals.indexOf(t),1),this.modals.splice(r,1),o.modals.length===0)o.restore&&o.restore(),t.modalRef&&ge(t.modalRef,n),qe(o.container,t.mount,t.modalRef,o.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=o.modals[o.modals.length-1];i.modalRef&&ge(i.modalRef,!1)}return r}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Gt(e){return typeof e=="function"?e():e}function Vt(e){return e?e.props.hasOwnProperty("in"):!1}const qt=new Wt;function Xt(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:r=!1,manager:s=qt,closeAfterTransition:o=!1,onTransitionEnter:i,onTransitionExited:a,children:c,onClose:d,open:h,rootRef:v}=e,M=l.useRef({}),T=l.useRef(null),P=l.useRef(null),w=Q(P,v),[R,g]=l.useState(!h),O=Vt(c);let u=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(u=!1);const p=()=>z(T.current),m=()=>(M.current.modalRef=P.current,M.current.mount=T.current,M.current),S=()=>{s.mount(m(),{disableScrollLock:r}),P.current&&(P.current.scrollTop=0)},f=Ue(()=>{const b=Gt(t)||p().body;s.add(m(),b),P.current&&S()}),I=l.useCallback(()=>s.isTopModal(m()),[s]),_=Ue(b=>{T.current=b,b&&(h&&I()?S():P.current&&ge(P.current,u))}),D=l.useCallback(()=>{s.remove(m(),u)},[u,s]);l.useEffect(()=>()=>{D()},[D]),l.useEffect(()=>{h?f():(!O||!o)&&D()},[h,D,O,o,f]);const H=b=>y=>{var k;(k=b.onKeyDown)==null||k.call(b,y),!(y.key!=="Escape"||y.which===229||!I())&&(n||(y.stopPropagation(),d&&d(y,"escapeKeyDown")))},F=b=>y=>{var k;(k=b.onClick)==null||k.call(b,y),y.target===y.currentTarget&&d&&d(y,"backdropClick")};return{getRootProps:(b={})=>{const y=ht(e);delete y.onTransitionEnter,delete y.onTransitionExited;const k=E({},y,b);return E({role:"presentation"},k,{onKeyDown:H(k),ref:w})},getBackdropProps:(b={})=>{const y=b;return E({"aria-hidden":!0},y,{onClick:F(y),open:h})},getTransitionProps:()=>{const b=()=>{g(!1),i&&i()},y=()=>{g(!0),a&&a(),o&&D()};return{onEnter:Ke(b,c==null?void 0:c.props.onEnter),onExited:Ke(y,c==null?void 0:c.props.onExited)}},rootRef:w,portalRef:_,isTopModal:I,exited:R,hasTransition:O}}const Yt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Qt={entering:{opacity:1},entered:{opacity:1}},Jt=l.forwardRef(function(t,n){const r=tt(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:o,appear:i=!0,children:a,easing:c,in:d,onEnter:h,onEntered:v,onEntering:M,onExit:T,onExited:P,onExiting:w,style:R,timeout:g=s,TransitionComponent:O=q}=t,u=U(t,Yt),p=l.useRef(null),m=Q(p,a.ref,n),S=C=>x=>{if(C){const b=p.current;x===void 0?C(b):C(b,x)}},f=S(M),I=S((C,x)=>{nt(C);const b=Te({style:R,timeout:g,easing:c},{mode:"enter"});C.style.webkitTransition=r.transitions.create("opacity",b),C.style.transition=r.transitions.create("opacity",b),h&&h(C,x)}),_=S(v),D=S(w),H=S(C=>{const x=Te({style:R,timeout:g,easing:c},{mode:"exit"});C.style.webkitTransition=r.transitions.create("opacity",x),C.style.transition=r.transitions.create("opacity",x),T&&T(C)}),F=S(P),$=C=>{o&&o(p.current,C)};return L.jsx(O,E({appear:i,in:d,nodeRef:p,onEnter:I,onEntered:_,onEntering:f,onExit:H,onExited:F,onExiting:D,addEndListener:$,timeout:g},u,{children:(C,x)=>l.cloneElement(a,E({style:E({opacity:0,visibility:C==="exited"&&!d?"hidden":void 0},Qt[C],R,a.props.style),ref:m},x))}))});function Zt(e){return ce("MuiBackdrop",e)}ue("MuiBackdrop",["root","invisible"]);const en=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],tn=e=>{const{classes:t,invisible:n}=e;return pe({root:["root",n&&"invisible"]},Zt,t)},nn=V("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>E({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),on=l.forwardRef(function(t,n){var r,s,o;const i=de({props:t,name:"MuiBackdrop"}),{children:a,className:c,component:d="div",components:h={},componentsProps:v={},invisible:M=!1,open:T,slotProps:P={},slots:w={},TransitionComponent:R=Jt,transitionDuration:g}=i,O=U(i,en),u=E({},i,{component:d,invisible:M}),p=tn(u),m=(r=P.root)!=null?r:v.root;return L.jsx(R,E({in:T,timeout:g},O,{children:L.jsx(nn,E({"aria-hidden":!0},m,{as:(s=(o=w.root)!=null?o:h.Root)!=null?s:d,className:Y(p.root,c,m==null?void 0:m.className),ownerState:E({},u,m==null?void 0:m.ownerState),classes:p,ref:n,children:a}))}))});function rn(e){return ce("MuiModal",e)}ue("MuiModal",["root","hidden","backdrop"]);const sn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],an=e=>{const{open:t,exited:n,classes:r}=e;return pe({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},rn,r)},ln=V("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>E({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),cn=V(on,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),un=l.forwardRef(function(t,n){var r,s,o,i,a,c;const d=de({name:"MuiModal",props:t}),{BackdropComponent:h=cn,BackdropProps:v,className:M,closeAfterTransition:T=!1,children:P,container:w,component:R,components:g={},componentsProps:O={},disableAutoFocus:u=!1,disableEnforceFocus:p=!1,disableEscapeKeyDown:m=!1,disablePortal:S=!1,disableRestoreFocus:f=!1,disableScrollLock:I=!1,hideBackdrop:_=!1,keepMounted:D=!1,onBackdropClick:H,open:F,slotProps:$,slots:C}=d,x=U(d,sn),b=E({},d,{closeAfterTransition:T,disableAutoFocus:u,disableEnforceFocus:p,disableEscapeKeyDown:m,disablePortal:S,disableRestoreFocus:f,disableScrollLock:I,hideBackdrop:_,keepMounted:D}),{getRootProps:y,getBackdropProps:k,getTransitionProps:j,portalRef:G,isTopModal:xe,exited:K,hasTransition:be}=Xt(E({},b,{rootRef:n})),J=E({},b,{exited:K}),X=an(J),te={};if(P.props.tabIndex===void 0&&(te.tabIndex="-1"),be){const{onEnter:N,onExited:A}=j();te.onEnter=N,te.onExited=A}const ne=(r=(s=C==null?void 0:C.root)!=null?s:g.Root)!=null?r:ln,fe=(o=(i=C==null?void 0:C.backdrop)!=null?i:g.Backdrop)!=null?o:h,he=(a=$==null?void 0:$.root)!=null?a:O.root,oe=(c=$==null?void 0:$.backdrop)!=null?c:O.backdrop,Re=le({elementType:ne,externalSlotProps:he,externalForwardedProps:x,getSlotProps:y,additionalProps:{ref:n,as:R},ownerState:J,className:Y(M,he==null?void 0:he.className,X==null?void 0:X.root,!J.open&&J.exited&&(X==null?void 0:X.hidden))}),Se=le({elementType:fe,externalSlotProps:oe,additionalProps:v,getSlotProps:N=>k(E({},N,{onClick:A=>{H&&H(A),N!=null&&N.onClick&&N.onClick(A)}})),className:Y(oe==null?void 0:oe.className,v==null?void 0:v.className,X==null?void 0:X.backdrop),ownerState:J});return!D&&!F&&(!be||K)?null:L.jsx(Ht,{ref:G,container:w,disablePortal:S,children:L.jsxs(ne,E({},Re,{children:[!_&&h?L.jsx(fe,E({},Se)):null,L.jsx(At,{disableEnforceFocus:p,disableAutoFocus:u,disableRestoreFocus:f,isEnabled:xe,open:F,children:l.cloneElement(P,te)})]}))})}),dn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function De(e){return`scale(${e}, ${e**2})`}const pn={entering:{opacity:1,transform:De(1)},entered:{opacity:1,transform:"none"}},ke=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),ot=l.forwardRef(function(t,n){const{addEndListener:r,appear:s=!0,children:o,easing:i,in:a,onEnter:c,onEntered:d,onEntering:h,onExit:v,onExited:M,onExiting:T,style:P,timeout:w="auto",TransitionComponent:R=q}=t,g=U(t,dn),O=xt(),u=l.useRef(),p=tt(),m=l.useRef(null),S=Q(m,o.ref,n),f=x=>b=>{if(x){const y=m.current;b===void 0?x(y):x(y,b)}},I=f(h),_=f((x,b)=>{nt(x);const{duration:y,delay:k,easing:j}=Te({style:P,timeout:w,easing:i},{mode:"enter"});let G;w==="auto"?(G=p.transitions.getAutoHeightDuration(x.clientHeight),u.current=G):G=y,x.style.transition=[p.transitions.create("opacity",{duration:G,delay:k}),p.transitions.create("transform",{duration:ke?G:G*.666,delay:k,easing:j})].join(","),c&&c(x,b)}),D=f(d),H=f(T),F=f(x=>{const{duration:b,delay:y,easing:k}=Te({style:P,timeout:w,easing:i},{mode:"exit"});let j;w==="auto"?(j=p.transitions.getAutoHeightDuration(x.clientHeight),u.current=j):j=b,x.style.transition=[p.transitions.create("opacity",{duration:j,delay:y}),p.transitions.create("transform",{duration:ke?j:j*.666,delay:ke?y:y||j*.333,easing:k})].join(","),x.style.opacity=0,x.style.transform=De(.75),v&&v(x)}),$=f(M),C=x=>{w==="auto"&&O.start(u.current||0,x),r&&r(m.current,x)};return L.jsx(R,E({appear:s,in:a,nodeRef:m,onEnter:_,onEntered:D,onEntering:I,onExit:F,onExited:$,onExiting:H,addEndListener:C,timeout:w==="auto"?null:w},g,{children:(x,b)=>l.cloneElement(o,E({style:E({opacity:0,transform:De(.75),visibility:x==="exited"&&!a?"hidden":void 0},pn[x],P,o.props.style),ref:S},b))}))});ot.muiSupportAuto=!0;const fn=l.createContext({});function hn(e){return ce("MuiList",e)}ue("MuiList",["root","padding","dense","subheader"]);const mn=["children","className","component","dense","disablePadding","subheader"],vn=e=>{const{classes:t,disablePadding:n,dense:r,subheader:s}=e;return pe({root:["root",!n&&"padding",r&&"dense",s&&"subheader"]},hn,t)},gn=V("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})(({ownerState:e})=>E({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),En=l.forwardRef(function(t,n){const r=de({props:t,name:"MuiList"}),{children:s,className:o,component:i="ul",dense:a=!1,disablePadding:c=!1,subheader:d}=r,h=U(r,mn),v=l.useMemo(()=>({dense:a}),[a]),M=E({},r,{component:i,dense:a,disablePadding:c}),T=vn(M);return L.jsx(fn.Provider,{value:v,children:L.jsxs(gn,E({as:i,className:Y(T.root,o),ref:n,ownerState:M},h,{children:[d,s]}))})}),xn=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Me(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Xe(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function rt(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.indexOf(t.keys.join(""))===0}function me(e,t,n,r,s,o){let i=!1,a=s(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(i)return!1;i=!0}const c=r?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!rt(a,o)||c)a=s(e,a,n);else return a.focus(),!0}return!1}const bn=l.forwardRef(function(t,n){const{actions:r,autoFocus:s=!1,autoFocusItem:o=!1,children:i,className:a,disabledItemsFocusable:c=!1,disableListWrap:d=!1,onKeyDown:h,variant:v="selectedMenu"}=t,M=U(t,xn),T=l.useRef(null),P=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});we(()=>{s&&T.current.focus()},[s]),l.useImperativeHandle(r,()=>({adjustStyleForScrollbar:(u,{direction:p})=>{const m=!T.current.style.width;if(u.clientHeight<T.current.clientHeight&&m){const S=`${et(z(u))}px`;T.current.style[p==="rtl"?"paddingLeft":"paddingRight"]=S,T.current.style.width=`calc(100% + ${S})`}return T.current}}),[]);const w=u=>{const p=T.current,m=u.key,S=z(p).activeElement;if(m==="ArrowDown")u.preventDefault(),me(p,S,d,c,Me);else if(m==="ArrowUp")u.preventDefault(),me(p,S,d,c,Xe);else if(m==="Home")u.preventDefault(),me(p,null,d,c,Me);else if(m==="End")u.preventDefault(),me(p,null,d,c,Xe);else if(m.length===1){const f=P.current,I=m.toLowerCase(),_=performance.now();f.keys.length>0&&(_-f.lastTime>500?(f.keys=[],f.repeating=!0,f.previousKeyMatched=!0):f.repeating&&I!==f.keys[0]&&(f.repeating=!1)),f.lastTime=_,f.keys.push(I);const D=S&&!f.repeating&&rt(S,f);f.previousKeyMatched&&(D||me(p,S,!1,c,Me,f))?u.preventDefault():f.previousKeyMatched=!1}h&&h(u)},R=Q(T,n);let g=-1;l.Children.forEach(i,(u,p)=>{if(!l.isValidElement(u)){g===p&&(g+=1,g>=i.length&&(g=-1));return}u.props.disabled||(v==="selectedMenu"&&u.props.selected||g===-1)&&(g=p),g===p&&(u.props.disabled||u.props.muiSkipListHighlight||u.type.muiSkipListHighlight)&&(g+=1,g>=i.length&&(g=-1))});const O=l.Children.map(i,(u,p)=>{if(p===g){const m={};return o&&(m.autoFocus=!0),u.props.tabIndex===void 0&&v==="selectedMenu"&&(m.tabIndex=0),l.cloneElement(u,m)}return u});return L.jsx(En,E({role:"menu",ref:R,className:a,onKeyDown:w,tabIndex:s?0:-1},M,{children:O}))});function Pn(e){return ce("MuiPopover",e)}ue("MuiPopover",["root","paper"]);const yn=["onEntering"],Tn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Rn=["slotProps"];function Ye(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Qe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Je(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function Ne(e){return typeof e=="function"?e():e}const Sn=e=>{const{classes:t}=e;return pe({root:["root"],paper:["paper"]},Pn,t)},Cn=V(un,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),st=V(wt,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),kn=l.forwardRef(function(t,n){var r,s,o;const i=de({props:t,name:"MuiPopover"}),{action:a,anchorEl:c,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:h,anchorReference:v="anchorEl",children:M,className:T,container:P,elevation:w=8,marginThreshold:R=16,open:g,PaperProps:O={},slots:u,slotProps:p,transformOrigin:m={vertical:"top",horizontal:"left"},TransitionComponent:S=ot,transitionDuration:f="auto",TransitionProps:{onEntering:I}={},disableScrollLock:_=!1}=i,D=U(i.TransitionProps,yn),H=U(i,Tn),F=(r=p==null?void 0:p.paper)!=null?r:O,$=l.useRef(),C=Q($,F.ref),x=E({},i,{anchorOrigin:d,anchorReference:v,elevation:w,marginThreshold:R,externalPaperSlotProps:F,transformOrigin:m,TransitionComponent:S,transitionDuration:f,TransitionProps:D}),b=Sn(x),y=l.useCallback(()=>{if(v==="anchorPosition")return h;const N=Ne(c),B=(N&&N.nodeType===1?N:z($.current).body).getBoundingClientRect();return{top:B.top+Ye(B,d.vertical),left:B.left+Qe(B,d.horizontal)}},[c,d.horizontal,d.vertical,h,v]),k=l.useCallback(N=>({vertical:Ye(N,m.vertical),horizontal:Qe(N,m.horizontal)}),[m.horizontal,m.vertical]),j=l.useCallback(N=>{const A={width:N.offsetWidth,height:N.offsetHeight},B=k(A);if(v==="none")return{top:null,left:null,transformOrigin:Je(B)};const Oe=y();let re=Oe.top-B.vertical,se=Oe.left-B.horizontal;const Le=re+A.height,Fe=se+A.width,$e=Ee(Ne(c)),_e=$e.innerHeight-R,Ae=$e.innerWidth-R;if(R!==null&&re<R){const W=re-R;re-=W,B.vertical+=W}else if(R!==null&&Le>_e){const W=Le-_e;re-=W,B.vertical+=W}if(R!==null&&se<R){const W=se-R;se-=W,B.horizontal+=W}else if(Fe>Ae){const W=Fe-Ae;se-=W,B.horizontal+=W}return{top:`${Math.round(re)}px`,left:`${Math.round(se)}px`,transformOrigin:Je(B)}},[c,v,y,k,R]),[G,xe]=l.useState(g),K=l.useCallback(()=>{const N=$.current;if(!N)return;const A=j(N);A.top!==null&&(N.style.top=A.top),A.left!==null&&(N.style.left=A.left),N.style.transformOrigin=A.transformOrigin,xe(!0)},[j]);l.useEffect(()=>(_&&window.addEventListener("scroll",K),()=>window.removeEventListener("scroll",K)),[c,_,K]);const be=(N,A)=>{I&&I(N,A),K()},J=()=>{xe(!1)};l.useEffect(()=>{g&&K()}),l.useImperativeHandle(a,()=>g?{updatePosition:()=>{K()}}:null,[g,K]),l.useEffect(()=>{if(!g)return;const N=Rt(()=>{K()}),A=Ee(c);return A.addEventListener("resize",N),()=>{N.clear(),A.removeEventListener("resize",N)}},[c,g,K]);let X=f;f==="auto"&&!S.muiSupportAuto&&(X=void 0);const te=P||(c?z(Ne(c)).body:void 0),ne=(s=u==null?void 0:u.root)!=null?s:Cn,fe=(o=u==null?void 0:u.paper)!=null?o:st,he=le({elementType:fe,externalSlotProps:E({},F,{style:G?F.style:E({},F.style,{opacity:0})}),additionalProps:{elevation:w,ref:C},ownerState:x,className:Y(b.paper,F==null?void 0:F.className)}),oe=le({elementType:ne,externalSlotProps:(p==null?void 0:p.root)||{},externalForwardedProps:H,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:te,open:g},ownerState:x,className:Y(b.root,T)}),{slotProps:Re}=oe,Se=U(oe,Rn);return L.jsx(ne,E({},Se,!mt(ne)&&{slotProps:Re,disableScrollLock:_},{children:L.jsx(S,E({appear:!0,in:g,onEntering:be,onExited:J,timeout:X},D,{children:L.jsx(fe,E({},he,{children:M}))}))}))});function Mn(e){return ce("MuiMenu",e)}ue("MuiMenu",["root","paper","list"]);const Nn=["onEntering"],wn=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],In={vertical:"top",horizontal:"right"},Dn={vertical:"top",horizontal:"left"},On=e=>{const{classes:t}=e;return pe({root:["root"],paper:["paper"],list:["list"]},Mn,t)},Ln=V(kn,{shouldForwardProp:e=>vt(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Fn=V(st,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),$n=V(bn,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Kn=l.forwardRef(function(t,n){var r,s;const o=de({props:t,name:"MuiMenu"}),{autoFocus:i=!0,children:a,className:c,disableAutoFocusItem:d=!1,MenuListProps:h={},onClose:v,open:M,PaperProps:T={},PopoverClasses:P,transitionDuration:w="auto",TransitionProps:{onEntering:R}={},variant:g="selectedMenu",slots:O={},slotProps:u={}}=o,p=U(o.TransitionProps,Nn),m=U(o,wn),S=bt(),f=E({},o,{autoFocus:i,disableAutoFocusItem:d,MenuListProps:h,onEntering:R,PaperProps:T,transitionDuration:w,TransitionProps:p,variant:g}),I=On(f),_=i&&!d&&M,D=l.useRef(null),H=(k,j)=>{D.current&&D.current.adjustStyleForScrollbar(k,{direction:S?"rtl":"ltr"}),R&&R(k,j)},F=k=>{k.key==="Tab"&&(k.preventDefault(),v&&v(k,"tabKeyDown"))};let $=-1;l.Children.map(a,(k,j)=>{l.isValidElement(k)&&(k.props.disabled||(g==="selectedMenu"&&k.props.selected||$===-1)&&($=j))});const C=(r=O.paper)!=null?r:Fn,x=(s=u.paper)!=null?s:T,b=le({elementType:O.root,externalSlotProps:u.root,ownerState:f,className:[I.root,c]}),y=le({elementType:C,externalSlotProps:x,ownerState:f,className:I.paper});return L.jsx(Ln,E({onClose:v,anchorOrigin:{vertical:"bottom",horizontal:S?"right":"left"},transformOrigin:S?In:Dn,slots:{paper:C,root:O.root},slotProps:{root:b,paper:y},open:M,ref:n,transitionDuration:w,TransitionProps:E({onEntering:H},p),ownerState:f},m,{classes:P,children:L.jsx($n,E({onKeyDown:F,actions:D,autoFocus:i&&($===-1||d),autoFocusItem:_,variant:g},h,{className:Y(I.list,h.className),children:a}))}))});export{fn as L,Kn as M,Bn as a,Ee as b,Ke as c,Rt as d,Un as e,Hn as i,z as o,Tt as u};
