import v from"./PsModal.49a87bcd.js";import x from"./PsLabelTitle.8e337e9e.js";import w from"./PsLabel.dd7b9156.js";import P from"./PsButton.81d0ce1f.js";import{d as k,i as r,z as c,o as C,f as $,w as e,b as l,q as p,t as f,a as B,r as n}from"./app.72d9fe45.js";import W from"./PsIcon.c404b5b9.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";const y=k({name:"PsWarningDialog",components:{PsModal:v,PsLabel:w,PsLabelTitle:x,PsButton:P,PsIcon:W},setup(){const o=r(),t=r(c("ps_warning_dialog__warning")),i=r(c("ps_warning_dialog__warning_message"));function m(a,s){a!=null&&a.trim()!=""&&(t.value=a),s!=null&&s.trim()!=""&&(i.value=s),o.value.toggle(!0)}function _(){o.value.toggle(!1)}return{psmodal:o,openModal:m,closeModal:_,title:t,message:i}}}),D={class:"flex justify-end"},M=p(" Ok ");function N(o,t,i,m,_,a){const s=n("ps-icon"),d=n("ps-label-title"),u=n("ps-label"),g=n("ps-button"),b=n("ps-modal");return C(),$(b,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50"},{title:e(()=>[l(d,{class:"flex flex-auto"},{default:e(()=>[l(s,{name:"warningTriangle",class:"text-feWarning-300 mt-1 me-2"}),p(" "+f(o.title),1)]),_:1})]),body:e(()=>[l(u,null,{default:e(()=>[p(f(o.message),1)]),_:1})]),footer:e(()=>[B("div",D,[l(g,{onClick:t[0]||(t[0]=T=>o.psmodal.toggle(!1))},{default:e(()=>[M]),_:1})])]),_:1},512)}var F=h(y,[["render",N]]);export{F as default};