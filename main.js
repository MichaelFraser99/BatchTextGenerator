//Hard coded *name* for now

var valuesToReplace = []
var keysToValues = new Map();

//Currently removes all punctuation and doesnt add it back in - FIX!
function scanText(str) {
    var words = str.split(/\n| /);
    for (i = 0; i < words.length; i++) {
        console.log(words[i]);
        if (valuesToReplace.includes(words[i])) {
            words[i] = replaceText(words[i]);
        } else if (valuesToReplace.includes(words[i].substr(0, words[i].length-1))) {
            var strWithoutPunctuation = replaceText(words[i].substr(0, words[i].length-1));
            words[i] = strWithoutPunctuation.concat(words[i].substr(-1));
        } else if(words[i] == "") {
            words[i] = "\n\n";
        }
    }
    words = words.join(" ");
    updateOutputArea(words);
}

function replaceText(str) {
    return keysToValues.get(str).replaceWith;
}

function updateOutputArea(str) {
    let outputArea = document.getElementById("outputLabel");
    outputArea.innerHTML = str;
}

function readInputArea() {
    text = document.getElementById("passage").value;
    return text;
}

function generateOutput() {
    
    keysToValues.set("*name*", {replaceWith: document.getElementsByClassName("replacementPairValue")[0].value});
    
    var input = readInputArea();
    
    scanText(input);
}

function main() {
    valuesToReplace.push("*name*");

    var generateButton = document.getElementById("generateButton");
    
    generateButton.addEventListener("click", function() {
        generateOutput();
    });
}

document.addEventListener("DOMContentLoaded", main);