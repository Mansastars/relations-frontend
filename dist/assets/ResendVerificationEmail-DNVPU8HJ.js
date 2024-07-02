import{j as e,r as a,a as b}from"./index-CF6aRru1.js";import{M as s}from"./ToggleSwitch-g2SEo0VD.js";import"./index-Bvng1mpX.js";import{x as j}from"./x-button-CT4dcaD-.js";import{B as N}from"./Reusables-BQjiAsUo.js";import{e as g}from"./email-Bj3w0Esp.js";function w({onClose:i,show:c,onClick:r}){return e.jsx(e.Fragment,{children:e.jsxs(s,{show:c,onClose:i,children:[e.jsx(s.Header,{}),e.jsx(s.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[e.jsx("img",{src:j,alt:"Error Icon",width:100,className:" max-sm:w-14"}),e.jsx("h1",{className:" font-bold text-3xl text-red-500 max-sm:text-xl",children:"Unverified Account"}),e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Your account is not verified. Please verify your email address."}),e.jsx("div",{className:" mt-5",children:e.jsx(N,{text:"Verify Account",onClick:r})})]})})]})})}function M({userEmail:i,onClose:c,show:r}){const[p,n]=a.useState(""),[t,o]=a.useState(!1),[m,x]=a.useState(!1),[d,u]=a.useState(!1);a.useEffect(()=>{let l;return t&&(l=setTimeout(()=>{n("")},3e3)),()=>clearTimeout(l)},[t]);const f=async()=>{u(!0),x(!1),o(!1);const l={email:i};try{const h=await b.post("users/resend-verification",l);o(!0),n("Success! Your confirmation email has been resent. Please check your inbox.")}catch(h){console.log(h),o(!1),x(!0),n("")}finally{u(!1)}};return a.useEffect(()=>{r&&f()},[r]),e.jsxs(s,{show:r,onClose:c,children:[e.jsx(s.Header,{children:t&&e.jsx("p",{className:"text-mansa-blue font-bold max-sm:text-base",children:p})}),e.jsx(s.Body,{children:e.jsxs("div",{className:"flex flex-col gap-5 items-center",children:[t||d?e.jsx("img",{src:g,alt:"Email icon",width:100,className:"max-sm:w-14"}):e.jsx("img",{src:j,alt:"Error Icon",width:100,className:"max-sm:w-14"}),e.jsx("h1",{className:"font-bold text-3xl text-dark-blue max-sm:text-xl",children:"Email Verification"}),d&&e.jsx("p",{className:"text-center text-dark-blue max-sm:text-base",children:"Processing..."}),t&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base",children:["We have sent an email to"," ",e.jsx("span",{className:"text-mansa-blue",children:i})," to confirm the validity of your email address. After receiving the email, please follow the link provided to complete your registration."]}),e.jsx("strong",{children:e.jsxs("p",{className:"text-center text-dark-blue max-sm:text-base mt-5",children:["If you do not see the email, please check your"," ",e.jsx("span",{className:" font-bold",children:"spam or junk folder"}),"."]})})]}),m&&e.jsx("p",{className:"text-center text-red-500 max-sm:text-base",children:"Unable to send the email. Please try again later."})]})}),(t||m)&&e.jsx(s.Footer,{children:e.jsxs("p",{className:"text-dark-blue text-center max-sm:text-base",children:["If you did not receive the email,"," ",e.jsx("span",{className:"text-mansa-blue font-semibold cursor-pointer hover:text-dark-blue",onClick:f,children:"Resend Verification mail"})]})})]})}export{w as E,M as R};