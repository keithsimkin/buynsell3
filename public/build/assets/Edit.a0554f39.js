import{P as R}from"./PsLayout.847d3bb7.js";import{d as q,Z as z,p as H,i as m,E as F,z as _,o as p,c as h,b as r,w as l,a as s,q as i,t as a,g as b,f as E,F as T,s as U,n as V,r as d}from"./app.72d9fe45.js";import{u as K}from"./Validators.f69d3a03.js";import{P as N}from"./PsBreadcrumb2.c233a04a.js";import{P as M}from"./PsLabelHeader4.cfe9ad61.js";import{P as W}from"./PsTooltip.a8c6bd00.js";import{P as Z}from"./PsIcon.8d64a589.js";import{P as A}from"./PsInput.afea411a.js";import{P as G}from"./PsInputWithRightIcon.e27f7629.js";import{P as J}from"./PsLabel.9b145d71.js";import{P as O}from"./PsLabelCaption.0e118b2b.js";import{P as Q}from"./PsButton.75e226c0.js";import{P as X}from"./PsLoading.1f14f5af.js";import{P as Y}from"./PsDangerDialogWithInput.6c7ffcab.js";import{P as ee}from"./PsErrorDialog.5174f1d4.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";const oe=q({name:"Edit",components:{Head:z,Link:H,PsBreadcrumb2:N,PsLabelHeader6:M,PsTooltip:W,PsIcon:Z,PsInput:A,PsInputWithRightIcon:G,PsLabel:J,PsLabelCaption:O,PsButton:Q,PsLoading:X,PsDangerDialogWithInput:Y,PsErrorDialog:ee},layout:R,props:["builder_setting","errors","status"],setup(e){const t=m(),j=m(),f=m(!1),$=m(!1),I=m(!0),g=m(!0);let P=F({project_url:e.builder_setting.project_url,token:e.builder_setting.token,builder_url:e.builder_setting.builder_url});const v=[{label:"builder_setting_module",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-167764/af19f3c3f0ff989"},{label:"project_reset_module",docu:""}],c=m(v[0].label),w=m(v[0].docu),{isEmpty:u}=K(),C=(n,o,L="")=>{e.errors[n]=o?"":u(n,o,L)};async function y(n){g.value=!1,await navigator.clipboard.writeText(n),setInterval(()=>{g.value=!0},1e3)}function x(n){c.value=n.label,w.value=n.docu}function k(){this.$inertia.get(route("builder_setting.index"))}function D(n){this.$inertia.post(route("builder_setting.update",n),P,{forceFormData:!0,onBefore:()=>{f.value=!0},onSuccess:()=>{f.value=!1,$.value=!0,setTimeout(()=>{$.value=!1,I.value=!1,setTimeout(()=>{I.value=!0},200)},1e3)},onError:()=>{f.value=!1}})}function B(n){t.value.openModal(_("core__delete"),_("project_reset_info"),_("core__be_btn_confirm"),_("btn_cancel"),n,()=>{this.$inertia.post(route("handle_project_reset.update"))},()=>{})}function S(n){j.value.openModal(_("ps_error_dialog__error"),n,_("core__be_btn_ok"),()=>{})}return{title:c,docu:w,loading:f,success:$,copied:g,form:P,settingColumn:v,copy:y,changeSection:x,validateEmptyInput:C,handleCancel:k,handleSubmit:D,handleProjectReset:B,ps_danger_dialog_with_input:t,showErrorDialog:S,ps_error_dialog:j}},beforeUpdate(){var e;((e=this.status)==null?void 0:e.flag)=="error"&&this.showErrorDialog(this.status.msg)},computed:{breadcrumb(){return[{label:_("core__be_dashboard_label"),url:route("admin.index")},{label:_("builder_setting_module"),color:"text-primary-500"}]}}}),re={class:"w-full h-auto"},se={class:"bg-background dark:bg-secondaryDark-black rounded-lg mb-20"},le={class:"bg-primary-50 flex items-center dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},ne={class:"h-8 flex items-center"},ae=i(" For more details: "),ie=["href"],de={class:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"},ue={key:0},pe={class:"px-4 py-3"},me={class:"px-4 py-3"},_e={class:"px-4 py-3"},ce={href:"https://doc.clickup.com/24312566/p/h/q5yqp-142885/bd2ccd3f258d1c5",target:"_blank",class:"underline underline-offset-2 text-primary-500 mt-2 inline-block cursor-pointer"},be={class:"px-4 py-3"},fe={key:1},ge={class:"px-4 py-3"},ve={class:"border border-1 rounded p-4"},ye={class:"h-auto"},ke={class:"flex flex-row justify-start mt-6"},he={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"},$e={class:"px-4"},Pe=["onClick"];function we(e,t,j,f,$,I){const g=d("Head"),P=d("ps-breadcrumb-2"),v=d("ps-label-header-6"),c=d("ps-icon"),w=d("ps-tooltip"),u=d("ps-label"),C=d("ps-input"),y=d("ps-label-caption"),x=d("ps-input-with-right-icon"),k=d("ps-button"),D=d("ps-loading"),B=d("ps-danger-dialog-with-input"),S=d("ps-error-dialog"),n=d("ps-layout");return p(),h(T,null,[r(g,{title:e.$t("builder_setting_module")},null,8,["title"]),r(n,null,{default:l(()=>[s("div",null,[r(P,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s("div",re,[s("div",se,[s("div",le,[r(v,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[i(a(e.$t(e.title)),1)]),_:1}),r(w,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:l(()=>[s("div",ne,[r(c,{name:"info",w:"20",h:"20",class:"ms-2.5 transition-all duration-300 text-primary-500"})])]),tooltips:l(()=>[ae,s("a",{target:"_blank",href:e.docu,class:"underline"},"Refer to this doc",8,ie)]),_:1})]),s("div",null,[s("div",de,[s("div",null,[e.title==e.settingColumn[0].label?(p(),h("div",ue,[s("div",pe,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[i(a(e.$t("core_be__domain")),1)]),_:1}),r(C,{type:"text",disabled:"",value:e.form.project_url,"onUpdate:value":t[0]||(t[0]=o=>e.form.project_url=o),placeholder:e.$t("core_be__domain"),onKeyup:t[1]||(t[1]=o=>e.validateEmptyInput("project_url",e.form.project_url)),onBlur:t[2]||(t[2]=o=>e.validateEmptyInput("project_url",e.form.project_url))},null,8,["value","placeholder"]),r(y,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[i(a(e.errors.project_url),1)]),_:1})]),s("div",me,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[i(a(e.$t("core_be__api_token")),1)]),_:1}),r(x,{type:"text",value:e.form.token,"onUpdate:value":t[4]||(t[4]=o=>e.form.token=o),placeholder:e.$t("core_be__api_token"),theme:"pe-12 dark:bg-secondaryDark-black text-secondary-700 dark:text-secondary-700 dark:border-secondary-800",rounded:"rounded",onKeyup:t[5]||(t[5]=o=>e.validateEmptyInput("token",e.form.token)),onBlur:t[6]||(t[6]=o=>e.validateEmptyInput("token",e.form.token))},{icon:l(()=>[r(c,{class:"dark:text-secondary-700",name:e.copied?"clipboard-icon":"check",w:"24",h:"24",onClick:t[3]||(t[3]=o=>e.copy(e.form.token))},null,8,["name"])]),_:1},8,["value","placeholder"]),r(y,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[i(a(e.errors.token),1)]),_:1})]),s("div",_e,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[i(a(e.$t("core_be__guide_link")),1)]),_:1}),s("a",ce,a(e.$t("core_be__create_and_update_api_token")),1)]),s("div",be,[r(u,{class:"text-base flex flex-row"},{default:l(()=>[i(a(e.$t("core_be__builder_url")),1)]),_:1}),r(C,{type:"text",value:e.form.builder_url,"onUpdate:value":t[7]||(t[7]=o=>e.form.builder_url=o),placeholder:e.$t("core_be__builder_url"),onKeyup:t[8]||(t[8]=o=>e.validateEmptyInput("builder_url",e.form.builder_url)),onBlur:t[9]||(t[9]=o=>e.validateEmptyInput("builder_url",e.form.builder_url))},null,8,["value","placeholder"]),r(y,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[i(a(e.errors.builder_url),1)]),_:1})])])):b("",!0),e.title==e.settingColumn[1].label?(p(),h("div",fe,[s("div",ge,[s("div",ve,[s("div",ye,[s("div",null,[r(u,{class:"text-gray-800 font-medium"},{default:l(()=>[i(a(e.$t("project_reset_desc")),1)]),_:1})]),s("div",ke,[r(k,{type:"button",onClick:t[10]||(t[10]=o=>e.handleProjectReset("RESET")),class:"bg-red-500 hover:bg-red-500"},{default:l(()=>[i(a(e.$t("reset_btn")),1)]),_:1})])])])])])):b("",!0),s("div",he,[r(k,{onClick:t[11]||(t[11]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[i(a(e.$t("core__be_btn_cancel")),1)]),_:1}),r(k,{onClick:t[12]||(t[12]=o=>e.handleSubmit(e.$page.props.builder_setting.id)),class:"transition-all duration-300 min-w-3xs",padding:"px-8 py-0",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(p(),E(D,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(p(),E(c,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(p(),E(u,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:l(()=>[i(a(e.$t("core__be_btn_saved")),1)]),_:1})):b("",!0),!e.loading&&!e.success?(p(),E(u,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:l(()=>[i(a(e.$t("core__be_btn_save")),1)]),_:1})):b("",!0)]),_:1})])]),s("div",$e,[(p(!0),h(T,null,U(e.settingColumn,o=>(p(),h("div",{key:o.id},[s("div",{onClick:L=>e.changeSection(o),class:V([e.title==o.label?"border-l border-s-primary-500":"border-l border-s-secondary-300","px-2 py-3 cursor-pointer"])},[r(u,{textColor:e.title==o.label?"text-primary-500 dark:text-primary-500":"text-secondary-800 dark:text-white"},{default:l(()=>[i(a(e.$t(o.label)),1)]),_:2},1032,["textColor"])],10,Pe)]))),128))])])])])])]),r(B,{ref:"ps_danger_dialog_with_input"},null,512),r(S,{ref:"ps_error_dialog"},null,512)]),_:1})],64)}var st=te(oe,[["render",we]]);export{st as default};