import{j as t,r as f,R as Ne,u as Ie,S as W,a as Me}from"./index-CF6aRru1.js";import{M as ne}from"./MansaLogo-g5zwii4N.js";import{n as Ae,p as Ue,q as Ve,b as Oe,r as Ce,T as We,C as ke,g as ue,i as Y,j as me,o as xe,s as He,t as De}from"./index.esm-D3udpOIv.js";import{I as qe,a as Ye,d as Ge,b as Je,T as H,B as D,G as Ke}from"./GoogleSignIn-C0sxA496.js";import{c as M,a as _,g as F,s as S,_ as d,u as B,h as Qe,b as A,d as U,r as Xe,f as J,e as Ze,S as et,i as V}from"./createSvgIcon-B0imZhwj.js";import{c as P}from"./clsx-B-dksMZM.js";import{S as tt,B as fe,F as ot,L as st,l as Se}from"./FormControlLabel-fICN_ckr.js";import{P as nt}from"./People-m-tefYKX.js";import{P as at,T as rt}from"./TermOfUsageModal-CEf5tSaI.js";import"./ToggleSwitch-g2SEo0VD.js";import"./index-Bvng1mpX.js";const he=M(t.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),ve=M(t.jsx("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward"),lt=M(t.jsx("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),it=M(t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),ct=M(t.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email"),dt=M(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info");function pt(e){return _("MuiCollapse",e)}F("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],mt=e=>{const{orientation:o,classes:s}=e,a={root:["root",`${o}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${o}`],wrapperInner:["wrapperInner",`${o}`]};return U(a,pt,s)},xt=S("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.orientation],s.state==="entered"&&o.entered,s.state==="exited"&&!s.in&&s.collapsedSize==="0px"&&o.hidden]}})(({theme:e,ownerState:o})=>d({height:0,overflow:"hidden",transition:e.transitions.create("height")},o.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},o.state==="entered"&&d({height:"auto",overflow:"visible"},o.orientation==="horizontal"&&{width:"auto"}),o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&{visibility:"hidden"})),ft=S("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,o)=>o.wrapper})(({ownerState:e})=>d({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),ht=S("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,o)=>o.wrapperInner})(({ownerState:e})=>d({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),be=f.forwardRef(function(o,s){const a=B({props:o,name:"MuiCollapse"}),{addEndListener:r,children:n,className:p,collapsedSize:i="0px",component:x,easing:u,in:l,onEnter:c,onEntered:m,onEntering:v,onExit:b,onExited:g,onExiting:C,orientation:y="vertical",style:w,timeout:j=Qe.standard,TransitionComponent:R=Ae}=a,k=A(a,ut),I=d({},a,{orientation:y,collapsedSize:i}),L=mt(I),$=Ue(),T=Ve(),O=f.useRef(null),le=f.useRef(),te=typeof i=="number"?`${i}px`:i,K=y==="horizontal",Q=K?"width":"height",oe=f.useRef(null),ze=Oe(s,oe),q=h=>N=>{if(h){const z=oe.current;N===void 0?h(z):h(z,N)}},ie=()=>O.current?O.current[K?"clientWidth":"clientHeight"]:0,Pe=q((h,N)=>{O.current&&K&&(O.current.style.position="absolute"),h.style[Q]=te,c&&c(h,N)}),Re=q((h,N)=>{const z=ie();O.current&&K&&(O.current.style.position="");const{duration:X,easing:se}=Ce({style:w,timeout:j,easing:u},{mode:"enter"});if(j==="auto"){const ge=$.transitions.getAutoHeightDuration(z);h.style.transitionDuration=`${ge}ms`,le.current=ge}else h.style.transitionDuration=typeof X=="string"?X:`${X}ms`;h.style[Q]=`${z}px`,h.style.transitionTimingFunction=se,v&&v(h,N)}),Te=q((h,N)=>{h.style[Q]="auto",m&&m(h,N)}),Ee=q(h=>{h.style[Q]=`${ie()}px`,b&&b(h)}),_e=q(g),Fe=q(h=>{const N=ie(),{duration:z,easing:X}=Ce({style:w,timeout:j,easing:u},{mode:"exit"});if(j==="auto"){const se=$.transitions.getAutoHeightDuration(N);h.style.transitionDuration=`${se}ms`,le.current=se}else h.style.transitionDuration=typeof z=="string"?z:`${z}ms`;h.style[Q]=te,h.style.transitionTimingFunction=X,C&&C(h)}),Be=h=>{j==="auto"&&T.start(le.current||0,h),r&&r(oe.current,h)};return t.jsx(R,d({in:l,onEnter:Pe,onEntered:Te,onEntering:Re,onExit:Ee,onExited:_e,onExiting:Fe,addEndListener:Be,nodeRef:oe,timeout:j==="auto"?null:j},k,{children:(h,N)=>t.jsx(xt,d({as:x,className:P(L.root,p,{entered:L.entered,exited:!l&&te==="0px"&&L.hidden}[h]),style:d({[K?"minWidth":"minHeight"]:te},w),ref:ze},N,{ownerState:d({},I,{state:h}),children:t.jsx(ft,{ownerState:d({},I,{state:h}),className:L.wrapper,ref:O,children:t.jsx(ht,{ownerState:d({},I,{state:h}),className:L.wrapperInner,children:n})})}))}))});be.muiSupportAuto=!0;const vt=M(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),bt=M(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),gt=M(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ct(e){return _("MuiCheckbox",e)}const ce=F("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),St=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],jt=e=>{const{classes:o,indeterminate:s,color:a,size:r}=e,n={root:["root",s&&"indeterminate",`color${J(a)}`,`size${J(r)}`]},p=U(n,Ct,o);return d({},o,p)},yt=S(tt,{shouldForwardProp:e=>Xe(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.indeterminate&&o.indeterminate,o[`size${J(s.size)}`],s.color!=="default"&&o[`color${J(s.color)}`]]}})(({theme:e,ownerState:o})=>d({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ze(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${ce.checked}, &.${ce.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${ce.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),wt=t.jsx(bt,{}),Lt=t.jsx(vt,{}),Nt=t.jsx(gt,{}),It=f.forwardRef(function(o,s){var a,r;const n=B({props:o,name:"MuiCheckbox"}),{checkedIcon:p=wt,color:i="primary",icon:x=Lt,indeterminate:u=!1,indeterminateIcon:l=Nt,inputProps:c,size:m="medium",className:v}=n,b=A(n,St),g=u?l:x,C=u?l:p,y=d({},n,{color:i,indeterminate:u,size:m}),w=jt(y);return t.jsx(yt,d({type:"checkbox",inputProps:d({"data-indeterminate":u},c),icon:f.cloneElement(g,{fontSize:(a=g.props.fontSize)!=null?a:m}),checkedIcon:f.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:m}),ownerState:y,ref:s,className:P(w.root,v)},b,{classes:w}))}),ee=f.createContext({}),ae=f.createContext({});function Mt(e){return _("MuiStep",e)}F("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const kt=["active","children","className","component","completed","disabled","expanded","index","last"],$t=e=>{const{classes:o,orientation:s,alternativeLabel:a,completed:r}=e;return U({root:["root",s,a&&"alternativeLabel",r&&"completed"]},Mt,o)},zt=S("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.orientation],s.alternativeLabel&&o.alternativeLabel,s.completed&&o.completed]}})(({ownerState:e})=>d({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),Pt=f.forwardRef(function(o,s){const a=B({props:o,name:"MuiStep"}),{active:r,children:n,className:p,component:i="div",completed:x,disabled:u,expanded:l=!1,index:c,last:m}=a,v=A(a,kt),{activeStep:b,connector:g,alternativeLabel:C,orientation:y,nonLinear:w}=f.useContext(ee);let[j=!1,R=!1,k=!1]=[r,x,u];b===c?j=r!==void 0?r:!0:!w&&b>c?R=x!==void 0?x:!0:!w&&b<c&&(k=u!==void 0?u:!0);const I=f.useMemo(()=>({index:c,last:m,expanded:l,icon:c+1,active:j,completed:R,disabled:k}),[c,m,l,j,R,k]),L=d({},a,{active:j,orientation:y,alternativeLabel:C,completed:R,disabled:k,expanded:l,component:i}),$=$t(L),T=t.jsxs(zt,d({as:i,className:P($.root,p),ref:s,ownerState:L},v,{children:[g&&C&&c!==0?g:null,n]}));return t.jsx(ae.Provider,{value:I,children:g&&!C&&c!==0?t.jsxs(f.Fragment,{children:[g,T]}):T})}),Rt=M(t.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Tt=M(t.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Et(e){return _("MuiStepIcon",e)}const de=F("MuiStepIcon",["root","active","completed","error","text"]);var je;const _t=["active","className","completed","error","icon"],Ft=e=>{const{classes:o,active:s,completed:a,error:r}=e;return U({root:["root",s&&"active",a&&"completed",r&&"error"],text:["text"]},Et,o)},pe=S(et,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${de.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${de.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${de.error}`]:{color:(e.vars||e).palette.error.main}})),Bt=S("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,o)=>o.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),At=f.forwardRef(function(o,s){const a=B({props:o,name:"MuiStepIcon"}),{active:r=!1,className:n,completed:p=!1,error:i=!1,icon:x}=a,u=A(a,_t),l=d({},a,{active:r,completed:p,error:i}),c=Ft(l);if(typeof x=="number"||typeof x=="string"){const m=P(n,c.root);return i?t.jsx(pe,d({as:Tt,className:m,ref:s,ownerState:l},u)):p?t.jsx(pe,d({as:Rt,className:m,ref:s,ownerState:l},u)):t.jsxs(pe,d({className:m,ref:s,ownerState:l},u,{children:[je||(je=t.jsx("circle",{cx:"12",cy:"12",r:"12"})),t.jsx(Bt,{className:c.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:l,children:x})]}))}return x});function Ut(e){return _("MuiStepLabel",e)}const E=F("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Vt=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Ot=e=>{const{classes:o,orientation:s,active:a,completed:r,error:n,disabled:p,alternativeLabel:i}=e;return U({root:["root",s,n&&"error",p&&"disabled",i&&"alternativeLabel"],label:["label",a&&"active",r&&"completed",n&&"error",p&&"disabled",i&&"alternativeLabel"],iconContainer:["iconContainer",a&&"active",r&&"completed",n&&"error",p&&"disabled",i&&"alternativeLabel"],labelContainer:["labelContainer",i&&"alternativeLabel"]},Ut,o)},Wt=S("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.orientation]]}})(({ownerState:e})=>d({display:"flex",alignItems:"center",[`&.${E.alternativeLabel}`]:{flexDirection:"column"},[`&.${E.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ht=S("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,o)=>o.label})(({theme:e})=>d({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${E.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${E.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${E.alternativeLabel}`]:{marginTop:16},[`&.${E.error}`]:{color:(e.vars||e).palette.error.main}})),Dt=S("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,o)=>o.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${E.alternativeLabel}`]:{paddingRight:0}})),qt=S("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,o)=>o.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${E.alternativeLabel}`]:{textAlign:"center"}})),$e=f.forwardRef(function(o,s){var a;const r=B({props:o,name:"MuiStepLabel"}),{children:n,className:p,componentsProps:i={},error:x=!1,icon:u,optional:l,slotProps:c={},StepIconComponent:m,StepIconProps:v}=r,b=A(r,Vt),{alternativeLabel:g,orientation:C}=f.useContext(ee),{active:y,disabled:w,completed:j,icon:R}=f.useContext(ae),k=u||R;let I=m;k&&!I&&(I=At);const L=d({},r,{active:y,alternativeLabel:g,completed:j,disabled:w,error:x,orientation:C}),$=Ot(L),T=(a=c.label)!=null?a:i.label;return t.jsxs(Wt,d({className:P($.root,p),ref:s,ownerState:L},b,{children:[k||I?t.jsx(Dt,{className:$.iconContainer,ownerState:L,children:t.jsx(I,d({completed:j,active:y,error:x,icon:k},v))}):null,t.jsxs(qt,{className:$.labelContainer,ownerState:L,children:[n?t.jsx(Ht,d({ownerState:L},T,{className:P($.label,T==null?void 0:T.className),children:n})):null,l]})]}))});$e.muiName="StepLabel";function Yt(e){return _("MuiStepConnector",e)}F("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Gt=["className"],Jt=e=>{const{classes:o,orientation:s,alternativeLabel:a,active:r,completed:n,disabled:p}=e,i={root:["root",s,a&&"alternativeLabel",r&&"active",n&&"completed",p&&"disabled"],line:["line",`line${J(s)}`]};return U(i,Yt,o)},Kt=S("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.orientation],s.alternativeLabel&&o.alternativeLabel,s.completed&&o.completed]}})(({ownerState:e})=>d({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Qt=S("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.line,o[`line${J(s.orientation)}`]]}})(({ownerState:e,theme:o})=>{const s=o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[600];return d({display:"block",borderColor:o.vars?o.vars.palette.StepConnector.border:s},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Xt=f.forwardRef(function(o,s){const a=B({props:o,name:"MuiStepConnector"}),{className:r}=a,n=A(a,Gt),{alternativeLabel:p,orientation:i="horizontal"}=f.useContext(ee),{active:x,disabled:u,completed:l}=f.useContext(ae),c=d({},a,{alternativeLabel:p,orientation:i,active:x,completed:l,disabled:u}),m=Jt(c);return t.jsx(Kt,d({className:P(m.root,r),ref:s,ownerState:c},n,{children:t.jsx(Qt,{className:m.line,ownerState:c})}))});function Zt(e){return _("MuiStepContent",e)}F("MuiStepContent",["root","last","transition"]);const eo=["children","className","TransitionComponent","transitionDuration","TransitionProps"],to=e=>{const{classes:o,last:s}=e;return U({root:["root",s&&"last"],transition:["transition"]},Zt,o)},oo=S("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.last&&o.last]}})(({ownerState:e,theme:o})=>d({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:o.vars?`1px solid ${o.vars.palette.StepContent.border}`:`1px solid ${o.palette.mode==="light"?o.palette.grey[400]:o.palette.grey[600]}`},e.last&&{borderLeft:"none"})),so=S(be,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,o)=>o.transition})({}),no=f.forwardRef(function(o,s){const a=B({props:o,name:"MuiStepContent"}),{children:r,className:n,TransitionComponent:p=be,transitionDuration:i="auto",TransitionProps:x}=a,u=A(a,eo);f.useContext(ee);const{active:l,last:c,expanded:m}=f.useContext(ae),v=d({},a,{last:c}),b=to(v);let g=i;return i==="auto"&&!p.muiSupportAuto&&(g=void 0),t.jsx(oo,d({className:P(b.root,n),ref:s,ownerState:v},u,{children:t.jsx(so,d({as:p,in:l||m,className:b.transition,ownerState:v,timeout:g,unmountOnExit:!0},x,{children:r}))}))});function ao(e){return _("MuiStepper",e)}F("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const ro=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],lo=e=>{const{orientation:o,alternativeLabel:s,classes:a}=e;return U({root:["root",o,s&&"alternativeLabel"]},ao,a)},io=S("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,o[s.orientation],s.alternativeLabel&&o.alternativeLabel]}})(({ownerState:e})=>d({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),co=t.jsx(Xt,{}),po=f.forwardRef(function(o,s){const a=B({props:o,name:"MuiStepper"}),{activeStep:r=0,alternativeLabel:n=!1,children:p,className:i,component:x="div",connector:u=co,nonLinear:l=!1,orientation:c="horizontal"}=a,m=A(a,ro),v=d({},a,{alternativeLabel:n,orientation:c,component:x}),b=lo(v),g=f.Children.toArray(p).filter(Boolean),C=g.map((w,j)=>f.cloneElement(w,d({index:j,last:j+1===g.length},w.props))),y=f.useMemo(()=>({activeStep:r,alternativeLabel:n,connector:u,nonLinear:l,orientation:c}),[r,n,u,l,c]);return t.jsx(ee.Provider,{value:y,children:t.jsx(io,d({as:x,ownerState:v,className:P(b.root,i),ref:s},m,{children:C}))})}),uo=e=>{const[o,s]=f.useState(0),[a,r]=f.useState(()=>{const l=localStorage.getItem("sign_up_data");return l?JSON.parse(l):{}});f.useEffect(()=>{localStorage.setItem("sign_up_data",JSON.stringify(a))},[a]);const n=()=>{s(l=>l>=e.length-1?0:l+1)},p=()=>{s(l=>l<=0?l:l-1)},i=l=>{s(l)},x=l=>{r(c=>({...c,...l}))},u=()=>{r({}),localStorage.removeItem("sign_up_data")};return{currentStepIndex:o,step:e[o],steps:e,isFirstStep:o===0,isLastStep:o===e.length-1,goTo:i,next:n,back:p,updateData:x,formData:a,clearForm:u}},re=({title:e})=>t.jsx("h1",{className:" font-bold text-2xl text-dark-blue text-center",children:e}),Z=({subtitle:e})=>t.jsx("h3",{className:" text-[#98AEB5] text-center",children:e}),mo=S(We)({width:"100%","& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(26,29,50,0.5)"},"&:hover fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-focused fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-error fieldset":{borderColor:"#f44336"}},"& .MuiInputLabel-root":{color:"rgba(26,29,50,0.5)"},"& .MuiInputLabel-root.Mui-focused":{color:"rgb(8,165,170)"},"& .MuiInputLabel-root.Mui-error":{color:"#f44336"}}),G=Ne.forwardRef(({name:e,control:o,label:s,defaultValue:a="",rules:r={},type:n,autoFocus:p,multiline:i},x)=>{const[u,l]=f.useState(!1),c=()=>{l(m=>!m)};return t.jsx(ke,{name:e,control:o,defaultValue:a,rules:r,render:({field:m,fieldState:{error:v}})=>t.jsx(mo,{...m,inputRef:x,label:s,variant:"outlined",autoFocus:p,error:!!v,type:n==="password"&&u?"text":n,multiline:i&&!0,helperText:v?v.message:"",InputProps:{endAdornment:n==="password"&&t.jsx(qe,{position:"end",children:t.jsx(Ye,{"aria-label":"toggle password visibility",onClick:c,edge:"end",children:u?t.jsx(Ge,{}):t.jsx(Je,{})})})}})})}),xo=ue().shape({email:Y().email("Invalid email").required("Please enter your email.").max(255,"Email must be less than 255 characters"),first_name:Y().required("Please enter your first name.").min(2,"First name must be at least 2 characters").max(50,"First name must be less than 50 characters"),last_name:Y().required("Please enter your last name.").min(2,"Last name must be at least 2 characters").max(50,"Last name must be less than 50 characters")}),{palette:fo}=V(),{augmentColor:ho}=fo,vo=e=>ho({color:{main:e}}),bo=V({palette:{mainColor:vo("#08a5aa")}}),go=({updateData:e,next:o,back:s,isFirstStep:a,isLastStep:r,formData:n})=>{const{handleSubmit:p,control:i,formState:{errors:x},setValue:u,reset:l}=me({resolver:xe(xo),defaultValues:{email:n.email||"",first_name:n.first_name||"",last_name:n.last_name||""}});f.useEffect(()=>{if(n)for(const m in n)u(m,n[m])},[n,u]);const c=async m=>{e(m),o()};return t.jsxs("div",{className:"flex flex-col justify-center items-center h-full pt-5 gap-5 w-full",children:[t.jsx("a",{href:"https://relations.mansastars.com/",children:t.jsx("img",{src:ne,alt:"Mansa Logo",className:" h-20"})}),t.jsxs("div",{className:" flex flex-col gap-2",children:[t.jsx(re,{title:"Enter your details"}),t.jsx(Z,{subtitle:"Please provide your name and email address to proceed."})]}),t.jsxs("form",{onSubmit:p(c),className:" flex flex-col gap-3 w-[60%] max-md:w-full max-sm:w-full px-0 mt-5",children:[t.jsxs("div",{className:" flex gap-3 max-sm:flex-col",children:[t.jsx(G,{name:"first_name",control:i,error:x.first_name,label:"First Name",autoFocus:!0}),t.jsx(G,{name:"last_name",control:i,error:x.last_name,label:"Last Name"})]}),t.jsx(G,{name:"email",control:i,error:x.email,label:"Email"}),t.jsx(H,{theme:bo,children:t.jsx(D,{variant:"contained",endIcon:t.jsx(ve,{}),className:" w-full",color:"mainColor",type:"submit",children:"Next"})})]}),t.jsx("div",{className:"w-[60%] max-md:w-full max-sm:w-full",children:t.jsx(Ke,{})})]})},Co=S($e)(({theme:e})=>({"& .MuiStepLabel-labelContainer .Mui-active":{color:"rgba(26,29,50,0.9)"},"& .MuiStepIcon-root.Mui-active":{color:"rgba(26,29,50,0.9)"},"& .MuiStepIcon-root.Mui-completed":{color:"rgba(26,29,50,0.9)"},"& .MuiStepIcon-text":{display:"none"}})),So=S(fe)(({bgcolor:e})=>({width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:8,backgroundColor:e})),jo=[{label:"Your details",description:"Get started with your free account",icon:t.jsx(dt,{})},{label:"Choose a password",description:"Choose a secure password",icon:t.jsx(it,{})},{label:"Referral",description:"Let us know who referred you",icon:t.jsx(nt,{})},{label:"Verify your email",description:"Check your inbox and spam for verification link",icon:t.jsx(ct,{})}];function yo({activeStep:e}){return t.jsx(fe,{sx:{padding:2,borderRadius:2},children:t.jsx(po,{activeStep:e,orientation:"vertical",children:jo.map((o,s)=>{const a=e===s,r=e>s,n=r?"rgba(26,29,50,0.9)":a?"rgb(8,165,170)":"rgba(26,29,50,0.3)";return t.jsxs(Pt,{children:[t.jsx(Co,{StepIconComponent:()=>t.jsx(So,{bgcolor:n,children:r?t.jsx(lt,{style:{color:"#ffffff"}}):Ne.cloneElement(o.icon,{style:{color:a?"#ffffff":"rgba(26,29,50,0.9)"}})}),children:t.jsx("span",{style:{fontWeight:a?"bold":"normal"},children:o.label})}),t.jsx(no,{children:t.jsx("span",{className:" max-md:hidden",children:o.description})})]},o.label)})})})}const wo=({currentStepIndex:e,className:o})=>{const s=Ie();return t.jsxs("div",{className:`
    bg-[rgba(8,165,170,0.2)] min-h-screen
    rounded-r-[50px] max-md:rounded-r-[25px] flex flex-col py-5 ${o} blob`,children:[t.jsx("div",{className:" mt-5",children:t.jsx(yo,{activeStep:e})}),t.jsxs("div",{className:" mt-auto flex max-md:flex-col max-md:gap-3 justify-between px-5 pr-8 font-semibold text-[#2B3144]",children:[t.jsxs("a",{href:"https://relations.mansastars.com/",className:" flex items-center ",children:[t.jsx(he,{}),t.jsx("span",{className:"hover-underline-animation",children:"Back to home"})]}),t.jsxs("div",{className:" max-md:self-end flex items-center",onClick:()=>s("/auth/login"),children:[t.jsx("span",{className:"hover-underline-animation",children:"Sign in"}),t.jsx("span",{className:" hidden max-md:block",children:t.jsx(ve,{})})]})]})]})},Lo=ue().shape({password:Y().required("Please enter your password.").min(8,"Password must be at least 8 characters long."),confirm_password:Y().oneOf([He("password"),null],"Passwords must match").required("Please confirm your password."),acceptTerms:De().oneOf([!0],"You must accept the terms and conditions.").required("You must accept the terms and conditions.")}),{palette:No}=V(),{augmentColor:Io}=No,Mo=e=>Io({color:{main:e}}),ye=V({palette:{mainColor:Mo("#08a5aa")}}),ko=({updateData:e,next:o,back:s,isFirstStep:a,isLastStep:r,formData:n})=>{const[p,i]=f.useState(!1),[x,u]=f.useState(!1),{handleSubmit:l,control:c,formState:{errors:m},setValue:v,reset:b}=me({resolver:xe(Lo),defaultValues:{password:n.password||"",confirm_password:n.confirm_password||"",acceptTerms:n.acceptTerms||!1}});f.useEffect(()=>{if(n)for(const C in n)v(C,n[C])},[n,v]);const g=async C=>{e(C),o()};return t.jsxs("div",{className:"flex flex-col justify-center items-center h-full pt-5 gap-5 w-full",children:[t.jsx("a",{href:"https://relations.mansastars.com/",children:t.jsx("img",{src:ne,alt:"Mansa Logo",className:" h-20"})}),t.jsxs("div",{className:" flex flex-col gap-2",children:[t.jsx(re,{title:"Choose a Password"}),t.jsx(Z,{subtitle:"Create a strong password to secure your account."})]}),t.jsxs("form",{onSubmit:l(g),className:" flex flex-col gap-3 w-[60%] max-md:w-full max-sm:w-full px-0 mt-5",children:[t.jsx(G,{name:"password",control:c,error:m.first_name,label:"Password",autoFocus:!0,type:"password"}),t.jsx(G,{name:"confirm_password",control:c,error:m.last_name,label:"Confirm Password",type:"password"}),t.jsxs("div",{className:"",children:[t.jsx(ot,{control:t.jsx(ke,{name:"acceptTerms",control:c,render:({field:C})=>t.jsx(It,{...C,checked:C.value})}),label:t.jsxs("p",{className:"text-sm",children:["Yes, I agree to the"," ",t.jsx("span",{onClick:()=>i(!0),className:"text-mansa-blue underline cursor-pointer hover:text-dark-blue",children:"Privacy Policy"})," ","and"," ",t.jsx("span",{onClick:()=>u(!0),className:"text-mansa-blue underline cursor-pointer hover:text-dark-blue",children:"Terms of Usage"}),"."]})}),m.acceptTerms&&t.jsx("p",{className:"text-sm text-red-600",children:m.acceptTerms.message})]}),t.jsxs("div",{className:" flex gap-5",children:[t.jsx(H,{theme:ye,children:t.jsx(D,{variant:"outlined",startIcon:t.jsx(he,{}),onClick:s,className:" w-full",color:"mainColor",children:"Back"})}),t.jsx(H,{theme:ye,children:t.jsx(D,{variant:"contained",endIcon:t.jsx(ve,{}),type:"submit",className:" w-full",color:"mainColor",children:"Next"})})]})]}),t.jsx(at,{open:p,onClose:()=>i(!1)}),t.jsx(rt,{open:x,onClose:()=>u(!1)})]})},$o=ue().shape({referral_code:Y()}),{palette:zo}=V(),{augmentColor:Po}=zo,Ro=e=>Po({color:{main:e}}),we=V({palette:{mainColor:Ro("#08a5aa")}}),To=({updateData:e,next:o,back:s,isFirstStep:a,isLastStep:r,formData:n,clearForm:p})=>{const{handleSubmit:i,control:x,formState:{errors:u},setValue:l,reset:c}=me({resolver:xe($o),defaultValues:{referral_code:n.referral_code||""}});f.useEffect(()=>{if(n)for(const v in n)l(v,n[v])},[n,l]);const m=async v=>{e(v),W.fire({title:"Creating Account...",text:"Please wait while we create your account.",allowOutsideClick:!1,didOpen:()=>{W.showLoading()}});try{const b=localStorage.getItem("sign_up_data"),g=b?JSON.parse(b):{},{acceptTerms:C,...y}=g;await Me.post("/users/register",y),W.fire({icon:"success",title:"<span style='color: #1A1D32;'>Registration Successful</span>",html:`
          <p style="color: #1A1D32; font-size: 16px;">
            Your account has been created successfully! Please check your email 
            <strong style="color: #08a5aa;">${y.email}</strong> to verify your account.
          </p>
          <p style="color: #666; font-size: 16px; padding-top: 10px">
            If you do not see the email, please check your spam or junk folder.
          </p>
        `,confirmButtonText:"<span style='color: #FFF;'>OK</span>",confirmButtonColor:"#08a5aa"}).then(()=>{localStorage.setItem("user_email",y.email),p(),o()})}catch(b){W.close();let g="An error occurred during the submission process.";b.response&&b.response.data&&b.response.data.message&&(g=b.response.data.message),W.fire({icon:"error",title:"Submission Failed",text:g,confirmButtonText:"Retry"}),console.error("Failed to submit sign up data:",b)}};return t.jsxs("div",{className:"flex flex-col justify-center items-center h-full pt-5 gap-5 w-full",children:[t.jsx("a",{href:"https://relations.mansastars.com/",children:t.jsx("img",{src:ne,alt:"Mansa Logo",className:" h-20"})}),t.jsxs("div",{className:" flex flex-col gap-2",children:[t.jsx(re,{title:"Enter Your Referral Code"}),t.jsxs("div",{children:[t.jsx(Z,{subtitle:"Please provide the referral code you received."}),t.jsx(Z,{subtitle:"If you don't have a code, you can skip this step."})]})]}),t.jsxs("form",{onSubmit:i(m),className:" flex flex-col gap-3 w-[60%] max-md:w-full max-sm:w-full px-0 mt-5",children:[t.jsx(G,{name:"referral_code",control:x,error:u.referral_code,label:"Referral Code",autoFocus:!0}),t.jsxs("div",{className:" flex gap-5",children:[t.jsx(H,{theme:we,children:t.jsx(D,{variant:"outlined",startIcon:t.jsx(he,{}),onClick:s,className:" w-full",color:"mainColor",children:"Back"})}),t.jsx(H,{theme:we,children:t.jsx(D,{variant:"contained",className:" w-full",color:"mainColor",type:"submit",children:"SIGN UP"})})]})]})]})},{palette:Eo}=V(),{augmentColor:_o}=Eo,Fo=e=>_o({color:{main:e}}),Le=V({palette:{mainColor:Fo("#08a5aa")}}),Bo=()=>{const e=Ie(),o=localStorage.getItem("user_email"),[s,a]=f.useState(!1),r=async()=>{a(!0);const n={email:o};try{await Me.post("users/resend-verification",n),W.fire({icon:"success",title:"<span style='color: #1A1D32;'>Verification Email Resent</span>",html:`
          <p style="color: #1A1D32; font-size: 16px;">
            A new verification email has been sent to 
            <strong style="color: #08a5aa;">${o}</strong>.
          </p>
          <p style="color: #666; font-size: 16px; padding-top: 10px">
            Please check your inbox or spam folder.
          </p>
        `,confirmButtonText:"<span style='color: #FFF;'>OK</span>",confirmButtonColor:"#1A1D32"})}catch(p){console.log(p),W.fire({icon:"error",title:"<span style='color: #F44336;'>Error</span>",html:`
          <p style="color: #1A1D32; font-size: 16px;">
            There was an error resending the verification email to 
            <strong style="color: #08a5aa;">${o}</strong>.
          </p>
          <p style="color: #666; font-size: 16px; padding-top: 16px">
            Please try again later.
          </p>
        `,confirmButtonText:"<span style='color: #FFF;'>OK</span>",confirmButtonColor:"#F44336"})}finally{a(!1)}};return t.jsxs("div",{className:" w-full",children:[t.jsxs("div",{className:"flex flex-col justify-center items-center h-full pt-5 gap-5 w-full",children:[t.jsx("a",{href:"https://relations.mansastars.com/",children:t.jsx("img",{src:ne,alt:"Mansa Logo",className:" h-20"})}),t.jsxs("div",{className:" flex flex-col gap-2",children:[t.jsx(re,{title:"Email Address Verification"}),t.jsx(Z,{subtitle:"Check Your Inbox or Spam Folder"})]})]}),t.jsx("div",{className:" w-full mt-5 flex justify-center",children:t.jsxs("div",{className:" flex flex-col gap-3 w-[90%] max-md:w-full max-sm:w-full px-0 ",children:[t.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base",children:["We have sent an email to"," ",t.jsx("span",{className:"text-mansa-blue font-bold",children:o})," to confirm the validity of your email address. After receiving the email, please follow the link provided to complete your registration."]}),t.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base mt-5",children:["If you do not see the email, please check your"," ",t.jsx("span",{className:" font-bold",children:"spam or junk folder"}),". If you still haven't received it, click the button below to resend the verification email."]}),t.jsxs("div",{className:"flex gap-5 max-md:flex-col justify-center items-center mt-5",children:[t.jsx(H,{theme:Le,children:t.jsx(D,{variant:"outlined",onClick:r,className:" w-full",color:"mainColor",disabled:s,children:s?"Loading...":"Resend Verification"})}),t.jsx(H,{theme:Le,children:t.jsx(D,{variant:"contained",className:" w-full",color:"mainColor",onClick:()=>e("/auth/login"),children:"Login"})})]})]})})]})},Ao=S(st)(({theme:e})=>({height:10,borderRadius:5,[`&.${Se.colorPrimary}`]:{backgroundColor:"rgb(8, 165, 170, 20%)"},[`& .${Se.bar}`]:{borderRadius:5,backgroundColor:e.palette.mode==="light"?"rgba(26,29,50,90%)":"#308fe8"}})),Uo=()=>{const e=[go,ko,To,Bo],{steps:o,currentStepIndex:s,next:a,back:r,isFirstStep:n,isLastStep:p,updateData:i,formData:x,clearForm:u}=uo(e),l=(s+1)/o.length*100,c=o[s];return t.jsxs("div",{className:" flex w-full",children:[t.jsx(wo,{className:"w-[40%] md:w-[50%] max-sm:hidden",currentStepIndex:s}),t.jsxs("div",{className:"bg-white p-5 flex flex-col w-full min-h-screen pb-8",children:[t.jsx("div",{children:t.jsx(c,{updateData:i,next:a,back:r,isFirstStep:n,isLastStep:p,formData:x,clearForm:u})}),t.jsx("div",{className:" flex items-center justify-evenly w-full mt-auto pt-16",children:t.jsx(fe,{sx:{width:"60%"},children:t.jsx(Ao,{variant:"determinate",value:l})})})]})]})},Xo=()=>t.jsx("div",{className:" bg-white w-full h-full",children:t.jsx(Uo,{})});export{Xo as default};
