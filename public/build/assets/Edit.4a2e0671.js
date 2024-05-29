import{d as H,Z as V,E as B,i as c,z as f,o as d,c as h,b as t,w as i,a,q as u,t as l,h as z,f as C,g as v,F as D,r}from"./app.72d9fe45.js";import{P as F}from"./PsLayout.847d3bb7.js";import{P as T}from"./PsBreadcrumb2.c233a04a.js";import{u as x}from"./Validators.f69d3a03.js";import{P as K}from"./PsInput.afea411a.js";import{P as U}from"./PsLabel.9b145d71.js";import{P as j}from"./PsButton.75e226c0.js";import{a as q}from"./PsDangerDialog.4a7cc4cb.js";import{P as M}from"./PsCard.bbe9c0c8.js";import{P as N}from"./PsLoading.1f14f5af.js";import{P as Z}from"./PsIcon.8d64a589.js";import{P as A}from"./PsLabelCaption.0e118b2b.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";const J=H({name:"Edit",components:{Head:V,PsInput:K,PsLabel:U,PsButton:j,PsLabelHeader6:q,PsCard:M,PsLoading:N,PsIcon:Z,PsBreadcrumb2:T,PsLabelCaption:A},layout:F,props:["errors","mobile_language_string","mobile_language"],data(){return{form:B({key:this.mobile_language_string.key,value:this.mobile_language_string.value,language_id:this.mobile_language.id,_method:"put"})}},setup(e){const o=c(!1),p=c(!1),_=c(),b=c(),{isEmpty:$}=x(),y=(s,m)=>{e.errors[s]=m?"":$(s,m),s=="key"&&(_.value.isError=!!Boolean(e.errors.key)),s=="value"&&(b.value.isError=!!Boolean(e.errors.value))};let g=B({key:e.mobile_language_string.key,value:e.mobile_language_string.value,language_id:e.mobile_language.id,id:e.mobile_language_string.id,_method:"put"});function k(s){this.$inertia.post(route("mobile_language_string.update",[e.mobile_language,s]),g,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,p.value=!0,setTimeout(()=>{p.value=!1},2e3)},onError:()=>{o.value=!1,_.value.isError=!!Boolean(e.errors.key),b.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:y,handleSubmit:k,loading:o,success:p,value:b,key:_,form:g}},computed:{breadcrumb(){return[{label:f("core__be_dashboard_label"),url:route("admin.index")},{label:f("mobile_language_module"),url:route("mobile_language.index")},{label:f("mobile_language_string_module"),url:route("mobile_language_string.index",this.mobile_language.id)},{label:f("core__be_edit_mobile_language_string"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("mobile_language_string.index",this.mobile_language.id))}}}),O={class:"rounded-xl"},Q={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"grid w-full sm:w-1/2 gap-6"},X={class:"text-primary-500"},Y=a("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ee=a("span",{class:"text-red-800 font-medium ms-1"},"*",-1),oe={class:"flex flex-row justify-end mb-2.5"},te={key:2,class:"transition-all duration-300"},ae={key:3,class:""};function re(e,o,p,_,b,$){const y=r("Head"),g=r("ps-breadcrumb-2"),k=r("ps-label-header-6"),s=r("ps-label"),m=r("ps-input"),P=r("ps-label-caption"),E=r("ps-button"),w=r("ps-loading"),I=r("ps-icon"),S=r("ps-card"),L=r("ps-layout");return d(),h(D,null,[t(y,{title:e.$t("core__be_edit_mobile_language_string")},null,8,["title"]),t(L,null,{default:i(()=>[t(g,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(S,{class:"w-full h-auto"},{default:i(()=>[a("div",O,[a("div",Q,[t(k,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:i(()=>[u(l(e.$t("edit_language_string")),1)]),_:1})]),a("div",R,[a("form",{onSubmit:o[7]||(o[7]=z(n=>e.handleSubmit(this.mobile_language_string.id),["prevent"]))},[a("div",W,[a("div",null,[u(l(e.$t("core__be_selected_language"))+" : ",1),a("span",X,l(e.mobile_language.name),1)]),a("div",null,[t(s,{class:"text-base mb-1"},{default:i(()=>[u(l(e.$t("core__be_key_label")),1),Y]),_:1}),t(m,{disabled:!0,type:"text",value:e.form.key,"onUpdate:value":o[0]||(o[0]=n=>e.form.key=n),placeholder:e.$t("core__be_key_placeholder"),onKeyup:o[1]||(o[1]=n=>e.validateEmptyInput("key",e.form.key)),onBlur:o[2]||(o[2]=n=>e.validateEmptyInput("key",e.form.key))},null,8,["value","placeholder"]),t(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[u(l(e.errors.key),1)]),_:1})]),a("div",null,[t(s,{class:"text-base mb-1"},{default:i(()=>[u(l(e.$t("core__be_value_label")),1),ee]),_:1}),t(m,{type:"text",value:e.form.value,"onUpdate:value":o[3]||(o[3]=n=>e.form.value=n),placeholder:e.$t("core__be_value_placeholder"),onKeyup:o[4]||(o[4]=n=>e.validateEmptyInput("value",e.form.value)),onBlur:o[5]||(o[5]=n=>e.validateEmptyInput("value",e.form.value))},null,8,["value","placeholder"]),t(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:i(()=>[u(l(e.errors.value),1)]),_:1})]),a("div",oe,[t(E,{onClick:o[6]||(o[6]=n=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:i(()=>[u(l(e.$t("core__be_btn_cancel")),1)]),_:1}),t(E,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:i(()=>[e.loading?(d(),C(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),e.success?(d(),C(I,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),e.success?(d(),h("span",te,l(e.$t("core__be_btn_saved")),1)):v("",!0),!e.loading&&!e.success?(d(),h("span",ae,l(e.$t("core__be_btn_save")),1)):v("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Te=G(J,[["render",re]]);export{Te as default};
