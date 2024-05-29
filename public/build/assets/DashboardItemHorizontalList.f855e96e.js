import P from"./PsLabel.dd7b9156.js";import g from"./ItemHorizontalSwiper.24204fb9.js";import v from"./PsLabelHeader5.225a638a.js";import y from"./PsButton.81d0ce1f.js";import w from"./PsRouteLink.ab373f40.js";import k from"./PsIcon.c404b5b9.js";import{u as S}from"./ProductStore.017d2a02.js";import{P as x}from"./PsValueStore.46e374fe.js";import{P as _}from"./ProductParameterHolder.b9a2d040.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{i as I,j as C,o as N,c as V,a as z,b as o,w as d,q as u,t as b,g as B,r as a}from"./app.72d9fe45.js";import"./vue-splide.esm.01499f7d.js";/* empty css                        */import"./ItemHorizontalItem.1d41cc35.js";import"./PsLabelTitle4.90166f3a.js";import"./PsCard.c6bb6e2a.js";import"./ps_constants.ea9d0b33.js";import"./PsAdSense.e3562fb6.js";import"./AppInfoStore.3eac0301.js";import"./PsApiService.74841eb2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLoadingDialog.52bc8b7d.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelTitle.8e337e9e.js";import"./format.min.1a01be2e.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./PsValueHolder.64e68efd.js";import"./FavouriteItemStore.e64977ef.js";import"./PsSepetetedStore.9a31ac47.js";import"./FollowItemParameterHolder.54ad8b57.js";import"./PsUtils.eb7a8002.js";import"./moment.9709ab41.js";/* empty css                                                                       */import"./ItemHorizontalSkeletorItem.4a35f291.js";import"./vue-skeletor.esm.437103df.js";/* empty css                     */import"./Phone.45f97258.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const D={name:"DashboardItemHorizontalList",components:{ItemHorizontalSwiper:g,PsLabel:P,PsLabelHeader5:v,PsButton:y,PsRouteLink:w,PsIcon:k},props:{item_list_name:{type:String,default:"dashboard_recent"},limit:{type:Number,default:12}},setup(r){const l=x().getLoginUserId(),t=S(r.item_list_name),p=I([]);let i="";switch(r.item_list_name){case"dashboard_recent":t.paramHolder=new _().getLatestParameterHolder(),i="home__fe_recently_added";break;case"dashboard_popular":t.paramHolder=new _().getPopularParameterHolder(),i="dashboard__popular";break;case"dashboard_discount":t.paramHolder=new _().getDiscountParameterHolder(),i="dashboard__discount";break}t.limit=r.limit;let c=t.paramHolder.getUrlParamsAndQuery();return C(async()=>{var s;await t.resetProductList(l,t.paramHolder),p.value=(s=t.itemList)==null?void 0:s.data.filter(e=>{var m,n;return((m=e==null?void 0:e.vendor)==null?void 0:m.name)==null||((n=e==null?void 0:e.vendor)==null?void 0:n.name)==""})}),{title:i,itemListProvider:t,params:c,filteredItemList:p}}},q={key:0},U={class:"flex justify-between items-center mt-10"};function j(r,h,l,t,p,i){var f;const c=a("ps-label-header-5"),s=a("ps-label"),e=a("ps-icon"),m=a("ps-button"),n=a("ps-route-link"),L=a("item-horizontal-swiper");return t.itemListProvider.hasData()!=null||t.itemListProvider.loading.value?(N(),V("div",q,[z("div",U,[o(c,{class:"font-semibold"},{default:d(()=>[u(b(r.$t(t.title)),1)]),_:1}),o(n,{to:{name:"fe_item_list",query:t.params.query}},{default:d(()=>[o(m,{class:"flex flex-row",padding:"p-2 sm:px-4 sm:py-2",shadow:"shadow-sm",rounded:"rounded",hover:"",focus:"",border:"border border-feSecondary-200 dark:border-feSecondary-800",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200"},{default:d(()=>[o(s,{class:"hidden sm:inline"},{default:d(()=>[u(b(r.$t("list_fe__view_all_label")),1)]),_:1}),o(e,{class:"sm:ms-2 block rtl:hidden",textColor:"dark:text-feSecondary-200",name:"rightChervon",h:"24",w:"24"}),o(e,{class:"sm:ms-2 hidden rtl:block",textColor:"dark:text-feSecondary-200",name:"leftChervon",h:"24",w:"24"})]),_:1})]),_:1},8,["to"])]),o(L,{class:"mt-6 mb-26 sm:mb-0",itemList:(f=t.itemListProvider.itemList)==null?void 0:f.data,filteredList:t.filteredItemList,isLoading:t.itemListProvider.loading.value,storeName:l.item_list_name},null,8,["itemList","filteredList","isLoading","storeName"])])):B("",!0)}var Ut=H(D,[["render",j]]);export{Ut as default};