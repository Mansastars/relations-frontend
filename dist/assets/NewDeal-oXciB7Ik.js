import{J as N,r as o,W as D,C as e,X as v,a2 as y,N as C,a1 as k,P as S,Q as j,H as b,Y as E}from"./index-TsrC9XTS.js";import{X as M,P as T}from"./x-circle-DoVlZwii.js";import{F as _}from"./FreeTrialBanner-DAGF7fQv.js";import"./tag-DL_AZsqg.js";function B({onClose:l}){const{t:a}=N(),c=o.useRef(),d=i=>{c.current===i.target&&l()},[n,h]=o.useState({dealName:"",datetime:"",dealSize:""}),[u,x]=o.useState(""),p=D(),f=i=>{if(i&&i.target){const{name:s,value:t}=i.target;h(r=>({...r,[s]:t}))}};let m;n.datetime&&(m=new Date(n.datetime).toISOString());const g=async i=>{i.preventDefault();const s={deal_name:n.dealName,dead_line:m,deal_size:n.dealSize};try{const t=await j.post("/deals/create-deal",s);console.log("Response: ",t),t.data.message==="You have to upgrade your subscription to create a new dashboard"?(l(),b.fire({icon:"warning",title:a("SubscriptionUpgradeRequired"),text:a("SubscriptionUpgradeText"),showCancelButton:!0,confirmButtonText:a("Upgrade"),cancelButtonText:a("Cancel")}).then(r=>{r.isConfirmed&&p("/pricing")})):window.location.reload()}catch(t){console.log(t),x(a("ErrorMessage")),window.scrollTo(0,0)}};return e.jsx("div",{ref:c,onClick:d,className:"fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen",children:e.jsx("div",{className:"mt-10 flex flex-col",children:e.jsxs("div",{className:"bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center",children:[e.jsx("button",{onClick:l,className:"place-self-end text-red-500 hover:text-dark-blue",children:e.jsx(v,{size:30})}),e.jsx("h1",{className:"text-dark-blue text-3xl max-sm:text-xl font-extrabold",children:a("CreateNewDashboard")}),e.jsxs("form",{onSubmit:g,className:"flex flex-col gap-5 justify-center w-full",children:[u&&e.jsx("p",{className:"text-[#ff0000] font-semibold",children:u}),e.jsxs("div",{className:"flex flex-col gap-5 w-full",children:[e.jsx(y,{type:"text",title:a("DashboardName"),placeholder:a("PlaceholderDealName"),id:"dealName",value:n.dealName,onChange:f}),e.jsx(C,{title:a("Deadline"),value:n.datetime,onChange:f,id:"datetime"}),e.jsx(k,{type:"number",title:a("DealSize"),placeholder:a("PlaceholderDealSize"),min:0,id:"dealSize",value:n.dealSize,onChange:f})]}),e.jsx("div",{className:"mt-8 w-full flex items-center justify-center",children:e.jsx(S,{type:"submit",text:a("CreateDashboardButton")})})]})]})})})}function I({onClose:l,dealDetails:a}){const c=o.useRef(),[d,n]=o.useState(""),[h,u]=o.useState(""),[x,p]=o.useState({dealName:a?a.deal_name:"",datetime:a?a.dead_line:"",dealSize:a?a.deal_size:""}),f=t=>{c.current===t.target&&l()},m=t=>{if(t&&t.target){const{name:r,value:w}=t.target;p(z=>({...z,[r]:w}))}},g=t=>t?new Date(t).toISOString().slice(0,16):"";let i;x.datetime&&(i=new Date(x.datetime).toISOString());const s=async t=>{t.preventDefault();const r={deal_name:x.dealName,dead_line:i,deal_size:x.dealSize};try{const w=await j.patch(`/deals/edit-deal/${a.id}`,r);u("Dashboard details updated successfully."),setTimeout(()=>{window.location.reload()},500)}catch(w){console.log(w),n("An error occurred. Please try again.")}};return e.jsx("div",{ref:c,onClick:f,className:" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen",children:e.jsx("div",{className:" mt-10 flex flex-col",children:e.jsxs("div",{className:" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center",children:[e.jsx("button",{onClick:l,className:" place-self-end text-red-500 hover:text-dark-blue",children:e.jsx(v,{size:30})}),e.jsx("h1",{className:" text-dark-blue text-3xl max-sm:text-xl font-extrabold",children:"Update Dashboard Details"}),e.jsxs("form",{onSubmit:s,className:" flex flex-col gap-5 justify-center w-full",children:[d&&e.jsx("p",{className:" text-red-500 font-semibold",children:d}),h&&e.jsx("p",{className:" text-green-500 font-semibold",children:h}),e.jsxs("div",{className:"flex flex-col gap-5 w-full ",children:[e.jsx(y,{type:"text",title:"Dashboard Name*",placeholder:"Sundi",id:"dealName",value:x.dealName,onChange:m}),e.jsx(C,{title:"Deadline",value:g(x.datetime),onChange:m,id:"datetime"}),e.jsx(k,{type:"number",title:"Deal Size ($)",placeholder:"1,000,000",min:0,id:"dealSize",value:x.dealSize,onChange:m})]}),e.jsx("div",{className:" mt-8 w-full flex items-center justify-center",children:e.jsx(S,{type:"submit",text:"Update Dashboard"})})]})]})})})}function U(){const{t:l}=N(),[a,c]=o.useState([]),d=D(),n=window.innerWidth<680,[h,u]=o.useState(!1),[x,p]=o.useState(null);if(o.useEffect(()=>{(async()=>{try{const t=await j.get("/deals/deals"),r=t.data.deals;localStorage.setItem("user",JSON.stringify(t.data.user)),localStorage.setItem("showBanner",t.data.showBanner.toString()),localStorage.setItem("showBilling",t.data.showBilling.toString()),c(r)}catch(t){console.error("Error fetching deals:",t)}})()},[]),!a)return e.jsx("div",{});const f=async s=>{b.fire({title:l("DeleteConfirmationTitle"),text:l("DeleteConfirmationText"),icon:"warning",showCancelButton:!0,confirmButtonText:l("DeleteConfirmationConfirm"),cancelButtonText:l("DeleteConfirmationCancel")}).then(async t=>{if(t.isConfirmed)try{await j.delete(`/deals/delete-deal/${s}`),c(a.filter(r=>r.id!==s)),b.fire(l("DeleteSuccess"),l("DeleteSuccessText"),"success"),d("/alldashboards")}catch(r){console.error("Error:",r),b.fire(l("DeleteError"),l("DeleteErrorText"),"error")}})},m=async s=>{try{const r=(await j.get(`/deals/single-deal/${s}`)).data.deal;p(r),u(!0)}catch(t){console.error("Error updating deal details:",t),b.fire(l("UpdateError"),l("UpdateErrorText"),"error")}},g=a.sort((s,t)=>new Date(t.createdAt)-new Date(s.createdAt)),i=s=>{n?d("/move-to-larger-screen"):(localStorage.setItem("currentDealId",s),d(`/dashboard/${s}`))};return e.jsxs("div",{className:"flex flex-col gap-10 items-start justify-center w-full bg-light-grey max-sm:items-center",children:[e.jsx("h1",{className:"text-dark-blue font-bold text-4xl max-sm:text-2xl self-center bg-light-grey w-full text-center pb-5",children:l("ExistingDashboards")}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center items-start gap-5",children:[g.map(s=>e.jsxs("div",{className:"flex justify-start items-start w-64 max-sm:w-56 rounded-xl border-2 border-mansa-blue hover:border-2 hover:border-dark-blue cursor-pointer",children:[e.jsxs("div",{className:"flex flex-col justify-start items-start w-full gap-2",onClick:()=>i(s.id),children:[e.jsxs("div",{className:"flex flex-col w-full gap-2 bg-mansa-blue rounded-tl-xl pl-4 py-3",children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>f(s.id),className:"text-white hover:text-[#FF0000]",children:e.jsx(M,{className:"h-4 w-4"})})}),e.jsx("div",{className:"flex flex-row gap-2 items-center",children:e.jsx("h2",{className:"font-bold text-2xl max-sm:text-xl text-white text-nowrap w-full",children:s.deal_name.length>14?`${s.deal_name.substring(0,11)}...`:s.deal_name})})]}),e.jsxs("p",{className:"text-dark-blue text-base px-4 rounded-bl-xl bg-light-grey",children:[e.jsxs("span",{className:"font-semibold",children:[l("Deadline"),":"]}),s.dead_line?new Date(s.dead_line).toLocaleString():l("NoDeadline")]})]}),e.jsxs("div",{className:"pr-4 py-3 bg-mansa-blue rounded-tr-xl flex flex-col gap-10 max-sm:gap-9",children:[e.jsx("button",{onClick:()=>m(s.id),className:"text-white hover:text-dark-blue cursor-pointer",children:e.jsx(T,{size:24})}),e.jsx("p",{className:"text-mansa-blue"})]})]},s.id)),h&&e.jsx(I,{onClose:()=>u(!1),dealDetails:x})]})]})}function A(){const{t:l}=N(),[a,c]=o.useState(!1),d=D(),{isAuthenticated:n}=E();return o.useEffect(()=>{n||d("/auth/login")},[n,d]),e.jsxs("div",{className:"h-screen w-full",children:[e.jsx("div",{className:"sticky top-0 w-full z-50",children:e.jsx(_,{})}),e.jsxs("div",{className:"flex flex-col gap-20 w-full h-screen max-sm:w-full max-sm:pr-2 pl-3",children:[e.jsx("div",{className:"flex pt-2 items-center gap-4",children:e.jsxs("div",{onClick:()=>c(!0),className:"flex",children:[e.jsx(S,{text:l("CreateDashboard")})," "]})}),e.jsx("div",{className:"overflow-x-auto pb-5 items-center",children:e.jsx(U,{})})]}),a&&e.jsx(B,{onClose:()=>c(!1)})]})}export{A as default};
