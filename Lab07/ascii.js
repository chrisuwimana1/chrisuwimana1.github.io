function changeAnimation(){
		let s=document.getElementById("animation");
		if (s.value == "Exercise"){
			document.getElementById("text-area").value = EXERCISE;
		}else if (s.value == "Juggler"){
			document.getElementById("text-area").value = JUGGLER;
		}else if (s.value == "Bike"){
			document.getElementById("text-area").value = BIKE;
		}else if (s.value == "Dive"){
			document.getElementById("text-area").value = DIVE;
		}else {
			document.getElementById("text-area").value = BLANK;
		}
}

function changeSize(){
		let s=document.getElementById("fontsize");
		if (s.value == "Tiny"){
			document.getElementById("text-area").style.fontSize = "7pt";
		}else if (s.value == "Small"){
			document.getElementById("text-area").style.fontSize = "10pt";	
		}else if (s.value == "Large"){
			document.getElementById("text-area").style.fontSize = "16pt";
		}else if (s.value == "Extra Large"){
			document.getElementById("text-area").style.fontSize = "24pt";
		}else if(s.value == "XXL")
			document.getElementById("text-area").style.fontSize = "32pt";
		else {
			document.getElementById("text-area").style.fontSize = "12pt";
		}
}

function startAnimation(){

	let s=document.getElementById("text-area");
	if (s.value !== BLANK){
		document.getElementById("myBtn").disabled = false;
	}else{
		console.log("BLANK")
	}
}

window.onload = function(){

	document.getElementById("animation").onchange = changeAnimation;
	document.getElementById("fontsize").onchange = changeSize;
	document.getElementById("start").onclick = startAnimation;
};