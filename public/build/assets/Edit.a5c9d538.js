import{d as I,Z as S,i as _,E as D,z as h,o as u,c as L,b as t,w as a,a as s,q as m,t as i,h as H,f,g as y,F as V,r}from"./app.72d9fe45.js";import{P as z}from"./PsLayout.847d3bb7.js";import{P as F}from"./PsBreadcrumb2.c233a04a.js";import{u as N}from"./Validators.f69d3a03.js";import{P as T}from"./PsInput.afea411a.js";import{P as K}from"./PsLabel.9b145d71.js";import{P as U}from"./PsButton.75e226c0.js";import{a as j}from"./PsDangerDialog.4a7cc4cb.js";import{P as q}from"./PsCard.bbe9c0c8.js";import{P as M}from"./PsLoading.1f14f5af.js";import{P as Z}from"./PsIcon.8d64a589.js";import{P as A}from"./PsLabelCaption.0e118b2b.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";const J=I({name:"Edit",components:{Head:S,PsInput:T,PsLabel:K,PsButton:U,PsLabelHeader6:j,PsCard:q,PsLoading:M,PsIcon:Z,PsBreadcrumb2:F,PsLabelCaption:A},layout:z,props:["errors","language"],setup(e){const o=_(!1),p=_(!1),g=_(),v=_(),{isEmpty:P}=N(),k=(l,d,c="")=>{e.errors[l]=d?"":P(l,d,c)};let b=D({symbol:e.language.symbol,name:e.language.name,_method:"put"});function $(l){this.$inertia.post(route("language.update",l),b,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},onError:()=>{g.value.isError=e.errors.symbol!="",v.value.isError=e.errors.name!="",o.value=!1}})}return{validateEmptyInput:k,handleSubmit:$,loading:o,success:p,symbol:g,name:v,form:b}},computed:{breadcrumb(){return[{label:h("core__be_dashboard_label"),url:route("admin.index")},{label:h("language_module"),url:route("language.index")},{label:h("core_be_edit_language"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("language.index"))}}}),O={class:"rounded-xl"},Q={class:"rounded-t-xl bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"grid w-full sm:w-1/2 gap-6"},X=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Y=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ee={class:"flex flex-row justify-end mb-2.5"};function oe(e,o,p,g,v,P){const k=r("Head"),b=r("ps-breadcrumb-2"),$=r("ps-label-header6"),l=r("ps-label"),d=r("ps-input"),c=r("ps-label-caption"),C=r("ps-button"),E=r("ps-loading"),w=r("ps-icon"),B=r("ps-card"),x=r("ps-layout");return u(),L(V,null,[t(k,{title:e.$t("core_be_edit_language")},null,8,["title"]),t(x,null,{default:a(()=>[t(b,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(B,{class:"w-full h-auto"},{default:a(()=>[s("div",O,[s("div",Q,[t($,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[m(i(e.$t("core__be_language_info")),1)]),_:1})]),s("div",R,[s("form",{onSubmit:o[7]||(o[7]=H(n=>e.handleSubmit(this.language.id),["prevent"]))},[s("div",W,[s("div",null,[t(l,{class:"text-base mb-1"},{default:a(()=>[m(i(e.$t("core__be_symbol_label")),1),X]),_:1}),t(d,{disabled:!0,type:"text",ref:"symbol",value:e.form.symbol,"onUpdate:value":o[0]||(o[0]=n=>e.form.symbol=n),placeholder:e.$t("core__be_symbol_label"),onKeyup:o[1]||(o[1]=n=>e.validateEmptyInput("symbol",e.form.symbol)),onBlur:o[2]||(o[2]=n=>e.validateEmptyInput("symbol",e.form.symbol))},null,8,["value","placeholder"]),t(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[m(i(e.errors.symbol),1)]),_:1})]),s("div",null,[t(l,{class:"text-base mb-1"},{default:a(()=>[m(i(e.$t("core__be_language_name_label")),1),Y]),_:1}),t(d,{type:"text",ref:"name",value:e.form.name,"onUpdate:value":o[3]||(o[3]=n=>e.form.name=n),placeholder:e.$t("core__be_language_name_label"),onKeyup:o[4]||(o[4]=n=>e.validateEmptyInput("name",e.form.name)),onBlur:o[5]||(o[5]=n=>e.validateEmptyInput("name",e.form.name))},null,8,["value","placeholder"]),t(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[m(i(e.errors.name),1)]),_:1})]),s("div",ee,[t(C,{onClick:o[6]||(o[6]=n=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[m(i(e.$t("core__be_btn_cancel")),1)]),_:1}),t(C,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(u(),f(E,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):y("",!0),e.success?(u(),f(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):y("",!0),e.success?(u(),f(l,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[m(i(e.$t("core__be_btn_saved")),1)]),_:1})):y("",!0),!e.loading&&!e.success?(u(),f(l,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[m(i(e.$t("core__be_btn_save")),1)]),_:1})):y("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var He=G(J,[["render",oe]]);export{He as default};