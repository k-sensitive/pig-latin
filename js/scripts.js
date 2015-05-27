var pigLatin = function(phrase) {
  var finalArray = []
  var phraseArray = phrase.split(" ")
  phraseArray.forEach(function(word) {
    var vowelIndex = findVowelIndex(word);
    if (vowelIndex === 0) {
      var finalPhrase = word.concat("ay");
    } else {
      var firstLetter = word.slice(0,vowelIndex);
      var endOfWord = word.slice(vowelIndex, word.length);
      var finalPhrase = endOfWord.concat(firstLetter).concat("ay");
    }
    finalArray.push(finalPhrase);
  });
  return finalArray.join(" ");
}



var findVowelIndex = function(phrase) {
  for(var i = 0; i < phrase.length; ++i) {
    if (phrase[i].toLowerCase() === "a" || phrase[i].toLowerCase() === "e" || phrase[i].toLowerCase() === "i" || phrase[i].toLowerCase() === "o" || phrase[i].toLowerCase() === "u") {
      if (phrase[i].toLowerCase() === "u") {
        if (phrase[i-1] === "q" || phrase[i-1] === "Q") {
          return i+1;
        }
      }
      return i;
    }
  }
}

$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    var phrase = $("input#phrase").val();
    var result = pigLatin(phrase);
    $("#translation").text(result);
    $("#results").show();
    
    event.preventDefault();
  });
});
