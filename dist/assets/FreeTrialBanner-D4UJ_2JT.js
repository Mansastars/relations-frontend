import{r as s,v as D,m as e,L as w,q as S}from"./index-BkjcsBTC.js";import{c as j}from"./createLucideIcon-DKijudhD.js";import{T as N}from"./tag-DY4CqG43.js";/**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=j("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);function M(){const[a,d]=s.useState(0),[I,u]=s.useState(""),[f,p]=s.useState(""),[T,l]=s.useState(""),[x,h]=s.useState(!1);D();const c=JSON.parse(localStorage.getItem("user")),i=localStorage.getItem("showBanner");s.useEffect(()=>{const t=JSON.parse(localStorage.getItem("user"));t&&(p(t.id),u(t.email),t.subscription_name===null?l(""):l(t.subscription_name))},[]),c&&s.useEffect(()=>{const t=new Date(c.createdAt),n=new Date(t);n.setDate(t.getDate()+7);const r=n-new Date,o=Math.ceil(r/(1e3*60*60*24));d(o)},[i]),c&&s.useEffect(()=>{h(i==="true"&&a>0)},[i,a]);const y=async(t,n)=>{const m={plan:t,userId:n};try{const o=(await S.post("/users/payment",m,{headers:{"Content-Type":"application/json"}})).data.session;localStorage.setItem("sessionId",JSON.stringify(o.id)),window.location=o.url}catch(r){console.error("Error:",r)}},g=new Date<=new Date("2024-03-31");return e.jsx(e.Fragment,{children:x&&e.jsxs("div",{className:" bg-[#033CEE] flex flex-col items-center text-white p-2 z-50",children:[e.jsxs("div",{className:" flex flex-row items-center gap-2",children:[e.jsx(b,{}),e.jsx("h1",{className:" font-bold max-sm:text-sm",children:"Welcome to your free trial!"})]}),g&&e.jsxs("div",{className:" flex gap-3 items-center text-black",children:[e.jsx(N,{size:24}),e.jsxs("p",{className:" font-bold text-xl max-sm:text-base",children:["Limited Time Offer! ",e.jsx("span",{onClick:()=>y(23.99,f),className:" underline cursor-pointer",children:"Subscribe"})," for only €23.99 until 31.03.2024."]})]}),e.jsx("div",{children:e.jsxs("p",{className:" text-center max-sm:text-sm",children:["You have ",a," ",a===1?"day":"days"," to try Mansa's CRM ",e.jsx(w,{to:"/pricing",className:" underline cursor-pointer font-bold",children:"paid features"}),". Upgrade anytime for as low as €29.99/month."]})})]})})}export{M as F};
