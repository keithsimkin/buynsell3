import m from"./PsIcon.c404b5b9.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,F as d,s as f,n,f as l,r as _}from"./app.72d9fe45.js";const p={name:"RatingSelected",components:{PsIcon:m},props:{grade:{type:Number,default:0},maxStars:{type:Number,default:0},hasCounter:{type:Boolean,default:!0},colors:{type:String,default:"text-fePrimary-500 dark:text-feAccent-500"}},data(){return{stars:this.grade}},methods:{rate(e){typeof e=="number"&&e<=this.maxStars&&e>=0&&(this.stars=this.stars===e?e-1:e)},getRating(){return this.stars}}},h={class:"flex items-center"},k=["onClick"];function x(e,y,a,g,o,i){const c=_("ps-icon");return t(),r("div",h,[(t(!0),r(d,null,f(a.maxStars,s=>(t(),r("div",{onClick:v=>i.rate(s),class:n([{active:s<=o.stars},"star me-1"]),key:s},[s<=o.stars?(t(),l(c,{key:0,name:"starFill",class:n(a.colors),w:"28",h:"28"},null,8,["class"])):(t(),l(c,{key:1,name:"starOutline",class:n(a.colors),w:"28",h:"28"},null,8,["class"]))],10,k))),128))])}var b=u(p,[["render",x]]);export{b as default};