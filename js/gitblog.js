marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
(function() {
/** decodeURL: get info from URL
 */
function decodeURL(){
    function q2obj(url){
        var qfrag, qArr = url.split('&'), qObj = {}, i = -1;
        while(++i<qArr.length) {
            qfrag = qArr[i].split('=');
            qObj[qfrag[0]] = decodeURIComponent(qfrag[1].replace(/\+/g, '%20'));
        } return qObj;
    } if (location.search) return q2obj(location.search.slice(1));
}
function getKeywords(e){
	var obj = {};var out=[], ret=[];
    /* count each keyword */
    forAll(e)(function(e){
        if (e.length > 3) obj[e] = obj[e]?obj[e]+=1:1; });
    /* stuff into array and sort */
    forAll(obj)(function(k,v){ out.push([k,v]); });
    out = out.sort().reverse().slice(0,25);
    forAll(out)(function(e){ret.push(e[1]);});
	return ret.join(" ");
}
function displayIt(e){
    var ele = jq(".content")
    if (ele)
        ele.innerHTML += marked(e.responseText);
    if (h1 = jq("h1"))
        document.title = jq("meta[property=\"og:title\"]").content = h1.innerText;
    var w = ele.innerText.replace(/\W+/g, " ").trim().split(" ");
    jq("meta[name=\"keywords\"]").content = getKeywords(w);
    jq("meta[name=\"description\"]").content = 
    jq("meta[property=\"og:description\"]").content = jq("p").innerText;
}
u = decodeURL();
if(!u)u={};
wl = isSet(u.u)? u.u
    : u.f && u.a && u.p ?
        "https://raw.githubusercontent.com/" + u.a 
        + "/" + u.p + "/master/" + u.f
    : u.a && u.p ?
        "https://raw.githubusercontent.com/" + u.a 
        + "/" + u.p + "/master/README.md"
    : "README.md";
XHR(wl, displayIt);
})();
