(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e}else{e(jQuery)}})(function(e){function a(t){var n=t||window.event,o=r.call(arguments,1),u=0,a=0,c=0,h=0;t=e.event.fix(n);t.type="mousewheel";if("detail"in n){c=n.detail*-1}if("wheelDelta"in n){c=n.wheelDelta}if("wheelDeltaY"in n){c=n.wheelDeltaY}if("wheelDeltaX"in n){a=n.wheelDeltaX*-1}if("axis"in n&&n.axis===n.HORIZONTAL_AXIS){a=c*-1;c=0}u=c===0?a:c;if("deltaY"in n){c=n.deltaY*-1;u=c}if("deltaX"in n){a=n.deltaX;if(c===0){u=a*-1}}if(c===0&&a===0){return}if(n.deltaMode===1){var p=e.data(this,"mousewheel-line-height");u*=p;c*=p;a*=p}else if(n.deltaMode===2){var d=e.data(this,"mousewheel-page-height");u*=d;c*=d;a*=d}h=Math.max(Math.abs(c),Math.abs(a));if(!s||h<s){s=h;if(l(n,h)){s/=40}}if(l(n,h)){u/=40;a/=40;c/=40}u=Math[u>=1?"floor":"ceil"](u/s);a=Math[a>=1?"floor":"ceil"](a/s);c=Math[c>=1?"floor":"ceil"](c/s);t.deltaX=a;t.deltaY=c;t.deltaFactor=s;t.deltaMode=0;o.unshift(t,u,a,c);if(i){clearTimeout(i)}i=setTimeout(f,200);return(e.event.dispatch||e.event.handle).apply(this,o)}function f(){s=null}function l(e,t){return u.settings.adjustOldDeltas&&e.type==="mousewheel"&&t%120===0}var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice,i,s;if(e.event.fixHooks){for(var o=t.length;o;){e.event.fixHooks[t[--o]]=e.event.mouseHooks}}var u=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var t=n.length;t;){this.addEventListener(n[--t],a,false)}}else{this.onmousewheel=a}e.data(this,"mousewheel-line-height",u.getLineHeight(this));e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var e=n.length;e;){this.removeEventListener(n[--e],a,false)}}else{this.onmousewheel=null}},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:true}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})