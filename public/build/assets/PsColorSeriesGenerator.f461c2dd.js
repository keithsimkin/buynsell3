import{i as E,r as b,o as D,c as y,a as g,b as f,w as A,q as x,t as $,H as M,F as P,s as z,n as O,E as T}from"./app.72d9fe45.js";import{P as I}from"./PsInputGroup.38b0d887.js";import{P as j}from"./PsIcon.8d64a589.js";import{P as G}from"./PsLabel.9b145d71.js";import U from"./PsColorPickerModal.8c30d45c.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";function h(e,n,r){return Math.max(n,Math.min(e,r))}function K(e,n){var r;const t={rad:180/Math.PI,grad:.9,turn:360};return e*((r=t[n.toLowerCase()])!==null&&r!==void 0?r:1)}function H(e){return(e%360+360)%360}function Q(e){var n,r;const t=parseFloat(e),l=(r=(n=e.match(/deg|rad|grad|turn/i))===null||n===void 0?void 0:n[0])!==null&&r!==void 0?r:"deg";return H(K(t,l))}function k(e){return new RegExp(`^${e.source}$`,e.flags)}function B(e){return e.slice(1).filter(n=>n!==void 0)}const L=/[+-]?(?=\.\d|\d)\d*(?:\.\d+)?(?:[eE][+-]?\d+)?/,S=/(?=[,\s])\s*(?:,\s*)?/,N=/\s*[,\/]\s*/,v=L.source,R=S.source,W=N.source,X=new RegExp(`hsla?\\(\\s*(${v}(?:deg|rad|grad|turn)?)${R}(${v})%${R}(${v})%(?:${W}(${v}%?))?\\s*\\)`,"i");function Y(e){const n=k(X).exec(e);return n?B(n):null}const Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",goldenrod:"#DAA520",gold:"#FFD700",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavenderblush:"#FFF0F5",lavender:"#E6E6FA",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};function ee(e){return Z[e.toLowerCase()]}const m=/[0-9a-fA-F]/.source,ne=new RegExp(`#(${m}{2})(${m}{2})(${m}{2})(${m}{2})?`),re=new RegExp(`#(${m})(${m})(${m})(${m})?`);function te(e){var n;const r=(n=k(ne).exec(e))!==null&&n!==void 0?n:k(re).exec(e);return r?B(r):null}const C=L.source,q=S.source,ae=N.source,oe=new RegExp(`rgba?\\(\\s*(${C}%?)${q}(${C}%?)${q}(${C}%?)(?:${ae}(${C}%?))?\\s*\\)`,"i");function le(e){const n=k(oe).exec(e);return n?B(n):null}function se(e){const{h:n,s:r,l:t,a:l}=V(e),u=n||0,c=r/100,F=t/100;function a(o){const s=(o+u/30)%12,d=c*Math.min(F,1-F);return F-d*Math.max(-1,Math.min(s-3,9-s,1))}return{r:a(0)*255,g:a(8)*255,b:a(4)*255,a:l}}function _(e){return{r:h(e.r,0,255),g:h(e.g,0,255),b:h(e.b,0,255),a:h(e.a,0,1)}}function ie(e){var n;const r=e.map(l=>(l.length===1&&(l=`${l}${l}`),parseInt(l,16))),t=((n=r[3])!==null&&n!==void 0?n:255)/255;return{r:r[0],g:r[1],b:r[2],a:t}}function ue(e){var n;const r=e.map((t,l)=>{let u=parseFloat(t);return t.indexOf("%")>-1&&(u*=.01,l<3&&(u*=255)),u});return _({r:r[0],g:r[1],b:r[2],a:(n=r[3])!==null&&n!==void 0?n:1})}function Fe(e){if(e=e.trim(),e.toLowerCase()==="transparent")return{r:0,g:0,b:0,a:0};const n=ee(e);n&&(e=n);let r;return(r=te(e))!==null?ie(r):(r=le(e))!==null?ue(r):null}function ce(e){const{r:n,g:r,b:t,a:l}=_(e),u=n/255,c=r/255,F=t/255,a=Math.max(u,c,F),o=Math.min(u,c,F),s=a-o,d=(o+a)/2;let p=NaN,w=0;if(s!==0){switch(w=(a-d)/Math.min(d,1-d),a){case u:p=(c-F)/s+(c<F?6:0);break;case c:p=(F-u)/s+2;break;case F:p=(u-c)/s+4}p*=60}return{h:p,s:w*100,l:d*100,a:l}}function de(e){return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.l=="number"&&typeof e.a=="number"}function V(e){return{h:H(e.h),s:h(e.s,0,100),l:h(e.l,0,100),a:h(e.a,0,1)}}function me(e){var n,r;const t=e.map(u=>parseFloat(u));let l=(n=t[3])!==null&&n!==void 0?n:1;return((r=e[3])===null||r===void 0?void 0:r.indexOf("%"))>-1&&(l*=.01),V({h:Q(e[0]),s:t[1],l:t[2],a:l})}function ge(e){const n=Fe(e);return n?ce(n):null}function he(e){e=e.trim();let n;return(n=Y(e))!==null?me(n):null}function pe(e){var n;const r=(n=he(e))!==null&&n!==void 0?n:ge(e);if(r===null)throw new Error("Invalid color string");return r}function fe(e){return{r:Math.round(e.r),g:Math.round(e.g),b:Math.round(e.b),a:e.a}}function be(e){const r=(((Math.round(e.r)&255)<<16)+((Math.round(e.g)&255)<<8)+(Math.round(e.b)&255)).toString(16).toUpperCase();return`#${"000000".substring(r.length)}${r}`}function ve(e){return e=fe(e),`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`}function Ce(e){const n=de(e)?se(e):_(e);return n.a===1?be(n):ve(n)}const ke=(e,n)=>{if(typeof n!="number")return e;const r=pe(e),t=Math.min(Math.max(n,0),100);return Ce(Object.assign(Object.assign({},r),{l:t}))};var i=ke;const Ee={name:"PsColorSeriesGenerator",components:{PsInputGroup:I,PsIcon:j,PsLabel:G,PsColorPickerModal:U},props:["title","activeColor"],setup(e,{emit:n}){const r=E(),t=E(e.activeColor),l=E(e.activeColor[5].value);function u(a){l.value=a;let o=!1;(t.value[0].title=="achromatic"||t.value[0].title=="feAchromatic")&&(o=!0),t.value[0].value=o?"#FFFFFF":i(a,95),t.value[1].value=o?i(a,92):i(a,88),t.value[2].value=o?i(a,84):i(a,83),t.value[3].value=o?i(a,72):i(a,78),t.value[4].value=o?i(a,60):i(a,70),t.value[5].value=a,t.value[6].value=o?i(a,40):i(a,36),t.value[7].value=o?i(a,21):i(a,28),t.value[8].value=o?i(a,16):i(a,22),t.value[9].value=o?i(a,7):i(a,17),n("generated-color",t.value)}function c(a){console.log(a),r.value.openModal(a.value,o=>{const s=t.value.indexOf(a);t.value[s].value=o,n("generated-color",t.value),T({id:a.id,value:o,_method:"put"}).post(route("color.update",a.id))},()=>{})}function F(a){console.log(a),r.value.openModal(a,o=>{l.value=o},()=>{})}return{ps_color_picker_modal:r,oldColors:t,brandColor:l,generateColor:u,colorClick:c,primaryColorClick:F}}},De={class:"flex items-center gap-3 mt-6"},ye={class:"flex mt-3"},Ae=["onClick"];function Be(e,n,r,t,l,u){const c=b("ps-label"),F=b("ps-icon"),a=b("ps-input-group"),o=b("ps-color-picker-modal");return D(),y(P,null,[g("div",null,[f(c,{textColor:"text-base font-semibold text-secondary-800"},{default:A(()=>[x($(r.title),1)]),_:1}),g("div",De,[g("span",{class:"block w-9 h-9 rounded-full cursor-pointer",style:M({background:t.brandColor}),onClick:n[0]||(n[0]=s=>t.primaryColorClick(t.brandColor))},null,4),g("div",null,[f(a,{class:"h-8 w-60",value:t.brandColor,"onUpdate:value":n[2]||(n[2]=s=>t.brandColor=s),placeholder:e.$t("#123456"),theme:"rounded text-secondary-500",background:"bg-white dark:bg-blue-100 rounded border border-gray-200 shadow-sm "},{rightButton:A(()=>[g("div",{class:"px-3 py-2 border-l cursor-pointer",onClick:n[1]||(n[1]=s=>t.generateColor(t.brandColor))},[f(F,{class:"text-secondary-500",name:"re-new",w:"16",h:"16",viewBox:"0 0 16 16"})])]),_:1},8,["value","placeholder"])])]),g("div",ye,[(D(!0),y(P,null,z(t.oldColors,(s,d)=>(D(),y("div",{class:"cursor-pointer",key:d},[g("span",{class:O(["block w-12 h-12",s.key.split("_")[1]=="500"||s.key.split("-")[1]=="500"?"rounded-full":""]),style:M({background:s.value}),onClick:p=>t.colorClick(s)},null,14,Ae),f(c,{textColor:"text-center mt-2"},{default:A(()=>[x($(s.key.split("-").length>1?s.key.split("-")[1]:s.key.split("_")[1]),1)]),_:2},1024)]))),128))])]),f(o,{ref:"ps_color_picker_modal"},null,512)],64)}var Re=J(Ee,[["render",Be]]);export{Re as P};