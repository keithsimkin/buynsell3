import k from"./PsImageModal.42dac1c3.js";import{D as w}from"./DefaultPhoto.cc755f93.js";import y from"./PsIcon.c404b5b9.js";import{P as v}from"./PsUtils.eb7a8002.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{d as b,i as g,o as n,f as _,w as A,a as l,b as s,c as h,m as p,r as u,C}from"./app.72d9fe45.js";import"./vue-neat-modal.d239f4e3.js";import"./PsObject.a17ef38f.js";const $=b({name:"GalleryDetailHorizontalSwiper",components:{PsImageModal:k,PsIcon:y},setup(){const e=g();let t=g(new w),r=new Array;function c(o,a){t.value=o,r=a,v.log(a),e.value.toggle(!0)}function d(){for(let o=0;o<r.length;o++)if(r[o].imgId==t.value.imgId)if(o==r.length-1){t.value=r[0];break}else{t.value=r[o+1];break}}function m(){for(let o=0;o<r.length;o++)if(r[o].imgId==t.value.imgId)if(o==0){t.value=r[r.length-1];break}else{t.value=r[o-1];break}}return{psmodal:e,openModal:c,gallery:t,galleryList:r,rightArrowClicked:d,leftArrowClicked:m}}}),I={class:"w-screem flex flex-col"},P={class:"flex flex-row justify-between"},S=l("div",{class:"flex-grow"},null,-1),U={class:"flex flex-row justify-between"},j={class:"flex flex-grow max-w-5/6"},D={key:0,class:"w-full h-auto"},z={width:"320",height:"240",class:"w-full h-112 mt-0 lg:mt-2 object-contain object-contains",controls:""},B=["src"],G=["src"],H={alt:"Placeholder",width:"300px",height:"400px",class:"w-full h-112 overflow:hidden object-contain"},M={key:1,alt:"Placeholder",width:"300px",height:"400px",class:"w-full h-112 overflow:hidden object-contain"};function N(e,t,r,c,d,m){const o=u("ps-icon"),a=u("ps-image-modal"),f=C("lazy");return n(),_(a,{ref:"psmodal",isClickOut:!1,class:"z-50 content-center mx-auto"},{body:A(()=>[l("div",I,[l("div",P,[S,s(o,{onClick:t[0]||(t[0]=i=>e.psmodal.toggle(!1)),name:"close",class:"text-feSecondary-700 dark:text-feAchromatic-500",w:"30",h:"30"})]),l("div",U,[l("div",{class:"my-auto",onClick:t[1]||(t[1]=(...i)=>e.leftArrowClicked&&e.leftArrowClicked(...i))},[s(o,{name:"leftArrow",class:"block sm:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feAchromatic-500",w:"30",h:"30"}),s(o,{name:"leftArrow",class:"hidden sm:block lg:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feAchromatic-500",w:"40",h:"40"}),s(o,{name:"leftArrow",class:"hidden lg:block stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feAchromatic-500",w:"50",h:"50"})]),l("div",j,[e.gallery.imgType=="item-video"?(n(),h("div",D,[l("video",z,[l("source",{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,type:"video/mp4"},null,8,B),l("source",{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,type:"video/ogg"},null,8,G),p(l("img",H,null,512),[[f,{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])])])):p((n(),h("img",M,null,512)),[[f,{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]),l("div",{class:"my-auto cursor-pointer",onClick:t[2]||(t[2]=(...i)=>e.rightArrowClicked&&e.rightArrowClicked(...i))},[s(o,{name:"rightArrow",class:"block sm:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feAchromatic-500",w:"30",h:"30"}),s(o,{name:"rightArrow",class:"hidden sm:block lg:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feAchromatic-500",w:"40",h:"40"}),s(o,{name:"rightArrow",class:"hidden lg:block stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feAchromatic-500",w:"50",h:"50"})])])])]),_:1},512)}var L=x($,[["render",N]]);export{L as default};
