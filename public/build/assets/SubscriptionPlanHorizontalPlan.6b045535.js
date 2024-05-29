import{P as v}from"./PsButton.75e226c0.js";import{P as h}from"./PsLabel.9b145d71.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{d as g,o as s,c as i,a as p,b as l,w as o,q as n,t,f as k,g as P,r as y}from"./app.72d9fe45.js";const $=g({name:"SubscriptionPlanHorizontalPlan",components:{PsButton:v,PsLabel:h},props:{plan:Object},setup(e,{emit:r}){function d(c,u){r("purchaseClick",c,u)}return{purchaseClick:d}}}),w={class:"border rounded-lg"},B={class:"py-10 flex flex-col items-center justify-center bg-secondary-100"},N={class:"mb-3 flex gap-3"},V={key:0,class:"flex items-end gap-2"},S={key:1,class:"flex items-end gap-2"},j={class:"px-4 py-8 flex flex-col items-center"};function z(e,r,d,c,u,H){var m,_;const a=y("ps-label"),x=y("ps-button");return s(),i("div",w,[p("div",B,[p("div",null,[p("div",N,[l(a,{textColor:"text-base text-secondary-500 font-medium"},{default:o(()=>[n(t(e.$t("vendor_panel__price")),1)]),_:1}),((m=e.plan)==null?void 0:m.is_most_popular_plan)==1?(s(),k(a,{key:0,textColor:"text-sm text-white font-medium bg-primary-500 px-2 py-[2px] rounded"},{default:o(()=>[n(t(e.$t("vendor_panel__most_popular")),1)]),_:1})):P("",!0)]),((_=e.plan)==null?void 0:_.discount_price)=="Unavailable"?(s(),i("div",V,[l(a,{textColor:"lg:text-5xl text-primary-500 font-semibold"},{default:o(()=>[n(t(e.plan.currency_symbol)+t(e.plan.sale_price),1)]),_:1})])):(s(),i("div",S,[l(a,{textColor:"lg:text-5xl text-primary-500 font-semibold"},{default:o(()=>[n(t(e.plan.currency_symbol)+t(e.plan.discount_price),1)]),_:1}),l(a,{textColor:"text-base text-secondary-500 font-medium line-through"},{default:o(()=>[n(t(e.plan.currency_symbol)+t(e.plan.sale_price),1)]),_:1})]))])]),p("div",j,[l(a,{textColor:"lg:text-2xl text-secondary-500 font-semibold"},{default:o(()=>[n(t(e.plan.value),1)]),_:1}),l(a,{textColor:"text-sm text-secondary-500 font-medium mt-3 mb-8"},{default:o(()=>[n(t(e.plan.duration),1)]),_:1}),l(x,{onClick:r[0]||(r[0]=U=>{var f,b;return e.purchaseClick(e.plan.id,((f=e.plan)==null?void 0:f.discount_price)=="Unavailable"?e.plan.sale_price:(b=e.plan)==null?void 0:b.discount_price)}),rounded:"rounded",colors:"w-full",border:"border",hover:"hover:bg-primary-500 hover:text-white"},{default:o(()=>[n(t(e.$t("vendor_panel__purchase")),1)]),_:1})])])}var O=C($,[["render",z]]);export{O as default};