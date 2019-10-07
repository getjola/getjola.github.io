const urlObj = new URLSearchParams(window.location.search);

function reset() {
  const email = urlObj.get('user');
  const sessid = urlObj.get('code');
  var password = document.getElementById("password").value;
  var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText)
       if (this.responseText === "Done") {
         window.location.href = "./login";
       } else {

       }
     }
   };
   xhttp.open("GET", `https://jola.gq/changepassword?password=${password}&email=${email}&sessid=${sessid}`, true);
   xhttp.send();
}
