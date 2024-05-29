import{S as U,a as P}from"./vue-splide.esm.01499f7d.js";/* empty css                   */import{D as $}from"./DefaultPhoto.cc755f93.js";import j from"./GalleryHorizontalItem.dca55b1b.js";import B from"./PsGalleryModal.1b0ad2eb.js";import L from"./PsIcon.c404b5b9.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{d as M,i as u,j as O,o as t,c as i,a as s,b as d,w as m,f as b,g as w,F as I,s as C,m as f,r as g,C as V,W as z,X as A}from"./app.72d9fe45.js";import"./PsObject.a17ef38f.js";import"./PsModal.49a87bcd.js";import"./vue-neat-modal.d239f4e3.js";import"./PsLine.c7f2ab42.js";import"./PsLabel.dd7b9156.js";import"./PsButton.81d0ce1f.js";const D=M({name:"ThumbnailsExample",components:{Splide:U,SplideSlide:P,GalleryHorizontalItem:j,PsGalleryModal:B,PsIcon:L},props:{galleryList:{type:Array,default:()=>[$]},video:{type:Array,default:()=>[$]},isLoading:{type:Boolean,default:!0}},setup(e){const h=u(),_=u(),S={height:"400px",type:"loop",perPage:1,perMove:1,gap:"2px",pagination:!0,focus:"center",arrows:!1},k={height:"300px",direction:"ttb",type:"slide",rewind:!0,gap:"8px",pagination:!1,fixedWidth:68,fixedHeight:68,cover:!0,focus:"center",isNavigation:!0,updateOnMove:!0,arrows:!1};let a=0,r=null;const p=u(),c=u();function v(l,o,n,y){a++,a===1?r=setTimeout(()=>{a=0},250):a===2&&(clearTimeout(r),a=0,p.value.openModal(l,o,n,y))}return O(()=>{var o,n;const l=(o=_.value)==null?void 0:o.splide;l&&((n=h.value)==null||n.sync(l))}),{main:h,thumbs:_,mainOptions:S,thumbsOptions:k,openImage:v,ps_gallery_modal:p,gallery_list:c}}}),G=e=>(z("data-v-4b4c2fda"),e=e(),A(),e),N={class:"wrapper relative rounded-lg overflow-hidden"},E={class:"",dir:"ltr"},F=G(()=>s("div",{class:"w-full h-full flex flex-col justify-center items-center gap-8 absolute bg-feSecondary-50 dark:bg-feSecondary-800"},[s("span",{class:"loader"}),s("span",{class:"text-2xl text-gray-500 font-semibold"},"Loading")],-1)),H={class:"w-full h-full relative bg-feSecondary-50"},W=["onClick"],X={key:1,class:"h-full w-full mx-auto object-cover overflow-hidden"},q=["onClick"],J={class:"absolute bottom-4 left-4"},K={class:"w-full h-full"},Q={key:0,class:"w-full h-full object-cover rounded-lg"},R={key:1,class:"w-full h-full object-cover rounded-lg"},Y={key:2,class:"w-full h-full absolute top-0 left-0 flex justify-center items-center"};function Z(e,h,_,S,k,a){const r=g("SplideSlide"),p=g("ps-icon"),c=g("Splide"),v=g("ps-gallery-modal"),l=V("lazy");return t(),i(I,null,[s("div",N,[s("div",E,[d(c,{class:"z-0","aria-labelledby":"thumbnail-example-heading",options:e.mainOptions,ref:"main"},{default:m(()=>[e.galleryList==null||e.video==null?(t(),b(r,{key:0},{default:m(()=>[F]),_:1})):w("",!0),(t(!0),i(I,null,C(e.galleryList,(o,n)=>(t(),b(r,{key:n},{default:m(()=>[s("div",H,[o.imgType=="item"?f((t(),i("img",{key:0,class:"h-full w-full mx-auto object-cover overflow-hidden",onClick:y=>e.openImage(o.imgType,o.imgPath,o.imgId,e.video)},null,8,W)),[[l,{src:e.$page.props.uploadUrl+"/"+o.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]):f((t(),i("img",X,null,512)),[[l,{src:e.$page.props.uploadUrl+"/"+o.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),o.imgType=="item-video-icon"?(t(),i("div",{key:2,class:"w-full h-full absolute top-0 left-0 flex justify-center items-center",onClick:y=>e.openImage(o.imgType,e.video.filter(T=>T.imgType=="item-video").pop().imgPath,o.imgId,e.video)},[d(p,{textColor:"text-feAchromatic-50",name:"play",w:"96",h:"96",viewBox:"0 0 96 96"})],8,q)):w("",!0)])]),_:2},1024))),128))]),_:1},8,["options"])]),s("div",J,[d(c,{"aria-label":"The carousel with thumbnails. Selecting a thumbnail will change the main carousel",options:e.thumbsOptions,ref:"thumbs"},{default:m(()=>[(t(!0),i(I,null,C(e.galleryList,o=>(t(),b(r,{key:o.imgId},{default:m(()=>[s("div",K,[o.imgType!="item-video-icon"?f((t(),i("img",Q,null,512)),[[l,{src:e.$page.props.uploadUrl+"/"+o.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]):f((t(),i("img",R,null,512)),[[l,{src:e.$page.props.uploadUrl+"/"+o.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),o.imgType=="item-video-icon"?(t(),i("div",Y,[d(p,{textColor:"text-feAchromatic-50",name:"play",w:"28",h:"28",viewBox:"0 0 96 96"})])):w("",!0)])]),_:2},1024))),128))]),_:1},8,["options"])])]),d(v,{ref:"ps_gallery_modal"},null,512)],64)}var fe=x(D,[["render",Z],["__scopeId","data-v-4b4c2fda"]]);export{fe as default};
