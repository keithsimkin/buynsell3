import{Z as b,o as i,c as s,b as r,w as p,a as n,q as g,t as S,f as k,g as l,F as P,r as e,b6 as c}from"./app.72d9fe45.js";import v from"./PsContentContainer.42cd0324.js";import y from"./PsLabelTitle.8e337e9e.js";import x from"./PsLabel.dd7b9156.js";import U from"./PrivacySkeletor.6e201b7d.js";import{u as V}from"./AboutUsStore.37881ff8.js";import q from"./PsFrontendLayout.374c3b62.js";import{P as L}from"./PsValueStore.46e374fe.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-skeletor.esm.437103df.js";/* empty css                     */import"./PsApiService.74841eb2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.a2566be6.js";import"./FooterLinkSection.2019a7c6.js";import"./PsLink.26c0aa15.js";import"./PsRouteLink.ab373f40.js";import"./PsLabelCaption.9bd8d857.js";import"./PsIcon.c404b5b9.js";import"./ProductParameterHolder.b9a2d040.js";import"./ps_constants.ea9d0b33.js";import"./AppInfoStore.3eac0301.js";import"./PsNavTabBar.f7d96f93.js";import"./PsDropdown.05bf646c.js";import"./PsDropdownSelect.405216fe.js";import"./PsIconToggle.4c2e7ec1.js";import"./PsInputWithLeftIcon.b188023e.js";import"./LocationModal.d02e80d4.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsButton.81d0ce1f.js";import"./LocationParameterHolder.eedeb824.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.024edc3b.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.42e9d556.js";import"./UserStore.e188dd03.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.402a8a72.js";import"./AddToCartStore.7e3033c2.js";import"./PsConfirmDialog.fdc5ff76.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.38ef8701.js";import"./ProductStore.017d2a02.js";import"./Phone.45f97258.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.09902b99.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";const C={name:"PrivacyView",components:{PsContentContainer:v,PsLabelTitle:y,PsLabel:x,PrivacySkeletor:U,Head:b},layout:q,setup(m){const t=V(),o=L().getLoginUserId();return t.loadAboutUs(o),{aboutUsStore:t}}},H={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},T={key:1};function F(m,t,u,o,N,w){const _=e("Head"),a=e("ps-label"),d=e("privacy-skeletor"),f=e("ps-content-container");return i(),s(P,null,[r(_,{title:m.$t("faq_page__faq_page")},null,8,["title"]),r(f,null,{content:p(()=>[n("div",H,[r(a,{class:"text-center font-semibold text-2xl sm:text-3xl"},{default:p(()=>[g(S(m.$t("faq_page__faq_page")),1)]),_:1}),o.aboutUsStore.aboutus.data!=null?(i(),k(a,{key:0,class:"mt-4"},{default:p(()=>[t[0]||(c(-1),t[0]=n("span",{innerHTML:o.aboutUsStore.aboutus.data.faqPage},null,8,["innerHTML"]),c(1),t[0])]),_:1})):l("",!0),o.aboutUsStore.loading.value==!0?(i(),s("div",T,[r(d)])):l("",!0)])]),_:1})],64)}var Gt=B(C,[["render",F]]);export{Gt as default};