const inputField = document.querySelector(".txt-input");
const btnTranslate = document.querySelector(".btn-translate");
const outputField = document.querySelector(".output");
btnTranslate.addEventListener("click",()=>{
    
    const url = queryUrl(inputField.value);
    fetch(url).then(response => response.json())
    .then(json => {
        const translatedText = json.contents.translated;
        outputField.innerText = translatedText;
    })
    .catch(errorHandler);
    
});

function queryUrl(queryValue){
    const baseUrl = "https://api.funtranslations.com/translate/minion.json";

    const queryUrlLink = baseUrl + "?text=" + queryValue;
    
    return queryUrlLink;
}

function errorHandler(error){
    alert("Something is wrong with server! try again after sometime");
}
