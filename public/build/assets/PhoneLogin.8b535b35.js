import{Z as A,i as u,j as L,o as g,c as U,b as t,a as d,w as l,q as n,t as a,K as V,f as b,g as C,F as $,r as s}from"./app.72d9fe45.js";import S from"./PsLabel.dd7b9156.js";import B from"./PsLabelTitle.8e337e9e.js";import H from"./PsLabelCaption.9bd8d857.js";import I from"./PsButton.81d0ce1f.js";import T from"./PsInput.5af8d533.js";import j from"./UserPhoneLoginVerificationModal.cf66a5c4.js";import q from"./PsErrorDialog.0ec3813f.js";import{P as Z}from"./PsValueStore.46e374fe.js";import{u as z}from"./UserProvider.d1be650d.js";import{P as D}from"./PhoneLoginParameterHolder.e6dad0ed.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsApiService.74841eb2.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./UserListParameterHolder.d110b747.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.ea9d0b33.js";import"./UserRegisterParameterHolder.c0325365.js";import"./ApiStatus.5720ba0b.js";const F={name:"PhoneLoginView",components:{PsLabel:S,PsLabelTitle:B,PsButton:I,PsInput:T,UserPhoneLoginVerificationModal:j,PsErrorDialog:q,PsLabelCaption:H,Head:A},setup(){const e=z(),r=new D,o=Z().getLoginUserId(),i=u(),k=u(),_=u(!1),c=u(!1),h=u(),v=u();e.loading.value=!0;function p(){e.loading.value=!0,setTimeout(()=>{e.loading.value=!1},1e3)}L(()=>{p()});function P(){}async function y(){let m=!0;if((i.value==""||i.value==null)&&(_.value=!0,m=!1),(i.value==""||i.value==null)&&(c.value=!0,m=!1),!m){window.scrollTo(0,0);return}r.phoneId=o,r.userName=i.value,r.userPhone=k.value,e.loading.value=!0,e.loading.value=!1}function x(m){/^\/$|(\/[a-zA-Z_0-9-]+)+$/.test(m.target.value)?_.value=!0:_.value=!1}function f(m){/^\/$|(\/[a-zA-Z_0-9-]+)+$/.test(m.target.value)?c.value=!0:c.value=!1}return{userProvider:e,clicked:y,name:i,phone:k,user_phone_login_verification_modal:h,ps_error_dialog:v,loginClicked:P,isValidUserName:_,validateName:x,validatePhone:f,isValidPhone:c}}},M={class:"sm:mt-28 lg:mt-28 mt-28 bg-fePrimary-500 dark:bg-feAccent-500 h-screen flex flex-col"},G={class:"mt-56 w-96 flex flex-col mx-auto bg-feAchromatic-50 dark:bg-feAchromatic-900 m-auto rounded-lg"},J=d("div",{id:"recaptcha-container"},null,-1),O=n(),Q=d("br",null,null,-1),R={class:"flex items-center justify-center mb-4"},W={class:"flex flex-auto justify-center mt-4 mb-10"};function X(e,r,K,o,i,k){const _=s("Head"),c=s("ps-label-title"),h=s("ps-label"),v=s("ps-input"),p=s("ps-label-caption"),P=s("ps-button"),y=s("user-phone-login-verification-modal"),x=s("ps-error-dialog");return g(),U($,null,[t(_,{title:e.$t("phone_login__phone_login")},null,8,["title"]),d("div",M,[d("div",G,[t(c,{class:"mt-8 mx-auto text-2xl"},{default:l(()=>[n(a(e.$t("phone_login__phone_login")),1)]),_:1}),t(h,{class:"mt-4 mx-8"},{default:l(()=>[n(a(e.$t("phone_login__user_name"))+" : ",1)]),_:1}),t(v,{class:"mt-2 mx-8",type:"text",placeholder:e.$t("phone_login__user_name"),onKeyup:V(o.clicked,["enter"]),onKeypress:o.validateName,value:o.name,"onUpdate:value":r[0]||(r[0]=f=>o.name=f)},null,8,["placeholder","onKeyup","onKeypress","value"]),o.isValidUserName?(g(),b(p,{key:0,class:"mt-2 mx-8",textColor:"text-fePrimary-500 dark:text-feAccent-500"},{default:l(()=>[n(a(e.$t("phone_login__user_name_required")),1)]),_:1})):C("",!0),t(p,{class:"mt-2 mx-8"},{default:l(()=>[n(a(e.$t("phone_login__user_name_format")),1)]),_:1}),t(h,{class:"mt-4 mx-8"},{default:l(()=>[n(a(e.$t("phone_login__phone_number"))+" : ",1)]),_:1}),t(v,{class:"mt-2 mx-8",type:"text",placeholder:e.$t("phone_login__phone_number_placeholder"),onKeyup:V(o.clicked,["enter"]),onKeypress:o.validatePhone,value:o.phone,"onUpdate:value":r[1]||(r[1]=f=>o.phone=f)},null,8,["placeholder","onKeyup","onKeypress","value"]),o.isValidPhone?(g(),b(p,{key:1,class:"mt-2 mx-8",textColor:"text-fePrimary-500 dark:text-feAccent-500"},{default:l(()=>[n(a(e.$t("phone_login__phone_required")),1)]),_:1})):C("",!0),J,O,Q,d("div",R,[o.userProvider.loading.value?(g(),b(P,{key:0,class:"mt-6 mx-8",disabled:!0},{default:l(()=>[n(a(e.$t("phone_login__loading")),1)]),_:1})):(g(),b(P,{key:1,class:"mt-6 mx-8",onClick:o.clicked,disabled:!1},{default:l(()=>[n(a(e.$t("phone_login__login")),1)]),_:1},8,["onClick"]))]),d("div",W,[t(p,{class:"cursor-pointer",onClick:o.loginClicked},{default:l(()=>[n(a(e.$t("phone_login__back_to_login")),1)]),_:1},8,["onClick"])])])]),t(y,{ref:"user_phone_login_verification_modal"},null,512),t(x,{ref:"ps_error_dialog"},null,512)],64)}var Ve=E(F,[["render",X]]);export{Ve as default};