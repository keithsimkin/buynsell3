import{d as M,Z as O,i as L,E as j,z as E,o as n,c as u,b as t,w as r,a as m,q as a,t as l,h as q,F as y,s as v,g as b,f as g,n as V,r as p}from"./app.72d9fe45.js";import{P as Z}from"./PsLayout.847d3bb7.js";import{u as A}from"./Validators.f69d3a03.js";import{P as G}from"./PsInput.afea411a.js";import{P as J}from"./PsLabel.9b145d71.js";import{P as Q}from"./PsButton.75e226c0.js";import{P as R}from"./PsTextarea.b6da5576.js";import{P as W}from"./PsLabelHeader4.cfe9ad61.js";import{P as X}from"./PsLabelCaption.0e118b2b.js";import{P as Y}from"./PsIcon.8d64a589.js";import{P as F}from"./PsLoading.1f14f5af.js";import{P as x}from"./PsBreadcrumb2.c233a04a.js";import{P as ee}from"./PsDropdown.dd6513b3.js";import{P as oe}from"./PsDropdownSelect.2cfdee10.js";import{P as te}from"./PsCheckboxValue.4ec39ca8.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";const re=M({name:"Create",components:{Head:O,PsInput:G,PsLabel:J,PsButton:Q,PsTextarea:R,PsLabelHeader4:W,PsLabelCaption:X,PsIcon:Y,PsLoading:F,PsBreadcrumb2:x,PsDropdown:ee,PsDropdownSelect:oe,PsCheckboxValue:te},layout:Z,props:["errors","sub_menu_groups","coreFieldFilterSettings","modules","icons"],setup(e){const s=L(!1),k=L(!1);let h=j({module_name:"",module_desc:"",module_lang_key:"",ordering:"",core_sub_menu_group_id:"",is_show_on_menu:!0,module_id:""});const{isEmpty:$,minLength:B}=A(),w=(i,d)=>{e.errors[i]=d?B(i,d,3):$(i,d)},C=(i,d)=>{e.errors[i]=d?"":$(i,d)},P=i=>{let d=i.keyCode?i.keyCode:i.which;(d<48||d>57)&&i.preventDefault()};function _(){this.$inertia.post(route("vendor_menu.store"),h,{forceFormData:!0,onBefore:()=>{s.value=!0},onSuccess:()=>{s.value=!1,k.value=!0,setTimeout(()=>{k.value=!1},2e3)},onError:()=>{s.value=!1}})}return{validateModuleNameInput:w,validateEmptyInput:C,onlyNumber:P,form:h,handleSubmit:_,loading:s,success:k}},computed:{breadcrumb(){return[{label:E("core__be_dashboard_label"),url:route("admin.index")},{label:E("vendor_menu_module"),url:route("vendor_menu.index")},{label:E("core_add_vendor_menu"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("vendor_menu.index"))}}}),ne={class:"rounded-lg"},le={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},ae={class:"px-4 pt-6 dark:bg-backgroundDark"},de={class:"grid w-1/2 gap-6"},ue={key:0,class:"text-red-800 font-medium ms-1"},me=m("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ie={class:"rounded-md shadow-xs w-56"},pe={class:"pt-2 z-30"},_e=["onClick"],fe=m("span",{class:"text-red-800 font-medium ms-1"},"*",-1),be={class:"rounded-md shadow-xs w-56"},ce={class:"pt-2 z-30"},ye=["onClick"],ve={key:0,class:"text-red-800 font-medium ms-1"},ge={key:0,class:"text-red-800 font-medium ms-1"},ke=a("Ordering"),he=a("Status"),$e={class:"mb-2.5 flex flex-row justify-end"},we={key:2,class:"transition-all duration-300"},Ce={key:3,class:""};function Pe(e,s,k,h,$,B){const w=p("Head"),C=p("ps-breadcrumb-2"),P=p("ps-label-header-6"),_=p("ps-label"),i=p("ps-input"),d=p("ps-label-caption"),I=p("ps-dropdown-select"),S=p("ps-dropdown"),z=p("ps-textarea"),D=p("ps-checkbox-value"),K=p("ps-button"),U=p("ps-loading"),H=p("ps-icon"),N=p("ps-card"),T=p("ps-layout");return n(),u(y,null,[t(w,{title:e.$t("vendor_menu_module")},null,8,["title"]),t(T,null,{default:r(()=>[t(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(N,{class:"w-full h-auto"},{default:r(()=>[m("div",ne,[m("div",le,[t(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[a(l(e.$t("core_vendor_menu_onfo")),1)]),_:1})]),m("div",ae,[m("form",{onSubmit:s[10]||(s[10]=q(o=>e.handleSubmit(),["prevent"]))},[m("div",de,[(n(!0),u(y,null,v(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_name"&&o.enable===1&&o.is_delete===0),(o,c)=>(n(),u("div",{key:c},[t(_,{class:"text-base"},{default:r(()=>[a(l(e.$t(o.label_name))+" ",1),o.mandatory==1?(n(),u("span",ue,"*")):b("",!0)]),_:2},1024),t(i,{ref_for:!0,ref:"module_name",type:"text",value:e.form.module_name,"onUpdate:value":s[0]||(s[0]=f=>e.form.module_name=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(n(),g(d,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(l(e.errors.module_name),1)]),_:1})):b("",!0)]))),128)),m("div",null,[t(_,{class:"text-base"},{default:r(()=>[a(l(e.$t("core__be_select_module")),1),me]),_:1}),t(S,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[t(I,{placeholder:e.$t("core__be_select_module"),selectedValue:e.form.module_id==""?"":e.modules.filter(o=>o.id==e.form.module_id)[0].title,onChange:s[1]||(s[1]=o=>e.validateEmptyInput("module_id",e.form.module_id)),onBlur:s[2]||(s[2]=o=>e.validateEmptyInput("module_id",e.form.module_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[m("div",ie,[m("div",pe,[(n(!0),u(y,null,v(e.modules,o=>(n(),u("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:c=>[e.form.module_id=o.id,e.validateEmptyInput("module_id",e.form.module_id)]},[t(_,{class:V(["ms-2",o.id==e.form.module_id?" font-bold":""])},{default:r(()=>[a(l(o.title),1)]),_:2},1032,["class"])],8,_e))),128))])])]),_:1}),t(d,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(l(e.errors.module_id),1)]),_:1})]),m("div",null,[t(_,{class:"text-base"},{default:r(()=>[a(l(e.$t("core__be_select_sub_menu")),1),fe]),_:1}),t(S,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[t(I,{placeholder:e.$t("core__be_select_sub_menu"),selectedValue:e.form.core_sub_menu_group_id==""?"":e.sub_menu_groups.filter(o=>o.id==e.form.core_sub_menu_group_id)[0].sub_menu_desc,onChange:s[3]||(s[3]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)),onBlur:s[4]||(s[4]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[m("div",be,[m("div",ce,[(n(!0),u(y,null,v(e.sub_menu_groups,o=>(n(),u("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:c=>[e.form.core_sub_menu_group_id=o.id,e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)]},[t(_,{class:V(["ms-2",o.id==e.form.core_sub_menu_group_id?" font-bold":""])},{default:r(()=>[a(l(o.sub_menu_desc),1)]),_:2},1032,["class"])],8,ye))),128))])])]),_:1}),t(d,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(l(e.errors.core_sub_menu_group_id),1)]),_:1})]),(n(!0),u(y,null,v(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_desc"&&o.enable===1&&o.is_delete===0),(o,c)=>(n(),u("div",{key:c},[t(_,{class:"text-base"},{default:r(()=>[a(l(e.$t(o.label_name))+" ",1),o.mandatory==1?(n(),u("span",ve,"*")):b("",!0)]),_:2},1024),t(z,{rows:"4",value:e.form.module_desc,"onUpdate:value":s[5]||(s[5]=f=>e.form.module_desc=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(n(),g(d,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(l(e.errors.module_desc),1)]),_:1})):b("",!0)]))),128)),(n(!0),u(y,null,v(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_lang_key"&&o.enable===1&&o.is_delete===0),(o,c)=>(n(),u("div",{key:c},[t(_,{class:"text-base"},{default:r(()=>[a(l(e.$t(o.label_name))+" ",1),o.mandatory==1?(n(),u("span",ge,"*")):b("",!0)]),_:2},1024),t(i,{ref_for:!0,ref:"module_lang_key",type:"text",value:e.form.module_lang_key,"onUpdate:value":s[6]||(s[6]=f=>e.form.module_lang_key=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(n(),g(d,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(l(e.errors.module_lang_key),1)]),_:1})):b("",!0)]))),128)),m("div",null,[t(_,{class:"text-base mb-1"},{default:r(()=>[ke]),_:1}),t(i,{type:"text",value:e.form.ordering,"onUpdate:value":s[7]||(s[7]=o=>e.form.ordering=o),placeholder:"Ordering",onKeypress:e.onlyNumber},null,8,["value","onKeypress"]),t(d,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(l(e.errors.ordering),1)]),_:1})]),m("div",null,[t(_,{class:"text-base"},{default:r(()=>[he]),_:1}),t(D,{value:e.form.is_show_on_menu,"onUpdate:value":s[8]||(s[8]=o=>e.form.is_show_on_menu=o),class:"font-normal",title:"Publish"},null,8,["value"])]),m("div",$e,[t(K,{onClick:s[9]||(s[9]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[a(l(e.$t("core__be_btn_cancel")),1)]),_:1}),t(K,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(n(),g(U,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(n(),g(H,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(n(),u("span",we,l(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(n(),u("span",Ce,l(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var no=se(re,[["render",Pe]]);export{no as default};
