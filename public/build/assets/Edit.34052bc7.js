import{d as T,Z as O,i as L,E as j,z as E,o as s,c as i,b as l,w as r,a as u,q as a,t as d,h as q,F as v,s as g,g as b,f as c,n as M,r as _}from"./app.72d9fe45.js";import{P as Z}from"./PsLayout.847d3bb7.js";import{u as A}from"./Validators.f69d3a03.js";import{P as G}from"./PsInput.afea411a.js";import{P as J}from"./PsLabel.9b145d71.js";import{P as Q}from"./PsButton.75e226c0.js";import{P as R}from"./PsTextarea.b6da5576.js";import{P as W}from"./PsLabelHeader4.cfe9ad61.js";import{P as X}from"./PsLabelCaption.0e118b2b.js";import{P as Y}from"./PsIcon.8d64a589.js";import{P as F}from"./PsLoading.1f14f5af.js";import{P as x}from"./PsBreadcrumb2.c233a04a.js";import{P as ee}from"./PsDropdown.dd6513b3.js";import{P as oe}from"./PsDropdownSelect.2cfdee10.js";import{P as te}from"./PsCheckboxValue.4ec39ca8.js";import{_ as le}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";const re=T({name:"Edit",components:{Head:O,PsInput:G,PsLabel:J,PsButton:Q,PsTextarea:R,PsLabelHeader4:W,PsLabelCaption:X,PsIcon:Y,PsLoading:F,PsBreadcrumb2:x,PsDropdown:ee,PsDropdownSelect:oe,PsCheckboxValue:te},layout:Z,props:["errors","menu","sub_menu_groups","coreFieldFilterSettings","icons","modules","forSelectedModules"],setup(e){const t=L(!1),k=L(!1);let h=j({module_name:e.menu.module_name,module_desc:e.menu.module_desc,module_lang_key:e.menu.module_lang_key,ordering:e.menu.ordering,module_id:e.menu.module_id,old_module_id:e.menu.module_id,core_sub_menu_group_id:e.sub_menu_groups.find(n=>n.id==e.menu.core_sub_menu_group_id)?e.menu.core_sub_menu_group_id:"",is_show_on_menu:e.menu.is_show_on_menu==1,_method:"put"});const{isEmpty:$,minLength:S}=A(),w=(n,m)=>{e.errors[n]=m?S(n,m,3):$(n,m)},C=(n,m)=>{e.errors[n]=m?"":$(n,m)},P=n=>{let m=n.keyCode?n.keyCode:n.which;(m<48||m>57)&&n.preventDefault()};function p(n){this.$inertia.post(route("menu.update",n),h,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,k.value=!0,setTimeout(()=>{k.value=!1},2e3)},onError:()=>{t.value=!1}})}return{validateModuleNameInput:w,validateEmptyInput:C,onlyNumber:P,form:h,handleSubmit:p,loading:t,success:k}},computed:{breadcrumb(){return[{label:E("core__be_dashboard_label"),url:route("admin.index")},{label:E("module_module"),url:route("menu.index")},{label:E("core_edit_menu"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("menu.index"))}}}),se={class:"rounded-lg"},ne={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},de={class:"px-4 pt-6 dark:bg-backgroundDark"},ae={class:"grid w-1/2 gap-6"},ue={key:0,class:"text-red-800 font-medium ms-1"},me=u("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ie={class:"rounded-md shadow-xs w-56"},_e={class:"pt-2 z-30"},pe=["onClick"],fe=u("span",{class:"text-red-800 font-medium ms-1"},"*",-1),be={class:"rounded-md shadow-xs w-56"},ye={class:"pt-2 z-30"},ce=["onClick"],ve={key:0,class:"text-red-800 font-medium ms-1"},ge={key:0,class:"text-red-800 font-medium ms-1"},ke=a("Ordering"),he=a("Status"),$e={class:"mb-2.5 flex flex-row justify-end"},we={key:2,class:"transition-all duration-300"},Ce={key:3,class:""};function Pe(e,t,k,h,$,S){const w=_("Head"),C=_("ps-breadcrumb-2"),P=_("ps-label-header-6"),p=_("ps-label"),n=_("ps-input"),m=_("ps-label-caption"),I=_("ps-dropdown-select"),B=_("ps-dropdown"),V=_("ps-textarea"),z=_("ps-checkbox-value"),K=_("ps-button"),D=_("ps-loading"),U=_("ps-icon"),H=_("ps-card"),N=_("ps-layout");return s(),i(v,null,[l(w,{title:e.$t("core_edit_menu")},null,8,["title"]),l(N,null,{default:r(()=>[l(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l(H,{class:"w-full h-auto"},{default:r(()=>[u("div",se,[u("div",ne,[l(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[a(d(e.$t("core_menu_onfo")),1)]),_:1})]),u("div",de,[u("form",{onSubmit:t[11]||(t[11]=q(o=>e.handleSubmit(e.menu.id),["prevent"]))},[u("div",ae,[(s(!0),i(v,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_name"&&o.enable===1&&o.is_delete===0),(o,y)=>(s(),i("div",{key:y},[l(p,{class:"text-base"},{default:r(()=>[a(d(e.$t(o.label_name))+" ",1),o.mandatory==1?(s(),i("span",ue,"*")):b("",!0)]),_:2},1024),l(n,{ref_for:!0,ref:"module_name",type:"text",value:e.form.module_name,"onUpdate:value":t[0]||(t[0]=f=>e.form.module_name=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),c(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(d(e.errors.module_name),1)]),_:1})):b("",!0)]))),128)),u("div",null,[l(p,{class:"text-base"},{default:r(()=>[a(d(e.$t("core__be_select_module")),1),me]),_:1}),l(B,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l(I,{placeholder:e.$t("core__be_select_module"),selectedValue:e.form.module_id==""||e.form.module_id===null?e.forSelectedModules.filter(o=>o.id==e.menu.module_id)[0].title:e.forSelectedModules.filter(o=>o.id==e.form.module_id)[0].title,onChange:t[1]||(t[1]=o=>e.validateEmptyInput("module_id",e.form.module_id)),onBlur:t[2]||(t[2]=o=>e.validateEmptyInput("module_id",e.form.module_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[u("div",ie,[u("div",_e,[u("div",{class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:t[3]||(t[3]=o=>[e.form.module_id=e.menu.module_id,e.validateEmptyInput("module_id",e.form.module_id)])},[e.form.module_id==""||e.form.module_id==e.menu.module_id?(s(),c(p,{key:0,class:"ms-2 font-bold"},{default:r(()=>[a(d(e.forSelectedModules.filter(o=>o.id==e.menu.module_id)[0].title),1)]),_:1})):(s(),c(p,{key:1,class:"ms-2"},{default:r(()=>[a(d(e.forSelectedModules.filter(o=>o.id==e.menu.module_id)[0].title),1)]),_:1}))]),(s(!0),i(v,null,g(e.modules,o=>(s(),i("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>[e.form.module_id=o.id,e.validateEmptyInput("module_id",e.form.module_id)]},[l(p,{class:M(["ms-2",o.id==e.form.module_id?" font-bold":""])},{default:r(()=>[a(d(o.title),1)]),_:2},1032,["class"])],8,pe))),128))])])]),_:1}),l(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(d(e.errors.module_id),1)]),_:1})]),u("div",null,[l(p,{class:"text-base"},{default:r(()=>[a(d(e.$t("core__be_select_sub_menu")),1),fe]),_:1}),l(B,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l(I,{placeholder:e.$t("core__be_select_sub_menu"),selectedValue:e.form.core_sub_menu_group_id==""?"":e.sub_menu_groups.filter(o=>o.id==e.form.core_sub_menu_group_id)[0].sub_menu_desc,onChange:t[4]||(t[4]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)),onBlur:t[5]||(t[5]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id))},null,8,["placeholder","selectedValue"])]),list:r(()=>[u("div",be,[u("div",ye,[(s(!0),i(v,null,g(e.sub_menu_groups,o=>(s(),i("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:y=>[e.form.core_sub_menu_group_id=o.id,e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)]},[l(p,{class:M(["ms-2",o.id==e.form.core_sub_menu_group_id?" font-bold":""])},{default:r(()=>[a(d(o.sub_menu_desc),1)]),_:2},1032,["class"])],8,ce))),128))])])]),_:1}),l(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(d(e.errors.core_sub_menu_group_id),1)]),_:1})]),(s(!0),i(v,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_desc"&&o.enable===1&&o.is_delete===0),(o,y)=>(s(),i("div",{key:y},[l(p,{class:"text-base"},{default:r(()=>[a(d(e.$t(o.label_name))+" ",1),o.mandatory==1?(s(),i("span",ve,"*")):b("",!0)]),_:2},1024),l(V,{rows:"4",value:e.form.module_desc,"onUpdate:value":t[6]||(t[6]=f=>e.form.module_desc=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),c(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(d(e.errors.module_desc),1)]),_:1})):b("",!0)]))),128)),(s(!0),i(v,null,g(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_lang_key"&&o.enable===1&&o.is_delete===0),(o,y)=>(s(),i("div",{key:y},[l(p,{class:"text-base"},{default:r(()=>[a(d(e.$t(o.label_name))+" ",1),o.mandatory==1?(s(),i("span",ge,"*")):b("",!0)]),_:2},1024),l(n,{ref_for:!0,ref:"module_lang_key",type:"text",value:e.form.module_lang_key,"onUpdate:value":t[7]||(t[7]=f=>e.form.module_lang_key=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(s(),c(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(d(e.errors.module_lang_key),1)]),_:1})):b("",!0)]))),128)),u("div",null,[l(p,{class:"text-base mb-1"},{default:r(()=>[ke]),_:1}),l(n,{type:"text",value:e.form.ordering,"onUpdate:value":t[8]||(t[8]=o=>e.form.ordering=o),placeholder:"Ordering",onKeypress:e.onlyNumber},null,8,["value","onKeypress"]),l(m,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[a(d(e.errors.ordering),1)]),_:1})]),u("div",null,[l(p,{class:"text-base"},{default:r(()=>[he]),_:1}),l(z,{value:e.form.is_show_on_menu,"onUpdate:value":t[9]||(t[9]=o=>e.form.is_show_on_menu=o),class:"font-normal",title:"Publish"},null,8,["value"])]),u("div",$e,[l(K,{onClick:t[10]||(t[10]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[a(d(e.$t("core__be_btn_cancel")),1)]),_:1}),l(K,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(s(),c(D,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(s(),c(U,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(s(),i("span",we,d(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(s(),i("span",Ce,d(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var so=le(re,[["render",Pe]]);export{so as default};
