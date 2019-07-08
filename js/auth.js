function login() {

	console.log("Login button was clicked!")
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			console.log("This is being executed.")
		
		    if (this.readyState == 4 && this.status == 200) {
		    	if (xhttp.responseText == "Invalid credentials") {
		    		console.log("Invalid credentials")
		    		document.getElementById("bad-pass").style.display = "block";
		    	} else {
		            console.log("Authenticated! =)")
			        localStorage.setItem('sessid', JSON.stringify(xhttp.responseText));
			        window.location.href = "./profile.html";
			        window.close();
		    	}


		    } else {
		    	document.getElementById("bad-pass").style.display = "block";
		    }
		};


		xhttp.open("GET", `http://api1.jola.gq/sessid?username=${email}&password=${password}`, true);
		xhttp.send();

}