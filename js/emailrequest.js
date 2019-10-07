function sendEmail() {
  var email = document.getElementById("email").value;
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    if(this.responseText == "okay") {
      document.getElementById("box1").style.display = "none";
      document.getElementById("box2").style.display = "block";
    } else {
            document.getElementById("dang").style.display = "block";
    }
  }
  };
  xhttp.open("GET", `https://jola.gq/passwordreset?email=${email}`, true);
  xhttp.send();
}
