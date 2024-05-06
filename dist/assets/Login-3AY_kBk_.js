import{j as e,r as s,a as V,b as L,u as P,L as S}from"./index-BoNr5YXl.js";import{B as k,S as E}from"./Reusables-TmYy2U2p.js";import{M as o}from"./ToggleSwitch-DJTTKPXw.js";import{x as C}from"./x-button-CT4dcaD-.js";import{e as A}from"./email-Bj3w0Esp.js";import{E as B,a as D}from"./eye-De0RhDS9.js";/* empty css              */import"./createLucideIcon-BYl9meum.js";function F({onClose:n,show:a,onClick:i}){return e.jsx(e.Fragment,{children:e.jsxs(o,{show:a,onClose:n,children:[e.jsx(o.Header,{}),e.jsx(o.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[e.jsx("img",{src:C,alt:"Error Icon",width:100,className:" max-sm:w-14"}),e.jsx("h1",{className:" font-bold text-3xl text-red-500 max-sm:text-xl",children:"Unverified Account"}),e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Your account is not verified. Please verify your email address."}),e.jsx("div",{className:" mt-5",children:e.jsx(k,{text:"Verify Account",onClick:i})})]})})]})})}function R({userEmail:n,onClose:a,show:i}){const[h,c]=s.useState(""),[t,d]=s.useState(!1),[x,u]=s.useState(!1),[p,m]=s.useState(!1);s.useEffect(()=>{let r;return t&&(r=setTimeout(()=>{c("")},3e3)),()=>clearTimeout(r)},[t]);const g=async()=>{m(!0),u(!1),d(!1);const r={email:n};try{const j=await V.post("users/resend-verification",r);d(!0),c("Success! Your confirmation email has been resent. Please check your inbox.")}catch(j){console.log(j),d(!1),u(!0),c("")}finally{m(!1)}};return s.useEffect(()=>{i&&g()},[i]),e.jsxs(o,{show:i,onClose:a,children:[e.jsx(o.Header,{children:t&&e.jsx("p",{className:"text-mansa-blue font-bold max-sm:text-base",children:h})}),e.jsx(o.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[t||p?e.jsx("img",{src:A,alt:"Email icon",width:100,className:"max-sm:w-14"}):e.jsx("img",{src:C,alt:"Error Icon",width:100,className:"max-sm:w-14"}),e.jsx("h1",{className:"font-bold text-3xl text-dark-blue max-sm:text-xl",children:"Email Confirmation"}),p&&e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Processing..."}),t&&e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base",children:["We have sent an email to ",e.jsx("span",{className:"text-mansa-blue",children:n})," to confirm the validity of your email address. After receiving the email, please follow the link provided to complete your registration."]}),x&&e.jsx("p",{className:"text-center text-red-500 max-sm:text-base",children:"Unable to send the email. Please try again later."})]})}),(t||x)&&e.jsx(o.Footer,{children:e.jsxs("p",{className:"text-dark-blue text-center max-sm:text-base",children:["If you did not receive the email, ",e.jsx("span",{className:"text-mansa-blue font-semibold cursor-pointer hover:text-dark-blue",onClick:g,children:"Resend confirmation mail"})]})})]})}function q(){const{login:n}=L(),[a,i]=s.useState({email:"",password:""}),[h,c]=s.useState(""),[t,d]=s.useState(!1),[x,u]=s.useState(!1),[p,m]=s.useState(!1),[g,r]=s.useState(!1),j=P(),v=f=>{if(f&&f.target){const{name:N,value:l}=f.target;i(b=>({...b,[N]:l}))}},y=()=>{m(!1)},M=()=>{r(!1),i({email:"",password:""})},I=async f=>{f.preventDefault(),u(!0);const N={email:a.email,password:a.password};try{await n(N);const l=localStorage.getItem("user"),b=JSON.parse(l);b.isVerified===!1||b.isVerified===null?m(!0):j("/alldashboards")}catch(l){console.log(l),l.response&&l.response.data&&l.response.data.message?c(l.response.data.message):c("Something went wrong. Please try again.")}finally{u(!1)}},w=()=>{d(!t)};return e.jsxs("div",{className:" mx-2 flex justify-center relative top-10",children:[e.jsx("div",{className:"bg-white px-5 py-5 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-lg:w-[70%] max-md:w-[90%]",children:e.jsxs("div",{className:" flex flex-col justify-center items-center gap-5 h-fit ",children:[e.jsxs("div",{className:" flex flex-col justify-center items-center",children:[e.jsx("h1",{className:" text-dark-blue font-extrabold text-5xl mb-5",children:"Log In"}),e.jsxs("p",{className:" text-base text-dark-blue",children:["You don't have an account ",e.jsx(S,{to:"/auth/sign_up",className:" text-mansa-blue hover:text-dark-blue",children:e.jsx("u",{children:"Sign Up"})})]})]}),e.jsxs("form",{action:"",onSubmit:I,className:" flex flex-col gap-5 justify-center items-center w-full",children:[h&&e.jsx("p",{className:" text-red-500 font-semibold text-center",children:h}),e.jsxs("div",{className:" w-full md:w-3/4 flex flex-col gap-8",children:[e.jsx(E,{type:"email",title:"Email*",placeholder:"SundiJoe@gmail.com",id:"email",autoComplete:"email",value:a.email,onChange:v}),e.jsxs("div",{children:[e.jsx(E,{type:t?"text":"password",title:"Password*",id:"password",placeholder:"•••••••••",value:a.password,onChange:v,icon:t?e.jsx(B,{size:16,onClick:w}):e.jsx(D,{size:16,onClick:w})}),e.jsx(S,{to:"/verify_email",className:" text-sm text-mansa-blue hover:text-dark-blue",children:e.jsx("u",{children:"Forgot password?"})})]})]}),e.jsx(k,{type:"submit",text:x?"Logging In...":"Log In",disabled:x})]})]})}),m&&e.jsx(F,{onClose:y,show:p,onClick:()=>{y(),r(!0)}}),r&&e.jsx(R,{onClose:M,show:g,userEmail:a.email})]})}export{q as default};
