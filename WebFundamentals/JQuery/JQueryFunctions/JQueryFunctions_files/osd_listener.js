(function(){var h=this,aa=function(){},ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},l=function(a){return"string"==typeof a},da=function(a,b,c){return a.call.apply(a.bind,arguments)},ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return q.apply(null,arguments)},fa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},r=Date.now||function(){return+new Date},t=function(a,b){a=a.split(".");var c=h;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var ga=function(a,b,c,d,e){if(e)c=a+("&"+b+"="+c);else{var f="&"+b+"=",g=a.indexOf(f);0>g?c=a+f+c:(g+=f.length,f=a.indexOf("&",g),c=0<=f?a.substring(0,g)+c+a.substring(f):a.substring(0,g)+c)}return 2E3<c.length?void 0!==d?ga(a,b,d,void 0,e):a:c};var ha=function(){var a=/[&\?#]exk=([^& ]+)/.exec(u.location.href);return a&&2==a.length?a[1]:null};var ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ka=function(a,b){var c=0;a=ia(String(a)).split(".");b=ia(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=ja(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||ja(0==f[2].length,0==g[2].length)||ja(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},ja=function(a,b){return a<b?-1:a>b?1:0};var la=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ma=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=l(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},na=Array.prototype.reduce?function(a,b,c,d){d&&(b=q(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;v(a,function(c,g){e=b.call(d,e,c,g,a)});return e},oa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},pa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var qa=function(a){qa[" "](a);return a};qa[" "]=aa;var sa=function(a,b){var c=ra;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var w=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{qa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},ta=function(a,b,c){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)},va=function(){var a=ua;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};var wa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},xa=function(a,b){return null!==a&&b in a};var x;a:{var ya=h.navigator;if(ya){var za=ya.userAgent;if(za){x=za;break a}}x=""}var y=function(a){return-1!=x.indexOf(a)},Aa=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Ba=function(){return y("Trident")||y("MSIE")},Ca=function(){return y("Safari")&&!(z()||y("Coast")||y("Opera")||y("Edge")||y("Silk")||y("Android"))},z=function(){return(y("Chrome")||y("CriOS"))&&!y("Edge")},Ea=function(){function a(a){var b;a:{b=d;for(var e=a.length,k=l(a)?a.split(""):a,m=0;m<e;m++)if(m in k&&b.call(void 0,k[m],m,a)){b=m;break a}b=-1}return c[0>b?null:l(a)?a.charAt(b):a[b]]||""}var b=x;if(Ba())return Da(b);var b=Aa(b),c={};v(b,function(a){c[a[0]]=a[1]});var d=fa(xa,c);return y("Opera")?a(["Version","Opera"]):y("Edge")?a(["Edge"]):z()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""},Da=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];var b="",c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var A=function(){return y("iPhone")&&!y("iPod")&&!y("iPad")};var Ia=y("Opera"),B=Ba(),Ja=y("Edge"),Ka=y("Gecko")&&!(-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),La=-1!=x.toLowerCase().indexOf("webkit")&&!y("Edge"),Ma=y("Macintosh"),Na=y("Windows"),Oa=y("Android"),Pa=A(),Qa=y("iPad"),Ra=y("iPod"),Sa=function(){var a=h.document;return a?a.documentMode:void 0},Ta;a:{var Ua="",Va=function(){var a=x;if(Ka)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ja)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(La)return/WebKit\/(\S+)/.exec(a);if(Ia)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Va&&(Ua=Va?Va[1]:"");if(B){var Wa=Sa();if(null!=Wa&&Wa>parseFloat(Ua)){Ta=String(Wa);break a}}Ta=Ua}var Xa=Ta,ra={},Ya=function(a){sa(a,function(){return 0<=ka(Xa,a)})},Za;var $a=h.document;Za=$a&&B?Sa()||("CSS1Compat"==$a.compatMode?parseInt(Xa,10):5):void 0;var ab=y("Firefox"),bb=A()||y("iPod"),cb=y("iPad"),db=y("Android")&&!(z()||y("Firefox")||y("Opera")||y("Silk")),eb=z(),fb=Ca()&&!(A()||y("iPad")||y("iPod"));var hb=function(a,b,c){var d=gb();this.label=a;this.type=b;this.eventId=c;this.value=d;this.duration=0};var C=function(a,b){this.j=[];this.w={};this.c={};this.l=b||h;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.j=b.google_js_reporting_queue);this.h=null!=this.l.google_measure_js_timing?this.l.google_measure_js_timing:Math.random()<a},gb=function(){var a=h.performance;return a&&a.now?a.now():r()},D=function(a){return"goog_"+a.label+"_"+a.type+"_"+a.eventId},ib=function(a,b){a=a.l;a.performance&&a.performance.mark&&a.performance.mark(b)};C.prototype.disable=function(){v(this.j,this.o,this);ta(this.c,function(a){v(a,this.o,this)},this);this.c={};this.j.length=0;this.h=!1};C.prototype.o=function(a){a=D(a);var b=this.l.performance;b&&b.clearMarks&&(b.clearMarks(a+"_start"),b.clearMarks(a+"_end"))};C.prototype.start=function(a,b){if(!this.h)return null;var c=(this.w[a]||0)+1;this.w[a]=c;c=new hb(a,b,c);a=a+"_"+b;this.c[a]?this.c[a].push(c):this.c[a]=[c];ib(this,D(c)+"_start");return c};C.prototype.end=function(a,b){this.h&&(a=a+"_"+b,(b=this.c[a])&&b.length&&(a=this.c[a].pop(),a.duration=gb()-a.value,ib(this,D(a)+"_end"),this.j.push(a)))};var jb=function(a,b,c){if(!a.h)return c();var d=a.start(b,3),e;try{e=c()}catch(g){var f=a.c[b+"_3"]||[];v(f,function(a,b){D(a)===D(d)&&(this.o(d),f.splice(b,1))},a);throw g;}a.end(b,3);return e},lb=function(a,b){return q(function(){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return jb(this,a,function(){return b.apply(void 0,c)})},kb)};var mb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});h.addEventListener("test",null,b)}catch(c){}return a}(),nb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,mb?d:d?d.capture||!1:!1):a.attachEvent&&a.attachEvent("on"+b,c)},ob=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,mb?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};var pb=function(a,b,c){if("array"==ba(b))for(var d=0;d<b.length;d++)pb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))},qb=function(a,b,c){for(c=c||0;c<b.length;c+=2)pb(b[c],b[c+1],a);return a},rb=function(a,b){var c=2==arguments.length?qb([a],arguments[1],0):qb([a],arguments,1);if(c[1]){var d=c[0],e=d.indexOf("#");0<=e&&(c.push(d.substr(e)),c[0]=d=d.substr(0,e));e=d.indexOf("?");0>e?c[1]="?":e==d.length-1&&(c[1]=void 0)}return c.join("")};var sb=function(a,b){this.F=a;this.G=b},tb=function(a,b){this.url=a;this.A=!!b;this.depth=null};var ub=function(a,b,c,d,e){this.B=c||4E3;this.i=a||"&";this.O=b||",$";this.m=void 0!==d?d:"trn";this.Y=e||null;this.v=!1;this.g={};this.U=0;this.f=[]},vb=function(a,b){var c={};c[a]=b;return[c]},E=function(a,b,c,d){a.f.push(b);a.g[b]=vb(c,d)},yb=function(a,b,c,d){b=b+"//"+c+d;var e=wb(a)-d.length-0;if(0>e)return"";a.f.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.f.length;f++)for(var g=a.f[f],k=a.g[g],m=0;m<k.length;m++){if(!e){d=null==d?g:d;break}var p=xb(k[m],a.i,a.O);if(p){p=c+p;if(e>=p.length){e-=p.length;b+=p;c=a.i;break}else a.v&&(c=e,p[c-1]==a.i&&--c,b+=p.substr(0,c),c=a.i,e=0);d=null==d?g:d}}f="";a.m&&null!=d&&(f=c+a.m+"="+(a.Y||d));return b+f+""},wb=function(a){if(!a.m)return a.B;var b=1,c;for(c in a.g)b=c.length>b?c.length:b;return a.B-a.m.length-b-a.i.length-1},xb=function(a,b,c,d,e){var f=[];ta(a,function(a,k){(a=zb(a,b,c,d,e))&&f.push(k+"="+a)});return f.join(b)},zb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(zb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(xb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};var Bb=function(a,b,c,d,e){if((d?a.X:Math.random())<(e||a.P))try{var f;c instanceof ub?f=c:(f=new ub,ta(c,function(a,b){var c=f,d=c.U++;a=vb(b,a);c.f.push(d);c.g[d]=a}));var g=yb(f,a.W,a.R,a.V+b+"&");g&&Ab(h,g)}catch(k){}},Ab=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(a){c(a);ob(d,"load",e);ob(d,"error",e)};nb(d,"load",e);nb(d,"error",e)}d.src=b;a.google_image_requests.push(d)};var Cb=function(a,b,c){this.D=a;this.T=b;this.s=c;this.u=null;this.S=this.C;this.H=!1},Fb=function(a){return new Db(Eb(a),a.fileName,a.lineNumber)},Eb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},Gb=function(a,b,c){var d;try{d=c()}catch(g){var e=a.s;try{var f=Fb(g),e=a.S.call(a,b,f,void 0,void 0)}catch(k){a.C("pAR",k)}if(!e)throw g;}finally{}return d},Hb=function(a,b,c){return function(){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];return Gb(a,b,function(){return c.apply(void 0,d)})}};Cb.prototype.C=function(a,b,c,d,e){try{var f=e||this.T,g=new ub;g.v=!0;E(g,1,"context",a);b instanceof Db||(b=Fb(b));E(g,2,"msg",b.message.substring(0,512));b.fileName&&E(g,3,"file",b.fileName);0<b.lineNumber&&E(g,4,"line",b.lineNumber.toString());b={};if(this.u)try{this.u(b)}catch(ca){}if(d)try{d(b)}catch(ca){}d=[b];g.f.push(5);g.g[5]=d;var k;e=h;d=[];var m,p=null;do{b=e;w(b)?(m=b.location.href,p=b.document&&b.document.referrer||null):(m=p,p=null);d.push(new tb(m||""));try{e=b.parent}catch(ca){e=null}}while(e&&b!=e);m=0;for(var n=d.length-1;m<=n;++m)d[m].depth=n-m;b=h;if(b.location&&b.location.ancestorOrigins&&b.location.ancestorOrigins.length==d.length-1)for(m=1;m<d.length;++m){var Fa=d[m];Fa.url||(Fa.url=b.location.ancestorOrigins[m-1]||"",Fa.A=!0)}for(var Ga=new tb(h.location.href,!1),Ha=d.length-1,n=Ha;0<=n;--n){var G=d[n];if(G.url&&!G.A){Ga=G;break}}var G=null,Hc=d.length&&d[Ha].url;0!=Ga.depth&&Hc&&(G=d[Ha]);k=new sb(Ga,G);k.G&&E(g,6,"top",k.G.url||"");E(g,7,"url",k.F.url||"");Bb(this.D,f,g,this.H,c)}catch(ca){try{Bb(this.D,f,{context:"ecmserr",rctx:a,msg:Eb(ca),url:k.F.url},this.H,c)}catch(Wc){}}return this.s};var Db=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1};var F=function(a,b){this.width=a;this.height=b};F.prototype.clone=function(){return new F(this.width,this.height)};F.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};F.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};F.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};F.prototype.scale=function(a,b){this.width*=a;this.height*="number"==typeof b?b:a;return this};var Ib;if(!(Ib=!Ka&&!B)){var Jb;if(Jb=B)Jb=9<=Number(Za);Ib=Jb}Ib||Ka&&Ya("1.9.1");B&&Ya("9");var H=document,u=window;var Kb=null,I=function(a,b){Ab(a,b,void 0)},Lb=function(){if(!H.body)return!1;if(!Kb){var a=H.createElement("iframe");a.style.display="none";a.id="anonIframe";Kb=a;H.body.appendChild(a)}return!0},Mb=!!window.google_async_iframe_id,J=Mb&&window.parent||window;var Nb,K;if(Mb&&!w(J)){var Ob="."+H.domain;try{for(;2<Ob.split(".").length&&!w(J);)H.domain=Ob=Ob.substr(Ob.indexOf(".")+1),J=window.parent}catch(a){}w(J)||(J=window)}K=J;var kb=new C(1,K);Nb=new Cb(new function(){this.W="http:"===u.location.protocol?"http:":"https:";this.R="pagead2.googlesyndication.com";this.V="/pagead/gen_204?id=";this.P=.01;this.X=Math.random()},"jserror",!0);"complete"==K.document.readyState?K.google_measure_js_timing||kb.disable():kb.h&&nb(K,"load",function(){K.google_measure_js_timing||kb.disable()});var L=function(a,b){a=a.toString();return Hb(Nb,a,lb(a,b))};var Pb={N:"ud=1",M:"ts=0",da:"sc=1",J:"gz=1",L:"sl=1",ea:"efp=1",ca:"pvu=1",aa:"dcl=1",I:"co=1",ba:"mlc=1",$:"rafv=1",Z:"rafx=1",K:"opp=1"};if(H&&H.URL){var ua=H.URL,Qb=!(ua&&0<va().length);Nb.s=Qb}var M=function(a,b,c,d){c=L(d,c);nb(a,b,c,{capture:void 0})},Rb=function(a){var b=["IMG","FRAME","IFRAME"];return oa(b,function(b){return a.nodeName==String(b)})?[a]:na(b,function(b,d){return b.concat(pa((a||document).getElementsByTagName(String(d))))},[])},Tb=function(a){var b=Sb,c=0,d=null;a=Rb(a);for(var e=0;e<a.length;e++){var f=!1,d=a[e];switch(d.nodeName){case "IMG":if(d.complete||d.naturalWidth)f=!0;break;case "FRAME":case "IFRAME":"complete"==d.readyState&&(f=!0)}f||(c++,M(d,"load",function(){c--;c||b(null)},116))}a=d=null;c||b(null)},Ub=function(a,b,c){if(!(0>=b)){var d=0,e=function(){a();d++;d<b&&u.setTimeout(L(c,e),100)};e()}};var Vb=function(a,b){this.b=a||0;this.a=b||""},Wb=function(a,b){a.b&&(b[4]=a.b);a.a&&(b[12]=a.a)};Vb.prototype.match=function(a){return(this.b||this.a)&&(a.b||a.a)?this.a||a.a?this.a==a.a:this.b||a.b?this.b==a.b:!1:!1};Vb.prototype.toString=function(){var a=""+this.b;this.a&&(a+="-"+this.a);return a};var Xb=function(){var a=N,b=[];a.b&&b.push("adk="+a.b);a.a&&b.push("exk="+a.a);return b},Yb=function(a){var b=[];wa(a,function(a,d){d=encodeURIComponent(d);l(a)&&(a=encodeURIComponent(a));b.push(d+"="+a)});b.push("24="+(new Date).getTime());return b.join("\n")},O=0,Zb=0,$b=function(a,b){var c=0,d=u;try{if(d&&d.Goog_AdSense_getAdAdapterInstance)return d}catch(e){}for(;d&&5>c;){try{if(d.google_osd_static_frame)return d}catch(e){}try{if(d.aswift_0&&(!a||d.aswift_0.google_osd_static_frame))return d.aswift_0}catch(e){}c++;d=Ca()&&b?d.location&&d.location.ancestorOrigins&&0<d.location.ancestorOrigins.length&&d.location.origin==d.location.ancestorOrigins[0]?d.parent:null:d!=d.parent?d.parent:null}return null},ac=function(a,b,c,d,e,f,g){g=g||aa;if(10<Zb)u.clearInterval(O),g();else if(++Zb,u.postMessage&&(b.b||b.a)){if(f=$b(!0,f)){g={};Wb(b,g);g[0]="goog_request_monitoring";g[6]=a;g[16]=c;d&&d.length&&(g[17]=d.join(","));e&&(g[19]=e);try{var k=Yb(g);f.postMessage(k,"*")}catch(m){}}}else u.clearInterval(O),g()},bc=function(a,b){b=$b(!1,b);var c=!b;!b&&u&&(b=u.parent);if(b&&b.postMessage)try{b.postMessage(a,"*"),c&&u.postMessage(a,"*")}catch(d){}};var P=!1,cc=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(P=!0,a.description)){cc(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){P=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],P=!(!a||!a.enabledPlugin))){cc(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");P=!0;cc(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");P=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),P=!0,cc(b.GetVariable("$version"))}catch(c){}})();(function(){var a;return Na?(a=/Windows NT ([0-9.]+)/,(a=a.exec(x))?a[1]:"0"):Ma?(a=/10[_.][0-9_.]+/,(a=a.exec(x))?a[0].replace(/_/g,"."):"10"):Oa?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(x))?a[1]:""):Pa||Qa||Ra?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(x))?a[1].replace(/_/g,"."):""):""})();var Q=function(a){return(a=a.exec(x))?a[1]:""};(function(){if(ab)return Q(/Firefox\/([0-9.]+)/);if(B||Ja||Ia)return Xa;if(eb)return Q(/Chrome\/([0-9.]+)/);if(fb&&!(A()||y("iPad")||y("iPod")))return Q(/Version\/([0-9.]+)/);if(bb||cb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(x);if(a)return a[1]+"."+a[2]}else if(db)return(a=Q(/Android\s+([0-9.]+)/))?a:Q(/Version\/([0-9.]+)/);return""})();var dc=function(){var a=u;return null!==a&&a.top!=a},fc=function(){var a=dc(),b=a&&0<="//tpc.googlesyndication.com".indexOf(u.location.host);if(a&&u.name&&0==u.name.indexOf("google_ads_iframe")||b){var c;a=u||u;try{var d;if(a.document&&!a.document.body)d=new F(-1,-1);else{var e=(a||window).document,f="CSS1Compat"==e.compatMode?e.documentElement:e.body;d=(new F(f.clientWidth,f.clientHeight)).round()}c=d}catch(g){c=new F(-12245933,-12245933)}return ec(c)}c=(u.document||document).getElementsByTagName("SCRIPT");return 0<c.length&&(c=c[c.length-1],c.parentElement&&c.parentElement.id&&0<c.parentElement.id.indexOf("_ad_container"))?ec(void 0,c.parentElement):null},ec=function(a,b){var c=gc("IMG",a,b);return c?c:(c=gc("IFRAME",a,b))?c:(a=gc("OBJECT",a,b))?a:null},gc=function(a,b,c){var d=document;c=c||d;d=a&&"*"!=a?String(a).toUpperCase():"";c=c.querySelectorAll&&c.querySelector&&d?c.querySelectorAll(d+""):c.getElementsByTagName(d||"*");for(d=0;d<c.length;d++){var e=c[d];if("OBJECT"==a)a:{var f=e.getAttribute("height");if(null!=f&&0<f&&0==e.clientHeight)for(var f=e.children,g=0;g<f.length;g++){var k=f[g];if("OBJECT"==k.nodeName||"EMBED"==k.nodeName){e=k;break a}}}f=e.clientHeight;g=e.clientWidth;if(k=b)k=new F(g,f),k=Math.abs(b.width-k.width)<.1*b.width&&Math.abs(b.height-k.height)<.1*b.height;if(k||!b&&10<f&&10<g)return e}return null};var R=0,S="",hc=[],T=!1,U=!1,V=!1,ic=!0,jc=!1,kc=!1,lc=!1,mc=!1,nc=!1,oc=0,pc=0,W=0,qc=0,rc=[],N=null,sc="",tc=[],uc=null,vc=[],wc=!1,xc="",yc="",zc=(new Date).getTime(),Ac=!1,Bc="",Cc=!1,Dc=["1","0","3"],X=0,Y=0,Ec=0,Fc="",Gc=!1,Ic=!1,Kc=function(a,b,c){T&&(ic||3!=(c||3)||kc)&&Jc(a,b,!0);if(V||U&&jc)Jc(a,b),U=V=!1},Lc=function(){var a=uc;return a?2!=a():!0},Jc=function(a,b,c){if((b=b||sc)&&!wc&&(2==Y||c)&&Lc()){for(var d=0;d<hc.length;++d){var e=Mc(hc[d],b,c);I(a,e)}mc=!0;c?T=!1:wc=!0}},Nc=function(a,b){var c=[];a&&c.push("avi="+a);b&&c.push("cid="+b);return c.length?"//pagead2.googlesyndication.com/activeview?"+c.join("&"):"//pagead2.googlesyndication.com/activeview"},Mc=function(a,b,c){c=c?"osdim":V?"osd2":"osdtos";a=[a,-1<a.indexOf("?")?"&id=":"?id=",c];"osd2"==c&&U&&jc&&a.push("&ts=1");a.push("&ti=1");a.push("&",b);a.push("&uc="+Ec);Ac?a.push("&tgt="+Bc):a.push("&tgt=nf");a.push("&cl="+(Cc?1:0));nc&&(a.push("&lop=1"),b=r()-oc,a.push("&tslp="+b));qc&&a.push("&sle="+qc);b=a.join("");for(a=0;a<tc.length;a++){try{var d=tc[a]()}catch(e){}c="max_length";2<=d.length&&(3==d.length&&(c=d[2]),b=ga(b,encodeURIComponent(d[0]),encodeURIComponent(d[1]),c))}2E3<b.length&&(b=b.substring(0,2E3));return b},Z=function(a){if(xc){try{var b=ga(xc,"vi",a);Lb()&&I(Kb.contentWindow,b)}catch(c){}0<=la(Dc,a)&&(xc="")}},Oc=function(){Z("-1")},Qc=function(a){if(a&&a.data&&l(a.data)){var b;var c=a.data;if(l(c)){b={};for(var c=c.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");if(!(0>=e)){var f=Number(c[d].substr(0,e)),e=c[d].substr(e+1);switch(f){case 5:case 8:case 11:case 15:case 16:case 18:e="true"==e;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:case 25:e=Number(e);break;case 3:case 19:if("function"==ba(decodeURIComponent))try{e=decodeURIComponent(e)}catch(k){throw Error("Error: URI malformed: "+e);}break;case 17:e=ma(decodeURIComponent(e).split(","),Number)}b[f]=e}}b=b[0]?b:null}else b=null;if(b&&(c=new Vb(b[4],b[12]),N&&N.match(c))){for(c=0;c<vc.length;c++)vc[c](b);b&&(c=100*b[25],"number"==typeof c&&!isNaN(c)&&(window.document["4CGeArbVQ"]=c|0));void 0!=b[18]&&(kc=b[18],kc||2!=W||(W=3,Pc()));Ic&&void 0!=b[7]&&0<b[7]&&(c=u,d="//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt="+b[7],S&&(d+="&avi="+S),I(c,d),Ic=!1);c=b[0];if("goog_acknowledge_monitoring"==c)u.clearInterval(O),X=2;else if("goog_get_mode"==c){X=1;d={};N&&Wb(N,d);d[0]="goog_provide_mode";d[6]=Y;d[19]=Fc;d[16]=U;try{var g=Yb(d);a.source.postMessage(g,a.origin)}catch(k){}u.clearInterval(O);X=2}else"goog_update_data"==c?(sc=b[3],++Ec):"goog_image_request"==c&&(Kc(u,b[3]),b[5]||b[11]||Z("0"));if("goog_update_data"==c||"goog_image_request"==c)(1==Y||2==Y||T)&&b[5]&&(a=1==b[15]&&"goog_update_data"==c,jc=!0,Z("1"),yc&&Lc()&&(g=yc,Lb()&&I(Kb.contentWindow,g),yc=""),T&&!a&&(Jc(u,void 0,!0),lc=!0,pc=r()),3==W&&(W=4,Pc()),T||1!=Y||(wc=!0)),(1==Y||2==Y||T)&&b[11]&&(U=!1,Z("3"),T&&(Jc(u,void 0,!0),1==W&&kc&&(W=2)))}}},Pc=function(){var a=u,b=W;0!=b&&1!=b&&Rc(a,"osdim","zas="+b)},Rc=function(a,b,c){var d=[];S&&d.push("avi="+S);d.push("id="+b);d.push("ovr_value="+R);nc&&d.push("lop=1");N&&(d=d.concat(Xb()));d.push("tt="+((new Date).getTime()-zc));d.push(c);a.document&&a.document.referrer&&d.push("ref="+encodeURIComponent(a.document.referrer));try{I(a,"//pagead2.googlesyndication.com/pagead/gen_204?"+d.join("&"))}catch(e){}},Sc=function(){Kc(u);Z("0");2>X&&!U&&2==Y&&Rc(u,"osd2","hs="+X)},Tc=function(){var a={};Wb(N,a);a[0]="goog_dom_content_loaded";var b=Yb(a),c=Gc;try{Ub(function(){bc(b,c)},10,114)}catch(d){}},Sb=function(){var a={};Wb(N,a);a[0]="goog_creative_loaded";var b=Yb(a),c=Gc;Ub(function(){bc(b,c)},10,115);Cc=!0},Uc=function(a){if(l(a)){a=a.split("&");for(var b=a.length-1;0<=b;b--){var c=a[b],d=Pb;c==d.N?(ic=!1,a.splice(b,1)):c==d.J?(W=1,a.splice(b,1)):c==d.L?(qc=1,a.splice(b,1)):c==d.M?(U=!1,a.splice(b,1)):c==d.I?(Gc=!0,a.splice(b,1)):c==d.K&&(Ic=!0,a.splice(b,1))}Fc=a.join("&")}},Vc=function(){if(!Ac){var a=fc();a&&(Ac=!0,Bc=a.tagName,1==qc?Tb(a):a.complete||a.naturalWidth?Sb():M(a,"load",Sb,116))}};t("osdlfm",L(123,function(a,b,c,d,e,f,g,k,m,p){R=a;xc=b;yc=d;T=f;g&&Uc(g);U=f;1==k?rc.push(947190538):2==k?rc.push(947190541):3==k&&rc.push(947190542);N=new Vb(e,ha());M(u,"load",Oc,117);M(u,"message",Qc,118);S=c||"";hc=[p||Nc(c,m)];M(u,"unload",Sc,119);var n=u.document;!n.readyState||"complete"!=n.readyState&&"loaded"!=n.readyState?!Ba()||0<=ka(Ea(),11)?M(n,"DOMContentLoaded",Tc,121):M(n,"readystatechange",function(){"complete"!=n.readyState&&"loaded"!=n.readyState||Tc()},120):Tc();-1==R?Y=f?3:1:-2==R?Y=3:0<R&&(Y=2,V=!0);U&&!V&&-1==R&&(Y=2);N&&(N.b||N.a)&&(X=1,O=u.setInterval(L(197,fa(ac,Y,N,U,rc,Fc,Gc,void 0)),500));Ub(Vc,5,122)}));t("osdlac",L(124,function(a){tc.push(a)}));t("osdlamrc",L(125,function(a){vc.push(a)}));t("osdsir",L(126,Kc));t("osdacrc",L(127,function(a){uc=a}));t("osdpcls",L(128,function(a){if(nc)return!0;if(!a||!dc()||wc||mc&&!lc)return!1;nc=!0;a=/^(http[s]?:)?\/\//.test(a)?a:Nc(a);if(lc){var b=Mc(a,sc,!0),c=r()-pc,b=rb(b,"tsvp",c);I(u,b)}hc.push(a);oc=r();return!0}));}).call(this);
