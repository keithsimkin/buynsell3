import{i as U,o as g,c as x,b as r,w as s,a as n,m as I,g as N,q as i,t as l,f as b,F as L,z as h,O as P,r as d,C as F}from"./app.72d9fe45.js";import H from"./PsCard.c6bb6e2a.js";import V from"./PsLabel.dd7b9156.js";import D from"./PsButton.81d0ce1f.js";import z from"./PsIcon.c404b5b9.js";import B from"./RatingShow.f25d8e9c.js";import O from"./PsLabelCaption.9bd8d857.js";import R from"./PsRouteLink.ab373f40.js";import A from"./PsLoadingDialog.52bc8b7d.js";import{U as j}from"./User.0c3ba1a8.js";import{u as q}from"./UserListStore.846fce4f.js";import{U as k,u as E}from"./UserStore.e188dd03.js";import{P as M}from"./PsValueStore.46e374fe.js";import{U as T}from"./UserFollowHolder.8b598f9e.js";import{P as W}from"./ps_constants.ea9d0b33.js";import{u as G}from"./ProductStore.017d2a02.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabelTitle.8e337e9e.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./ProductRelation.0b376978.js";import"./PsApiService.74841eb2.js";import"./UserListParameterHolder.d110b747.js";import"./PsSepetetedStore.9a31ac47.js";import"./DefaultPhoto.cc755f93.js";import"./ApiStatus.5720ba0b.js";import"./ProductParameterHolder.b9a2d040.js";import"./Phone.45f97258.js";import"./Product.0519ee40.js";import"./Category.7c65464b.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemCurrency.91c8ce91.js";import"./ItemLocationTownship.94979fe0.js";import"./Vendor.d946ee87.js";import"./UserDeleteItemParameterHolder.5d816aba.js";const K={name:"ItemDetailUserListHorizontal",components:{PsCard:H,PsLabel:V,PsButton:D,PsIcon:z,Rating:B,PsLabelCaption:O,PsRouteLink:R,PsLoadingDialog:A},props:{user:{type:j},onClick:Function,storeName:{type:String,default:""}},setup(o){const f=G("detail"),t=M().getLoginUserId(),m=U(),p=new T,w=new k().getFollowerUsers(),c=new k().getFollowingUsers();w.loginUserId=t,c.loginUserId=t;const a=q(o.storeName),u=E(o.storeName);async function _(y){t&&t!=W.NO_LOGIN_USER?(m.value.openModal(),y.isFollowed=="1"?m.value.message=h("other_profile__removing_user_from_follower_list"):m.value.message=h("other_profile__adding_user_to_follower_list"),p.userId=t,p.followedUserId=y.userId,await u.postUserFollow(p),S(),m.value.closeModal()):P.get(route("login"))}async function S(){o.storeName=="profile-follower"?await a.refleshUserFollowerFollowingList(t,w):o.storeName=="profile-following"?await a.refleshUserFollowerFollowingList(t,c):o.storeName=="top_rated_seller"?await a.refleshTopRatedSellerList(t):o.storeName=="userSearch"?await u.refleshUserSearchList(t,u.userparamHolder):await f.loadItem(o.storeName,t)}return{userListStore:a,followClick:_,LoginUserId:t,psloading:m}}},Q={class:"shadow-sm relative border border-feSecondary-50 dark:border-feSecondary-800 rounded-lg flex flex-col gap-4 p-4"},X={class:"flex gap-4"},Y={class:"w-20 h-20 relative cursor-pointer"},Z={alt:"Placeholder",width:"15px",height:"10px",class:"w-full h-full rounded-full object-cover"},$={key:0,class:"w-8 h-8 bg-feInfo-500 rounded-full p-1 absolute bottom-0 right-0"},ee={class:"grow flex flex-col gap-2 justify-center truncate"},oe={class:"flex items-center justify-start w-full mx-auto"},te={class:"flex items-center gap-1 col-span-1 md:col-span-2 lg:col-span-1"},re={class:"h-14"};function se(o,f,e,t,m,p){const w=d("ps-icon"),c=d("ps-route-link"),a=d("ps-label"),u=d("rating"),_=d("ps-button"),S=d("ps-card"),y=d("ps-loading-dialog"),v=F("lazy");return g(),x(L,null,[r(S,{class:"flex w-full bg-feAchromatic-50 dark:bg-feSecondary-800 flex-col lg:rounded-lg shadow-sm",enabledHover:!0},{default:s(()=>[n("div",Q,[n("div",X,[r(c,{to:{name:"fe_other_profile",params:{userId:e.user.userId}}},{default:s(()=>[n("div",Y,[I(n("img",Z,null,512),[[v,{src:o.$page.props.thumb1xUrl+"/"+e.user.userCoverPhoto,loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_profile.png"}]]),e.user.isVerifybluemark=="1"?(g(),x("div",$,[r(w,{name:"bluemark",textColor:"text-feSecondary-50",w:"24",h:"24"})])):N("",!0)])]),_:1},8,["to"]),n("div",ee,[r(c,{to:{name:"fe_other_profile",params:{userId:e.user.userId}},class:"cursor-pointer"},{default:s(()=>[r(a,{textColor:"text-lg font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[i(l(e.user.userName.length>17?e.user.userName.slice(0,17)+"...":e.user.userName),1)]),_:1})]),_:1},8,["to"]),r(c,{to:{name:"fe_review_list",query:{user_id:e.user.userId}}},{default:s(()=>[n("div",oe,[r(u,{rating:e.user?Number(e.user.overallRating):0,maxStars:5,iconColor:"text-feWarning-500 dark:text-feWarning-500",size:"1x"},null,8,["rating"]),r(a,{textColor:"text-sm font-medium text-feSecondary-500 dark:text-feSecondary-50"},{default:s(()=>[i(l("(")+l(e.user.ratingCount)+l(")"),1)]),_:1})])]),_:1},8,["to"]),n("div",te,[r(a,{textColor:"text-sm mr-1 font-medium font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[i(l(e.user?e.user.followerCount:"0"),1)]),_:1}),r(a,{textColor:"text-sm mr-1 font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[i(l(o.$t("profile__followers")),1)]),_:1}),r(a,{textColor:"text-sm mr-1 font-medium text-feSecondary-200 dark:text-feSecondary-50"},{default:s(()=>[i(l(o.$t("|")),1)]),_:1}),r(a,{textColor:"text-sm mr-1 font-medium font-semibold text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[i(l(e.user?e.user.activeItemCount:"0"),1)]),_:1}),r(a,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-50"},{default:s(()=>[i(l(o.$t("user__item")),1)]),_:1})]),n("div",re,[e.user.userId==t.LoginUserId?(g(),b(_,{key:0,border:"border border-feSecondary-200 dark:border-feSecondary-600",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200",class:"'w-full absolute bottom-4 right-4 left-4",disabled:""},{default:s(()=>[i(l(o.$t("other_profile__follow")),1)]),_:1})):e.user.isFollowed=="0"?(g(),b(_,{key:1,border:"border border-feSecondary-200 dark:border-feSecondary-600",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200",class:"'w-full absolute bottom-4 right-4 left-4",onClick:f[0]||(f[0]=C=>t.LoginUserId==e.user.userId?"":t.followClick(e.user))},{default:s(()=>[i(l(o.$t("other_profile__follow")),1)]),_:1})):(g(),b(_,{key:2,border:"border border-feSecondary-200 dark:border-feSecondary-600",colors:"bg-feAchromatic-50 text-feSecondary-800 dark:bg-feSecondary-800 dark:text-feSecondary-200",class:"'w-full absolute bottom-4 right-4 left-4",onClick:f[1]||(f[1]=C=>t.followClick(e.user))},{default:s(()=>[i(l(o.$t("other_profile__following")),1)]),_:1}))])])])])]),_:1}),r(y,{ref:"psloading",isClickOut:!1},null,512)],64)}var Te=J(K,[["render",se]]);export{Te as default};
