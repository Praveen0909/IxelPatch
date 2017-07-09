var s=document.createElement("script");
var a="var a=document.getElementsByTagName('body')[0];  a.addEventListener('paste',function(e){   var b=e.clipboardData.getData('text/plain');         codeEditor.insert(b);                              }); a.addEventListener('click',function(){     var d=document.getElementById('rdialog');    if(d!=null){        d.removeAttribute('id');         }});";

s.appendChild(document.createTextNode(a));
s.onload = function() {
    this.remove();
};
(document.body||document.head || document.documentElement).appendChild(s);
