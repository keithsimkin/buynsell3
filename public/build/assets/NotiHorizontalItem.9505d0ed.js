import M from"./PsLabel.dd7b9156.js";import{N as b,u as R}from"./NotificationStore.09902b99.js";import E from"./PsIcon.c404b5b9.js";import H from"./PsDropdown.05bf646c.js";import{P as z}from"./PsValueStore.46e374fe.js";import{N as D,a as F}from"./NotiParameterHolder.43e91ada.js";import L from"./PsLoadingDialog.52bc8b7d.js";import{i as I,o as x,c as k,a as n,m as N,b as i,w as _,q as C,t as A,g as T,n as j,O as S,z as P,r as u,C as O}from"./app.72d9fe45.js";import{P as p}from"./ps_constants.ea9d0b33.js";import{u as V,U as B}from"./UserUnReadMessageParameterHolder.402a8a72.js";import q from"./PsConfirmDialog2.c0dba84b.js";import{P as G}from"./PsUtils.eb7a8002.js";import J from"./PsLine.c7f2ab42.js";import{h as K}from"./moment.9709ab41.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.74841eb2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ApiStatus.5720ba0b.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLabelTitle.8e337e9e.js";import"./PsButton.81d0ce1f.js";const W={name:"NotiHorizontalItem",components:{PsLabel:M,PsDropdown:H,PsIcon:E,PsLoadingDialog:L,PsConfirmDialog2:q,PsLine:J},props:{noti:{type:b,default:new b},onClick:Function},setup(){const a=R(),e=z().getLoginUserId(),t=new F,m=new D,l=I();m.userId=e,m.deviceToken=localStorage.deviceToken;const d=V(),r=new B;r.userId=e,r.deviceToken=localStorage.deviceToken;const f=I(!1),y=I();async function g(o,v){l.value.openModal(),f.value=!1,t.userId=e,t.deviceToken=localStorage.deviceToken,t.notiId=o,t.notiType=v,await a.markAsRead(t,e),await a.resetNotiList(m),await d.postUserUnreadMessageCount(r),l.value.closeModal()}async function U(o,v){l.value.openModal(),f.value=!1,t.userId=e,t.deviceToken=localStorage.deviceToken,t.notiId=o,t.notiType=v,await a.markAsUnRead(t,e),await a.resetNotiList(m),await d.postUserUnreadMessageCount(r),l.value.closeModal()}async function h(o,v){l.value.openModal(),f.value=!1,t.userId=e,t.deviceToken=localStorage.deviceToken,t.notiId=o,t.notiType=v,await a.deleteNoti(t,e),await a.resetNotiList(m),await d.postUserUnreadMessageCount(r),l.value.closeModal()}async function w(o){o.type==p.PUSH_NOTI?(await g(o.id,o.type),S.get(route("fe_notification_detail"),{notiId:o.id})):(o.type==p.CHAT_MESSAGE||o.type==p.OFFER_RECEIVED||o.type==p.OFFER_ACCEPTED||o.type==p.OFFER_REJECTED)&&(await g(o.id,o.type),l.value.openModal(),S.get(route("fe_chat"),{buyer_user_id:o.buyerUserId,seller_user_id:o.sellerUserId,item_id:o.itemId,chat_flag:o.chatFlag}))}function c(o){y.value.openModal(P("noti_list__delete_title"),P("noti_list__delete_dialog"),P("chat__confirm"),P("chat__cancel"),()=>{h(o.id,o.type)},()=>{G.log("cancel")})}return{notiStore:a,showMenu:f,markAsRead:g,markAsUnRead:U,deleteNoti:h,ps_loading_dialog:l,ps_confirm_dialog:y,clickNoti:w,PsConst:p,deleteConfirm:c,moment:K}}},X={class:"flex flex-row justify-between"},Y={class:"rounded-md m-2"},Z={class:"sm:w-[100px] w-[62px] h-[62px] sm:h-[80px]"},$={key:0,alt:"Placeholder",width:"15px",height:"10px",class:"object-cover w-[62px] h-[62px] sm:w-full sm:h-full rounded-md"},ee={key:1,alt:"Placeholder",width:"15px",height:"10px",class:"object-cover w-[62px] h-[62px] sm:w-full sm:h-full rounded-md"},te={class:"flex flex-col ms-4 my-auto"},oe={class:"flex flex-col w-[120px] sm:w-[320px]"},ae={class:"flex justify-end w-full h-1/2"},se={class:"z-30"},ie={class:"h-1/2 w-full flex justify-end items-end p-1 sm:p-2"};function re(a,s,e,t,m,l){var w;const d=u("ps-label"),r=u("ps-icon"),f=u("ps-line"),y=u("ps-dropdown"),g=u("ps-loading-dialog"),U=u("ps-confirm-dialog-2"),h=O("lazy");return x(),k("div",{class:j([e.noti.isRead!="0"?"bg-feAchromatic-50 dark:bg-feAchromatic-900":"bg-feAchromatic-100 dark:bg-feAchromatic-800","w-full cursor-pointer dark:bg-feAchromatic-800 rounded-lg"]),onClick:s[5]||(s[5]=c=>e.onClick!=null?e.onClick(e.noti):null)},[n("div",X,[n("div",{class:"flex-grow flex flex-row",onClick:s[0]||(s[0]=c=>t.clickNoti(e.noti))},[n("div",Y,[n("div",Z,[(w=e.noti)!=null&&w.senderCoverPhoto?N((x(),k("img",$,null,512)),[[h,{src:a.$page.props.thumb2xUrl+"/"+e.noti.senderCoverPhoto,loading:a.$page.props.sysImageUrl+"/loading_gif.gif",error:a.$page.props.sysImageUrl+"/default_photo.png"}]]):N((x(),k("img",ee,null,512)),[[h,{src:a.$page.props.thumb2xUrl+"/"+e.noti.defaultPhoto.imgPath,loading:a.$page.props.sysImageUrl+"/loading_gif.gif",error:a.$page.props.sysImageUrl+"/default_photo.png"}]])])]),n("div",te,[i(d,{class:"text-xxs sm:text-sm lg:text-base",textColor:"text-feSecondary-600 dark:text-feAchromatic-200",innerHTML:e.noti.message.length>75?e.noti.message.slice(0,75)+" ....":e.noti.message},null,8,["innerHTML"])])]),n("div",oe,[n("div",ae,[i(y,{horizontalAlign:"right",h:"h-auto ",class:"",onClick:s[4]||(s[4]=c=>t.showMenu=!t.showMenu)},{select:_(()=>[i(r,{name:"vertical-dot",w:"24",h:"24",textColor:e.noti.isRead=="0"?e.noti.type==t.PsConst.PUSH_NOTI?"text-feAchromatic-500 dark:text-feAchromatic-200":"text-feAchromatic-500":"text-feAchromatic-500 dark:text-feAchromatic-200",class:"mt-2 text-base me-1 cursor-pointer"},null,8,["textColor"])]),list:_(()=>[n("div",se,[e.noti.isRead=="0"?(x(),k("div",{key:0,onClick:s[1]||(s[1]=c=>t.markAsRead(e.noti.id,e.noti.type)),class:"w-56 flex justify-center items-center py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer"},[i(r,{name:"checkNoCircle",class:"mt-2"}),i(d,{class:"ms-2"},{default:_(()=>[C(A(a.$t("noti_horizontal_item__mark_as_read")),1)]),_:1})])):T("",!0),e.noti.isRead=="1"?(x(),k("div",{key:1,onClick:s[2]||(s[2]=c=>t.markAsUnRead(e.noti.id,e.noti.type)),class:"w-56 flex justify-center py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"},[i(r,{name:"checkNoCircle",class:"mt-2"}),i(d,{class:"ms-2"},{default:_(()=>[C(A(a.$t("noti_horizontal_item__mark_as_unread")),1)]),_:1})])):T("",!0),i(f,{class:"mx-4"}),n("div",{onClick:s[3]||(s[3]=c=>t.deleteConfirm(e.noti)),class:"w-56 flex justify-center py-4 px-2 hover:bg-fePrimary-50 dark:hover:bg-feAchromatic-800 cursor-pointer items-center"},[i(r,{name:"trash-alt"}),i(d,{class:"ms-2"},{default:_(()=>[C(A(a.$t("noti_horizontal_item__delete_noti")),1)]),_:1})])])]),_:1})]),n("div",ie,[i(d,{class:"text-3xs sm:text-xs truncate",textColor:e.noti.isRead=="0"?e.noti.type==t.PsConst.PUSH_NOTI?"text-feAchromatic-500 dark:text-feAchromatic-200":"text-feAchromatic-500":"text-feAchromatic-500 dark:text-feAchromatic-200"},{default:_(()=>[C(A(t.moment(e.noti.addedDate).format(a.$page.props.dateFormat)),1)]),_:1},8,["textColor"])])])]),i(g,{ref:"ps_loading_dialog"},null,512),i(U,{ref:"ps_confirm_dialog"},null,512)],2)}var Se=Q(W,[["render",re]]);export{Se as default};
