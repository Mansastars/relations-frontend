import{a6 as R,r as t,Y as z,E as s,a3 as g,Q as D,R as F,I as h}from"./index-CJRY5du7.js";import{E as b,a as j,c as I}from"./checkPasswordStrength-dIP2SSSO.js";function T(){const{verificationToken:S}=R(),[a,d]=t.useState({new_password:"",confirm_password:""}),[f,y]=t.useState(""),[n,v]=t.useState(!1),[i,_]=t.useState(!1),[w,m]=t.useState(!1),[l,C]=t.useState(0),[P,N]=t.useState(!1),E=z(),u=r=>{if(r&&r.target){const{name:c,value:e}=r.target;d(V=>({...V,[c]:e}));const o=I(a.new_password);C(o),N(o>=2)}},k=async r=>{r.preventDefault(),m(!0);const c={new_password:a.new_password,confirm_password:a.confirm_password};try{if(P){const e=await F.post(`users/reset-password/${S}`,c);console.log(e),e.data.status==="success"&&h.fire({icon:"success",title:"Success!",text:"Your password has been successfully reset."}).then(o=>{o.isConfirmed&&E("/auth/login")}),d({new_password:"",confirm_password:""})}else y("Password must be at least eight characters long."),window.scrollTo(0,0)}catch(e){console.log(e),h.fire({icon:"error",title:"Error!",text:e.response.data.message||"An error occurred while resetting your password. Please try again later."})}finally{m(!1)}},x=()=>{v(!n)},p=()=>{_(!i)};return s.jsx("div",{className:" mx-2 flex justify-center relative top-10 ",children:s.jsx("div",{className:"bg-white px-5 py-5 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-lg:w-[70%] max-md:w-[90%]",children:s.jsxs("div",{className:" flex flex-col justify-center items-center gap-5 h-fit ",children:[s.jsx("h1",{className:" text-dark-blue font-bold text-4xl text-center mb-5",children:"Reset Password"}),s.jsxs("form",{onSubmit:k,className:" flex flex-col gap-5 justify-center items-center w-full",children:[f&&s.jsx("p",{className:" text-red-500 font-semibold text-center",children:f}),s.jsxs("div",{className:" w-full md:w-3/4 flex flex-col gap-8",children:[s.jsxs("div",{children:[s.jsx(g,{type:n?"text":"password",title:"New Password*",id:"new_password",placeholder:"Enter new Password",value:a.new_password,onChange:u,icon:n?s.jsx(b,{size:16,onClick:x}):s.jsx(j,{size:16,onClick:x})}),l>0&&s.jsx("p",{className:`text-sm ${l>=2?"text-green-500":"text-red-500"}`,children:l>=2?"Strong password":"Weak password"})]}),s.jsx(g,{type:i?"text":"password",title:"Confirm Password*",id:"confirm_password",placeholder:"Confirm new Password",value:a.confirm_password,onChange:u,icon:i?s.jsx(b,{size:16,onClick:p}):s.jsx(j,{size:16,onClick:p})})]}),s.jsx(D,{type:"submit",text:w?"Loading...":"Reset Password",disabled:w})]})]})})})}export{T as default};
