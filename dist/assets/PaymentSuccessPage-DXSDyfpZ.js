import{p as l,q as u,j as o,B as m,k as s,Q as f,o as n}from"./index-BLOzz4TG.js";import{S as x}from"./Sucess-Cgw9c4Jb.js";import{B as h}from"./Reusables-BCV39sgL.js";function S(){const e=l(),{isAuthenticated:c}=u();o.useEffect(()=>{c||e("/auth/login")},[c,e]);const r=o.useEffect(()=>{m.success("Payment Successful!"),setTimeout(()=>{e("/alldashboards")},5e3)},[]),i=async()=>{try{const t=new URLSearchParams(location.search).get("session_id"),g=await n.get(`/users/successful-payment?session_id=${t}`),a=await n.get("/users/profile/");localStorage.setItem("user",JSON.stringify(a.data.user)),localStorage.setItem("showBanner",a.data.showBanner.toString()),localStorage.setItem("showBilling",a.data.showBilling.toString())}catch(t){console.error(t.message)}};return s.jsxs("div",{className:"w-screen px-4 my-10 min-h-[80vh] flex flex-col gap-10 justify-center items-center",children:[s.jsxs("div",{className:" text-dark-blue mx-auto flex flex-col gap-7 justify-center items-center",children:[s.jsx("img",{src:x,className:" w-28 h-28",alt:"Payment Successful"}),s.jsx("h3",{className:"text-4xl font-bold text-center",children:"Payment Successful!"}),s.jsxs("p",{className:" text-center font-semibold text-lg",children:["Congratulations! Your payment has been successfully processed. ",s.jsx("br",{}),"Thank you for choosing our services."]})]}),s.jsx(h,{text:"View Dashboards",onClick:i()}),s.jsx(f,{})]})}export{S as default};
