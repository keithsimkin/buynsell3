import s from"./PsLabel.dd7b9156.js";import{C as l}from"./Category.7c65464b.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as c,o as i,c as d,a as o,m as r,b as m,w as p,q as g,t as f,r as h,C as u}from"./app.72d9fe45.js";import"./DefaultIcon.e76b39a5.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";const b=c({name:"CategoryHorizontalItem",props:{category:{type:l}},components:{PsLabel:s}}),y={class:"text-center cursor-pointer w-full overflow-hidden bg-feAchromatic-50 dark:bg-feSecondary-800 rounded-x sm:rounded-xl lg:rounded-lg"},_={class:"h-44 relative flex justify-center"},v={class:"transform transition duration-500 hover:scale-110 w-full h-full object-cover",alt:""},w={class:"w-14 h-14 absolute -bottom-7 bg-feAchromatic-50 p-3 items-center rounded-full border-2 border-white dark:bg-feSecondary-800"},C={alt:"Placeholder",class:"w-7 h-7 transform transition duration-500 hover:scale-110 object-contain"};function $(e,x,N,I,P,k){const a=h("ps-label"),t=u("lazy");return i(),d("div",y,[o("div",_,[r(o("img",v,null,512),[[t,{src:e.$page.props.thumb2xUrl+"/"+e.category.defaultPhoto.imgPath,error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),o("div",w,[r(o("img",C,null,512),[[t,{src:e.$page.props.thumb2xUrl+"/"+e.category.defaultIcon.imgPath,error:e.$page.props.sysImageUrl+"/default_photo.png"}]])])]),m(a,{class:"h-20 pt-9 lg:text-base sm:text-sm text-base font-medium",textColor:""},{default:p(()=>[g(f(e.category.catName.length>20?e.category.catName.slice(0,20)+"...":e.category.catName),1)]),_:1})])}var A=n(b,[["render",$]]);export{A as default};