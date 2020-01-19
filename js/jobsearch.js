var email = localStorage.getItem("email");
var sessid = localStorage.getItem("sessid");




var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    
         if (JSON.parse(this.responseText).interests) {
             window.location.href = "./myjobs.html"
         }

 }
}	
xhttp.open("GET", `http://jola.gq/user?email=${email}&sessid=${sessid}`, true);
xhttp.send();




var interests;


function errorOut(reason) {
    window.alert(reason)
}






function interested() {
   interests = document.getElementById("interests").value;
   if (interests.length <= 1) {
       errorOut("Please type your interests!");
   } else {
    
       // send to server
       var xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "good") {
                window.location.href = ""
            } else {
                window.alert("Something went wrong.")
            }
        }
       }	
       xhttp.open("GET", `http://jola.gq/setInterests?email=${email}&sessid=${sessid}&interests=${interests}`, true);
       xhttp.send();
   }
}