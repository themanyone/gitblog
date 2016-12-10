// <!-- -*- coding: utf-8 -*- -->
// Copyright (C) 2013 by Henry Kroll III www.thenerdshow.com
/* Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

function show(page,x,y,scrollbars){
    shown=window.open(encodeURI(page),"new","scrollbars="+scrollbars
    +",width="+x+",height="+y+",resizable=1,status=1")
}
var mediaIcons = new (function(){
    /* 'that' will be used in events */
    /* because the 'this' keyword is not propagated */
    var that=this;
    // get path to this script
    var scripts = document.getElementsByTagName('script');
    var thisScript = scripts[scripts.length -1];
    var path = thisScript.src.match(/\/\/[^?]+\//);
    //~ declare local vars
    var desc=document.getElementsByName("description");
    var urls=
    [ {x:"182",y:"0",  href: "https://plus.google.com/share"    ,u: "url",e:""
    },{x:"0",  y:"0",  href: "https://www.facebook.com/sharer/sharer.php",u: "u",t: "title",e:""
    },{x:"91", y:"0",  href: "https://twitter.com/intent/tweet",u: "url",t: "text",e:""
    },{x:"136",y:"0",  href: "https://www.linkedin.com/shareArticle",u: "url",t: "title",e:""
    },{x:"227",y:"0",  href: "https://www.myspace.com/index.cfm",u: "u",t: "t",e:"&fuseaction=postto&l="
    },{x:"273",y:"0",  href: "https://www.tumblr.com/share"     ,u: "u",t: "t",e:"&v=3"
    },{x:"318",y:"0",  href: "https://www.addtoany.com/add_to/bebo",u: "linkurl",t: "linkname",e:""
    },{x:"45", y:"61", href: "https://del.icio.us/post"          ,u: "url",t: "title",d:"notes", e:""
    },{x:"91", y:"61", href: "https://digg.com/tools/diggthis/confirm",u: "url",t: "title"
    },{x:"136",y:"61", href: "https://www.stumbleupon.com/submit",u: "url",t: "title"
    },{x:"182",y:"61", href: "https://www.reddit.com/submit"     ,u: "url",t: "title"
    },{x:"227",y:"61", href: "https://technorati.com/faves"      ,u: "add",t: "title"
    },{x:"136",y:"123",href: "https://pinterest.com/pin/create/bookmarklet/",u: "url",t:"description",e:"&is_video=false"
    },{x:"0",  y:"123",href: "https://youtube.com/[USERNAME]"
    },{x:"44", y:"123",href: "https://flickr.com/[USERNAME]"
    },{x:"91", y:"123",href: "https://instagram.com/[USERNAME]"
    },{x:"182",y:"123",href: "https://deviantart.com/[USERNAME]"
    },{x:"227",y:"123",href: "https://soundcloud.com/[USERNAME]"
    },{x:"273",y:"123",href: "https://www.vimeo.com/[USERNAME]"
    },{x:"318",y:"123",href: "https://www.twylah.com/[USERNAME]"
    },{x:"136",y:"191",href: "https://www.rss.com/"
    },{x:"182",y:"191",href: "https://www.skype.com/[USERNAME]"
    } ];
    var cmds=this.cmds=(function (){
        var ret;
        function q2obj(url){
            var qfrag,
                qArr = url.split('&'),
                qObj = {},
                i =-1;
            while(++i<qArr.length) {
                qfrag = qArr[i].split('=');
                qObj[qfrag[0]] = decodeURIComponent(qfrag[1].replace(/\+/g, '%20'));
            } return qObj;       
        }
        // see if script was passed parameters from the src
        var scripts = document.getElementsByTagName('script');
        var myScript = scripts[ scripts.length - 1 ];
        var queryString = myScript.src.replace(/^[^\?]+\??/,'');
        if(location.search) ret = q2obj(location.search.slice(1));
        else if(queryString) ret=q2obj(queryString)
        return ret;
    })();
    (function(){
        var loc,style=document.getElementById("socialStyle");
        if(!style){
            // create style element if we ain't got it
            var css = '\
a.socIcon {\
    display:inline-block;\
    width:32px;height:32px;\
    background-image:url("'+path+'New-Social-Media-Icons.jpg");\
    background-position:left; \
    -webkit-box-shadow: 3px 3px 3px #111;\
    box-shadow: 3px 3px 3px #111;\
    -moz-border-radius: 5px;\
    border-radius: 5px;\
    }\
a.socIcon:hover {\
    -webkit-box-shadow: 1px 1px 1px #111;\
    box-shadow: 1px 1px 1px #111;\
    transition: box-shadow .1s ease-out;\
    -moz-transition: box-shadow .1s ease-out;\
    -webkit-transition: box-shadow .1s ease-out;\
    -o-transition: box-shadow .1s ease-out;\
    }\
        ',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');
            style.id = "socialStyle";
            style.type = 'text/css';
            if (style.styleSheet){
              style.styleSheet.cssText = css;
            } else {
              style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
        }
    })();
    this.showIcons=(function (){
        var config = (typeof cmds.config!="undefined");
        document.write("<div id=\"socIcons\" style=\"");
        if(typeof cmds.float!="undefined")document.write("float:"+cmds.float+";");
        if(config) document.write("border-width:1px;border-style:dashed;padding:10px;");
        document.write("\">");
        urls.forEach(function(u,i){
            if(config&&!location.search&&i>3)return;
            if(config&&!location.search||typeof cmds["button"+i] != "undefined"){
                document.write("<a class=\"socIcon\" style=\"background-position:"
                +(350-u.x)+"px "+(236-u.y)+"px;\" href=\"javascript:show('"
                +((cmds["url"+i])?cmds["url"+i]:u.href)+"?");
                if(typeof u.u!="undefined")
                    document.write(u.u+"="+encodeURIComponent(location));
                if(typeof u.t!="undefined")
                    document.write("&amp;"+u.t+"="+encodeURIComponent(document.title));
                if(typeof u.d!="undefined")
                    document.write("&amp;"+u.d+"="+encodeURIComponent(desc[0].content));
                if(typeof u.e!="undefined") document.write(u.e);
                document.write("',615,465,0)\"></a>");
                if(typeof cmds.layout!="undefined"&&cmds.layout=="vertical")
                    document.writeln("<br>");
                else document.writeln("");
            }
        });
        document.write("</div>");
    })();
    this.printForm=(function(){
        if(typeof cmds.config=="undefined")return;
        if(location.search){
            document.write(
"<div id=\"socialMediaCode\""
+((cmds.float&&cmds.float=="left")?" style=\"clear:both\"":"")
+"><h3>Embed code</h3>Download <a href=\""+path+"social.zip\">"
+"mediaIcons</a> and insert code into your site:"
+"<br><textarea cols=\"50\" rows=\"5\" onclick=\"select(this);\" spellcheck=\"false\">"
+"<script src=\""+path+"mediaIcons.js?");
            Object.keys(cmds).forEach(function(k,i){
                if(k.slice(0,3)=="url"&&cmds[k]==urls[k.slice(3)].href)return;
                if(k=="config")return;
                if(i)document.write("&amp;amp;");
                document.write(k+"="+cmds[k]);
            });
            document.writeln("\"><\/script></textarea></div>");            
        }
        document.writeln("<h3>Configure widget</h3>"
+"<form id=\"mediaConfig\" method=\"GET\" onsubmit=\"mediaIcons.validateForm();\">"
+"<label>float: left"
+"<input type=\"radio\" name=\"float\" value=\"left\""
+((cmds.float&&cmds.float=="left")?" checked":"")
+"></label><label>right"
+"<input type=\"radio\" name=\"float\" value=\"right\""
+((cmds.float&&cmds.float=="right")?" checked":"")
+"></label><br>"
+"<label>horizontal"
+"<input type=\"radio\" name=\"layout\" value=\"horizontal\""
+((cmds.float&&cmds.layout=="horizontal")?" checked":"")
+"></label>"
+"<label>vertical"
+"<input type=\"radio\" name=\"layout\" value=\"vertical\""
+((cmds.float&&cmds.layout=="vertical")?" checked":"")
+"></label>"
+"<input type=\"submit\"><br>"
        );
        urls.forEach(function(u,i){
            document.write("<input type=\"checkbox\" name=\"button"+i+"\" value=\"\"");
            if(typeof cmds.config!="undefined"&&!location.search&&i<4)document.write(" checked");
            else if(typeof cmds["button"+i] != "undefined")document.write(" checked");
            document.write("><a class=\"socIcon\" style=\"background-position:"
            +(350-u.x)+"px "+(236-u.y)+"px;\" href=\"javascript:show('"+u.href);
            if(typeof u.u!="undefined")
                document.write(u.u+"="+encodeURIComponent(location));
            if(typeof u.t!="undefined")
                document.write("&"+u.t+"="+encodeURIComponent(document.title));
            if(typeof u.d!="undefined")
                document.write("&"+u.d+"="+encodeURIComponent(desc[0].content));
            if(typeof u.e!="undefined") document.write(u.e);
            document.write("',615,465,0)\"></a>&nbsp;"
            +"<input type=\"text\" name=\"url"+i+"\" value=\""
            +((cmds["url"+i])?cmds["url"+i]:u.href)+"\" size=\"40\"><br>"
            );
        });
        document.writeln("<input type=\"hidden\" name=\"config\"></form>");
    })();
    this.validateForm=(function(){
        console.log("stub!");
    });
})();
