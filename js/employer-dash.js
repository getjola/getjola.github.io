// auth
var xhttp = new XMLHttpRequest();
var email = localStorage.getItem('email');
var sessid = localStorage.getItem('sessid');

if (!email || !sessid) {
  window.location.href = './login.html';
}
// Required Data to   send request
var sessid = localStorage.getItem("sessid");
var email = localStorage.getItem("email");
var userObject;

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    userObject = JSON.parse(this.responseText); // Pass data too userObject
    modify();
  }
};
console.log("Checking with... " + `https://jola.gq/user?sessid=${sessid}&email=${email}`);
xhttp.open("GET", `https://jola.gq/user?sessid=${sessid}&email=${email}`, true); // Get User Object
xhttp.send();

/*
function resync() {
  xhttp.open("GET", `https://jola.gq/user?sessid=${sessid}&email=${email}`, true); // Get User Object

  xhttp.send();
  modify()
}*/

function appendNew() {
}

// Edit Page Dynamically
function modify() {


  document.getElementById("loader").style.display = "none";

  if (userObject.type == "employer") {


    document.getElementById("biz").style.display = "block";
    if (!userObject.ownerOf || (userObject.ownerOf).length == 0) {
      document.getElementById("nobiz").style.display = "block";

    } else {
      document.getElementById("nobiz").style.display = "none";
      document.getElementById("list").style.display = "block";

      var myJobs = userObject.ownerOf;
      for (var i in myJobs) {
        //    var mockI = i+1;
        document.getElementById("mycompanies").innerHTML
          = document.getElementById("mycompanies").innerHTML + '<tr><th scope="row">' + i + '</th><th>' + myJobs[i] + '</th><th> <a style="color:darkblue;margin-left:10px;text-decoration:none;" href="./dashboard/manage.html?name=' + myJobs[i] + '"><i class="fas fa-wrench"></i> Configure</a><a style="margin-left:10px;color:red;cursor:pointer;" onclick="deleteListing(`' + myJobs[i] + '`)" ><i class="fas fa-trash-alt"></i> Delete</a>';

      }


    }


  }
  if (userObject.type == "student" || userObject.type == "not set") {
    document.getElementById("student").style.display = "block";
    // return window.location.href = "./404.html";
  }
  document.getElementById("biz").style.display = "block";
  document.getElementById("name").innerHTML = userObject.firstname;

}

function deleteListing(what) {
  // what is the listing we are deleting


  title = what;

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "done") {
        window.location.reload();

      } else {
        window.alert("Unable to delete listing.")
      }
    }
  };
  xhttp.open("GET", `https://jola.gq/deleteListing?sessid=${sessid}&email=${email}&title=${title}`, true); // Get User Object
  xhttp.send();



}






function submitApp() {

  console.log("Sending app")

  var title = document.getElementById("listingtitle").value;
  var description = document.getElementById("description").value;
  var appURL = document.getElementById("appurl").value;
  var zip = document.getElementById("zip").value;
  var blurb = document.getElementById("blurb").value;

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "good") {
        window.location.reload();

      } else {
        document.getElementById("nosave").style.display = "block";
      }
    }
  };


  xhttp.open("GET", `https://jola.gq/createListing?sessid=${sessid}&email=${email}&desc=${description}&title=${title}&appURL=${appURL}&zip=${zip}&blurb=${blurb}`, true); // Get User Object
  xhttp.send();




}