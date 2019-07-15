function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}





var params = getSearchParameters();
params = params.name;
var title, description, url, image1, image2, image3;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       if (xhttp.responseText === "Bad sessid") {

window.location.href = "./login.html"

   } else {
       var obj = xhttp.responseText;
       title = obj.title;
       description = obj.description;
       url = obj.url;
       image1 = obj.image1;
       image2 = obj.image2;
       image3 = obj.image3;

   }
    }
};
xhttp.open("GET", `https://api1.getjola.me/listing?name=${params}&sessid=${localStorage.getItem('sessid')}`, true);
xhttp.send();