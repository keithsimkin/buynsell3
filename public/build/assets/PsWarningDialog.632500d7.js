import{P as $}from"./PsModal.9ecdc9db.js";import{P as z}from"./PsLabel.9b145d71.js";import{P as N}from"./PsButton.75e226c0.js";import{d as V,i as s,z as r,o as w,f as y,w as t,a as k,b as d,q as c,t as u,g as D,r as m}from"./app.72d9fe45.js";import{P as M}from"./PsIcon.8d64a589.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";const j=V({name:"PsWarningDialog",components:{PsModal:$,PsLabel:z,PsButton:N,PsIcon:M},setup(){const e=s(),o=s(r("ps_warning_dialog__warning")),f=s(r("ps_warning_dialog__warning_message")),p=s(r("ps_confirm_dialog__yes")),_=s(r("ps_confirm_dialog__no")),g=s(!1);let a,n;function i(l){l=="yes"?a():n(),e.value.toggle(!1)}function v(l,b,C,h=null,P,B){l!=null&&l.trim()!=""&&(o.value=l),b!=null&&b.trim()!=""&&(f.value=b),h!=null&&h.trim()!=""&&(g.value=!0,_.value=h),C!=null&&C.trim()!=""&&(p.value=C),e.value.toggle(!0),a=P,n=B}function x(){e.value.toggle(!1)}return{psmodal:e,openModal:v,closeModal:x,title:o,actionClicked:i,okButton:p,cancelButton:_,haveCancleStr:g,message:f}}}),q={class:"flex flex-auto items-center"},I={class:"w-full text-start mt-2"},L={class:"flex flex-row justify-end"};function O(e,o,f,p,_,g){const a=m("ps-icon"),n=m("ps-label"),i=m("ps-button"),v=m("ps-modal");return w(),y(v,{ref:"psmodal",maxWidth:"480px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl",class:"z-20"},{title:t(()=>[k("div",q,[d(a,{name:"alert-triangle",class:"text-yellow-500 me-2.5"}),d(n,{class:"text-lg font-semibold"},{default:t(()=>[c(u(e.title),1)]),_:1})])]),body:t(()=>[k("div",I,[d(n,{class:"font-light text-sm lg:text-base"},{default:t(()=>[c(u(e.message),1)]),_:1})])]),footer:t(()=>[k("div",L,[e.haveCancleStr?(w(),y(i,{key:0,rounded:"rounded",onClick:o[0]||(o[0]=x=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-2",border:"border border-gray-200",colors:"bg-none",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:t(()=>[c(u(e.cancelButton),1)]),_:1})):D("",!0),d(i,{rounded:"rounded",onClick:o[1]||(o[1]=x=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-blue-500 text-white"},{default:t(()=>[c(u(e.okButton),1)]),_:1})])]),_:1},512)}var J=W(j,[["render",O]]);export{J as P};