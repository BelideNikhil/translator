console.log("hello")
const translate_btn=document.querySelector("#translator");
let input_text=document.querySelector("#textarea");
let output=document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function createURL(){
    return serverURL +"?"+"text=" +input_text.value
}
function errorHandler(error) {
    console.log("error occured", error);
    output.innerText="Something is wrong with server! Please try after some time.";
    setTimeout(()=>{
        input_text.value='';
        output.innerText='';
    },2500)
    
}
translate_btn.addEventListener("click", ()=>{
    if(input_text.value!=''){
        fetch(createURL(input_text.value))
        .then(response =>response.json())
        .then(json=>{
            console.log(json.contents)
            output.innerHTML = json.contents.translated;
        })
        .catch(errorHandler)

    }else{
        output.innerText = "Please enter some data to process it";
        setTimeout(()=>{
            output.innerText=''
        },2500)
    }
        
})


