import{d as A,p as j,Z as B,i as n,z as i,O as $,o as u,c as F,b as r,w as a,q as g,t as b,f as v,g as m,F as D,r as s}from"./app.72d9fe45.js";import{P as I}from"./PsVendorLayout.71fb0f78.js";import{P as R}from"./PsLabel.9b145d71.js";import{P as V}from"./PsButton.75e226c0.js";import{P as z}from"./PsTable2.07283736.js";import{P as N}from"./PsAlert.d611cdbe.js";import{P as T}from"./PsBreadcrumb2.c233a04a.js";import{d as E}from"./PsDangerDialog.4a7cc4cb.js";import{P as L}from"./PsToggle.8b891384.js";import{P as q}from"./PsIcon.8d64a589.js";import{P as M}from"./PsBannerIcon.ba5a991b.js";import{P as U}from"./PsIconButton.92987408.js";import{_ as Z}from"./plugin-vue_export-helper.21dcd24c.js";import"./TitleBar.7a1c6559.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./Icons.c01eddd9.js";import"./toggle.11911129.js";import"./SidebarMenu.ec741711.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsTableSearch.2a5042b8.js";import"./moment.9709ab41.js";import"./PsIcon1.56bc2bff.js";const G=A({name:"Index",components:{Link:j,Head:B,PsLabel:R,PsButton:V,PsTable2:z,PsAlert:N,PsBreadcrumb2:T,PsDangerDialog:E,PsToggle:L,PsIcon:q,PsBannerIcon:M,PsIconButton:U},layout:I,props:{storeCan:Object,status:Object,orderStatuses:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let o=n(!1);console.log(e.orderStatuses);const S=n(),O=n(),P=[{field:"action"},{label:i("core_vendor__name"),field:"name",type:"String",action:"Action"},{label:i("core_vendor__description"),field:"description",type:"String",action:"Action",sort:!1},{label:i("core_vendor__enable"),field:"status",type:"Integer",action:"Action"}],H=n(!1),y=n(!1);let p=e.search?n(e.search):n(""),f=e.sort_field?n(e.sort_field):n(""),h=e.sort_order?n(e.sort_order):n("desc");function c(t){f.value=t.field,h.value=t.sort_order,d()}function _(){selected_cat.value="all",selected_sub_cat.value="all",selected_city.value="all",selected_township.value="all",d()}function w(t){p.value=t,d(1)}function C(t){d(1,t)}function d(t=null,l=null){$.get(route("vendor_order_status.index"),{sort_field:f.value,sort_order:h.value,page:t!=null?t:e.orderStatuses.meta.current_page,row:l!=null?l:e.orderStatuses.meta.per_page,search:p.value},{preserveScroll:!0,preserveState:!0})}function k(t,l){S.value.openModal(i("core_vendor__delete"),i("core_vendor__delete_order_status_info"),i("core__be_btn_confirm"),i("core__be_btn_cancel"),()=>{$.delete(route("vendor_order_status.destroy",[l,t]),{onSuccess:()=>{o.value=!0,setTimeout(()=>{o.value=!1},3e3)},onError:()=>{o.value=!0,setTimeout(()=>{o.value=!1},3e3)}})},()=>{})}return{visible:o,columns:P,colFilterOptions:O,showFilter:H,clearFilter:y,visible:o,handleSorting:c,handleSearchingSorting:d,handleClearFilter:_,handleRow:C,handleSearching:w,ps_danger_dialog:S,confirmDeleteClicked:k}},computed:{breadcrumb(){return[{label:i("core__vendor_my_store_module"),url:route("vendor_info.index")},{label:i("core__vendor_order_status_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("vendor_order_status.create"))},handleEdit(e,o){this.$inertia.get(route("vendor_order_status.edit",[e,o]))},handlePublish(e,o){o&&e.is_ps_default&&this.$inertia.put(route("vendor_order_status.statusChange",[e.vendor_id,e.id]))},FilterOptionshandle(e){$.put(route("payment.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.payments.per_page,search:this.search.value,current_page:this.payments.current_page},{preserveScroll:!0,preserveState:!0})}}}),J={key:0,class:"flex flex-row"},K={key:0};function Q(e,o,S,O,P,H){const y=s("Head"),p=s("ps-breadcrumb-2"),f=s("ps-label"),h=s("ps-banner-icon"),c=s("ps-icon"),_=s("ps-button"),w=s("ps-danger-dialog"),C=s("ps-toggle"),d=s("ps-table2"),k=s("ps-layout");return u(),F(D,null,[r(y,{title:e.$t("core__vendor_order_status_module")},null,8,["title"]),r(k,null,{default:a(()=>[r(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(f,{class:"text-xl font-semibold"},{default:a(()=>[g(b(e.$t("core__vendor_order_status_module")),1)]),_:1}),e.visible?(u(),v(h,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:a(()=>[g(b(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):m("",!0),r(d,{row:e.row,search:e.search,object:this.orderStatuses,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search_payment"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{button:a(()=>[e.storeCan.createOrderStatus?(u(),v(_,{key:0,onClick:o[0]||(o[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[r(c,{name:"plus",class:"me-1 font-semibold"}),g(" "+b(e.$t("core_vendor__add_order_status")),1)]),_:1})):m("",!0)]),responsive_button:a(()=>[e.storeCan.createOrderStatus?(u(),v(_,{key:0,onClick:o[1]||(o[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[r(c,{name:"plus",class:"me-1 font-semibold"}),g(" "+b(e.$t("core_vendor__add_order_status")),1)]),_:1})):m("",!0)]),tableActionRow:a(t=>[t.field=="action"?(u(),F("div",J,[r(_,{disabled:!t.row.authorizations.update||t.row.is_ps_default,onClick:l=>e.handleEdit(t.row.vendor_id,t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[r(c,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(_,{disabled:!t.row.authorizations.delete||t.row.is_ps_default,onClick:l=>e.confirmDeleteClicked(t.row.id,t.row.vendor_id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:a(()=>[r(c,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(w,{ref:"ps_danger_dialog"},null,512)])):m("",!0)]),tableRow:a(t=>[t.field=="status"?(u(),F("div",K,[t.field=="status"?(u(),v(C,{key:0,disabled:!t.row.authorizations.update||t.row.is_ps_default,selectedValue:t.row.status==1,onClick:l=>e.handlePublish(t.row,t.row.authorizations.update)},null,8,["disabled","selectedValue","onClick"])):m("",!0)])):m("",!0)]),_:1},8,["row","search","object","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Oe=Z(G,[["render",Q]]);export{Oe as default};
