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


function getGrade() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("grade").innerHTML =  JSON.parse(this.responseText).grade;
      }
}
xhttp.open("GET", `https://api1.getjola.me/user?sessid=${sessid}&email=${email}`, true);
xhttp.send();
}


function getZip() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("zip").innerHTML =  JSON.parse(this.responseText).zip;
        //lazy here
            document.getElementById("email").innerHTML =  localStorage.getItem("email")
      }
}
xhttp.open("GET", `https://api1.getjola.me/user?sessid=${sessid}&email=${email}`, true);
xhttp.send();
}


getGrade();
getZip();
