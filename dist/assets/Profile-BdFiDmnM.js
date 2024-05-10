import{u as Q,b as R,r,j as e,a as d,S as j}from"./index-CmSeK_KP.js";import{B as g,d as o}from"./Reusables-m-BucBxu.js";import{F as q}from"./FreeTrialBanner-mrjCoe9U.js";import{S as H}from"./SidePanel-BHhKgt7Z.js";import{Q as J,B as n}from"./ReactToastify-MLOSbpoN.js";import{c as K}from"./checkPasswordStrength-CgIlBevu.js";import{E as N,a as y}from"./eye-nibifTX3.js";/* empty css              */import"./createLucideIcon-C3U0c-Qf.js";function ie(){const u=Q(),{isAuthenticated:v}=R(),[p,C]=r.useState(!1),[f,E]=r.useState(!1),[h,P]=r.useState(!1),[X,D]=r.useState(null),[I,B]=r.useState(!1),[V,U]=r.useState(!1),[z,F]=r.useState(!1),[a,i]=r.useState({first_name:"",last_name:"",phone_number:"",bio:"",email:"",old_password:"",new_password:"",confirm_password:""}),[b,$]=r.useState(0),[A,G]=r.useState(!1),m={borderBottom:"1px solid  #d3d3d3"};r.useEffect(()=>{v||u("/auth/login")},[v,u]),r.useEffect(()=>{(async()=>{try{const s=(await d.get("users/single-user")).data.user;D(s),i({first_name:s.first_name||"",last_name:s.last_name||"",phone_number:s.phone_number||"",bio:s.bio||"",email:s.email||"",old_password:"",new_password:"",confirm_password:""})}catch(l){console.error("Error fetching user details:",l)}})()},[]);const x=t=>{if(t&&t.target){const{name:l,value:s}=t.target;i(c=>({...c,[l]:s}))}},Y=async t=>{t.preventDefault();const l={first_name:a.first_name,last_name:a.last_name,phone_number:a.phone_number,bio:a.bio};try{const s=await d.patch("users/update-profile",l);n.success(`${s.data.message}`)}catch(s){console.log(s),n.error(`${s.response.data.message}`),B(!1)}},T=t=>{if(t&&t.target){const{name:l,value:s}=t.target;i(c=>({...c,[l]:s}))}},L=async t=>{t.preventDefault();const l={email:a.email};try{const s=await d.patch("users/update-email",l);n.success(`${s.data.message}`)}catch(s){console.log(s),n.error(`${s.response.data.message}`),U(!1)}},w=t=>{if(t&&t.target){const{name:s,value:c}=t.target;i(O=>({...O,[s]:c}))}const l=K(a.new_password);$(l),G(l>=2)},W=async t=>{t.preventDefault();const l={old_password:a.old_password,new_password:a.new_password,confirm_password:a.confirm_password};try{if(A){const s=await d.patch("users/change-password",l);i({old_password:"",new_password:"",confirm_password:""}),n.success(`${s.data.message}`)}else n.error("Password must be at least eight characters long.")}catch(s){console.log(s),n.error(`${s.response.data.message}`),F(!1)}},M=async()=>{j.fire({title:"Are you sure?",text:"You will not be able to recover your account!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(async t=>{if(t.isConfirmed)try{await d.delete("users/delete-account"),j.fire("Deleted!","Your account has been deleted.","success"),u("/auth/sign_up")}catch(l){console.error("Error:",l),j.fire("Error","Failed to delete user","error")}})},_=()=>{C(!p)},S=()=>{P(!h)},k=()=>{E(!f)};return e.jsxs("div",{className:"",children:[e.jsx("div",{className:" sticky top-0 z-50",children:e.jsx(q,{})}),e.jsxs("div",{className:" flex gap-3 h-screen",children:[e.jsx("div",{className:" h-screen",children:e.jsx(H,{})}),e.jsx("div",{className:" flex flex-col w-full items-center overflow-y-auto",children:e.jsxs("div",{className:" bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-sm:w-full",children:[e.jsxs("form",{onSubmit:Y,className:" w-full",children:[e.jsxs("div",{className:" flex flex-row max-sm:flex-col justify-between pb-8",children:[e.jsxs("div",{children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"General Info"}),e.jsx("p",{className:" text-dark-blue text-base",children:"Use the form below to update your profile."})]}),e.jsx("div",{className:"",children:e.jsx(g,{text:"Update Profile",type:"submit",disabled:I})})]}),e.jsxs("div",{className:"flex flex-col gap-5 pb-8",children:[e.jsxs("div",{className:"flex max-[768px]:flex-col gap-5 w-full",children:[e.jsx(o,{type:"text",title:"First Name",placeholder:"",id:"first_name",value:a.first_name,onChange:x}),e.jsx(o,{type:"text",title:"Last Name",placeholder:"",id:"last_name",value:a.last_name,onChange:x})]}),e.jsxs("div",{className:" flex flex-col gap-1 w-1/2 max-[768px]:w-full",children:[e.jsx(o,{type:"tel",title:"Phone Number",placeholder:"+123456789",id:"phone_number",maxLength:15,value:a.phone_number,onChange:x}),e.jsx("p",{className:" text-dark-blue text-base",children:"We collect this incase of emergencies."})]})]}),e.jsxs("div",{className:"flex flex-col justify-between pb-8",style:m,children:[e.jsx("h2",{className:" text-dark-blue font-bold text-xl pb-6",children:"Profile Section"}),e.jsxs("div",{className:" relative col-span-full",children:[e.jsx("label",{htmlFor:"bio",className:" absolute -top-3 left-3 bg-white px-1 text-sm leading-6 text-dark-blue font-semibold",children:"Bio"}),e.jsx("div",{className:"mt-1",children:e.jsx("textarea",{id:"bio",name:"bio",rows:2,className:"block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue",placeholder:"",value:a.bio,onChange:x})})]}),e.jsx("p",{className:"text-dark-blue text-base",children:"Brief description of your profile."})]})]}),e.jsxs("form",{onSubmit:L,className:" w-full pb-8",style:m,children:[e.jsxs("div",{className:" flex flex-row justify-between pb-8 max-sm:flex-col",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"Email"}),e.jsx("p",{className:"text-dark-blue text-base",children:"Use this form to update your email."})]}),e.jsx("div",{className:"",children:e.jsx(g,{text:"Update Email",type:"submit",disabled:V})})]}),e.jsxs("div",{children:[e.jsx(o,{type:"email",title:"Email",placeholder:"",id:"email",value:a.email,onChange:T}),e.jsx("p",{className:"text-dark-blue text-base",children:"You will need this email to log in."})]})]}),e.jsxs("form",{onSubmit:W,className:" w-full pb-8",style:m,children:[e.jsxs("div",{className:" flex flex-row justify-between pb-8 max-sm:flex-col",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"Password"}),e.jsx("p",{className:"text-dark-blue text-base",children:"Use this form to update your password."})]}),e.jsx("div",{className:"",children:e.jsx(g,{text:"Update Password",type:"submit",disabled:z})})]}),e.jsxs("div",{className:" flex flex-col gap-2",children:[e.jsxs("div",{className:" flex flex-col gap-6",children:[e.jsx(o,{type:p?"text":"password",title:"Current Password",placeholder:"",id:"old_password",icon:p?e.jsx(N,{size:14,onClick:_}):e.jsx(y,{size:14,onClick:_}),value:a.old_password,onChange:w}),e.jsxs("div",{children:[e.jsx(o,{type:f?"text":"password",title:"New Password",placeholder:"",id:"new_password",icon:f?e.jsx(N,{size:14,onClick:k}):e.jsx(y,{size:14,onClick:k}),value:a.new_password,onChange:w}),b>0&&e.jsx("p",{className:`text-sm ${b>=2?"text-green-500":"text-red-500"}`,children:b>=2?"Strong password":"Weak password"})]}),e.jsx(o,{type:h?"text":"password",title:"Confirm Password",placeholder:"",id:"confirm_password",icon:h?e.jsx(N,{size:14,onClick:S}):e.jsx(y,{size:14,onClick:S}),value:a.confirm_password,onChange:w})]}),e.jsx("p",{className:"text-dark-blue text-base",children:"Must be at least 8 characters long."})]})]}),e.jsx("div",{className:" w-full pb-8",style:m,children:e.jsxs("div",{className:" flex flex-col gap-5 pb-8 max-sm:flex-col",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h1",{className:"font-bold text-3xl text-red-500",children:"Delete Account"}),e.jsx("p",{className:"text-dark-blue text-base font-semibold",children:"By clicking the button below, you will permanently delete your account. Are you sure you want to proceed?"})]}),e.jsx("div",{className:"",children:e.jsx("button",{className:" bg-red-500  active:bg-dark-blue text-white px-12 py-4 rounded-xl transition-all duration-200 shadow hover:bg-dark-blue",onClick:()=>M(),children:e.jsx("p",{className:" font-bold",children:"Delete Account"})})})]})}),e.jsx(J,{})]})})]})]})}export{ie as default};
