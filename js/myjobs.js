// loader id = loader
// content id = pagecontent


document.getElementById("loader").style.display = "none";
document.getElementById("pagecontent").style.display = "block";

var array = [];
var xhttp = new XMLHttpRequest();

function createNewListingFor(data) {
    var tempObject = document.createElement("div");
    tempObject.innerHTML = ``
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        if (this.responseText) {
            // should get back a response in array form
            for (var i; i < this.responseText.length(); i++) {
                createNewListingFor(this.responseText[i]);
            }
        } else {
            return console.log("Server returned an invalid input!")
        }
    }
};
xhttp.open("GET", "localhost/myjobs/for?user=" + localStorage.getItem("email"), true);
xhttp.send();