import{bD as s,i as e}from"./app.72d9fe45.js";const n=s("PsValueHolder",{state:()=>({loginExpiryTime:e(0),loginUserId:e(""),locationId:e(""),locationName:e(""),subLocationId:e(""),subLocationName:e(""),locationLat:e(""),locationLng:e(""),loginUserName:e(""),userIdToVerify:e(""),userNameToVerify:e(""),userEmailToVerify:e(""),userPasswordToVerify:e(""),deviceToken:e(""),notiSetting:e("true"),isCustomCamera:e(!0),overAllTaxLabel:e(""),overAllTaxValue:e(""),shippingTaxLabel:e(""),shopId:e(""),messenger:e(""),whatsApp:e(""),phone:e(""),shippingTaxValue:e(""),appInfoVersionNo:e(""),appInfoForceUpdate:e(!1),appInfoForceUpdateTitle:e(""),appInfoForceUpdateMsg:e(""),startDate:e(""),endDate:e(""),paypalEnabled:e(""),stripeEnabled:e(""),codEnabled:e(""),bankEnabled:e(""),publishKey:e(""),depositPercent:e(""),coolDownPeriod:e(""),bidFee:e(""),uploadFee:e(""),memberShipDuration:e(""),membershipAmount:e(""),shippingId:e(""),standardShippingEnable:e(""),zoneShippingEnable:e(""),noShippingEnable:e(""),creditCardNo:e(""),creditCardMonth:e(""),creditCardYear:e(""),creditCardCVC:e(""),creditCardName:e(""),creditCardValid:e(!1),resultStartTime:e(0),userPassword:e(""),languageCode:e(""),showProfile:e("")}),actions:{loadData(){this.loginExpiryTime.value=localStorage.loginExpiryTime,this.locationId.value=localStorage.locationId,this.locationName.value=localStorage.locationName,this.subLocationId.value=localStorage.subLocationId,this.subLocationName.value=localStorage.subLocationName,this.locationLat.value=localStorage.locationLat,this.locationLng.value=localStorage.locationLng,this.loginUserId.value=localStorage.loginUserId,this.loginUserName.value=localStorage.loginUserName,this.userIdToVerify.value=localStorage.userIdToVerify,this.userNameToVerify.value=localStorage.userNameToVerify,this.userEmailToVerify.value=localStorage.userEmailToVerify,this.userPasswordToVerify.value=localStorage.userPasswordToVerify,this.deviceToken.value=localStorage.deviceToken,this.notiSetting.value=localStorage.notiSetting,this.isCustomCamera.value=localStorage.isCustomCamera,this.overAllTaxLabel.value=localStorage.overAllTaxLabel,this.overAllTaxValue.value=localStorage.overAllTaxValue,this.shippingTaxLabel.value=localStorage.shippingTaxLabel,this.shopId.value=localStorage.shopId,this.messenger.value=localStorage.messenger,this.whatsApp.value=localStorage.whatsApp,this.phone.value=localStorage.phone,this.shippingTaxValue.value=localStorage.shippingTaxValue,this.appInfoVersionNo.value=localStorage.appInfoVersionNo,this.appInfoForceUpdate.value=localStorage.appInfoForceUpdate,this.appInfoForceUpdateTitle.value=localStorage.appInfoForceUpdateTitle,this.appInfoForceUpdateMsg.value=localStorage.appInfoForceUpdateMsg,this.startDate.value=localStorage.startDate,this.endDate.value=localStorage.endDate,this.paypalEnabled.value=localStorage.paypalEnabled,this.stripeEnabled.value=localStorage.stripeEnabled,this.codEnabled.value=localStorage.codEnabled,this.bankEnabled.value=localStorage.bankEnabled,this.publishKey.value=localStorage.publishKey,this.depositPercent.value=localStorage.depositPercent,this.coolDownPeriod.value=localStorage.coolDownPeriod,this.bidFee.value=localStorage.bidFee,this.uploadFee.value=localStorage.uploadFee,this.memberShipDuration.value=localStorage.memberShipDuration,this.membershipAmount.value=localStorage.membershipAmount,this.depositPercent.value=localStorage.depositPercent,this.shippingId.value=localStorage.shippingId,this.standardShippingEnable.value=localStorage.standardShippingEnable,this.zoneShippingEnable.value=localStorage.zoneShippingEnable,this.noShippingEnable.value=localStorage.noShippingEnable,this.creditCardNo.value=localStorage.creditCardNo,this.creditCardValid.value=localStorage.creditCardValid,this.creditCardMonth.value=localStorage.creditCardMonth,this.creditCardYear.value=localStorage.creditCardYear,this.creditCardCVC.value=localStorage.creditCardCVC,this.creditCardName.value=localStorage.creditCardName,this.resultStartTime.value=localStorage.resultStartTime,this.userPassword.value=localStorage.userPassword,this.languageCode.value=localStorage.languageCode,this.showProfile.value=localStorage.showProfile},replacelanguageCode(a){localStorage.languageCode=a,this.languageCode.value=a},replaceshowProfile(a){localStorage.showProfile=a,this.showProfile.value=a,localStorage.showProfile=a},replaceCreditCard(a,o,l,t,i,r){localStorage.creditCardNo=a,localStorage.creditCardMonth=o,localStorage.creditCardYear=l,localStorage.creditCardCVC=t,localStorage.creditCardName=i,localStorage.creditCardValid=r,this.creditCardNo.value=a,this.creditCardMonth.value=o,this.creditCardYear.value=l,this.creditCardCVC.value=t,this.creditCardName.value=i,this.creditCardValid.value=r},replaceLoginUserId(a){localStorage.loginUserId=a,this.loginUserId.value=a},replaceNotiSetting(a){localStorage.notiSetting=a,this.notiSetting.value=a},replacedeviceToken(a){localStorage.deviceToken=a,this.deviceToken.value=a},replaceLoginUserName(a){localStorage.loginUserName=a,this.loginUserName.value=a},replaceLoginExpiryTime(a){this.loginExpiryTime.value=a,localStorage.loginExpiryTime=this.loginExpiryTime},replaceUserIdToVerify(a){localStorage.userIdToVerify=a,this.userIdToVerify.value=a},replaceUserNameToVerify(a){localStorage.userNameToVerify=a,this.userNameToVerify.value=a},replaceUserEmailToVerify(a){localStorage.userEmailToVerify=a,this.userEmailToVerify.value=a},replaceUserPasswordToVerify(a){localStorage.userPasswordToVerify=a,this.userPasswordToVerify.value=a},replaceLocation(a,o,l,t){localStorage.locationId=a,this.locationId.value=a,localStorage.locationName=o,this.locationName.value=o,localStorage.locationLat=l,this.locationLat.value=l,localStorage.locationLng=t,this.locationLng.value=t},replaceSubLocation(a,o){localStorage.subLocationId=a,this.subLocationId.value=a,localStorage.subLocationName=o,this.subLocationName.value=o},replacePublishKey(a){localStorage.publishKey=a,this.publishKey.value=a},updateLoginExpiryTime(){const a=new Date;a.setDate(a.getDate()+1),this.replaceLoginExpiryTime(a.getTime())}}});export{n as u};
