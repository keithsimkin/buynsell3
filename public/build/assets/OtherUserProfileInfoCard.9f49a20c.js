import{o as d,f as i,w as r,a as h,m as I,c as P,b as t,g as m,q as s,t as o,Q as D,r as n,C as N}from"./app.72d9fe45.js";import{h as j}from"./moment.9709ab41.js";import U from"./PsCard.c6bb6e2a.js";import V from"./PsLabel.dd7b9156.js";import q from"./RatingShow.f25d8e9c.js";import B from"./PsRouteLink.ab373f40.js";import z from"./PsIcon.c404b5b9.js";import{u as E}from"./UserStore.e188dd03.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsApiService.74841eb2.js";import"./User.0c3ba1a8.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.ea9d0b33.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";const R={name:"OtherUserProfileInfoCard",components:{PsCard:U,PsLabel:V,Rating:q,PsRouteLink:B,PsIcon:z},setup(){const l=E("other");function c(f){return j(f).format(D().props.dateFormat)}return{userStore:l,getDateFormat:c}}},L={class:"w-32 h-32 rounded-full mx-auto relative"},A={alt:"Placeholder",class:"rounded-full w-full h-full object-cover"},M={key:0,class:"w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0"};function O(l,c,f,e,Q,T){const k=n("ps-icon"),a=n("ps-label"),w=n("rating"),u=n("ps-route-link"),C=n("ps-card"),v=N("lazy");return d(),i(C,{class:"lg:rounded-lg bg-feSecondary-50 dark:bg-feSecondary-800 p-4"},{default:r(()=>{var _,S,x,p,g;return[h("div",L,[I(h("img",A,null,512),[[v,{src:l.$page.props.thumb1xUrl+"/"+((_=e.userStore.user.data)==null?void 0:_.userCoverPhoto),loading:l.$page.props.sysImageUrl+"/loading_gif.gif",error:l.$page.props.sysImageUrl+"/default_profile.png"}]]),((S=e.userStore.user.data)==null?void 0:S.isVerifybluemark)=="1"?(d(),P("div",M,[t(k,{name:"bluemark",textColor:"text-feSecondary-50",w:"24",h:"24"})])):m("",!0)]),t(a,{textColor:"dark:text-feSecondary-200",class:"text-center text-xl font-semibold mb-2 mt-2"},{default:r(()=>[s(o(e.userStore.user.data?e.userStore.user.data.userName:""),1)]),_:1}),t(u,{to:{name:"fe_review_list",query:{user_id:(x=e.userStore.user.data)==null?void 0:x.userId}}},{default:r(()=>{var b,y;return[t(w,{class:"flex items-center content-center justify-center px-4 mb-3 cursor-pointer",rating:e.userStore.user.data?Number((y=(b=e.userStore.user)==null?void 0:b.data)==null?void 0:y.overallRating):0,maxStars:5,size:"md",iconColor:"text-feWarning-500"},null,8,["rating"])]}),_:1},8,["to"]),t(a,{textColor:"text-feSecondary-600 dark:text-feSecondary-400",class:"text-sm mb-3 text-center"},{default:r(()=>[s(o(e.userStore.user.data?e.userStore.user.data.ratingCount:"")+" "+o(l.$t("profile__reviews")),1)]),_:1}),e.userStore.user.data&&e.userStore.user.data.isShowEmail=="1"?(d(),i(a,{key:0,textColor:"dark:text-feSecondary-200",class:"text-sm mb-3 text-center"},{default:r(()=>[s(o(e.userStore.user.data?e.userStore.user.data.userEmail:""),1)]),_:1})):m("",!0),e.userStore.user.data&&e.userStore.user.data.isShowPhone=="1"?(d(),i(a,{key:1,textColor:"dark:text-feSecondary-200",class:"text-sm mb-3 text-center"},{default:r(()=>[s(o(e.userStore.user.data?e.userStore.user.data.userPhone:""),1)]),_:1})):m("",!0),t(a,{textColor:"dark:text-feSecondary-200",class:"text-sm mb-3 text-center"},{default:r(()=>[s(o(e.userStore.user.data?e.userStore.user.data.userAboutMe:""),1)]),_:1}),t(a,{textColor:"text-feSecondary-500 dark:text-feSecondary-400",class:"text-xs mb-3 text-center"},{default:r(()=>[s(o(l.$t("profile__joined_on"))+" "+o(e.userStore.user.data?e.getDateFormat(e.userStore.user.data.addedDate):""),1)]),_:1}),t(u,{class:"cursor-pointer mb-2 flex justify-between",to:{name:"fe_follower_list",query:{userId:(p=e.userStore.user.data)==null?void 0:p.userId}}},{default:r(()=>[t(a,{class:"text-sm"},{default:r(()=>[s(o(l.$t("other_profile__followers")),1)]),_:1}),t(a,{class:"font-semibold text-sm"},{default:r(()=>[s(o(e.userStore.user.data?e.userStore.user.data.followerCount:"0"),1)]),_:1})]),_:1},8,["to"]),t(u,{class:"cursor-pointer flex justify-between",to:{name:"fe_following_list",query:{userId:(g=e.userStore.user.data)==null?void 0:g.userId}}},{default:r(()=>[t(a,{class:"text-sm"},{default:r(()=>[s(o(l.$t("other_profile__followings")),1)]),_:1}),t(a,{class:"font-semibold text-sm"},{default:r(()=>[s(o(e.userStore.user.data?e.userStore.user.data.followingCount:"0"),1)]),_:1})]),_:1},8,["to"])]}),_:1})}var ie=F(R,[["render",O]]);export{ie as default};
