import{Z as dt,i as b,j as mt,z as g,o as y,f as nt,w as m,a as i,b as e,q as n,t as c,H as x,c as v,s as ct,m as ut,g as ft,F as pt,O as _t,r as h,C as yt}from"./app.72d9fe45.js";import xt from"./PsLabel.dd7b9156.js";import ht from"./PsIcon.c404b5b9.js";import St from"./PsButton.81d0ce1f.js";import bt from"./OrderSuccessTitleAndValue.2b50524e.js";import gt from"./PsBreadcrumb2.bcdabe6c.js";import vt from"./PsFrontendLayout.374c3b62.js";import wt from"./PsContentContainer.42cd0324.js";import{P as it}from"./PsValueStore.46e374fe.js";import{u as Ct}from"./AppInfoStore.3eac0301.js";import{u as At}from"./VendorCheckoutStore.72d88f09.js";import{u as kt}from"./GalleryStore.102224a6.js";import"./ps_constants.ea9d0b33.js";import{_ as Pt}from"./plugin-vue_export-helper.21dcd24c.js";import"./FooterView.a2566be6.js";import"./FooterLinkSection.2019a7c6.js";import"./PsLink.26c0aa15.js";import"./PsRouteLink.ab373f40.js";import"./PsLabelCaption.9bd8d857.js";import"./ProductParameterHolder.b9a2d040.js";import"./PsApiService.74841eb2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsNavTabBar.f7d96f93.js";import"./PsDropdown.05bf646c.js";import"./PsDropdownSelect.405216fe.js";import"./PsIconToggle.4c2e7ec1.js";import"./PsInputWithLeftIcon.b188023e.js";import"./LocationModal.d02e80d4.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./LocationParameterHolder.eedeb824.js";import"./ItemLocationTownship.94979fe0.js";import"./PsSepetetedStore.9a31ac47.js";import"./ItemLocationTownshipStore.024edc3b.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.42e9d556.js";import"./UserStore.e188dd03.js";import"./User.0c3ba1a8.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./UserUnReadMessageParameterHolder.402a8a72.js";import"./AddToCartStore.7e3033c2.js";import"./PsConfirmDialog.fdc5ff76.js";import"./PsUtils.eb7a8002.js";import"./PsNotificationBox.38ef8701.js";import"./ProductStore.017d2a02.js";import"./Phone.45f97258.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";import"./NotificationStore.09902b99.js";import"./NotiUnRegisterHolder.eefb692e.js";import"https://unpkg.com/delayed-scroll-restoration-polyfill@0.1.1/index.js";import"./ShippingAndBillingParameterHolder.153fda1f.js";import"./ItemInfo.399287ec.js";const Nt={name:"OrderSuccessfulPage",components:{PsContentContainer:wt,PsIcon:ht,PsLabel:xt,PsButton:St,OrderSuccessTitleAndValue:bt,Head:dt,PsBreadcrumb2:gt},layout:vt,props:["query"],setup(a){const w=it();kt("detail");const C=Ct(),r=w.getLoginUserId(),f=At();let p=b();const _=b(),l=b();mt(async()=>{await S()});function u(){_t.get(route("dashboard"))}console.log(a.query.orderId);async function S(){p.value=await f.loadOrderSummary(a.query.orderId,r);let d=f.orderSummary.data.orderSummary;_.value=[d.shippingFirstName+" "+d.shippingLastName,d.shippingPhoneNo,d.shippingEmail,d.shippingAddress,d.shippingCountry+", "+d.shippingState+", "+d.shippingCity+", "+d.shippingPostalCode],l.value=[d.billingFirstName+" "+d.billingLastName,d.billingPhoneNo,d.billingEmail,d.billingAddress,d.billingCountry+", "+d.billingState+", "+d.billingCity+", "+d.billingPostalCode]}return{appInfoStore:C,PsValueStore:it,vendorCheckoutStore:f,orderSummary:p,continueShopping:u,loginUserId:r,shippingAddress:_,billingAddress:l}},computed:{breadcrumb(){return[{label:g("ps_nav_bar__home"),url:route("dashboard")},{label:g("core_fe__my_orders"),url:route("fe_order_history")},{label:g("core_fe__order_details"),color:"text-fePrimary-500"}]}}},It={class:"mt-32 w-full"},jt={class:"flex flex-col px-6 py-4 rounded-lg border dark:border-feAchromatic-700 mt-6"},Dt={class:"flex flex-col md:flex-row lg:flex-row justify-between w-full"},Ft={class:"w-full md:w-1/2 lg:w-1/2 flex flex-col justify-start"},Vt={class:"flex flex-row mb-4"},Lt={class:"w-full md:w-1/2 lg:w-1/2 flex flex-col justify-start"},Bt={class:"flex flex-row mb-4"},Ot={class:"flex flex-col mb-8 rounded-lg border dark:border-feAchromatic-700 px-6 py-4 mt-8"},qt={class:"flex justify-between w-full"},Ut={class:"container"},zt={class:"h-32 w-32 rounded object-cover overflow-hidden mr-2"},Et={class:"flex flex-col"},Tt={class:"max-w-auto overflow-hidden whitespace-nowrap mb-2"},Ht={class:"flex flex-row items-center mb-1"},Mt={key:0},Gt=i("div",{class:"my-6 border-t border-feAchromatic-100 dark:border-feAchromatic-700"},null,-1),Qt={class:"flex flex-row items-center justify-between mt-6"},Zt={class:"flex flex-row items-center justify-between mt-5"},$t={class:"flex flex-row items-center justify-between mt-5"},Jt=i("div",{class:"my-6 border-t border-feAchromatic-100 dark:border-feAchromatic-700"},null,-1),Kt={class:"flex flex-row items-center justify-between my-5"};function Rt(a,w,C,r,f,p){const _=h("ps-breadcrumb-2"),l=h("ps-label"),u=h("order-success-title-and-value"),S=h("ps-content-container"),d=yt("lazy");return y(),nt(S,null,{content:m(()=>{var A,k,P,N,I,j,D,F,V,L,B,O,q,U,z,E,T,H,M,G,Q,Z,$,J,K,R,W,X,Y,tt,et,rt,ot,at,lt,st;return[i("div",It,[e(_,{items:p.breadcrumb,class:"mb-8"},null,8,["items"]),e(l,{textColor:"text-2xl font-semibold text-feAchromatic-800 dark:text-feAchromatic-50"},{default:m(()=>[n(c(a.$t("core_fe__order_details")),1)]),_:1}),i("div",jt,[e(l,{class:"font-semibold text-xl mb-6",textColor:"text-feAchromatic-900 dark:text-feAchromatic-50"},{default:m(()=>[n(c(a.$t("order_summary")),1)]),_:1}),i("div",Dt,[i("div",Ft,[e(u,{title:a.$t("order_id"),value:(P=(k=(A=r.orderSummary)==null?void 0:A.data)==null?void 0:k.orderSummary)==null?void 0:P.orderCode},null,8,["title","value"]),i("div",Vt,[e(l,{class:"w-1/2",textColor:"text-feAchromatic-600 dark:text-feAchromatic-400"},{default:m(()=>[n(c(a.$t("order_status")),1)]),_:1}),i("div",{class:"w-50 px-3 rounded",style:x("border:1px solid "+((j=(I=(N=r.orderSummary)==null?void 0:N.data)==null?void 0:I.orderSummary)==null?void 0:j.orderStatusColor))},[e(l,{class:"w-1/2",style:x("color:"+((V=(F=(D=r.orderSummary)==null?void 0:D.data)==null?void 0:F.orderSummary)==null?void 0:V.orderStatusColor))},{default:m(()=>{var t,s,o;return[n(c((o=(s=(t=r.orderSummary)==null?void 0:t.data)==null?void 0:s.orderSummary)==null?void 0:o.orderStatus),1)]}),_:1},8,["style"])],4)]),e(u,{title:a.$t("order_date"),value:(O=(B=(L=r.orderSummary)==null?void 0:L.data)==null?void 0:B.orderSummary)==null?void 0:O.paymentDate},null,8,["title","value"]),e(u,{title:a.$t("success_name"),value:((z=(U=(q=r.orderSummary)==null?void 0:q.data)==null?void 0:U.orderSummary)==null?void 0:z.shippingFirstName)+" "+((H=(T=(E=r.orderSummary)==null?void 0:E.data)==null?void 0:T.orderSummary)==null?void 0:H.shippingLastName)},null,8,["title","value"]),e(u,{title:a.$t("success_email"),value:(Q=(G=(M=r.orderSummary)==null?void 0:M.data)==null?void 0:G.orderSummary)==null?void 0:Q.shippingEmail},null,8,["title","value"]),e(u,{title:a.$t("shipping__address"),value:r.shippingAddress},null,8,["title","value"])]),i("div",Lt,[e(u,{title:a.$t("success_payment_method"),value:(J=($=(Z=r.orderSummary)==null?void 0:Z.data)==null?void 0:$.orderSummary)==null?void 0:J.paymentMethod},null,8,["title","value"]),i("div",Bt,[e(l,{class:"w-1/2",textColor:"text-feAchromatic-600 dark:text-feAchromatic-400"},{default:m(()=>[n(c(a.$t("success_payment_status")),1)]),_:1}),i("div",{class:"w-50 px-3 rounded",style:x("background-color:"+((W=(R=(K=r.orderSummary)==null?void 0:K.data)==null?void 0:R.orderSummary)==null?void 0:W.paymentStatusColor)+"20")},[e(l,{class:"w-1/2",style:x("color:"+((tt=(Y=(X=r.orderSummary)==null?void 0:X.data)==null?void 0:Y.orderSummary)==null?void 0:tt.paymentStatusColor))},{default:m(()=>{var t,s,o;return[n(c((o=(s=(t=r.orderSummary)==null?void 0:t.data)==null?void 0:s.orderSummary)==null?void 0:o.paymentStatus),1)]}),_:1},8,["style"])],4)]),e(u,{title:a.$t("success_total_order_amount"),value:(ot=(rt=(et=r.orderSummary)==null?void 0:et.data)==null?void 0:rt.orderSummary)==null?void 0:ot.total},null,8,["title","value"]),e(u,{title:a.$t("success_billing_address"),value:r.billingAddress},null,8,["title","value"])])])]),i("div",Ot,[e(l,{class:"font-semibold text-xl mb-6",textColor:"text-feAchromatic-900 dark:text-feAchromatic-50"},{default:m(()=>{var t,s,o;return[n(c((o=(s=(t=r.orderSummary)==null?void 0:t.data)==null?void 0:s.orderSummary)==null?void 0:o.vendorName),1)]}),_:1}),i("div",qt,[i("div",Ut,[(y(!0),v(pt,null,ct((st=(lt=(at=r.orderSummary)==null?void 0:at.data)==null?void 0:lt.orderSummary)==null?void 0:st.itemInfo,(t,s)=>{var o;return y(),v("div",{key:s,class:"flex items-start mb-5"},[ut(i("img",zt,null,512),[[d,{src:a.$page.props.thumb2xUrl+"/"+((o=t==null?void 0:t.defaultPhoto)==null?void 0:o.imgPath),loading:a.$page.props.sysImageUrl+"/loading_gif.gif",error:a.$page.props.sysImageUrl+"/default_photo.png"}]]),i("div",Et,[i("div",Tt,[e(l,{class:"font-normal overflow-ellipsis",textColor:"text-feSecondary-500 dark:text-feAchromatic-400"},{default:m(()=>[n(c(t.itemName),1)]),_:2},1024)]),i("div",Ht,[t.discountPrice!=""?(y(),v("div",Mt,[e(l,{textColor:"line-through font-sm font-semibold text-feAchromatic-700 dark:text-feAchromatic-50"},{default:m(()=>[n(c(t.originalPrice),1)]),_:2},1024)])):ft("",!0),e(l,{textColor:"font-semibold text-xl text-fePrimary-500 ml-1"},{default:m(()=>[n(c(t.salePrice),1)]),_:2},1024)]),e(l,{class:"font-base mb-1",textColor:"text-feSecondary-600 dark:text-feAchromatic-400"},{default:m(()=>[n("Qty: "+c(t.quantity)+"x",1)]),_:2},1024)])])}),128)),Gt,i("div",Qt,[e(l,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>[n(c(a.$t("subtotal")),1)]),_:1}),e(l,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>{var t,s,o;return[n(c((o=(s=(t=r.orderSummary)==null?void 0:t.data)==null?void 0:s.orderSummary)==null?void 0:o.subTotal),1)]}),_:1})]),i("div",Zt,[e(l,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>[n(c(a.$t("discount")),1)]),_:1}),e(l,{class:"text-normal",textColor:"text-fePrimary-500"},{default:m(()=>{var t,s,o;return[n("-"+c((o=(s=(t=r.orderSummary)==null?void 0:t.data)==null?void 0:s.orderSummary)==null?void 0:o.totalDiscount),1)]}),_:1})]),i("div",$t,[e(l,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>[n(c(a.$t("delivery_charges")),1)]),_:1}),e(l,{class:"text-normal",textColor:"text-feSecondary-800 dark:text-feAchromatic-200"},{default:m(()=>{var t,s,o;return[n(c((o=(s=(t=r.orderSummary)==null?void 0:t.data)==null?void 0:s.orderSummary)==null?void 0:o.deliveryFee),1)]}),_:1})]),Jt,i("div",Kt,[e(l,{class:"text-lg font-bold",textColor:"text-feSecondary-800 dark:text-feSecondary-50"},{default:m(()=>[n(c(a.$t("success_total")),1)]),_:1}),e(l,{class:"text-lg font-bold",textColor:"text-feSecondary-800 dark:text-feSecondary-50"},{default:m(()=>{var t,s,o;return[n(c((o=(s=(t=r.orderSummary)==null?void 0:t.data)==null?void 0:s.orderSummary)==null?void 0:o.total),1)]}),_:1})])])])])])]}),_:1})}var dr=Pt(Nt,[["render",Rt]]);export{dr as default};
