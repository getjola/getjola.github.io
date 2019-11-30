// Copyright Pranav Ramesh 2019

function showPass() {
	var x = document.getElementById("password");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }

function login() {
	localStorage.clear()
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText === "Invalid credentials") {
				document.getElementById("badpass").style.display = "block";
							document.getElementById("badpass2").style.display = "block";


			} else {
				localStorage.setItem('email', email);
				localStorage.setItem('sessid', this.responseText);
				window.location.href = "https://getjola.me/profile.html"
			}
		}
	};
	xhttp.open("GET", `https://www.jola.gq/sessid?email=${email}&password=${password}`, true);
	xhttp.send();
}

function register() {

	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	if (validateEmail(document.getElementById("email").value)) {

if (document.getElementById("password").value.length < 1 || !document.getElementById("grade").value || !document.getElementById("zip").value || !document.getElementById("firstname").value || !document.getElementById("lastname").value) {
	document.getElementById("loader").style.display = "none";
	document.getElementById("registerPanel").style.display = "block";
	document.getElementById("badpass").style.display = "block";
	document.getElementById("badpass2").style.display = "block";
} else {

	document.getElementById("loader").style.display = "block";
		document.getElementById("registerPanel").style.display = "none";
	localStorage.clear()
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		var grade = document.getElementById("grade").value;
		var zip = document.getElementById("zip").value;
		var firstname = document.getElementById("firstname").value;
		var lastname = document.getElementById("lastname").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText === "Done") {
window.location.href = "https://getjola.me/login.html"



			} else {

				document.getElementById("loader").style.display = "none";
				document.getElementById("registerPanel").style.display = "block";
				document.getElementById("badpass").style.display = "block";
				document.getElementById("badpass2").style.display = "block";
			}
		}
		}
	};

	xhttp.open("GET", `https://www.jola.gq/createacc?email=${email}&password=${password}&grade=${grade}&zip=${zip}&firstname=${firstname}&lastname=${lastname}`, true);
	xhttp.send();
} else {
	document.getElementById("loader").style.display = "none";
	document.getElementById("registerPanel").style.display = "block";
	document.getElementById("badpass").style.display = "block";
	document.getElementById("badpass2").style.display = "block";
}
}

function logout(sessid) {
	var email = localStorage.getItem('email');
	var sessid = localStorage.getItem('sessid');

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    		if (xhttp.responseText === "deleted") {
	    			window.location.href = "https://getjola.me/login.html?x=logout"
	    		}
	    }
	};
	xhttp.open("GET", `https://www.jola.gq/deletesessid?sessid=${sessid}`, true);
	xhttp.send();

}
// Copyright Pranav Ramesh 2019

function showPass() {
	var x = document.getElementById("password");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
  }

function login() {
	localStorage.clear()
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText === "Invalid credentials") {
				document.getElementById("badpass").style.display = "block";
							document.getElementById("badpass2").style.display = "block";


			} else {
				localStorage.setItem('email', email);
				localStorage.setItem('sessid', this.responseText);
				window.location.href = "https://getjola.me/profile.html"
			}
		}
	};
	xhttp.open("GET", `https://www.jola.gq/sessid?email=${email}&password=${password}`, true);
	xhttp.send();
}

function register() {

	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(String(email).toLowerCase());
	}

	if (validateEmail(document.getElementById("email").value)) {

if (document.getElementById("password").value.length < 1 || !document.getElementById("grade").value || !document.getElementById("zip").value || !document.getElementById("firstname").value || !document.getElementById("lastname").value) {
	document.getElementById("loader").style.display = "none";
	document.getElementById("registerPanel").style.display = "block";
	document.getElementById("badpass").style.display = "block";
	document.getElementById("badpass2").style.display = "block";
} else {

	document.getElementById("loader").style.display = "block";
		document.getElementById("registerPanel").style.display = "none";
	localStorage.clear()
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		var grade = document.getElementById("grade").value;
		var zip = document.getElementById("zip").value;
		var firstname = document.getElementById("firstname").value;
		var lastname = document.getElementById("lastname").value;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (this.responseText === "Done") {
window.location.href = "https://getjola.me/login.html"



			} else {

				document.getElementById("loader").style.display = "none";
				document.getElementById("registerPanel").style.display = "block";
				document.getElementById("badpass").style.display = "block";
				document.getElementById("badpass2").style.display = "block";
			}
		}
		}
	};

	xhttp.open("GET", `https://www.jola.gq/createacc?email=${email}&password=${password}&grade=${grade}&zip=${zip}&firstname=${firstname}&lastname=${lastname}`, true);
	xhttp.send();
} else {
	document.getElementById("loader").style.display = "none";
	document.getElementById("registerPanel").style.display = "block";
	document.getElementById("badpass").style.display = "block";
	document.getElementById("badpass2").style.display = "block";
}
}

function logout(sessid) {
	var email = localStorage.getItem('email');
	var sessid = localStorage.getItem('sessid');

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    		if (xhttp.responseText === "deleted") {
	    			window.location.href = "https://getjola.me/login.html?x=logout"
	    		}
	    }
	};
	xhttp.open("GET", `https://www.jola.gq/deletesessid?sessid=${sessid}`, true);
	xhttp.send();

}
