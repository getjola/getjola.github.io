/*

 Responsible for actually loading the listing data provided by the server 
 in a visual fashion. 

 Date of Creation: 1/31/2020
 Last Updated: 1/31/2020
 Reviewed: 1/31/20
 Reviewee: pranavramesh@getjola.me
 Author(s): pranavramesh@getjola.me


*/



var url = "https://jola.gq";



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


var x;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == "200") {
		document.getElementById("company-title").innerHTML = getSearchParameters().title;
		document.getElementById("company-desc").innerHTML = (JSON.parse(this.responseText)).description;	
		document.getElementById("author").innerHTML = (JSON.parse(this.responseText)).createdBy;
		document.getElementById("author").href = "https://getjola.me/user?user=" + (JSON.parse(this.responseText)).createdBy;
		console.log( (JSON.parse(this.responseText)).appURL)
		document.getElementById("apply_button").href = "" + (JSON.parse(this.responseText)).appURL;
	}
}

xhttp.open("GET", url + "/listing?title=" + getSearchParameters().title, true)
xhttp.send()

