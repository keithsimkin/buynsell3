import g from"./PsModal.49a87bcd.js";import v from"./PsLabel.dd7b9156.js";import $ from"./PsLabelTitle.8e337e9e.js";import w from"./PsButton.81d0ce1f.js";import c from"./PsLoadingDialog.52bc8b7d.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{d as P,i as m,o as C,c as k,b as o,w as l,q as s,t,a as M,F as V,r as n}from"./app.72d9fe45.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";const B=P({name:"PsModelView",components:{PsModal:g,PsLabel:v,PsLabelTitle:$,PsLoadingDialog:c,PsButton:w},setup(){const e=m(),_=m();function d(){e.value.toggle(!0)}return{psmodal:e,openModal:d,psloading:_}}}),y={class:"flex flex-row justify-end"};function L(e,_,d,N,D,F){const i=n("ps-loading-dialog"),r=n("ps-label-title"),a=n("ps-label"),p=n("ps-button"),u=n("ps-modal");return C(),k(V,null,[o(i,{ref:"psloading"},null,512),o(u,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-20"},{title:l(()=>[o(r,null,{default:l(()=>[s(t(e.$t("ps_model_view__title")),1)]),_:1})]),body:l(()=>[o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),o(a,null,{default:l(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1})]),footer:l(()=>[M("div",y,[o(p,{onClick:_[0]||(_[0]=f=>e.psloading.openModal())},{default:l(()=>[s(t(e.$t("ps_model_view__save")),1)]),_:1}),o(p,{onClick:_[1]||(_[1]=f=>e.psmodal.toggle(!1))},{default:l(()=>[s(t(e.$t("ps_model_view__end")),1)]),_:1})])]),_:1},512)],64)}var A=b(B,[["render",L]]);export{A as default};
