function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText === "Invalid credentials") {
				document.getElementById("badpass").style.display = "block";
							document.getElementById("badpass2").style.display = "block";
				

			} else {
				localStorage.setItem('sessid', this.responseText);
				window.location.href = "./profile.html"
			}
		}
	};
	xhttp.open("GET", `https://api1.jola.gq/sessid?email=${email}&password=${password}`, true);
	xhttp.send();
}