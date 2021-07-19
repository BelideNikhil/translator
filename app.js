console.log("hello")
var translate_btn=document.querySelector("#translator");
var input_text=document.querySelector("#textarea");
var output_catch=document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function createURL(){
    return serverURL +"?"+"text=" +input_text.value
}
function errorHandler(error) {
    console.log("error occured", error);
    output_catch.innerText="Something wrong with server! try again after some time";
    setTimeout(()=>{
        input_text.value='';
        output_catch.innerText='';
    },2000)
    
}
translate_btn.addEventListener("click", ()=>{
    if(input_text.value!=''){
        fetch(createURL(input_text.value))
        .then(response =>response.json())
        .then(json=>{
            output_catch.innerText = json.contents.translated;
        })
        .catch(errorHandler)

    }else{
        output_catch.innerText = "Please enter some data to process it";
        setTimeout(()=>{
            output_catch.innerText=''
        },2500)
    }
        
})


