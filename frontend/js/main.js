// Este arquivo contém o código JavaScript que adiciona interatividade à aplicação frontend, manipulando eventos e fazendo requisições ao backend.

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Função para buscar produtos do backend
    async function fetchProducts() {
        try {
            const response = await fetch('/api/products');
            const products = await response.json();
            displayProducts(products);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    // Função para exibir produtos na página
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Preço: R$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Função para adicionar produto ao carrinho
    function addToCart(productId) {
        console.log(`Produto ${productId} adicionado ao carrinho.`);
        // Aqui você pode implementar a lógica para adicionar o produto ao carrinho
    }

    // Chama a função para buscar produtos ao carregar a página
    fetchProducts();
});