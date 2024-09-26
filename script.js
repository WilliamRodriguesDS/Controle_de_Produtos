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

    if (nome && preco) {
        let novoProduto = { "id": produtos.length + 1, "nome": nome, "preco": preco };
        produtos.push(novoProduto);
        alert("O produto foi adicionado com sucesso");
    }
    else {
        alert("O nome e o preço são obrigatórios");
        return criarProduto();
    }
}

function lerProduto(){
    let msg = "";
    for(let i = 0; i < produtos.length; i++){
        msg += "ID: " + produtos[i].id + "\n";
        msg += "Nome: " + produtos[i].nome + "\n";
        msg += "Preço: " + produtos[i].preco + "\n";
        msg += "\n";
    }
    alert(msg);
}

function deletarProduto(){
    let delet = parseInt(prompt("Digite o número do id para deletar o produto"));
    if(delet){
        for(let i = 0; i < produtos.length; i++){
            if(produtos.id === delet){
                produtos.splice(i, 1);
                alert("Produto deletado com sucesso");
            }
        }
    }
}
