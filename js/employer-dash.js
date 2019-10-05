// auth
var xhttp = new XMLHttpRequest();
 var email = localStorage.getItem('email');
  var sessid = localStorage.getItem('sessid');

if (!email || !sessid) {
          window.location.href = './login.html';
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:

       var response = xhttp.responseText;

       if (response === "good") {
          // do nothing
       } else {
                window.location.href = './login.html';
       }

    }
};
xhttp.open("GET", `https://www.jola.gq/checksession?sessid=${sessid}&email=${email}`, true);
xhttp.send();
// Required Data to send request
var sessid = localStorage.getItem("sessid");
var email = localStorage.getItem("email");
var userObject;

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      userObject = JSON.parse(this.responseText); // Pass data too userObject
      modify();
    }
};
console.log("Checking with... " + `https://jola.gq/user?sessid=${sessid}&email=${email}`);
xhttp.open("GET", `https://jola.gq/user?sessid=${sessid}&email=${email}`, true); // Get User Object
xhttp.send();


// Edit Page Dynamically
function modify() {
  document.getElementById("loader").style.display = "none";

  if (userObject.type == "employer") {
    document.getElementById("biz").style.display = "block";
  }
  if (userObject.type == "student" || userObject.type == "not set") {
    return window.location.href = "./404.html";
  }
  document.getElementById("biz").style.display = "block";
  document.getElementById("name").innerHTML = userObject.firstname;

}
