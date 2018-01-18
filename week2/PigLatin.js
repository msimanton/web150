var originalPhrase = prompt("Enter phrase");
var words = originalPhrase.split(" ");
var vowels = "aeiouAEIOU";

if (words.length > 2){
    
for(var n in words){
    var word = words[n];
    var firstOne = "";
    var firstTwo = "";
    var restOfWord = "";
        
    if (vowels.indexOf(word.charAt(0)) > -1){
        document.write(word + "way ");
                              
    } else if (vowels.indexOf(word.charAt(1)) > -1) {
        firstOne = word.slice(0,1);
        restOfWord = word.slice(1);
        document.write(restOfWord + firstOne + "ay ");
                
        
    } else {
        firstTwo = word.slice(0,2);
        restOfWord = word.slice(2);
        document.write(restOfWord + firstTwo + "ay ");
        }
    } 
    
} else {
    document.write("Can not convert");

}
