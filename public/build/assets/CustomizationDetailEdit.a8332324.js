import{d as y,p as P,E as C,o as E,f as x,w as s,a as i,b as o,q as r,t as l,h as $,r as n}from"./app.72d9fe45.js";import{P as w}from"./PsLayout.847d3bb7.js";import{u as g}from"./Validators.f69d3a03.js";import{P as k}from"./PsInput.afea411a.js";import{P as z}from"./PsLabel.9b145d71.js";import{P as L}from"./PsButton.75e226c0.js";import{P as D}from"./PsTextarea.b6da5576.js";import{P as B}from"./PsLabelHeader4.cfe9ad61.js";import{P as I}from"./PsLabelCaption.0e118b2b.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8d64a589.js";import"./Icons.c01eddd9.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./PsLoadingCircleDialog.70b57269.js";const N=y({name:"CustomizationDetailCreate",components:{Link:P,PsInput:k,PsLabel:z,PsButton:L,PsTextarea:D,PsLabelHeader4:B,PsLabelCaption:I},layout:w,props:["errors","custom_field_header","custom_field_detail"],data(){return{form:C({attribute:this.custom_field_detail.attribute,custom_field_header_id:this.custom_field_header.id,_method:"put"})}},setup(t){const{isEmpty:e}=g();return{validateEmptyInput:(p,d,u="")=>{t.errors[p]=d?"":e(p,d,u)}}},methods:{handleSubmit(t){this.$inertia.put(route("shop.customizationDetail.update",[this.custom_field_header,t]),this.form)}}}),T={class:"py-6 px-4"},U={class:"border rounded px-4 py-3 shadow"},V=i("h4",{class:"text-xl font-semibold"},"Edit Customization Detail",-1),H=i("hr",{class:"mt-3 pb-3"},null,-1),q={class:"mb-4"},K=r("*"),M=r("*"),j=r(" Customize Detail Name "),A={class:"mt-6"},F=r("Update");function G(t,e,f,p,d,u){const m=n("ps-label"),_=n("ps-input"),c=n("ps-label-caption"),b=n("ps-button"),h=n("Link"),v=n("ps-layout");return E(),x(v,null,{default:s(()=>[i("div",T,[i("div",U,[V,H,i("p",q,[o(m,{class:"text-red-500 font-semibold text-xl"},{default:s(()=>[K]),_:1}),r(" Selected Customize Header Name : "+l(t.custom_field_header.name),1)]),i("form",{onSubmit:e[4]||(e[4]=$(a=>t.handleSubmit(this.custom_field_detail.id),["prevent"]))},[o(m,{class:"block"},{default:s(()=>[o(m,{class:"text-red-500 font-semibold text-xl"},{default:s(()=>[M]),_:1}),j]),_:1}),o(_,{type:"hidden",class:"w-60 rounded",value:t.form.custom_field_header_id,"onUpdate:value":e[0]||(e[0]=a=>t.form.custom_field_header_id=a),placeholder:"Please Enter title"},null,8,["value"]),o(_,{type:"text",class:"w-60 rounded",value:t.form.attribute,"onUpdate:value":e[1]||(e[1]=a=>t.form.attribute=a),placeholder:"Please Enter title",onKeyup:e[2]||(e[2]=a=>t.validateEmptyInput("attribute",t.form.attribute)),onBlur:e[3]||(e[3]=a=>t.validateEmptyInput("attribute",t.form.attribute))},null,8,["value"]),o(c,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[r(l(t.errors.attribute),1)]),_:1}),i("div",A,[o(b,{class:"me-2 bg-indigo-500 text-white px-4 py-2 rounded"},{default:s(()=>[F]),_:1}),o(h,{href:t.route("shop.customization"),class:"bg-white border border-indigo-400 px-4 py-2 rounded hover:bg-indigo-600"},{default:s(()=>[r(l(t.$t("core__be_btn_cancel")),1)]),_:1},8,["href"])])],32)])])]),_:1})}var xt=S(N,[["render",G]]);export{xt as default};
