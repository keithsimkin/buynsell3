import{i as a,m as i,v as r,o as c,c as l,a as s,b as m,l as p,n as d,r as u}from"./app.72d9fe45.js";import{P as f}from"./PsIcon1.56bc2bff.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const _={name:"PsBannerIcon",components:{PsIcon1:f},props:{theme:{type:String,default:"bg-indigo-500"},iconName:{type:String,default:"badge"},iconColor:{type:String,default:"#4B5563"},duration:{type:Number,default:3e3},visible:{type:Boolean},uicomponent:{type:Boolean}},data(){const e=a(this.visible);return this.uicomponent?e.value=!0:this.visible&&(setTimeout(()=>{e.value=!1},this.duration),this.$emit("update:visible",!1)),{openBannerBox:e}}},v={class:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 flex items-center justify-center"},x={class:"sm:text-xs text-md"};function B(e,b,t,y,o,g){const n=u("ps-icon-1");return i((c(),l("div",{class:d([t.theme])},[s("div",v,[m(n,{name:t.iconName,w:"20",h:"20",class:"me-2",theme:t.iconColor},null,8,["name","theme"]),s("div",x,[p(e.$slots,"default")])])],2)),[[r,this.visible&&o.openBannerBox]])}var w=h(_,[["render",B]]);export{w as P};
