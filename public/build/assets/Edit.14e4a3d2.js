import{aJ as V,bC as J,d as Q,Z as X,i as c,E as Y,z as A,o as u,c as g,b as t,w as a,a as l,q as s,t as r,h as x,g as f,f as k,n as B,F as M,s as O,H as ee,r as b}from"./app.72d9fe45.js";import{P as te}from"./PsLayout.847d3bb7.js";import{u as oe}from"./Validators.f69d3a03.js";import{P as ie}from"./PsInput.afea411a.js";import{P as le}from"./PsLabel.9b145d71.js";import{P as ae}from"./PsButton.75e226c0.js";import{P as ne}from"./PsIcon.8d64a589.js";import{P as se}from"./PsTextarea.b6da5576.js";import{P as _e}from"./PsLabelHeader4.cfe9ad61.js";import{P as re}from"./PsLabelCaption.0e118b2b.js";import{P as de}from"./PsBreadcrumb2.c233a04a.js";import{a as me}from"./PsDangerDialog.4a7cc4cb.js";import{P as ue}from"./PsTooltips.459f59c0.js";import{P as be}from"./PsCheckboxValue.4ec39ca8.js";import{P as ce}from"./PsCheckbox.f8bf76a2.js";import{P as ge}from"./PsDropdown.dd6513b3.js";import{P as fe}from"./PsDropdownSelect.2cfdee10.js";import{P as pe}from"./PsColorSeriesGenerator.f461c2dd.js";import{P as ve}from"./PsTooltip.a8c6bd00.js";import{_ as ye}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsToggle.8b891384.js";import"./toggle.11911129.js";import"./PsWarningDialog.632500d7.js";import"./PsModal.9ecdc9db.js";import"./vue-neat-modal.d239f4e3.js";import"./index.esm.159b9749.js";import"./auth.esm.925cebae.js";import"./SidebarMenuItem.9469c8c6.js";import"./SidebarSubTab.7743e9bd.js";import"./PsErrorDialog.5174f1d4.js";import"./PsInputWithRightIcon.e27f7629.js";import"./PsSuccessDialog.4b6e8f79.js";import"./PsLoading.1f14f5af.js";import"./PsBannerIcon.ba5a991b.js";import"./PsIcon1.56bc2bff.js";import"./Icons.c01eddd9.js";import"./PsLoadingCircleDialog.70b57269.js";import"./PsInputGroup.38b0d887.js";import"./PsColorPickerModal.8c30d45c.js";const he=V(()=>J(()=>import("./GoogleMapPinPicker.8b0d12e9.js"),["assets/GoogleMapPinPicker.8b0d12e9.js","assets/index.448b1588.js","assets/app.72d9fe45.js","assets/app.1665158f.css","assets/plugin-vue_export-helper.21dcd24c.js"])),Ce=V(()=>J(()=>import("./PsColorPickerModal.8c30d45c.js"),["assets/PsColorPickerModal.8c30d45c.js","assets/PsColorPickerModal.76387501.css","assets/PsModal.9ecdc9db.js","assets/PsModal.02bec9f0.css","assets/vue-neat-modal.d239f4e3.js","assets/vue-neat-modal.29af7d11.css","assets/app.72d9fe45.js","assets/app.1665158f.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/PsLabelHeader4.cfe9ad61.js","assets/PsLabel.9b145d71.js","assets/PsButton.75e226c0.js","assets/PsIcon1.56bc2bff.js","assets/Icons.c01eddd9.js"])),ke=Q({name:"Create",components:{Head:X,PsInput:ie,PsLabel:le,PsButton:ae,PsTextarea:se,PsLabelHeader4:_e,PsLabelCaption:re,PsBreadcrumb2:de,PsLabelHeader6:me,PsCheckboxValue:be,PsCheckbox:ce,GoogleMapPinPicker:he,PsColorSeriesGenerator:pe,PsDropdown:ge,PsDropdownSelect:fe,PsColorPickerModal:Ce,PsIcon:ne,PsTooltips:ue,PsTooltip:ve},layout:te,props:["errors","mobileColors","available_languages","mobile_setting","coreFieldFilterSettings"],setup(e){const i=c(!1),C=c(e.mobileColors);c("");const{isEmpty:$,isLatitude:T,isLongitude:I}=oe(),P=c(),G=(n,d)=>{e.errors[n]=d?"":$(n,d)},z=(n,d)=>{e.errors[n]=d?T(n,d):$(n,d)},p=(n,d)=>{e.errors[n]=d?I(n,d):$(n,d)};function h(n){n.forEach(d=>{C.value.filter(F=>F.id==d.id)[0].value=d.value}),_.mobileColors=JSON.stringify(C.value)}let _=Y({google_playstore_url:e.mobile_setting.google_playstore_url,apple_appstore_url:e.mobile_setting.apple_appstore_url,ios_appstore_id:e.mobile_setting.ios_appstore_id,promote_first_choice_day:e.mobile_setting.promote_first_choice_day,promote_second_choice_day:e.mobile_setting.promote_second_choice_day,promote_third_choice_day:e.mobile_setting.promote_third_choice_day,promote_fourth_choice_day:e.mobile_setting.promote_fourth_choice_day,profile_image_size:e.mobile_setting.profile_image_size,upload_image_size:e.mobile_setting.upload_image_size,chat_image_size:e.mobile_setting.chat_image_size,blue_mark_size:e.mobile_setting.blue_mark_size,item_detail_view_count_for_ads:e.mobile_setting.item_detail_view_count_for_ads,is_show_admob:e.mobile_setting.is_show_admob==1,is_show_ads_in_item_detail:e.mobile_setting.is_show_ads_in_item_detail==1,android_admob_banner_ad_unit_id:e.mobile_setting.android_admob_banner_ad_unit_id,android_admob_native_unit_id:e.mobile_setting.android_admob_native_unit_id,andorid_admob_interstitial_ad_unit_id:e.mobile_setting.andorid_admob_interstitial_ad_unit_id,ios_admob_banner_ad_unit_id:e.mobile_setting.ios_admob_banner_ad_unit_id,ios_admob_native_ad_unit_id:e.mobile_setting.ios_admob_native_ad_unit_id,ios_admob_interstitial_ad_unit_id:e.mobile_setting.ios_admob_interstitial_ad_unit_id,show_facebook_login:e.mobile_setting.show_facebook_login==1,show_phone_login:e.mobile_setting.show_phone_login==1,show_google_login:e.mobile_setting.show_google_login==1,show_apple_login:e.mobile_setting.show_apple_login==1,is_force_login:e.mobile_setting.is_force_login==1,show_main_menu:e.mobile_setting.show_main_menu==1,show_featured_items:e.mobile_setting.show_featured_items==1,default_loading_limit:e.mobile_setting.default_loading_limit,category_loading_limit:e.mobile_setting.category_loading_limit,recent_item_loading_limit:e.mobile_setting.recent_item_loading_limit,popular_item_loading_limit:e.mobile_setting.popular_item_loading_limit,discount_item_loading_limit:e.mobile_setting.discount_item_loading_limit,featured_item_loading_limit:e.mobile_setting.featured_item_loading_limit,block_slider_loading_limit:e.mobile_setting.block_slider_loading_limit,follower_item_loading_limit:e.mobile_setting.follower_item_loading_limit,block_item_loading_limit:e.mobile_setting.block_item_loading_limit,recent_search_keyword_limit:e.mobile_setting.recent_search_keyword_limit,version_no:e.mobile_setting.version_no,version_title:e.mobile_setting.version_title,version_message:e.mobile_setting.version_message,version_force_update:e.mobile_setting.version_force_update==1,version_need_clear_data:e.mobile_setting.version_need_clear_data==1,data_config_data_source_type:e.mobile_setting.data_config_data_source_type,data_config_day:e.mobile_setting.data_config_day,is_slider_auto_play:e.mobile_setting.is_slider_auto_play==1,auto_play_interval:e.mobile_setting.auto_play_interval,fb_key:e.mobile_setting.fb_key,price_format:e.mobile_setting.price_format,date_format:e.mobile_setting.date_format,mile:e.mobile_setting.mile,is_use_google_map:e.mobile_setting.is_use_google_map==1,is_show_subcategory:e.mobile_setting.is_show_subcategory==1,is_show_discount:e.mobile_setting.is_show_discount==1,is_use_thumbnail_as_placeholder:e.mobile_setting.is_use_thumbnail_as_placeholder==1,no_filter_with_location_on_map:e.mobile_setting.no_filter_with_location_on_map==1,is_show_owner_info:e.mobile_setting.is_show_owner_info==1,is_show_item_video:e.mobile_setting.is_show_item_video==1,is_language_config:e.mobile_setting.is_language_config==1,is_demo_for_payment:e.mobile_setting.is_demo_for_payment==1,loading_shimmer_item_count:e.mobile_setting.loading_shimmer_item_count,phone_list_count:e.mobile_setting.phone_list_count,video_duration:e.mobile_setting.video_duration,default_razor_currency:e.mobile_setting.default_razor_currency,default_flutter_wave_currency:e.mobile_setting.default_flutter_wave_currency,is_razor_support_multi_currency:e.mobile_setting.is_razor_support_multi_currency==1,mobileColors:JSON.stringify(C.value),deli_boy_version_force_update:e.mobile_setting.deli_boy_version_force_update==1,deli_boy_version_need_clear_data:e.mobile_setting.deli_boy_version_need_clear_data==1,after_item_count_admob_once:e.mobile_setting.after_item_count_admob_once,lat:e.mobile_setting.lat,lng:e.mobile_setting.lng,collection_item_loading_limit:e.mobile_setting.collection_item_loading_limit,trending_item_loading_limit:e.mobile_setting.trending_item_loading_limit,show_special_collections:e.mobile_setting.show_special_collections==1,show_best_choice_slider:e.mobile_setting.show_best_choice_slider==1,default_order_time:e.mobile_setting.default_order_time,deli_boy_version_no:e.mobile_setting.deli_boy_version_no,deli_boy_version_title:e.mobile_setting.deli_boy_version_title,deli_boy_version_message:e.mobile_setting.deli_boy_version_message,color_change_code:e.mobile_setting.color_change_code,shop_loading_limit:e.mobile_setting.shop_loading_limit});const m=c(e.mobileColors.filter(n=>n.title=="primary")),v=c(e.mobileColors.filter(n=>n.title=="text")),w=c(e.mobileColors.filter(n=>n.title=="accent")),S=c(e.mobileColors.filter(n=>n.title=="success")),y=c(e.mobileColors.filter(n=>n.title=="error")),K=c(e.mobileColors.filter(n=>n.title=="warning")),E=c(e.mobileColors.filter(n=>n.title=="info")),U=c(e.mobileColors.filter(n=>n.title=="achromatic")),L=c(e.mobileColors.filter(n=>n.title=="brand")),N=n=>{let d=n.keyCode?n.keyCode:n.which;(d<48||d>57)&&d!==46&&d!==45&&n.preventDefault()},R=n=>{let d=n.keyCode?n.keyCode:n.which;(d<48||d>57)&&n.preventDefault()};function D(n){_.lat=n.latLng.lat(),_.lng=n.latLng.lng()}const o=[{label:"core_mb_setting_play_store_and_app_store_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-77225/ce5c1cf35b2ced6"},{label:"core_mb_setting_Admob_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-84845/909f7da12a4291b"},{label:"core_mb_setting_dashboard_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-85445/bb2e7a3432269ff"},{label:"core_mb_setting_version_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-75485/21439a9d395235a"},{label:"core_mb_setting_color_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-159005/7eb64021ffd92ba"},{label:"core_mb_setting_default_data_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-85745/85f0d458bcd42fb"},{label:"core_mb_setting_slider_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-85805/d99a8aa0746478b"},{label:"core_mb_setting_others_config",docu:"https://doc.clickup.com/24312566/p/h/q5yqp-85925/f6bcd43fb4e19ab"}],q=c(o[0].label),H=c(o[0].docu);function j(n){q.value=n.label,H.value=n.docu}function W(){i.value=!i.value}function Z(n){P.value.openModal(n.value,d=>{C.value.filter(F=>F.id==n.id)[0].value=d,_.mobileColors=JSON.stringify(C.value)},()=>{})}return{advancedOptionsClick:W,getGeneratedColor:h,advanced_options:i,brandClick:Z,ps_color_picker_modal:P,title:q,docu:H,settingColumn:o,changeSection:j,primaryColors:m,textColors:v,accentColors:w,successColors:S,errorColors:y,warningColors:K,infoColors:E,achromaticColors:U,brandColors:L,form:_,validateEmptyInput:G,validateLatitudeInput:z,validateLongitudeInput:p,onlyNumberWithCustom:N,onlyNumber:R,updateCoordinates:D}},methods:{handleSubmit(e){this.$inertia.post(route("mobile_setting.update",e),this.form,{forceFormData:!0})}},computed:{breadcrumb(){return[{label:A("core__be_dashboard_label"),url:route("admin.index")},{label:A("mobile_setting_module"),color:"text-primary-500"}]}}}),we={class:"bg-background dark:bg-secondaryDark-black rounded-lg"},$e={class:"bg-primary-50 flex items-center dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},Pe={class:"h-8 flex items-center"},Ue=s(" For more details: "),qe=["href"],Ge={class:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4"},ze={key:0,class:"grid grid-rows gap-6 ms-4 me-18"},Se={key:1,class:"grid grid-rows gap-6 ms-4 me-18"},Ke={key:2,class:"grid grid-rows gap-6 ms-4 me-18"},Ee={key:3,class:"grid grid-rows gap-6 ms-4 me-18"},Le={key:4,class:"grid grid-rows gap-6 ms-4 me-18"},Ne={class:"mt-3"},Re={class:"mt-10"},De={class:"mt-10"},Fe={class:"mt-10"},Me={class:"mt-3"},Te={class:"mt-10"},Ie={class:"mt-10"},He={class:"mt-10"},Ae={class:"mt-10"},Be={class:"mt-10"},Oe={class:"flex flex-wrap gap-y-6 mt-6"},Ve=["onClick"],Je={key:5,class:"grid grid-rows gap-6 ms-4 me-18"},je={class:""},We={class:"rounded-md shadow-xs w-full"},Ze={class:"pt-2 z-30"},Qe=s("FULL_CACHE"),Xe=s("SERVER_DIRECT"),Ye={key:6,class:"grid grid-rows gap-6 ms-4 me-18"},xe={key:7,class:"grid grid-rows gap-6 ms-4 me-18"},et={class:"flex items-center"},tt=s(" For more details: "),ot=l("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-79305/1afb3b05d1416bd",class:"underline"},"Refer to this doc",-1),it={class:"flex items-center"},lt=s(" For more details: "),at=l("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-80705/bb50824fae048c2",class:"underline"},"Refer to this doc",-1),nt={class:"flex items-center"},st=s(" For more details: "),_t=l("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-81685/a727d26cbbd9977",class:"underline"},"Refer to this doc",-1),rt={class:"flex items-center"},dt=s(" For more details: "),mt=l("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-84745/0d66cec92b46197",class:"underline"},"Refer to this doc",-1),ut={class:"flex items-center"},bt=s(" For more details: "),ct=l("a",{target:"_blank",href:"https://doc.clickup.com/24312566/p/h/q5yqp-85385/a92d0c602507852",class:"underline"},"Refer to this doc",-1),gt={class:"flex flex-row justify-end mt-6 mb-2.5"},ft={class:"px-4"},pt=["onClick"];function vt(e,i,C,$,T,I){const P=b("Head"),G=b("ps-breadcrumb-2"),z=b("ps-label-header-6"),p=b("ps-icon"),h=b("ps-tooltip"),_=b("ps-label"),m=b("ps-input"),v=b("ps-checkbox-value"),w=b("ps-label-caption"),S=b("ps-textarea"),y=b("ps-color-series-generator"),K=b("ps-dropdown-select"),E=b("ps-dropdown"),U=b("ps-button"),L=b("ps-loading"),N=b("ps-card"),R=b("ps-layout"),D=b("PsColorPickerModal");return u(),g(M,null,[t(P,{title:e.$t("core_mb_setting_mobile_setting_module")},null,8,["title"]),t(R,null,{default:a(()=>[t(G,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(N,{class:"w-full h-auto"},{default:a(()=>[l("div",we,[l("div",$e,[t(z,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[s(r(e.$t(e.title)),1)]),_:1}),t(h,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:a(()=>[l("div",Pe,[t(p,{name:"info",w:"20",h:"20",class:"ms-2.5 transition-all duration-300 text-primary-500"})])]),tooltips:a(()=>[Ue,l("a",{target:"_blank",href:e.docu,class:"underline"},"Refer to this doc",8,qe)]),_:1})]),l("form",{onSubmit:i[31]||(i[31]=x(o=>e.handleSubmit(this.mobile_setting.id),["prevent"]))},[l("div",Ge,[l("div",null,[e.title==e.settingColumn[0].label?(u(),g("div",ze,[l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_google_play_url")),1)]),_:1}),t(m,{type:"text",value:e.form.google_playstore_url,"onUpdate:value":i[0]||(i[0]=o=>e.form.google_playstore_url=o),placeholder:e.$t("core_mb_setting_google_play_url")},null,8,["value","placeholder"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_app_store_url")),1)]),_:1}),t(m,{type:"text",value:e.form.apple_appstore_url,"onUpdate:value":i[1]||(i[1]=o=>e.form.apple_appstore_url=o),placeholder:e.$t("core_mb_setting_app_store_url")},null,8,["value","placeholder"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_ios_store_id")),1)]),_:1}),t(m,{type:"text",value:e.form.ios_appstore_id,"onUpdate:value":i[2]||(i[2]=o=>e.form.ios_appstore_id=o),placeholder:e.$t("core_mb_setting_ios_store_id")},null,8,["value","placeholder"])])])):f("",!0),e.title==e.settingColumn[1].label?(u(),g("div",Se,[l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_item_detail_view_count_for_ads")),1)]),_:1}),t(m,{type:"text",value:e.form.item_detail_view_count_for_ads,"onUpdate:value":i[3]||(i[3]=o=>e.form.item_detail_view_count_for_ads=o),placeholder:e.$t("core_mb_setting_item_detail_view_count_for_ads"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])]),l("div",null,[t(v,{title:e.$t("core_mb_setting_AdMob_setting_on"),value:e.form.is_show_admob,"onUpdate:value":i[4]||(i[4]=o=>e.form.is_show_admob=o)},null,8,["title","value"])]),l("div",null,[t(v,{title:e.$t("core_mb_setting_is_show_admob_inside_item"),value:e.form.is_show_ads_in_item_detail,"onUpdate:value":i[5]||(i[5]=o=>e.form.is_show_ads_in_item_detail=o)},null,8,["title","value"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_android_admob_banner_ad_unit_id")),1)]),_:1}),t(m,{type:"text",value:e.form.android_admob_banner_ad_unit_id,"onUpdate:value":i[6]||(i[6]=o=>e.form.android_admob_banner_ad_unit_id=o),placeholder:e.$t("core_mb_setting_android_admob_banner_ad_unit_id"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_android_admob_native_unit_id")),1)]),_:1}),t(m,{type:"text",value:e.form.android_admob_native_unit_id,"onUpdate:value":i[7]||(i[7]=o=>e.form.android_admob_native_unit_id=o),placeholder:e.$t("core_mb_setting_android_admob_native_unit_id"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_android_admob_interstitial_ad_unit_id")),1)]),_:1}),t(m,{type:"text",value:e.form.andorid_admob_interstitial_ad_unit_id,"onUpdate:value":i[8]||(i[8]=o=>e.form.andorid_admob_interstitial_ad_unit_id=o),placeholder:e.$t("core_mb_setting_android_admob_interstitial_ad_unit_id"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_ios_admob_banner_ad_unit_id")),1)]),_:1}),t(m,{type:"text",value:e.form.ios_admob_banner_ad_unit_id,"onUpdate:value":i[9]||(i[9]=o=>e.form.ios_admob_banner_ad_unit_id=o),placeholder:e.$t("core_mb_setting_ios_admob_banner_ad_unit_id"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_ios_admob_native_unit_id")),1)]),_:1}),t(m,{type:"text",value:e.form.ios_admob_native_ad_unit_id,"onUpdate:value":i[10]||(i[10]=o=>e.form.ios_admob_native_ad_unit_id=o),placeholder:e.$t("core_mb_setting_ios_admob_native_unit_id"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_ios_admob_interstitial_ad_unit_id")),1)]),_:1}),t(m,{type:"text",value:e.form.ios_admob_interstitial_ad_unit_id,"onUpdate:value":i[11]||(i[11]=o=>e.form.ios_admob_interstitial_ad_unit_id=o),placeholder:e.$t("core_mb_setting_ios_admob_interstitial_ad_unit_id"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])])])):f("",!0),e.title==e.settingColumn[2].label?(u(),g("div",Ke,[l("div",null,[t(v,{title:e.$t("core_mb_setting_main_menu_on"),value:e.form.show_main_menu,"onUpdate:value":i[12]||(i[12]=o=>e.form.show_main_menu=o)},null,8,["title","value"]),t(w,{textColor:"text-secondary-400 mt-1"},{default:a(()=>[s(r(e.$t("core_mb_setting_main_menu_on_info")),1)]),_:1})]),l("div",null,[t(v,{title:e.$t("core_mb_setting_featured_items_on"),value:e.form.show_featured_items,"onUpdate:value":i[13]||(i[13]=o=>e.form.show_featured_items=o)},null,8,["title","value"]),t(w,{textColor:"text-secondary-400 mt-1"},{default:a(()=>[s(r(e.$t("core_mb_setting_featured_items_on_info")),1)]),_:1})])])):f("",!0),e.title==e.settingColumn[3].label?(u(),g("div",Ee,[l("div",null,[t(_,null,{default:a(()=>[s(r(e.$t("core_mb_setting_version_no")),1)]),_:1}),t(m,{type:"text",value:e.form.version_no,"onUpdate:value":i[14]||(i[14]=o=>e.form.version_no=o),placeholder:e.$t("core_mb_setting_version_no")},null,8,["value","placeholder"])]),l("div",null,[t(_,null,{default:a(()=>[s(r(e.$t("core_mb_setting_version_title")),1)]),_:1}),t(m,{type:"text",value:e.form.version_title,"onUpdate:value":i[15]||(i[15]=o=>e.form.version_title=o),placeholder:e.$t("core_mb_setting_version_title")},null,8,["value","placeholder"])]),l("div",null,[t(_,null,{default:a(()=>[s(r(e.$t("core_mb_setting_version_message")),1)]),_:1}),t(S,{rows:"4",value:e.form.version_message,"onUpdate:value":i[16]||(i[16]=o=>e.form.version_message=o),placeholder:e.$t("core_mb_setting_version_message")},null,8,["value","placeholder"])]),l("div",null,[t(v,{title:e.$t("core_mb_setting_version_force_update"),value:e.form.version_force_update,"onUpdate:value":i[17]||(i[17]=o=>e.form.version_force_update=o)},null,8,["title","value"])]),l("div",null,[t(v,{title:e.$t("core_mb_setting_version_need_clear_data"),value:e.form.version_need_clear_data,"onUpdate:value":i[18]||(i[18]=o=>e.form.version_need_clear_data=o)},null,8,["title","value"])])])):f("",!0),e.title==e.settingColumn[4].label?(u(),g("div",Le,[l("div",null,[t(_,{textColor:"text-lg font-semibold text-feSecondary-800"},{default:a(()=>[s(r(e.$t("core_be__primary_colors")),1)]),_:1}),l("div",Ne,[t(y,{activeColor:e.primaryColors,title:e.$t("core_be__primary"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",Re,[t(y,{activeColor:e.textColors,title:e.$t("core_be__text"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",De,[t(y,{activeColor:e.accentColors,title:e.$t("core_be__accent_colors"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",Fe,[l("div",{class:"flex gap-2 items-center py-2 cursor-pointer w-40",onClick:i[19]||(i[19]=o=>e.advancedOptionsClick())},[e.advanced_options?(u(),k(p,{key:0,class:"text-primary-500",name:"upChervon",w:"24",h:"24"})):(u(),k(p,{key:1,class:"text-primary-500",name:"downChervon",w:"24",h:"24"})),t(_,{textColor:"text-primary-500 text-sm font-medium"},{default:a(()=>[s(r(e.$t("core_be__advanced_options")),1)]),_:1})]),l("div",{class:B([e.advanced_options?"block":"hidden"])},[t(_,{textColor:"text-lg font-semibold text-feSecondary-800 mt-6"},{default:a(()=>[s(r(e.$t("core_be__semantics")),1)]),_:1}),l("div",Me,[t(y,{activeColor:e.successColors,title:e.$t("core_be__success"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",Te,[t(y,{activeColor:e.errorColors,title:e.$t("core_be__error"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",Ie,[t(y,{activeColor:e.warningColors,title:e.$t("core_be__warning"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",He,[t(y,{activeColor:e.infoColors,title:e.$t("core_be__info"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",Ae,[t(y,{activeColor:e.achromaticColors,title:e.$t("core_be__achromatic"),onGeneratedColor:e.getGeneratedColor},null,8,["activeColor","title","onGeneratedColor"])]),l("div",Be,[t(_,{textColor:"text-lg font-semibold text-feSecondary-800"},{default:a(()=>[s(r(e.$t("core_be__brand_colors")),1)]),_:1}),l("div",Oe,[(u(!0),g(M,null,O(e.brandColors,o=>(u(),g("div",{key:o.id,onClick:q=>e.brandClick(o)},[l("span",{class:"block w-20 h-12 cursor-pointer",style:ee({background:o.value})},null,4),t(_,{textColor:"text-xs text-feSecondary-800 text-center capitalize"},{default:a(()=>[s(r(o.key.split("_")[1]),1)]),_:2},1024)],8,Ve))),128))])])],2)])])])):f("",!0),e.title==e.settingColumn[5].label?(u(),g("div",Je,[l("div",je,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_data_config_data_source_type")),1)]),_:1}),t(E,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:a(()=>[t(K,{selectedValue:e.form.data_config_data_source_type==""?"":e.form.data_config_data_source_type,placeholder:"Select Type"},null,8,["selectedValue"])]),list:a(()=>[l("div",We,[l("div",Ze,[l("div",{onClick:i[20]||(i[20]=o=>e.form.data_config_data_source_type="FULL_CACHE"),class:"flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[t(_,{class:"ms-2"},{default:a(()=>[Qe]),_:1})]),l("div",{onClick:i[21]||(i[21]=o=>e.form.data_config_data_source_type="SERVER_DIRECT"),class:"flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[t(_,{class:"ms-2"},{default:a(()=>[Xe]),_:1})])])])]),_:1})]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_data_config_day")),1)]),_:1}),t(m,{type:"text",value:e.form.data_config_day,"onUpdate:value":i[22]||(i[22]=o=>e.form.data_config_day=o),placeholder:e.$t("core_mb_setting_data_config_day"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])])])):f("",!0),e.title==e.settingColumn[6].label?(u(),g("div",Ye,[l("div",null,[t(v,{title:e.$t("core_mb_setting_is_slider_autoplay"),value:e.form.is_slider_auto_play,"onUpdate:value":i[23]||(i[23]=o=>e.form.is_slider_auto_play=o)},null,8,["title","value"])]),l("div",null,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_slider_autoplay"))+" (Milliseconds)",1)]),_:1}),t(m,{type:"text",value:e.form.auto_play_interval,"onUpdate:value":i[24]||(i[24]=o=>e.form.auto_play_interval=o),placeholder:e.$t("core_mb_setting_slider_autoplay"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])])])):f("",!0),e.title==e.settingColumn[7].label?(u(),g("div",xe,[l("div",null,[l("div",et,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_facebook_key")),1)]),_:1}),t(h,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:a(()=>[t(p,{name:"info",w:"20",h:"20",class:"mt-2 ms-2.5 transition-all duration-300 text-primary-500"})]),tooltips:a(()=>[tt,ot]),_:1})]),t(m,{type:"text",value:e.form.fb_key,"onUpdate:value":i[25]||(i[25]=o=>e.form.fb_key=o),placeholder:e.$t("core_mb_setting_facebook_key")},null,8,["value","placeholder"])]),l("div",null,[l("div",it,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_date_format")),1)]),_:1}),t(h,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:a(()=>[t(p,{name:"info",w:"20",h:"20",class:"mt-2 ms-2.5 transition-all duration-300 text-primary-500"})]),tooltips:a(()=>[lt,at]),_:1})]),t(m,{type:"text",value:e.form.date_format,"onUpdate:value":i[26]||(i[26]=o=>e.form.date_format=o),placeholder:e.$t("core_mb_setting_date_format")},null,8,["value","placeholder"]),t(w,{textColor:"text-secondary-400 mt-1"},{default:a(()=>[s(r(e.$t("core_mb_setting_date_format_ex"))+"dd for the day, MM for the month, yyyy for the year, hh for the hour, mm for the minute, ss for the second (e.g. dd-MM-yyyy hh:mm:ss)",1)]),_:1})]),l("div",nt,[t(v,{title:e.$t("core_mb_setting_use_google_map_on"),value:e.form.is_use_google_map,"onUpdate:value":i[27]||(i[27]=o=>e.form.is_use_google_map=o)},null,8,["title","value"]),t(h,{tooltiptext:"absolute z-50 bottom-full mb-2 -ms-2.5"},{content:a(()=>[t(p,{name:"info",w:"20",h:"20",class:"-ms-1 transition-all duration-300 text-primary-500"})]),tooltips:a(()=>[st,_t]),_:1})]),l("div",rt,[t(v,{title:e.$t("core_mb_setting_is_language_config"),value:e.form.is_language_config,"onUpdate:value":i[28]||(i[28]=o=>e.form.is_language_config=o)},null,8,["title","value"]),t(h,{tooltiptext:"absolute z-50 bottom-full mb-2 -ms-2.5"},{content:a(()=>[t(p,{name:"info",w:"20",h:"20",class:"-ms-1 transition-all duration-300 text-primary-500"})]),tooltips:a(()=>[dt,mt]),_:1})]),l("div",null,[l("div",ut,[t(_,{class:"text-base"},{default:a(()=>[s(r(e.$t("core_mb_setting_item_loading_cell_count")),1)]),_:1}),t(h,{tooltiptext:"absolute z-50 bottom-full ms-0.5"},{content:a(()=>[t(p,{name:"info",w:"20",h:"20",class:"mt-2 ms-2.5 transition-all duration-300 text-primary-500"})]),tooltips:a(()=>[bt,ct]),_:1})]),t(m,{type:"text",value:e.form.loading_shimmer_item_count,"onUpdate:value":i[29]||(i[29]=o=>e.form.loading_shimmer_item_count=o),placeholder:e.$t("core_mb_setting_item_loading_cell_count"),onKeypress:e.onlyNumber},null,8,["value","placeholder","onKeypress"])])])):f("",!0),l("div",gt,[t(U,{onClick:i[30]||(i[30]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[s(r(e.$t("core__be_btn_cancel")),1)]),_:1}),t(U,{disabled:!e.mobile_setting.authorizations.update,class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(u(),k(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(u(),k(p,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(u(),k(_,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(r(e.$t("core__be_btn_saved")),1)]),_:1})):f("",!0),!e.loading&&!e.success?(u(),k(_,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(r(e.$t("core__be_btn_save")),1)]),_:1})):f("",!0)]),_:1},8,["disabled"])])]),l("div",ft,[(u(!0),g(M,null,O(e.settingColumn,o=>(u(),g("div",{key:o.id},[l("div",{onClick:q=>e.changeSection(o),class:B([e.title==o.label?"border-l border-s-primary-500":"border-l border-s-secondary-300","px-2 py-3 cursor-pointer"])},[t(_,{textColor:e.title==o.label?"text-primary-500 dark:text-primary-500":"text-secondary-800 dark:text-white"},{default:a(()=>[s(r(e.$t(o.label)),1)]),_:2},1032,["textColor"])],10,pt)]))),128))])])],32)])]),_:1})]),_:1}),t(D,{ref:"ps_color_picker_modal"},null,512)],64)}var lo=ye(ke,[["render",vt]]);export{lo as default};
