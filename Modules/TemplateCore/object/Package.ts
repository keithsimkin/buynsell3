
import { PsObject } from "@templateCore/object/core/PsObject";
import Payment from "./Payment";
import CoreKey from "./CoreKey";
import PaymentInfo from "./PaymentInfo";
import PaymentAttributes from "./PaymentAttributes";

export default class Package extends PsObject<Package> {

    id : string ='';
    paymentId : string ='';
    coreKeysId : string ='';
    shopId : string ='';
    payment : Payment = new Payment();
    coreKey : CoreKey = new CoreKey();
    paymentInfo : PaymentInfo = new PaymentInfo();
    paymentAttributes : PaymentAttributes = new PaymentAttributes();
    addedDateStr : string ='';

    init(

        id : string,
        paymentId : string,
        coreKeysId : string,
        shopId : string,
        payment : Payment,
        coreKey : CoreKey,
        paymentInfo : PaymentInfo,
        paymentAttributes : PaymentAttributes,
        addedDateStr : string


    ) {
        this.id  = id ;
        this.paymentId  = paymentId ;
        this.coreKeysId  = coreKeysId ;
        this.shopId  = shopId ;
        this.payment = payment;
        this.coreKey = coreKey;
        this.paymentInfo = paymentInfo;
        this.paymentAttributes = paymentAttributes;
        this.addedDateStr = addedDateStr;

        return this;

    }

    getPrimaryKey(): string {
        return this.id;
    }

    toMap(object: Package): any {
        const map = {};

        map['id'] = object.id;
        map['payment_id'] = object.paymentId;
        map['coreKeys_id'] = object.coreKeysId;
        map['shop_id'] = object.shopId;
        map['payment'] = new Payment().toMap(object.payment);
        map['core_key'] = new CoreKey().toMap(object.coreKey);
        map['payment_info'] = new PaymentInfo().toMap(object.paymentInfo);
        map['payment_attributes'] = new PaymentAttributes().toMap(object.paymentAttributes);
        map['added_date_str'] = object.addedDateStr;

        return map;
    }

    toMapList(objectList: Package[]): any[] {
        const mapList: any[] = [];
        for (let i = 0; i < objectList.length; i++) {
            if (objectList[i] != null) {
                mapList.push(this.toMap(objectList[i]));
            }
        }

        return mapList;
    }

    fromMap(obj: any) {
        return new Package().init(

            obj.id,
            obj.payment_id,
            obj.core_keys_id,
            obj.shop_id,
            new Payment().fromMap(obj.payment),
            new CoreKey().fromMap(obj.core_key),
            new PaymentInfo().fromMap(obj.payment_info),
            new PaymentAttributes().fromMap(obj.payment_attributes),
            obj.added_date_str,

        );
    }

    fromMapList(objList: any[]): Package[] {
        const ratingList: Package[] = [];
        for (const obj in objList) {
            if (obj != null) {
                ratingList.push(this.fromMap(obj));
            }
        }

        return ratingList;
    }
}
