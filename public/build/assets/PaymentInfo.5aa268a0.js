import{P as d}from"./PsObject.a17ef38f.js";class a extends d{constructor(){super(...arguments),this.id="",this.name="",this.description="",this.status="",this.addedDateStr=""}init(t,s,i,e,r){return this.id=t,this.name=s,this.description=i,this.status=e,this.addedDateStr=r,this}getPrimaryKey(){return this.id}toMap(t){const s={};return s.id=t.id,s.name=t.name,s.description=t.description,s.status=t.status,s.added_date_str=t.addedDateStr,s}toMapList(t){const s=[];for(let i=0;i<t.length;i++)t[i]!=null&&s.push(this.toMap(t[i]));return s}fromMap(t){return new a().init(t.id,t.name,t.description,t.status,t.added_date_str)}fromMapList(t){const s=[];for(const i in t)i!=null&&s.push(this.fromMap(i));return s}}class n extends d{constructor(){super(...arguments),this.coreKeysId="",this.name="",this.description="",this.status="",this.addedDateStr=""}init(t,s,i,e,r){return this.coreKeysId=t,this.name=s,this.description=i,this.status=e,this.addedDateStr=r,this}getPrimaryKey(){return this.coreKeysId}toMap(t){const s={};return s.core_keys_id=t.coreKeysId,s.name=t.name,s.description=t.description,s.status=t.status,s.added_date_str=t.addedDateStr,s}toMapList(t){const s=[];for(let i=0;i<t.length;i++)t[i]!=null&&s.push(this.toMap(t[i]));return s}fromMap(t){return new n().init(t.core_keys_id,t.name,t.description,t.status,t.added_date_str)}fromMapList(t){const s=[];for(const i in t)i!=null&&s.push(this.fromMap(i));return s}}class h extends d{constructor(){super(...arguments),this.id="",this.paymentId="",this.coreKeysId="",this.value="",this.uiTypeId="",this.shopId="",this.addedDateStr=""}init(t,s,i,e,r,p,u){return this.id=t,this.paymentId=s,this.coreKeysId=i,this.value=e,this.uiTypeId=r,this.shopId=p,this.addedDateStr=u,this}getPrimaryKey(){return this.id}toMap(t){const s={};return s.id=t.id,s.payment_id=t.paymentId,s.core_keys_id=t.coreKeysId,s.value=t.value,s.ui_type_id=t.uiTypeId,s.shop_id=t.shopId,s.added_date_str=t.addedDateStr,s}toMapList(t){const s=[];for(let i=0;i<t.length;i++)t[i]!=null&&s.push(this.toMap(t[i]));return s}fromMap(t){return new h().init(t.id,t.payment_id,t.core_keys_id,t.value,t.ui_type_id,t.shop_id,t.added_date_str)}fromMapList(t){const s=[];for(const i in t)i!=null&&s.push(this.fromMap(i));return s}}export{n as C,a as P,h as a};