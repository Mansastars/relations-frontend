import{C as I,q as t,h as y,I as R,d as z,g as _,a as $,s as h,_ as s,b as g,u as x,c as B,e as E}from"./mergeSlotProps-BaL-9L-V.js";import{r as N,m as P,o as k,C as M}from"./index-BkjcsBTC.js";import{u as O,B as j}from"./ThemeProvider-Sv0_LeGl.js";import{c as F,d as S,i as q,o as T,b as U,e as L,a as W}from"./Menu-CrxE1NLB.js";import{u as A,b as D}from"./index-BZZvt_hb.js";function G(e,o){return()=>null}function V(e,o){return()=>null}function H(e,o,r,a,n){return null}const J={configure:e=>{I.configure(e)}},K=Object.freeze(Object.defineProperty({__proto__:null,capitalize:t,createChainedFunction:F,createSvgIcon:y,debounce:S,deprecatedPropType:G,isMuiElement:q,ownerDocument:T,ownerWindow:U,requirePropFactory:V,setRef:R,unstable_ClassNameGenerator:J,unstable_useEnhancedEffect:A,unstable_useId:L,unsupportedProp:H,useControlled:W,useEventCallback:D,useForkRef:z,useIsFocusVisible:O},Symbol.toStringTag,{value:"Module"}));function Q(e){return $("MuiIconButton",e)}const X=_("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Y=["edge","children","className","color","disabled","disableFocusRipple","size"],Z=e=>{const{classes:o,disabled:r,color:a,edge:n,size:i}=e,l={root:["root",r&&"disabled",a!=="default"&&`color${t(a)}`,n&&`edge${t(n)}`,`size${t(i)}`]};return E(l,Q,o)},w=h(j,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.color!=="default"&&o[`color${t(r.color)}`],r.edge&&o[`edge${t(r.edge)}`],o[`size${t(r.size)}`]]}})(({theme:e,ownerState:o})=>s({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:g(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.edge==="start"&&{marginLeft:o.size==="small"?-3:-12},o.edge==="end"&&{marginRight:o.size==="small"?-3:-12}),({theme:e,ownerState:o})=>{var r;const a=(r=(e.vars||e).palette)==null?void 0:r[o.color];return s({},o.color==="inherit"&&{color:"inherit"},o.color!=="inherit"&&o.color!=="default"&&s({color:a==null?void 0:a.main},!o.disableRipple&&{"&:hover":s({},a&&{backgroundColor:e.vars?`rgba(${a.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:g(a.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),o.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},o.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${X.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),ne=N.forwardRef(function(o,r){const a=x({props:o,name:"MuiIconButton"}),{edge:n=!1,children:i,className:l,color:v="default",disabled:u=!1,disableFocusRipple:d=!1,size:b="medium"}=a,m=B(a,Y),p=s({},a,{edge:n,color:v,disabled:u,disableFocusRipple:d,size:b}),C=Z(p);return P.jsx(w,s({className:k(C.root,l),centerRipple:!0,focusRipple:!d,disabled:u,ref:r},m,{ownerState:p,children:i}))});var c={};const ee=M(K);var f;function ie(){return f||(f=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=ee}(c)),c}export{ne as I,ie as r};
