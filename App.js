var btnTranslate= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL+ "?"+ "text="+text;

}

function errorHandler(error){
    console.log("error occured :"+ error)
    alert(("Server error, Try after some time. error type:", error))
}

function clickEvenetHandler(){
    console.log("Input detected:")
    console.log(txtInput.value);

    fetch(getTranslationURL(txtInput.value))
    .then(response=>response.json()
    .then(json=>{
        if(response.status!==200){
        var err=json.error.message;outputDiv.innerText=err;alert(err)}
        else{
        var translatedText=json.contents.translated;
                    outputDiv.innerText=translatedText;}})
    .catch(errorHandler)
    );


}

btnTranslate.addEventListener("click",  clickEvenetHandler)