//filter function

String.prototype.filter = function(bannedWords){
    
    var queryWords = this.split(" ");
    console.log(bannedWords.length)
    for (let i =0 ; i<bannedWords.length; i++){
        if(queryWords.includes(bannedWords[i])){
            console.log("yes")
            let index = queryWords.indexOf(bannedWords[i]);
            queryWords.splice(index,1);
        }
    }

    return queryWords.join(" ");
}

console.log("I am not going to work".filter(["not"]));

//Bubble sort algorithm

Array.prototype.bubbleSort_algo = function() 
{
var is_sorted = false;
 while (!is_sorted) 
 {
    is_sorted = true;
    for (var n = 0; n < this.length - 1; n++) 
    {
      if (this[n] > this[n+1]){
        var x = this[n+1];
        this[n+1] = this[n];
        this[n] = x;
        is_sorted = false;
      }
    }
  }
  return this;
};

console.log([6,4,0, 3,-2,1].bubbleSort_algo());