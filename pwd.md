---
layout: default
---
<h1>Generate unique passwords using a master password</h1>
&lt; <a href="/">Back to home</a><br/><br/>

Inspired by the password generator of <a href="https://chriszarate.github.io/supergenpass/">Chris Zarate</a>, I created a bookmarklet that generates unique passwords for websites based on md5 hashing of a master password. It is a simplified version made specifically to not require external libraries like jquery or communication with a server. It uses md5 from <a href="https://github.com/jbt/js-crypto">js-crypto</a>.
<b>Use with caution!</b>

<a href='javascript:void function()%7Bvar e%3Dlocation,t%3De.protocol%2B"//"%2Be.hostname%2B(e.port%3F":"%2Be.port:""),n%3Dwindow.addEventListener%3F"addEventListener":"attachEvent"%3Bz%3Ddocument%3Bvar a%3D"<style>input%7Bdisplay:block%3Bpadding:4px%3Bmargin:5px 0%3Bwidth:100%25%3B%7Ddiv%7Bbackground:%23fa0%3Bheight:20px%3Bmargin-top:5px%3Bpadding:2px%3B%7Dbutton%7Bmargin-right: 3%25%3Bdisplay:inline-block%3Bcolor:white%3Bheight:20px%3Bbackground:brown%3Boutline:none%3Bborder:none%3Bwidth:30%25%3B%7D</style><form id%3D%27f%27><input type%3D%27text%27 value%3D%27"%2Bz.domain%2B"%27><input type%3D%27password%27 placeholder%3D%27pwd%27><button type%3D%27submit%27>login</button><button type%3D%27button%27 onclick%3D%27javascript:show()%27>show</button><button type%3D%27button%27 onclick%3D%27javascript:done()%27>close</button><div></div></form><script>z%3Ddocument%3Bd%3Dz.getElementsByTagName(%27div%27)%5B0%5D%3Bmd5%3Dfunction()%7Bfor(var m%3D%5B%5D,l%3D0%3B64>l%3B)m%5Bl%5D%3D0%7C4294967296*Math.abs(Math.sin(%2B%2Bl))%3Breturn function(c)%7Bvar e,g,f,a,h%3D%5B%5D%3Bc%3Dunescape(encodeURI(c))%3Bfor(var b%3Dc.length,k%3D%5Be%3D1732584193,g%3D-271733879,~e,~g%5D,d%3D0%3Bd<%3Db%3B)h%5Bd>>2%5D%7C%3D(c.charCodeAt(d)%7C%7C128)<<8*(d%2B%2B%254)%3Bh%5Bc%3D16*(b%2B8>>6)%2B14%5D%3D8*b%3Bfor(d%3D0%3Bd<c%3Bd%2B%3D16)%7Bb%3Dk%3Bfor(a%3D0%3B64>a%3B)b%3D%5Bf%3Db%5B3%5D,(e%3Db%5B1%5D%7C0)%2B((f%3Db%5B0%5D%2B%5Be%26(g%3Db%5B2%5D)%7C~e%26f,f%26e%7C~f%26g,e%5Eg%5Ef,g%5E(e%7C~f)%5D%5Bb%3Da>>4%5D%2B(m%5Ba%5D%2B(h%5B%5Ba,5*a%2B1,3*a%2B5,7*a%5D%5Bb%5D%2516%2Bd%5D%7C0)))<<(b%3D%5B7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21%5D%5B4*b%2Ba%2B%2B%254%5D)%7Cf>>>32-b),e,g%5D%3Bfor(a%3D4%3Ba%3B)k%5B--a%5D%3Dk%5Ba%5D%2Bb%5Ba%5D%7Dfor(c%3D%27%27%3B32>a%3B)c%2B%3D(k%5Ba>>3%5D>>4*(1%5Ea%2B%2B%267)%2615).toString(16)%3Breturn c%7D%7D()%3Bp%3D%27%27%3Bfunction send(e)%7Bif(e.preventDefault)e.preventDefault()%3Bi%3Dz.getElementsByTagName(%27input%27)%3Bp%3Dmd5(i%5B0%5D.value%2B%27%23%27%2Bi%5B1%5D.value).substr(0,14)%2B%27A.%27%3Bparent.postMessage(p,%27"%2Bt%2B"%27)%3Bd.innerHTML%3D%27*****%27%3Breturn false%3B%7Dfunction done()%7Bparent.postMessage(%27x%27,%27"%2Bt%2B"%27)%3B%7Dfunction show()%7Bd.innerHTML%3Dp%3B%7Dform%3Dz.getElementById(%27f%27)%3Bform%5B%27"%2Bn%2B"%27%5D(%27submit%27,send)%3B</script>",o%3Dz.createElement("iframe")%3Bo.src%3D"data:text/html%3Bcharset%3Dutf-8,"%2BencodeURI(a),o.style%3D"position:fixed%3Btop:10px%3Bright:10px%3Bz-index:1234567890%3Bbackground:gold%3Bwidth:200px%3Bheight:130px%3Bborder:0%3Bbox-shadow: 0 0 10px black%3B",z.body.appendChild(o)%3Bvar i%3Dwindow%5Bn%5D,r%3D"attachEvent"%3D%3Dn%3F"onmessage":"message"%3Bi(r,function(e)%7Bvar t%3De.data%3Bif("x"%3D%3Dt)return void z.body.removeChild(o)%3Bfor(var n%3Dz.getElementsByTagName("input"),a%3D0%3Ba<n.length%3Ba%2B%2B)"password"%3D%3D%3Dn%5Ba%5D.type.toLowerCase()%26%26(n%5Ba%5D.focus(),n%5Ba%5D.value%3Dt)%7D,!1)%7D()%3B' style="display: block; background: lightyellow; max-width: 200px; padding: 10px; border: 1px solid #ccc;">Login</a>

Get it by dragging the link to your bookmarks bar. Below is the source code for convenience. It computes a hash using the following formula:
"md5(domain#pass)A.". The md5 is truncated to 14 characters to give a 16 character password in total.

{% highlight javascript %}
var l = location;
var d = l.protocol+'//'+l.hostname+(l.port?':'+l.port: '');
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var z = document;
var html = 
 "<style>\
    input{display:block;padding:4px;margin:5px 0;width:100%;}\
    div{background:#fa0;height:20px;margin-top:5px;padding:2px;}\
    button{margin-right: 3%;display:inline-block;color:white;height:20px;\
      background:brown;outline:none;border:none;width:30%;}\
  </style>\
  <form id='f'>\
    <input type='text' value='"+z.domain+"'><input type='password' placeholder='pwd'>\
    <button type='submit'>login</button>\
    <button type='button' onclick='javascript:show()'>show</button>\
    <button type='button' onclick='javascript:done()'>close</button>\
    <div></div>\
  </form>\
  <sc"+"ript>\
    z=document;d=z.getElementsByTagName('div')[0];\
    md5=function(){for(var m=[],l=0;64>l;)m[l]=0|4294967296*Math.abs(Math.sin(++l));return function(c){var e,g,f,a,h=[];c=unescape(encodeURI(c));for(var b=c.length,k=[e=1732584193,g=-271733879,~e,~g],d=0;d<=b;)h[d>>2]|=(c.charCodeAt(d)||128)<<8*(d++%4);h[c=16*(b+8>>6)+14]=8*b;for(d=0;d<c;d+=16){b=k;for(a=0;64>a;)b=[f=b[3],(e=b[1]|0)+((f=b[0]+[e&(g=b[2])|~e&f,f&e|~f&g,e^g^f,g^(e|~f)][b=a>>4]+(m[a]+(h[[a,5*a+1,3*a+5,7*a][b]%16+d]|0)))<<(b=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*b+a++%4])|f>>>32-b),e,g];for(a=4;a;)k[--a]=k[a]+b[a]}for(c='';32>a;)c+=(k[a>>3]>>4*(1^a++&7)&15).toString(16);return c}}();\
    p='';\
    function send(e){\
      if(e.preventDefault) e.preventDefault();\
      i=z.getElementsByTagName('input');\
      p=md5(i[0].value+'#'+i[1].value).substr(0,14)+'A.';\
      parent.postMessage(p,'"+d+"');\
      d.innerHTML='*****';\
      return false;\
    }\
    function done(){\
      parent.postMessage('x','"+d+"');\
    }\
    function show(){\
      d.innerHTML=p;\
    }\
    form=z.getElementById('f');\
    form['"+eventMethod+"']('submit',send);\
  </"+"script>";
var iframe = z.createElement('iframe');
iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
iframe.style = 'position:fixed;top:10px;right:10px;z-index:1234567890;background:gold;width:200px;height:130px;border:0;box-shadow: 0 0 10px black;';
z.body.appendChild(iframe);
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
eventer(messageEvent,function(e) {
  var m = e.data;
  if(m=='x') {z.body.removeChild( iframe );return;}
  var inputs = z.getElementsByTagName("input");
  for (var i=0; i<inputs.length; i++) {
    if (inputs[i].type.toLowerCase() === "password") {
      inputs[i].focus();
      inputs[i].value = m;
    }
  }
},false);
{% endhighlight %}
