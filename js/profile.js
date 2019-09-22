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
xhttp.open("GET", `https://api1.getjola.me/checksession?sessid=${sessid}&email=${email}`, true);
xhttp.send();




function syncAll() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("zip").innerHTML =  JSON.parse(this.responseText).zip;
        document.getElementById("grade").innerHTML =  JSON.parse(this.responseText).grade + "th";
        document.getElementById("name").innerHTML = " " + JSON.parse(this.responseText).firstname + " " + JSON.parse(this.responseText).lastname;
        document.getElementById("pfp").src = `https://ui-avatars.com/api/?name=${JSON.parse(this.responseText).firstname}+${JSON.parse(this.responseText).lastname}&color=fffff&background=ffa500`
        document.getElementById("email").innerHTML =  localStorage.getItem("email")
        document.getElementById("pagecontent").style.display = "block";
        document.getElementById("loader").style.display = "none";

      }
}
xhttp.open("GET", `https://api1.getjola.me/user?sessid=${sessid}&email=${email}`, true);
xhttp.send();
}

function checkIfBan() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if(JSON.parse(this.responseText).terminated === "yes") {
document.getElementById("beta").style.display = "none";
          document.getElementById("banned").style.display = "block";
          document.getElementById("banreason").innerHTML = JSON.parse(this.responseText).terminationreason;
document.getElementById("loader").style.display = "none";

        } else {
          syncAll();
        }

      }
}
xhttp.open("GET", `https://api1.getjola.me/user?sessid=${sessid}&email=${email}`, true);
xhttp.send();
}

checkIfBan();
