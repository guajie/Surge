/*
Surge:

[Script]
http-response ^https?:\/\/(i|newdrugs)\.dxy\.cn\/(snsapi\/username\/|app\/user\/(pro\/stat\?|init\?timestamp=)) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/yyzs.js

[MITM]
hostname = newdrugs.dxy.cn
*/

const path1 = "/snsapi/username/";
const path2 = "/app/user/pro/stat?";
const path3 = "/app/user/init";
const path4 = "/app/user/pro/isUserProAndNotExpired"

const url = $request.url;
let body = $response.body;

if (url.indexOf(path1) != -1){
body = JSON.parse(body);
body.items.expertUser = true;
body.items.expert = true;
body.items.expertStatus = 1;
body.items.professional = true;
body = JSON.stringify(body);
}

if (url.indexOf(path2) != -1){
body = JSON.parse(body);
body.data.isActive = true;
body.data.memberDiscount = true;
body.data.svipUserProInfo.activeType = 1;
body.data.userProDiscountPromptType =1;
body.data.remainExpiredDay = 9999;
body = JSON.stringify(body);
}

if (url.indexOf(path3) != -1){
body = JSON.parse(body);
body.data.isProActive = true;
body.data.expireDate = 1866040547;
body.data.memberDiscount = true;
body.data.iapPurchaseVO.purchase = true;
body.data.iapPurchaseVO.message = null;
body.data.iapPurchaseVO.error = null;
body.data.iapPurchaseVO.expireDate = 2048-02-25;
body = JSON.stringify(body);
}
if (url.indexOf(path4) != -1){
body = JSON.parse(body);
body.data = true;
body = JSON.stringify(body);
}
$done({body})

// by Primovist
