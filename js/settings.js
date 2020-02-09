var email = localStorage.getItem("email");
var sessid = localStorage.getItem("sessid");


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    if (JSON.parse(this.responseText).type == "employer") {
      document.getElementById("employer").style.display = "block"
      document.getElementById("normal").style.display = "none"
    } else {

      document.getElementById("employer").style.display = "none"
      document.getElementById("normal").style.display = "block"
    }



  }
}
xhttp.open("GET", `https://www.jola.gq/user?sessid=${sessid}&email=${email}`, true);
xhttp.send();

var input = document.querySelector('input[type=file]');
var b64;
input.onchange = function () {
  var file = input.files[0],
    reader = new FileReader();

  reader.onloadend = function () {
    // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
    b64 = reader.result.replace(/^data:.+;base64,/, '');
    console.log(b64); //-> "R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs="
  };

  reader.readAsDataURL(file);
};

function savepfp() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      ///     console.log(this.responseText)
      if (this.responseText === "Done") {
        window.location.href = "./login";
      } else {
        window.alert("Error uploading image.");
      }
    }
  };
  xhttp.open("GET", `https://jola.gq/uploadpfp?email=${email}&sessid=$[sessid]&data=${b64}`, true);
  xhttp.send();
}

function updatePassword(password) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      ///     console.log(this.responseText)
      if (this.responseText === "Done") {
        window.location.href = "./login";
      } else {
        console.log(`https://jola.gq/changepassword?password=${password}&email=${email}&sessid=${sessid}`)
        console.log(this.responseText)
        document.getElementById("errorbox").style.display = "block";
        document.getElementById("errormsg").innerHTML = "Something went wrong!"

      }
    }
  };
  xhttp.open("GET", `https://jola.gq/changepassword?password=${password}&email=${email}&sessid=${sessid}`, true);
  xhttp.send();
}



function save() {
  var ogPassword = document.getElementById("ogpassword").value;
  var confPassword = document.getElementById("confpassword").value;
  console.log(ogPassword);
  console.log(confPassword)

  if (ogPassword === confPassword) {
    updatePassword(confPassword);
    /* var xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
           // nothing
      }
    };
    xhttp.open("GET", `https://www.jola.gq/changename?sessid=${sessid}&email=${email}&firstname=${firstname}`, true);
    xhttp.send();
    */

  } else {
    document.getElementById("errorbox").style.display = "block";
    document.getElementById("errormsg").innerHTML = "Passwords do not match!"
  }




}





function loadPlaceholder() {
  var xhttp = new XMLHttpRequest();

  console.log(email + "\n" + sessid)
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = xhttp.responseText;
      //   console.log(this.responseText);
      document.getElementById("firstname").placeholder = (JSON.parse(this.responseText)).firstname;
      document.getElementById("lastname").placeholder = (JSON.parse(this.responseText)).lastname;

    }
  };

  console.log(`https://www.jola.gq/user?sessid=${sessid}&email=${email}`);
  xhttp.open("GET", `https://www.jola.gq/user?sessid=${sessid}&email=${email}`, true);
  xhttp.send();



}


loadPlaceholder();
