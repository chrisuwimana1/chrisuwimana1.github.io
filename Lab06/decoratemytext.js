
function biggerDecoration(){
	setInterval(function(){
		var size = parseInt(window.getComputedStyle(document.getElementById("text-area"), null).getPropertyValue('font-size'));
		size += 2;
		document.getElementById("text-area").style.fontSize = size + "pt";
	},500);
}

function pigLatin(){

	var sentence = document.getElementById("text-area").value;
	if(typeof(sentence)!=='string'){
		console.log('please you must enter a valid string. The value you entered is not a string');
		return false;
	}
  //convert the sentence to lowercase letters and split the sentence into an array of words
  var words = sentence.toLowerCase().split(" ");
  //create an array to hold the new pigLatin sentence
  var pigLatinSentence = [];
  
  //loop through each word in the new array and split it to an array of characters
  for(var i=0;i<words.length;i++){
  	letters = words[i].split("");

    //extract the first element of the array, concantenate with "ay" and push it to the array of letters
    letters.push(letters.splice(0,1)+"ay");
    
    //join the letters to form a new word
    word = letters.join('');
    
    //if it is the first word of the sentence, convert the first letter to UpperCase
    if(i===0){
    	word = word.slice(0,1).toUpperCase() + word.slice(1);
    }
    
    //push the newly formed words to the pigLatinSentence array
    pigLatinSentence.push(word);
   }

  //join the words to form a new sentence
  pigLatinSentence = pigLatinSentence.join(" ");
  document.getElementById("text-area").value = pigLatinSentence;
}

function malkovitch(){

		var sentence = document.getElementById("text-area").value;
	if(typeof(sentence)!=='string'){
		console.log('please you must enter a valid string. The value you entered is not a string');
		return false;
	}
  //convert the sentence to lowercase letters and split the sentence into an array of words
  var words = sentence.split(" ");
  //create an array to hold the new pigLatin sentence
  
  //loop through each word in the new array and split it to an array of characters
  for(var i=0;i<words.length;i++){
  	if (words[i].length >= 5){
  		words[i] = "Malkovitch"
  	}
  }

  var malkovitchSentence = words.join(" ");
  document.getElementById("text-area").value = malkovitchSentence;
}

window.onload = function(){
	let s=document.getElementById("bling-check-box");
	//let biggerDecoration = document.getElementById("bigger-decorations") 
	// let pigLatin = document.getElementById("pig-latin");
	// let malkovitch = document.getElementById("malkovitch");

	s.onchange=function(){
		if (s.checked){
			document.getElementById("text-area").className ="green-text-area";
			document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
		}else{
			document.getElementById("text-area").classList.remove("green-text-area")
			document.body.style.backgroundImage = null;

		}
	}
	document.getElementById("bigger-decorations").onclick = biggerDecoration;
	document.getElementById("malkovitch").onclick = malkovitch;
	document.getElementById("pig-latin").onclick = pigLatin;
};
