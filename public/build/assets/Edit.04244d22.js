import{d as T,Z as z,i as L,E as N,z as S,o,c as n,b as r,w as u,a as y,q as p,t as i,h as V,F as v,s as c,g as _,f as k,r as d}from"./app.72d9fe45.js";import{P as M}from"./PsLayout.847d3bb7.js";import{u as j}from"./Validators.f69d3a03.js";import{P as q}from"./PsInput.afea411a.js";import{P as Z}from"./PsLabel.9b145d71.js";import{P as A}from"./PsButton.75e226c0.js";import{P as G}from"./PsTextarea.b6da5576.js";import{P as J}from"./PsLabelHeader4.cfe9ad61.js";import{P as O}from"./PsLabelCaption.0e118b2b.js";import{P as Q}from"./PsIcon.8d64a589.js";import{P as R}from"./PsLoading.1f14f5af.js";import{P as W}from"./PsBreadcrumb2.c233a04a.js";import{P as X}from"./PsDropdown.dd6513b3.js";import{P as Y}from"./PsDropdownSelect.2cfdee10.js";import{P as x}from"./PsCheckboxValue.4ec39ca8.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";const ee=T({name:"Edit",components:{Head:z,PsInput:q,PsLabel:Z,PsButton:A,PsTextarea:G,PsLabelHeader4:J,PsLabelCaption:O,PsIcon:Q,PsLoading:R,PsBreadcrumb2:W,PsDropdown:X,PsDropdownSelect:Y,PsCheckboxValue:x},layout:M,props:["errors","module","coreFieldFilterSettings"],setup(e){const a=L(!1),g=L(!1);let h=N({title:e.module.title,route_name:e.module.route_name,lang_key:e.module.lang_key,status:e.module.status,is_not_from_sidebar:e.module.is_not_from_sidebar,_method:"put"});const{isEmpty:P,minLength:w}=j(),$=(l,m)=>{e.errors[l]=m?w(l,m,3):P(l,m)},C=(l,m)=>{e.errors[l]=m?"":P(l,m)},B=l=>{let m=l.keyCode?l.keyCode:l.which;(m<48||m>57)&&l.preventDefault()};function b(){this.$inertia.post(route("module.update",e.module.id),h,{forceFormData:!0,onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,g.value=!0,setTimeout(()=>{g.value=!1},2e3)},onError:()=>{a.value=!1}})}return{validateModuleNameInput:$,validateEmptyInput:C,onlyNumber:B,form:h,handleSubmit:b,loading:a,success:g}},computed:{breadcrumb(){return[{label:S("core__be_dashboard_label"),url:route("admin.index")},{label:S("module_registering_module"),url:route("module.index")},{label:S("edit_module"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("module.index"))}}}),te={class:"rounded-xl"},oe={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},ae={class:"px-4 pt-6 dark:bg-backgroundDark"},re={class:"grid w-1/2 gap-6"},ne={key:0,class:"text-red-800 font-medium ms-1"},le={key:0,class:"text-red-800 font-medium ms-1"},se={key:0,class:"text-red-800 font-medium ms-1"},me={class:"mb-2.5 flex flex-row justify-end"},ue={key:2,class:"transition-all duration-300"},ie={key:3,class:""};function de(e,a,g,h,P,w){const $=d("Head"),C=d("ps-breadcrumb-2"),B=d("ps-label-header-6"),b=d("ps-label"),l=d("ps-input"),m=d("ps-label-caption"),E=d("ps-checkbox-value"),I=d("ps-button"),D=d("ps-loading"),K=d("ps-icon"),U=d("ps-card"),H=d("ps-layout");return o(),n(v,null,[r($,{title:e.$t("edit_module")},null,8,["title"]),r(H,null,{default:u(()=>[r(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(U,{class:"w-full h-auto"},{default:u(()=>[y("div",te,[y("div",oe,[r(B,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[p(i(e.$t("core__module_info")),1)]),_:1})]),y("div",ae,[y("form",{onSubmit:a[6]||(a[6]=V(t=>e.handleSubmit(),["prevent"]))},[y("div",re,[(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="title"&&t.enable===1&&t.is_delete===0),(t,f)=>(o(),n("div",{key:f},[r(b,{class:"text-base"},{default:u(()=>[p(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),n("span",ne,"*")):_("",!0)]),_:2},1024),r(l,{ref_for:!0,ref:"title",type:"text",value:e.form.title,"onUpdate:value":a[0]||(a[0]=s=>e.form.title=s),placeholder:e.$t(t.placeholder),onKeyup:s=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):"",onBlur:s=>t.mandatory==1?e.validateEmptyInput("title",e.form.title):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),k(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[p(i(e.errors.title),1)]),_:1})):_("",!0)]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="lang_key"&&t.enable===1&&t.is_delete===0),(t,f)=>(o(),n("div",{key:f},[r(b,{class:"text-base"},{default:u(()=>[p(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),n("span",le,"*")):_("",!0)]),_:2},1024),r(l,{ref_for:!0,ref:"lang_key",type:"text",value:e.form.lang_key,"onUpdate:value":a[1]||(a[1]=s=>e.form.lang_key=s),placeholder:e.$t(t.placeholder),onKeyup:s=>t.mandatory==1?e.validateEmptyInput("lang_key",e.form.lang_key):"",onBlur:s=>t.mandatory==1?e.validateEmptyInput("lang_key",e.form.lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),k(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[p(i(e.errors.lang_key),1)]),_:1})):_("",!0)]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="route_name"&&t.enable===1&&t.is_delete===0),(t,f)=>(o(),n("div",{key:f},[r(b,{class:"text-base"},{default:u(()=>[p(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(o(),n("span",se,"*")):_("",!0)]),_:2},1024),r(l,{ref_for:!0,ref:"route_name",type:"text",value:e.form.route_name,"onUpdate:value":a[2]||(a[2]=s=>e.form.route_name=s),placeholder:e.$t(t.placeholder),onKeyup:s=>t.mandatory==1?e.validateEmptyInput("route_name",e.form.route_name):"",onBlur:s=>t.mandatory==1?e.validateEmptyInput("route_name",e.form.route_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(o(),k(m,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[p(i(e.errors.route_name),1)]),_:1})):_("",!0)]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="status"&&t.enable===1&&t.is_delete===0),(t,f)=>(o(),n("div",{key:f},[r(b,{class:"text-base"},{default:u(()=>[p(i(e.$t(t.label_name)),1)]),_:2},1024),r(E,{value:e.form.status,"onUpdate:value":a[3]||(a[3]=s=>e.form.status=s),class:"font-normal",title:e.$t(t.placeholder)},null,8,["value","title"])]))),128)),(o(!0),n(v,null,c(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="is_not_from_sidebar"&&t.enable===1&&t.is_delete===0),(t,f)=>(o(),n("div",{key:f},[r(b,{class:"text-base"},{default:u(()=>[p(i(e.$t(t.label_name)),1)]),_:2},1024),r(E,{value:e.form.is_not_from_sidebar,"onUpdate:value":a[4]||(a[4]=s=>e.form.is_not_from_sidebar=s),class:"font-normal",title:e.$t(t.placeholder)},null,8,["value","title"])]))),128)),y("div",me,[r(I,{onClick:a[5]||(a[5]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[p(i(e.$t("core__be_btn_cancel")),1)]),_:1}),r(I,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[e.loading?(o(),k(D,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):_("",!0),e.success?(o(),k(K,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):_("",!0),e.success?(o(),n("span",ue,i(e.$t("core__be_btn_saved")),1)):_("",!0),!e.loading&&!e.success?(o(),n("span",ie,i(e.$t("core__be_btn_save")),1)):_("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Je=F(ee,[["render",de]]);export{Je as default};