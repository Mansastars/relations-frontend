import{j as e,R as B,r as i,a as I,u as C,f as P,b as V,L as v,S as b}from"./index-vshIotDG.js";import{M as T}from"./MansaLogo-g5zwii4N.js";import{b as F,C as O,I as R,c as A,e as y,f as G,o as _}from"./index.esm-D5MBmk4M.js";import{I as D,d as W,b as $,G as U,T as Y,a as q}from"./GoogleSignInLogo-xwH_KKpx.js";import{f as H,n as k}from"./createSvgIcon-YUNvvwxU.js";import{M as g}from"./ToggleSwitch-CCdV_bEJ.js";import"./index-CVKwkwZb.js";import{x as L}from"./x-button-CT4dcaD-.js";import{B as J}from"./Reusables-BcN7dQNk.js";import{e as z}from"./email-Bj3w0Esp.js";import{Q,B as K}from"./ReactToastify-DM1LJwaD.js";import"./clsx-B-dksMZM.js";const X=({title:s})=>e.jsx("h1",{className:" font-bold text-2xl text-dark-blue text-center",children:s}),Z=({subtitle:s})=>e.jsx("h3",{className:" text-[#98AEB5] text-center",children:s}),ee=H(F)({width:"100%","& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(26,29,50,0.5)"},"&:hover fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-focused fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-error fieldset":{borderColor:"#f44336"}},"& .MuiInputLabel-root":{color:"rgba(26,29,50,0.5)"},"& .MuiInputLabel-root.Mui-focused":{color:"rgb(8,165,170)"},"& .MuiInputLabel-root.Mui-error":{color:"#f44336"}}),S=B.forwardRef(({name:s,control:n,label:a,defaultValue:l="",rules:o={},type:t,autoFocus:d,multiline:x},c)=>{const[u,p]=i.useState(!1),f=()=>{p(r=>!r)};return e.jsx(O,{name:s,control:n,defaultValue:l,rules:o,render:({field:r,fieldState:{error:m}})=>e.jsx(ee,{...r,inputRef:c,label:a,variant:"outlined",autoFocus:d,error:!!m,type:t==="password"&&u?"text":t,multiline:x&&!0,helperText:m?m.message:"",InputProps:{endAdornment:t==="password"&&e.jsx(R,{position:"end",children:e.jsx(D,{"aria-label":"toggle password visibility",onClick:f,edge:"end",children:u?e.jsx(W,{}):e.jsx($,{})})})}})})});function se({onClose:s,show:n,onClick:a}){return e.jsx(e.Fragment,{children:e.jsxs(g,{show:n,onClose:s,children:[e.jsx(g.Header,{}),e.jsx(g.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[e.jsx("img",{src:L,alt:"Error Icon",width:100,className:" max-sm:w-14"}),e.jsx("h1",{className:" font-bold text-3xl text-red-500 max-sm:text-xl",children:"Unverified Account"}),e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Your account is not verified. Please verify your email address."}),e.jsx("div",{className:" mt-5",children:e.jsx(J,{text:"Verify Account",onClick:a})})]})})]})})}function ae({userEmail:s,onClose:n,show:a}){const[l,o]=i.useState(""),[t,d]=i.useState(!1),[x,c]=i.useState(!1),[u,p]=i.useState(!1);i.useEffect(()=>{let r;return t&&(r=setTimeout(()=>{o("")},3e3)),()=>clearTimeout(r)},[t]);const f=async()=>{p(!0),c(!1),d(!1);const r={email:s};try{const m=await I.post("users/resend-verification",r);d(!0),o("Success! Your confirmation email has been resent. Please check your inbox.")}catch(m){console.log(m),d(!1),c(!0),o("")}finally{p(!1)}};return i.useEffect(()=>{a&&f()},[a]),e.jsxs(g,{show:a,onClose:n,children:[e.jsx(g.Header,{children:t&&e.jsx("p",{className:"text-mansa-blue font-bold max-sm:text-base",children:l})}),e.jsx(g.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[t||u?e.jsx("img",{src:z,alt:"Email icon",width:100,className:"max-sm:w-14"}):e.jsx("img",{src:L,alt:"Error Icon",width:100,className:"max-sm:w-14"}),e.jsx("h1",{className:"font-bold text-3xl text-dark-blue max-sm:text-xl",children:"Email Verification"}),u&&e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Processing..."}),t&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base",children:["We have sent an email to"," ",e.jsx("span",{className:"text-mansa-blue",children:s})," to confirm the validity of your email address. After receiving the email, please follow the link provided to complete your registration."]}),e.jsx("strong",{children:e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base mt-5",children:["If you do not see the email, please check your"," ",e.jsx("span",{className:" font-bold",children:"spam or junk folder"}),"."]})})]}),x&&e.jsx("p",{className:"text-center text-red-500 max-sm:text-base",children:"Unable to send the email. Please try again later."})]})}),(t||x)&&e.jsx(g.Footer,{children:e.jsxs("p",{className:"text-dark-blue text-center max-sm:text-base",children:["If you did not receive the email,"," ",e.jsx("span",{className:"text-mansa-blue font-semibold cursor-pointer hover:text-dark-blue",onClick:f,children:"Resend Verification mail"})]})})]})}const te=()=>{const s=C(),n=P({onSuccess:async a=>{console.log(a);try{const l=await I.post("/users/google_login",{tokenResponse:a});console.log("User authenticated",l.data);const{user:o,token:t,showBanner:d,showBilling:x,numberOfDaysLeft:c}=l.data;localStorage.setItem("user",JSON.stringify(o)),localStorage.setItem("token",t),localStorage.setItem("showBanner",l.data.showBanner.toString()),localStorage.setItem("showBilling",l.data.showBilling.toString()),localStorage.setItem("numberOfDaysLeft",c),s("/alldashboards")}catch(l){console.log(l),K.error("Something went wrong. Please try again.")}},onError:async a=>console.log("Login failed ",a)});return e.jsxs("div",{className:"google-sign-in-container",children:[e.jsxs("div",{className:"separator",children:[e.jsx("hr",{className:"line"}),e.jsx("span",{className:"or-text",children:"OR"}),e.jsx("hr",{className:"line"})]}),e.jsxs("button",{className:"google-button",onClick:()=>n(),children:[e.jsx("img",{src:U,alt:"Google Logo",className:" w-8 h-8"}),e.jsx("span",{className:" text-dark-blue font-semibold",children:"Sign in with Google"})]}),e.jsx(Q,{})]})},le=A().shape({email:y().email("Invalid email").required("Please enter your email.").max(255,"Email must be less than 255 characters"),password:y().required("Please enter your password.")}),{palette:oe}=k(),{augmentColor:re}=oe,ie=s=>re({color:{main:s}}),ne=k({palette:{mainColor:ie("#08a5aa")}}),ce=()=>{const{login:s}=V(),[n,a]=i.useState(!1),[l,o]=i.useState(!1),[t,d]=i.useState(""),[x,c]=i.useState(!1),u=C(),{handleSubmit:p,control:f,formState:{errors:r},reset:m}=G({resolver:_(le),defaultValues:{email:"",password:""}}),w=()=>{a(!1)},M=()=>{o(!1),m()},E=async N=>{c(!0);try{b.fire({title:"Logging In...",text:"We are processing your login details. This will only take a few moments.",allowOutsideClick:!1,didOpen:()=>{b.showLoading()}}),d(N.email),await s(N);const h=localStorage.getItem("user"),j=JSON.parse(h);b.close(),j.isVerified===!1||j.isVerified===null?a(!0):u("/alldashboards"),m()}catch(h){b.close();let j="An error occurred while logging in";h.response&&h.response.data&&h.response.data.message&&(j=h.response.data.message),b.fire({icon:"error",title:"Submission Failed",text:`${j}. Please try again.`,confirmButtonText:"Retry"}),console.error("Failed to login: ",h)}finally{c(!1)}};return e.jsx("div",{className:"bg-white w-full flex justify-center pb-8",children:e.jsxs("div",{className:" w-full max-md:w-[80%] max-sm:w-full max-lg:w-[50%] h-full p-5 flex flex-col gap-3",children:[e.jsx("a",{href:"https://relations.mansastars.com/",className:" self-center",children:e.jsx("img",{src:T,alt:"Mansa Logo",className:" h-20"})}),e.jsxs("div",{className:" flex flex-col gap-2",children:[e.jsx(X,{title:"Welcome back!"}),e.jsx(Z,{subtitle:"You talk, We organise."})]}),e.jsxs("form",{onSubmit:p(E),className:" flex flex-col gap-5 px-2 mt-5 max-md:px-0 max-md:mt-2",children:[e.jsx(S,{name:"email",control:f,error:r.email,label:"Email",autoFocus:!0}),e.jsxs("div",{className:" flex flex-col gap-1",children:[e.jsx(S,{name:"password",control:f,error:r.first_name,label:"Password",type:"password"}),e.jsx(v,{to:"/verify_email",className:" text-sm text-mansa-blue hover:text-dark-blue self-end",children:e.jsx("u",{children:"Forgot your password?"})})]}),e.jsx(Y,{theme:ne,children:e.jsx(q,{variant:"contained",className:" w-full",color:"mainColor",type:"submit",disabled:x,children:x?"Loading...":"Log In"})})]}),e.jsx("div",{className:" w-full px-2",children:e.jsx(te,{})}),e.jsx("div",{className:" self-center mt-3",children:e.jsxs("span",{children:["Don't have an account?"," ",e.jsx(v,{to:"/auth/sign_up",className:" text-mansa-blue hover:text-dark-blue",children:e.jsx("u",{children:"Register"})})]})}),a&&e.jsx(se,{onClose:w,show:n,onClick:()=>{w(),o(!0)}}),o&&e.jsx(ae,{onClose:M,show:l,userEmail:t})]})})},me="/assets/WebsiteShareImage-CG0zGbV_.jpeg",de=()=>e.jsx("div",{className:"bg-[rgba(8,165,170,0.2)] w-full h-full relative flex flex-col justify-center p-8 max-sm:p-3",children:e.jsx("div",{className:" glassmorphism w-full h-fit p-5 max-sm:p-2",children:e.jsx("img",{src:me,alt:"Dashboard",className:"rounded-lg "})})}),xe=()=>e.jsxs("div",{className:"flex w-full max-lg:flex-col",children:[e.jsx("div",{className:"w-full lg:w-2/5",children:e.jsx(ce,{})}),e.jsx("div",{className:" w-full lg:w-3/5",children:e.jsx(de,{})})]}),Ie=()=>e.jsx("div",{className:" w-full h-full",children:e.jsx(xe,{})});export{Ie as default};
