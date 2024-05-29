import V from"./PsModal.49a87bcd.js";import H from"./PsLabel.dd7b9156.js";import B from"./PsRouteLink.ab373f40.js";import E from"./PasswordUpdateModal.390baca2.js";import F from"./PsConfirmDialog.fdc5ff76.js";import q from"./PsLoadingDialog.52bc8b7d.js";import{P as z}from"./PsValueStore.46e374fe.js";import{U as j}from"./UserDeleteItemParameterHolder.5d816aba.js";import{u as W}from"./UserStore.e188dd03.js";import{u as G}from"./AppInfoStore.3eac0301.js";import{A as J}from"./AppInfoParameterHolder.e24d894d.js";import{b as I}from"./PsApiService.74841eb2.js";import{d as K,i as u,o as k,c as b,b as e,w as o,a as d,q as a,t as l,g as Q,F as X,z as S,O as Y,r as c}from"./app.72d9fe45.js";import{P as Z}from"./PsUtils.eb7a8002.js";import{u as tt}from"./NotificationStore.09902b99.js";import{N as et,a as ot}from"./NotiUnRegisterHolder.eefb692e.js";import{P as A}from"./ps_constants.ea9d0b33.js";import st from"./PsIcon.c404b5b9.js";import{_ as rt}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelCaption.9bd8d857.js";import"./PsLabelTitle.8e337e9e.js";import"./PsButton.81d0ce1f.js";import"./PsSecondaryButton.39246c7c.js";import"./PsErrorDialog.3476232f.js";import"./PsSuccessDialog.8c0260a4.js";import"./PsLoadingDialog.e0858024.js";import"./PsInput.5af8d533.js";import"./ChangePasswordParameterHolder.4af4401a.js";import"./PsInputWithRightIcon.17425c09.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";const at=K({name:"UserSettingModal",components:{PsModal:V,PsLabel:H,PasswordUpdateModal:E,PsConfirmDialog:F,PsLoadingDialog:q,PsRouteLink:B,PsIcon:st},setup(t){const s=u(),y=u("Loading the data ...."),C=u(),w=u(),x=u(),f=z(),r=f.getLoginUserId(),n=f.getLoginUserId(),h=tt(),_=new et,p=new ot,P=G(),i=new J;i.userId=n;const g=new j,v=W();function N(){s.value.toggle(!0)}function M(){s.value.toggle(!1)}function L(m){y.value=m}function D(m){w.value.openModal(S("user_setting_modal__deactivate_title"),S("user_setting_modal__deactivate_dialog"),S("user_setting_modal__confirm"),S("user_setting_modal__cancel"),()=>{$(m)},()=>{Z.log("Cancel")})}async function $(m){g.userId=m,x.value.openModal();const U=await v.postDeleteUser(g);x.value.closeModal(),U.status!=I.ERROR&&U.status==I.SUCCESS&&Y.post(route("logout"))}function R(){C.value.openModal()}function O(m){f.replaceshowProfile(m)}function T(m){m=="hide"?(p.platformName=A.PLATFORM,p.deviceId=localStorage.deviceToken,p.userId=n,h.unRegisterNotiToken(p)):(_.platformName=A.PLATFORM,_.deviceId=localStorage.deviceToken,_.loginUserId=n,h.registerNotiToken(_)),f.replaceNotiSetting(m)}return{showProfile:O,shownotiSetting:T,psmodal:s,openModal:N,closeModal:M,message:y,setMessage:L,password_update_modal:C,openPasswordUpdate:R,openUserDeactivate:D,ps_confirm_dialog:w,psloading:x,LoginUserId:n,doDeactivate:$,psValueStore:f,appInfoStore:P,PsConst:A,loginUserId:r}}}),lt={class:"grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[3.125rem] sm:gap-y-[2.75rem] gap-0 items-start xl:px-10 xl:py-16 py-7 px-10 self-stretch"},it={class:"sm:mt-0 mt-6"},nt={class:"mt-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer flex flex-col"},mt={class:"mt-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer flex flex-col"},dt={class:"mt-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer flex flex-col"},ft={class:"sm:mt-0 mt-6"},ct={class:"mt-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer flex flex-col"},_t={class:"sm:mt-0 mt-6"},pt={key:0,class:"sm:mt-6 mt-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer flex flex-col"};function gt(t,s,y,C,w,x){const f=c("ps-icon"),r=c("ps-label"),n=c("ps-route-link"),h=c("ps-modal"),_=c("password-update-modal"),p=c("ps-confirm-dialog"),P=c("ps-loading-dialog");return k(),b(X,null,[e(h,{ref:"psmodal",theme:"p-0 rounded-2xl dark:bg-feSecondary-800",line:"hidden",bodyHeight:"max-h-108",maxWidth:"1060px",isClickOut:!0,class:"z-50"},{title:o(()=>[e(r,{class:"font-medium lg:text-base text-xs hover:underline cursor-pointer pt-2 px-2.5 flex justify-end",onClick:s[0]||(s[0]=i=>t.psmodal.toggle(!1))},{default:o(()=>[e(f,{class:"me-2",name:"close"})]),_:1})]),body:o(()=>[d("div",lt,[d("div",it,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-2xl text-xl mb-3 sm:mb-10"},{default:o(()=>[a(l(t.$t("fe__profile_modal_activities")),1)]),_:1}),e(n,{class:"mt-2",to:{name:"fe_follower_list",query:{userId:t.loginUserId}},onClick:s[1]||(s[1]=i=>t.psmodal.toggle(!1))},{default:o(()=>[d("div",nt,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__followers")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__followers_caption_new")),1)]),_:1})])]),_:1},8,["to"]),e(n,{class:"mt-2",to:{name:"fe_following_list",query:{userId:t.loginUserId}},onClick:s[2]||(s[2]=i=>t.psmodal.toggle(!1))},{default:o(()=>[d("div",mt,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__followings")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__followings_caption_new")),1)]),_:1})])]),_:1},8,["to"]),e(n,{class:"mt-2",to:{name:"fe_follower_items"},onClick:s[3]||(s[3]=i=>t.psmodal.toggle(!1))},{default:o(()=>[d("div",dt,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__follower_items")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__follower_caption_new")),1)]),_:1})])]),_:1})]),d("div",ft,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-2xl text-xl mb-3 sm:mb-10"},{default:o(()=>[a(l(t.$t("fe__profile_modal_settings")),1)]),_:1}),e(n,{class:"mt-2",to:{name:"fe_reported_items"},onClick:s[4]||(s[4]=i=>t.psmodal.toggle(!1))},{default:o(()=>[d("div",ct,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__reported_posts")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__reported_posts_caption_new")),1)]),_:1})])]),_:1}),t.psValueStore.notiSetting=="true"?(k(),b("div",{key:0,onClick:s[5]||(s[5]=i=>t.shownotiSetting("hide")),class:"mt-2 hover_bg-fePrimary-50 dark_hover_bg-feAchromatic-800 cursor-pointer flex flex-col"},[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__hide_show_noti")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__hide_show_noti_caption")),1)]),_:1})])):(k(),b("div",{key:1,onClick:s[6]||(s[6]=i=>t.shownotiSetting("true")),class:"mt-2 hover_bg-fePrimary-50 dark_hover_bg-feAchromatic-800 cursor-pointer flex flex-col"},[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__hide_show_noti")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__hide_show_noti_caption")),1)]),_:1})]))]),d("div",_t,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-2xl text-xl whitespace-nowrap mb-5 sm:mb-10"},{default:o(()=>[a(l(t.$t("fe__profile_modal__privacy")),1)]),_:1}),e(n,{class:"",to:{name:"fe_block_user_list"},onClick:s[7]||(s[7]=i=>t.psmodal.toggle(!1))},{default:o(()=>{var i,g,v;return[((v=(g=(i=t.appInfoStore)==null?void 0:i.appInfo)==null?void 0:g.data.psAppSetting)==null?void 0:v.isBlockUser)==t.PsConst.ONE?(k(),b("div",pt,[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__blocked_users")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__blocked_users_caption_new")),1)]),_:1})])):Q("",!0)]}),_:1}),d("div",{class:"mt-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer flex flex-col",onClick:s[8]||(s[8]=(...i)=>t.openPasswordUpdate&&t.openPasswordUpdate(...i))},[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__change_password")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__change_password_caption")),1)]),_:1})]),d("div",{class:"mt-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer flex flex-col",onClick:s[9]||(s[9]=i=>t.openUserDeactivate(t.LoginUserId))},[e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200",class:"font-semibold sm:text-xl text-lg"},{default:o(()=>[a(l(t.$t("user_setting_modal__delete_account")),1)]),_:1}),e(r,{textColor:"text-feAchromatic-900 dark:text-feSecondary-200 font-light",class:"sm:mt-2 mt-0 text-sm"},{default:o(()=>[a(l(t.$t("user_setting_modal__delete_account_caption")),1)]),_:1})])])])]),footer:o(()=>[]),_:1},512),e(_,{ref:"password_update_modal"},null,512),e(p,{ref:"ps_confirm_dialog"},null,512),e(P,{ref:"psloading",isClickOut:!1},null,512)],64)}var ee=rt(at,[["render",gt]]);export{ee as default};