// Reverse a string 

var statement = "I am sadaf, I am becoming web Dev.";


function reverseStatment(str){
    var reverse = "";

    for(let i = 0 ; i<str.length ; i++){
        let element = str[i];

        reverse = element + reverse;
    }

    return reverse;
}

var reverseWords = reverseStatment(statement);

console.log(reverseWords);