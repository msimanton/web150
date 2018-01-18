var originalPhrase = prompt("Enter word");
var originalWords = originalPhrase.split(" ");
var plWord = "";
var vowels ="aeiouAEIOU";


for (var index in originalWords){
    var word = originalWords[index];
    if (vowels.indexOf(word.charAt(0)) > -1){
        plWord = word + "way ";
    } else if (vowels.indexOf(word.charAt(1)) > -1) {
        plWord = word.slice(1) + word.charAt(0) + "ay ";
    } else {
        plWord = word.slice(2) + word.slice(0,2) + "ay ";
    }
    
}

document.write(plWord);


//this will uppercase the first letter in a list of names
for (n in names) {
    console.log(names[n][0].toUpperCase() + names[n].slice(1))
}