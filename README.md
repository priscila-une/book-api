# <p align="center">📚 API cadastro de livros</p>
Esta API foi desenvolvida em [Nodejs](https://nodejs.org/en), salvando os dados no [MongoDB](https://www.mongodb.com/) e deploy no [Render](https://render.com/)</br>
Funcionalidades:
- listar
- cadastrar
- atualizar
- deletar livros.


## :large_blue_diamond: Endpoints

### :small_blue_diamond: GET 

- **URL**: `book-api-cfse.onrender.com/books`
- **Descrição**: Retorna a lista dos livros cadastrados.


### :small_blue_diamond: POST 

- **URL**: `book-api-cfse.onrender.com/books`
- **Descrição**: Cadastra um livro.
- **Corpo da Requisição**:
  
  ```json
  {
    "title": "string",
    "author": "string",
    "category": "string",
    "publisher": "string",
    "year": "string",
    "pages": "string",
    "image": "string"
  }


### :small_blue_diamond: PATCH

- **URL**: `book-api-cfse.onrender.com/books/:id`
- **Descrição**: Atualizar recursos de forma parcial
- **Parâmetro**: id: ID do livro
- **Corpo da Requisição**
  
   ```json
  {
    "title": "string",
  }

### :small_blue_diamond: DELETE

- **URL**: `book-api-cfse.onrender.com/books/:id`
- **Descrição**: Deleta o livro pelo id
- **Parâmetro**: id: ID do livro

## 
<h3 align="center"> Feito com ♥ by Evelin Une </h3>
<h3 align="center">
<a href="https://www.linkedin.com/in/evelin-une/" target="_blank">
  <img src="https://img.shields.io/badge/-LinkedIn-511281?style=flat&logo=linkedin&logoColor=white" width="100px">
</a> 
</h3>
