if(!Mons){var Mons={}}if(!Mons.BASE_SERVER){Mons.BASE_SERVER="monsterindia.com"}if(!MJS){var MJS={}}if(!MJS.AJAX){MJS.AJAX={}}MJS.AJAX.createQueryForForm=function(G){if(!G.FORM_OBJ){return""}var B=G.FORM_OBJ;var A=G.EXTRA_PARAM;var F=B.elements;var E=new Array();for(var D in A){E.push(D+"="+encodeURIComponent(A[D]))}for(var D=0;D<F.length;D++){if(F[D].type=="select-multiple"){for(var C=0;C<F[D].options.length;C++){if(F[D].options[C].selected){if((name=F[D].name)&&(value=F[D].options[C].value)){E.push(name+"="+encodeURIComponent(value))}}}}else{if((F[D].type=="checkbox")||(F[D].type=="radio")){if(F[D].checked){if((name=F[D].name)&&(value=F[D].value)){E.push(name+"="+encodeURIComponent(value))}}}else{if((name=F[D].name)&&(value=F[D].value)){E.push(name+"="+encodeURIComponent(value))}}}}return E.join("&")};MJS.AJAX.createXMLHTTPObject=function(){if(typeof XMLHttpRequest!="undefined"){return new XMLHttpRequest()}else{if(window.ActiveXObject){var A=["MSXML2.XMLHttp.5.0","MSXML2.XMLHttp.4.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp","Microsoft.XMLHttp"];for(var B=0;B<A.length;B++){try{var C=new ActiveXObject(A[B]);return C}catch(D){}}}}throw new Error("XMLHttp object could be created.")};MJS.AJAX.sendRequest=function(B,E,A){var C=MJS.AJAX.createXMLHTTPObject();if(!C){return }var D=(A)?"POST":"GET";C.open(D,B,true);C.setRequestHeader("User-Agent","XMLHTTP/1.0");if(A){C.setRequestHeader("Content-type","application/x-www-form-urlencoded")}C.onreadystatechange=function(){if(C.readyState!=4){return }if(C.status!=200&&C.status!=304){return }E(C)};if(C.readyState==4){return }C.send(A)};