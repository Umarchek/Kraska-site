fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery(window).bind('pageshow',function(event){if(typeof event.originalEvent['persisted']!='undefined'&&event.originalEvent['persisted'])location.reload();});fbuilderjQuery.fbuilderjQueryGenerator=function(){(function($){$.fbuilder=$.fbuilder||{};$.fbuilder['objName']='fbuilderjQuery';;(function(root){var lib={};lib.cf_logical_version='0.1';lib.IF=function(condition,if_true,if_false){if(condition){return(typeof if_true==='undefined')?true:if_true;}else{return(typeof if_false==='undefined')?false:if_false;}};lib.AND=function(){for(var i=0,h=arguments.length;i<h;i++){if(!arguments[i]){return false;}}
return true;};lib.OR=function(){for(var i=0,h=arguments.length;i<h;i++){if(arguments[i]){return true;}}
return false;};lib.NOT=function(_term){return(typeof _term=='undefined')?true:!_term;};lib.IN=function(_term,_values){function _reduce(str){return String(str).replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s+/,' ').toLowerCase();};_term=_reduce(_term);if(typeof _values=='string')return _reduce(_values).indexOf(_term)!=-1;else if(typeof _values=='object'&&_values.length){for(var i=0,h=_values.length;i<h;i++)if(_reduce(_values[i]).indexOf(_term)!=-1)return true;}
return false;};root.CF_LOGICAL=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['default']={'prefix':'','callback':function()
{var math_prop=["LN10","PI","E","LOG10E","SQRT2","LOG2E","SQRT1_2","LN2","cos","pow","log","tan","sqrt","asin","abs","exp","atan2","atanh","random","acos","atan","sin"];for(var i=0,h=math_prop.length;i<h;i++)
{if(!window[math_prop[i]])
{window[math_prop[i]]=window[math_prop[i].toUpperCase()]=Math[math_prop[i]];}}
if(Number.prototype.LENGTH==undefined)
{Number.prototype.LENGTH=function(){return this.valueOf().toString().length;};}
if(window.REMAINDER==undefined)
{window.REMAINDER=window.remainder=function(a,b){return a%b;};}
function ROUNDx(operation,num,y)
{if(y&&y!=0)
{var r=operation(num/y)*y,p=(new String(y)).split('.');if(p.length==2)r=PREC(r,p[1].length);return r;}
else
{return operation(num);}};if(window.ROUND==undefined)
{window.ROUND=window.round=function(num,y)
{if(y)return ROUNDx(Math.round,num,y);return ROUNDx(Math.round,num);}}
if(window.FLOOR==undefined)
{window.FLOOR=window.floor=function(num,y)
{if(y)return ROUNDx(Math.floor,num,y);return ROUNDx(Math.floor,num);}}
if(window.CEIL==undefined)
{window.CEIL=window.ceil=function(num,y)
{if(y)return ROUNDx(Math.ceil,num,y);return ROUNDx(Math.ceil,num);}}
if(window.PREC==undefined)
{window.PREC=window.prec=function(num,pr)
{if('undefined'==typeof pr)pr=0;if(/^\d+$/.test(pr)&&$.isNumeric(num))
{var f=Math.pow(10,pr);num=Math.round(num*f)/f;return num.toFixed(pr);}
return num;};}
if(window.CDATE==undefined)
{window.CDATE=window.cdate=function(num,format)
{format=(typeof format!='undefined')?format:((typeof window.DATETIMEFORMAT!='undefined')?window.DATETIMEFORMAT:'dd/mm/yyyy');if(isFinite(num*1))
{var time_only=(num<1);num=Math.round(num*86400000);if(time_only)num+=(new Date(2021,01,01,0,0,0,0)).valueOf();var date=new Date(num),d=(time_only)?0:date.getDate(),m=(time_only)?0:date.getMonth()+1,y=(time_only)?0:date.getFullYear(),h=date.getHours(),i=date.getMinutes(),s=date.getSeconds(),a='';m=(m<10)?'0'+m:m;d=(d<10)?'0'+d:d;if(/a/.test(format))
{a=(h>=12)?'pm':'am';h=h%12;h=(h==0)?12:h;}
h=(h<10)?'0'+h:h;i=(i<10)?'0'+i:i;s=(s<10)?'0'+s:s;return format.replace(/\by{2}\b/i,y%100).replace(/y+/i,y).replace(/m+/i,m).replace(/d+/i,d).replace(/h+/i,h).replace(/i+/i,i).replace(/s+/i,s).replace(/a+/i,a);}
return num;};}
if(window.SUM==undefined)
{window.SUM=window.sum=function()
{var r=0,t;for(var i in arguments)
{if(Array.isArray(arguments[i]))
r+=SUM.apply(this,arguments[i]);else if(jQuery.isPlainObject(arguments[i]))
r+=SUM.apply(this,Object.values(arguments[i]));else
{t=arguments[i]*1;if(!isNaN(t))r+=t;}}
return r;};}
if(window.CONCATENATE==undefined)
{window.CONCATENATE=window.concatenate=function()
{var r='';for(var i in arguments)
{if(Array.isArray(arguments[i]))
r+=CONCATENATE.apply(this,arguments[i]);else if(jQuery.isPlainObject(arguments[i]))
r+=CONCATENATE.apply(this,Object.values(arguments[i]));else r+=(new String(arguments[i]));}
return r;};}
if(window.AVERAGE==undefined)
{window.AVERAGE=window.average=function()
{return SUM.apply(this,arguments)/arguments.length;};}
if(window.GCD==undefined)
{window.GCD=window.gcd=function(a,b)
{if(!b)return a;return GCD(b,a%b);};}
if(window.LCM==undefined)
{window.LCM=window.lcm=function(a,b)
{return(!a||!b)?0:ABS((a*b)/GCD(a,b));};}
if(window.LOGAB==undefined)
{window.LOGAB=window.logab=function(a,b)
{return LOG(a)/LOG(b);};}
if(window.MIN==undefined)
{window.MIN=window.min=function()
{var l=[];for(var i in arguments)
var l=l.concat(arguments[i]);return Math.min.apply(this,l);};}
if(window.MAX==undefined)
{window.MAX=window.max=function()
{var l=[];for(var i in arguments)
var l=l.concat(arguments[i]);return Math.max.apply(this,l);};}
if(window.RADIANS==undefined)
{window.RADIANS=window.radians=function(a){return a*PI/180;};}
if(window.DEGREES==undefined)
{window.DEGREES=window.degrees=function(a){return a*180/PI;};}
if(window.FACTORIAL==undefined)
{window.FACTORIAL=window.factorial=function(a){if(a<0||FLOOR(a)!=a)return null;var r=1;for(var i=1;i<=a;i++)r*=i
return r;};}
if(window.SCIENTIFICTODECIMAL==undefined)
{window.SCIENTIFICTODECIMAL=window.scientifictodecimal=function(x){if(Math.abs(x)<1.0)
{var e=parseInt(x.toString().split('e-')[1]);if(e)
{x*=Math.pow(10,e-1);x='0.'+(new Array(e)).join('0')+x.toString().substring(2);}}
else
{var e=parseInt(x.toString().split('+')[1]);if(e>20)
{e-=20;x/=Math.pow(10,e);x+=(new Array(e+1)).join('0');}}
return x;};}
if(window.FORMAT==undefined)
{window.FORMAT=window.format=function(x,o){return fbuilderjQuery.fbuilder.calculator.format(x,o);};}
fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['default']['prefix'],CF_LOGICAL);},'validator':function(v)
{return(typeof v=='number')?isFinite(v):(typeof v!='undefined');}};;(function(root){var lib={},default_format=(typeof window.DATETIMEFORMAT!='undefined')?window.DATETIMEFORMAT:'yyyy-mm-dd hh:ii:ss a',regExp='';Date.prototype.valid=function(){return isFinite(this);};function _getDateObj(date,format){var d=new Date();format=format||default_format;if(typeof date!='undefined'){if(typeof date=='number'){d=new Date(Math.ceil(date*86400000));}else if(typeof date=='string'){var p;if(null!=(p=/(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})/.exec(date))){if(/y{4}[\/\-\.]m{2}[\/\-\.]d{2}/i.test(format)){d=new Date(p[1],(p[2]-1),p[3]);}else{d=new Date(p[1],(p[3]-1),p[2]);}
date=date.replace(p[0],'');}
if(null!=(p=/(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/.exec(date))){if(/d{2}[\/\-\.]m{2}[\/\-\.]y{4}/i.test(format)){d=new Date(p[3],(p[2]-1),p[1]);}else{d=new Date(p[3],(p[1]-1),p[2]);}
date=date.replace(p[0],'');}
if(null!=(p=/(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{2})/.exec(date))){if(/d{2}[\/\-\.]m{2}[\/\-\.]y{2}/i.test(format)){d=new Date(2000+p[3]*1,(p[2]-1),p[1]);}else if(/m{2}[\/\-\.]d{2}[\/\-\.]y{2}/i.test(format)){d=new Date(2000+p[3]*1,(p[1]-1),p[2]);}else if(/y{2}[\/\-\.]d{2}[\/\-\.]m{2}/i.test(format)){d=new Date(2000+p[1]*1,(p[3]-1),p[2]);}else if(/y{2}[\/\-\.]m{2}[\/\-\.]d{2}/i.test(format)){d=new Date(2000+p[1]*1,(p[2]-1),p[3]);}
date=date.replace(p[0],'');}
if(null!=(p=/(\d{1,2})[:\.](\d{1,2})([:\.](\d{1,2}))?\s*([ap]m)?/i.exec(date))){if(/h+/i.test(format)){if(typeof p[5]!='undefined'&&/pm/i.test(p[5]))p[1]=(p[1]*1+12)%24;d.setHours(p[1]);}
if(/i+/i.test(format))d.setMinutes(p[2]);if(/s+/i.test(format)&&(typeof p[4]!='undefined'))d.setSeconds(p[4]);}}else{d=new Date(date);}}
return d;};lib.cf_datetime_version='0.1';lib.DATEOBJ=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d;return false;};lib.YEAR=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getFullYear();return false;};lib.MONTH=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getMonth()+1;return false;};lib.DAY=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getDate();return false;};lib.WEEKDAY=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getDay()+1;return false;};lib.WEEKNUM=function(date,format){var d=_getDateObj(date,format),tmp=_getDateObj(date,format);if(d.valid()){var dayNr=(d.getDay()+6)%7;tmp.setDate(d.getDate()-dayNr+3);var firstThursday=tmp.valueOf();tmp.setMonth(0,1);if(tmp.getDay()!=4){tmp.setMonth(0,1+((4-tmp.getDay())+7)%7);}
return 1+Math.ceil((firstThursday-tmp)/604800000);}
return false;};lib.HOURS=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getHours();return false;};lib.MINUTES=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getMinutes();return false;};lib.SECONDS=function(date,format){var d=_getDateObj(date,format);if(d.valid())return d.getSeconds();return false;};lib.NOW=function(){return _getDateObj();};lib.TODAY=function(){var d=_getDateObj();d.setHours(0);d.setMinutes(0);d.setSeconds(0);return d;};lib.EOMONTH=function(d,n){n=(n||0)+1;var d1=_getDateObj(d);d1.setDate(1);d1.setMonth(d1.getMonth()+n);d1.setDate(d1.getDate()-1);return d1;};lib.DATEDIFF=function(date_one,date_two,date_format,return_format){var d1=_getDateObj(date_one,date_format),d2=_getDateObj(date_two,date_format),diff,r={'years':-1,'months':-1,'days':-1,'hours':-1,'minutes':-1,'seconds':-1};if(d1.valid()&&d2.valid()){if(d1.valueOf()>d2.valueOf()){d2=_getDateObj(date_one,date_format);d1=_getDateObj(date_two,date_format);}
diff=d2.valueOf()-d1.valueOf();if(typeof return_format=='undefined'||return_format=='d'){r.days=Math.ceil(diff/86400000);}else{var months,days,tmp;months=(d2.getFullYear()-d1.getFullYear())*12;months-=d1.getMonth()+1;months+=d2.getMonth()+1;days=d2.getDate()-d1.getDate();if(days<0){months--;tmp=new Date(d1.getFullYear(),d1.getMonth()+1);days=(tmp.valueOf()-d1.valueOf())/86400000+d2.getDate()+1;}
r.months=months;r.days=Math.floor(days);if(/y/i.test(return_format)){r.years=Math.floor(months/12);r.months=months%12;}}
r.hours=Math.floor(diff%86400000/3600000);r.minutes=Math.floor(diff%86400000%3600000/60000);r.seconds=Math.floor(diff%86400000%3600000%60000/1000);}
return r;};lib.DATETIMESUM=function(date,format,number,to_increase){var d=_getDateObj(date,format);if(d.valid()){if(typeof number!='number'&&isNaN(parseFloat(number)))number=0;else number=parseFloat(number);if(typeof to_increase=='undefined')to_increase='d';if(/y+/i.test(to_increase))d.setFullYear(d.getFullYear()+number);else if(/d+/i.test(to_increase))d.setDate(d.getDate()+number);else if(/m+/i.test(to_increase)){var tmp=DAY(d)
d.setDate(1);d.setMonth(d.getMonth()+number);d=EOMONTH(d);d.setDate(MIN(tmp,DAY(d)));}
else if(/h+/i.test(to_increase))d.setHours(d.getHours()+number);else if(/i+/i.test(to_increase))d.setMinutes(d.getMinutes()+number);else d.setSeconds(d.getSeconds()+number);return d;}
return false;};lib.DECIMALTOTIME=lib.decimaltotime=function(value,from_format,to_format){function complete(v,f)
{if(1<f[0].length&&v<10)v='0'+v;return v;};from_format=from_format.toLowerCase();var y=/\by+\b/i.exec(to_format),m=/\bm+\b/i.exec(to_format),d=/\bd+\b/i.exec(to_format),h=/\bh+\b/i.exec(to_format),i=/\bi+\b/i.exec(to_format),s=/\bs+\b/i.exec(to_format),factor=1,components={};switch(from_format)
{case'y':factor=365*24*60*60;break;case'm':factor=30*24*60*60;break;case'd':factor=24*60*60;break;case'h':factor=60*60;break;case'i':factor=60;break;}
value*=factor;if(y){components['y']=FLOOR(value/(365*24*60*60));value=value%(365*24*60*60);}
if(m){components['m']=complete(FLOOR(value/(30*24*60*60)),m);value=value%(30*24*60*60);}
if(d){components['d']=complete(FLOOR(value/(24*60*60)),d);value=value%(24*60*60);}
if(h){components['h']=complete(FLOOR(value/(60*60)),h);value=value%(60*60);}
if(i){components['i']=complete(FLOOR(value/60),i);value=value%60;}
if(s){components['s']=complete(value,s);}
for(var index in components)
{to_format=to_format.replace(new RegExp('\\b'+index+'+\\b','i'),components[index]);}
return to_format;};lib.TIMETODECIMAL=lib.timetodecimal=function(value,from_format,to_format){from_format=from_format.replace(/[^ymdhis\:\s]/ig).replace(/^[\s\:]+/,'').replace(/[\s\:]+$/,'').replace(/[\s\:]+/g,' ');value=value.replace(/^[\s\:]+/,'').replace(/[\s\:]+$/,'').replace(/[\s\:]+/g,' ');to_format=to_format.toLowerCase();var value_components=value.split(/\s+/g),from_components=from_format.split(/\s+/g),factor=1,result=0;for(var j in from_components)
{if(/y/i.test(from_components[j]))factor=365*24*60*60;else if(/m/i.test(from_components[j]))factor=30*24*60*60;else if(/d/i.test(from_components[j]))factor=24*60*60;else if(/h/i.test(from_components[j]))factor=60*60;else if(/i/i.test(from_components[j]))factor=60;else if(/s/i.test(from_components[j]))factor=1;result+=value_components[j]*factor;}
switch(to_format)
{case'y':factor=365*24*60*60;break;case'm':factor=30*24*60*60;break;case'd':factor=24*60*60;break;case'h':factor=60*60;break;case'i':factor=60;break;case's':factor=1;break;}
return result/factor;};lib.GETDATETIMESTRING=function(date,format){if(typeof format=='undefined')format=default_format;if(date.valid()){var m=date.getMonth()+1,d=date.getDate(),h=date.getHours(),i=date.getMinutes(),s=date.getSeconds(),a=(h>=12)?'pm':'am';m=(m<10)?'0'+m:m;d=(d<10)?'0'+d:d;if(/a+/.test(format)){h=h%12;h=(h)?h:12;}
h=(h<10)?'0'+h:h;i=(i<10)?'0'+i:i;s=(s<10)?'0'+s:s;return format.replace(/\by{2}\b/i,date.getFullYear()%100).replace(/y+/i,date.getFullYear()).replace(/m+/i,m).replace(/d+/i,d).replace(/h+/i,h).replace(/i+/i,i).replace(/s+/i,s).replace(/a+/i,a);}
return date;};root.CF_DATETIME=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['datetime']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['datetime']['prefix'],CF_DATETIME);},'validator':function(v)
{if(/^\s*((\d{4}[\/\-\.]\d{1,2}[\/\-\.]\d{1,2})|(\d{1,2}[\/\-\.]\d{1,2}[\/\-\.]\d{4}))?\s*(\d{1,2}\s*:\s*\d{1,2}(\s*:\s*\d{1,2})?(\s*[ap]m)?)?\s*$/i.test(v))
{return true;}
return false;}};;(function(root){var lib={};lib.cf_processing_version='0.1';function _getForm(_form)
{if(typeof _form=='undefined'){if('currentFormId'in fbuilderjQuery.fbuilder)_form=fbuilderjQuery.fbuilder.currentFormId;else return'_1';}
if(/^_\d*$/.test(_form))return _form;if(/^\d*$/.test(_form))return'_'+_form;return $((typeof _form=='object')?_form:'#'+_form).find('[name="cp_calculatedfieldsf_pform_psequence"]').val();}
function _getField(_field,_form)
{return $.fbuilder['forms'][_getForm(_form)].getItem(_field);}
lib.activatefield=lib.ACTIVATEFIELD=function(_field,_form)
{var o=_getForm(_form),f=_getField(_field,_form),j;if(f)
{j=f.jQueryRef();if(j.find('[id*="'+f.name+'"]').hasClass('ignore'))
{j.add(j.find('.fields')).show();if(f.name in $.fbuilder.forms[o].toHide)delete $.fbuilder.forms[o].toHide[f.name];if(!(f.name in $.fbuilder.forms[o].toShow))$.fbuilder.forms[o].toShow[f.name]={'ref':{}};j.find('[id*="'+f.name+'"]').removeClass('ignore').change();$.fbuilder.showHideDep({'formIdentifier':o,'fieldIdentifier':f.name});}}};lib.ignorefield=lib.IGNOREFIELD=function(_field,_form)
{var o=_getForm(_form),f=_getField(_field,_form),j;if(f)
{j=f.jQueryRef();if(!j.find('[id*="'+f.name+'"]').hasClass('ignore'))
{j.add(j.find('.fields')).hide();if(!(f.name in $.fbuilder.forms[o].toHide))$.fbuilder.forms[o].toHide[f.name]={};if(f.name in $.fbuilder.forms[o].toShow)delete $.fbuilder.forms[o].toShow[f.name];j.find('[id*="'+f.name+'"]').addClass('ignore').change();$.fbuilder.showHideDep({'formIdentifier':o,'fieldIdentifier':f.name});}}};lib.disableequations=lib.DISABLEEQUATIONS=function(f)
{jQuery(f||'[id*="cp_calculatedfieldsf_pform_"]').attr('data-evalequations',0);};lib.enableequations=lib.ENABLEEQUATIONS=function(f)
{jQuery(f||'[id*="cp_calculatedfieldsf_pform_"]').attr('data-evalequations',1);};lib.EVALEQUATIONS=lib.evalequations=function(f)
{fbuilderjQuery.fbuilder.calculator.defaultCalc(f);};lib.EVALEQUATION=lib.evalequation=function(f,e)
{var c=fbuilderjQuery.fbuilder.calculator,eq,fi,i;if(typeof e=='undefined')c.defaultCalc(f);else
{if(Number.isInteger(e))e='fieldname'+e;if('equations'in f)
{for(i in f.equations)
{eq=f.equations[i];fi=eq.identifier;if(eq.result==e+fi){c.enqueueEquation(fi,[eq]);c.processQueue(fi);return;}}}}};lib.gotopage=lib.GOTOPAGE=lib.goToPage=function(p,f)
{try
{var o=$('#'+$.fbuilder['forms'][_getForm(f)].formId),c;if(o.length)
{c=o.find('.pbreak:visible').attr('page');$.fbuilder.goToPage({'form':o,'from':c,'to':p});}}catch(err){if(typeof console!='undefined')console.log(err);}};root.CF_FIELDS_MANAGEMENT=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['processing']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['processing']['prefix'],CF_FIELDS_MANAGEMENT);}};;(function(root){var lib={records:{}};lib.cff_connector_version='0.1';lib.cffProxy=lib.cffproxy=lib.CFFPROXY=function(){if(typeof fbuilderjQuery=='undefined'||!arguments.length||typeof arguments[0]!='function')return;var $=fbuilderjQuery,args=Array.prototype.slice.call(arguments);index=args.toString();if(typeof lib.records[index]!='undefined')return lib.records[index];var form_id=(typeof $.fbuilder['currentFormId']!='undefined')?$.fbuilder['currentFormId']:'cp_calculatedfieldsf_pform_1',aux=(function(eq,index){return function(value){lib.records[index]=value;$.fbuilder.calculator.enqueueEquation(eq.identifier,[eq]);$.fbuilder.calculator.removePending(eq.identifier);if(!$.fbuilder.calculator.processing_queue)
{$.fbuilder.calculator.processQueue(eq.identifier);}};})($.fbuilder['currentEq'],index),f=args[0];args.shift();args.push(aux);$.fbuilder.calculator.addPending($.fbuilder['currentEq']['identifier']);setTimeout(function(){f.apply(null,args);},5);};root.CF_CONNECTOR=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['connector']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['connector']['prefix'],CF_CONNECTOR);}};;(function(root){var lib={records:{}};lib.cff_url_version='0.1';lib.getReferrer=lib.getreferrer=lib.GETREFERRER=function(){return document.referrer||null;};lib.generateURL=lib.generateurl=lib.GENERATEURL=function(url,params,hash){var urlComponents=url.split('#'),queryString='',connector='';if(typeof params=='object'&&params)
{connector=(url.indexOf('?')==-1)?'?':'&';queryString=jQuery.param(params);}
if(typeof hash=='string')urlComponents[1]=hash;urlComponents[0]+=connector+queryString;return urlComponents.join('#');};lib.redirectToURL=lib.redirecttourl=lib.REDIRECTTOURL=function(url,obj){document.location.href=url+(obj?(url.indexOf('?')===-1?'?':'&')+$.param(obj):'');};lib.getURL=lib.geturl=lib.GETURL=function(){return document.location.href;};lib.getURLProtocol=lib.geturlprotocol=lib.GETURLPROTOCOL=function(){return document.location.protocol.toLowerCase();};lib.getBaseURL=lib.getbaseurl=lib.GETBASEURL=function(){return window.location.protocol+'//'+window.location.host+'/';};lib.getURLHash=lib.geturlhash=lib.GETURLHASH=function(nohash){return window.location.hash.replace((nohash)?/^#/:'','');};lib.getURLPath=lib.geturlpath=lib.GETURLPATH=function(noslash){return window.location.pathname.replace((noslash)?new RegExp('^\/','g'):'','').replace((noslash)?new RegExp('\/$','g'):'','');};lib.getURLParameters=lib.geturlparameters=lib.GETURLPARAMETERS=function(url){var qs=url?url.split('?')[1]:window.location.search.slice(1),obj={};if(qs)
{qs=qs.split('#')[0];var arr=qs.split('&');for(var i=0;i<arr.length;i++)
{var a=arr[i].split('='),paramName=a[0],paramValue=typeof(a[1])==='undefined'?true:a[1];paramName=paramName.toLowerCase();if(typeof paramValue==='string')paramValue=decodeURIComponent(paramValue);if(paramName.match(/\[(\d+)?\]$/))
{var key=paramName.replace(/\[(\d+)?\]/,'');if(!obj[key])obj[key]=[];if(paramName.match(/\[\d+\]$/))
{var index=/\[(\d+)\]/.exec(paramName)[1];obj[key][index]=paramValue;}
else
{obj[key].push(paramValue);}}
else
{if(!obj[paramName])
{obj[paramName]=paramValue;}
else if(obj[paramName]&&typeof obj[paramName]==='string')
{obj[paramName]=[obj[paramName]];obj[paramName].push(paramValue);}
else
{obj[paramName].push(paramValue);}}}}
return obj;};lib.getURLParameter=lib.geturlparameter=lib.GETURLPARAMETER=function(paramName,defaultValue){var parameters=lib.getURLParameters();paramName=paramName.toLowerCase();if(paramName in parameters)return parameters[paramName];else if(typeof defaultValue!='undefined')return defaultValue;else return null;}
root.CF_URL=lib;})(this);fbuilderjQuery=(typeof fbuilderjQuery!='undefined')?fbuilderjQuery:jQuery;fbuilderjQuery['fbuilder']=fbuilderjQuery['fbuilder']||{};fbuilderjQuery['fbuilder']['modules']=fbuilderjQuery['fbuilder']['modules']||{};fbuilderjQuery['fbuilder']['modules']['url']={'prefix':'','callback':function()
{fbuilderjQuery['fbuilder']['extend_window'](fbuilderjQuery['fbuilder']['modules']['url']['prefix'],CF_URL);}};$.fbuilder['version']='1.1.32';$.fbuilder['controls']=$.fbuilder['controls']||{};$.fbuilder['forms']=$.fbuilder['forms']||{};$.fbuilder['htmlEncode']=function(value)
{return $('<div/>').text(value).html().replace(/"/g,"&quot;").replace(/&amp;lt;/g,'&lt;').replace(/&amp;gt;/g,'&gt;');};$.fbuilder['htmlDecode']=function(value)
{return(/&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig.test(value))?$('<div/>').html(value).text():value;};$.fbuilder['escapeSymbol']=function(value)
{return value.replace(/([\^\$\-\.\,\[\]\(\)\/\\\*\?\+\!\{\}])/g,"\\$1");};$.fbuilder['parseValStr']=function(value,raw)
{raw=raw||false;value=$.trim(value||'');value=value.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"');return($.isNumeric(value))?((raw)?value:value*1):'"'+value+'"';};$.fbuilder['parseVal']=function(value,thousand,decimal)
{if(!!value==false)return 0;if(/(\d{1,2}[\/\.\-]\d{1,2}[\/\.\-]\d{4})|(\d{4}[\/\.\-]\d{1,2}[\/\.\-]\d{1,2})/.test(value))
return $.fbuilder['parseValStr'](value);thousand=$.fbuilder.escapeSymbol($.trim((typeof thousand!='undefined')?thousand:','));decimal=$.trim((!!!decimal||/^\s*$/.test(decimal))?'.':decimal);var t=(new String(value)).replace(new RegExp((/^\s*$/.test(thousand)?'\,':thousand)+'\(\\d{1,2}\)$'),decimal+'$1').replace(new RegExp(thousand,'g'),'').replace(new RegExp($.fbuilder.escapeSymbol(decimal),'g'),'.').replace(/\s/g,''),p=/[+\-]?((\d+(\.\d+)?)|(\.\d+))(?:[eE][+\-]?\d+)?/.exec(t);return(p)?((/^0\d/.test(p[0]))?p[0].substr(1):p[0])*1:$.fbuilder['parseValStr'](value);};$.fbuilder['isMobile']=function(){try{document.createEvent("TouchEvent");return true;}
catch(e){return false;}};$.fbuilder['setBrowserHistory']=function(r)
{if('history'in window)
{var b='#',s='';for(var id in $.fbuilder.forms)
{b+=s+'f'+id.replace(/[^\d]/g,'')+'p'+($.fbuilder.forms[id]['currentPage']||0);s='|';}
history[(r)?'replaceState':'pushState']({},document.title,b);}};$.fbuilder['manageHistory']=function(onload)
{var b=(document.URL.split('#')[1]||null),m,f,t,flag=false;if(b)
{while(m=b.match(/f(\d+)p(\d+)\|?/))
{f='_'+m[1];t=onload?0:m[2]*1;b=b.replace(m[0],'');flag=(!(f in $.fbuilder.forms)||t!=$.fbuilder['goToPage']({'formIdentifier':f,'from':0,'to':t}));}}
else
{for(f in $.fbuilder.forms)
if('currentPage'in $.fbuilder.forms[f])
$.fbuilder['goToPage']({'formIdentifier':f,'from':0,'to':0});}
if(flag)$.fbuilder.setBrowserHistory(true);};$.fbuilder['goToPage']=function(config)
{if(('formIdentifier'in config||'form'in config)&&'to'in config)
{var id=(config['form'])?$('[name="cp_calculatedfieldsf_pform_psequence"]',config['form']).val():config['formIdentifier'],formObj=$.fbuilder.forms[id],_from=(config['from']||formObj['currentPage']||0)*1,_to=config['to']*1,direction=(_from<_to)?1:-1,formDom=$(config['form']||'[id="'+formObj.formId+'"]'),pageDom,i=_from;while(i!=_to)
{if(direction==1&&!formDom.valid())break;i+=direction;}
formObj['currentPage']=i;$(".pbreak:not(.pb"+i+")",formDom).hide().find(".field").addClass("ignorepb");(pageDom=$(".pbreak.pb"+i,formDom)).show().find(".ignorepb").removeClass("ignorepb");if(i!=_from)
{try
{if(!this.isMobile())
{var ff=pageDom.find(":focusable:first");if(ff&&!ff.hasClass('hasDatepicker')&&ff.attr('type')!='radio'&&ff.attr('type')!='checkbox'&&ff.closest('[uh]').length==0)ff.focus();}
var _wScrollTop=$(window).scrollTop(),_viewportHeight=$(window).height(),_scrollTop=formDom.offset().top;if(_scrollTop<_wScrollTop||(_wScrollTop+_viewportHeight)<_scrollTop)
$('html, body').animate({scrollTop:_scrollTop},50);}
catch(e){}}
else
{formDom.validate().focusInvalid();}
$(document).trigger('cff-gotopage',{'from':_from,'to':i,'form':formDom});return i;}};$.fbuilder['showHideDep']=function(config)
{var processItems=function(items,isNotFirstTime)
{for(var i=0,h=items.length;i<h;i++)
{if(typeof items[i]=='string')items[i]=$.fbuilder['forms'][id].getItem(items[i]);if(items[i])
{if(isNotFirstTime)
{$('[name="'+items[i].name+'"]').trigger('depEvent');if(items[i].usedInEquations)$.fbuilder['calculator'].enqueueEquation(id,items[i].usedInEquations);}
if('showHideDep'in items[i])
{var list=items[i]['showHideDep'](toShow,toHide,hiddenByContainer);if(list&&list.length)processItems(list,true);}}}};if('formIdentifier'in config)
{var id=config['formIdentifier'];if(id in $.fbuilder['forms'])
{var toShow=$.fbuilder['forms'][id]['toShow'],toHide=$.fbuilder['forms'][id]['toHide'],hiddenByContainer=$.fbuilder['forms'][id]['hiddenByContainer'],items=('fieldIdentifier'in config)?[$.fbuilder['forms'][id].getItem(config['fieldIdentifier'].replace(/_[cr]b\d+$/i,''))]:$.fbuilder['forms'][id].getItems();processItems(items);$(document).trigger('showHideDepEvent',$.fbuilder['forms'][id]['formId']);}}};$.fbuilder['cpcffLoadDefaults']=function(o)
{if(typeof cpcff_default!='undefined')
{var $=fbuilderjQuery,id=o.identifier.replace(/[^\d]/g,''),item,data,formObj,f;if(id in cpcff_default)
{data=cpcff_default[id];id='_'+id;formObj=$.fbuilder['forms'][id];f=$('#'+formObj['formId']);f.attr('data-evalequations',0);for(var fieldId in data)
{item=formObj.getItem(fieldId+id);try{if('setVal'in item)item.setVal(data[fieldId],true);}
catch(err){}}
f.attr('data-evalequations',o.evalequations);$.fbuilder.showHideDep({'formIdentifier':o.identifier});}}};$.fn.fbuilder=function(options){var opt=$.extend({},{pub:false,identifier:"",title:""},options,true);opt.messages=$.extend({previous:"Previous",next:"Next",pageof:"Page {0} of {0}",required:"This field is required.",email:"Please enter a valid email address.",datemmddyyyy:"Please enter a valid date with this format(mm/dd/yyyy)",dateddmmyyyy:"Please enter a valid date with this format(dd/mm/yyyy)",number:"Please enter a valid number.",digits:"Please enter only digits.",maxlength:"Please enter no more than {0} characters.",minlength:"Please enter at least {0} characters.",equalTo:"Please enter the same value again.",max:"Please enter a value less than or equal to {0}.",min:"Please enter a value greater than or equal to {0}.",currency:"Please enter a valid currency value."},(opt.messages||{}));opt.messages.max=$.validator.format(opt.messages.max);opt.messages.min=$.validator.format(opt.messages.min);opt.messages.maxlength=$.validator.format(opt.messages.maxlength);opt.messages.minlength=$.validator.format(opt.messages.minlength);$.extend($.validator.messages,opt.messages);$("#cp_calculatedfieldsf_pform"+fnum).validate({ignore:".ignore,.ignorepb",errorElement:"div",errorPlacement:function(e,element)
{var _parent=element.closest('.dfield'),_uh=_parent.find('span.uh:visible');e.addClass('message').css('position','absolute').appendTo((_uh.length)?_uh:_parent);}}).messages=opt.messages;var items=[],fieldsIndex={},reloadItemsPublic=function()
{var form_tag=$("#cp_calculatedfieldsf_pform"+opt.identifier),header_tag=$("#formheader"+opt.identifier),fieldlist_tag=$("#fieldlist"+opt.identifier),page_tag,i=0,page=0,getCaptchaHTML=function(){var captcha_tag=$("#cpcaptchalayer"+opt.identifier+':not(:empty)')
html='';if(captcha_tag.length)
{html+='<div class="captcha">'+captcha_tag.html()+'</div><div class="clearer"></div>';captcha_tag.remove();}
return html;},getSubmitHTML=function(){var submit_tag=$("#cp_subbtn"+opt.identifier+':not(:empty)'),html='';if(submit_tag.length)
{html+='<div class="pbSubmit" tabindex="0">'+submit_tag.html()+'</div>';submit_tag.remove();}
return html;};form_tag.addClass(theForm.formtemplate);if(!opt.cached)
{page_tag=$('<div class="pb'+page+' pbreak" page="'+page+'"></div>');header_tag.html(theForm.show());fieldlist_tag.addClass(theForm.formlayout).append(page_tag);for(i;i<items.length;i++)
{items[i].index=i;if(items[i].ftype=="fPageBreak")
{page++;page_tag=$('<div class="pb'+page+' pbreak" page="'+page+'"></div>');fieldlist_tag.append(page_tag);}
else
{page_tag.append(items[i].show());if(items[i].predefinedClick)
{page_tag.find("#"+items[i].name).attr({placeholder:items[i].predefined,value:""});}
if(items[i].exclude)
{page_tag.find('.'+items[i].name).addClass('cff-exclude');}
if(items[i].userhelpTooltip)
{var uh=items[i].jQueryRef();if(items[i].userhelp&&items[i].userhelp.length)
{if(items[i].tooltipIcon)$('<span class="cff-help-icon"></span>').attr('uh',items[i].userhelp).appendTo($(uh.children('label')[0]||uh));else{var target=uh.find('input[type="button"],input[type="reset"],input[type="text"],input[type="number"],input[type="email"],input[type="file"],input[type="color"],input[type="date"],input[type="password"],input[type="email"],select,textarea');if(!target.length)target=uh.find('.slider');if(!target.length)target=uh.find('.dfield label');if(!target.length)target=uh.find('.dfield');if(!target.length)target=uh;$(target).attr('uh',items[i].userhelp);}}
uh.find(".uh").remove();}}}}
else
{page=fieldlist_tag.find('.pbreak').length;i=items.length;}
if(page>0)
{if(!opt.cached)
{$(".pb"+page,fieldlist_tag).addClass("pbEnd");$(".pbreak",fieldlist_tag).each(function(index){var code=$(this).html(),bSubmit='';if(index==page)
{code+=getCaptchaHTML();bSubmit=getSubmitHTML();}
$(this).html('<fieldset><legend>'+opt.messages.pageof.replace(/\{\s*\d+\s*\}/,(index+1)).replace(/\{\s*\d+\s*\}/,(page+1))+'</legend>'+code+'<div class="pbPrevious" tabindex="0">'+opt.messages.previous+'</div><div class="pbNext" tabindex="0">'+opt.messages.next+'</div>'+bSubmit+'<div class="clearer"></div></fieldset>');});}
fieldlist_tag.find(".pbPrevious,.pbNext").bind("keyup",function(evt){if(evt.which==13||evt.which==32)$(this).click();}).bind("click",{'identifier':opt.identifier},function(evt){var _from=($.fbuilder.forms[evt.data.identifier]['currentPage']||0),_inc=($(this).hasClass("pbPrevious"))?-1:1,_p=$.fbuilder['goToPage']({'formIdentifier':evt.data.identifier,'from':_from,'to':_from+_inc}),_pDom=$('.pb'+_p);if(_from!=_p)$.fbuilder.setBrowserHistory();if(_pDom.find('.fields:visible').length==0)
if(_inc==-1&&0<_p)_pDom.find('.pbPrevious').click();else if(!_pDom.hasClass('pbEnd'))_pDom.find('.pbNext').click();return false;});}
else
{if(!opt.cached)$(".pb"+page,fieldlist_tag).append(getCaptchaHTML()+getSubmitHTML());}
if(!opt.cached&&opt.setCache)
{var url=document.location.href,data={'cffaction':'cff_cache','cache':form_tag.html().replace(/\n+/g,''),'form':form_tag.find('[name="cp_calculatedfieldsf_id"]').val()};$.post(url,data,function(data){if(typeof console!='undefined')console.log(data);});}
jQuery(document).on('click','.cff-help-icon',function(evt){evt.stopPropagation();evt.preventDefault();});$(document).on('click','#fbuilder .captcha img',function(){var e=$(this);e.attr('src',e.attr('src').replace(/&\d+$/,'')+'&'+Math.floor(Math.random()*1000));});$(form_tag).find('.captcha img').click();$('#fieldlist'+opt.identifier).find(".pbSubmit").bind("keyup",function(evt){if(evt.which==13||evt.which==32)$(this).click();}).bind("click",{'identifier':opt.identifier},function(evt){$(this).closest("form").submit();});if(i>0)
{theForm.after_show(opt.identifier);for(var i=0;i<items.length;i++)
{items[i].after_show();}
$(document).on('change','#fieldlist'+opt.identifier+' .depItemSel,'+'#fieldlist'+opt.identifier+' .depItem',{'identifier':opt.identifier},function(evt)
{$.fbuilder.showHideDep({'formIdentifier':evt.data.identifier,'fieldIdentifier':evt.target.id});});setTimeout(function(){$.fbuilder.showHideDep({'formIdentifier':opt.identifier});$('.cff-processing-form').remove();},50);try
{$.widget.bridge('uitooltip',$.ui.tooltip);$("#fbuilder"+opt.identifier).uitooltip({show:false,hide:false,tooltipClass:"uh-tooltip",position:{my:"left top",at:"left bottom+5",collision:"flipfit"},items:"[uh]",content:function(){return $(this).attr("uh");},open:function(evt,ui){try{if(window.matchMedia("screen and (max-width: 640px)").matches){var duration=('undefined'!=typeof tooltip_duration&&/^\d+$/.test(tooltip_duration))?tooltip_duration:3000;setTimeout(function(){$(ui.tooltip).hide('fade');},duration);}}catch(err){}}});}catch(e){}}
$("#fieldlist"+opt.identifier+" .pbreak:not(.pb0)").find(".field").addClass("ignorepb");};var fform=function(){};$.extend(fform.prototype,{title:"Untitled Form",description:"This is my form. Please fill it out. It's awesome!",formlayout:"top_aligned",formtemplate:"",evalequations:1,evalequationsevent:2,loading_animation:0,autocomplete:1,show:function(){return'<div class="fform" id="field"><h2>'+this.title+'</h2><span>'+this.description+'</span></div>';},after_show:function(id){var form=$('#cp_calculatedfieldsf_pform'+id);if(typeof $.fn.fbuilder_localstorage!='undefined'&&form.hasClass('persist-form'))
{form.fbuilder_localstorage();}
form.attr('data-evalequations',this.evalequations).attr('data-evalequationsevent',this.evalequationsevent).attr('autocomplete',((this.autocomplete)?'on':'off')).find('input,select').blur(function(){try{$(this).valid();}catch(e){};});if(!this.autocomplete)form.find('input[name*="fieldname"]:not([autocomplete])').attr('autocomplete','new-password');}});var theForm,ffunct={toShow:{},toHide:{},hiddenByContainer:{},getItem:function(name)
{if(name in fieldsIndex)return items[fieldsIndex[name]];var regExp=new RegExp((parseInt(name,10)==name)?'fieldname'+name+'_':name+'_',i);for(var i in items)
{if(items[i].name==name||regExp.test(items[i].name))
{return items[i];}}
return false;},getItems:function()
{return items;},loadData:function(f)
{var d=window[f];if(typeof d!='undefined')
{if(typeof d=='object'&&(typeof d.nodeType!=='undefined'||d instanceof jQuery)){d=jQuery.parseJSON(jQuery(d).val());}
else if(typeof d=='string'){d=jQuery.parseJSON(d);}
if(d.length==2)
{this.formId=d[1]['formid'];items=[];for(var i=0;i<d[0].length;i++)
{var obj=new $.fbuilder.controls[d[0][i].ftype]();obj=$.extend(true,{},obj,d[0][i]);obj.name=obj.name+opt.identifier;obj.form_identifier=opt.identifier;obj.init();items[i]=obj;fieldsIndex[obj.name]=i;}
theForm=new fform();theForm=$.extend(theForm,d[1][0]);opt.evalequations=d[1][0]['evalequations'];opt.cached=(typeof d[1]['cached']!='undefined'&&d[1]['cached'])?true:false;opt.setCache=(!this.cached&&typeof d[1]['setCache']!='undefined'&&d[1]['setCache'])?true:false;reloadItemsPublic();}
$.fbuilder.cpcffLoadDefaults(opt);}}};$.fbuilder['forms'][opt.identifier]=ffunct;this.fBuild=ffunct;return this;};$.fbuilder.controls['ffields']=function(){};$.extend($.fbuilder.controls['ffields'].prototype,{form_identifier:"",name:"",shortlabel:"",index:-1,ftype:"",userhelp:"",userhelpTooltip:false,csslayout:"",init:function(){},_getAttr:function(attr,raw)
{var me=this,f,v=$.trim(me[attr]),raw=raw||false;if(!raw&&$.isNumeric(v))return parseFloat(v);f=(/^fieldname\d+$/i.test(v))?me.getField(v):false;if(f)
{v=f.val();if(f.ftype=='fdate')return new Date(v*86400000);if(!raw&&$.isNumeric(v))return parseFloat(v);return v.replace(/^"+/,'').replace(/"+$/,'');}
return v;},_setHndl:function(attr,one)
{var me=this,v=$.trim(me[attr]);if($.isNumeric(v))return;var s=(/^fieldname\d+$/i.test(v))?'[id*="'+v+me.form_identifier+'"]':v,i=(one)?'one':'on';if('string'==typeof s&&!/^\s*$/.test(s))
{s=$.trim(s);if(!$.isNumeric(s.charAt(0)))
{$(document)[i]('change depEvent',s,function(evt){if(me['set_'+attr])me['set_'+attr](me._getAttr(attr),$(evt.target).hasClass('ignore'));});}}},getField:function(f){return $.fbuilder['forms'][this.form_identifier].getItem(f);},jQueryRef:function(){return $('.'+this.name);},show:function()
{return'Not available yet';},after_show:function(){},val:function(raw){raw=raw||false;var e=$("[id='"+this.name+"']:not(.ignore)");if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw);v=$.trim(v);return($.isNumeric(v))?$.fbuilder.parseVal(v):$.fbuilder.parseValStr(v);}
return 0;},setVal:function(v,nochange)
{var e=$("[id='"+this.name+"']");e.val(v);if(!nochange)e.change();}});window.addEventListener('popstate',function(){try
{$(".ui-datepicker").hide();$.fbuilder.manageHistory();}
catch(err){}});$(window).on('load',function(){$.fbuilder.manageHistory(true);});$.fbuilder.controls['ftext']=function(){};$.extend($.fbuilder.controls['ftext'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ftext",autocomplete:"off",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",minlength:"",maxlength:"",equalTo:"",regExp:"",regExpMssg:"",show:function()
{this.minlength=$.fbuilder.htmlEncode($.trim(this.minlength));this.maxlength=$.fbuilder.htmlEncode($.trim(this.maxlength));this.equalTo=$.fbuilder.htmlEncode($.trim(this.equalTo));this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-text-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+$.fbuilder.htmlEncode(this.title)+'" id="'+this.name+'" name="'+this.name+'"'+((this.minlength.length)?' minlength="'+(this.minlength)+'"':'')+((this.maxlength.length)?' maxlength="'+(this.maxlength)+'"':'')+((this.equalTo.length)?' equalTo="#'+this.equalTo+this.form_identifier+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+' type="text" value="'+$.fbuilder.htmlEncode(this.predefined)+'" autocomplete="'+this.autocomplete+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{if(this.regExp!=""&&typeof $['validator']!='undefined')
{var parts=this.regExp.match(/(\/)(.*)(\/)([gimy]{0,4})$/i);this.regExp=(parts===null)?new RegExp(this.regExp):new RegExp(parts[2],parts[4].toLowerCase());if(!('pattern'in $.validator.methods))
$.validator.addMethod('pattern',function(value,element,param)
{try{return this.optional(element)||param.test(value);}
catch(err){return true;}});$('#'+this.name).rules('add',{'pattern':this.regExp,messages:{'pattern':this.regExpMssg}});}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;}});$.fbuilder.controls['fcurrency']=function(){};$.extend($.fbuilder.controls['fcurrency'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Currency",ftype:"fcurrency",predefined:"",predefinedClick:false,required:false,readonly:false,numberpad:false,size:"small",currencySymbol:"$",currencyText:"USD",thousandSeparator:",",centSeparator:".",noCents:false,min:"",max:"",formatDynamically:false,twoDecimals:false,set_min:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('min');else e.attr('min',v);e.valid();},set_max:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('max');else e.attr('max',v);e.valid();},getFormattedValue:function(value)
{if(value=='')return value;var me=this,ts=me.thousandSeparator,cs=((cs=$.trim(me.centSeparator))!=='')?cs:'.',v=$.fbuilder.parseVal(value,ts,cs),parts=[],counter=0,str='',sign='';if(!isNaN(v))
{if(v<0)sign='-';v=ABS(v);if(this.twoDecimals)v=v.toFixed(2);parts=v.toString().split(".");for(var i=parts[0].length-1;i>=0;i--)
{counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=ts+str;}
parts[0]=str;if(parts[1])
{if(parts[1].length==1)parts[1]+='0';}
else parts[1]='00';return me.currencySymbol+sign+((me.noCents)?parts[0]:parts.join(cs))+me.currencyText;}
else
{return value;}},init:function()
{if(!/^\s*$/.test(this.min))this._setHndl('min');if(!/^\s*$/.test(this.max))this._setHndl('max');},show:function()
{this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-currency-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input '+((this.numberpad)?'inputmode="numeric"':'')+' aria-label="'+$.fbuilder.htmlEncode(this.title)+'" '+((this.readonly)?'readonly':'')+' id="'+this.name+'" name="'+this.name+'" class="field cffcurrency '+this.size+((this.required)?" required":"")+'" type="text" value="'+$.fbuilder.htmlEncode((this.formatDynamically)?this.getFormattedValue(this.predefined):this.predefined)+'" '+((!/^\s*$/.test(this.min))?'min="'+$.fbuilder.parseVal(this._getAttr('min'),this.thousandSeparator,this.centSeparator)+'" ':'')+((!/^\s*$/.test(this.max))?' max="'+$.fbuilder.parseVal(this._getAttr('max'),this.thousandSeparator,this.centSeparator)+'" ':'')+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(this.formatDynamically)
{$(document).on('change','[name="'+me.name+'"]',function(){this.value=me.getFormattedValue(this.value);});}
if(typeof $['validator']!='undefined')
{if(!('cffcurrency'in $.validator.methods))
$.validator.addMethod('cffcurrency',function(v,el)
{var f=el.id.match(/_\d+$/),esc=$.fbuilder.escapeSymbol,r;e=$.fbuilder['forms'][f[0]].getItem(el.name);r=new RegExp('^\\s*('+esc(e.currencySymbol)+')?\\s*\\-?\\d+('+esc(e.thousandSeparator)+'\\d{3})*'+((e.noCents)?'':'('+e.centSeparator+'\\d+)?')+'\\s*('+esc(e.currencyText)+')?\\s*$','i');return this.optional(el)||r.test(v)||($.isNumeric(v)&&(!e.noCents||v===FLOOR(v)));},$.validator.messages['currency']);$.validator.methods.min=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e){v=e.val();if('dformat'in e&&e.dformat=='percent')v*=100;}
return this.optional(el)||v>=p;};$.validator.methods.max=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e)
{v=e.val();if('dformat'in e&&e.dformat=='percent')v*=100;}
return this.optional(el)||v<=p;};}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=e.val();if(raw)return($.isNumeric(v))?v:$.fbuilder.parseValStr(v,raw);v=$.trim(v);v=v.replace(new RegExp($.fbuilder['escapeSymbol'](this.currencySymbol),'g'),'').replace(new RegExp($.fbuilder['escapeSymbol'](this.currencyText),'g'),'');return $.fbuilder.parseVal(v,this.thousandSeparator,this.centSeparator);}
return 0;}});$.fbuilder.controls['fnumber']=function(){};$.extend($.fbuilder.controls['fnumber'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Number",ftype:"fnumber",predefined:"",predefinedClick:false,required:false,readonly:false,numberpad:false,size:"small",thousandSeparator:"",decimalSymbol:".",min:"",max:"",formatDynamically:false,dformat:"digits",set_step:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('step');else{var vb=e.val();e.removeAttr('value');e.attr('step',v);e.val(vb);}
e.valid();},set_min:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('min');else e.attr('min',v);e.valid();},set_max:function(v,rmv)
{var e=$('[id="'+this.name+'"]');if(rmv)e.removeAttr('max');else e.attr('max',v);e.valid();},getFormattedValue:function(value)
{if(value=='')return value;var ts=this.thousandSeparator,ds=((ds=$.trim(this.decimalSymbol))!=='')?ds:'.',v=$.fbuilder.parseVal(value,ts,ds),s='',counter=0,str='',parts=[];if(!isNaN(v))
{if(v<0)s='-';v=ABS(v);parts=v.toString().split(".");for(var i=parts[0].length-1;i>=0;i--){counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=ts+str;}
parts[0]=str;return s+parts.join(ds)+((this.dformat=='percent')?'%':'');}
else
{return value;}},init:function()
{if(!/^\s*$/.test(this.min))this._setHndl('min');if(!/^\s*$/.test(this.max))this._setHndl('max');},show:function()
{var _type=(this.dformat=='digits'||(this.dformat!='percent'&&/^$/.test(this.thousandSeparator)&&/^\s*(\.\s*)?$/.test(this.decimalSymbol)))?'number':'text';this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-number-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input '+((this.numberpad)?'inputmode="numeric"':'')+' aria-label="'+$.fbuilder.htmlEncode(this.title)+'" id="'+this.name+'" name="'+this.name+'" '+((!/^\s*$/.test(this.min))?'min="'+$.fbuilder.parseVal(this._getAttr('min'),this.thousandSeparator,this.decimalSymbol)+'" ':'')+((!/^\s*$/.test(this.max))?' max="'+$.fbuilder.parseVal(this._getAttr('max'),this.thousandSeparator,this.decimalSymbol)+'" ':'')+' class="field '+this.dformat+((this.dformat=='percent')?' number':'')+' '+this.size+((this.required)?" required":"")+'" type="'+_type+'" value="'+$.fbuilder.htmlEncode((this.formatDynamically)?this.getFormattedValue(this.predefined):this.predefined)+'" '+((this.readonly)?'readonly':'')+' /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if((me.formatDynamically&&me.dformat!='digits')||me.dformat=='percent')
{$(document).on('change','[name="'+me.name+'"]',function(){this.value=me.getFormattedValue(this.value);});}
if(typeof $['validator']!='undefined')
{$.validator.methods.number=function(v,el)
{var f=el.id.match(/_\d+$/),esc=$.fbuilder.escapeSymbol,e,r;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(!e)e={thousandSeparator:',',decimalSymbol:'.'};r=new RegExp('^\\s*\\-?\\d+('+esc(e.thousandSeparator)+'\\d{3})*('+esc(e.decimalSymbol)+'\\d+)?\\s*\\%?\\s*$','i');return this.optional(el)||r.test(v)||$.isNumeric(v);};$.validator.methods.min=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e){v=e.val();if('dformat'in e&&e.dformat=='percent')v*=100;}
return this.optional(el)||v>=p;};$.validator.methods.max=function(v,el,p)
{var f=el.id.match(/_\d+$/),e;if(f)e=$.fbuilder['forms'][f[0]].getItem(el.name);if(e){v=e.val();if('dformat'in e&&e.dformat=='percent')v*=100;}
return this.optional(el)||v<=p;};}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=$.trim(e.val());if(raw)return($.isNumeric(v)&&this.thousandSeparator!='.')?v:$.fbuilder.parseValStr(v,raw);v=$.fbuilder.parseVal(v,this.thousandSeparator,this.decimalSymbol);return(this.dformat=='percent')?v/100:v;}
return 0;}});$.fbuilder.controls['fslider']=function(){};$.extend($.fbuilder.controls['fslider'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Slider",ftype:"fslider",exclude:false,readonly:false,predefined:"",predefinedMin:"",predefinedMax:"",predefinedClick:false,size:"small",thousandSeparator:",",centSeparator:".",typeValues:false,min:0,max:100,step:1,range:false,minCaption:"",maxCaption:"",caption:"{0}",_setThousandsSeparator:function(v)
{v=$.fbuilder.parseVal(v,this.thousandSeparator,this.centSeparator);if(!isNaN(v))
{v=v.toString();var parts=v.toString().split("."),counter=0,str='';for(var i=parts[0].length-1;i>=0;i--)
{counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=this.thousandSeparator+str;}
parts[0]=str;if(typeof parts[1]!='undefined'&&parts[1].length==1)
{parts[1]+='0';}
return parts.join(this.centSeparator);}
else
{return v;}},_setFieldValue:function(nochange)
{var me=this;if(me.range)
{var values=$('#'+me.name+'_slider').slider('values'),vl=values[0],vr=values[1],vlf=me._setThousandsSeparator(vl),vrf=me._setThousandsSeparator(vr);$('#'+me.name+'_component_left').val(vlf);$('#'+me.name+'_component_right').val(vrf);$('#'+me.name).val('['+vl+','+vr+']').attr('vt','['+vlf+','+vrf+']');$('#'+me.name+'_caption').html(me.caption.replace(/\{\s*0\s*\}/,vlf).replace(/\{\s*0\s*\}/,vrf));}
else
{var v=$('#'+me.name+'_slider').slider('value'),vf=me._setThousandsSeparator(v);$('#'+me.name).val(v).attr('vt',vf);$('#'+me.name+'_component_center').val(vf);$('#'+me.name+'_caption').html(me.caption.replace(/\{\s*0\s*\}/,vf));}
if(!nochange)$('#'+me.name).change();},_toNumber:function(n){return(new String(n)).replace(/[^\d\.]/g,'')*1;},init:function()
{this.min=(/^\s*$/.test(this.min))?0:$.trim(this.min);this.max=(/^\s*$/.test(this.max))?100:$.trim(this.max);this.step=(/^\s*$/.test(this.step))?1:$.trim(this.step);this.predefinedMin=(/^\s*$/.test(this.predefinedMin))?this.min:this._toNumber(this.predefinedMin);this.predefinedMax=(/^\s*$/.test(this.predefinedMax))?this.max:this._toNumber(this.predefinedMax);this._setHndl('min');this._setHndl('max');this._setHndl('step');this.centSeparator=(/^\s*$/.test(this.centSeparator))?'.':$.trim(this.centSeparator);},show:function()
{var me=this;function typeValuesComponents()
{function component(c)
{var min=$.fbuilder.htmlEncode(me.min),max=$.fbuilder.htmlEncode(me.max),step=$.fbuilder.htmlEncode(me.step),predefined=$.fbuilder.htmlEncode((c=='left')?me.predefinedMin:((c=='right')?me.predefinedMax:me.predefined)),timeoutId;$(document).on('keyup change','#'+me.name+'_component_'+c,function(evt){function stepRound(v)
{var _e=$('#'+me.name+'_slider'),_max=_e.slider('option','max'),_step=_e.slider('option','step');return MIN(CEIL(v,_step),_max);};var v=$('#'+me.name+'_component_center').val(),v1=$('#'+me.name+'_component_left').val(),v2=$('#'+me.name+'_component_right').val(),t=0;clearTimeout(timeoutId);if(evt.type=='keyup')t=2500;timeoutId=setTimeout(function(){if(v!=undefined)
{v=$.fbuilder.parseVal(v,me.thousandSeparator,me.centSeparator);if(isNaN(v))v=0;}
if(v1!=undefined)
{v1=$.fbuilder.parseVal(v1,me.thousandSeparator,me.centSeparator);if(isNaN(v1))v1=0;}
if(v2!=undefined)
{v2=$.fbuilder.parseVal(v2,me.thousandSeparator,me.centSeparator);if(isNaN(v2))v2=0;}
$('#'+me.name+'_slider').slider(((v!=undefined)?'value':'values'),((v!=undefined)?stepRound(v*1):[stepRound(Math.min(v1*1,v2*1)),stepRound(Math.max(v1*1,v2*1))]));me._setFieldValue();},t);});return'<div class="slider-type-'+c+'-component"><input aria-label="'+$.fbuilder.htmlEncode(me.title)+'" id="'+me.name+'_component_'+c+'" class="large" type="text" value="'+predefined+'" '+((me.readonly)?'readonly':'')+' /></div>';};var str='';if(me.typeValues)
str+='<div class="slider-type-components '+me.size+'">'+
((me.range)?component('left')+component('right'):component('center'))+'</div>';return str;};me.predefined=(/^\s*$/.test(me.predefined))?me.min:me._toNumber(me._getAttr('predefined'));return'<div class="fields '+me.csslayout+' '+me.name+' cff-slider-field" id="field'+me.form_identifier+'-'+me.index+'">'+'<label for="'+me.name+'">'+me.title+'</label>'+'<div class="dfield slider-container">'+
typeValuesComponents()+'<input id="'+me.name+'" name="'+me.name+'" class="field" type="hidden" value="'+$.fbuilder.htmlEncode(me.predefined)+'"/>'+'<div id="'+me.name+'_slider" class="slider '+me.size+'"></div>'+'<div class="corner-captions '+me.size+'">'+'<span class="left-corner">'+me.minCaption+'</span>'+'<span class="right-corner">'+me.maxCaption+'</span>'+'<div id="'+me.name+'_caption" class="slider-caption"></div>'+'<div class="clearer"></div>'+'</div>'+'<span class="uh">'+me.userhelp+'</span>'+'</div>'+'<div class="clearer"></div>'+'</div>';},set_min:function(v,ignore)
{try{var e=$('[id="'+this.name+'_slider"]'),c=this.val(),r=false;if(ignore)v=0;e.slider('option','min',v);if($.isArray(c)){if(c[0]<v){c[0]=v;r=true;}}
else if(c<v){c=v;r=true;}
if(r)this.setVal(c);this.set_min_caption(v);}
catch(err){}},set_max:function(v,ignore)
{try{var e=$('[id="'+this.name+'_slider"]'),c=this.val(),r=false;if(ignore)v=100;e.slider('option','max',v);if($.isArray(c)){if(v<c[1]){c[1]=v;r=true;}}
else if(v<c){c=v;r=true;}
if(r)this.setVal(c);this.set_max_caption(v);}
catch(err){}},set_min_caption:function(v)
{try{var e=$('.'+this.name+' .left-corner');e.html(this.minCaption.replace(/\{\s*0\s*\}/,v));}
catch(err){}},set_max_caption:function(v)
{try{var e=$('.'+this.name+' .right-corner');e.html(this.maxCaption.replace(/\{\s*0\s*\}/,v));}
catch(err){}},set_step:function(v,ignore)
{try{if(ignore)v=1;$('[id="'+this.name+'_slider"]').slider("option","step",v);}
catch(err){}},after_show:function()
{var me=this,opt={range:(me.range!=false)?me.range:"min",min:me._getAttr('min'),max:me._getAttr('max'),step:me._getAttr('step')};me.set_min_caption(opt.min);me.set_max_caption(opt.max);if(me.range)
{var _min=Math.min(Math.max(me._getAttr('predefinedMin'),opt.min),opt.max),_max=Math.min(Math.max(me._getAttr('predefinedMax'),opt.min),opt.max);opt['values']=[_min,_max];}
else opt['value']=Math.min(Math.max(me._getAttr('predefined'),opt.min),opt.max);opt['disabled']=me.readonly;opt['slide']=opt['stop']=(function(e){return function(event,ui)
{if(typeof ui.value!='undefined')$(this).slider('value',ui.value);if(typeof ui.values!='undefined')$(this).slider('values',ui.values);e._setFieldValue();}})(me);$('#'+this.name+'_slider').slider(opt);me._setFieldValue();$('#cp_calculatedfieldsf_pform'+me.form_identifier).bind('reset',function(){$('#'+me.name+'_slider').slider(opt);me._setFieldValue();});},val:function(raw)
{try{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');return(e.length)?((raw)?e.val():JSON.parse(e.val())):0;}
catch(err){return 0;}},setVal:function(v,nochange)
{try{v=JSON.parse(v);}catch(err){}
try{$('[name="'+this.name+'"]').val(v);$('#'+this.name+'_slider').slider((($.isArray(v))?'values':'value'),v);this._setFieldValue(nochange);}catch(err){}}});$.fbuilder.controls['fcolor']=function(){};$.extend($.fbuilder.controls['fcolor'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fcolor",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",show:function()
{this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-color-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+$.fbuilder.htmlEncode(this.title)+'" id="'+this.name+'" name="'+this.name+'"'+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+' type="color" value="'+$.fbuilder.htmlEncode(this.predefined)+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;}});$.fbuilder.controls['femail']=function(){};$.extend($.fbuilder.controls['femail'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Email",ftype:"femail",autocomplete:"off",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",equalTo:"",regExp:"",regExpMssg:"",show:function()
{this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-email-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+$.fbuilder.htmlEncode(this.title)+'" id="'+this.name+'" name="'+this.name+'" '+((this.equalTo!="")?"equalTo=\"#"+$.fbuilder.htmlEncode(this.equalTo+this.form_identifier)+"\"":"")+' class="field email '+this.size+((this.required)?" required":"")+'" type="email" value="'+$.fbuilder.htmlEncode(this.predefined)+'" '+((this.readonly)?'readonly':'')+' autocomplete="'+this.autocomplete+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{if(this.regExp!=""&&typeof $['validator']!='undefined')
{var parts=this.regExp.match(/(\/)(.*)(\/)([gimy]{0,4})$/i);this.regExp=(parts===null)?new RegExp(this.regExp):new RegExp(parts[2],parts[4].toLowerCase());if(!('pattern'in $.validator.methods))
$.validator.addMethod('pattern',function(value,element,param)
{try{return this.optional(element)||param.test(value);}
catch(err){return true;}});$('#'+this.name).rules('add',{'pattern':this.regExp,messages:{'pattern':this.regExpMssg}});}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;}});$.fbuilder.controls['fdate']=function(){};$.extend($.fbuilder.controls['fdate'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Date",ftype:"fdate",predefined:"",predefinedClick:false,size:"medium",required:false,readonly:false,showDatepicker:true,dformat:"mm/dd/yyyy",dseparator:"/",showDropdown:false,dropdownRange:"-10:+10",invalidDates:"",working_dates:[true,true,true,true,true,true,true],minDate:"",maxDate:"",defaultDate:"",showTimepicker:false,tformat:"24",minHour:0,maxHour:23,minMinute:0,maxMinute:59,stepHour:1,stepMinute:1,defaultTime:"",ariaHourLabel:'hours',ariaMinuteLabel:'minutes',ariaAMPMLabel:'am or pm',_get_regexp:function()
{var me=this,df=me.dformat.replace(new RegExp('\\'+me.dseparator,'g'),'/'),rt;if(/^y/i.test(df))rt='(\\d{4})[^\\d](\\d{1,2})[^\\d](\\d{1,2})';else rt='(\\d{1,2})[\\/\\-\\.](\\d{1,2})[\\/\\-\\.](\\d{4})';return{d:df,r:rt};},_set_Events:function()
{var me=this,f=function(){$('#'+me.name+'_date').valid();me.set_dateTime();};$(document).on('change','#'+me.name+'_date',function(){f();});$(document).on('change','#'+me.name+'_hours',function(){f();});$(document).on('change','#'+me.name+'_minutes',function(){f();});$(document).on('change','#'+me.name+'_ampm',function(){f();});$('#cp_calculatedfieldsf_pform'+me.form_identifier).bind('reset',function(){setTimeout(function(){me.set_DefaultDate(true);me.set_DefaultTime();me.set_dateTime();},500);});},_validateDate:function(d)
{try{var e=this,w=e.working_dates,i=e.invalidDates,n=$('#'+e.name+'_date');d=d||n.datepicker('getDate');if(d===null||!w[d.getDay()])return false;if(i!==null)
{for(var j=0,h=i.length;j<h;j++)
{if(d.getDate()==i[j].getDate()&&d.getMonth()==i[j].getMonth()&&d.getFullYear()==i[j].getFullYear())return false;}}
var _d=$.datepicker,_i=_d._getInst(n[0]),_mi=_d._determineDate(_i,_d._get(_i,'minDate'),null),_ma=_d._determineDate(_i,_d._get(_i,'maxDate'),null);if((_mi!=null&&d<_mi)||(_ma!=null&&_ma<d))return false;}
catch(_err){return false;}
return true;},_validateTime:function()
{var i=this;if(i.showTimepicker)
{var n=i.name,h=$('#'+n+'_hours').val(),m=$('#'+n+'_minutes').val();if(i.tformat==12)
{var x=$('#'+n+'_ampm').val()
if(x=='pm'&&h!=12)h=h*1+12;if(x=='am'&&h==12)h=0;}
if(h<i.minHour||i.maxHour<h||(h==i.minHour&&m<i.minMinute)||(h==i.maxHour&&i.maxMinute<m))return false;}
return true;},init:function()
{var me=this,_checkValue=function(v,min,max)
{v=parseInt(v);v=(isNaN(v))?max:v;return Math.min(Math.max(v,min),max);};me.dformat=me.dformat.replace(/\//g,me.dseparator);me.invalidDates=me.invalidDates.replace(/\s+/g,'');if(me.dropdownRange.indexOf(':')==-1)me.dropdownRange='-10:+10';if(!/^\s*$/.test(me.invalidDates))
{var dateRegExp=new RegExp(/^\d{1,2}\/\d{1,2}\/\d{4}$/),counter=0,dates=me.invalidDates.split(',');me.invalidDates=[];for(var i=0,h=dates.length;i<h;i++)
{var range=dates[i].split('-');if(range.length==2&&range[0].match(dateRegExp)!=null&&range[1].match(dateRegExp)!=null)
{var fromD=new Date(range[0]),toD=new Date(range[1]);while(fromD<=toD)
{me.invalidDates[counter]=fromD;var tmp=new Date(fromD.valueOf());tmp.setDate(tmp.getDate()+1);fromD=tmp;counter++;}}
else
{for(var j=0,k=range.length;j<k;j++)
{if(range[j].match(dateRegExp)!=null)
{me.invalidDates[counter]=new Date(range[j]);counter++;}}}}}
me.minHour=_checkValue(me.minHour,0,23);me.maxHour=_checkValue(me.maxHour,0,23);me.minMinute=_checkValue(me.minMinute,0,59);me.maxMinute=_checkValue(me.maxMinute,0,59);me.stepHour=_checkValue(me.stepHour,1,Math.max(1,(me.maxHour-me.minHour)+1));me.stepMinute=_checkValue(me.stepMinute,1,Math.max(1,(me.maxMinute-me.minMinute)+1));me._setHndl('minDate');me._setHndl('maxDate');},get_hours:function()
{var me=this,str='',i=0,h,from=(me.tformat==12)?1:me.minHour,to=(me.tformat==12)?12:me.maxHour;while((h=from+me.stepHour*i)<=to)
{if(h<10)h='0'+''+h;str+='<option value="'+h+'">'+h+'</option>';i++;}
return'<select id="'+me.name+'_hours" name="'+me.name+'_hours" class="hours-component" aria-label="'+$.fbuilder.htmlEncode(me.ariaHourLabel)+'" '+((me.readonly)?'DISABLED':'')+'>'+str+'</select>:';},get_minutes:function()
{var me=this,str='',i=0,m,n=(me.minHour==me.maxHour)?me.minMinute:0,x=(me.minHour==me.maxHour)?me.maxMinute:59;while((m=n+me.stepMinute*i)<=x)
{if(m<10)m='0'+''+m;str+='<option value="'+m+'">'+m+'</option>';i++;}
return'<select id="'+me.name+'_minutes" name="'+me.name+'_minutes" class="minutes-component" aria-label="'+$.fbuilder.htmlEncode(me.ariaMinuteLabel)+'" '+((me.readonly)?'DISABLED':'')+'>'+str+'</select>';},get_ampm:function()
{var str='';if(this.tformat==12)
{return'<select id="'+this.name+'_ampm" class="ampm-component"  aria-label="'+$.fbuilder.htmlEncode(this.ariaAMPMLabel)+'" '+((this.readonly)?'DISABLED':'')+'><option value="am">am</option><option value="pm">pm</option></select>';}
return str;},set_dateTime:function(nochange)
{var me=this,str=$('#'+me.name+'_date').val(),e=$('#'+me.name);if(me.showTimepicker)
{str+=' '+$('#'+me.name+'_hours').val();str+=':'+$('#'+me.name+'_minutes').val();if($('#'+me.name+'_ampm').length)str+=$('#'+me.name+'_ampm').val();}
e.val(str);if(!nochange)e.change();},set_minDate:function(v,ignore)
{var e=$('[id*="'+this.name+'"].hasDatepicker');if(e.length)
{e.datepicker('option','minDate',(ignore)?null:v);e.change();}},set_maxDate:function(v,ignore)
{var e=$('[id*="'+this.name+'"].hasDatepicker');if(e.length)
{e.datepicker('option','maxDate',(ignore)?null:v);e.change();}},set_DefaultDate:function(init)
{var me=this,p={dateFormat:me.dformat.replace(/yyyy/g,"yy"),minDate:me._getAttr('minDate'),maxDate:me._getAttr('maxDate'),disabled:me.readonly},dp=$("#"+me.name+"_date"),dd=(me.defaultDate!="")?me.defaultDate:((me.predefined!="")?me.predefined:new Date());dp.click(function(){$(document).click();$(this).focus();});if(me.showDropdown)p=$.extend(p,{changeMonth:true,changeYear:true,yearRange:me.dropdownRange});p=$.extend(p,{beforeShowDay:function(d){return[me._validateDate(d),""];}});if(me.defaultDate!="")p.defaultDate=me.defaultDate;dp.datepicker(p);if(!me.predefinedClick||!!init==false)dp.datepicker("setDate",dd);if(!me._validateDate())dp.datepicker("setDate",'');},set_DefaultTime:function()
{var me=this,_setValue=function(f,v,m)
{v=Math.min(v*1,m*1);v=(v<10)?0+''+v:v;$('#'+f+' [value="'+v+'"]').prop('selected',true);};if(me.showTimepicker)
{var parts,time={},tmp=0,max_minutes=59;if((parts=/(\d{1,2}):(\d{1,2})\s*([ap]m)?/gi.exec(me.defaultTime))!=null)
{time['hour']=parts[1]*1+((parts.length==4&&/pm/i.test(parts[3])&&parts[1]!=12)?12:0);time['minute']=parts[2];}
else
{var d=new Date();time['hour']=d.getHours();time['minute']=d.getMinutes();}
time['hour']=Math.min(Math.max(time['hour'],me.minHour),me.maxHour);if(time['hour']<=me.minHour)time['minute']=Math.max(time['minute'],me.minMinute);if(me.maxHour<=time['hour'])time['minute']=Math.min(time['minute'],me.maxMinute);_setValue(me.name+'_hours',(me.tformat==12)?((time['hour']>12)?time['hour']-12:((time['hour']==0)?12:time['hour'])):time['hour'],(me.tformat==12)?12:me.maxHour);_setValue(me.name+'_minutes',time['minute'],(time['hour']==me.maxHour)?me.maxMinute:59);$('#'+me.name+'_ampm'+' [value="'+((time['hour']<12)?'am':'pm')+'"]').prop('selected',true);}},show:function()
{var me=this,n=me.name,attr='value',format_label=[],date_tag_type='text',disabled='',date_tag_class='field date'+me.dformat.replace(/[^a-z]/ig,"")+' '+me.size+((me.required&&me.showDatepicker)?' required':'');if(me.predefinedClick)attr='placeholder';if(me.showDatepicker)format_label.push(me.dformat);else{date_tag_type='hidden';disabled='disabled';}
if(me.showTimepicker)format_label.push('HH:mm');this.predefined=this._getAttr('predefined');return'<div class="fields '+me.csslayout+' '+n+' cff-date-field" id="field'+me.form_identifier+'-'+me.index+'"><label for="'+n+'_date">'+me.title+''+((me.required)?"<span class='r'>*</span>":"")+((format_label.length)?' <span class="dformat">('+format_label.join(' ')+')</span>':'')+'</label><div class="dfield"><input id="'+n+'" name="'+n+'" type="hidden" value="'+$.fbuilder.htmlEncode(me.predefined)+'"/><input aria-label="'+$.fbuilder.htmlEncode(me.title)+'" id="'+n+'_date" name="'+n+'_date" class="'+date_tag_class+' date-component" type="'+date_tag_type+'" '+attr+'="'+$.fbuilder.htmlEncode(me.predefined)+'" '+disabled+' />'+((me.showTimepicker)?' '+me.get_hours()+me.get_minutes()+' '+me.get_ampm():'')+'<span class="uh">'+me.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,date_format='date'+me.dformat.replace(/[^a-z]/ig,""),validator=function(v,e)
{try
{var p=e.name.replace('_date','').split('_'),i=$.fbuilder.forms['_'+p[1]].getItem(p[0]),o=me._get_regexp();if(i!=null)return this.optional(e)||(i._validateDate()&&(new RegExp(o.r)).test(v)&&i._validateTime());return true;}
catch(er)
{return false;}};if(!(date_format in $.validator.methods))$.validator.addMethod(date_format,validator);me.set_DefaultDate(true);me.set_DefaultTime();me._set_Events();me.set_dateTime();},val:function(raw)
{raw=raw||false;var me=this,e=$('[id="'+me.name+'"]:not(.ignore)'),o=me._get_regexp();if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw);v=$.trim(e.val());var re=new RegExp('('+o.r+')?(\\s*(\\d{1,2})[:\\.](\\d{1,2})\\s*([amp]{2})?)?'),d=re.exec(v),h=0,m=0,date;if(d)
{if(typeof d[6]!='undefined')h=d[6]*1;if(typeof d[7]!='undefined')m=d[7]*1;if(typeof d[8]!='undefined')
{var am=d[8].toLowerCase();if(am=='pm'&&h<12)h+=12;if(am=='am'&&h==12)h-=12;}
switch(o.d)
{case'yyyy/dd/mm':date=new Date(d[2],(d[4]*1-1),d[3],h,m,0,0);break;case'yyyy/mm/dd':date=new Date(d[2],(d[3]*1-1),d[4],h,m,0,0);break;case'dd/mm/yyyy':date=new Date(d[4],(d[3]*1-1),d[2],h,m,0,0);break;case'mm/dd/yyyy':date=new Date(d[4],(d[2]*1-1),d[3],h,m,0,0);break;}
if(isFinite(date))
{if(me.showTimepicker)return date.valueOf()/86400000;else return Math.ceil(date.valueOf()/86400000);}
else if(!me.showDatepicker&&me.showTimepicker)
return(h*3600000+m*60000)/86400000;}}
return 0;},setVal:function(v,nochange)
{try
{v=$.trim(v).replace(/\s+/g,' ').split(' ');if(this.showDatepicker)
{this.defaultDate=v[0];this.set_DefaultDate();}
if(this.showTimepicker)
{var t=(v.length==2)?v[1]:((!this.showDatepicker)?v[0]:false);if(t!==false)
{this.defaultTime=t;this.set_DefaultTime();}}
this.set_dateTime(nochange);}
catch(err)
{}}});$.fbuilder.controls['ftextarea']=function(){};$.extend($.fbuilder.controls['ftextarea'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ftextarea",autocomplete:"off",predefined:"",predefinedClick:false,required:false,readonly:false,size:"medium",minlength:"",maxlength:"",rows:4,show:function()
{this.minlength=$.fbuilder.htmlEncode($.trim(this.minlength));this.maxlength=$.fbuilder.htmlEncode($.trim(this.maxlength));this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-textarea-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><textarea aria-label="'+$.fbuilder.htmlEncode(this.title)+'" '+((!/^\s*$/.test(this.rows))?'rows='+this.rows:'')+' id="'+this.name+'" name="'+this.name+'"'+((this.minlength.length)?' minlength="'+this.minlength+'"':'')+((this.maxlength.length)?' maxlength="'+this.maxlength+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.readonly)?'readonly':'')+' autocomplete="'+this.autocomplete+'">'+((!this.predefinedClick)?this.predefined:'')+'</textarea><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val().replace(/[\n\r]+/g,' '),raw);return 0;}});$.fbuilder.controls['fcheck']=function(){};$.extend($.fbuilder.controls['fcheck'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Check All That Apply",ftype:"fcheck",layout:"one_column",required:false,readonly:false,merge:1,onoff:0,max:-1,maxError:"Check no more than {0} boxes",toSubmit:"text",showDep:false,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices);var str="",classDep;if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0,h=this.choices.length;i<h;i++)
{if(typeof this.choicesDep[i]!='undefined')
this.choicesDep[i]=$.grep(this.choicesDep[i],function(n){return n!="";});else
this.choicesDep[i]=[];classDep=(this.choicesDep[i].length)?'depItem':'';str+='<div class="'+this.layout+'"><label for="'+this.name+'_cb'+i+'"><input aria-label="'+$.fbuilder.htmlEncode(this.choices[i])+'" name="'+this.name+'[]" id="'+this.name+'_cb'+i+'" class="field '+classDep+' group '+((this.required)?" required":"")+'" value="'+$.fbuilder.htmlEncode(this.choicesVal[i])+'" vt="'+$.fbuilder.htmlEncode((this.toSubmit=='text')?this.choices[i]:this.choicesVal[i])+'" type="checkbox" '+(this.readonly?' onclick="return false;" ':'')+((this.choiceSelected[i])?"checked":"")+'/> '+
(this.onoff?'<span class="cff-switch"></span>':'')+'<span>'+
$.fbuilder.htmlDecode(this.choices[i])+'</span></label></div>';}
return'<div class="fields '+this.csslayout+(this.onoff?' cff-switch-container':'')+' '+this.name+' cff-checkbox-field" id="field'+this.form_identifier+'-'+this.index+'"><label>'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+str+'<div class="clearer"></div><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var m=this;$(document).on('click','[id*="'+m.name+'"]',function(){if(0<m.max)
{var d=true;if($('[id*="'+m.name+'"]:checked').length<m.max)d=false;$('[id*="'+m.name+'"]:not(:checked)').prop('disabled',d);}});if(0<m.max)
$('[id*="'+m.name+'"]').rules('add',{maxlength:m.max,messages:{maxlength:m.maxError}});},showHideDep:function(toShow,toHide,hiddenByContainer)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,item=$('input[id*="'+me.name+'"]'),form_identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{item.each(function(i,e){if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{var checked=e.checked;for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||!checked)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)').addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}});}
catch(e){}
return result;},val:function(raw)
{raw=raw||false;var v,me=this,m=me.merge&&!raw,e=$('[id*="'+me.name+'"]:checked:not(.ignore)');if(!m)v=[];if(e.length)
{e.each(function(){var t=(m)?$.fbuilder.parseVal(this.value):$.fbuilder.parseValStr((raw=='vt')?this.getAttribute('vt'):this.value,raw);if(!$.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');if(m)v=(v)?v+t:t;else v.push(t);});}
return(typeof v=='object'&&typeof v['length']!=='undefined')?v:((v)?(($.isNumeric(v))?v:'"'+v+'"'):0);},setVal:function(v,nochange)
{var t,n=this.name;if(!$.isArray(v))v=[v];$('[id*="'+n+'"]').prop('checked',false);for(var i in v)
{t=(new String(v[i])).replace(/(['"])/g,"\\$1");$('[id*="'+n+'"][vt="'+t+'"],[id*="'+n+'"][value="'+t+'"]').prop('checked',true);}
if(!nochange)$('[id*="'+n+'"]').change();},setChoices:function(choices)
{if($.isPlainObject(choices))
{var bk=this.val(true);if('texts'in choices&&$.isArray(choices.texts))this.choices=choices.texts;if('values'in choices&&$.isArray(choices.values))this.choicesVal=choices.values;if('dependencies'in choices&&$.isArray(choices.dependencies))this.choicesDep=choices.dependencies;var html=this.show(),e=$('.'+this.name),c=e.attr('class'),i=e.find('.ignore').length,ipb=e.find('.ignorepb').length;e.replaceWith(html);e=$('.'+this.name);e.attr('class',c);if(i)e.find('input').addClass('ignore');if(ipb)e.find('input').addClass('ignorepb');this.setVal(bk);}},getIndex:function()
{var i=[];$('[name*="'+this.name+'"]').each(function(j,v){if(this.checked){i.push(j);}});return i;}});$.fbuilder.controls['fradio']=function(){};$.extend($.fbuilder.controls['fradio'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Select a Choice",ftype:"fradio",layout:"one_column",required:false,readonly:false,onoff:0,toSubmit:"text",choiceSelected:"",showDep:false,untickAccepted:true,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices);var l=this.choices.length,str="",classDep="";if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0;i<l;i++)
{if(typeof this.choicesDep[i]!='undefined')
this.choicesDep[i]=$.grep(this.choicesDep[i],function(n){return n!="";});else
this.choicesDep[i]=[];if(this.choicesDep[i].length)
classDep='depItem';}
for(var i=0;i<l;i++)
{str+='<div class="'+this.layout+'"><label for="'+this.name+'_rb'+i+'"><input aria-label="'+$.fbuilder.htmlEncode(this.choices[i])+'" name="'+this.name+'" id="'+this.name+'_rb'+i+'" class="field '+classDep+' group '+((this.required)?" required":"")+'" value="'+$.fbuilder.htmlEncode(this.choicesVal[i])+'" vt="'+$.fbuilder.htmlEncode((this.toSubmit=='text')?this.choices[i]:this.choicesVal[i])+'" type="radio" '+(this.readonly?' onclick="return false;" ':'')+((this.choices[i]+' - '+this.choicesVal[i]==this.choiceSelected)?"checked":"")+'/> '+
(this.onoff?'<span class="cff-switch"></span>':'')+'<span>'+$.fbuilder.htmlDecode(this.choices[i])+'</span></label></div>';}
return'<div class="fields '+this.csslayout+(this.onoff?' cff-switch-container':'')+' '+this.name+' cff-radiobutton-field" id="field'+this.form_identifier+'-'+this.index+'"><label>'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+str+'<div class="clearer"></div><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,n=me.name;if(me.untickAccepted)
{$(document).off('click','[id*="'+n+'_"]').on('click','[id*="'+n+'_"]',function(){var m=this,e=$(m);$('[id*="'+n+'_"]').each(function(){if(m!==this)$(this).data('previous-status',false);});if(e.data('previous-status')){m.checked=false;e.change();}
e.data('previous-status',m.checked);});}},showHideDep:function(toShow,toHide,hiddenByContainer)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,item=$('input[id*="'+me.name+'"]'),form_identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{item.each(function(i,e){if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{var checked=e.checked;for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||!checked)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)').addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}});}
catch(e){}
return result;},val:function(raw)
{raw=raw||false;var e=$('[id*="'+this.name+'"]:not(.ignore):checked');if(e.length)return $.fbuilder.parseValStr((raw=='vt')?e.attr('vt'):e.val(),raw);return 0;},setVal:function(v,nochange)
{var t=(new String(v)).replace(/(['"])/g,"\\$1"),n=this.name;$('[id*="'+n+'"]').prop('checked',false);$('[id*="'+n+'"][vt="'+t+'"],[id*="'+n+'"][value="'+t+'"]').prop('checked',true);if(!nochange)$('[id*="'+n+'"]').change();},setChoices:function(choices)
{if($.isPlainObject(choices))
{var bk=this.val(true);if('texts'in choices&&$.isArray(choices.texts))this.choices=choices.texts;if('values'in choices&&$.isArray(choices.values))this.choicesVal=choices.values;if('dependencies'in choices&&$.isArray(choices.dependencies))this.choicesDep=choices.dependencies;var html=this.show(),e=$('.'+this.name),c=e.attr('class'),i=e.find('.ignore').length,ipb=e.find('.ignorepb').length;e.replaceWith(html);e=$('.'+this.name);e.attr('class',c);if(i)e.find('input').addClass('ignore');if(ipb)e.find('input').addClass('ignorepb');this.setVal(bk);}},getIndex:function()
{var i=-1;$('[name*="'+this.name+'"]').each(function(j,v){if(this.checked){i=j;return false;}});return i;}});$.fbuilder.controls['fdropdown']=function(){};$.extend($.fbuilder.controls['fdropdown'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Select a Choice",ftype:"fdropdown",size:"medium",required:false,toSubmit:"text",merge:0,choiceSelected:"",multiple:false,vChoices:1,showDep:false,show:function()
{this.choicesVal=((typeof(this.choicesVal)!="undefined"&&this.choicesVal!==null)?this.choicesVal:this.choices)
var c=this.choices,cv=this.choicesVal,og=(typeof this.optgroup=='undefined')?new Array():this.optgroup,op_o=false,l=c.length,classDep='',str='';if(typeof this.choicesDep=="undefined"||this.choicesDep==null)
this.choicesDep=new Array();for(var i=0;i<l;i++)
{if(typeof this.choicesDep[i]!='undefined'&&(typeof og[i]=='undefined'||!og[i]))
this.choicesDep[i]=$.grep(this.choicesDep[i],function(n){return n!="";});else
this.choicesDep[i]=[];if(this.choicesDep[i].length&&(typeof og[i]=='undefined'||!og[i]))
classDep='depItem';}
for(var i=0;i<l;i++)
{if(og[i])
{if(op_o)str+='</optgroup>';str+='<optgroup label="'+$.fbuilder.htmlEncode(c[i])+'">';op_o=true;}
else
{str+='<option '+((this.choiceSelected==c[i]+' - '+cv[i])?"selected":"")+' '+((classDep!='')?'class="'+classDep+'"':'')+' value="'+$.fbuilder.htmlEncode(cv[i])+'" vt="'+$.fbuilder.htmlEncode((this.toSubmit=='text')?c[i]:cv[i])+'" data-i="'+i+'">'+c[i]+'</option>';}}
if(op_o)str+='</optgroup>';return'<div class="fields '+this.csslayout+' '+this.name+' cff-dropdown-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label>'+'<div class="dfield"><select aria-label="'+$.fbuilder.htmlEncode(this.title)+'" id="'+this.name+'" name="'+this.name+((this.multiple)?'[]':'')+'" class="field '+((classDep!='')?' depItemSel ':'')+this.size+((this.required)?' required':'')+'" '+((this.multiple==true)?' multiple="multiple" size="'+((this.vChoices)?this.vChoices:1)+'"':'')+'>'+str+'</select><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div><div class="clearer"></div></div>';},showHideDep:function(toShow,toHide,hiddenByContainer)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,item=$('#'+me.name+'.depItemSel'),form_identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),result=[];try
{if(item.length)
{var selected=[];$(item).find(':selected').each(function(){selected.push($(this).data('i'));});for(var i=0,h=me.choices.length;i<h;i++)
{if(typeof me.choicesDep[i]!='undefined'&&me.choicesDep[i].length)
{for(var j=0,k=me.choicesDep[i].length;j<k;j++)
{if(!/fieldname/i.test(me.choicesDep[i][j]))continue;var dep=me.choicesDep[i][j]+form_identifier;if(isHidden||$.inArray(i,selected)==-1)
{if(typeof toShow[dep]!='undefined')
{delete toShow[dep]['ref'][me.name+'_'+i];if($.isEmptyObject(toShow[dep]['ref']))
delete toShow[dep];}
if(typeof toShow[dep]=='undefined')
{$('[id*="'+dep+'"],.'+dep).closest('.fields').hide();$('[id*="'+dep+'"]:not(.ignore)').addClass('ignore');toHide[dep]={};}}
else
{delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name+'_'+i]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}}
if($.inArray(dep,result)==-1)result.push(dep);}}}}}
catch(e){}
return result;},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore) option:selected'),v,m=this.multiple,g=this.merge&&!raw;if(m&&!g)v=[];if(e.length)
{e.each(function(){var t=$.fbuilder.parseValStr((raw=='vt')?this.getAttribute('vt'):this.value,raw);if(!$.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');if(!m||g)v=(v)?v+t:t;else v.push(t);});}
return(typeof v=='object'&&typeof v['length']!=='undefined')?v:((v)?(($.isNumeric(v))?v:'"'+v+'"'):0);},setVal:function(v,nochange)
{if(!$.isArray(v))v=[v];var t,n=this.name;for(var i in v)
{t=(new String(v[i])).replace(/(['"])/g,"\\$1");$('[id="'+n+'"] OPTION[vt="'+t+'"],[id="'+n+'"] OPTION[value="'+t+'"]').prop('selected',true);}
if(!nochange)$('[id="'+n+'"]').change();},setChoices:function(choices)
{if($.isPlainObject(choices))
{var bk=this.val(true);if('texts'in choices&&$.isArray(choices.texts))this.choices=choices.texts;if('values'in choices&&$.isArray(choices.values))this.choicesVal=choices.values;if('dependencies'in choices&&$.isArray(choices.dependencies))this.choicesDep=choices.dependencies;if('optgroup'in choices&&$.isArray(choices.optgroup))this.optgroup=choices.optgroup;var html=this.show(),e=$('.'+this.name),c=e.attr('class'),i=e.find('.ignore').length,ipb=e.find('.ignorepb').length;e.replaceWith(html);e=$('.'+this.name);e.attr('class',c);if(i)e.find('select').addClass('ignore');if(ipb)e.find('select').addClass('ignorepb');this.setVal(bk);}},getIndex:function()
{var f=$('[name*="'+this.name+'"]');if(this.multiple){var i=[];f.find('option').each(function(j,v){if(this.selected)i.push(j);});return i;}
else return f[0].selectedIndex;}});$.fbuilder.controls['ffile']=function(){};$.extend($.fbuilder.controls['ffile'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ffile",required:false,size:"medium",accept:"",upload_size:"",multiple:false,preview:false,thumb_width:'80px',thumb_height:'',_patch:false,init:function(){this.thumb_width=$.trim(this.thumb_width);this.thumb_height=$.trim(this.thumb_height);var form_identifier=this.form_identifier.replace(/[^\d]/g,'');this._patch=('cpcff_default'in window&&form_identifier in cpcff_default)?true:false;},show:function()
{this.accept=$.fbuilder.htmlEncode($.trim(this.accept));this.upload_size=$.fbuilder.htmlEncode($.trim(this.upload_size));return'<div class="fields '+this.csslayout+' '+this.name+' cff-file-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+$.fbuilder.htmlEncode(this.title)+'" type="file" id="'+this.name+'" name="'+this.name+'[]"'+((this.accept.length)?' accept="'+this.accept+'"':'')+((this.upload_size.length)?' upload_size="'+this.upload_size+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" '+((this.multiple)?'multiple':'')+' />'+((this._patch)?'<input type="hidden" id="'+this.name+'_patch" name="'+this.name+'_patch" value="1" />':'')+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this;if(!('accept'in $.validator.methods))
$.validator.addMethod("accept",function(value,element,param)
{if(this.optional(element))return true;else{param=typeof param==="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";var regExpObj=new RegExp(".("+param+")$","i");for(var i=0,h=element.files.length;i<h;i++)
if(!element.files[i].name.match(regExpObj))return false;return true;}});if(!('upload_size'in $.validator.methods))
$.validator.addMethod("upload_size",function(value,element,params)
{if(this.optional(element))return true;else{var total=0;for(var i=0,h=element.files.length;i<h;i++)
total+=element.files[i].size/1024;return(total<=params);}});$('#'+me.name).change(function(){var h=this.files.length,n=0;$(this).siblings('span.files-list').remove();$('[id="'+me.name+'_patch"]').remove();if(1<=h)
{var filesContainer=$('<span class="files-list"></span>');for(var i=0;i<h;i++)
{(function(i,file){if(me.preview&&file.type.match('image.*')&&'FileReader'in window)
{var reader=new FileReader();reader.onload=function(e){var img=$('<img>');img.attr('src',e.target.result).css('maxWidth','100%');if(me.thumb_height!='')img.attr('height',me.thumb_height);if(me.thumb_width!='')img.attr('width',me.thumb_width);filesContainer.append($('<span>'+(n?', ':'')+'</span>').append(img));n++;};reader.readAsDataURL(file);}
else if(1<h){filesContainer.append($('<span>').text((n?', ':'')+file.name));n++;}})(i,this.files[i]);}
$(this).after(filesContainer);}});},val:function(raw)
{raw=raw||false;var e=$("[id='"+this.name+"']:not(.ignore)"),result='',separator='';if(e.length)
{if(raw)result=e[0].files;else
{for(var i=0,h=e[0].files.length;i<h;i++)
{result+=separator+e[0].files[i].name;separator=', ';}
result=$.fbuilder.parseValStr(result,raw);}}
return result;}});$.fbuilder.controls['fpassword']=function(){};$.extend($.fbuilder.controls['fpassword'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fpassword",predefined:"",predefinedClick:false,required:false,size:"medium",minlength:"",maxlength:"",equalTo:"",regExp:"",regExpMssg:"",show:function()
{this.minlength=$.fbuilder.htmlEncode($.trim(this.minlength));this.maxlength=$.fbuilder.htmlEncode($.trim(this.maxlength));this.equalTo=$.fbuilder.htmlEncode($.trim(this.equalTo));this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-password-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input aria-label="'+$.fbuilder.htmlEncode(this.title)+'" id="'+this.name+'" name="'+this.name+'"'+((this.minlength.length)?' minlength="'+this.minlength+'"':'')+((this.maxlength.length)?' maxlength="'+this.maxlength+'"':'')+((this.equalTo.length)?' equalTo="#'+this.equalTo+this.form_identifier+'"':'')+' class="field '+this.size+((this.required)?" required":"")+'" type="password" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{if(this.regExp!=""&&typeof $['validator']!='undefined')
{var parts=this.regExp.match(/(\/)(.*)(\/)([gimy]{0,4})$/i);this.regExp=(parts===null)?new RegExp(this.regExp):new RegExp(parts[2],parts[4].toLowerCase());if(!('pattern'in $.validator.methods))
$.validator.addMethod('pattern',function(value,element,param)
{try{return this.optional(element)||param.test(value);}
catch(err){return true;}});$('#'+this.name).rules('add',{'pattern':this.regExp,messages:{'pattern':this.regExpMssg}});}},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)return $.fbuilder.parseValStr(e.val(),raw);return 0;}});$.fbuilder.controls['fPhone']=function(){};$.extend($.fbuilder.controls['fPhone'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Phone",ftype:"fPhone",required:false,readonly:false,dformat:"### ### ####",predefined:"888 888 8888",show:function()
{this.predefined=new String(this._getAttr('predefined',true));var me=this,str="",tmp=this.dformat.split(' '),tmpv=this.predefined.split(' '),attr=(typeof this.predefinedClick!='undefined'&&this.predefinedClick)?'placeholder':'value';for(var i=0;i<tmpv.length;i++)
{if($.trim(tmpv[i])=="")
{tmpv.splice(i,1);}}
for(var i=0;i<tmp.length;i++)
{if($.trim(tmp[i])!="")
{str+='<div class="uh_phone" ><input aria-label="'+$.fbuilder.htmlEncode(this.title)+'" type="text" id="'+this.name+'_'+i+'" name="'+this.name+'_'+i+'" class="field '+((i==0)?' phone ':' digits ')+((this.required)?' required ':'')+'" size="'+$.trim(tmp[i]).length+'" '+attr+'="'+((tmpv[i])?tmpv[i]:"")+'" maxlength="'+$.trim(tmp[i]).length+'" minlength="'+$.trim(tmp[i]).length+'" '+((this.readonly)?'readonly':'')+' /><div class="l">'+$.trim(tmp[i])+'</div></div>';}}
return'<div class="fields '+this.csslayout+' '+this.name+' cff-phone-field" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input type="hidden" id="'+this.name+'" name="'+this.name+'" class="field " '+attr+'="'+tmpv.join('')+'" />'+str+'<div class="clearer"></div><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';},after_show:function()
{var me=this,tmp=me.dformat.split(' ');if(!('phone'in $.validator.methods))
$.validator.addMethod("phone",function(value,element)
{if(this.optional(element))return true;else return /^\+{0,1}\d*$/.test(value);});for(var i=0,h=tmp.length;i<h;i++)
{$('#'+me.name+'_'+i).bind('change',function(){var v='';for(var i=0;i<tmp.length;i++)
{v+=$('#'+me.name+'_'+i).val();}
$('#'+me.name).val(v).change();});if(i+1<h)
{$('#'+me.name+'_'+i).bind('keyup',{'next':i+1},function(evt){var e=$(this);if(e.val().length==e.attr('maxlength'))
{e.change();$('#'+me.name+'_'+evt.data.next).focus();}});}}},val:function()
{var e=$('[id="'+this.name+'"]:not(.ignore)'),p=$.fbuilder.parseValStr(e.val(),true);if(e.length)return($.isNumeric(p))?'"'+p+'"':p;return 0;},setVal:function(v)
{$('[name="'+this.name+'"]').val(v);v=$.trim(v).replace(/[^\d]/g,' ').split(' ');for(var i in v)$('[id="'+this.name+'_'+i+'"]').val(v[i]);}});$.fbuilder.controls['fCommentArea']=function(){};$.extend($.fbuilder.controls['fCommentArea'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Comments here",ftype:"fCommentArea",userhelp:"A description of the section goes here.",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' comment_area" id="field'+this.form_identifier+'-'+this.index+'"><label id="'+this.name+'">'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fhidden']=function(){};$.extend($.fbuilder.controls['fhidden'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fhidden",title:"",predefined:"",show:function()
{this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-hidden-field" id="field'+this.form_identifier+'-'+this.index+'" style="padding:0;margin:0;border:0;width:0;height:0;overflow:hidden;"><label for="'+this.name+'">'+this.title+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" type="hidden" value="'+$.fbuilder.htmlEncode(this.predefined)+'" class="field" /></div></div>';}});$.fbuilder.controls['fSectionBreak']=function(){};$.extend($.fbuilder.controls['fSectionBreak'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Section Break",ftype:"fSectionBreak",userhelp:"A description of the section goes here.",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' section_breaks" id="field'+this.form_identifier+'-'+this.index+'"><div class="section_break" id="'+this.name+'" ></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fPageBreak']=function(){};$.extend($.fbuilder.controls['fPageBreak'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Page Break",ftype:"fPageBreak",show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' section_breaks" id="field'+this.form_identifier+'-'+this.index+'"><div class="section_break" id="'+this.name+'" ></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fsummary']=function(){};$.extend($.fbuilder.controls['fsummary'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Summary",ftype:"fsummary",fields:"",exclude_empty:false,titleClassname:"summary-field-title",valueClassname:"summary-field-value",fieldsArray:[],show:function()
{var me=this;if('string'!=typeof me.fields)return;var p=$.trim(me.fields.replace(/\,+/g,',')).split(','),l=p.length;if(l)
{var str='<div class="fields '+me.csslayout+' '+me.name+' cff-summary-field" id="field'+me.form_identifier+'-'+me.index+'">'+((!/^\s*$/.test(me.title))?'<h2>'+me.title+'</h2>':'')+'<div id="'+me.name+'">';for(var i=0;i<l;i++)
{if(!/^\s*$/.test(p[i]))
{p[i]=$.trim(p[i]);str+='<div ref="'+p[i]+me.form_identifier+'" class="cff-summary-item"><span class="'+me.titleClassname+' cff-summary-title"></span><span class="'+me.valueClassname+' cff-summary-value"></span></div>';}}
str+='</div></div>';return str;}},after_show:function(){var me=this;if('string'!=typeof me.fields)return;var p=$.trim(me.fields.replace(/\,+/g,',')).split(','),l=p.length;if(l)
{for(var i=0;i<l;i++)
{if(!/^\s*$/.test(p[i]))
{p[i]=$.trim(p[i]);me.fieldsArray.push(p[i]+me.form_identifier);$(document).on('change','[id*="'+p[i]+me.form_identifier+'"]',function(){me.update();});}}
$(document).on('showHideDepEvent',function(evt,form_identifier)
{me.update();});$('#cp_calculatedfieldsf_pform'+me.form_identifier).bind('reset',function(){setTimeout(function(){me.update();},10);});}},update:function()
{for(var j=0,k=this.fieldsArray.length;j<k;j++)
{var i=this.fieldsArray[j],e=$('[id="'+i+'"],[id^="'+i+'_rb"],[id^="'+i+'_cb"]'),tt=$('[ref="'+i+'"]');if(e.length&&tt.length)
{var l=$('[id="'+i+'"],[id^="'+i+'_rb"],[id^="'+i+'_cb"]').closest('.fields').find('label:first').clone().find('.r,.dformat').remove().end(),t=$.trim(l.text()).replace(/\:$/,''),v=[];e.each(function(){var e=$(this);if(/(checkbox|radio)/i.test(e.attr('type'))&&!e.is(':checked'))
{return;}
else if(e[0].tagName=='SELECT')
{var vt=[];e.find('option:selected').each(function(){vt.push($(this).attr('vt'));});v.push(vt.join(', '));}
else
{if(e.attr('vt'))
{v.push(e.attr('vt'));}
else
{var d=$('[id="'+i+'_date"]');if(d.length)
{if(d.is(':disabled'))
{v.push(e.val().replace(d.val(),''));}
else v.push(e.val());}
else
{if(e.attr('type')=='file')
{var f=[];$.each(e[0].files,function(i,o){f.push(o.name);});v.push(f.join(', '));}
else
{var c=$('[id="'+i+'_caption"]');v.push((c.length&&!/^\s*$/.test(c.html()))?c.html():e.val());}}}}});v=v.join(', ');tt.find('.cff-summary-title')[(/^\s*$/.test(t))?'hide':'show']().html(t);tt.find('.cff-summary-value').html(v);if(e.hasClass('ignore')||(this.exclude_empty&&v==''))
{tt.hide();}
else
{tt.show();}}}}});$.fbuilder.controls['fcontainer']=function(){};$.fbuilder.controls['fcontainer'].prototype={fields:[],columns:1,rearrange:0,after_show:function()
{var e=$('#'+this.name),f;for(var i=0,h=this.fields.length;i<h;i++)
{f=$('[id*="'+this.fields[i]+this.form_identifier+'"]').closest('.fields').detach();if(this.columns>1)
{f.addClass('column'+this.columns);if(i%this.columns==0&&!this.rearrange)f.css('clear','left');}
f.appendTo(e);}},showHideDep:function(toShow,toHide,hiddenByContainer)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),fId,result=[];for(var i=0,h=me.fields.length;i<h;i++)
{if(!/fieldname/i.test(me.fields[i]))continue;fId=me.fields[i]+me.form_identifier;if(isHidden)
{if(typeof hiddenByContainer[fId]=='undefined')hiddenByContainer[fId]={};if(typeof hiddenByContainer[fId][me.name]=='undefined')
{hiddenByContainer[fId][me.name]={};if(typeof toHide[fId]=='undefined')
{$('[id*="'+fId+'"],.'+fId).closest('.fields').hide();$('[id*="'+fId+'"]:not(.ignore)').addClass('ignore');result.push(fId);}}}
else
{if(typeof hiddenByContainer[fId]!='undefined')
{delete hiddenByContainer[fId][me.name];if($.isEmptyObject(hiddenByContainer[fId]))
{delete hiddenByContainer[fId];if(typeof toHide[fId]=='undefined')
{$('[id*="'+fId+'"],.'+fId).closest('.fields').show();$('[id*="'+fId+'"].ignore').removeClass('ignore');result.push(fId);}}}}}
return result;}};$.fbuilder.controls['ffieldset']=function(){};$.extend($.fbuilder.controls['ffieldset'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"ffieldset",fields:[],columns:1,collapsible:false,defaultCollapsed:true,rearrange:0,show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-container-field '+((this.collapsible)?'cff-collapsible'+((this.defaultCollapsed)?' cff-collapsed':''):'')+'" id="field'+this.form_identifier+'-'+this.index+'"><FIELDSET>'+((!/^\s*$/.test(this.title))?'<LEGEND>'+this.title+'</LEGEND>':'')+'<div id="'+this.name+'"></div></FIELDSET><div class="clearer"></div></div>';},after_show:function()
{var me=this;$.fbuilder.controls['fcontainer'].prototype.after_show.call(this);if(me.collapsible)$('.'+me.name+'>fieldset>legend').bind('click',function(){$(this).closest('.cff-collapsible').toggleClass('cff-collapsed');});},showHideDep:function(toShow,toHide,hiddenByContainer)
{return $.fbuilder.controls['fcontainer'].prototype.showHideDep.call(this,toShow,toHide,hiddenByContainer);}});$.fbuilder.controls['fdiv']=function(){};$.extend($.fbuilder.controls['fdiv'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fdiv",fields:[],columns:1,rearrange:0,show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-container-field" id="field'+this.form_identifier+'-'+this.index+'"><div id="'+this.name+'"></div><div class="clearer"></div></div>';},after_show:function()
{$.fbuilder.controls['fcontainer'].prototype.after_show.call(this);},showHideDep:function(toShow,toHide,hiddenByContainer)
{return $.fbuilder.controls['fcontainer'].prototype.showHideDep.call(this,toShow,toHide,hiddenByContainer);}});$.fbuilder.controls['fMedia']=function(){};$.extend($.fbuilder.controls['fMedia'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fMedia",sMediaType:"image",data:{image:{sWidth:"",sHeight:"",sSrc:"",sAlt:"",sLink:"",sTarget:"",sFigcaption:""},audio:{sWidth:"",sSrc:"",sSrcAlt:"",sControls:1,sLoop:0,sAutoplay:0,sMuted:0,sPreload:"auto",sFallback:"",sFigcaption:"",sHideDownload:0},video:{sWidth:"",sHeight:"",sSrc:"",sSrcAlt:"",sPoster:"",sControls:1,sLoop:0,sAutoplay:0,sMuted:0,sPreload:"auto",sFallback:"",sFigcaption:"",sHideDownload:0}},_show_image:function()
{var d=this.data.image,esc=$.fbuilder.htmlEncode,a=[],l=[],r='';if($.trim(d.sWidth))a.push('width="'+esc(d.sWidth)+'"');if($.trim(d.sHeight))a.push('height="'+esc(d.sHeight)+'"');if($.trim(d.sSrc))a.push('src="'+esc(d.sSrc)+'"');if($.trim(d.sAlt))a.push('alt="'+esc(d.sAlt)+'"');if($.trim(d.sLink))
{l.push('href="'+esc(d.sLink)+'"');if($.trim(d.sTarget))l.push('target="'+esc(d.sTarget)+'"');r='<a '+l.join(' ')+' ><img '+a.join(' ')+' /></a>';}
else
{r='<img '+a.join(' ')+' />';}
return r;},_show_audio_video:function(d,isV)
{var esc=$.fbuilder.htmlEncode,a=[],s=[],t=(isV)?'video':'audio';if($.trim(d.sWidth))s.push('width:'+esc(d.sWidth)+';');if(isV&&$.trim(d.sHeight))s.push('height:'+esc(d.sHeight)+';');if(isV&&$.trim(d.sPoster))a.push('poster="'+esc(d.sPoster)+'"');if($.trim(d.sSrc))a.push('src="'+esc(d.sSrc)+'"');if(d.sAutoplay)a.push('autoplay');if(d.sControls)a.push('controls');if(d.sLoop)a.push('loop');if(d.sMuted)a.push('muted');if(d.sHideDownload)a.push('controlsList="nodownload"');a.push('preload="'+esc(d.sPreload)+'"');return'<'+t+' '+a.join(' ')+' style="'+s.join(' ')+'">'+(($.trim(d.sSrcAlt))?'<source src="'+esc(d.sSrcAlt)+'" />':'')+'<p>'+d.sFallback+'</p></'+t+'>';},_show_audio:function()
{return this._show_audio_video(this.data.audio,false);},_show_video:function()
{return this._show_audio_video(this.data.video,true);},show:function()
{return'<div class="fields '+this.csslayout+' '+this.name+' cff-media-field" id="field'+this.form_identifier+'-'+this.index+'"><div class="clearer"><div class="field" id="'+this.name+'">'+this['_show_'+this.sMediaType]()+'</div></div><span class="uh">'+this.data[this.sMediaType].sFigcaption+'</span><div class="clearer"></div></div>';}});$.fbuilder.controls['fButton']=function(){};$.extend($.fbuilder.controls['fButton'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fButton",sType:"button",sValue:"button",sLoading:false,sOnclick:"",sOnmousedown:"",userhelp:"A description of the section goes here.",show:function()
{var esc=function(v){v=v.replace(/&lt/g,'&amp;').replace(/"/g,"&quot;").replace(/\n+/g,' ');return v;},type=this.sType,clss='';if(this.sType=='calculate')
{type='button';clss='calculate-button';}
else if(this.sType=='reset')
{clss='reset-button';}
return'<div class="fields '+this.csslayout+' '+this.name+' cff-button-field" id="field'+this.form_identifier+'-'+this.index+'"><input id="'+this.name+'" type="'+type+'" value="'+esc(this.sValue)+'" class="field '+clss+'" /><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';},after_show:function()
{var me=this;$('#'+this.name).mousedown(function(){eval(me.sOnmousedown);});$('#'+this.name).click(function()
{var e=$(this),f;if(e.hasClass('calculate-button'))
{var items=$.fbuilder['forms'][me.form_identifier].getItems();if(me.sLoading)
{f=e.closest('#fbuilder');f.find('.cff-processing-form').remove();$('<div class="cff-processing-form"></div>').appendTo(f);}
$(document).on('equationsQueueEmpty',function(evt,id){if(id==me.form_identifier)
{if(me.sLoading)e.closest('#fbuilder').find('.cff-processing-form').remove();$(document).off('equationsQueueEmpty');for(var i=0,h=items.length;i<h;i++)
{if(items[i].ftype=='fsummary')
{items[i].update();}}}});$.fbuilder['calculator'].defaultCalc('#'+e.closest('form').attr('id'),false);}
if(e.hasClass('reset-button'))
{setTimeout(function()
{var identifier=e.closest('form').attr('id').replace(/cp_calculatedfieldsf_pform/,'');e.closest('form').find(':data(manually)').removeData('manually');$.fbuilder['showHideDep']({'formIdentifier':identifier});var page=parseInt(e.closest('.pbreak').attr('page'));if(page)
{$.fbuilder.forms[identifier]['currentPage']=0;$("#fieldlist"+identifier+" .pbreak").css("display","none");$("#fieldlist"+identifier+" .pbreak").find(".field").addClass("ignorepb");$("#fieldlist"+identifier+" .pb0").css("display","block");if($("#fieldlist"+identifier+" .pb0").find(".field").length>0)
{$("#fieldlist"+identifier+" .pb0").find(".field").removeClass("ignorepb");try
{$("#fieldlist"+identifier+" .pb0").find(".field")[0].focus();}
catch(e){}}}},50);}
eval(me.sOnclick);});}});$.fbuilder.controls['fhtml']=function(){};$.extend($.fbuilder.controls['fhtml'].prototype,$.fbuilder.controls['ffields'].prototype,{ftype:"fhtml",fcontent:"",show:function()
{var content=this.fcontent;content=content.replace(/\(\s*document\s*\)\.one\(\s*['"]showHideDepEvent['"]/ig,'(window).one("showHideDepEvent"');return'<div class="fields '+this.csslayout+' '+this.name+' cff-html-field" id="field'+this.form_identifier+'-'+this.index+'"><div id="'+this.name+'" class="dfield">'+content+'</div><div class="clearer"></div></div>';}});$.fbuilder.controls['facceptance']=function(){};$.extend($.fbuilder.controls['facceptance'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Accept terms and conditions",ftype:"facceptance",value:"I accept",required:true,onoff:0,url:"",message:"",show:function()
{var me=this,dlg='',label=me.title;if(!/^\s*$/.test(me.url))
{label='<a href="'+$.fbuilder.htmlEncode($.trim(me.url))+'" target="_blank">'+label+'</a>';}
else if(!/^\s*$/.test(me.message))
{label='<a href="javascript:void(0);" class="cff-open-dlg">'+label+'</a>';dlg+='<div class="cff-dialog hide"><span class="cff-close-dlg"></span><div class="cff-dialog-content">'+me.message+'</div></div>'}
return'<div class="fields '+me.csslayout+(this.onoff?' cff-switch-container':'')+' '+me.name+' cff-checkbox-field" id="field'+me.form_identifier+'-'+me.index+'"><div class="dfield">'+'<div class="one_column"><label for="'+me.name+'"><input aria-label="'+$.fbuilder.htmlEncode(me.title)+'" name="'+me.name+'" id="'+me.name+'" class="field required" value="'+$.fbuilder.htmlEncode(me.value)+'" vt="'+$.fbuilder.htmlEncode((/^\s*$/.test(me.value))?me.title:me.value)+'" type="checkbox" /> '+
(this.onoff?'<span class="cff-switch"></span>':'')+'<span>'+
$.fbuilder.htmlDecode(label)+''+((me.required)?'<span class="r">*</span>':'')+'</span></label></div>'+dlg+'<span class="uh"></span></div><div class="clearer"></div></div>';},after_show:function()
{$(document).on('click','.cff-open-dlg',function(){var dlg=$(this).closest('.fields').find('.cff-dialog'),w=dlg.data('width'),h=dlg.data('height');dlg.removeClass('hide');if('undefined'==typeof w)w=MIN($(this).closest('form').width(),$(window).width(),dlg.width());if('undefined'==typeof h)h=MIN($(this).closest('form').height(),$(window).height(),dlg.height());dlg.data('width',w);dlg.data('height',h);dlg.css({'width':w+'px','height':h+'px','margin-top':(-1*h/2)+'px','margin-left':(-1*w/2)+'px'});});$(document).on('click','.cff-close-dlg',function(){$(this).closest('.cff-dialog').addClass('hide');});},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:checked:not(.ignore)');if(e.length)
{var t=$.fbuilder.parseValStr(e[0].value,raw);if(!$.isNumeric(t))t=t.replace(/^"/,'').replace(/"$/,'');}
return(t)?(($.isNumeric(t))?t:'"'+t+'"'):0;}});$.fbuilder.controls['fCalculated']=function(){};$.extend($.fbuilder.controls['fCalculated'].prototype,$.fbuilder.controls['ffields'].prototype,{title:"Untitled",ftype:"fCalculated",predefined:"",required:false,size:"medium",eq:"",suffix:"",prefix:"",decimalsymbol:".",groupingsymbol:"",dependencies:[{'rule':'','complex':false,'fields':['']}],readonly:true,currency:false,noEvalIfManual:true,formatDynamically:false,hidefield:false,show:function()
{this.predefined=this._getAttr('predefined');return'<div class="fields '+this.csslayout+' '+this.name+' cff-calculated-field" id="field'+this.form_identifier+'-'+this.index+'" style="'+((this.hidefield)?'padding:0;margin:0;border:0;opacity:0;width:0;height:0;overflow:hidden;':'')+'"><label for="'+this.name+'">'+this.title+''+((this.required)?'<span class="r">*</span>':'')+'</label><div class="dfield"><input aria-label="'+$.fbuilder.htmlEncode(this.title)+'" id="'+this.name+'" name="'+this.name+'" '+((this.readonly)?' readonly ':'')+' class="codepeoplecalculatedfield field '+this.size+((this.required)?" required":"")+'" type="'+((this.hidefield)?'hidden':'text')+'" value="'+this.predefined+'"/>'+((!this.hidefield)?'<span class="uh">'+this.userhelp+'</span>':'')+'</div><div class="clearer"></div></div>';},after_show:function()
{var me=this,configuration={"suffix":me.suffix,"prefix":me.prefix,"groupingsymbol":me.groupingsymbol,"decimalsymbol":me.decimalsymbol,"currency":me.currency},dependencies=[];$.each(me.dependencies,function(i,d)
{d.rule=d.rule.replace(/^\s+/,'').replace(/\s+$/,'');if(d.rule!=''&&d.fields.length){var fields=[];$.each(d.fields,function(j,f){if(f!='')
{fields.push(f);}});if(fields.length){dependencies.push({'rule':d.rule,'fields':fields});}}});me.dependencies=dependencies;var eq=me.eq;eq=eq.replace(/\n/g,' ').replace(/fieldname(\d+)/g,"fieldname$1"+me.form_identifier).replace(/form_identifier/g,'\''+this['form_identifier']+'\'').replace(/;\s*\)/g,')').replace(/;\s*$/,'');if(!/^\s*$/.test(eq))
{$.fbuilder.calculator.addEquation(me.name,eq,configuration,dependencies,me.form_identifier);}
var e=$('[id="'+me.name+'"]');if(me.readonly==false&&me.noEvalIfManual)e.bind('keyup',function(){e.data('manually',1);});e.bind('calcualtedfield_changed',{obj:me},function(evt){if($.fbuilder['calculator'].getDepList(evt.data.obj.name,{value:evt.data.obj.val(),raw:evt.data.obj.val(true)},evt.data.obj.dependencies))
{$.fbuilder.showHideDep({'formIdentifier':evt.data.obj.form_identifier,'fieldIdentifier':evt.data.obj.name});}}).on('keyup',function(){me.manual=true;if(me.noEvalIfManual&&!me.readonly)e.trigger('calcualtedfield_changed');}).on('change',function(){if('manual'in me&&me.manual)
{if(me.formatDynamically)
{me.manual=false;var v=me.val();this.value=$.fbuilder.calculator.format(v,configuration);}}});$('#cp_calculatedfieldsf_pform'+me.form_identifier).bind('reset',function(){me.manua=false;});},showHideDep:function(toShow,toHide,hiddenByContainer)
{if(typeof hiddenByContainer=='undefined')hiddenByContainer={};var me=this,result=[];if($.fbuilder['calculator'].getDepList(me.name,{value:me.val(),raw:me.val(true)},me.dependencies))
{var item=$('#'+me.name),identifier=me.form_identifier,isHidden=(typeof toHide[me.name]!='undefined'||typeof hiddenByContainer[me.name]!='undefined'),d,n,dep,clearRef=function(id){if(typeof toShow[id]!='undefined')
{delete toShow[id]['ref'][me.name];if($.isEmptyObject(toShow[id]['ref']))
delete toShow[id];}},hideField=function(id){$('[id*="'+id+'"],.'+id).closest('.fields').hide();$('[id*="'+id+'"]:not(.ignore)').addClass('ignore');toHide[id]={};};try
{d=item.attr('dep');if(typeof d!='undefined'&&!/^\s*$/.test(d))d=d.split(',');else d=[];n=item.attr('notdep');if(typeof n!='undefined'&&!/^\s*$/.test(n))n=n.split(',');else n=[];if(isHidden)
{n=n.concat(d);d=[];}
for(i=0;i<d.length;i++)
{if(!/fieldname/i.test(d[i]))continue;dep=d[i]+identifier;delete toHide[dep];if(typeof toShow[dep]=='undefined')
toShow[dep]={'ref':{}};toShow[dep]['ref'][me.name]=1;if(!(dep in hiddenByContainer))
{$('[id*="'+dep+'"],.'+dep).closest('.fields').show();$('[id*="'+dep+'"].ignore').removeClass('ignore');}
if($.inArray(dep,result)==-1)result.push(dep);}
for(i=0;i<n.length;i++)
{if(!/fieldname/i.test(n[i]))continue;dep=n[i]+identifier;clearRef(dep);if(typeof toShow[dep]=='undefined'&&typeof toHide[dep]=='undefined')hideField(dep);if($.inArray(dep,result)==-1)result.push(dep);}}
catch(e){}}
return result;},val:function(raw)
{raw=raw||false;var e=$('[id="'+this.name+'"]:not(.ignore)');if(e.length)
{var v=e.val();if(raw)return $.fbuilder.parseValStr(v,raw);v=$.trim(v);v=v.replace(new RegExp($.fbuilder['escapeSymbol'](this.prefix),'g'),'').replace(new RegExp($.fbuilder['escapeSymbol'](this.suffix),'g'),'');return $.fbuilder.parseVal(v,this.groupingsymbol,this.decimalsymbol);}
return 0;}});$.fbuilder['extend_window']=function(prefix,obj)
{for(method in obj)
{window[prefix+method]=(function(m)
{return function()
{return m.obj[m.method_name].apply(m.obj,arguments);};})({"method_name":method,'obj':obj});}};$.fbuilder['calculator']=(function()
{var validators=[];if(typeof $.fbuilder['modules']!='undefined')
{var modules=$.fbuilder['modules'];for(var module in modules)
{if(typeof modules[module]['callback']!='undefined')
{modules[module]['callback']();}
if(typeof modules[module]['validator']!='undefined')
{validators.push(modules[module]['validator']);}}}
_validate_result=function(v)
{if(validators.length)
{var h=validators.length;while(h--)
{if(validators[h](v))
{return true;}}}
else
{return true;}
return false;};_calculate=function(eq,suffix,__ME__)
{var e=$.fbuilder['forms'][suffix].getItem(__ME__),__ME__=e.val();if($('#'+e.name).data('manually')==1)return __ME__;var _match,field_regexp=new RegExp('(fieldname\\d+'+suffix+')(_[cr]b\\d+)?(\\|[rnv])?([\\D\\b])','i');window['getField']=$.fbuilder['forms'][suffix].getItem;$.fbuilder['currentFormId']=$.fbuilder['forms'][suffix].formId;eq='('+eq+')';while(_match=field_regexp.exec(eq))
{var field=$.fbuilder['forms'][suffix].getItem(_match[1]),v='';if(field)
{if(_match[3]&&_match[3]=='|n')
{v='"'+_match[1].match(/fieldname\d+/)[0]+'"';}
else
{v=field.val((_match[3])?((_match[3]=='|v')?'vt':((_match[3]=='|r')?true:false)):false);if(typeof v=='object'&&typeof window.JSON!='undefined')v=JSON.stringify(v);else if($.isNumeric(v))v='('+v+')';}}
eq=eq.replace(_match[0],v+''+_match[4]);}
try
{var r=eval(eq.replace(/^\(/,'').replace(/\)$/,'').replace(/\b__ME__\b/g,__ME__));return(typeof r!='undefined'&&_validate_result(r))?r:false;}
catch(e)
{if(typeof console!='undefined'){console.log(eq);console.log(e.message);}
return false;}};_checkValueThrowingEquation=function(t)
{if(typeof t.attr('data-timeout')!='undefined')clearTimeout(t.attr('data-timeout'));if(typeof t.attr('data-previousvalue')=='undefined')t.attr('data-previousvalue',t.val());else
{if(t.val()==t.attr('data-previousvalue'))
{t.removeAttr('data-timeout');obj.Calculate(t[0]);return;}
t.attr('data-previousvalue',t.val());}
t.attr('data-timeout',setTimeout(_checkValueThrowingEquation,500,t));};var CalcFieldClss=function(){};CalcFieldClss.prototype={processing_queue:false,pendings:{},queued_equations:{},addPending:function(form_identifier)
{if(!(form_identifier in this.pendings))this.pendings[form_identifier]=1;else this.pendings[form_identifier]++;},removePending:function(form_identifier)
{if((form_identifier in this.pendings)&&this.pendings[form_identifier])this.pendings[form_identifier]--;},thereIsPending:function(form_identifier)
{if(form_identifier in this.pendings)return this.pendings[form_identifier];return 0;},addEquation:function(calculated_field,equation,configuration,dependencies,form_identifier)
{var equation_result=$('[id="'+calculated_field+'"]');if(equation_result.length)
{var form=equation_result[0].form,equationObj,field,regexp=new RegExp('(fieldname\\d+)_'),match;if(typeof form.equations=='undefined')form['equations']=[];var i,j=-1,h=form.equations.length;for(i=0;i<h;i++)
{if(form.equations[i].result==calculated_field)break;if(form.equations[i].equation.match(calculated_field)){j=i;break;}}
if(i==h||j!=-1)
{equationObj={'result':calculated_field,'equation':equation,'conf':configuration,'dep':dependencies,'identifier':form_identifier};form.equations.splice(i,0,equationObj);while(match=regexp.exec(equation))
{field=$.fbuilder['forms'][form_identifier].getItem(match[1]+form_identifier);if(field)
{if(typeof field.usedInEquations=='undefined')field.usedInEquations=[];field.usedInEquations.push(equationObj);}
equation=equation.replace(new RegExp(match[0],'g'),'');}}}},enqueueEquation:function(form_identifier,equations)
{if(typeof this.queued_equations[form_identifier]=='undefined')
this.queued_equations[form_identifier]=[];var queue=this.queued_equations[form_identifier],f;for(var i=0,h=equations.length;i<h;i++)
{f=-1;for(var j=0,k=queue.length;j<k;j++)
{if(queue[j].result==equations[i].result)break;if(queue[j].equation.match(equations[i].result)){f=j;break;}}
if(j==k||f!=-1)
{queue.splice(j,0,equations[i]);}}},getDepList:function(calculated_field,values,dependencies)
{var list=[],list_h=[];if(values.value!==false&&dependencies.length)
{for(var i=0,h=dependencies.length;i<h;i++)
{try
{var rule=eval(dependencies[i].rule.replace(/value\|r/gi,values.raw).replace(/value/gi,values.value));$.each(dependencies[i].fields,function(j,e)
{if(e!='')
{if(rule)
{var k=$.inArray(e,list_h);while(k!=-1)
{list_h.splice(k,1);k=$.inArray(e,list_h);}
if($.inArray(e,list)==-1)list.push(e);}
else
{if($.inArray(e,list)==-1)list_h.push(e);}}});}
catch(e)
{if(typeof console!='undefined')console.log(e.message);continue;}}}
$('[id="'+calculated_field+'"]').attr('dep',list.join(',')).attr('notdep',list_h.join(','));return list.length||list_h.length;},defaultCalc:function(form,enqueued)
{var dep=false;form=$(form);if(form.length)
{var fSec=form.attr('id').match(/_\d+$/)[0];if(enqueued)
{this.processQueue(fSec);}
else if(typeof form[0].equations!='undefined')
{this.queued_equations[fSec]=form[0].equations.slice(0);this.processQueue(fSec);}
$(form).trigger('cpcff_default_calc');}},Calculate:function(field)
{if(field.id==undefined)return;var id=field.id.replace(/_[cr]b\d+$/i,''),fSec=id.match(/(_\d+)?_\d+$/),item,me=this;if(fSec)
{fSec=(typeof fSec[1]!='undefined')?fSec[1]:fSec[0];item=$.fbuilder['forms'][fSec].getItem(id);if(item&&typeof item['usedInEquations']!='undefined')
{me.enqueueEquation(fSec,item.usedInEquations);me.processQueue(fSec);}}},processQueue:function(fSec)
{if(this.processing_queue)return;this.processing_queue=true;if(typeof this.queued_equations[fSec]!='undefined')
{var queue=this.queued_equations[fSec],eq_obj;while(queue.length)
{eq_obj=queue.shift();$.fbuilder['currentEq']=eq_obj;var field=$('[id="'+eq_obj.result+'"]'),result=_calculate(eq_obj.equation,eq_obj.identifier,eq_obj.result),bk=field.data('bk');field.val((result!==false)?this.format(result,eq_obj.conf):'');if(bk!=field.val())
{field.trigger('calcualtedfield_changed');field.change();}
field.data('bk',field.val());}}
this.processing_queue=false;if(!this.thereIsPending(fSec))$(document).trigger('equationsQueueEmpty',[fSec]);},format:function(value,config)
{config=$.extend({},config);if(!/^\s*$/.test(value))
{var symbol='',isNumeric=false;if($.isNumeric(value)&&!/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)/.test(value))
{isNumeric=true;if(value<0)symbol='-';var parts=value.toString().replace("-","").split("."),counter=0,str='';if(config.groupingsymbol)
{for(var i=parts[0].length-1;i>=0;i--){counter++;str=parts[0][i]+str;if(counter%3==0&&i!=0)str=config.groupingsymbol+str;}
parts[0]=str;}
if(!('decimalsymbol'in config))config.decimalsymbol='.';value=parts.join(config.decimalsymbol);}
if(config.currency&&!isNumeric)
{delete config.prefix;delete config.suffix;}
if(config.prefix)
{if(!config.currency)
{value=symbol+value;symbol='';}
value=config.prefix+value;}
if(config.suffix)value+=config.suffix;value=symbol+value;}
return value;},unformat:function(field)
{var escapeSymbol=$.fbuilder.escapeSymbol;var eq=field[0].form.equations,v=field.val();for(var i=0,h=eq.length;i<h;i++)
{if(eq[i].result==field[0].id)
{var c=eq[i].conf;if(c.prefix&&!/^\s*$/.test(c.prefix))
{v=v.replace(new RegExp("^"+escapeSymbol(c.prefix)),'');}
if(c.suffix&&!/^\s*$/.test(c.suffix))
{v=v.replace(new RegExp(escapeSymbol(c.suffix)+"$"),'');}
if(!/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)/.test(v))
{if(c.groupingsymbol&&!/^\s*$/.test(c.groupingsymbol))
{v=v.replace(new RegExp(escapeSymbol(c.groupingsymbol),'g'),'');}
if(c.decimalsymbol&&!/^\s*$/.test(c.decimalsymbol))
{v=v.replace(new RegExp(escapeSymbol(c.decimalsymbol),'g'),'.');}}}}
return v;}};var obj=new CalcFieldClss();$(document).on('keyup change blur','[id="fbuilder"] :input',function(evt)
{var t=$(evt.target),f=t.closest('form'),evalequations=f.attr('data-evalequations'),evalequationsevent=f.attr('data-evalequationsevent');if(typeof evalequations!='undefined'&&evalequations*1==0&&!(t.hasClass('codepeoplecalculatedfield')&&evt.type=='change'))
{return;}
if(evt.type=='keyup')
{if('undefined'!=typeof evalequationsevent&&evalequationsevent*1==1)
{return;}
if(evt.keyCode&&(evt.keyCode>=33&&evt.keyCode<=40))return;_checkValueThrowingEquation(t);}
else
{if(((t.prop('tagName')=='INPUT'&&/(text|number|email|password)/.test(t.attr('type').toLowerCase())||t.prop('tagName')=='TEXTAREA')&&evt.type!='change'))
{return;}
obj.Calculate(t[0]);}});$(document).on('showHideDepEvent',function(evt,form_identifier)
{var f,evalequations,first_time;if(form_identifier)f=$('#'+form_identifier);else f=$('[id*="cp_calculatedfieldsf_pform_"]:eq(0)');if(f.length)
{first_time=(typeof f.data('first_time')=='undefined');f.data('first_time',0);evalequations=f.data('evalequations');if(typeof evalequations=='undefined'||evalequations*1==1)
{if(first_time)obj.defaultCalc('#'+f.attr('id'));else obj.defaultCalc('#'+f.attr('id'),true);}}});return obj;})();try{!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);}catch(err){}if(typeof $.fn['fbuilder_serializeObject']=='undefined')
{$.fn.fbuilder_serializeObject=function()
{var o={},a=this.serializeArray();$.each(a,function(){if(/^fieldname\d+_\d+(\[\])?$/.test(this.name))this.name=this.name.match(/fieldname\d+/)[0];else return;if(o[this.name]){if(!o[this.name].push){o[this.name]=[o[this.name]];}
o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;};}
$.fn.fbuilder_localstorage=function(){var form=this,id=form.attr('id'),sq=(typeof id=='undefined')?1:id.replace(/[^\d]/g,''),localStore_obj,fields;if(sq=='')sq=1;localStore_obj=new $.fbuilder_localstorage(form,true);$(document).on('change','#'+id+' *',function(evt){if(typeof this['id']!='undefined'&&/^fieldname\d+_\d+$/i.test(this.id)&&typeof this['value']!='undefined')
{localStore_obj.set_fields();}});form.on('submit',function(){localStore_obj.clear_fields();});fields=localStore_obj.get_fields();if(!$.isEmptyObject(fields))
{if(typeof cpcff_default=='undefined')cpcff_default={};if(typeof cpcff_default[sq]=='undefined')cpcff_default[sq]={};cpcff_default[sq]=$.extend(cpcff_default[sq],fields);}
return this;}
$.fbuilder_localstorage=function(form,debug){this.form=form;this.id=form.attr('id')+'_'+form.find('[name="cp_calculatedfieldsf_id"]').val();this.debug=(typeof debug!='undefined'&&debug)?true:false;};$.fbuilder_localstorage.prototype=(function(){var is_available;function _log(mssg)
{if(typeof console!='undefined')console.log(mssg);};return{is_available:function(){if(typeof is_available!='undefined')return is_available;try{var storage=window['localStorage'],x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);is_available=true;return true;}
catch(e){if(this.debug)_log('localStorage object is not available');is_available=false;return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&storage.length!==0;}},get_fields:function(){try{if(typeof this.fields=='undefined')this.fields=JSON.parse(localStorage.getItem(this.id));return this.fields;}catch(err){_log('Error reading the fields.');_log(err);}},set_fields:function(){try{this.fields=this.form.fbuilder_serializeObject();localStorage.setItem(this.id,JSON.stringify(this.fields));}catch(err){_log('Error saving the fields.');_log(err);}},clear_fields:function(){try{localStorage.removeItem(this.id);}catch(err){_log('Error deleting the fields.');_log(err);}}};})();var fcount=1;var fnum="_"+fcount;while(typeof window["cp_calculatedfieldsf_fbuilder_config"+fnum]!='undefined'||fcount<10)
{try{var cp_calculatedfieldsf_fbuilder_config=window["cp_calculatedfieldsf_fbuilder_config"+fnum];if(cp_calculatedfieldsf_fbuilder_config&&$("#fbuilder"+fnum).length&&$("#fbuilder"+fnum).attr('data-processed')==undefined)
{var f=$("#fbuilder"+fnum).fbuilder((typeof cp_calculatedfieldsf_fbuilder_config.obj=='string')?$.parseJSON(cp_calculatedfieldsf_fbuilder_config.obj):cp_calculatedfieldsf_fbuilder_config.obj);f.fBuild.loadData("form_structure"+fnum);$("#fbuilder"+fnum).attr('data-processed',1);}}catch(e){if(typeof console!='undefined')console.log(e);}
fcount++;fnum="_"+fcount;}})(fbuilderjQuery);};fbuilderjQuery(fbuilderjQuery.fbuilderjQueryGenerator);fbuilderjQuery(window).on('load',fbuilderjQuery.fbuilderjQueryGenerator);