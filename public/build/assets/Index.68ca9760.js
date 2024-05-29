import{d as f,p as h,Z as P,z as r,o as s,c as m,b as e,w as a,f as w,q as l,t as y,g as n,F as v,r as t}from"./app.72d9fe45.js";import{P as k}from"./PsLayout.847d3bb7.js";import{P as C}from"./PsLabel.9b145d71.js";import{P as B}from"./PsButton.75e226c0.js";import{P as $}from"./PsDataTable.9a60ba74.js";import{P as D}from"./PsAlert.d611cdbe.js";import{P as F}from"./PsBreadcrumb2.c233a04a.js";import{d as I}from"./PsDangerDialog.4a7cc4cb.js";import{P as N}from"./PsToggle.8b891384.js";import{P as S}from"./PsIcon.8d64a589.js";import{P as T}from"./PsCsvModal.c491ce7e.js";import{P as A}from"./PsBannerIcon.ba5a991b.js";import{D as x}from"./PsTableSearch.2a5042b8.js";import{P as H}from"./PsIconButton.92987408.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsInput.afea411a.js";import"./PsLabelCaption.0e118b2b.js";import"./PsLoadingCircleDialog.70b57269.js";import"./moment.9709ab41.js";import"./ps_constants.ea9d0b33.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./toggle.11911129.js";import"./PsLabelHeader4.cfe9ad61.js";import"./PsLink1.1f7b38a0.js";import"./PsDraggable.2c92160e.js";const V=f({name:"Index",components:{Link:h,Head:P,PsLabel:C,PsButton:B,PsDataTable:$,PsAlert:D,PsBreadcrumb2:F,PsDangerDialog:I,PsToggle:N,PsIcon:S,PsCsvModal:T,PsBannerIcon:A,Dropdown:x,PsIconButton:H},layout:k,props:["images","status"],setup(){const o=["img_path"];return{columns:[{label:"Image Name",field:"img_path",type:"String",action:"Action"},{label:r("thumbnail_generator"),field:"action",type:"Action",action:"Action"}],globalSearchFields:o}},computed:{breadcrumb(){return[{label:r("core__be_dashboard_label"),url:route("admin.index")},{label:r("image_lists_module"),color:"text-primary-500"}]}},methods:{handleThumbnail(o){this.$inertia.put(route("image_lists.update",o))}}}),q={key:0,class:"flex flex-row mb-2"},z=l(" Thumbnail(1x,2x,3x) Generator ");function E(o,p,G,M,R,Z){const c=t("Head"),d=t("ps-breadcrumb-2"),u=t("ps-banner-icon"),b=t("ps-button"),g=t("ps-data-table"),_=t("ps-layout");return s(),m(v,null,[e(c,{title:o.$t("image_lists_module")},null,8,["title"]),e(_,null,{default:a(()=>[e(d,{items:o.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o.visible?(s(),w(u,{key:0,visible:o.visible,theme:o.status.flag=="danger"?"bg-red-500":o.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:o.status.flag=="danger"?"close-circle":o.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-4",iconColor:"white"},{default:a(()=>[l(y(o.status.msg),1)]),_:1},8,["visible","theme","iconName"])):n("",!0),e(g,{rows:this.images,columns:o.columns,globalSearchFields:o.globalSearchFields},{tableRow:a(i=>[i.field=="action"?(s(),m("div",q,[e(b,{onClick:j=>o.handleThumbnail(i.row.id)},{default:a(()=>[z]),_:2},1032,["onClick"])])):n("",!0)]),_:1},8,["rows","columns","globalSearchFields"])]),_:1})],64)}var To=L(V,[["render",E]]);export{To as default};