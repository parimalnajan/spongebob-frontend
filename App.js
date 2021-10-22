var btnTranslate= document.querySelector("#btn-translate");
var btnCopy=document.querySelector("#btn-copy");
var txtInput= document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var alertSpan=document.querySelector("#alert");

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
function copyLink(){
   // navigator.clipboard.writeText(outputDiv.value);
   outputDiv.select();
   outputDiv.setSelectionRange(0,99999)
   navigator.clipboard.writeText(outputDiv.value)
   alertSpan.setAttribute("style","visibility: visible");
   setTimeout(()=>{alertSpan.setAttribute("style","visibility: hidden")},3000)
 };


btnTranslate.addEventListener("click",  clickEvenetHandler)
btnCopy.addEventListener("click", copyLink)