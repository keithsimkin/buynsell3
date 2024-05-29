import{aJ as x,bC as D,u as R,i as T,j as B,k as E,o as d,c as n,F as w,s as U,b as y,w as c,q as k,t as I,a as L,n as z,g as S,f as N,r as K}from"./app.72d9fe45.js";import M from"./PsLabel.dd7b9156.js";import O from"./PsDropdownSelect.405216fe.js";import A from"./PsLoadingDialog.52bc8b7d.js";import{P as j}from"./PsValueStore.46e374fe.js";import{u as q}from"./CustomFieldStore.48623ce1.js";import{u as V}from"./CustomizeUiStore.5725893c.js";import{u as J}from"./ProductStore.017d2a02.js";import{P as $}from"./PsUtils.eb7a8002.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.c404b5b9.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelTitle.8e337e9e.js";import"./PsApiService.74841eb2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsStore.813293a8.js";import"./PsSepetetedStore.9a31ac47.js";import"./ProductParameterHolder.b9a2d040.js";import"./ps_constants.ea9d0b33.js";import"./Phone.45f97258.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const Q=x(()=>D(()=>import("./PsDropdown.05bf646c.js"),["assets/PsDropdown.05bf646c.js","assets/app.72d9fe45.js","assets/app.1665158f.css","assets/PsValueStore.46e374fe.js","assets/plugin-vue_export-helper.21dcd24c.js"])),W={name:"ItemFilterCustomFieldSection",components:{PsLabel:M,PsDropdown:Q,PsDropdownSelect:O,PsLoadingDialog:A},setup(){const m=j(),C=q("list"),i=J("list"),e=R({data:[{id:"default",provider:V("default")}]}),h=T();function b(s){e.data.filter(a=>a.id===s)[0].provider.loadCustomFieldList("1",s)}async function p(s,a){i.form.product_relation[s]=a,i.paramHolder.productRelation=[],Object.keys(i.form.product_relation).forEach(v=>{i.paramHolder.productRelation.push({core_keys_id:v,value:i.form.product_relation[v]})}),h.value.openModal(),$.addParamToCurrentUrl(i.getURLforListByParam(i.paramHolder)),await i.resetProductList(m.getLoginUserId(),i.paramHolder),h.value.closeModal(),i.showPopUpFilter=!1}return B(async()=>{var a;await C.loadCustomFieldList(m.getLoginUserId());for(const t of(a=C.customField.data)==null?void 0:a.customList)t.isVisible=="1"&&t.isDelete=="0"&&t.uiType.coreKeysId=="uit00001"&&e.data.push({id:t.coreKeysId,provider:V(t.coreKeysId)});const s=i.paramHolder.productRelation;s!=null&&s.length>0&&s.forEach(t=>{i.form.product_relation[t.core_keys_id]=t.value,b(t.core_keys_id)})}),E(()=>{var s,a;C.$reset,i.form.product_relation={};for(const t of(s=C.customField.data)==null?void 0:s.customList)t.isVisible=="1"&&t.isDelete=="0"&&t.uiType.coreKeysId=="uit00001"&&((a=e.data.filter(v=>v.id===t.coreKeysId)[0])==null||a.provider.$reset)}),{customFieldStore:C,customizeUiStoreList:e,itemProvider:i,loadCustomField:b,selectCustomDropdown:p,ps_loading_dialog:h}}},X={key:0,class:"mt-6"},Y={class:"rounded-md shadow-xs w-56"},Z={class:"pt-2 z-30"},F={key:0},H={key:1},oo=["onClick"],eo=["onClick"],to={class:"mb-2 w-56"},ro={key:0,class:"mt-4 ms-4 flex"};function io(m,C,i,e,h,b){var v;const p=K("ps-label"),s=K("ps-dropdown-select"),a=K("ps-dropdown"),t=K("ps-loading-dialog");return d(),n(w,null,[(d(!0),n(w,null,U((v=e.customFieldStore.customField.data)==null?void 0:v.customList,o=>(d(),n("div",{key:o.id},[(o.coreKeysId=="ps-itm00007"||o.coreKeysId=="ps-itm00002")&&o.uiType.coreKeysId==="uit00001"&&o.isVisible==="1"&&o.isDelete==="0"?(d(),n("div",X,[y(p,{class:"mb-1 text-base"},{default:c(()=>[k(I(m.$t(o.name)),1)]),_:2},1024),y(a,{align:"left",class:"lg:mt-2 mt-1 w-full",onOnClick:l=>e.loadCustomField(o.coreKeysId)},{select:c(()=>{var l,_,u,f;return[y(s,{placeholderLang:"item_list__all",border:"border dark:border-feSecondary-200",showCenter:!0,selectedValue:(f=(u=(_=(l=e.customizeUiStoreList.data.filter(r=>r.id===o.coreKeysId)[0])==null?void 0:l.provider)==null?void 0:_.customizeUiList.data)==null?void 0:u.filter(r=>r.id===e.itemProvider.form.product_relation[o.coreKeysId])[0])==null?void 0:f.name},null,8,["selectedValue"])]}),list:c(()=>{var l,_,u,f;return[L("div",Y,[L("div",Z,[((_=(l=e.customizeUiStoreList.data.filter(r=>r.id===o.coreKeysId)[0])==null?void 0:l.provider)==null?void 0:_.customizeUiList.data)==null?(d(),n("div",F,[y(p,{class:"p-2 flex",onClick:r=>e.loadCustomField(o.coreKeysId)},{default:c(()=>[k(I(m.$t("item_entry__loading")),1)]),_:2},1032,["onClick"])])):(d(),n("div",H,[L("div",{class:"w-72 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center",onClick:r=>e.selectCustomDropdown(o.coreKeysId,"")},[y(p,{class:z(["ms-2",e.itemProvider.form.product_relation[o.coreKeysId]==""?" font-medium":"font-light"])},{default:c(()=>[k(I(m.$t("item_list__all")),1)]),_:2},1032,["class"])],8,oo),(d(!0),n(w,null,U((f=(u=e.customizeUiStoreList.data.filter(r=>r.id===o.coreKeysId)[0])==null?void 0:u.provider)==null?void 0:f.customizeUiList.data,r=>(d(),n("div",{key:r.coreKeysId,class:"w-56 flex py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-fePrimary-900 cursor-pointer items-center",onClick:P=>e.selectCustomDropdown(o.coreKeysId,r.id)},[y(p,{class:z(["ms-2",e.itemProvider.form.product_relation[o.coreKeysId]==r.id?"font-bold":""])},{default:c(()=>[k(I(r.name),1)]),_:2},1032,["class"])],8,eo))),128))]))])])]}),loadmore:c(()=>{var l,_,u,f,r,P;return[L("div",to,[((_=(l=e.customizeUiStoreList.data.filter(g=>g.id===o.coreKeysId)[0])==null?void 0:l.provider)==null?void 0:_.customizeUiList.data)!=null&&((f=(u=e.customizeUiStoreList.data.filter(g=>g.id===o.coreKeysId)[0])==null?void 0:u.provider)==null?void 0:f.loading.value)==!0?(d(),n("div",ro,[y(p,null,{default:c(()=>[k(I(m.$t("item_entry__loading")),1)]),_:1})])):S("",!0),(P=(r=e.customizeUiStoreList.data.filter(g=>g.id===o.coreKeysId)[0])==null?void 0:r.provider)!=null&&P.isNoMoreRecord?S("",!0):(d(),N(p,{key:1,class:"flex mt-4 ms-4 mb-2 underline font-bold cursor-pointer",onClick:g=>e.loadCustomField(o.coreKeysId)},{default:c(()=>[k(I(m.$t("item_entry__load_more")),1)]),_:2},1032,["onClick"]))])]}),_:2},1032,["onOnClick"])])):S("",!0)]))),128)),y(t,{ref:"ps_loading_dialog",class:"z-40"},null,512)],64)}var Ao=G(W,[["render",io]]);export{Ao as default};