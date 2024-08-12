import{k as e,R as E,j as i,o as P,p as S,q as I,z as A,m as l,L as N}from"./index-NkhKcpvd.js";import{M as _}from"./MansaLogo-g5zwii4N.js";import{a as R,C as B,I as V,c as F,d as v,u as O,o as G}from"./index.esm-D9VZHrUA.js";import{d as W,a as Y,G as D,C as U}from"./Company_6-BnTbzb1c.js";import{s as H,f as L}from"./mergeSlotProps-CMzUSF4q.js";import{I as $}from"./createSvgIcon-CXPpLiU4.js";import{M as p}from"./ToggleSwitch-MaoBAVbN.js";import"./index-Cm5_Rdcn.js";import{x as k}from"./x-button-CT4dcaD-.js";import{B as q}from"./Reusables-DqavWwLv.js";import{e as z}from"./email-Bj3w0Esp.js";import{T as Q,a as J}from"./ThemeProvider-BzKXum-E.js";import"./Menu-CmUtnW2d.js";import"./index-BPDB7BU0.js";const K=({title:t})=>e.jsx("h1",{className:" font-bold text-2xl text-dark-blue text-center",children:t}),Z=({subtitle:t})=>e.jsx("h3",{className:" text-[#98AEB5] text-center",children:t}),X=H(R)({width:"100%","& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(26,29,50,0.5)"},"&:hover fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-focused fieldset":{borderColor:"rgb(8,165,170)"},"&.Mui-error fieldset":{borderColor:"#f44336"}},"& .MuiInputLabel-root":{color:"rgba(26,29,50,0.5)"},"& .MuiInputLabel-root.Mui-focused":{color:"rgb(8,165,170)"},"& .MuiInputLabel-root.Mui-error":{color:"#f44336"}}),C=E.forwardRef(({name:t,control:n,label:r,defaultValue:c="",rules:a={},type:s,autoFocus:d,multiline:x},u)=>{const[f,j]=i.useState(!1),g=()=>{j(o=>!o)};return e.jsx(B,{name:t,control:n,defaultValue:c,rules:a,render:({field:o,fieldState:{error:m}})=>e.jsx(X,{...o,inputRef:u,label:r,variant:"outlined",autoFocus:d,error:!!m,type:s==="password"&&f?"text":s,multiline:x&&!0,helperText:m?m.message:"",InputProps:{endAdornment:s==="password"&&e.jsx(V,{position:"end",children:e.jsx($,{"aria-label":"toggle password visibility",onClick:g,edge:"end",children:f?e.jsx(W,{}):e.jsx(Y,{})})})}})})});function ee({onClose:t,show:n,onClick:r}){return e.jsx(e.Fragment,{children:e.jsxs(p,{show:n,onClose:t,children:[e.jsx(p.Header,{}),e.jsx(p.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[e.jsx("img",{src:k,alt:"Error Icon",width:100,className:" max-sm:w-14"}),e.jsx("h1",{className:" font-bold text-3xl text-red-500 max-sm:text-xl",children:"Unverified Account"}),e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Your account is not verified. Please verify your email address."}),e.jsx("div",{className:" mt-5",children:e.jsx(q,{text:"Verify Account",onClick:r})})]})})]})})}function se({userEmail:t,onClose:n,show:r}){const[c,a]=i.useState(""),[s,d]=i.useState(!1),[x,u]=i.useState(!1),[f,j]=i.useState(!1);i.useEffect(()=>{let o;return s&&(o=setTimeout(()=>{a("")},3e3)),()=>clearTimeout(o)},[s]);const g=async()=>{j(!0),u(!1),d(!1);const o={email:t};try{const m=await P.post("users/resend-verification",o);d(!0),a("Success! Your confirmation email has been resent. Please check your inbox.")}catch(m){console.log(m),d(!1),u(!0),a("")}finally{j(!1)}};return i.useEffect(()=>{r&&g()},[r]),e.jsxs(p,{show:r,onClose:n,children:[e.jsx(p.Header,{children:s&&e.jsx("p",{className:"text-mansa-blue font-bold max-sm:text-base",children:c})}),e.jsx(p.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[s||f?e.jsx("img",{src:z,alt:"Email icon",width:100,className:"max-sm:w-14"}):e.jsx("img",{src:k,alt:"Error Icon",width:100,className:"max-sm:w-14"}),e.jsx("h1",{className:"font-bold text-3xl text-dark-blue max-sm:text-xl",children:"Email Verification"}),f&&e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Processing..."}),s&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base",children:["We have sent an email to"," ",e.jsx("span",{className:"text-mansa-blue",children:t})," to confirm the validity of your email address. After receiving the email, please follow the link provided to complete your registration."]}),e.jsx("strong",{children:e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base mt-5",children:["If you do not see the email, please check your"," ",e.jsx("span",{className:" font-bold",children:"spam or junk folder"}),"."]})})]}),x&&e.jsx("p",{className:"text-center text-red-500 max-sm:text-base",children:"Unable to send the email. Please try again later."})]})}),(s||x)&&e.jsx(p.Footer,{children:e.jsxs("p",{className:"text-dark-blue text-center max-sm:text-base",children:["If you did not receive the email,"," ",e.jsx("span",{className:"text-mansa-blue font-semibold cursor-pointer hover:text-dark-blue",onClick:g,children:"Resend Verification mail"})]})})]})}const te=()=>{const t=S(),{LoginWithGoogle:n}=I(),r=A({onSuccess:async c=>{try{l.fire({title:"Logging In...",text:"We are processing your login details. This will only take a few moments.",allowOutsideClick:!1,didOpen:()=>{l.showLoading()}}),await n({tokenResponse:c}),l.close(),t("/alldashboards")}catch(a){l.close();let s="An error occurred while logging in.";a.response&&a.response.data&&a.response.data.message&&(s=a.response.data.message+". Please try again."),a.response.data.message==="Account not found, Please Sign Up"?(s="Account not found. Please sign up to create a new account.",l.fire({icon:"error",title:"Account Not Found",text:s,confirmButtonText:"Sign Up"}).then(()=>t("/auth/sign_up"))):a.response.data.message==="Incorrect Password"?(s="This email is already registered with a password. Please sign in using your email and password.",l.fire({icon:"error",title:"Incorrect Password",text:s,confirmButtonText:"Retry"})):l.fire({icon:"error",title:"Login Failed",text:s,confirmButtonText:"Retry"}),console.error("Failed to login: ",a)}},onError:async c=>{console.log("Login failed ",c),l.fire({icon:"error",title:"Login Error",text:"Failed to login with Google. Please try again.",confirmButtonText:"Retry"})}});return e.jsxs("div",{className:"google-sign-in-container",children:[e.jsxs("div",{className:"separator",children:[e.jsx("hr",{className:"line"}),e.jsx("span",{className:"or-text",children:"OR"}),e.jsx("hr",{className:"line"})]}),e.jsxs("button",{className:"google-button",onClick:()=>r(),children:[e.jsx("img",{src:D,alt:"Google Logo",className:"w-8 h-8"}),e.jsx("span",{className:"text-dark-blue font-semibold",children:"Sign in with Google"})]})]})},ae=F().shape({email:v().email("Invalid email").required("Please enter your email.").max(255,"Email must be less than 255 characters"),password:v().required("Please enter your password.")}),{palette:re}=L(),{augmentColor:le}=re,oe=t=>le({color:{main:t}}),ie=L({palette:{mainColor:oe("#08a5aa")}}),ne=()=>{const{login:t}=I(),[n,r]=i.useState(!1),[c,a]=i.useState(!1),[s,d]=i.useState(""),[x,u]=i.useState(!1),f=S(),{handleSubmit:j,control:g,formState:{errors:o},reset:m}=O({resolver:G(ae),defaultValues:{email:"",password:""}}),w=()=>{r(!1)},M=()=>{a(!1),m()},T=async y=>{u(!0);try{l.fire({title:"Logging In...",text:"We are processing your login details. This will only take a few moments.",allowOutsideClick:!1,didOpen:()=>{l.showLoading()}}),d(y.email),await t(y);const h=localStorage.getItem("user"),b=JSON.parse(h);l.close(),b.isVerified===!1||b.isVerified===null?r(!0):f("/alldashboards"),m()}catch(h){l.close();let b="An error occurred while logging in";h.response&&h.response.data&&h.response.data.message&&(b=h.response.data.message),l.fire({icon:"error",title:"Submission Failed",text:`${b}. Please try again.`,confirmButtonText:"Retry"}),console.error("Failed to login: ",h)}finally{u(!1)}};return e.jsx("div",{className:"bg-white w-full h-full min-h-screen max-lg:min-h-fit flex justify-center pb-8",children:e.jsxs("div",{className:" w-full max-md:w-[80%] max-sm:w-full max-lg:w-[50%] h-full p-5 flex flex-col gap-3",children:[e.jsx("a",{href:"https://relations.mansastars.com/",className:" self-center",children:e.jsx("img",{src:_,alt:"Mansa Logo",className:" h-20"})}),e.jsxs("div",{className:" flex flex-col gap-2",children:[e.jsx(K,{title:"Welcome back!"}),e.jsx(Z,{subtitle:"You talk, We organise."})]}),e.jsxs("form",{onSubmit:j(T),className:" flex flex-col gap-5 px-2 mt-5 max-md:px-0 max-md:mt-2",children:[e.jsx(C,{name:"email",control:g,error:o.email,label:"Email",autoFocus:!0}),e.jsxs("div",{className:" flex flex-col gap-1",children:[e.jsx(C,{name:"password",control:g,error:o.first_name,label:"Password",type:"password"}),e.jsx(N,{to:"/verify_email",className:" text-sm text-mansa-blue hover:text-dark-blue self-end",children:e.jsx("u",{children:"Forgot your password?"})})]}),e.jsx(Q,{theme:ie,children:e.jsx(J,{variant:"contained",className:" w-full",color:"mainColor",type:"submit",disabled:x,children:x?"Loading...":"Log In"})})]}),e.jsx("div",{className:" w-full px-2",children:e.jsx(te,{})}),e.jsx("div",{className:" self-center mt-3",children:e.jsxs("span",{children:["Don't have an account?"," ",e.jsx(N,{to:"/auth/sign_up",className:" text-mansa-blue hover:text-dark-blue",children:e.jsx("u",{children:"Register"})})]})}),r&&e.jsx(ee,{onClose:w,show:n,onClick:()=>{w(),a(!0)}}),a&&e.jsx(se,{onClose:M,show:c,userEmail:s})]})})},ce="/assets/WebsiteShareImage-CG0zGbV_.jpeg",me=()=>e.jsx("div",{className:"bg-[rgba(8,165,170,0.2)] w-full h-full min-h-screen max-lg:min-h-fit flex flex-col justify-center p-8 max-sm:p-3",children:e.jsxs("div",{className:" glassmorphism w-full h-fit p-5 max-sm:p-2",children:[e.jsx("img",{src:ce,alt:"Dashboard",className:"rounded-t-lg "}),e.jsxs("div",{className:" bg-white px-5 py-10 rounded-b-lg",children:[e.jsx("div",{children:e.jsx("h3",{className:" text-2xl max-sm:text-lg font-semibold text-center mb-10 mt-5",children:"Trusted by over 800 fund managers and start-ups across the globe"})}),e.jsxs("div",{className:" flex flex-wrap items-center justify-center w-full gap-5",children:[e.jsx("div",{className:" w-20 h-12 flex items-center justify-center",children:e.jsx("img",{src:"https://centuryoakventures.com/wp-content/uploads/2024/02/COV-Logo.svg",alt:"Trusted Company 1"})}),e.jsx("div",{className:" w-20 h-12 flex items-center justify-center",children:e.jsx("img",{src:"https://media.licdn.com/dms/image/C4D0BAQHtlhjG5szJKA/company-logo_200_200/0/1631335017074?e=1728518400&v=beta&t=YD3rRaTw8W38CAx3tPOFW4aPZ8IvGcBy-tBbCY4OOrk",alt:"Trusted Company 2"})}),e.jsx("div",{className:" w-20 h-12 flex items-center justify-center",children:e.jsx("img",{src:"https://assets-global.website-files.com/64217dee51bd3f4b49be943f/64218814dc531adc96a0e9ba_MT%20Logo.webp",alt:"Trusted Company 3"})}),e.jsx("div",{className:" w-20 h-12 flex items-center justify-center",children:e.jsx("img",{src:"https://media.licdn.com/dms/image/C560BAQHpEkHODoMiLw/company-logo_200_200/0/1664218436549/lvlup_vc_logo?e=1728518400&v=beta&t=AYc9MAyTBhix2R5RtezF2IEu23eKRWJVokW2b8dthVE",alt:"Trusted Company 4"})}),e.jsx("div",{className:" w-20 h-12 flex items-center justify-center",children:e.jsx("img",{src:"https://media.licdn.com/dms/image/C560BAQGRla1tM3Q9yw/company-logo_200_200/0/1630609388366/tlcom_capital_partners_logo?e=1728518400&v=beta&t=si48pU6SIU4coH2tYOlaAttYi1bwaWpvAOoqVbKR-L4",alt:"Trusted Company 5"})}),e.jsx("div",{className:" w-20 h-12 flex items-center justify-center",children:e.jsx("img",{src:U,alt:"Trusted Company 6",className:""})})]})]})]})}),de=()=>e.jsxs("div",{className:"flex w-full max-lg:flex-col",children:[e.jsx("div",{className:"w-full lg:w-2/5",children:e.jsx(ne,{})}),e.jsx("div",{className:" w-full lg:w-3/5",children:e.jsx(me,{})})]}),Ie=()=>e.jsx("div",{className:" w-full h-full",children:e.jsx(de,{})});export{Ie as default};