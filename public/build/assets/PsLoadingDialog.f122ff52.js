import{P as u}from"./PsModal.9ecdc9db.js";import{P as g}from"./PsLabelTitle.f9276224.js";import{P as b}from"./PsLabel.9b145d71.js";import{d as P,i as p,z as v,o as x,f as $,w as e,b as i,q as _,t as c,r as a}from"./app.72d9fe45.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";const M=P({components:{PsModal:u,PsLabel:b,PsLabelTitle:g},setup(){const o=p(),s=p(v("core.ps_loading_dialog__loading"));function t(){o.value.toggle(!0)}function l(){o.value.toggle(!1)}function n(r){s.value=r}return{psmodal:o,openModal:t,closeModal:l,message:s,setMessage:n}}});function h(o,s,t,l,n,r){const d=a("ps-label-title"),m=a("ps-label"),f=a("ps-modal");return x(),$(f,{ref:"psmodal",maxWidth:"450px",isClickOut:!1,class:"z-50"},{title:e(()=>[i(d,null,{default:e(()=>[_(c(o.$t("ps_loading_dialog__please_wait")),1)]),_:1})]),body:e(()=>[i(m,null,{default:e(()=>[_(c(o.message),1)]),_:1})]),footer:e(()=>[]),_:1},512)}var B=C(M,[["render",h]]);export{B as P};