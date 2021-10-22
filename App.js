var btnTranslate= document.querySelector("#btn-translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


var serverURL="https://spongebro2.herokuapp.com/t/";

function getTranslationURL(text){
    return serverURL+text;

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
        var translatedText=json.result;
        console.log(translatedText)
                    outputDiv.innerText=translatedText;}})
    .catch(errorHandler)
    );


}

btnTranslate.addEventListener("click",  clickEvenetHandler)