/*!
 * jQuery postMessage - v0.5 - 9/11/2009
 * http://benalman.com/projects/jquery-postmessage-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 *
 * Version from
 * https://github.com/jkeys089/jquery-postmessage
 */
(function($,f){var b,d,j=1,a,g=!1,h="postMessage",c="addEventListener",e,i=f[h];
$[h]=function(k,m,l){if(!m){return;}k=typeof k==="string"?k:$.param(k);l=l||parent;if(i){f.setTimeout(function(){l[h](k,m.replace(/([^:]+:\/\/[^\/]+).*/,"$1"));
},0);}else{if(m){l.location=m.replace(/#.*$/,"")+"#"+(+new Date())+(j++)+"&"+k;}}};$.receiveMessage=e=function(m,l,k){if(i){if(m){a&&e();a=function(n){if(n.domain){l=l.split("://")[1];
n.origin=n.domain;}if((typeof l==="string"&&n.origin!==l)||($.isFunction(l)&&l(n.origin)===g)){return g;}m(n);};}if(f[c]){f[m?c:"removeEventListener"]("message",a,g);
}else{f[m?"attachEvent":"detachEvent"]("onmessage",a);}}else{b&&clearInterval(b);b=null;if(m){k=typeof l==="number"?l:typeof k==="number"?k:100;b=setInterval(function(){var o=document.location.hash,n=/^#?\d+&/;
if(o!==d&&n.test(o)){d=o;m({data:o.replace(n,"")});}},k);}}};})(jQuery,window);

$.receiveMessage(function(e)
{
	var datas = e.data.split('&');
	var idTag = datas[0].split('=')[1];
	var heightTmp = datas[1].split('=')[1];
	var height = parseInt(heightTmp.split('p')[0]);
	var heightString = height + 10 + 'px';

	$('#' + idTag).css('height', (height >= 0) ? heightString : '70%');
	
	if(typeof isLoadingRecentSubmissions !== 'undefined' && isLoadingRecentSubmissions && heightString != '0px')
	{
		$('#header-' + idTag).css('display', 'none');
	}
});
