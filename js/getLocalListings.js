function listData(arg1) {
	// sort all the names
	// this should only fill what it can

	if (arg1.listing1) {
	document.getElementById('list1').innerHTML = arg1.listing1;
	}

	document.getElementById('list2').innerHTML = arg1.listing2;
			document.getElementById('list3').innerHTML = arg1.listing3;
				document.getElementById('list4').innerHTML = arg1.listing4;
					document.getElementById('list5').innerHTML = arg1.listing5;
						document.getElementById('list6').innerHTML = arg1.listing6;
							document.getElementById('list7').innerHTML = arg1.listing7;
								document.getElementById('list8').innerHTML = arg1.listing8;

}

function getListings(state) {
    console.log ( state );
    if ( !state ) {
        return  "bad"
    } else {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (xhttp.responseText) {
                    document.getElementById("listingsarea").style.display = "block";
					listData(xhttp.responseText);
                } else {
                   // noListings();
                   // no listings found
                }
            }
        };
        xhttp.open("GET", `https://www.jola.gq/listingsnear?state=${state}&city=${city}`, true);
        xhttp.send();
    }
}
