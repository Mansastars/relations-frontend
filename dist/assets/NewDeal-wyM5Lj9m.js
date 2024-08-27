import{r as n,v as N,m as e,q as b,p as w,w as z}from"./index-CaNxswD4.js";import{e as D,b as y,d as S,B as v}from"./Reusables-Cz4VPLEo.js";import{X as C}from"./x-DXcO7bg0.js";import{X as M,P as E}from"./x-circle-Boar2t--.js";import{F as _}from"./FreeTrialBanner-iqo4TZB6.js";import"./createLucideIcon-CpX1KhSD.js";import"./tag-BlSGjzMt.js";function B({onClose:o}){const l=n.useRef(),i=c=>{l.current===c.target&&o()},[r,h]=n.useState({dealName:"",datetime:"",dealSize:""}),[x,p]=n.useState(""),d=N(),m=c=>{if(c&&c.target){const{name:t,value:a}=c.target;h(s=>({...s,[t]:a}))}};let f;r.datetime&&(f=new Date(r.datetime).toISOString());const u=async c=>{c.preventDefault();const t={deal_name:r.dealName,dead_line:f,deal_size:r.dealSize};try{const a=await b.post("/deals/create-deal",t);console.log("Response: ",a),a.data.message==="You have to upgrade your subscription to create a neww dashboard"?(o(),w.fire({icon:"warning",title:"Subscription Upgrade Required",text:"You have reached your limit. Please upgrade your subscription to create a new dashboard.",showCancelButton:!0,confirmButtonText:"Upgrade",cancelButtonText:"Cancel"}).then(s=>{s.isConfirmed&&d("/pricing")})):window.location.reload()}catch(a){console.log(a),p("Something went wrong. Please try again."),window.scrollTo(0,0)}};return e.jsx("div",{ref:l,onClick:i,className:" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen",children:e.jsx("div",{className:" mt-10 flex flex-col",children:e.jsxs("div",{className:" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center",children:[e.jsx("button",{onClick:o,className:" place-self-end text-red-500 hover:text-dark-blue",children:e.jsx(C,{size:30})}),e.jsx("h1",{className:" text-dark-blue text-3xl max-sm:text-xl font-extrabold",children:"Create a New Dashboard"}),e.jsxs("form",{onSubmit:u,className:" flex flex-col gap-5 justify-center w-full",children:[x&&e.jsx("p",{className:" text-[#ff0000] font-semibold",children:x}),e.jsxs("div",{className:"flex flex-col gap-5 w-full ",children:[e.jsx(D,{type:"text",title:"Dashboard Name*",placeholder:"Sundi",id:"dealName",value:r.dealName,onChange:m}),e.jsx(y,{title:"Deadline",value:r.datetime,onChange:m}),e.jsx(S,{type:"number",title:"Deal Size ($)",placeholder:"1,000,000",min:0,id:"dealSize",value:r.dealSize,onChange:m})]}),e.jsx("div",{className:" mt-8 w-full flex items-center justify-center",children:e.jsx(v,{type:"submit",text:"Create a Dashboard"})})]})]})})})}function F({onClose:o,dealDetails:l}){const i=n.useRef(),[r,h]=n.useState(""),[x,p]=n.useState(""),[d,m]=n.useState({dealName:l?l.deal_name:"",datetime:l?l.dead_line:"",dealSize:l?l.deal_size:""}),f=s=>{i.current===s.target&&o()},u=s=>{if(s&&s.target){const{name:j,value:g}=s.target;m(k=>({...k,[j]:g}))}},c=s=>s?new Date(s).toISOString().slice(0,16):"";let t;d.datetime&&(t=new Date(d.datetime).toISOString());const a=async s=>{s.preventDefault();const j={deal_name:d.dealName,dead_line:t,deal_size:d.dealSize};try{const g=await b.patch(`/deals/edit-deal/${l.id}`,j);p("Dashboard details updated successfully."),setTimeout(()=>{window.location.reload()},500)}catch(g){console.log(g),h("An error occurred. Please try again.")}};return e.jsx("div",{ref:i,onClick:f,className:" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen",children:e.jsx("div",{className:" mt-10 flex flex-col",children:e.jsxs("div",{className:" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center",children:[e.jsx("button",{onClick:o,className:" place-self-end text-red-500 hover:text-dark-blue",children:e.jsx(C,{size:30})}),e.jsx("h1",{className:" text-dark-blue text-3xl max-sm:text-xl font-extrabold",children:"Update Dashboard Details"}),e.jsxs("form",{onSubmit:a,className:" flex flex-col gap-5 justify-center w-full",children:[r&&e.jsx("p",{className:" text-red-500 font-semibold",children:r}),x&&e.jsx("p",{className:" text-green-500 font-semibold",children:x}),e.jsxs("div",{className:"flex flex-col gap-5 w-full ",children:[e.jsx(D,{type:"text",title:"Dashboard Name*",placeholder:"Sundi",id:"dealName",value:d.dealName,onChange:u}),e.jsx(y,{title:"Deadline",value:c(d.datetime),onChange:u}),e.jsx(S,{type:"number",title:"Deal Size ($)",placeholder:"1,000,000",min:0,id:"dealSize",value:d.dealSize,onChange:u})]}),e.jsx("div",{className:" mt-8 w-full flex items-center justify-center",children:e.jsx(v,{type:"submit",text:"Update Dashboard"})})]})]})})})}function I(){const[o,l]=n.useState([]),i=N(),r=window.innerWidth<680,[h,x]=n.useState(!1),[p,d]=n.useState(null);if(n.useEffect(()=>{(async()=>{try{const a=await b.get("/deals/deals"),s=a.data.deals;localStorage.setItem("user",JSON.stringify(a.data.user)),localStorage.setItem("showBanner",a.data.showBanner.toString()),localStorage.setItem("showBilling",a.data.showBilling.toString()),l(s)}catch(a){console.error("Error fetching deals:",a)}})()},[]),!o)return e.jsx("div",{});const m=async t=>{w.fire({title:"Are you sure?",text:"You will not be able to recover this deal!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(async a=>{if(a.isConfirmed)try{await b.delete(`/deals/delete-deal/${t}`),l(o.filter(s=>s.id!==t)),w.fire("Deleted!","Your deal has been deleted.","success"),i("/alldashboards")}catch(s){console.error("Error:",s),w.fire("Error","Failed to delete deal","error")}})},f=async t=>{try{const s=(await b.get(`/deals/single-deal/${t}`)).data.deal;d(s),x(!0)}catch(a){console.error("Error updating deal details:",a),w.fire("Error","Failed to update deal details","error")}},u=o.sort((t,a)=>new Date(a.createdAt)-new Date(t.createdAt)),c=t=>{r?i("/move-to-larger-screen"):(localStorage.setItem("currentDealId",t),i(`/dashboard/${t}`))};return e.jsxs("div",{className:"flex flex-col gap-10 items-start justify-center w-full bg-light-grey max-sm:items-center",children:[e.jsx("h1",{className:"text-dark-blue font-bold text-4xl max-sm:text-2xl self-center  bg-light-grey w-full text-center pb-5",children:"Existing Dashboards"}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center items-start gap-5",children:[u.map(t=>e.jsxs("div",{className:"flex justify-start items-start w-64 max-sm:w-56 rounded-xl border-2 border-mansa-blue hover:border-2 hover:border-dark-blue cursor-pointer",children:[e.jsxs("div",{className:"flex flex-col justify-start items-start w-full gap-2",onClick:()=>c(t.id),children:[e.jsxs("div",{className:" flex flex-col w-full gap-2 bg-mansa-blue rounded-tl-xl pl-4 py-3",children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>m(t.id),className:"text-white hover:text-[#FF0000]",children:e.jsx(M,{className:"h-4 w-4"})})}),e.jsx("div",{className:" flex flex-row gap-2 items-center",children:e.jsx("h2",{className:"font-bold text-2xl max-sm:text-xl text-white text-nowrap w-full ",children:t.deal_name.length>14?`${t.deal_name.substring(0,11)}...`:t.deal_name})})]}),e.jsxs("p",{className:"text-dark-blue text-base px-4 rounded-bl-xl bg-light-grey",children:[e.jsx("span",{className:"font-semibold",children:"Deadline: "}),t.dead_line?new Date(t.dead_line).toLocaleString():"No deadline set"]})]}),e.jsxs("div",{className:" pr-4 py-3 bg-mansa-blue rounded-tr-xl flex flex-col gap-10 max-sm:gap-9",children:[e.jsx("button",{onClick:()=>f(t.id),className:" text-white hover:text-dark-blue cursor-pointer",children:e.jsx(E,{size:24})}),e.jsx("p",{className:" text-mansa-blue",children:" "})]})]},t.id)),h&&e.jsx(F,{onClose:()=>x(!1),dealDetails:p})]})]})}function O(){const[o,l]=n.useState(!1),i=N(),{isAuthenticated:r}=z();return n.useEffect(()=>{r||i("/auth/login")},[r,i]),e.jsxs("div",{className:" h-screen w-full",children:[e.jsx("div",{className:" sticky top-0 w-full z-50",children:e.jsx(_,{})}),e.jsxs("div",{className:" flex flex-col gap-20 w-full h-screen max-sm:w-full max-sm:pr-2 pl-3",children:[e.jsx("div",{className:" flex pt-2 items-center gap-4",children:e.jsx("div",{onClick:()=>l(!0),className:"flex",children:e.jsx(v,{text:"Create a Dashboard"})})}),e.jsx("div",{className:" overflow-x-auto pb-5 items-center",children:e.jsx(I,{})})]}),o&&e.jsx(B,{onClose:()=>l(!1)})]})}export{O as default};