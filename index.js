var translateInput = document.querySelector("#input");
var translateButton = document.querySelector("#btn");
var translateOutput = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json"

function translationUrl(input) {
    return url + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something is wrong. Try again later.")
}

function clickHandler() {
    var inputText = translateInput.value;


    fetch(translationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;

            translateOutput.innerText = translatedText;
        })
        .catch(errorHandler)
};


translateButton.addEventListener("click", clickHandler)
