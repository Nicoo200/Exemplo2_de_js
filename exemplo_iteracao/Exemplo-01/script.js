const produtos = {
    produto1: {
        nome: "Camiseta Algodão Premium",
        preco: 59.90,
        disponivel: true,
    },
    produto2: {
        nome: "Calça Jeans Slim Fit",
        preco: 129.90,
        disponivel: false,
    },
    produto3: {
        nome: "Tênis Esportivo Runner",
        preco: 199.90,
        disponivel: true,
    },
};

// Pegar o elemento HTML com o id="listar-produtos"
const listaProdutosDiv = document.getElementById("lista-produtos");

// Usando o loop for In para interar sobre as propriedades do objeto produtos
for(const key in produtos){
    if(produtos.hasOwnProperty(key)){
        //hasOwnProperty garante que estamos interando sobre as propriedades do objeto
        const produto = produtos[key];

        // Vamos criar os elementos HTML para cada produto
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        // Vamos criar o elemento para exibir o nome
        const nomeH3 = document.createElement('h3');

        // Vamos exibir o nome do produto
        nomeH3.textContent = produto.nome;

        // Vamos criar o elemento <p> para exibir o preço formatado
        const precoP = document.createElement('p');

        // Vamos exibir o preço do produto
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const disponibilidadeP = document.createElement('p');
        disponibilidadeP.textContent = `Disponibilidade: `;

        const spanDisponibilidade = document.createElement('span');
        spanDisponibilidade.textContent = produto.disponivel ? `Disponível` : `Indisponível`;
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');

        disponibilidadeP.appendChild(spanDisponibilidade);

        // Adiciona os elementos produto
        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(disponibilidadeP);

        // Adicionar produto à lista de produtos no HTML
        listaProdutosDiv.appendChild(produtoDiv);
    }
}
