console.log("[client] getlisting.js has loaded.");
console.log( `https://api1.getjola.me/listing?name=${params}&sessid=${localStorage.getItem('sessid')}`)
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
var obj, title, description, url, image1, image2, image3;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       if (xhttp.responseText === "bad") {
      console.log("[client] server said session id is bad");


          window.location.href = "./login.html"

   } else {
      // session id was valid so run This

      console.log(xhttp.responseText);
      var card = xhttp.responseText;

    try {
      document.getElementById("company-title").innerHTML = JSON.parse(card).title;
          document.getElementById("company-desc").innerHTML = JSON.parse(card).description;
              document.getElementById("image1").src = JSON.parse(card).image1;
      //
    } catch(err) {
      console.log(card.title);
    }

   }
    }
};
console.log(`https://api1.getjola.me/listing?name=${params}&email=${localStorage.getItem('email')}&sessid=${localStorage.getItem('sessid')}`)
xhttp.open("GET", `https://api1.getjola.me/listing?name=${params}&email=${localStorage.getItem('email')}&sessid=${localStorage.getItem('sessid')}`, true);
xhttp.send();
