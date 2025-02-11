// Inicializar um array vazio

let produtos = [];

// Função para buscar os produtos  do arquivo no formato JSON
async function carregarProdutos() {
    try{
        // Buscando o arquivo JSON
        const resposta = await fetch('produtos.json');

        //Convertendo de JSON para objeto
        produtos = await resposta.json();

        // Vamos chamar a função que exibe os produtos
        exibirProdutos();
    }catch(erro){
        console.log('Erro ao carregar o arquivo: ', erro);
        alert('Erro ao  carregar os produtos ...');
    }
    
}

// Função para adicionar os produtos no arquivo JSON
function adicionarProduto() {

    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const disponivel = document.getElementById('disponivel').value === 'true';

    if (nome && !isNaN(preco)) {
        const novoProduto = {
            nome: nome,
            preco: preco,
            disponivel: disponivel,
        };

        produtos.push(novoProduto); // Adiciona ao array

        // Limpar o formulário
        document.getElementById('nome').value = '';
        document.getElementById('preco').value = '';
        document.getElementById('disponivel').value = 'true';

        exibirProdutos(); // Atualizar a exibição dos produtos
    } else {
        alert("Por favor, preencha o nome e o preço do produto.");
    }
}


function exibirProdutos() {
    const listaProdutosDiv = document.getElementById('lista-produtos');
    listaProdutosDiv.innerHTML = ''; // Limpa a lista antes de exibir

    produtos.forEach((produto, index) => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const nomeH3 = document.createElement('h3');
        nomeH3.textContent = produto.nome;

        const precoP = document.createElement('p');
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const disponibilidadeP = document.createElement('p');
        disponibilidadeP.textContent = `Disponibilidade: `;

        const spanDisponibilidade = document.createElement('span');

        spanDisponibilidade.textContent = produto.disponivel ? 'Disponível' : 'Indisponível';
        
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');

        disponibilidadeP.appendChild(spanDisponibilidade);

        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(disponibilidadeP);

        listaProdutosDiv.appendChild(produtoDiv);
    });
}

// Carregar produtos