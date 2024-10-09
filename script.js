//Preciso criar produtos
//Preciso de identificador que possa ler os produtos
//Preciso criar uma forma de atualizar os produtos
//Preciso deletar os produtos

let produtos = [];

while(true){
    let controle = parseInt(
        prompt(
            "Bem vindo ao controle de produtos\n 1 - Criar\n 2 - Ler\n 3 - Atualizar\n 4 - Deletar"));

        if(isNaN(controle)){
            alert("Programa encerrado");
            break;
        }
        else{
            switch (controle) {
                case 1:
                    criarProduto();
                    break;
                case 2:
                    lerProduto();
                    break;
                case 3:
                    atualizarProduto();
                    break;
                case 4:
                    deletarProduto();
                    break;
            }
        }
}
        
function criarProduto() {
    let nome = prompt("Escreva o nome do novo produto");
    let preco = parseFloat(prompt("Digite um preço"));

    if(nome && preco) {
        let novoProduto = { 
            "id": produtos.length + 1, 
            "nome": nome, 
            "preco": preco 
        };
        produtos.push(novoProduto);
        alert("O produto foi adicionado com sucesso");
    }
        else{
            alert("O nome e o preço são obrigatórios");
            return criarProduto();
        }
    }

function lerProduto(){
    let msg = "";

    if(produtos.length === 0){
        return alert("Não há produtos registrados no momento");
    }

    for(let i = 0; i < produtos.length; i++){
        msg += "ID: " + produtos[i].id + "\n";
        msg += "Nome: " + produtos[i].nome + "\n";
        msg += "Preço: " + produtos[i].preco + "\n";
        msg += "\n";
    }
    alert(msg);
}

function deletarProduto(){
    let deletarIDs = prompt("Digite o número do id para deletar o produto");
    let listaIDs = deletarIDs.split(",").map(Number);

    if(produtos.length === 0){
        return alert("Não há produtos registrados que possam ser deletados");
    }

    if(listaIDs.length > 0){
        for(let i = produtos.length - 1; i >= 0; i--){
            if(listaIDs.includes(produtos[i].id)){
                produtos.splice(i, 1);
            }
        }
        alert("Produto(s) deletado(s) com sucesso");
    }
}

function atualizarProduto(){
    let solicitarID = parseInt(prompt("Digite o número do ID que deseja atualizar"));

    if(solicitarID)
        for(let i = 0; i < produtos.length; i++){
            
            if(produtos[i].id === solicitarID);
            let atualizar = parseInt(prompt("O que deseja atualizar?\n 1 - nome\n 2 - preço"));
            
            switch(atualizar){
                case 1:
                    let nome = prompt("O que deseja mudar no nome?\n Nome antigo: " + produtos[i].nome);
                    produtos[i].nome = nome;
                    alert("Nome mudado com sucesso");
                    
                case 2:
                    let preco = parseFloat(prompt("O que deseja mudar no preço\n Preço antigo: " + produtos[i].preco));
                    produtos[i].preco = preco;
                    alert("Preço mudado com sucesso");
            }
        }
}
