import{u as Q,b as R,r,j as e,a as d,S as g}from"./index-BMyiurqO.js";import{B as j,d as o}from"./Reusables-Dl83CoTu.js";import{F as q}from"./FreeTrialBanner-D1OuVmit.js";import{Q as H,B as n}from"./ReactToastify-C1Z9DcHN.js";import{c as J}from"./checkPasswordStrength-CgIlBevu.js";import{E as y,a as N}from"./eye-Bu9NVjfD.js";/* empty css              */import"./createLucideIcon-iVCSiL_T.js";import"./tag-U4QsZHHw.js";import"./clsx-B-dksMZM.js";function ie(){const x=Q(),{isAuthenticated:v}=R(),[p,C]=r.useState(!1),[f,E]=r.useState(!1),[h,D]=r.useState(!1),[K,I]=r.useState(null),[P,B]=r.useState(!1),[V,U]=r.useState(!1),[z,F]=r.useState(!1),[a,i]=r.useState({first_name:"",last_name:"",phone_number:"",bio:"",email:"",old_password:"",new_password:"",confirm_password:""}),[b,$]=r.useState(0),[A,G]=r.useState(!1),m={borderBottom:"1px solid  #d3d3d3"};r.useEffect(()=>{v||x("/auth/login")},[v,x]),r.useEffect(()=>{(async()=>{try{const s=(await d.get("users/single-user")).data.user;I(s),i({first_name:s.first_name||"",last_name:s.last_name||"",phone_number:s.phone_number||"",bio:s.bio||"",email:s.email||"",old_password:"",new_password:"",confirm_password:""})}catch(l){console.error("Error fetching user details:",l)}})()},[]);const u=t=>{if(t&&t.target){const{name:l,value:s}=t.target;i(c=>({...c,[l]:s}))}},Y=async t=>{t.preventDefault();const l={first_name:a.first_name,last_name:a.last_name,phone_number:a.phone_number,bio:a.bio};try{const s=await d.patch("users/update-profile",l);n.success(`${s.data.message}`)}catch(s){console.log(s),n.error(`${s.response.data.message}`),B(!1)}},T=t=>{if(t&&t.target){const{name:l,value:s}=t.target;i(c=>({...c,[l]:s}))}},L=async t=>{t.preventDefault();const l={email:a.email};try{const s=await d.patch("users/update-email",l);n.success(`${s.data.message}`)}catch(s){console.log(s),n.error(`${s.response.data.message}`),U(!1)}},w=t=>{if(t&&t.target){const{name:s,value:c}=t.target;i(O=>({...O,[s]:c}))}const l=J(a.new_password);$(l),G(l>=2)},W=async t=>{t.preventDefault();const l={old_password:a.old_password,new_password:a.new_password,confirm_password:a.confirm_password};try{if(A){const s=await d.patch("users/change-password",l);i({old_password:"",new_password:"",confirm_password:""}),n.success(`${s.data.message}`)}else n.error("Password must be at least eight characters long.")}catch(s){console.log(s),n.error(`${s.response.data.message}`),F(!1)}},M=async()=>{g.fire({title:"Are you sure?",text:"You will not be able to recover your account!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(async t=>{if(t.isConfirmed)try{await d.delete("users/delete-account"),g.fire("Deleted!","Your account has been deleted.","success"),x("/auth/sign_up")}catch(l){console.error("Error:",l),g.fire("Error","Failed to delete user","error")}})},_=()=>{C(!p)},S=()=>{D(!h)},k=()=>{E(!f)};return e.jsxs("div",{className:"",children:[e.jsx("div",{className:" sticky top-0 z-50",children:e.jsx(q,{})}),e.jsx("div",{className:" flex flex-col w-full px-3 items-center overflow-y-auto",children:e.jsxs("div",{className:" bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full",children:[e.jsxs("form",{onSubmit:Y,className:" w-full",children:[e.jsxs("div",{className:" flex flex-row max-sm:flex-col justify-between pb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"General Info"}),e.jsx("p",{className:" text-dark-blue text-base",children:"Use the form below to update your profile."})]}),e.jsx("div",{className:"",children:e.jsx(j,{text:"Update Profile",type:"submit",disabled:P})})]}),e.jsxs("div",{className:"flex flex-col gap-5 pb-8",children:[e.jsxs("div",{className:"flex max-[768px]:flex-col gap-5 w-full",children:[e.jsx(o,{type:"text",title:"First Name",placeholder:"",id:"first_name",value:a.first_name,onChange:u}),e.jsx(o,{type:"text",title:"Last Name",placeholder:"",id:"last_name",value:a.last_name,onChange:u})]}),e.jsxs("div",{className:" flex flex-col gap-1 w-1/2 max-[768px]:w-full",children:[e.jsx(o,{type:"tel",title:"Phone Number",placeholder:"+123456789",id:"phone_number",maxLength:15,value:a.phone_number,onChange:u}),e.jsx("p",{className:" text-dark-blue text-base",children:"We collect this incase of emergencies."})]})]}),e.jsxs("div",{className:"flex flex-col justify-between pb-8",style:m,children:[e.jsx("h2",{className:" text-dark-blue font-bold text-xl pb-6",children:"Profile Section"}),e.jsxs("div",{className:" relative col-span-full",children:[e.jsx("label",{htmlFor:"bio",className:" absolute -top-3 left-3 bg-white px-1 text-sm leading-6 text-dark-blue font-semibold",children:"Bio"}),e.jsx("div",{className:"mt-1",children:e.jsx("textarea",{id:"bio",name:"bio",rows:2,className:"block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue",placeholder:"",value:a.bio,onChange:u})})]}),e.jsx("p",{className:"text-dark-blue text-base",children:"Brief description of your profile."})]})]}),e.jsxs("form",{onSubmit:L,className:" w-full pb-8",style:m,children:[e.jsxs("div",{className:" flex flex-row justify-between pb-8 max-sm:flex-col",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"Email"}),e.jsx("p",{className:"text-dark-blue text-base",children:"Use this form to update your email."})]}),e.jsx("div",{className:"",children:e.jsx(j,{text:"Update Email",type:"submit",disabled:V})})]}),e.jsxs("div",{children:[e.jsx(o,{type:"email",title:"Email",placeholder:"",id:"email",value:a.email,onChange:T}),e.jsx("p",{className:"text-dark-blue text-base",children:"You will need this email to log in."})]})]}),e.jsxs("form",{onSubmit:W,className:" w-full pb-8",style:m,children:[e.jsxs("div",{className:" flex flex-row justify-between pb-8 max-sm:flex-col",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"Password"}),e.jsx("p",{className:"text-dark-blue text-base",children:"Use this form to update your password."})]}),e.jsx("div",{className:"",children:e.jsx(j,{text:"Update Password",type:"submit",disabled:z})})]}),e.jsxs("div",{className:" flex flex-col gap-2",children:[e.jsxs("div",{className:" flex flex-col gap-6",children:[e.jsx(o,{type:p?"text":"password",title:"Current Password",placeholder:"",id:"old_password",icon:p?e.jsx(y,{size:14,onClick:_}):e.jsx(N,{size:14,onClick:_}),value:a.old_password,onChange:w}),e.jsxs("div",{children:[e.jsx(o,{type:f?"text":"password",title:"New Password",placeholder:"",id:"new_password",icon:f?e.jsx(y,{size:14,onClick:k}):e.jsx(N,{size:14,onClick:k}),value:a.new_password,onChange:w}),b>0&&e.jsx("p",{className:`text-sm ${b>=2?"text-green-500":"text-red-500"}`,children:b>=2?"Strong password":"Weak password"})]}),e.jsx(o,{type:h?"text":"password",title:"Confirm Password",placeholder:"",id:"confirm_password",icon:h?e.jsx(y,{size:14,onClick:S}):e.jsx(N,{size:14,onClick:S}),value:a.confirm_password,onChange:w})]}),e.jsx("p",{className:"text-dark-blue text-base",children:"Must be at least 8 characters long."})]})]}),e.jsx("div",{className:" w-full pb-8",style:m,children:e.jsxs("div",{className:" flex flex-col gap-5 pb-8 max-sm:flex-col",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h1",{className:"font-bold text-3xl text-red-500",children:"Delete Account"}),e.jsx("p",{className:"text-dark-blue text-base font-semibold",children:"By clicking the button below, you will permanently delete your account. Are you sure you want to proceed?"})]}),e.jsx("div",{className:"",children:e.jsx("button",{className:" bg-red-500  active:bg-dark-blue text-white px-12 py-4 rounded-xl transition-all duration-200 shadow hover:bg-dark-blue",onClick:()=>M(),children:e.jsx("p",{className:" font-bold",children:"Delete Account"})})})]})}),e.jsx(H,{})]})})]})}export{ie as default};
