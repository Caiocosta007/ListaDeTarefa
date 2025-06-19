  let tarefas = []
  const botaoLimpar = document.createElement("button")

function adicionarTarefa() { //Quando o botão é clicado ativa esse bloco de codigos.

    const inputTarefa = document.getElementById("inputTarefa") //Pega o codigo inteiro do input.
    let tarefa = inputTarefa.value.trim() //pega o valor digitado no input.

    const mensagem = document.getElementById("mensagem") //deixa o P com id mensagem dentro de uma variavel mensagem.

    
    if(tarefa == ""){ //se tarefa = nada
        let mensagemErro = "Adicone uma tarefa real!"; //Declara uma variavel com mensagem.
        mensagem.textContent = mensagemErro; //Pega o P por Id e O textContent escreve o valor de mensagem no p.
        mensagem.style.color = "#A34743"; //Muda a configuração de cor do CSS.
    }

    else{ //senão

        let mensagemSucesso = "Tarefa adicionada!" //Atribui uma string a variavel mensagem.
        mensagem.textContent = mensagemSucesso //Puxa o P com id mensagem.
        mensagem.style.color = "#28A745"; //Muda a configuração de cor do CSS.

        const divLimparLista = document.getElementById("divLimparLista")
        botaoLimpar.className = "botao_lista"
        botaoLimpar.textContent = "Limpar Tudo!"
        botaoLimpar.onclick = () => limparLista()
        divLimparLista.appendChild(botaoLimpar)
 

        tarefas.push(tarefa)  

        renderizarTarefas()

    }

    inputTarefa.value = "" //No fim da execução o input voltará a não ter nada.
}

function renderizarTarefas(){
    const listaTarefas = document.getElementById("listaTarefas") //Pega a tag ul por id.
    listaTarefas.innerHTML = ""
    
    
    for(let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li") //Cria um elemento li no documento html.
        novaTarefa.className ="lista"
        novaTarefa.textContent = tarefas[i] //atribui o texto digitado pelo usuario no li.

        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i) 

        novaTarefa.appendChild(botaoRemover)
        novaTarefa.appendChild(botaoEditar)
        listaTarefas.appendChild(novaTarefa) //Pega a Ul e dentro coloca o elemento li
    }
}

function removerTarefa(i){
    tarefas.splice(i,1)
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.style.color = "#A34743";
    mensagem.textContent = "Tarefa removida"
}

function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa:")
    if(tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        renderizarTarefas()
        const mensagem = document.getElementById("mensagem")
    mensagem.style.color = "#28A745";
    mensagem.textContent = "Tarefa editada"
    }
}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.style.color = "#A34743";
    mensagem.textContent = "Lista de tarefas removida"
}