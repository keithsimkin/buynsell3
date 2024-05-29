import B from"./PsModal.49a87bcd.js";import w from"./PsLabel.dd7b9156.js";import P from"./PsButton.81d0ce1f.js";import{d as $,i as s,z as d,o as D,f as z,w as n,a as k,b as r,q as c,t as f,r as m}from"./app.72d9fe45.js";import E from"./PsIcon.c404b5b9.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";const M=$({name:"PsDangerDialog",components:{PsModal:B,PsLabel:w,PsButton:P,PsIcon:E},setup(){const e=s(),o=s(d("ps_danger_dialog__danger")),u=s(d("ps_danger_dialog__danger_message")),p=s(d("ps_confirm_dialog__yes")),_=s(d("ps_confirm_dialog__no"));let g,l;function a(t){t=="yes"?g():l(),e.value.toggle(!1)}function i(t,x,h,b,y,C){t!=null&&t.trim()!=""&&(o.value=t),x!=null&&x.trim()!=""&&(u.value=x),b!=null&&b.trim()!=""&&(_.value=b),h!=null&&h.trim()!=""&&(p.value=h),e.value.toggle(!0),g=y,l=C}function v(){e.value.toggle(!1)}return{psmodal:e,openModal:i,closeModal:v,title:o,actionClicked:a,okButton:p,cancelButton:_,message:u}}}),N={class:"flex flex-row items-center"},V={class:"w-full text-start mt-2"},j={class:"flex flex-row justify-end"};function q(e,o,u,p,_,g){const l=m("ps-icon"),a=m("ps-label"),i=m("ps-button"),v=m("ps-modal");return D(),z(v,{ref:"psmodal",maxWidth:"480px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl me-3",class:"z-20"},{title:n(()=>[k("div",N,[r(l,{name:"info",class:"text-feError-500 me-2.5"}),r(a,{class:"text-lg font-semibold"},{default:n(()=>[c(f(e.title),1)]),_:1})])]),body:n(()=>[k("div",V,[r(a,{class:"font-light text-sm lg:text-base"},{default:n(()=>[c(f(e.message),1)]),_:1})])]),footer:n(()=>[k("div",j,[r(i,{rounded:"rounded",onClick:o[0]||(o[0]=t=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-feAchromatic-200 dark:border-feSecondary-700",colors:"bg-none dark:text-feSecondary-100",hover:"hover:outline-none hover:ring hover:ring-feSecondary-100 dark:hover:ring-feSecondary-600"},{default:n(()=>[c(f(e.cancelButton),1)]),_:1}),r(i,{rounded:"rounded",onClick:o[1]||(o[1]=t=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-feError-500 text-feAchromatic-50 dark:text-feAchromatic-900",hover:"hover:outline-none hover:ring hover:ring-feError-100",focus:"focus:outline-none focus:ring focus:ring-feError-300"},{default:n(()=>[c(f(e.okButton),1)]),_:1})])]),_:1},512)}var J=A(M,[["render",q]]);export{J as default};
