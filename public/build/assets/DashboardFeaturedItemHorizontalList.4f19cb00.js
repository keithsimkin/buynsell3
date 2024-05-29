import x from"./FeatureItemHorizontalSwiper.cf7adf06.js";import w from"./PsLabel.dd7b9156.js";import P from"./PsLabelHeader5.225a638a.js";import g from"./PsButton.81d0ce1f.js";import y from"./PsRouteLink.ab373f40.js";import v from"./PsIcon.c404b5b9.js";import{u as k}from"./ProductStore.017d2a02.js";import{P as S}from"./PsValueStore.46e374fe.js";import{P as L}from"./ProductParameterHolder.b9a2d040.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{j as H,o as I,c as V,a,b as e,w as t,q as i,t as d,r}from"./app.72d9fe45.js";import"./vue-splide.esm.01499f7d.js";/* empty css                   */import"./ItemHorizontalItem.1d41cc35.js";import"./PsLabelTitle4.90166f3a.js";import"./PsCard.c6bb6e2a.js";import"./ps_constants.ea9d0b33.js";import"./PsAdSense.e3562fb6.js";import"./AppInfoStore.3eac0301.js";import"./PsApiService.74841eb2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLoadingDialog.52bc8b7d.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelTitle.8e337e9e.js";import"./format.min.1a01be2e.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocationTownship.94979fe0.js";import"./ProductRelation.0b376978.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./Vendor.d946ee87.js";import"./PsValueHolder.64e68efd.js";import"./FavouriteItemStore.e64977ef.js";import"./PsSepetetedStore.9a31ac47.js";import"./FollowItemParameterHolder.54ad8b57.js";import"./PsUtils.eb7a8002.js";import"./moment.9709ab41.js";/* empty css                                                                       */import"./Phone.45f97258.js";import"./ApiStatus.5720ba0b.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const q={name:"DashboardFeaturedItemHorizontalList",components:{FeatureItemHorizontalSwiper:x,PsLabel:w,PsLabelHeader5:P,PsButton:g,PsRouteLink:y,PsIcon:v},props:{limit:{type:Number,default:12}},setup(s){const l=S().getLoginUserId(),o=k("dashboard_paid");o.limit=s.limit,o.paramHolder=new L().getPaidItemParameterHolder();let p=o.paramHolder.getUrlParamsAndQuery();return H(()=>{o.resetProductList(l,o.paramHolder)}),{itempaidProvider:o,paidParams:p}}},z={class:"xl:w-feLarge lg:w-large md:w-full md:px-6 lg:px-0 mx-auto"},N={class:"bg-feSecondary-50 dark:bg-feAchromatic-900 flex flex-col sm:flex-row justify-between gap-8 sm:gap-5 mt-10 px-4 py-6 sm:p-10"},B={class:"md:w-64 flex flex-col gap-4"},$={class:"md:w-64 flex justify-between items-center"},j={class:"mt-4 sm:mt-0"},F={class:"w-full sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-3xl"};function U(s,u,l,o,p,A){var f;const h=r("ps-label-header-5"),m=r("ps-icon"),n=r("ps-button"),c=r("ps-route-link"),_=r("ps-label"),b=r("feature-item-horizontal-swiper");return I(),V("div",z,[a("div",N,[a("div",B,[a("div",$,[e(h,{class:"font-semibold",textColor:""},{default:t(()=>[i(d(s.$t("home__fe_featured_items")),1)]),_:1}),e(c,{to:{name:"fe_item_list",query:o.paidParams.query},class:"block sm:hidden"},{default:t(()=>[e(n,{class:"flex flex-row",padding:"p-2 sm:px-4 sm:py-2",shadow:"shadow-sm",rounded:"rounded",hover:"",focus:"",border:"border border-feSecondary-200 dark:border-fePrimary-500",colors:"bg-fePrimary-500 text-feSecondary-50"},{default:t(()=>[e(m,{class:"block rtl:hidden",name:"rightChervon",h:"24",w:"24"}),e(m,{class:"hidden rtl:block",name:"leftChervon",h:"24",w:"24"})]),_:1})]),_:1},8,["to"])]),a("div",j,[e(_,{class:"text-base sm:text-lg font-normal",textColor:"dark:text-feSecondary-300"},{default:t(()=>[i(d(s.$t("home__fe_featured_items__desc")),1)]),_:1})]),e(c,{to:{name:"fe_item_list",query:o.paidParams.query},class:"hidden sm:block"},{default:t(()=>[e(n,{class:"flex flex-row",padding:"p-2 sm:px-4 sm:py-2",shadow:"shadow-sm",rounded:"rounded",hover:"",focus:"",border:"border border-feSecondary-200 dark:border-fePrimary-500"},{default:t(()=>[e(_,{class:"hidden sm:inline",textColor:"text-feSecondary-50  dark:text-feSecondary-300"},{default:t(()=>[i(d(s.$t("list_fe__view_all_label")),1)]),_:1}),e(m,{class:"sm:ms-2 block rtl:hidden",name:"rightChervon",h:"24",w:"24"}),e(m,{class:"sm:ms-2 hidden rtl:block",name:"leftChervon",h:"24",w:"24"})]),_:1})]),_:1},8,["to"])]),a("div",F,[e(b,{itemList:(f=o.itempaidProvider.itemList)==null?void 0:f.data,notShowTitle:"",storeName:"dashboard_paid"},null,8,["itemList"])])])])}var $e=C(q,[["render",U]]);export{$e as default};