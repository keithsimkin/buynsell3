import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as s,a as o}from"./app.72d9fe45.js";const u={name:"Text",props:{language_string:{type:String,default:""},placeholder:{type:String,default:"Please enter "}},emits:["update:language_string"]},d={class:"me-2"},p=["value","placeholder"];function i(a,e,t,c,g,_){return l(),s("div",d,[o("input",{type:"text",value:t.language_string,onInput:e[0]||(e[0]=n=>a.$emit("update:language_string",n.target.value)),class:"w-60 rounded",placeholder:t.placeholder},null,40,p)])}var h=r(u,[["render",i]]);export{h as default};
