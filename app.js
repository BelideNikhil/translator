console.log("hello")
var input_text=document.querySelector("#textarea");
var translate_btn=document.querySelector("#translator");
var output_catch=document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function createURL(){
    return serverURL +"?"+"text=" +input_text.value
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
translate_btn.addEventListener("click", ()=>{
    
    translate_btn.innerHTML="Your data is being translated..."
    setTimeout(()=>{
        translate_btn.innerHTML="Translate"},3000);
        fetch(createURL(input_text.value))
       .then(response =>response.json())
       .then(json=>{
           output_catch.innerText = json.contents.translated;
        })
        .catch(errorHandler)
})


