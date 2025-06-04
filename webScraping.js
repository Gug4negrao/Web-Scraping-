
function extractContent(doc){
    let div = document.querySelector("#res");
    doc.querySelectorAll(".container").forEach(c => div.appendChild(c))
}

function getSite(){
    fetch("https://jsonplaceholder.typicode.com/") //Fake API para testes e protótipos - Sem CORS
       .then(resp => {
           if(resp.status != 200) throw new Error("Problemas no servidor");
        
           return resp.text(); 
       })
       .then(text => {
           let d = new DOMParser();
           let doc = d.parseFromString(text, "text/html");
           extractContent(doc);
       })
       .catch(erro => {
           document.querySelector("#res").innerHTML = erro.message;
       })
}

function clickObserver(){
    document.querySelector("#btn").addEventListener("click", getSite);
}

window.onload = clickObserver