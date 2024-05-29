import{d as j,p as z,Z as N,i as a,z as n,o as c,c as m,b as r,w as l,q as p,t as f,f as D,g,m as O,a as R,F,s as T,H as V,O as I,r as i,C as E}from"./app.72d9fe45.js";import{P as L}from"./PsVendorLayout.71fb0f78.js";import{P as U}from"./PsLabel.9b145d71.js";import{P as q}from"./PsButton.75e226c0.js";import{P as x}from"./PsTable2.07283736.js";import{P as M}from"./PsAlert.d611cdbe.js";import{P as Z}from"./PsBreadcrumb2.c233a04a.js";import{d as G}from"./PsDangerDialog.4a7cc4cb.js";import{P as J}from"./PsToggle.8b891384.js";import{P as K}from"./PsIcon.8d64a589.js";import{P as Q}from"./PsBannerIcon.ba5a991b.js";import{P as W}from"./PsIconButton.92987408.js";import{P as X}from"./PsBadge.14872902.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./TitleBar.7a1c6559.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./Icons.c01eddd9.js";import"./toggle.11911129.js";import"./SidebarMenu.ec741711.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsTableSearch.2a5042b8.js";import"./moment.9709ab41.js";import"./PsIcon1.56bc2bff.js";const ee=j({name:"Index",components:{Link:z,Head:N,PsLabel:U,PsButton:q,PsTable2:x,PsAlert:M,PsBreadcrumb2:Z,PsDangerDialog:G,PsToggle:J,PsIcon:K,PsBannerIcon:Q,PsIconButton:W,PsBadge:X},layout:L,props:{status:Object,orders:Object,vendorPaymentStatuses:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let d=a(!1);console.log(e.orders);const h=a(),H=a(),B=[{field:"action"},{label:n("core_vendor__order_id"),field:"order_code",type:"String",action:"Action"},{label:n("core_vendor__customer_info"),field:"owner_id@@name",type:"String",action:"Action"},{label:n("core_vendor__total_amount"),field:"total_price",type:"String",action:"Action"},{label:n("core_vendor__payment_status"),field:"vendor_payment_status_id@@name",type:"String",action:"Action"},{label:n("core_vendor__order_status"),field:"order_status_id@@name",type:"String",action:"Action"},{label:n("core_vendor__order_date"),field:"order_date",type:"Timestamp",action:"Action"}],A=a(!1),C=a(!1);let b=e.search?a(e.search):a(""),_=e.sort_field?a(e.sort_field):a(""),v=e.sort_order?a(e.sort_order):a("desc");function y(t){_.value=t.field,v.value=t.sort_order,u()}function w(){selected_cat.value="all",selected_sub_cat.value="all",selected_city.value="all",selected_township.value="all",u()}function k(t){b.value=t,u(1)}function P(t){u(1,t)}function u(t=null,o=null){I.get(route("vendor_order_list.index"),{sort_field:_.value,sort_order:v.value,page:t!=null?t:e.orders.meta.current_page,row:o!=null?o:e.orders.meta.per_page,search:b.value},{preserveScroll:!0,preserveState:!0})}function $(t){h.value.openModal(n("core_vendor__delete"),n("core_vendor__delete_order_info"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{I.delete(route("vendor_order_list.destroy",t),{onSuccess:()=>{d.value=!0,setTimeout(()=>{d.value=!1},3e3)},onError:()=>{d.value=!0,setTimeout(()=>{d.value=!1},3e3)}})},()=>{})}return{visible:d,columns:B,colFilterOptions:H,showFilter:A,clearFilter:C,visible:d,handleSorting:y,handleSearchingSorting:u,handleClearFilter:w,handleRow:P,handleSearching:k,ps_danger_dialog:h,confirmDeleteClicked:$}},computed:{breadcrumb(){return[{label:n("core__vendor_my_store_module"),url:route("vendor_info.index")},{label:n("core__vendor_order_list_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("vendor_order_status.create"))},handleEdit(e){this.$inertia.get(route("vendor_order_list.edit",e))},handlePublish(e,d,h){h&&this.$inertia.put(route("vendor_order_status.statusChange",[e,d]))}}}),oe={key:0,class:"flex flex-row"},te={key:0,class:"flex items-center gap-2"},re={class:"w-6 h-6 rounded-full object-cover",width:"24px",height:"24px"},ne={key:1,class:""},ae={key:2,class:""},le={key:3,class:""};function se(e,d,h,H,B,A){const C=i("Head"),b=i("ps-breadcrumb-2"),_=i("ps-label"),v=i("ps-banner-icon"),y=i("ps-icon"),w=i("ps-button"),k=i("ps-danger-dialog"),P=i("ps-badge"),u=i("ps-table2"),$=i("ps-layout"),t=E("lazy");return c(),m(F,null,[r(C,{title:e.$t("core__vendor_order_list_module")},null,8,["title"]),r($,null,{default:l(()=>[r(b,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(_,{class:"text-xl font-semibold"},{default:l(()=>[p(f(e.$t("core__vendor_order_list_module")),1)]),_:1}),e.visible?(c(),D(v,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:l(()=>[p(f(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):g("",!0),r(u,{row:e.row,search:e.search,object:this.orders,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search_payment"),onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{tableActionRow:l(o=>[o.field=="action"?(c(),m("div",oe,[r(w,{disabled:!o.row.authorizations.update,onClick:s=>e.handleEdit(o.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:l(()=>[r(y,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(w,{disabled:!o.row.authorizations.delete,onClick:s=>e.confirmDeleteClicked(o.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:l(()=>[r(y,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(k,{ref:"ps_danger_dialog"},null,512)])):g("",!0)]),tableRow:l(o=>[o.field=="owner_id@@name"?(c(),m("div",te,[O(R("img",re,null,512),[[t,{src:e.$page.props.thumb2xUrl+"/"+o.row.owner.user_cover_photo,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]),r(_,null,{default:l(()=>[p(f(o.row.owner.name),1)]),_:2},1024)])):g("",!0),o.field=="total_price"?(c(),m("div",ne,[r(_,null,{default:l(()=>{var s,S;return[p(f((S=(s=o.row.vendor_transaction)==null?void 0:s.currency)==null?void 0:S.currency_symbol)+f(o.row.total_price),1)]}),_:2},1024)])):g("",!0),o.field=="vendor_payment_status_id@@name"?(c(),m("div",ae,[(c(!0),m(F,null,T(e.vendorPaymentStatuses.filter(s=>s.id==o.row.vendor_payment_status_id),(s,S)=>(c(),D(P,{key:S,bgColorCode:s.colour+"20",textColorCode:s.colour,theme:"",class:"m-2"},{default:l(()=>[p(f(s.name),1)]),_:2},1032,["bgColorCode","textColorCode"]))),128))])):g("",!0),o.field=="order_status_id@@name"?(c(),m("div",le,[r(_,{style:V("color:"+o.row.order_status.colour)},{default:l(()=>[p(f(o.row.order_status.name),1)]),_:2},1032,["style"])])):g("",!0)]),_:1},8,["row","search","object","columns","sort_field","sort_order","globalSearchPlaceholder","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Ee=Y(ee,[["render",se]]);export{Ee as default};
