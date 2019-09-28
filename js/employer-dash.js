var sessid = localStorage.getItem("sessid");
var email = localStorage.getItem("email");
showLoader()
function syncGeneralSettings() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var final = JSON.parse(this.responseText);
          // console.log(final)

          document.getElementById("name").innerHTML = final.firstname;
          checkUserEmployer()

      }
    }

        xhttp.open("GET", `https://www.jola.gq/user?sessid=${sessid}&email=${email}`, true);
        xhttp.send();
}


function checkUserEmployer() {
  //  Ask API if this case is true.
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var final = JSON.parse(this.responseText);
          console.log(final.type);
          if (final.type === "not set") {
//console.log(final.type);
             typeSelect();
             hideLoader();
          } else if (final.type === "employer") {
              // do nothing
            hideLoader();
          } else {
            console.log(final.type)
             window.location.href = "./404.html";
          }

      }
    }

    xhttp.open("GET", `https://www.jola.gq/user?sessid=${sessid}&email=${email}`, true);
    xhttp.send();

  // if user isn't...
  //window.location.href = './404.html';



}


function typeSelect() {
    hideLoader();
    document.getElementById("pagecontent").style.display = "none";
    document.getElementById("select").style.display = "block";
}



function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

function showLoader() {
  document.getElementById("loader").style.display = "block";
}


syncGeneralSettings();
