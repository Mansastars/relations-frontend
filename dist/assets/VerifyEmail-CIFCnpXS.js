import{r as a,m as e,q as j,v as b}from"./index-BkjcsBTC.js";import{e as g,B as y}from"./Reusables-DxCfqRn3.js";import{M as f}from"./ToggleSwitch-yHRR1Yny.js";import"./index-CMw_FhaI.js";import{e as N}from"./email-Bj3w0Esp.js";import{x as v}from"./x-button-CT4dcaD-.js";import"./index-pr4D6RQ2.js";function w({userEmail:l,onClose:c,show:r}){const[o,i]=a.useState(""),[s,n]=a.useState(!1),[t,m]=a.useState(!1),[x,d]=a.useState(!1);a.useEffect(()=>{let u;return s&&(u=setTimeout(()=>{i("")},3e3)),()=>clearTimeout(u)},[s]);const h=async()=>{d(!0),m(!1),n(!1);const u={email:l};try{const p=await j.post("users/forgot-password",u);n(!0),i("Success! Your confirmation email has been sent. Please check your inbox.")}catch(p){console.log(p),n(!1),m(!0),i("")}finally{d(!1)}};return a.useEffect(()=>{r&&h()},[r]),e.jsxs(f,{show:r,onClose:c,children:[e.jsx(f.Header,{children:s&&e.jsx("p",{className:"text-mansa-blue font-bold max-sm:text-base",children:o})}),e.jsx(f.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[s||x?e.jsx("img",{src:N,alt:"Email icon",width:100,className:"max-sm:w-14"}):e.jsx("img",{src:v,alt:"Error Icon",width:100,className:"max-sm:w-14"}),e.jsx("h1",{className:"font-bold text-3xl text-dark-blue max-sm:text-xl",children:"Email Confirmation"}),x&&e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Processing..."}),s&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base",children:["We have sent an email to"," ",e.jsx("span",{className:"text-mansa-blue",children:l})," to confirm the validity of your email address. After receiving the email, please follow the link provided to complete your registration."]}),e.jsx("strong",{children:e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base mt-5",children:["If you do not see the email, please check your"," ",e.jsx("span",{className:" font-bold",children:"spam or junk folder"}),"."]})})]}),t&&e.jsx("p",{className:"text-center text-red-500 max-sm:text-base",children:"Unable to send the email. Please try again later."})]})}),(s||t)&&e.jsx(f.Footer,{children:e.jsxs("p",{className:"text-dark-blue text-center max-sm:text-base",children:["If you did not receive the email,"," ",e.jsx("span",{className:"text-mansa-blue font-semibold cursor-pointer hover:text-dark-blue",onClick:h,children:"Resend confirmation mail"})]})})]})}function R(){const[l,c]=a.useState({email:""}),[r,o]=a.useState(!1);b();const i=t=>{if(t&&t.target){const{name:m,value:x}=t.target;c(d=>({...d,[m]:x}))}},s=async t=>{t.preventDefault(),o(!0)},n=()=>{c({email:""}),o(!1)};return e.jsxs("div",{className:" mx-2 flex justify-center relative top-10",children:[e.jsx("div",{className:"bg-white px-5 py-8 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-lg:w-[70%] max-md:w-[90%]",children:e.jsxs("div",{className:" flex flex-col justify-center items-center gap-10 h-fit ",children:[e.jsxs("div",{className:" flex flex-col justify-center items-center",children:[e.jsx("h1",{className:" text-dark-blue font-extrabold text-4xl max-sm:text-3xl mb-5 text-center",children:"Account Recovery"}),e.jsx("p",{className:" text-base text-dark-blue text-center mt-5 w-[80%]",children:"Please enter the email address associated with your account below, and we'll send you instructions on how to reset your password."})]}),e.jsxs("form",{onSubmit:s,className:" flex flex-col gap-16 justify-center items-center w-[80%]",children:[e.jsx(g,{type:"email",title:"Email*",placeholder:"SundiJoe@gmail.com",id:"email",autoComplete:"email",value:l.email,onChange:i}),e.jsx(y,{type:"submit",text:"Send Reset Instructions"})]})]})}),o&&e.jsx(w,{userEmail:l.email,onClose:n,show:r})]})}export{R as default};
