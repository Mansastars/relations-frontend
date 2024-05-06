import{r as d,u as g,j as e,a as f,S as m,b as D}from"./index-BoNr5YXl.js";import{S,c as y,f as C,B as N}from"./Reusables-TmYy2U2p.js";import{X as k,S as z}from"./SidePanel-kcIjy1db.js";import{X as E}from"./x-circle-D7YRkDrM.js";import{c as _}from"./createLucideIcon-BYl9meum.js";import{F as B}from"./FreeTrialBanner-DkcVofVe.js";/* empty css              *//**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=_("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);function F({onClose:r}){const i=d.useRef(),n=t=>{i.current===t.target&&r()},[s,p]=d.useState({dealName:"",datetime:"",dealSize:""}),[h,w]=d.useState("");g();const u=t=>{if(t&&t.target){const{name:x,value:o}=t.target;p(c=>({...c,[x]:o}))}};let a;s.datetime&&(a=new Date(s.datetime).toISOString());const l=async t=>{t.preventDefault();const x={deal_name:s.dealName,dead_line:a,deal_size:s.dealSize};try{await f.post("/deals/create-deal",x),window.location.reload()}catch(o){console.log(o),w("Something went wrong. Please try again."),window.scrollTo(0,0)}};return e.jsx("div",{ref:i,onClick:n,className:" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen",children:e.jsxs("div",{className:" mt-10 flex flex-col gap-5",children:[e.jsx("button",{onClick:r,className:" place-self-end text-dark-blue",children:e.jsx(k,{size:30})}),e.jsxs("div",{className:" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center",children:[e.jsx("h1",{className:" text-dark-blue text-3xl max-sm:text-xl font-extrabold",children:"Create a New Dashboard"}),e.jsxs("form",{onSubmit:l,className:" flex flex-col gap-5 justify-center w-full",children:[h&&e.jsx("p",{className:" text-[#ff0000] font-semibold",children:h}),e.jsxs("div",{className:"flex flex-col gap-5 w-full ",children:[e.jsx(S,{type:"text",title:"Dashboard Name*",placeholder:"Sundi",id:"dealName",value:s.dealName,onChange:u}),e.jsx(y,{title:"Deadline",value:s.datetime,onChange:u}),e.jsx(C,{type:"number",title:"Deal Size ($)",placeholder:"1,000,000",min:0,id:"dealSize",value:s.dealSize,onChange:u})]}),e.jsx("div",{className:" mt-8 w-full flex items-center justify-center",children:e.jsx(N,{type:"submit",text:"Create a Deal"})})]})]})]})})}function $(){const[r,i]=d.useState([]),n=g(),s=window.innerWidth<765;if(d.useEffect(()=>{(async()=>{try{const l=await f.get("/deals/deals"),t=l.data.deals;localStorage.setItem("user",JSON.stringify(l.data.user)),localStorage.setItem("showBanner",l.data.showBanner.toString()),localStorage.setItem("showBilling",l.data.showBilling.toString()),i(t)}catch(l){console.error("Error fetching deals:",l)}})()},[]),!r)return e.jsx("div",{});const p=async a=>{m.fire({title:"Are you sure?",text:"You will not be able to recover this deal!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then(async l=>{if(l.isConfirmed)try{await f.delete(`/deals/delete-deal/${a}`),i(r.filter(t=>t.id!==a)),m.fire("Deleted!","Your deal has been deleted.","success"),n("/alldashboards")}catch(t){console.error("Error:",t),m.fire("Error","Failed to delete deal","error")}})},h=async a=>{try{const t=(await f.get(`/deals/single-deal/${a}`)).data.deal,x=c=>c?new Date(c).toISOString().slice(0,16):"",{value:o}=await m.fire({title:"Update Deal Details",html:`<div><label class="swal2-title">Deal Name</label><input id="dealName" class="swal2-input" value="${t.deal_name}" placeholder="Deal Name"></div><div><label class="swal2-label">Deadline</label><input type="datetime-local" id="deadline" value="${x(t.dead_line)}" class="swal2-input"></div><div><label class="swal2-label">Dead Size</label><input type="number" id="dealSize" min=0 value="${t.deal_size}" class="swal2-input" placeholder="Deal Size"></div>`,focusConfirm:!1,preConfirm:()=>{const c=document.getElementById("dealName").value,b=document.getElementById("deadline").value,j=document.getElementById("dealSize").value,v=new Date(b).toISOString();return{deal_name:c,dead_line:v,deal_size:j}}});o&&(await f.patch(`/deals/edit-deal/${a}`,o),m.fire("Success","Deal details updated successfully","success"),window.location.reload())}catch(l){console.error("Error updating deal details:",l),m.fire("Error","Failed to update deal details","error")}},w=r.sort((a,l)=>new Date(l.createdAt)-new Date(a.createdAt)),u=a=>{s?n("/move-to-larger-screen"):(localStorage.setItem("currentDealId",a),n(`/dashboard/${a}`))};return e.jsxs("div",{className:"flex flex-col gap-10 items-start justify-center w-full bg-light-grey max-sm:items-center",children:[e.jsx("h1",{className:"text-dark-blue font-bold text-4xl max-sm:text-2xl self-center  bg-light-grey w-full text-center pb-5",children:"Existing Dashboards"}),e.jsx("div",{className:"flex flex-row flex-wrap justify-center items-start gap-5",children:w.map(a=>e.jsxs("div",{className:"flex flex-col justify-start items-start w-72 max-lg:w-64 max-sm:w-56 gap-2 rounded-xl border border-mansa-blue hover:border-dark-blue",children:[e.jsxs("div",{className:"flex flex-col justify-start items-start w-full gap-2 cursor-pointer",onClick:()=>u(a.id),children:[e.jsxs("div",{className:" flex flex-col w-full gap-2 bg-mansa-blue rounded-t-xl px-4 py-3",children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>p(a.id),className:"text-white hover:text-[#FF0000] cursor-pointer",children:e.jsx(E,{className:"h-4 w-4"})})}),e.jsxs("div",{className:" flex flex-row gap-2 items-center",children:[e.jsx("h2",{className:"font-bold text-2xl max-sm:text-xl text-white text-nowrap w-full ",children:a.deal_name.length>14?`${a.deal_name.substring(0,11)}...`:a.deal_name}),e.jsx("button",{onClick:()=>h(a.id),className:" text-white hover:text-dark-blue cursor-pointer",children:e.jsx(I,{size:24})})]})]}),e.jsxs("p",{className:"text-dark-blue text-base px-4",children:[e.jsx("span",{className:"font-semibold",children:"Deadline: "}),a.dead_line?new Date(a.dead_line).toLocaleString():"No deadline set"]})]}),e.jsx("div",{className:" pl-5 self-start"})]},a.id))})]})}function U(){const[r,i]=d.useState(!1),n=g(),{isAuthenticated:s}=D();return d.useEffect(()=>{s||n("/auth/login")},[s,n]),e.jsxs("div",{className:" h-screen w-full",children:[e.jsx("div",{className:" sticky top-0 w-full z-50",children:e.jsx(B,{})}),e.jsxs("div",{className:" flex gap-3 h-screen w-full",children:[e.jsx("div",{className:"",children:e.jsx(z,{})}),e.jsxs("div",{className:" flex flex-col gap-20 w-full max-sm:w-full max-sm:pr-2 h-full ",children:[e.jsx("div",{className:" flex pt-2 items-center gap-4",children:e.jsx("div",{onClick:()=>i(!0),className:"flex",children:e.jsx(N,{text:"Create a Dashboard"})})}),e.jsx("div",{className:" overflow-x-auto pb-5 items-center",children:e.jsx($,{})})]}),r&&e.jsx(F,{onClose:()=>i(!1)})]})]})}export{U as default};
