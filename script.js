var nightMode = false;

function night() {
	if(nightMode == false) {
		document.body.style.backgroundColor = "#131313";
		if(document.getElementById("paragraph")) {
			document.getElementById("paragraph").style.color = "White";
			document.getElementById("paragraph2").style.color = "White";
			document.getElementById("paragraph3").style.color = "White";
			document.getElementById("paragraph4").style.color = "White";
			document.getElementById("paragraph5").style.color = "White";
			document.getElementById("paragraph6").style.color = "White";
			document.getElementById("paragraph7").style.color = "White";
		}
		if(document.getElementById("paragraph8")) {
			document.getElementById("paragraph8").style.color = "White";
		}
		if(document.getElementById("paragraph9")) {
			document.getElementById("paragraph9").style.color = "White";
		}
		if(document.getElementById("paragraph10")) {
			document.getElementById("paragraph10").style.color = "White";
		}
		if(document.getElementById("diffName")) {
		document.getElementById("diffName").style.color = "White";
		document.getElementById("diffName2").style.color = "White";
		document.getElementById("diffName3").style.color = "White";
		document.getElementById("diffName4").style.color = "White";
		document.getElementById("diffName5").style.color = "White";
		document.getElementById("diffName6").style.color = "White";	
		document.getElementById("diffName7").style.color = "White";	
		}
		return nightMode = true;
	} else if (nightMode == true) {
		document.body.style.backgroundColor = "White";	
		if(document.getElementById("paragraph")) {
			document.getElementById("paragraph").style.color = "#252525";
			document.getElementById("paragraph2").style.color = "#252525";
			document.getElementById("paragraph3").style.color = "#252525";
			document.getElementById("paragraph4").style.color = "#252525";
			document.getElementById("paragraph5").style.color = "#252525";
			document.getElementById("paragraph6").style.color = "#252525";
			document.getElementById("paragraph7").style.color = "#252525";
		}
		if(document.getElementById("paragraph8")) {
			document.getElementById("paragraph8").style.color = "#252525";
		}
		if(document.getElementById("paragraph9")) {
			document.getElementById("paragraph9").style.color = "#252525";
		}
		if(document.getElementById("paragraph10")) {
			document.getElementById("paragraph10").style.color = "#252525";
		}
		if(document.getElementById("diffName")) {
		document.getElementById("diffName").style.color = "#252525";
		document.getElementById("diffName2").style.color = "#252525";
		document.getElementById("diffName3").style.color = "#252525";
		document.getElementById("diffName4").style.color = "#252525";
		document.getElementById("diffName5").style.color = "#252525";
		document.getElementById("diffName6").style.color = "#252525";	
		document.getElementById("diffName7").style.color = "#252525";
		}
		return nightMode = false;
	}
}
