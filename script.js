


const frm = document.forms.registrar;  //declara uma variável que armazena o item em /document/forms/registrar/ 

frm.addEventListener("submit", function(event) {   //cria um eventlistenner na var frm que espera um submit e chama a function passando event como parametro
    event.preventDefault();

    criarItemEmTela();              //chama essa função quando o evento "submit" acontece
});

function criarItemEmTela() {                                        //toda a logica da função que é chamada pelo event listener
    const cbx = document.createElement("input");                    //cria um elemento "input" entro da var cbx
    cbx.setAttribute("type", "checkbox");   //                      //da para o elemento o atributo "tipo checkbox" 
    cbx.classList.add("checkbox");

    cbx.addEventListener("change", function(event) {                // atribui a checkbox um event listenner que ao receber uma "mudança" chama uma função que recebe como parametro evento               
        
        
        if (event.target.checked) {                                                     
        
        event.target.parentElement.parentElement.style.backgroundColor = "gray";}
       
        else {
            event.target.parentElement.parentElement.style.backgroundColor = "white";
            
        }
        
            

    })

    const p = document.createElement("p");   //descricao da task no paragrafo
    p.textContent = frm.tarefa.value;
    p.classList.add("descricao_task");   

    const div = document.createElement("div");  //div q segura a descricao e a checkbox
    div.classList.add("task");  
    div.append(cbx, p);

    const btn = document.createElement("button");       //botão remover
    btn.textContent = "Remover";
    btn.addEventListener("click", function(event) {
        event.target.parentElement.remove();            //o botão para o próprio pai, muito tisti
        
    });
    btn.classList.add("botao_remover");

    const item = document.createElement("div");             //cada item é uma div que contem outra div e o botão
    item.classList.add("item");
    item.append(div, btn);

    const tarefa = document.querySelector("div#tarefa");    
    tarefa.prepend(item);                                       //como o prepend insere antes? só Deus sabe

    frm.tarefa.value = "";
}