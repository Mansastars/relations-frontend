import{j as e,R as L,r,a as P,b as V,u as T,L as y,S as b}from"./index-B7L-gUB3.js";import{M as F}from"./MansaLogo-g5zwii4N.js";import{h as B,C as R,i as A,k as S,l as D,o as _}from"./index.esm-BDiDXSGt.js";import{I as W,a as O,d as $,b as G,T as H,B as U,G as Y}from"./GoogleSignIn-BiL4phb0.js";import{c as q,f as z,o as I}from"./createSvgIcon-BwtEekE0.js";import{M as h}from"./ToggleSwitch-esfGJd2o.js";import"./index-BZFKiIn0.js";import{x as k}from"./x-button-CT4dcaD-.js";import{B as J}from"./Reusables-WCJuaXrY.js";import{e as K}from"./email-Bj3w0Esp.js";import{D as Q,S as X}from"./Star-CjX67Rtd.js";import"./clsx-B-dksMZM.js";const Z=q(e.jsx("path",{d:"M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7"}),"Lightbulb"),ee=({title:s})=>e.jsx("h1",{className:" font-bold text-2xl text-dark-blue text-center",children:s}),se=({subtitle:s})=>e.jsx("h3",{className:" text-[#98AEB5] text-center",children:s}),ae=z(B)({width:"100%","& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(26,29,50,0.5)"},"&:hover fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-focused fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-error fieldset":{borderColor:"#f44336"}},"& .MuiInputLabel-root":{color:"rgba(26,29,50,0.5)"},"& .MuiInputLabel-root.Mui-focused":{color:"rgb(8,165,170)"},"& .MuiInputLabel-root.Mui-error":{color:"#f44336"}}),C=L.forwardRef(({name:s,control:n,label:t,defaultValue:p="",rules:o={},type:a,autoFocus:c,multiline:m},d)=>{const[x,g]=r.useState(!1),u=()=>{g(l=>!l)};return e.jsx(R,{name:s,control:n,defaultValue:p,rules:o,render:({field:l,fieldState:{error:i}})=>e.jsx(ae,{...l,inputRef:d,label:t,variant:"outlined",autoFocus:c,error:!!i,type:a==="password"&&x?"text":a,multiline:m&&!0,helperText:i?i.message:"",InputProps:{endAdornment:a==="password"&&e.jsx(W,{position:"end",children:e.jsx(O,{"aria-label":"toggle password visibility",onClick:u,edge:"end",children:x?e.jsx($,{}):e.jsx(G,{})})})}})})});function te({onClose:s,show:n,onClick:t}){return e.jsx(e.Fragment,{children:e.jsxs(h,{show:n,onClose:s,children:[e.jsx(h.Header,{}),e.jsx(h.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[e.jsx("img",{src:k,alt:"Error Icon",width:100,className:" max-sm:w-14"}),e.jsx("h1",{className:" font-bold text-3xl text-red-500 max-sm:text-xl",children:"Unverified Account"}),e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Your account is not verified. Please verify your email address."}),e.jsx("div",{className:" mt-5",children:e.jsx(J,{text:"Verify Account",onClick:t})})]})})]})})}function le({userEmail:s,onClose:n,show:t}){const[p,o]=r.useState(""),[a,c]=r.useState(!1),[m,d]=r.useState(!1),[x,g]=r.useState(!1);r.useEffect(()=>{let l;return a&&(l=setTimeout(()=>{o("")},3e3)),()=>clearTimeout(l)},[a]);const u=async()=>{g(!0),d(!1),c(!1);const l={email:s};try{const i=await P.post("users/resend-verification",l);c(!0),o("Success! Your confirmation email has been resent. Please check your inbox.")}catch(i){console.log(i),c(!1),d(!0),o("")}finally{g(!1)}};return r.useEffect(()=>{t&&u()},[t]),e.jsxs(h,{show:t,onClose:n,children:[e.jsx(h.Header,{children:a&&e.jsx("p",{className:"text-mansa-blue font-bold max-sm:text-base",children:p})}),e.jsx(h.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[a||x?e.jsx("img",{src:K,alt:"Email icon",width:100,className:"max-sm:w-14"}):e.jsx("img",{src:k,alt:"Error Icon",width:100,className:"max-sm:w-14"}),e.jsx("h1",{className:"font-bold text-3xl text-dark-blue max-sm:text-xl",children:"Email Verification"}),x&&e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Processing..."}),a&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base",children:["We have sent an email to"," ",e.jsx("span",{className:"text-mansa-blue",children:s})," to confirm the validity of your email address. After receiving the email, please follow the link provided to complete your registration."]}),e.jsx("strong",{children:e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base mt-5",children:["If you do not see the email, please check your"," ",e.jsx("span",{className:" font-bold",children:"spam or junk folder"}),"."]})})]}),m&&e.jsx("p",{className:"text-center text-red-500 max-sm:text-base",children:"Unable to send the email. Please try again later."})]})}),(a||m)&&e.jsx(h.Footer,{children:e.jsxs("p",{className:"text-dark-blue text-center max-sm:text-base",children:["If you did not receive the email,"," ",e.jsx("span",{className:"text-mansa-blue font-semibold cursor-pointer hover:text-dark-blue",onClick:u,children:"Resend Verification mail"})]})})]})}const re=A().shape({email:S().email("Invalid email").required("Please enter your email.").max(255,"Email must be less than 255 characters"),password:S().required("Please enter your password.").min(8,"Password must be at least 8 characters long.")}),{palette:oe}=I(),{augmentColor:ie}=oe,ne=s=>ie({color:{main:s}}),ce=I({palette:{mainColor:ne("#08a5aa")}}),me=()=>{const{login:s}=V(),[n,t]=r.useState(!1),[p,o]=r.useState(!1),[a,c]=r.useState(""),[m,d]=r.useState(!1),x=T(),{handleSubmit:g,control:u,formState:{errors:l},reset:i}=D({resolver:_(re),defaultValues:{email:"",password:""}}),N=()=>{t(!1)},M=()=>{o(!1),i()},E=async v=>{d(!0);try{b.fire({title:"Logging In...",text:"We are processing your login details. This will only take a few moments.",allowOutsideClick:!1,didOpen:()=>{b.showLoading()}}),c(v.email),await s(v);const f=localStorage.getItem("user"),j=JSON.parse(f);b.close(),j.isVerified===!1||j.isVerified===null?t(!0):x("/alldashboards"),i()}catch(f){b.close();let j="An error occurred while logging in";f.response&&f.response.data&&f.response.data.message&&(j=f.response.data.message),b.fire({icon:"error",title:"Submission Failed",text:`${j}. Please try again.`,confirmButtonText:"Retry"}),console.error("Failed to login: ",f)}finally{d(!1)}};return e.jsx("div",{className:"bg-white w-full h-full flex justify-center",children:e.jsxs("div",{className:" w-full max-md:w-[80%] max-sm:w-full max-lg:w-[50%] h-full p-5 flex flex-col gap-3",children:[e.jsx("a",{href:"https://relations.mansastars.com/",className:" self-center",children:e.jsx("img",{src:F,alt:"Mansa Logo",className:" h-20"})}),e.jsxs("div",{className:" flex flex-col gap-2",children:[e.jsx(ee,{title:"Welcome back!"}),e.jsx(se,{subtitle:"You talk, We organise."})]}),e.jsxs("form",{onSubmit:g(E),className:" flex flex-col gap-5 px-2 mt-5 max-md:px-0 max-md:mt-2",children:[e.jsx(C,{name:"email",control:u,error:l.email,label:"Email",autoFocus:!0}),e.jsxs("div",{className:" flex flex-col gap-1",children:[e.jsx(C,{name:"password",control:u,error:l.first_name,label:"Password",type:"password"}),e.jsx(y,{to:"/verify_email",className:" text-sm text-mansa-blue hover:text-dark-blue self-end",children:e.jsx("u",{children:"Forgot your password?"})})]}),e.jsx(H,{theme:ce,children:e.jsx(U,{variant:"contained",className:" w-full",color:"mainColor",type:"submit",disabled:m,children:m?"Loading...":"Log In"})})]}),e.jsx("div",{className:" w-full px-2",children:e.jsx(Y,{})}),e.jsx("div",{className:" self-center mt-3",children:e.jsxs("span",{children:["Don't have an account?"," ",e.jsx(y,{to:"/auth/sign_up",className:" text-mansa-blue hover:text-dark-blue",children:e.jsx("u",{children:"Register"})})]})}),t&&e.jsx(te,{onClose:N,show:n,onClick:()=>{N(),o(!0)}}),o&&e.jsx(le,{onClose:M,show:p,userEmail:a})]})})},w=({children:s})=>e.jsx("div",{className:" w-14 h-14 rounded-full bg-[rgba(26,29,50,20%)] flex items-center justify-center",children:s}),de="/assets/WebsiteShareImage-CG0zGbV_.jpeg",xe=()=>e.jsxs("div",{className:"bg-[rgba(8,165,170,0.2)] w-full h-full relative flex justify-center p-8 max-sm:p-3",children:[e.jsx("div",{className:" glassmorphism w-full overflow-auto p-5 max-sm:p-2",children:e.jsx("img",{src:de,alt:"Dashboard",className:"rounded-lg w-full h-full "})}),e.jsx("div",{className:" absolute top-16 left-5 max-sm:left-0 max-sm:top-8",children:e.jsx(w,{children:e.jsx(Q,{className:" text-dark-blue"})})}),e.jsx("div",{className:" absolute bottom-16 left-5 max-sm:left-0 max-sm:bottom-8",children:e.jsx(w,{children:e.jsx(Z,{className:" text-dark-blue"})})}),e.jsx("div",{className:" absolute top-56 right-2 max-sm:top-10 max-sm:-right-0",children:e.jsx(w,{children:e.jsx(X,{className:" text-dark-blue"})})})]}),ue=()=>e.jsxs("div",{className:"flex w-full h-full max-lg:flex-col",children:[e.jsx("div",{className:"w-full lg:w-2/5",children:e.jsx(me,{})}),e.jsx("div",{className:" w-full lg:w-3/5 h-full",children:e.jsx(xe,{})})]}),Ie=()=>e.jsx("div",{className:" w-full h-full",children:e.jsx(ue,{})});export{Ie as default};
