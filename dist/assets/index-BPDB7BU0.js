import{j as r,R as a,k as f}from"./index-NkhKcpvd.js";import{J as l,c as p,_ as d}from"./mergeSlotProps-CMzUSF4q.js";const h=typeof window<"u"?r.useLayoutEffect:r.useEffect;function b(t){const e=r.useRef(t);return h(()=>{e.current=t}),r.useRef((...n)=>(0,e.current)(...n)).current}const u={};function x(t,e){const n=r.useRef(u);return n.current===u&&(n.current=t(e)),n}const m=[];function E(t){r.useEffect(t,m)}class o{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new o}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function j(){const t=x(o.create).current;return E(t.disposeEffect),t}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},s(t,e)}function O(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}const _=a.createContext(null);function y(t){return Object.keys(t).length===0}function C(t=null){const e=r.useContext(l);return!e||y(e)?t:e}const R=["value"],c=r.createContext();function v(t){let{value:e}=t,n=p(t,R);return f.jsx(c.Provider,d({value:e??!0},n))}const P=()=>{const t=r.useContext(c);return t??!1};export{v as R,o as T,O as _,P as a,b,_ as c,C as d,j as e,h as u};
