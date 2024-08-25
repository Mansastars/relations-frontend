import{r,p as a,q as g,m as e,v as Y,w as J}from"./index-DYQDQg7J.js";import{F as L}from"./FreeTrialBanner-C1YSD2KH.js";import{T as P}from"./ToggleSwitch-DLGjkP25.js";import{a as R,b as W,c as q}from"./index-olXarmB5.js";import"./index-AW5Zvu85.js";import{d as j}from"./Reusables-1QFGWXmR.js";import{f as x}from"./mergeSlotProps-DtRVC1GO.js";import{A as U}from"./Avatar-CpoXaYjR.js";import{U as G}from"./user-DY1-_RDZ.js";import{T as N,a as S}from"./ThemeProvider-DpL5sKod.js";import{E as A,a as D,c as H}from"./checkPasswordStrength-C_AzMeUA.js";import"./createLucideIcon-Ctwq8K4G.js";import"./tag-HWF6UrUC.js";import"./index-1itTOy0B.js";const{palette:M}=x(),{augmentColor:K}=M,Q=s=>K({color:{main:s}}),V=x({palette:{mainColor:Q("#08a5aa")}}),X=()=>{const s=r.useRef(),n=r.useRef(),[m,d]=r.useState(""),[i,h]=r.useState(""),[p,w]=r.useState(""),[l,o]=r.useState(!0);r.useEffect(()=>{s.current=window.cloudinary,n.current=s.current.createUploadWidget({cloudName:"divbyxxwx",uploadPreset:"o9yoqewt",multiple:!1,maxFiles:1,clientAllowedFormats:["jpg","jpeg","png"],cropping:!0,croppingAspectRatio:1},(f,u)=>{if(f)a.fire({icon:"error",title:"Upload Error",text:"An error occurred while uploading the image. Please try again or contact support."});else if(u&&u.event==="success"){const C=u.info.secure_url;d(C);const b=JSON.parse(localStorage.getItem("user"));b&&(b.profile_picture=C,localStorage.setItem("user",JSON.stringify(b)));try{const y={profile_picture:C};g.patch("users/update_photo",y).then(()=>a.fire({icon:"success",title:"Upload Successful",text:"Your profile image was uploaded successfully"})).catch(E=>{a.fire({icon:"error",title:"Upload Error",text:"An error occurred while uploading the image. Please try again."}),console.error("Error updating profile picture:",E)})}catch(y){a.fire({icon:"error",title:"Upload Error",text:"An error occurred while uploading the image. Please try again."}),console.error("Error in patch request:",y)}}}),g.get("users/single-user").then(f=>{f.data.user&&(f.data.user.profile_picture&&d(f.data.user.profile_picture),h(f.data.user.first_name),w(f.data.user.last_name)),o(!1)}).catch(f=>{console.error("Error fetching profile picture and user details:",f),o(!1)})},[]);const t=()=>{n.current.open()},c=async()=>{if((await a.fire({title:"Are you sure?",text:"Do you really want to delete your profile image?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"})).isConfirmed)try{await g.patch("users/delete_photo"),d("");const u=JSON.parse(localStorage.getItem("user"));u&&(u.profile_picture="",localStorage.setItem("user",JSON.stringify(u))),a.fire({icon:"success",title:"Image Deleted",text:"Your profile image has been deleted successfully."})}catch(u){console.error("Error deleting profile picture:",u),a.fire({icon:"error",title:"Delete Error",text:"An error occurred while deleting the image. Please try again."})}},I=(f,u)=>`${f[0]}${u[0]}`.toUpperCase();return e.jsxs("div",{className:"w-full flex flex-row max-md:flex-col justify-between max-md:justify-center max-md:gap-5 items-center",children:[e.jsx("div",{className:"w-full flex max-md:justify-center",children:l?e.jsx(U,{sx:{width:128,height:128,backgroundColor:"rgba(8,165,170,70%)",fontSize:32},children:e.jsx(G,{size:48})}):m?e.jsx(U,{src:m,alt:"User's image",sx:{width:128,height:128}}):e.jsx(U,{sx:{width:128,height:128,backgroundColor:"rgba(8,165,170,70%)",fontSize:32},children:I(i,p)})}),e.jsxs("div",{className:"flex gap-5 justify-end max-md:justify-center w-full",children:[e.jsx(N,{theme:V,children:e.jsx(S,{variant:"contained",onClick:t,type:"button",color:"mainColor",children:"Upload Image"})}),e.jsx(N,{theme:V,children:e.jsx(S,{variant:"outlined",onClick:c,type:"button",color:"mainColor",children:"Delete Image"})})]})]})},{palette:Z}=x(),{augmentColor:ee}=Z,se=s=>ee({color:{main:s}}),te=x({palette:{mainColor:se("#08a5aa")}}),$=()=>{const[s,n]=r.useState(null),[m,d]=r.useState(!1),[i,h]=r.useState({first_name:"",last_name:"",phone_number:"",bio:""});r.useEffect(()=>{(async()=>{try{const t=(await g.get("users/single-user")).data.user;n(t),h({first_name:t.first_name||"",last_name:t.last_name||"",phone_number:t.phone_number||"",bio:t.bio||""})}catch(o){o.response.data.message?a.fire("Error",o.response.data.message,"error"):a.fire("Error","An error occurred while trying to get your information.             Please refresh the page.","error"),console.error("Error fetching user details:",o)}})()},[]);const p=l=>{if(l&&l.target){const{name:o,value:t}=l.target;h(c=>({...c,[o]:t}))}},w=async l=>{d(!0),l.preventDefault();const o={first_name:i.first_name,last_name:i.last_name,phone_number:i.phone_number,bio:i.bio};try{const t=await g.patch("users/update-profile",o),c=JSON.parse(localStorage.getItem("user"));c&&(c.first_name=i.first_name,c.last_name=i.last_name,c.phone_number=i.phone_number,c.bio=i.bio,localStorage.setItem("user",JSON.stringify(c))),a.fire("Profile Update","Your profile was updated successfully","success")}catch(t){t.response.data.message?a.fire("Error",t.response.data.message,"error"):a.fire("Eror","An waiting error occurred while updating your information. Please try again.","error"),console.log(t)}finally{d(!1)}};return e.jsx("div",{className:" flex flex-col w-full px-3 items-center overflow-y-auto",children:e.jsx("div",{className:"bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full",children:e.jsxs("form",{onSubmit:w,className:" w-full",children:[e.jsxs("div",{className:" w-full",children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"Profile"}),e.jsx("p",{className:" text-dark-blue text-base",children:"Use the form below to update your profile."})]}),e.jsxs("div",{className:"flex flex-col gap-5 mt-8 w-full",children:[e.jsx("div",{className:" w-full mb-5",children:e.jsx(X,{})}),e.jsxs("div",{className:"flex max-[768px]:flex-col gap-5 w-full",children:[e.jsx(j,{type:"text",title:"First Name",placeholder:"",value:i.first_name,onChange:p}),e.jsx(j,{type:"text",title:"Last Name",placeholder:"",value:i.last_name,onChange:p})]}),e.jsxs("div",{className:" flex flex-col gap-1 w-1/2 max-[768px]:w-full",children:[e.jsx(j,{type:"tel",title:"Phone Number",placeholder:"+123456789",maxLength:15,value:i.phone_number,onChange:p}),e.jsx("p",{className:" text-dark-blue text-sm",children:"We collect this incase of emergencies."})]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:" relative col-span-full",children:[e.jsx("label",{htmlFor:"bio",className:" absolute -top-3 left-3 bg-white px-1 text-sm leading-6 text-dark-blue font-semibold",children:"Bio"}),e.jsx("div",{className:"mt-1",children:e.jsx("textarea",{name:"bio",rows:2,className:"block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue",placeholder:"",value:i.bio,onChange:p})})]}),e.jsx("p",{className:"text-dark-blue text-sm",children:"Brief description of your profile."})]})]}),e.jsx("div",{className:" mt-5",children:e.jsx(N,{theme:te,children:e.jsx(S,{variant:"contained",className:" w-full",color:"mainColor",type:"submit",disabled:m&&!0,children:"Update Profile"})})})]})})})},{palette:re}=x(),{augmentColor:ae}=re,le=s=>ae({color:{main:s}}),oe=x({palette:{mainColor:le("#08a5aa")}}),F=()=>{const[s,n]=r.useState(null),[m,d]=r.useState(!1),[i,h]=r.useState({email:""});r.useEffect(()=>{(async()=>{try{const t=(await g.get("users/single-user")).data.user;n(t),h({email:t.email||""})}catch(o){o.response.data.message?a.fire("Error",o.response.data.message,"error"):a.fire("Error","An error occurred while trying to get your information. Please refresh the page.","error"),console.error("Error fetching user details:",o)}})()},[]);const p=l=>{if(l&&l.target){const{name:o,value:t}=l.target;h(c=>({...c,[o]:t}))}},w=async l=>{l.preventDefault();const o={email:i.email};d(!0);try{const t=await g.patch("users/update-email",o),c=JSON.parse(localStorage.getItem("user"));c&&(c.email=i.email,localStorage.setItem("user",JSON.stringify(c))),a.fire("Email Update","Your email was updated successfully","success")}catch(t){t.response.data.message?a.fire("Error",t.response.data.message,"error"):a.fire("Error","An waiting error occurred while updating your information. Please try again.","error"),console.log(t)}finally{d(!1)}};return e.jsx("div",{className:" flex flex-col w-full px-3 items-center overflow-y-auto",children:e.jsx("div",{className:"bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full",children:e.jsxs("form",{onSubmit:w,className:" w-full",children:[e.jsxs("div",{children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"Email"}),e.jsx("p",{className:" text-dark-blue text-base",children:"Use this form to update your email."})]}),e.jsx("div",{className:"flex flex-col gap-5 mt-8",children:e.jsxs("div",{children:[e.jsx(j,{type:"email",title:"Email",placeholder:"",id:"email",value:i.email,onChange:p}),e.jsx("p",{className:"text-dark-blue text-sm",children:"You will need this email to log in."})]})}),e.jsx("div",{className:" mt-5",children:e.jsx(N,{theme:oe,children:e.jsx(S,{variant:"contained",className:" w-full",color:"mainColor",type:"submit",disabled:m&&!0,children:"Update Email"})})})]})})})},{palette:ie}=x(),{augmentColor:ne}=ie,ce=s=>ne({color:{main:s}}),de=x({palette:{mainColor:ce("#08a5aa")}}),B=()=>{r.useState(null);const[s,n]=r.useState(!1),[m,d]=r.useState(!1),[i,h]=r.useState(!1),[p,w]=r.useState(!1),[l,o]=r.useState({old_password:"",new_password:"",confirm_password:""}),[t,c]=r.useState(0),[I,f]=r.useState(!1),u=_=>{if(_&&_.target){const{name:v,value:O}=_.target;o(T=>({...T,[v]:O}))}const k=H(l.new_password);c(k),f(k>=2)},C=async _=>{_.preventDefault();const k={old_password:l.old_password,new_password:l.new_password,confirm_password:l.confirm_password};w(!0);try{if(I){const v=await g.patch("users/change-password",k);o({old_password:"",new_password:"",confirm_password:""}),a.fire("Password Update","Your password was updated successfully","success")}else a.fire("Error","Password must be at least eight characters long.","error")}catch(v){v.response.data.message?a.fire("Success",`${v.response.data.message}`,"success"):a.fire("Error","An waiting error occurred while updating your information. Please try again.","error"),console.log(v)}finally{w(!1)}},b=()=>{n(!s)},y=()=>{h(!i)},E=()=>{d(!m)};return e.jsx("div",{className:" flex flex-col w-full px-3 items-center overflow-y-auto",children:e.jsx("div",{className:"bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full",children:e.jsxs("form",{onSubmit:C,className:" w-full",children:[e.jsxs("div",{children:[e.jsx("h1",{className:" text-dark-blue font-bold text-3xl",children:"Password"}),e.jsx("p",{className:" text-dark-blue text-base",children:"Use this form to update your password."})]}),e.jsx("div",{className:"flex flex-col gap-5 mt-8",children:e.jsxs("div",{className:" flex flex-col gap-2",children:[e.jsxs("div",{className:" flex flex-col gap-6",children:[e.jsx(j,{type:s?"text":"password",title:"Current Password",placeholder:"",id:"old_password",icon:s?e.jsx(A,{size:14,onClick:b}):e.jsx(D,{size:14,onClick:b}),value:l.old_password,onChange:u}),e.jsxs("div",{children:[e.jsx(j,{type:m?"text":"password",title:"New Password",placeholder:"",id:"new_password",icon:m?e.jsx(A,{size:14,onClick:E}):e.jsx(D,{size:14,onClick:E}),value:l.new_password,onChange:u}),t>0&&e.jsx("p",{className:`text-sm ${t>=2?"text-green-500":"text-red-500"}`,children:t>=2?"Strong password":"Weak password"})]}),e.jsx(j,{type:i?"text":"password",title:"Confirm Password",placeholder:"",id:"confirm_password",icon:i?e.jsx(A,{size:14,onClick:y}):e.jsx(D,{size:14,onClick:y}),value:l.confirm_password,onChange:u})]}),e.jsx("p",{className:"text-dark-blue text-sm",children:"Must be at least 8 characters long."})]})}),e.jsx("div",{className:" mt-5",children:e.jsx(N,{theme:de,children:e.jsx(S,{variant:"contained",className:" w-full",color:"mainColor",type:"submit",disabled:p&&!0,children:"Update Password"})})})]})})})},{palette:ue}=x(),{augmentColor:me}=ue,fe=s=>me({color:{main:s}}),pe=x({palette:{mainColor:fe("#ff5252")}}),z=()=>{const s=Y(),n=async()=>{a.fire({title:"Are you sure?",text:"You will not be able to recover your account!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(async m=>{if(m.isConfirmed)try{await g.delete("users/delete-account"),a.fire("Deleted!","Your account has been deleted.","success"),s("/auth/sign_up")}catch(d){console.error("Error:",d),a.fire("Error","Failed to delete user","error")}})};return e.jsx("div",{className:" flex flex-col w-full px-3 items-center overflow-y-auto",children:e.jsx("div",{className:"bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full",children:e.jsx("div",{className:" w-full ",children:e.jsxs("div",{className:" flex flex-col gap-5 pb-8 max-sm:flex-col",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h1",{className:"font-bold text-3xl text-red-500",children:"Delete Account"}),e.jsx("p",{className:"text-dark-blue text-base font-semibold",children:"By clicking the button below, you will permanently delete your account. Are you sure you want to proceed?"})]}),e.jsx("div",{className:" mt-5 flex justify-center",children:e.jsx(N,{theme:pe,children:e.jsx(S,{variant:"contained",className:" w-[80%] max-md:w-full",color:"mainColor",type:"button",onClick:()=>n(),children:"Delete Account"})})})]})})})})},xe=()=>{const[s,n]=r.useState("Profile"),m=()=>{switch(s){case"Profile":return e.jsx($,{});case"Email":return e.jsx(F,{});case"Password":return e.jsx(B,{});case"Account":return e.jsx(z,{});default:return e.jsx($,{})}};return e.jsxs("div",{className:"",children:[e.jsx("div",{className:"hidden sm:block",children:e.jsxs(P,{"aria-label":"Full width tabs",style:"fullWidth",className:"bg-light-grey",children:[e.jsx(P.Item,{active:s==="Profile",title:"Profile",icon:R,onClick:()=>n("Profile"),children:e.jsx($,{})}),e.jsx(P.Item,{active:s==="Email",title:"Email",icon:W,onClick:()=>n("Email"),children:e.jsx(F,{})}),e.jsx(P.Item,{active:s==="Password",title:"Password",icon:q,onClick:()=>n("Password"),children:e.jsx(B,{})}),e.jsx(P.Item,{active:s==="Account",title:"Account",onClick:()=>n("Account"),children:e.jsx(z,{})})]})}),e.jsxs("div",{className:"block sm:hidden",children:[e.jsxs("select",{value:s,onChange:d=>n(d.target.value),className:"w-full text-lg px-3 py-4 border border-gray-300 active:outline-white",children:[e.jsx("option",{value:"Profile",children:"Profile Settings"}),e.jsx("option",{value:"Email",children:"Email Settings"}),e.jsx("option",{value:"Password",children:"Password Settings"}),e.jsx("option",{value:"Account",children:"Account Settings"})]}),e.jsx("div",{className:"mt-4",children:m()})]})]})},he=xe;function Ue(){const s=Y(),{isAuthenticated:n}=J();return r.useEffect(()=>{n||s("/auth/login")},[n,s]),e.jsxs("div",{className:"",children:[e.jsx("div",{className:" sticky top-0 z-50",children:e.jsx(L,{})}),e.jsx(he,{})]})}export{Ue as default};
