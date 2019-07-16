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