

function searchUser() {
  var userFind = document.getElementById("userin").value;
  window.location.href = `https://getjola.me/user.html?user=${userFind}`
}

function MsearchUser() {
  var userFind = document.getElementById("userin").value;
  window.location.href = `https://getjola.me/user.html?user=${userFind}`
}



var xhttp = new XMLHttpRequest();
 var email = localStorage.getItem('email');
  var sessid = localStorage.getItem('sessid');

if (!email || !sessid) {
          window.location.href = 'https://getjola.me/login.html';
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:

       var response = xhttp.responseText;

       if (response === "good") {
          // do nothing
       } else {
                window.location.href = 'https://getjola.me/login.html';
       }

    }
};
xhttp.open("GET", `https://www.jola.gq/checksession?sessid=${sessid}&email=${email}`, true);
xhttp.send();




function syncAll() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("bio").innerHTML = JSON.parse(this.responseText).bio.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br/>");
        document.getElementById("zip").innerText =  JSON.parse(this.responseText).zip;
        document.getElementById("edu").innerText =  JSON.parse(this.responseText).edu;
        document.getElementById("grade").innerText =  JSON.parse(this.responseText).grade + "th";
        document.getElementById("name").innerText = " " + JSON.parse(this.responseText).firstname + " " + JSON.parse(this.responseText).lastname;
        document.getElementById("pfp").src = `https://ui-avatars.com/api/?name=${JSON.parse(this.responseText).firstname}+${JSON.parse(this.responseText).lastname}&color=fffff&background=ffa500`
        document.getElementById("email").innerText =  localStorage.getItem("email")
        document.getElementById("pagecontent").style.display = "block";
        document.getElementById("loader").style.display = "none";

      }
}
xhttp.open("GET", `https://www.jola.gq/user?sessid=${sessid}&email=${email}`, true);
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
xhttp.open("GET", `https://www.jola.gq/user?sessid=${sessid}&email=${email}`, true);
xhttp.send();
}

checkIfBan();


function editProfile() {
  var pop = document.getElementById("bio").innerHTML;
  
document.getElementById("save").style.display = "block";
document.getElementById("bio").style.display = "none";
    document.getElementById("edit").style.display  = "none";
  document.getElementById("nbio").style.display = "block";
  document.getElementById("nbio").value = pop;

}

function save() {
  document.getElementById("bio").style.display = "block";
  document.getElementById("pagecontent").style.display = "none";
    document.getElementById("loader").style.display = "block";



  document.getElementById("save").style.display  = "none";
    document.getElementById("edit").style.display  = "block";
    document.getElementById("nbio").style.display = "none";

  var newBio = document.getElementById("nbio").value;
    var newZip = document.getElementById("zip").innerHTML;
    console.log(newBio, newZip);
    document.getElementById("pagecontent").style.display = "block";
      document.getElementById("loader").style.display = "none";

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             // Typical action to be performed when the document is ready:
            window.location.reload();
          }
      };
      xhttp.open("GET", `https://jola.gq/updateuser?sessid=${sessid}&email=${email}&bio=${newBio}`, true);
      xhttp.send();

      //
}

function syncSchools() {
  if (verifiedSchools.value === "Select a school") {
      // manual

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             // Typical action to be performed when the document is ready:
            window.location.reload();
          }
      };
      xhttp.open("GET", `https://jola.gq/setEdu?sessid=${sessid}&email=${email}&edu=${customname.value}`, true);
      xhttp.send();
      


  } else {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
          window.location.reload();
        }
    };
    xhttp.open("GET", `https://jola.gq/setEdu?sessid=${sessid}&email=${email}&edu=${verifiedSchools.value}`, true);
    xhttp.send();

  }
}
