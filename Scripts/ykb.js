/*
Unlocks by Guajie

************************
Surge 4.2.0+ 脚本配置:
************************

[Script]
ykb = type=http-response,pattern=https://api.yikaobang.com.cn/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/guajie/Surge/master/Scripts/ykb.js,script-update-interval=0

[MITM] 
hostname= api.yikaobang.com.cn

************************
QuantumultX 脚本配置:
************************

[rewrite_remote]
https://api.yikaobang.com.cn/* url script-response-body https://raw.githubusercontent.com/guajie/Surge/master/Scripts/ykb.js

[mitm] 
hostname= api.yikaobang.com.cn

*/

var body = $response.body.replace(/\u0069\u0073\u005F\u0076\u0069\u0070\u0022\u003A\u0022\u0030/g, '\u0069\u0073\u005F\u0076\u0069\u0070\u0022\u003A\u0022\u0031').replace(/\u0070\u0061\u0073\u0073\u0022\u003A\u0030/g, '\u0070\u0061\u0073\u0073\u0022\u003A\u0031').replace(/\u0077\u0061\u0074\u0063\u0068\u005F\u0070\u0065\u0072\u006D\u0069\u0073\u0073\u0069\u006F\u006E\u0022\u003A\u0022\u0030/g, '\u0077\u0061\u0074\u0063\u0068\u005F\u0070\u0065\u0072\u006D\u0069\u0073\u0073\u0069\u006F\u006E\u0022\u003A\u0022\u0031')
$done({ body });
