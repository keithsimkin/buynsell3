import{P as y}from"./PsLayout.847d3bb7.js";import{d as b,Z as w,p as v,o as n,c as p,b as s,w as a,a as t,F as h,s as k,t as l,n as P,f as u,q as r,r as i}from"./app.72d9fe45.js";import C from"./FlashMessage.7131b2e8.js";import{h as $}from"./moment.9709ab41.js";import{P as L}from"./PsInput.afea411a.js";import{P as N}from"./PsLabel.9b145d71.js";import{P as B}from"./PsButton.75e226c0.js";import{P as D}from"./PsTextarea.b6da5576.js";import{P as F}from"./PsLabelHeader4.cfe9ad61.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.8d64a589.js";import"./Icons.c01eddd9.js";import"./PsDropdown.dd6513b3.js";import"./PsDropdownSelect.2cfdee10.js";import"./PsDangerDialog.4a7cc4cb.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsLabelCaption.0e118b2b.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./PsLoadingCircleDialog.70b57269.js";const H=b({name:"Index",components:{Head:w,Link:v,FlashMessage:C,PsInput:L,PsLabel:N,PsButton:B,PsTextarea:D,PsLabelHeader4:F},layout:y,props:["shippings","status"],data(){return{moment:$}},methods:{handleDelete(e){this.$inertia.delete(route("shipping.destroy",e))},handleEdit(e){this.$inertia.get(route("shipping.edit",e))},handlePublish(e){this.$inertia.put(route("shipping.statusChange",e))}}}),I={class:"py-12"},M={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},S={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},V={class:"p-6"},T={class:"flex justify-between mb-6"},j=t("h4",null,"Shipping List",-1),q=r("Create New Shipping "),z=t("hr",null,null,-1),Y={class:"flex"},Z={class:"overflow-x-auto sm:-mx-6 lg:-mx-8 flex-1"},A={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},G={class:"overflow-hidden"},J={class:"w-full"},K=t("thead",{class:"bg-white border-b"},[t("tr",null,[t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," # "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Name "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Price "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Days "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Publish "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Control ")])],-1),O={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},Q={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},R={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},U={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},W={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},X=r("Yes"),tt=r("No"),et={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},ot=r(" Delete "),st=r(" Edit ");function at(e,it,nt,rt,lt,dt){const _=i("Head"),x=i("Link"),g=i("FlashMessage"),c=i("ps-label"),d=i("ps-button"),f=i("ps-layout");return n(),p(h,null,[s(_,{title:e.$t("shipping_module")},null,8,["title"]),s(f,null,{default:a(()=>[t("div",I,[t("div",M,[t("div",S,[t("div",V,[t("div",T,[j,s(x,{href:e.route("shipping.create"),type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},{default:a(()=>[q]),_:1},8,["href"])]),z,s(g,{status:e.status},null,8,["status"]),t("div",Y,[t("div",Z,[t("div",A,[t("div",G,[t("table",J,[K,t("tbody",null,[(n(!0),p(h,null,k(e.shippings,o=>(n(),p("tr",{key:o.id,class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},[t("td",O,l(o.id),1),t("td",Q,l(o.name),1),t("td",R,l(o.price),1),t("td",U,l(o.days),1),t("td",W,[s(d,{onClick:m=>e.handlePublish(o.id),class:P(["hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded",o.status==1?"bg-green-600":"bg-red-600"])},{default:a(()=>[o.status==1?(n(),u(c,{key:0},{default:a(()=>[X]),_:1})):(n(),u(c,{key:1},{default:a(()=>[tt]),_:1}))]),_:2},1032,["onClick","class"])]),t("td",et,[s(d,{onClick:m=>e.handleDelete(o.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-red-600"},{default:a(()=>[ot]),_:2},1032,["onClick"]),s(d,{onClick:m=>e.handleEdit(o.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-yellow-500"},{default:a(()=>[st]),_:2},1032,["onClick"])])]))),128))])])])])])])])])])])]),_:1})],64)}var Yt=E(H,[["render",at]]);export{Yt as default};
