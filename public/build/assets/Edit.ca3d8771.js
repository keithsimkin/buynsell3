import{aJ as te,bC as le,d as ae,Z as oe,E as se,z as H,o,c as s,b as l,w as r,a as n,q as i,t as d,F as g,s as k,g as u,m as b,v,I as O,f,ae as j,r as y,C as re}from"./app.72d9fe45.js";import{P as ne}from"./PsLayout.847d3bb7.js";import{P as h}from"./ps_constants.ea9d0b33.js";import ie from"./CheckBox.92a2a527.js";import{P as de}from"./PsRadioValue.c8745a39.js";import{D as me}from"./DatePicker.af815a5d.js";import{P as pe}from"./PsInput.afea411a.js";import{P as ue}from"./PsLabel.9b145d71.js";import{P as be}from"./PsButton.75e226c0.js";import{P as ye}from"./PsTextarea.b6da5576.js";import{a as ce,d as ge}from"./PsDangerDialog.4a7cc4cb.js";import{P as ve}from"./PsLabelHeader5.f8242e33.js";import{P as ke}from"./PsBreadcrumb2.c233a04a.js";import{P as _e}from"./PsDropdown.dd6513b3.js";import{P as fe}from"./PsDropdownSelect.2cfdee10.js";import{P as $e}from"./PsCard.bbe9c0c8.js";import{P as we}from"./PsLabelCaption.0e118b2b.js";import{P as Ce}from"./PsVideoUpload.2fee6630.js";import{P as he}from"./PsLabelTitle3.dae97f2a.js";import{P as Ue}from"./PsIcon.8d64a589.js";import{P as Pe}from"./PsLoading.1f14f5af.js";import{P as De}from"./PsCheckboxValue.4ec39ca8.js";import{a as Ee,P as Ve}from"./PsActionModal.f08d8887.js";import{P as q}from"./PsImageUpload.61e8f8c2.js";import{_ as ze}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";import"./main.09d396a4.js";import"./index.bb4ebfff.js";import"./PsDraggable.2c92160e.js";import"./PsLabelHeader4.cfe9ad61.js";const J=te(()=>le(()=>import("./GoogleMapPinPicker.8b0d12e9.js"),["assets/GoogleMapPinPicker.8b0d12e9.js","assets/index.448b1588.js","assets/app.72d9fe45.js","assets/app.1665158f.css","assets/plugin-vue_export-helper.21dcd24c.js"])),Ie=ae({name:"Edit",components:{Head:oe,CheckBox:ie,DatePicker:me,PsConst:h,PsInput:pe,PsRadioValue:de,PsLabel:ue,PsButton:be,PsTextarea:ye,PsLabelHeader6:ce,PsLabelHeader5:ve,PsDropdown:_e,PsDropdownSelect:fe,PsCard:$e,PsBreadcrumb2:ke,PsLabelCaption:we,PsImageUpload:q,GoogleMapPinPicker:J,PsIcon:Ue,PsLoading:Pe,PsCheckboxValue:De,PsActionModal:Ee,PsImageIconModal:Ve,PsDangerDialog:ge,PsImageUpload:q,GoogleMapPinPicker:J,PsVideoUpload:Ce,PsLabelTitle3:he},layout:ne,props:["errors","coreFieldFilterSettings","item","customizeHeaders","customizeDetails","selected_price_type"],setup(t){function p(I){if(t.selected_price_type==h.PRICE_RANGE){const L=parseFloat(I),U=parseInt(L);return U>5?"$".repeat(5):U<1?"$".repeat(1):"$".repeat(U)}if(t.selected_price_type==h.NORMAL_PRICE||t.selected_price_type==h.NO_PRICE)return I}let T=se({id:t.item.id,title:t.item.title,original_price:t.item.original_price,price:t.item.price,location_city_id:t.item.city?t.item.city.name:"",location_township_id:t.item.township?t.item.township.name:"",currency_id:t.item.currency?t.item.currency.currency_short_form:"",category_id:t.item.category?t.item.category.name:"",subcategory_id:t.item.subcategory?t.item.subcategory.name:"",lat:t.item.lat,lng:t.item.lng,ordering:t.item.ordering,description:t.item.description,search_tag:t.item.search_tag,status:t.item.status==1,cover:"",video:"",video_icon:"",is_available:!0,is_discount:!1,product_relation:{},_method:"put"});if(t.selected_price_type==h.PRICE_RANGE)var A=p(T.price);return{form:T,checkPriceFormat:p,priceRange:A,PsConst:h}},computed:{breadcrumb(){return[{label:H("core__be_dashboard_label"),url:route("admin.index")},{label:H("item_report_module"),url:route("item_report.index")},{label:H("core__be_item_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("item_report.index"))}}}),Be={class:"rounded-xl"},Se={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Ke={class:"px-4 pt-6 dark:bg-backgroundDark"},Te={class:"grid xxl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"},Re={class:"grid gap-6"},Fe={key:0,class:"text-red-800 font-medium ms-1"},He={key:0,class:"grid gap-6"},Ae={key:0,class:"text-red-800 font-medium ms-1"},Le={key:0,class:"text-red-800 font-medium ms-1"},Ne={key:0,class:"text-red-800 font-medium ms-1"},Me={key:1},Ge={key:0,class:"text-red-800 font-medium ms-1"},Oe={key:0,class:"text-red-800 font-medium ms-1"},je={key:0,class:"text-red-800 font-medium ms-1"},qe={key:0,class:"text-red-800 font-medium ms-1"},Je={key:0,class:"text-red-800 font-medium ms-1"},Ze={key:0,class:"text-red-800 font-medium ms-1"},Qe={key:0,class:"text-red-800 font-medium ms-1"},We={key:0,class:"md:me-6 sm:me-0"},Xe={class:"text-red-800 font-medium ms-1"},Ye={key:1,class:"md:me-6 sm:me-0"},xe={class:"text-red-800 font-medium ms-1"},et={key:2,class:"md:me-6 sm:me-0"},tt={class:"text-red-800 font-medium ms-1"},lt={class:"flex flex-row"},at={key:3,class:"md:me-6 sm:me-0"},ot={class:"flex flex-row"},st={class:"me-2 flex"},rt=["onUpdate:modelValue","onChange"],nt={key:4,class:"md:me-6 sm:me-0"},it={class:"text-red-800 font-medium ms-1"},dt={key:5,class:"md:me-6 sm:me-0"},mt={class:"text-red-800 font-medium ms-1"},pt={key:6,class:"md:me-6 sm:me-0"},ut={class:"text-red-800 font-medium ms-1"},bt={key:7,class:"md:me-6 sm:me-0"},yt={class:"text-red-800 font-medium ms-1"},ct={class:"flex flex-row"},gt={key:8,class:"md:me-6 sm:me-0"},vt={class:"text-red-800 font-medium ms-1"},kt={key:0,class:"flex items-end pt-4"},_t=["alt"],ft={key:9,class:"md:me-6 sm:me-0"},$t={class:"text-red-800 font-medium ms-1"},wt=["onUpdate:modelValue"],Ct={key:10,class:"md:me-6 sm:me-0"},ht={class:"text-red-800 font-medium ms-1"},Ut=n("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Pt={key:1,class:"flex items-end pt-4"},Dt=["alt"],Et=n("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Vt={key:1,class:"flex items-end pt-4"},zt={class:"w-96 h-48",controls:""},It=["src"],Bt=["src"],St={key:1,class:"flex items-end pt-4"},Kt=["alt"],Tt={class:"w-full ms-4"},Rt={class:"mb-6"},Ft={key:0,class:"text-red-800 font-medium ms-1"},Ht={key:0,class:"md:me-6 sm:me-0"},At={class:"text-red-800 font-medium ms-1"},Lt={key:1,class:"md:me-6 sm:me-0"},Nt={class:"text-red-800 font-medium ms-1"},Mt={key:2,class:"md:me-6 sm:me-0"},Gt={class:"text-red-800 font-medium ms-1"},Ot={class:"flex flex-row"},jt={key:3,class:"md:me-6 sm:me-0"},qt={class:"flex flex-row"},Jt={class:"me-2 flex"},Zt=["onUpdate:modelValue","onChange"],Qt={key:4,class:"md:me-6 sm:me-0"},Wt={class:"text-red-800 font-medium ms-1"},Xt={key:5,class:"md:me-6 sm:me-0"},Yt={class:"text-red-800 font-medium ms-1"},xt={key:6,class:"md:me-6 sm:me-0"},el={class:"text-red-800 font-medium ms-1"},tl={key:7,class:"md:me-6 sm:me-0"},ll={class:"text-red-800 font-medium ms-1"},al={class:"flex flex-row"},ol={key:8,class:"md:me-6 sm:me-0"},sl={class:"text-red-800 font-medium ms-1"},rl={key:0,class:"flex items-end pt-4"},nl=["alt"],il={key:9,class:"md:me-6 sm:me-0"},dl={class:"text-red-800 font-medium ms-1"},ml=["onUpdate:modelValue"],pl={key:10,class:"md:me-6 sm:me-0"},ul={class:"text-red-800 font-medium ms-1"},bl={class:"mt-6 mb-6"},yl={key:0,class:"text-red-800 font-medium ms-1"},cl={key:0,class:"text-red-800 font-medium ms-1"},gl={class:"mb-2.5 flex flex-row justify-end"};function vl(t,p,T,A,I,L){const U=y("Head"),Z=y("ps-breadcrumb-2"),Q=y("ps-label-header5"),N=y("ps-label-header-6"),m=y("ps-label"),_=y("ps-input"),$=y("ps-dropdown-select"),w=y("ps-dropdown"),R=y("ps-textarea"),M=y("ps-radio-value"),P=y("ps-label-caption"),B=y("date-picker"),G=y("CheckBox"),D=y("ps-icon"),C=y("ps-button"),E=y("ps-image-icon-modal"),V=y("ps-action-modal"),z=y("ps-danger-dialog"),S=y("ps-image-upload"),W=y("ps-checkbox-value"),F=y("ps-label-title-3"),X=y("ps-video-upload"),Y=y("google-map-pin-picker"),x=y("ps-card"),ee=y("ps-layout"),K=re("lazy");return o(),s(g,null,[l(U,{title:t.$t("core__be_item_report_detail")},null,8,["title"]),l(ee,null,{default:r(()=>[l(Z,{items:t.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l(x,{class:"w-full h-auto"},{default:r(()=>[n("div",Be,[n("div",Se,[l(Q,null,{default:r(()=>[i(d(t.$t("core__be_item_details")),1)]),_:1})]),n("div",Ke,[n("form",null,[n("div",Te,[n("div",Re,[n("div",null,[l(N,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[i(d(t.$t("core__be_item_info_lbl")),1)]),_:1})]),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="title"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name))+" ",1),(e.mandatory=1)?(o(),s("span",Fe,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.form.title,"onUpdate:value":p[0]||(p[0]=c=>t.form.title=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),t.selected_price_type==t.PsConst.NORMAL_PRICE?(o(),s("div",He,[(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="original_price"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Ae,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.form.original_price,"onUpdate:value":p[1]||(p[1]=c=>t.form.original_price=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="price"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Le,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.form.price,"onUpdate:value":p[2]||(p[2]=c=>t.form.price=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="currency_id"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Ne,"*")):u("",!0)]),_:2},1024),l(w,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l($,{disabled:!0,placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:t.form.currency_id},null,8,["placeholder","selectedValue"])]),_:2},1024)]))),128))])):u("",!0),t.selected_price_type==t.PsConst.PRICE_RANGE?(o(),s("div",Me,[(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="price"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Ge,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.priceRange,"onUpdate:value":p[3]||(p[3]=c=>t.priceRange=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128))])):u("",!0),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="category_id"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Oe,"*")):u("",!0)]),_:2},1024),l(w,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l($,{disabled:!0,placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:t.$t(t.form.category_id)},null,8,["placeholder","selectedValue"])]),_:2},1024)]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="subcategory_id"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",je,"*")):u("",!0)]),_:2},1024),l(w,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l($,{disabled:!0,placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:t.form.subcategory_id},null,8,["placeholder","selectedValue"])]),_:2},1024)]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="location_city_id"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",qe,"*")):u("",!0)]),_:2},1024),l(w,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l($,{disabled:!0,placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:t.form.location_city_id},null,8,["placeholder","selectedValue"])]),_:2},1024)]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="location_township_id"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Je,"*")):u("",!0)]),_:2},1024),l(w,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l($,{disabled:!0,placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:t.form.location_township_id},null,8,["placeholder","selectedValue"])]),_:2},1024)]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="description"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name))+" ",1),e.mandatory==1?(o(),s("span",Ze,"*")):u("",!0)]),_:2},1024),l(R,{disabled:!0,rows:"4",value:t.form.description,"onUpdate:value":p[4]||(p[4]=c=>t.form.description=c),placeholder:t.$t(e.description)},null,8,["value","placeholder"])]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="percent"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Qe,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.form.percent,"onUpdate:value":p[5]||(p[5]=c=>t.form.percent=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),(o(!0),s(g,null,k(t.customizeHeaders.filter(e=>e.core_keys_id!="ps-itm00009"),e=>(o(),s("div",{key:e.id},[e.ui_type_id==="uit00001"&&e.enable===1&&e.is_delete===0?(o(),s("div",We,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",Xe,"*",512),[[v,e.mandatory==1]])]),_:2},1024),l(w,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l($,{disabled:!0,placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:this.customizeDetails.filter(a=>a.id==this.form.product_relation[e.core_keys_id]).length>0?this.customizeDetails.filter(a=>a.id==this.form.product_relation[e.core_keys_id])[0].name:""},null,8,["placeholder","selectedValue"])]),_:2},1024)])):u("",!0),e.ui_type_id==="uit00002"&&e.enable===1&&e.is_delete===0?(o(),s("div",Ye,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",xe,"*",512),[[v,e.mandatory===1]])]),_:2},1024),l(_,{disabled:!0,type:"text",class:"w-full rounded",placeholder:t.$t(e.placeholder),value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a},null,8,["placeholder","value","onUpdate:value"])])):u("",!0),e.ui_type_id==="uit00003"&&e.enable===1&&e.is_delete===0?(o(),s("div",et,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",tt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",lt,[(o(!0),s(g,null,k(t.customizeDetails.filter(a=>a.core_keys_id===e.core_keys_id),a=>(o(),s("div",{class:"me-2",key:a.id},[l(M,{disabled:!0,color:"text-purple-600 border-purple-300",value:t.form.product_relation[e.core_keys_id],"onUpdate:value":c=>t.form.product_relation[e.core_keys_id]=c,title:a.name},null,8,["value","onUpdate:value","title"]),l(m,{for:a.id},{default:r(()=>[i(d(a.attribute),1)]),_:2},1032,["for"])]))),128))])])):u("",!0),e.ui_type_id==="uit00004"&&e.enable===1&&e.is_delete===0?(o(),s("div",at,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1)]),_:2},1024),n("div",ot,[n("div",st,[b(n("input",{disabled:!0,type:"checkbox",class:"rounded border mt-1.5",value:"0","onUpdate:modelValue":a=>t.form.product_relation[e.core_keys_id]=a,onChange:a=>t.handleCustomFieldError(e)},null,40,rt),[[O,t.form.product_relation[e.core_keys_id]]]),l(m,{class:"text-base ms-2"},{default:r(()=>[i(d(t.$t(e.placeholder)),1)]),_:2},1024)])]),l(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(t.product_relation_errors&&t.product_relation_errors[e.core_keys_id]),1)]),_:2},1024)])):u("",!0),e.ui_type_id==="uit00005"&&e.enable===1&&e.is_delete===0?(o(),s("div",nt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",it,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",null,[l(B,{disabled:!0,value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e),enableTimePicker:!0,inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])])])):u("",!0),e.ui_type_id==="uit00006"&&e.enable===1&&e.is_delete===0?(o(),s("div",dt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",mt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),l(R,{disabled:!0,rows:"4",placeholder:t.$t(e.placeholder),value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"])])):u("",!0),e.ui_type_id==="uit00007"&&e.enable===1&&e.is_delete===0?(o(),s("div",pt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",ut,"*",512),[[v,e.mandatory===1]])]),_:2},1024),l(_,{disabled:!0,type:"number",class:"w-full rounded",placeholder:t.$t(e.placeholder),value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"])])):u("",!0),e.ui_type_id==="uit00008"&&e.enable===1&&e.is_delete===0?(o(),s("div",bt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",yt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",ct,[l(G,{disabled:!0,oldData:t.form.product_relation[e.id],onToParent:t.handleMultiSelect,customizeDetails:t.customizeDetails,customizeHeader:e},null,8,["oldData","onToParent","customizeDetails","customizeHeader"])])])):u("",!0),e.ui_type_id==="uit00009"&&e.enable===1&&e.is_delete===0?(o(),s("div",gt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",vt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),t.item.image?(o(),s("div",kt,[b(n("img",{class:"w-96 h-48",alt:t.$t(t.core__be_item_photo)},null,8,_t),[[K,{src:t.$page.props.uploadUrl+"/"+t.item.image.img_path,loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(C,{disabled:!0,type:"button",onClick:p[6]||(p[6]=a=>t.replaceImageClicked(t.item.image.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[l(D,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),l(E,{disabled:!0,ref_for:!0,ref:"ps_image_icon_modal"},null,512),l(V,{disabled:!0,ref_for:!0,ref:"ps_action_modal"},null,512),l(z,{disabled:!0,ref_for:!0,ref:"ps_danger_dialog"},null,512)])):(o(),f(S,{key:1,disabled:!0,uploadType:"image",imageFile:t.form.product_relation[e.core_keys_id],"onUpdate:imageFile":a=>t.form.product_relation[e.core_keys_id]=a},null,8,["imageFile","onUpdate:imageFile"]))])):u("",!0),e.ui_type_id==="uit00010"&&e.enable===1&&e.is_delete===0?(o(),s("div",ft,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",$t,"*",512),[[v,e.mandatory===1]])]),_:2},1024),b(n("input",{disabled:!0,type:"time",class:"w-full rounded","onUpdate:modelValue":a=>t.form.product_relation[e.core_keys_id]=a},null,8,wt),[[j,t.form.product_relation[e.core_keys_id]]])])):u("",!0),e.ui_type_id==="uit00011"&&e.enable===1&&e.is_delete===0?(o(),s("div",Ct,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",ht,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",null,[l(B,{disabled:!0,value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e),inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])])])):u("",!0)]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="status"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"md:me-6 sm:me-0",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1)]),_:2},1024),l(W,{disabled:!0,value:t.form.status,"onUpdate:value":p[7]||(p[7]=c=>t.form.status=c),class:"font-normal",title:t.$t(e.placeholder)},null,8,["value","title"])]))),128)),n("div",null,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t("core__be_item_photo")),1),Ut]),_:1}),t.item.cover[0]?u("",!0):(o(),f(F,{key:0},{default:r(()=>[i(d(t.$t("core__be_recommended_size_400_200")),1)]),_:1})),t.item.cover[0]?(o(),s("div",Pt,[b(n("img",{class:"w-96 h-48",alt:t.$t(t.core__be_item_photo)},null,8,Dt),[[K,{src:t.$page.props.uploadUrl+"/"+t.item.cover[0].img_path,loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(C,{disabled:!0,type:"button",onClick:p[8]||(p[8]=e=>t.replaceImageClicked(t.item.cover[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[l(D,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),l(E,{disabled:!0,ref:"ps_image_icon_modal"},null,512),l(V,{disabled:!0,ref:"ps_action_modal"},null,512),l(z,{disabled:!0,ref:"ps_danger_dialog"},null,512)])):(o(),f(S,{key:2,disabled:!0,uploadType:"image",imageFile:t.form.cover,"onUpdate:imageFile":p[9]||(p[9]=e=>t.form.cover=e)},null,8,["imageFile"])),l(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(t.errors.cover),1)]),_:1})]),n("div",null,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t("core__be_item_video")),1),Et]),_:1}),t.item.video[0]?u("",!0):(o(),f(F,{key:0},{default:r(()=>[i(d(t.$t("core__be_recommended_size_400_200")),1)]),_:1})),t.item.video[0]?(o(),s("div",Vt,[n("video",zt,[n("source",{src:t.$page.props.uploadUrl+"/"+t.item.video[0].img_path,type:"video/mp4"},null,8,It),n("source",{src:t.$page.props.uploadUrl+"/"+t.item.video[0].img_path,type:"video/ogg"},null,8,Bt),i(" "+d(t.$t("core__be_item_video")),1)]),l(C,{disabled:!0,onClick:p[10]||(p[10]=e=>t.replaceVideoClicked(t.item.video[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[l(D,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),l(E,{disabled:!0,ref:"ps_image_icon_modal"},null,512),l(V,{disabled:!0,ref:"ps_action_modal"},null,512),l(z,{disabled:!0,ref:"ps_danger_dialog"},null,512)])):(o(),f(X,{key:2,disabled:!0,videoFile:t.form.video,"onUpdate:videoFile":p[11]||(p[11]=e=>t.form.video=e)},null,8,["videoFile"])),l(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(t.errors.video),1)]),_:1})]),n("div",null,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t("core__be_item_icon")),1)]),_:1}),t.item.icon[0]?u("",!0):(o(),f(F,{key:0},{default:r(()=>[i(d(t.$t("core__be_recommended_size_200_200")),1)]),_:1})),t.item.icon[0]?(o(),s("div",St,[b(n("img",{class:"w-72 h-48",alt:t.$t(t.core__be_item_icon)},null,8,Kt),[[K,{src:t.$page.props.uploadUrl+"/"+t.item.icon[0].img_path,loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(C,{disabled:!0,type:"button",onClick:p[12]||(p[12]=e=>t.replaceImageClicked(t.item.icon[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[l(D,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),l(E,{disabled:!0,ref:"ps_image_icon_modal"},null,512),l(V,{disabled:!0,ref:"ps_action_modal"},null,512),l(z,{disabled:!0,ref:"ps_danger_dialog"},null,512)])):(o(),f(S,{key:2,disabled:!0,class:"w-72",uploadType:"icon",imageFile:t.form.video_icon,"onUpdate:imageFile":p[13]||(p[13]=e=>t.form.video_icon=e)},null,8,["imageFile"])),l(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(t.errors.video_icon),1)]),_:1})])]),n("div",Tt,[n("div",Rt,[l(N,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[i(d(t.$t("core__be_item_location")),1)]),_:1})]),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="phone"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"mb-6",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",Ft,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.form.phone,"onUpdate:value":p[14]||(p[14]=c=>t.form.phone=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),(o(!0),s(g,null,k(t.customizeHeaders.filter(e=>e.core_keys_id=="ps-itm00009"),e=>(o(),s("div",{key:e.id},[e.ui_type_id==="uit00001"&&e.enable===1&&e.is_delete===0?(o(),s("div",Ht,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",At,"*",512),[[v,e.mandatory==1]])]),_:2},1024),l(w,{disabled:!0,align:"left",class:"lg:mt-2 mt-1 w-full"},{select:r(()=>[l($,{disabled:!0,placeholder:t.$t(e.placeholder),showCenter:!0,selectedValue:this.customizeDetails.filter(a=>a.id==this.form.product_relation[e.core_keys_id]).length>0?this.customizeDetails.filter(a=>a.id==this.form.product_relation[e.core_keys_id])[0].name:""},null,8,["placeholder","selectedValue"])]),_:2},1024)])):u("",!0),e.ui_type_id==="uit00002"&&e.enable===1&&e.is_delete===0?(o(),s("div",Lt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",Nt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),l(_,{disabled:!0,type:"text",class:"w-full rounded",placeholder:t.$t(e.placeholder),value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a},null,8,["placeholder","value","onUpdate:value"])])):u("",!0),e.ui_type_id==="uit00003"&&e.enable===1&&e.is_delete===0?(o(),s("div",Mt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",Gt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",Ot,[(o(!0),s(g,null,k(t.customizeDetails.filter(a=>a.core_keys_id===e.core_keys_id),a=>(o(),s("div",{class:"me-2",key:a.id},[l(M,{disabled:!0,color:"text-purple-600 border-purple-300",value:t.form.product_relation[e.core_keys_id],"onUpdate:value":c=>t.form.product_relation[e.core_keys_id]=c,title:a.name},null,8,["value","onUpdate:value","title"]),l(m,{for:a.id},{default:r(()=>[i(d(a.attribute),1)]),_:2},1032,["for"])]))),128))])])):u("",!0),e.ui_type_id==="uit00004"&&e.enable===1&&e.is_delete===0?(o(),s("div",jt,[l(m,{class:"text-base mb-1"},{default:r(()=>[i(d(t.$t(e.name)),1)]),_:2},1024),n("div",qt,[n("div",Jt,[b(n("input",{disabled:!0,type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":a=>t.form.product_relation[e.core_keys_id]=a,onChange:a=>t.handleCustomFieldError(e)},null,40,Zt),[[O,t.form.product_relation[e.core_keys_id]]]),l(m,{class:"text-base ms-2"},{default:r(()=>[i(d(t.$t(e.placeholder)),1)]),_:2},1024)])]),l(P,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[i(d(t.product_relation_errors&&t.product_relation_errors[e.core_keys_id]),1)]),_:2},1024)])):u("",!0),e.ui_type_id==="uit00005"&&e.enable===1&&e.is_delete===0?(o(),s("div",Qt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",Wt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",null,[l(B,{disabled:!0,value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e),enableTimePicker:!0,inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])])])):u("",!0),e.ui_type_id==="uit00006"&&e.enable===1&&e.is_delete===0?(o(),s("div",Xt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",Yt,"*",512),[[v,e.mandatory===1]])]),_:2},1024),l(R,{disabled:!0,rows:"4",placeholder:t.$t(e.placeholder),value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"])])):u("",!0),e.ui_type_id==="uit00007"&&e.enable===1&&e.is_delete===0?(o(),s("div",xt,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",el,"*",512),[[v,e.mandatory===1]])]),_:2},1024),l(_,{disabled:!0,type:"number",class:"w-full rounded",placeholder:t.$t(e.placeholder),value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e)},null,8,["placeholder","value","onUpdate:value","onKeyup","onBlur"])])):u("",!0),e.ui_type_id==="uit00008"&&e.enable===1&&e.is_delete===0?(o(),s("div",tl,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",ll,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",al,[l(G,{disabled:!0,oldData:t.form.product_relation[e.id],onToParent:t.handleMultiSelect,customizeDetails:t.customizeDetails,customizeHeader:e},null,8,["oldData","onToParent","customizeDetails","customizeHeader"])])])):u("",!0),e.ui_type_id==="uit00009"&&e.enable===1&&e.is_delete===0?(o(),s("div",ol,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",sl,"*",512),[[v,e.mandatory===1]])]),_:2},1024),t.item.image?(o(),s("div",rl,[b(n("img",{class:"w-96 h-48",alt:t.$t(t.core__be_item_photo)},null,8,nl),[[K,{src:t.$page.props.uploadUrl+"/"+t.item.image.img_path,loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),l(C,{disabled:!0,type:"button",onClick:p[15]||(p[15]=a=>t.replaceImageClicked(t.item.image.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:r(()=>[l(D,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),l(E,{disabled:!0,ref_for:!0,ref:"ps_image_icon_modal"},null,512),l(V,{disabled:!0,ref_for:!0,ref:"ps_action_modal"},null,512),l(z,{disabled:!0,ref_for:!0,ref:"ps_danger_dialog"},null,512)])):(o(),f(S,{key:1,disabled:!0,uploadType:"image",imageFile:t.form.product_relation[e.core_keys_id],"onUpdate:imageFile":a=>t.form.product_relation[e.core_keys_id]=a},null,8,["imageFile","onUpdate:imageFile"]))])):u("",!0),e.ui_type_id==="uit00010"&&e.enable===1&&e.is_delete===0?(o(),s("div",il,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",dl,"*",512),[[v,e.mandatory===1]])]),_:2},1024),b(n("input",{disabled:!0,type:"time",class:"w-full rounded","onUpdate:modelValue":a=>t.form.product_relation[e.core_keys_id]=a},null,8,ml),[[j,t.form.product_relation[e.core_keys_id]]])])):u("",!0),e.ui_type_id==="uit00011"&&e.enable===1&&e.is_delete===0?(o(),s("div",pl,[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.name)),1),b(n("span",ul,"*",512),[[v,e.mandatory===1]])]),_:2},1024),n("div",null,[l(B,{disabled:!0,value:t.form.product_relation[e.core_keys_id],"onUpdate:value":a=>t.form.product_relation[e.core_keys_id]=a,onKeyup:a=>t.handleCustomFieldError(e),onBlur:a=>t.handleCustomFieldError(e),inline:!1,autoApply:!1},null,8,["value","onUpdate:value","onKeyup","onBlur"])])])):u("",!0)]))),128)),n("div",bl,[l(Y,{mapKey:t.$page.props.mapKey,lat:parseFloat(t.form.lat),lng:parseFloat(t.form.lng),widthHeight:"width: 458px; height: 500px",onChange:t.updateCoordinates},null,8,["mapKey","lat","lng","onChange"])]),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="lat"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"mb-6",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",yl,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.form.lat,"onUpdate:value":p[16]||(p[16]=c=>t.form.lat=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128)),(o(!0),s(g,null,k(t.coreFieldFilterSettings.filter(e=>e.original_field_name==="lng"&&e.enable===1&&e.is_delete===0),(e,a)=>(o(),s("div",{class:"mb-6",key:a},[l(m,{class:"text-base"},{default:r(()=>[i(d(t.$t(e.label_name)),1),(e.mandatory=1)?(o(),s("span",cl,"*")):u("",!0)]),_:2},1024),l(_,{disabled:!0,type:"text",value:t.form.lng,"onUpdate:value":p[17]||(p[17]=c=>t.form.lng=c),placeholder:t.$t(e.placeholder)},null,8,["value","placeholder"])]))),128))])]),n("div",gl,[l(C,{type:"button",onClick:p[18]||(p[18]=e=>t.handleCancel())},{default:r(()=>[i(d(t.$t("core__be_btn_back")),1)]),_:1})])])])])]),_:1})]),_:1})],64)}var da=ze(Ie,[["render",vl]]);export{da as default};