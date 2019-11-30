// First URL to get the user we are looking for
var verifiedSchools = ["Garnet Valley High School", "Garnet Valley Middle School"]
const urlObj = new URLSearchParams(window.location.search);
const user = urlObj.get('user');
var resultingData = undefined;
if (!user) {
  window.location.href = "./404.html";
} else {
  var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      //resultingData = JSON.parse(this.responseText);
    if (this.responseText === "user does not exist") {
        document.getElementById("loader").style.display = "none";
        document.getElementById("nouser").style.display = "block";
      } else {
        document.getElementById("pagecontent").style.display = "block";
        document.getElementById("loader").style.display = "none";
        document.getElementById("pfp").src = `https://ui-avatars.com/api/?name=${JSON.parse(this.responseText).firstname}+${JSON.parse(this.responseText).lastname}&color=fffff&background=ffa500`
       if (verifiedSchools.includes((JSON.parse(this.responseText)).edu)) {
          document.getElementById("edu").innerHTML = '<i title="This school is Jola Verfied." class="fas fa-check-circle"></i>   ' + (JSON.parse(this.responseText)).edu.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
        } else {
        document.getElementById("edu").innerText = (JSON.parse(this.responseText)).edu;
        }
        document.getElementById("bio").innerHTML = (JSON.parse(this.responseText)).bio.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br/>");
        document.getElementById("grade").innerText = (JSON.parse(this.responseText)).grade;
                document.getElementById("zip").innerHTML = (JSON.parse(this.responseText)).zip;
                                document.getElementById("email").innerHTML = urlObj.get('user');;
        document.getElementById("name").innerText = (JSON.parse(this.responseText)).firstname + " " + (JSON.parse(this.responseText)).lastname;
    }
   }
 };
 xhttp.open("GET", `https://jola.gq/public/user?email=${user}`, true);
 xhttp.send();
}

// this type of request will not the require the sessid variable as this is public info
