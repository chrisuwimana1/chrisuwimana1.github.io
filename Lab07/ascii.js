

function changeSize() {
	let s = document.getElementById("fontsize");
	if (s.value == "Tiny") {
		document.getElementById("text-area").style.fontSize = "7pt";
	} else if (s.value == "Small") {
		document.getElementById("text-area").style.fontSize = "10pt";
	} else if (s.value == "Large") {
		document.getElementById("text-area").style.fontSize = "16pt";
	} else if (s.value == "Extra Large") {
		document.getElementById("text-area").style.fontSize = "24pt";
	} else if (s.value == "XXL")
		document.getElementById("text-area").style.fontSize = "32pt";
	else {
		document.getElementById("text-area").style.fontSize = "12pt";
	}
}

window.onload = function () {

	var startButton = document.getElementById("start");
	var stopButton = document.getElementById("stop");
	var turbo = document.getElementById("turbo");
	var animationDropDown = document.getElementById("animation");
	var fontSizeDropDown = document.getElementById("fontsize");
	var whichOne = document.getElementById("animation").value;
	var textArea = document.getElementById("text-area");
	var animate

	var timeout = 250;
	animationDropDown.onchange = changeAnimation;
	fontSizeDropDown.onchange = changeSize;

	startButton.onclick = startAnimation;
	
	turbo.onchange = function(){
		console.log("yes");
		if(this.checked==true){
            timeout=50
        }else{
            timeout=250
        }

        clearInterval(animate)
        startAnimation();
	}

	function changeAnimation() {
		let s = document.getElementById("animation");
		if (s.value == "Exercise") {
			document.getElementById("text-area").value = EXERCISE;
			whichOne = "EXERCISE";
		} else if (s.value == "Juggler") {
			document.getElementById("text-area").value = JUGGLER;
			whichOne = "JUGGLER"
		} else if (s.value == "Bike") {
			document.getElementById("text-area").value = BIKE;
			whichOne = "Bike"
		} else if (s.value == "Dive") {
			document.getElementById("text-area").value = DIVE;
			whichOne = "Dive"
		} else {
			document.getElementById("text-area").value = BLANK;
			whichOne = "Blank"
		}
	}

	function startAnimation() {
		console.log(whichOne);
		var its = ANIMATIONS[whichOne].split("=====")
		var i = 0;
		animate = setInterval(function () {
			textArea.className = fontSizeDropDown.value
			textArea.value = its[i]
			if (i == its.length - 1) {
				i = 0
			} else {
				i += 1
			}
		}, timeout);

		startButton.disabled = true
		stopButton.disabled = false;
		animationDropDown.disabled = true;
		turbo.disabled = false;
	}

	stopButton.onclick = function () {
		clearInterval(animate)
		startButton.disabled = false
		stopButton.disabled = true;
		animationDropDown.disabled = false;
		turbo.disabled = true;
	}

};