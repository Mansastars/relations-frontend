import{j as e,r as n,u as v,b as y,a as k}from"./index-CF6aRru1.js";import{c as S}from"./createLucideIcon-C95knvvK.js";import{T as C}from"./tag-Dh8UyQdv.js";/**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=S("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function t({text:s,color:l}){return e.jsxs("div",{className:" flex flex-row gap-3 items-center",children:[e.jsx(I,{color:l}),e.jsx("p",{className:" font-semibold",children:s})]})}function i({price:s}){return e.jsxs("div",{className:" flex flex-row gap-3 items-center justify-center",children:[e.jsx("span",{className:" font-bold text-3xl",children:"€"}),e.jsx("p",{className:" font-bold text-6xl",children:s})]})}function o({text:s,onClick:l}){return e.jsx("button",{onClick:l,className:"w-full uppercase shadow py-3 border-2 border-dark-blue rounded-lg bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue transition-all duration-200",children:e.jsx("p",{className:" font-bold",children:s})})}function j({text:s,onClick:l}){return e.jsx("button",{onClick:l,className:"w-full uppercase shadow py-3 border-2 border-white rounded-lg bg-white text-dark-blue hover:bg-transparent hover:text-white transition-all duration-200",children:e.jsx("p",{className:" font-bold",children:s})})}function F(){const[s,l]=n.useState(!0),[a,f]=n.useState(""),[P,b]=n.useState(""),[D,d]=n.useState(""),m=v(),{isAuthenticated:u}=y(),x=JSON.parse(localStorage.getItem("user"));n.useEffect(()=>{u||m("/auth/login")},[u,m]);const N=new Date<=new Date("2024-03-31");n.useEffect(()=>{const c=JSON.parse(localStorage.getItem("user"));c&&(f(c.id),b(c.email),c.subscription_name===null?d(""):d(c.subscription_name))},[]);const r=async(c,g)=>{const w={plan:c,userId:g};try{const p=(await k.post("/users/payment",w,{headers:{"Content-Type":"application/json"}})).data.session;localStorage.setItem("sessionId",JSON.stringify(p.id)),window.location=p.url}catch(h){console.error("Error:",h)}};return e.jsxs("div",{className:" h-screen",children:[N&&e.jsxs("div",{className:" bg-[#033CEE] w-full sticky top-0 z-50 text-white px-5 py-2 flex flex-col justify-between items-center",children:[e.jsx("div",{className:" flex gap-3 items-center",children:e.jsxs("div",{className:" flex gap-3 items-center",children:[e.jsx(C,{size:30}),e.jsxs("p",{className:" font-bold text-2xl max-sm:text-base",children:["Limited Time Offer!"," ",e.jsx("span",{onClick:()=>r(23.99,a),className:" text-black underline cursor-pointer",children:"Subscribe"})," ","for only €23.99."]})]})}),e.jsx("p",{className:" max-sm:text-sm",children:"Offer ends March 31st, 2024."})]}),e.jsxs("div",{className:" text-dark-blue flex flex-col items-center w-full gap-10 pb-20 overflow-y-auto px-3",children:[e.jsxs("div",{className:" text-center pt-7",children:[e.jsx("p",{className:" font-semibold",children:x&&!x.on_trial&&x.subscription_name===null&&"Your trial has ended..."}),e.jsxs("p",{className:" font-semibold",children:["Save up to ",e.jsx("span",{className:" text-2xl font-extrabold",children:"15%"})," of all our plans with our annual subcription"]})]}),e.jsxs("div",{className:"toggle lg:mb-10",children:[e.jsx("label",{className:"name",children:"Annually"}),e.jsx("input",{type:"checkbox",className:"checkbox",id:"checkbox",checked:s,onChange:()=>l(!s)}),e.jsx("label",{htmlFor:"checkbox",className:"label",children:e.jsx("div",{className:"ball"})}),e.jsx("label",{className:"name",children:"Monthly"})]}),e.jsxs("div",{className:" flex flex-row flex-wrap max-lg:gap-8 justify-center w-full",children:[e.jsxs("div",{className:" bg-white px-6 py-8 w-80 max-sm:w-64 rounded-xl flex flex-col gap-8 lg:shadow",children:[e.jsx("h1",{className:" text-2xl font-semibold text-center",children:"Basic"}),e.jsxs("div",{className:" w-full",children:[s&&e.jsx(i,{price:"14.99"}),!s&&e.jsx(i,{price:"170.00"})]}),e.jsxs("div",{className:" flex flex-col gap-4",children:[e.jsx(t,{text:"1 Deal Creation"}),e.jsx(t,{text:"Maximum of 5 Contacts"}),e.jsx(t,{text:"No Investor Update Feature"})]}),e.jsxs("div",{className:" mt-auto",children:[s&&e.jsx("div",{className:" w-full",children:e.jsx(o,{text:"Subscribe",onClick:()=>r(14.99,a)})}),!s&&e.jsx("div",{className:" w-full",children:e.jsx(o,{text:"Subscribe",onClick:()=>r(170,a)})})]})]}),e.jsxs("div",{className:" bg-dark-blue text-white px-6 lg:scale-110 py-8 w-80 max-sm:w-64 rounded-xl flex flex-col gap-8 lg:shadow ",children:[e.jsx("h1",{className:" text-2xl font-semibold text-center",children:"Recommended"}),e.jsxs("div",{className:" w-full",children:[s&&e.jsx(i,{price:"29.99"}),!s&&e.jsx(i,{price:"300.00"})]}),e.jsxs("div",{className:" flex flex-col gap-4",children:[e.jsx(t,{text:"1 User"}),e.jsx(t,{text:"Track leads"}),e.jsx(t,{text:"Filter leads by member"}),e.jsx(t,{text:"Update leads"}),e.jsx(t,{text:"Change lead stage"}),e.jsx(t,{text:"Send automated monthly investor updates"}),e.jsx(t,{text:"Access Investors Platform"}),!s&&e.jsx(t,{text:"Dedicated customer support"})]}),e.jsxs("div",{children:[s&&e.jsx("div",{className:" w-full",children:e.jsx(j,{text:"Subscribe",onClick:()=>r(29.99,a)})}),!s&&e.jsx("div",{className:" w-full",children:e.jsx(j,{text:"Subscribe",onClick:()=>r(300,a)})})]})]}),e.jsxs("div",{className:" bg-white px-6 py-8 w-80 max-sm:w-64 rounded-xl flex flex-col gap-8 lg:shadow ",children:[e.jsx("h1",{className:" text-2xl font-semibold text-center",children:"Premium"}),e.jsxs("div",{className:" w-full",children:[s&&e.jsx(i,{price:"99.99"}),!s&&e.jsx(i,{price:"1,000"})]}),e.jsxs("div",{className:" flex flex-col gap-4",children:[e.jsx(t,{text:"Up to 5 Users"}),e.jsx(t,{text:"Track leads"}),e.jsx(t,{text:"Filter leads by member"}),e.jsx(t,{text:"Update leads"}),e.jsx(t,{text:"Change lead stage"}),e.jsx(t,{text:"Send automated monthly investor updates"}),e.jsx(t,{text:"Access Investors Platform"}),!s&&e.jsx(t,{text:"Dedicated customer support"})]}),e.jsxs("div",{children:[s&&e.jsx("div",{className:" w-full",children:e.jsx(o,{text:"Subscribe",onClick:()=>r(99.99,a)})}),!s&&e.jsx("div",{className:" w-full",children:e.jsx(o,{text:"Subscribe",onClick:()=>r(1e3,a)})})]})]})]}),e.jsxs("div",{className:" flex flex-row max-sm:flex-col gap-3 items-center justify-center mt-10 mb-20 w-full",children:[e.jsx("p",{className:"font-semibold",children:"You have other needs?"}),e.jsx("button",{className:"uppercase shadow p-3 border-2 border-dark-blue rounded-lg bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue transition-all duration-200",children:e.jsx("a",{href:"mailto:service@mansastars.com",children:e.jsx("p",{className:" font-bold",children:"Talk to Us"})})})]})]})]})}export{F as default};
