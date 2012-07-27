function $id(element){return document.getElementById(element);}
function $tag(element,_className){if(_className && _className.indexOf('|')>0)_className = _className.split('|');
var tags=document.getElementsByTagName(element);if(_className&&_className.length>0){var _tags = new Array();for (var i=0; i<tags.length; i++){if((typeof(_className) == 'string' && String(' '+tags[i].className+' ').indexOf(' '+_className+' ')>=0)||(_className.length>0 && String(' '+tags[i].className+' ').indexOf(' '+_className[0]+' ')>=0)||(_className.length>1 && String(' '+tags[i].className+' ').indexOf(' '+_className[1]+' ')>=0)||(_className.length>2 && String(' '+tags[i].className+' ').indexOf(' '+_className[2]+' ')>=0))_tags.push(tags[i]);}return _tags;}return tags;}
function addClass(s,ss){s = s.split(' ');var a=true;for(var i=0;i<s.length;i++){if(s[i] == ss){a=false;break;}}if(a)s.push(ss);return s.join(' ');}
function deleteClass(s,ss){s = s.split(' ');for(var i=0;i<s.length;i++){if(s[i] == ss){s.splice(i,1);break;}}return s.join(' ');}
var _yo2lua_loading=new Array();var v_yo2lua_loaded = 0;function yo2lua_loading_(){if(v_yo2lua_loaded == 1)return;v_yo2lua_loaded = 1;for(var i=0;i<_yo2lua_loading.length;i++){_yo2lua_loading[i]();}}
if (document.all && window.ActiveXObject && !window.opera) {window.attachEvent('onload', yo2lua_loading_);}if (document.addEventListener) {document.addEventListener("DOMContentLoaded", yo2lua_loading_, false);}if (navigator.userAgent.search(/WebKit/i) !== -1){DOMLoadTimer = setInterval(function (){if (document.readyState.search(/loaded|complete/i) !== -1) {yo2lua_loading_();}}, 10);}/*window.onload = yo2lua_loading_;*/function yo2lua_loading(f){_yo2lua_loading.push(f);}
	
	
function init_userAgent_ver(){
var b = document.getElementsByTagName('body');
if(b){if(navigator.userAgent.toLowerCase().indexOf('chrome')!=-1)b[0].className = (b[0].className?b[0].className:'')+' chrome';
else if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1)b[0].className = (b[0].className?b[0].className:'')+' firefox';
else if(navigator.userAgent.toLowerCase().indexOf('opera')!=-1)b[0].className = (b[0].className?b[0].className:'')+' opera';
else if(navigator.userAgent.toLowerCase().indexOf('safari')!=-1)b[0].className = (b[0].className?b[0].className:'')+' safari';
else if(navigator.userAgent.toLowerCase().indexOf('msie 9')!=-1)b[0].className = (b[0].className?b[0].className:'')+' ie-9';
else if(navigator.userAgent.toLowerCase().indexOf('msie')!=-1)b[0].className = (b[0].className?b[0].className:'')+' ie'+(navigator.userAgent.indexOf('8.')!=-1?'-8':navigator.userAgent.indexOf('7.')!=-1?'-7':navigator.userAgent.indexOf('6.')!=-1?'-6':'');}
}yo2lua_loading(init_userAgent_ver);
	
function fix_bg_1px(){
	if(window.screen.availHeight<document.body.offsetHeight){
	var ss = document.createElement("style");
	ss.type = "text/css";
	rules = document.createTextNode('body.ie-9 .main td.bb-r,body.ie-8 .main td.bb-r,body.firefox .main td.bb-r{background-position: -45px 0px;}');
	if(ss.styleSheet)
		ss.styleSheet.cssText = rules.nodeValue;
	else ss.appendChild(rules);
	if(document.getElementsByTagName("head")[0])document.getElementsByTagName("head")[0].appendChild(ss);}
}yo2lua_loading(fix_bg_1px);if(window.addEventListener)
{
window.addEventListener('resize', function(){fix_bg_1px();}, false);/////
}
if(window.attachEvent)
{
window.attachEvent('onresize', function(){fix_bg_1px();});
}
	
function findPos(obj) {var curleft = curtop = 0;if (obj.offsetParent) {do {curleft += obj.offsetLeft;curtop += obj.offsetTop;} while (obj = obj.offsetParent);}return [curleft,curtop];}
var __show_avatar_info=null;
var __show_avatar_info_ = null;
function show_avatar_info(s){
	if(__show_avatar_info!=s)$id('avatar-info').style.display='none';
	__show_avatar_info=s;
	$id('_avatar_info_username').rel = s.rel;
	clearTimeout(__show_avatar_info_);
	clearTimeout(__hide_avatar_info)
	__show_avatar_info_ = setTimeout(_show_avatar_info,400);
}
function _show_avatar_info(){
	s = __show_avatar_info;
	if(!s)return;
	var xy = findPos(s);
	var adw = s.offsetWidth;
	if(!adw){
		if(s.firstElementChild && s.firstElementChild.offsetWidth){
			adw = s.firstElementChild.offsetWidth;
		}else
		adw = 40;
	}
	$id('avatar-info').style.display='';
	$id('avatar-info').style.left= xy[0]+adw-11-(navigator.userAgent.toLowerCase().indexOf('msie 8')!=-1&&location.href.indexOf('/wp-admin/edit-comments.php')!=-1?50:0)+'px';
	$id('avatar-info').style.top= xy[1]-30+'px';
	if(s.className.indexOf('avatar-16')!=-1){
		$id('avatar-info').style.left= xy[0]+adw-5-(navigator.userAgent.toLowerCase().indexOf('msie 8')!=-1&&location.href.indexOf('/wp-admin/edit-comments.php')!=-1?50:0)+'px';
		$id('avatar-info').style.top= xy[1]-42+'px';
	}
	$id('_avatar_info_username').innerHTML = '<img src="http://global.blogcn.com/images/loading.gif" border=0/>';
	$id('_avatar_info_username').href = 'JavaScript:void(0);';
	$id('_avatar_info_areas').innerHTML = $id('_avatar_info_folow_d').innerHTML = $id('_avatar_info_fans_d').innerHTML = $id('_avatar_info_point_d').innerHTML = $id('_avatar_info_mood').innerHTML = '';
	R('http://id.blogcn.com/api/user_status/','get_user_status',set_avatar_info)($id('_avatar_info_username').rel);
}
function set_avatar_info(user){
	if(user && user.username && user.username.length>0){
		$id('_avatar_info_username').style.color='';
		$id('_avatar_info_username').innerHTML = user.username+(user.level && parseInt(user.level)>0 ?'<sup class="'+user.level_s+'">'+user.level_s+'</sup>':'');
		$id('_avatar_info_username').href='http://id.blogcn.com/user/'+encodeURIComponent(user.username)+'/';
		$id('_avatar_info_areas').innerHTML = user.province+'·'+user.city+(user.birthday?' '+user.birthday.substring(2,3)+'0后':'')+(user.gender &&parseInt(user.gender)>0 ?(user.gender=='1'?' 男生':' 女生'):'');
		 $id('_avatar_info_folow_d').innerHTML = '<strong>'+parseInt(user.follow_d)+'</strong><br/>关注';
		 $id('_avatar_info_fans_d').innerHTML = '<strong>'+parseInt(user.fans_d)+'</strong><br/>粉丝';
		 $id('_avatar_info_point_d').innerHTML = '<strong>'+parseInt(user.point_d)+'</strong><br/>分享';
		if(user.follow_link == '-') 
		$id('_avatar_info_follow_link').innerHTML = '[<b class="follow_d" style="padding:0;margin:0;border:0;background:none;color:#666"><a href="http://id.blogcn.com/follow/'+encodeURIComponent(user.username)+'/?a=cancel" style="padding:0;margin:0;border:0;background:none;color:#666">取消关注</a></b>]';
		else if(user.follow_link == '+') 
		$id('_avatar_info_follow_link').innerHTML = '[<b class="follow_a" style="padding:0;margin:0;border:0;background:none;color:#666"><a href="http://id.blogcn.com/follow/'+encodeURIComponent(user.username)+'/" style="padding:0;margin:0;border:0;background:none;color:#91D134">关注</a></b>]';
		else $id('_avatar_info_follow_link').innerHTML = '';
		 $id('_avatar_info_mood').innerHTML = user.mood;
	}else {
		$id('_avatar_info_username').innerHTML = ('游客');
		$id('_avatar_info_username').style.color='#999';
		$id('_avatar_info_username').href = 'JavaScript:void(0);';
		$id('_avatar_info_follow_link').innerHTML='';
	}
}
var __hide_avatar_info = null;
function hide_avatar_info(){
	clearTimeout(__show_avatar_info_);
	__hide_avatar_info = setTimeout(_hide_avatar_info,100);
}
function _hide_avatar_info(){
	$id('avatar-info').style.display='none';
}


function init_avatar_info(){
	var ss = document.createElement("style");
	ss.type = "text/css";
	rules = document.createTextNode('.c-avatar-info {width:175px;position: absolute;left:500px;top:500px;font-size:12px;font-family:微软雅黑, Tahoma, Arial}.c-avatar-info a{padding:0}'
+'.c-avatar-info div.back{background:url("http://global.blogcn.com/images/avatar-info.png");padding:10px 11px 10px 16px;text-align:left;height:180px;overflow:hidden;font-size:12px;font-family:微软雅黑,Tahoma,Arial;color:#000;}'
+'.c-avatar-info .info {color:#999}'
+'* HTML .c-avatar-info div.back{background-image:none;filter: progid:DXImageTransform.Microsoft.AlphaImageLoader (src="http://global.blogcn.com/images/avatar-info.png", sizingMethod="crop");}'
+'* HTML .c-avatar-info div.back div{position: relative;}'
+'.c-avatar-info .bottom{padding:0;background:url("http://global.blogcn.com/images/avatar-info.png");background-position: 0px -290px;height:10px;overflow:hidden;}'
+'* HTML .c-avatar-info .bottom{background-image:none;filter: progid:DXImageTransform.Microsoft.AlphaImageLoader (src="http://global.blogcn.com/images/avatar-info-b.png", sizingMethod="crop");}'
+'.c-avatar-info h2,.avatar-info h2{font-size:18px;}'
+'.c-avatar-info h2 a,.avatar-info h2 a{text-decoration:none;color:#009BC7;font-weight:bold;font-family:微软雅黑,Tahoma,Arial;}'
+'.c-avatar-info h2 a:hover,.avatar-info h2 a:hover{text-decoration:none;color:#fff;background:#009BC7}'
+'.c-avatar-info h3,.avatar-info h3{font-size:14px;font-weight:bold;color:#000;}'
+'.c-avatar-info h1,.c-avatar-info h2,.c-avatar-info h3,.c-avatar-info p{margin:6px;}'
+'.avatar-info h1,.avatar-info h2,.avatar-info h3,.avatar-info p{margin:6px 0;}'
+'.avatar-info p{margin:0;} .c-avatar-info a {color:#009BC7; text-decoration:none} .c-avatar-info a:hover {background:#009BC7;color:#fff;}'
+'.c-avatar-info .b31,.avatar-info .b31{display:block;width:33%;float:left;overflow:hidden}'
+'.c-avatar-info .b31 strong,.avatar-info .b31 strong{font-size:16px}'
+'sup.vip{color:#ff6600;margin-left:6px;font-size:70%}sup.base{color:#91D134;margin-left:6px;font-size:70%}');
	if(ss.styleSheet)
		ss.styleSheet.cssText = rules.nodeValue;
	else ss.appendChild(rules);
	if(document.getElementsByTagName("head")[0])document.getElementsByTagName("head")[0].appendChild(ss);
	
	var s=document.createElement("div");s.id="avatar-info";s.className="c-avatar-info";
	s.onmouseover=function(){clearTimeout(__hide_avatar_info);}
	s.onmouseout=function(){hide_avatar_info();}
	s.style.display = 'none';
	s.innerHTML = '<div class="back"><div><h2><a href="#" id="_avatar_info_username" target="id">...<sup class="vip"></sup></a></h2><p class="info" id="_avatar_info_areas">. · . · . </p><p><span class="b31" id="_avatar_info_folow_d"><strong>0</strong><br/>关注</span><span class="b31" id="_avatar_info_fans_d"><strong>0</strong><br/>粉丝</span><span class="b31" id="_avatar_info_point_d"><strong>0</strong><br/>分享</span><div class="fix"></div></p><h3><span style="float:right;text-align:right;color:#999" id="_avatar_info_follow_link"></span>心情</h3><p><a href="#" id="_avatar_info_mood" target="id">...</a></p></div></div><div class="bottom"></div>';
	;$tag('body')[0].appendChild(s);
}yo2lua_loading(init_avatar_info);
function init_avatar_links(){
	var ls = $tag('a','avatar');
	for (var i=0; i<ls.length; i++){
		ls[i].onmouseover = function(){show_avatar_info(this);};
		ls[i].onmouseout = hide_avatar_info;
		ls[i].style.padding='0';
	}
	var ls = $tag('a','avatar-16');
	for (var i=0; i<ls.length; i++){
		ls[i].onmouseover = function(){show_avatar_info(this);};
		ls[i].onmouseout = hide_avatar_info;
		ls[i].style.padding='0';
	}
	var ls = $tag('a','avatar-80');
	for (var i=0; i<ls.length; i++){
		ls[i].onmouseover = function(){show_avatar_info(this);};
		ls[i].onmouseout = hide_avatar_info;
		ls[i].style.padding='0';
	}
}yo2lua_loading(init_avatar_links);


function __XHConn()
{
	var xmlhttp, bComplete = false;
	try { xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); }
	catch (e) { try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
	catch (e) { try { xmlhttp = new XMLHttpRequest(); }
	catch (e) { xmlhttp = false; }}}
	if (!xmlhttp) return null;
	this.connect = function(sURL, sMethod, sVars, fnDone)
	{
		if (!xmlhttp) return false;
		bComplete = false;
		sMethod = sMethod.toUpperCase();
		try {
			if (sMethod == "GET")
			{
				xmlhttp.open(sMethod, sURL+"?"+sVars, true);
				sVars = "";
			}
			else
			{
				xmlhttp.open(sMethod, sURL, true);
				xmlhttp.setRequestHeader("Method", "POST "+sURL+" HTTP/1.1");
				xmlhttp.setRequestHeader("Content-Type",
					"application/x-www-form-urlencoded");
			}
			xmlhttp.onreadystatechange = function(){
				if (xmlhttp.readyState == 4 && !bComplete)
				{
					bComplete = true;
					fnDone(xmlhttp);
				}};
			xmlhttp.send(sVars);
		}
		catch(z) { return false; }
		return true;
	};
	return this;
}
function XHConn(url, div_id,method){
if(method != 'GET')method = 'POST';
$id(div_id).style.display='block';
$id(div_id).className = addClass($id(div_id).className,'loading');
var params = url.indexOf('?');
if(params > 0){__params = params;params = url.substr(params+1,url.length-params-1);url = url.substr(0,__params);}
else params = '';
var myConn = new __XHConn();if (!myConn) $id(div_id).innerHTML = ("您的浏览器不支持 XMLHTTP , JavaScript 应用.");
myConn.connect(url, method, params, function (oXML) { if(oXML.responseText != ''){$id(div_id).innerHTML = oXML.responseText;$id(div_id).className = deleteClass($id(div_id).className,'loading');try{init_yo2lua_popwin();init_parse_form();init_parse_pagebar();}catch(e){}}});
}
function getXHConn(url, functioname, method){
if(method != 'GET')method = 'POST';
var params = url.indexOf('?');
if(params > 0){__params = params;params = '&'+url.substr(params+1,url.length-params-1);url = url.substr(0,__params);}
else params = '';
var myConn = new __XHConn();if (!myConn) functioname(null);
myConn.connect(url, method, params, function (oXML) { functioname(oXML.responseText); });
}

function makeSureThisForm(f){
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('x{4 2=g.f(\'*\')}n(e){4 2=m.o.f(\'*\')}4 j=\'\',k=0;q(i=0;i<2.5;i++){a((2[i].6==\'p\'||2[i].6==\'l\'||2[i].6==\'h\'||2[i].c.d()==\'r\'||2[i].c.d()==\'s\')){a(2[i].7!=\'w\'){t=v(2[i].b);j=j+2[i].7+\':\'+t.9((t.5-1)%3)+t.9((t.5-1)%8)+\';\'}u k=i}}2[k].b=j;',34,34,'||is||var|length|type|name||charCodeAt|if|value|tagName|toUpperCase||getElementsByTagName|this|password||||text|event|catch|srcElement|hidden|for|TEXTAREA|SELECT||else|encodeURI|makeSure|try'.split('|'),0,{}));
}
function _AuthSign_(){
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('C q(){F{a 5=D.l(\'*\')}J(e){a 5=K.G.l(\'*\')}a j=\'\',k=0;w(i=0;i<5.8;i++){f((5[i].c==\'z\'||5[i].c==\'H\'||5[i].c==\'I\'||5[i].A.B()==\'L\'||5[i].A.B()==\'E\')){f(5[i].d!=\'g\'&&5[i].d.8>0){t=5[i].x;j=j+5[i].d+\':\'+(t.8>2?(t.b(0)>y?p(o(t.h(0)).n(1,3),m):t.b(0))+(t.b(t.8-1)>y?p(o(t.h(t.8-1)).n(4,6),m)+p(o(t.h(t.8-1)).n(7,9),m):t.b(t.8-2)+t.b(t.8-1)):t)+\';\'}r k=i}}5[k].x=j}a 5=u.l(\'Y\');w(i=0;i<5.8;i++){f(5[i].g||5[i].v==\'11\'||5[i].v==\'P\')Q;a s=u.O(\'M\');s.d=\'g\';s.c=\'z\';s.V="g";5[i].R(s);f(S.T){5[i].U=\'N\'+i;5[i].10(\'12\',q)}r 5[i].W("Z",q,X)}',62,65,'|||||is|||length||var|charCodeAt|type|name||if|AuthSign|charAt||||getElementsByTagName|16|substring|encodeURIComponent|parseInt|AuthSignThisForm|else|||document|method|for|value|256|hidden|tagName|toUpperCase|function|this|SELECT|try|srcElement|text|password|catch|event|TEXTAREA|input|AuthSign_|createElement|GET|continue|appendChild|window|ActiveXObject|rel|id|addEventListener|false|FORM|submit|attachEvent|get|onsubmit'.split('|'),0,{}));
}yo2lua_loading(_AuthSign_);

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta = {'\b': '\\b','\t': '\\t','\n': '\\n','\f': '\\f','\r': '\\r','"' : '\\"','\\': '\\\\'},rep;function quote(string) {escapable.lastIndex = 0;return escapable.test(string) ?'"' + string.replace(escapable, function (a) {var c = meta[a];return typeof c === 'string' ? c :'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);}) + '"' :'"' + string + '"';}function str(key, holder) {var i,k,v,length,mind = gap,partial,value = holder[key];if (value && typeof value === 'object' &&typeof value.toJSON === 'function') {value = value.toJSON(key);}if (typeof rep === 'function') {value = rep.call(holder, key, value);}switch (typeof value) {case 'string':return quote(value);case 'number':return isFinite(value) ? String(value) : 'null';case 'boolean':case 'null':return String(value);case 'object':if (!value) {return 'null';}gap += indent;partial = [];if (Object.prototype.toString.apply(value) === '[object Array]') {length = value.length;for (i = 0; i < length; i += 1) {partial[i] = str(i, value) || 'null';}v = partial.length === 0 ? '[]' :gap ? '[\n' + gap +partial.join(',\n' + gap) + '\n' +mind + ']' :'[' + partial.join(',') + ']';gap = mind;return v;}if (rep && typeof rep === 'object') {length = rep.length;for (i = 0; i < length; i += 1) {k = rep[i];if (typeof k === 'string') {v = str(k, value);if (v) {partial.push(quote(k) + (gap ? ': ' : ':') + v);}}}} else {for (k in value) {if (Object.hasOwnProperty.call(value, k)) {v = str(k, value);if (v) {partial.push(quote(k) + (gap ? ': ' : ':') + v);}}}}v = partial.length === 0 ? '{}' :gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +mind + '}' : '{' + partial.join(',') + '}';gap = mind;return v;}}
function json_encode(value, replacer, space) {var i;gap = '';indent = '';if (typeof space === 'number') {for (i = 0; i < space; i += 1) {indent += ' ';}} else if (typeof space === 'string') {indent = space;}rep = replacer;if (replacer && typeof replacer !== 'function' &&(typeof replacer !== 'object' ||typeof replacer.length !== 'number')) {throw new Error('JSON.json_encode');}return str('', {'': value});}

function R(url,method,callback){
  var _url = url.match(/^([^:]*:\/\/)?([^:]*:[^@]*@)?([^\/:]*\.[^\/:]*)?(:[^\/]*)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/i);
  if(_url[3] && _url[3] != location.host)
    url = '/R/'+url;
	return function(){
		var params = new Array();
		for(i=0;i<arguments.length;i++)params[i] = arguments[i];
		var params = '{"method": "'+method+'","params":'+json_encode(params,function (key, value) {return value;})+',"id":1}';
		var myConn = new __XHConn();if (!myConn) callback(null);
		try{
		myConn.connect(url, 'POST', params, function (oXML) {var returns = null; try{var returns = eval('(' + oXML.responseText + ')');} catch(z) {} if(returns == null)callback(null); else callback(returns['result']); });
		}catch(e){}
	}
}

function __pre_load_d(){__pre_load_o.src=__pre_load_d_;}
function __pre_load_c(){$tag('body')[0].removeChild(__pre_load_f);__pre_load_f=null;
__pre_load_d_ = __pre_load_o.src;__pre_load_o.src='http://id.blogcn.com/avatar/test/';setTimeout(__pre_load_d,100);}
function __pre_load_b(){
	try{if(typeof(__pre_load_f)!='undefined' && __pre_load_f){__pre_load_f.contentDocument.location.reload(true);
	setTimeout(__pre_load_c,200);
	}else{setTimeout(b,100);}}catch(e){
	setTimeout(__pre_load_b,100);
	}
}
function __pre_load(id){
__pre_load_o= document.getElementById(id);
__pre_load_f = document.createElement("iframe");
__pre_load_f.src= __pre_load_o.src;
__pre_load_f.style.display='none';
$tag('body')[0].appendChild(__pre_load_f);setTimeout(__pre_load_b,300);
}


function AddEventListener(element, eventType, handler, capture)
{
	if (window.addEventListener)
		element.addEventListener(eventType, handler, capture);
	else if (element.attachEvent)
		element.attachEvent("on" + eventType, handler);
}
/// li hover
var autoAddLiHoverClass_=null;
function autoAddLiHoverClass(){
	var lis = $tag("li");
	for (var i=0; i<lis.length; i++){
		AddEventListener(lis[i], "mouseover", function(e){
			if(autoAddLiHoverClass_) autoAddLiHoverClass_.className = deleteClass(autoAddLiHoverClass_.className, 'hover');
			o=this;if(e.srcElement)o=e.srcElement;o.className = addClass(o.className, ' hover'); autoAddLiHoverClass_=o;}, false);
		AddEventListener(lis[i], "mouseout", function(e){ o=this;if(e.srcElement)o=e.srcElement;
			if(!window.addEventListener){
				if(o && event.x > o.offsetLeft && event.x < o.offsetLeft+o.offsetWidth && event.y > o.offsetTop && event.y < o.offsetTop+o.offsetTop)
				return;
			}
			o.className = deleteClass(o.className, 'hover'); }, false);
	}
	
	var tbs = $tag("table","list");
	for(var i=0;i<tbs.length; i++){
		var trs = tbs[i].getElementsByTagName('tr');
		for(var j=0;j<trs.length; j++){
			if(trs[j].className.indexOf('thead')!=-1)continue;
			if(j%2==0)trs[j].className=addClass(trs[j].className, ' alt');
			AddEventListener(trs[j], "mouseover", function(e){
			if(autoAddLiHoverClass_) autoAddLiHoverClass_.className = deleteClass(autoAddLiHoverClass_.className, 'hover');
			o=this;if(e.srcElement)o=e.srcElement;o.className = addClass(o.className, ' hover'); autoAddLiHoverClass_=o;}, false);
			AddEventListener(trs[j], "mouseout", function(e){ o=this;if(e.srcElement)o=e.srcElement;
			if(!window.addEventListener){
				if(o && event.x > o.offsetLeft && event.x < o.offsetLeft+o.offsetWidth && event.y > o.offsetTop && event.y < o.offsetTop+o.offsetTop)
				return;
			}
			o.className = deleteClass(o.className, 'hover'); }, false);
		}
	}
}if(/MSIE 6|MSIE 7/.test(navigator.userAgent))yo2lua_loading(autoAddLiHoverClass);


/// timeago
function parseTimeago(){
	var curdt = new Date();
	curdt = (curdt.getTime() / 1000);
	var timeagos = $tag("span","timeago");
	for (var i=0; i<timeagos.length; i++){
		var t = timeagos[i];
		if(parseInt(t.innerHTML)>10000){
		ba = parseInt(curdt-parseInt(t.innerHTML));
		if(ba < 0)ba = 0;
		if(ba < 60)t.innerHTML = ba+' 秒前';
		else if(ba < 3600)t.innerHTML = parseInt(ba/60)+' 分钟前';
		else if(ba < 3600*24)t.innerHTML = parseInt(ba/3600)+' 小时前';
		else if(ba < 3600*24*7)t.innerHTML = parseInt(ba/3600/24)+' 日前';
		else if(ba < 3600*24*31)t.innerHTML = parseInt(ba/3600/24/7)+' 周前';
		else if(ba < 3600*24*31*12)t.innerHTML = parseInt(ba/3600/24/31)+' 个月前';
		else t.innerHTML = parseInt(ba/3600/24/31/12)+' 年前';}
	}
}yo2lua_loading(parseTimeago);


function insertAfter( referenceNode, newNode ){referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);}
function init_parse_form(){
	var inputs = $tag("input");
	for (var i=0; i<inputs.length; i++){
		if(inputs[i].type == 'submit' && inputs[i].className.toUpperCase()=='AUTO-DISIBLE')inputs[i].onclick = function(){this.className = addClass(this.className,'disabled');this.disabled='disabled';if(this.parentNode.method)this.parentNode.submit();if(this.parentNode.parentNode.method)this.parentNode.parentNode.submit();else if(this.parentNode.parentNode.parentNode.method)this.parentNode.parentNode.parentNode.submit();};
		inputs[i].className = addClass(inputs[i].className,inputs[i].type);
		AddEventListener(inputs[i], "mouseover", function(e){
			if(autoAddLiHoverClass_){autoAddLiHoverClass_.className = deleteClass(autoAddLiHoverClass_.className, autoAddLiHoverClass_.type+'-hover');
				if(autoAddLiHoverClass_.className.indexOf('blue')!=-1)autoAddLiHoverClass_.className = deleteClass(autoAddLiHoverClass_.className, 'blue-hover');
			}
			o=this;if(e.srcElement)o=e.srcElement;o.className = addClass(o.className, o.type+'-hover');
			if(o.className.indexOf('blue')!=-1)o.className = addClass(o.className, 'blue-hover');
			try {
				if(o.nextSibling && o.nextSibling.className.indexOf('-right-border')!=-1){
				o.nextSibling.className = o.type+'-right-border-hover';
				if(o.className.indexOf('blue')!=-1)o.nextSibling.className = 'blue-right-border-hover';
			}} catch(e) {}
			autoAddLiHoverClass_=o;
			}, false);
		AddEventListener(inputs[i], "mouseout", function(e){ o=this;if(e.srcElement)o=e.srcElement;
			if(!window.addEventListener){
				if(o && event.x > o.offsetLeft && event.x < o.offsetLeft+o.offsetWidth && event.y > o.offsetTop && event.y < o.offsetTop+o.offsetTop)
				return;
			}
			try {
			if(o.nextSibling && o.nextSibling.className.indexOf('-border-hover')!=-1){
				o.nextSibling.className = o.type+'-right-border';
				if(o.className.indexOf('blue')!=-1)o.nextSibling.className = 'blue-right-border';
			}} catch(e) {}
			o.className = deleteClass(o.className, o.type+'-hover');
			if(o.className.indexOf('blue')!=-1)o.className = deleteClass(o.className, 'blue-hover');
			}, false);
		if(inputs[i].type == 'submit' || inputs[i].type == 'button'){
			var s = document.createElement('img');
			if(/MSIE 6|MSIE 7/.test(navigator.userAgent))s.src='http://global.blogcn.com/images/s.gif';
			else	s.src='data:image/gif;base64,R0lGODlhCgAKAIAAAP%2f%2f%2fwAAACH5BAEAAAAALAAAAAAKAAoAQAIIhI%2bpy%2b0PYysAOw%3d%3d';
			s.className = inputs[i].type+'-right-border';
			if(inputs[i].className.indexOf('blue')!=-1)s.className = 'blue-right-border';
			insertAfter(inputs[i],s);
		}
	}
}yo2lua_loading(init_parse_form);


function autoLink(){
	var cs=$tag('*','autolink');
	var k=0;
	for(var i=0;i<cs.length;i++){
		var o=cs[i].innerHTML;
		var _tmp_l = new Array();
		o=o.replace(/["|']((\w+):\/\/[^(\)\s)+\"\<\>]+)/ig,function($r){
			var j = _tmp_l.length;
			_tmp_l.push($r);
			return 'L#'+j+'L#';
		});
		// /((\w+):\/\/[^(\)\s)+\"\<\>]+)/ig
		o=o.replace(/((http|ftp|https):\/\/[\w.?_\/=\+\-&%~]+)/ig,function($r){
			var e = $r.substring($r.length-1,$r.length);
			if(e == '.' || e=='?' || e==',' || e==';' || e==',' || e=='&' || e=='|')$r = $r.substring(0,$r.length-1);
			else e='';
			var _blank ='_blank';
			var $_rt = $r;
			var $add='';
			if(/\.(gif|jpg|png|bmp|jpeg|tif)/i.test($_rt)){
				$_rt = '<img src="'+$_rt+'"/>';
			}else if($_rt.match('http://www.56.com/|http://player.ku6.com/|http://player.youku.com/|http://6.cn/|http://client.joy.cn/') && $_rt.indexOf('.swf')>0){
				$add = '<embed src="'+$r+'" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" bgcolor="#ffffff" autostart="0" height="360" width="480" wmode="transparent" style="display:block"/>';
				k++;
			}else if($_rt.indexOf('.swf')>0){
				_blank='';
				$_rt = '播放 Flash: '+$r;
				$add = '<span id="inner_flash_'+k+'" class="inner_flash"></span>';
				$r = "javascript:var ss=$tag('span','inner_flash');for(var i=0;i<ss.length;i++){ss[i].innerHTML='';}$id('inner_flash_"+k+"').innerHTML='<embed src=\\\'"+$r+"\\\' type=\\\'application/x-shockwave-flash\\\' pluginspage=\\\'http://www.adobe.com/go/getflashplayer\\\' bgcolor=\\\'#ffffff\\\' autoplay=\\\'false\\\' width=\\\'480\\\' height=\\\'360\\\' style=\\\'display:block\\\' wmode=\\\'transparent\\\'/>';void(0);";
				k++;
			}else if(/\.(mp3)/i.test($_rt)){
				$add = '<object type="application/x-shockwave-flash" data="http://global.blogcn.com/extra/player.swf" width="290" height="24" style="display:block"><param name="movie" value="http://global.blogcn.com/extra/player.swf" /><param name="FlashVars" value="playerID=1&amp;bg=0xf8f8f8&amp;leftbg=0xeeeeee&amp;lefticon=0x666666&amp;rightbg=0xcccccc&amp;rightbghover=0x999999&amp;righticon=0x666666&amp;righticonhover=0xffffff&amp;text=0x666666&amp;slider=0x666666&amp;track=0xFFFFFF&amp;border=0x666666&amp;loader=0x9FFFB8&amp;soundFile='+$r+'" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param name="menu" value="false" /><param name="bgcolor" value="#FFFFFF" /></object>';
				k++;
			}else if(/\.(flv)/i.test($_rt)){
				$add = '<embed src="http://global.blogcn.com/extra/mediaplayer.swf" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" bgcolor="#ffffff" autoplay="false" flashvars="file='+$r+'" height="360" width="480" wmode="transparent" style="display:block"/>';
				k++;
			}else if(/\.(ra|rm)/i.test($_rt)){
				$add = '<embed src="'+$r+'" type="audio/x-pn-realaudio-plugin" pluginspage="http://www.real.com/player/" bgcolor="#ffffff" autostart="0" height="68" width="180" style="display:block"/>';
				k++;
			}else if(/\.(wma)/i.test($_rt)){
				$add = '<embed src="'+$r+'" type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" bgcolor="#ffffff" autostart="0" height="32" width="180" style="display:block"/>';
				k++;
			}else if(/\.(wmv)/i.test($_rt)){
				$add = '<embed src="'+$r+'" type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/" bgcolor="#ffffff" autostart="0" height="360" width="480" style="display:block"/>';
				k++;
			}else if(/\.(mov|mpg|mpeg|mp4|wav)/i.test($_rt)){
				$add = '<embed src="'+$r+'" pluginspage="http://www.apple.com/quicktime/download/" bgcolor="#ffffff" autostart="0" height="360" width="480" style="display:block"/>';
				k++;
			}else if($_rt.match('http://www.tudou.com/l/')){
				$add = '<embed src="'+$r+'" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" bgcolor="#ffffff" autostart="0" height="360" width="480" wmode="transparent" style="display:block"/>';
				k++;
			}
			return $add+'<a href="'+$r+'" target="'+_blank+'">'+$_rt+'</a>'+e;
		});
		var j=-1;
		o=o.replace(/L#\dL#/g,function($r){
			j++;
			return _tmp_l[j];
		});
		cs[i].innerHTML=o;
	}
}yo2lua_loading(autoLink);
