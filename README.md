# Meu E-commerce

Este é um projeto de e-commerce desenvolvido com arquitetura de frontend e backend. O frontend utiliza HTML, CSS e JavaScript, enquanto o backend é feito em Python com Flask e utiliza PostgreSQL como banco de dados.

## Estrutura do Projeto

```
e-commerce
├── backend
│   ├── app.py
│   ├── models
│   │   └── __init__.py
│   ├── routes
│   │   └── __init__.py
│   ├── controllers
│   │   └── __init__.py
│   ├── config.py
│   └── requirements.txt
├── frontend
│   ├── index.html
│   ├── css
│   │   └── style.css
│   └── js
│       └── main.js
├── README.md
└── .gitignore
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até a pasta do projeto:
   ```
   cd e-commerce
   ```

3. Instale as dependências do backend:
   ```
   cd backend
   pip install -r requirements.txt
   ```

4. Configure o banco de dados PostgreSQL conforme as instruções em `backend/config.py`.

5. Execute a aplicação backend:
   ```
   python app.py
   ```

6. Para acessar o frontend, abra o arquivo `frontend/index.html` em seu navegador.

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python, Flask
- **Banco de Dados:** PostgreSQL

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Minha nova feature'`).
4. Faça push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.