# mybooks

uma pequena pratica sobre o typescript

## Detalhes

mybooks é um aplicativo de navegador da web com o qual você pode gerenciar entrada e saida de livros na plataforma.

## como testar as rotas ?
## Exemplo


## get http://localhost:4000/author
  
    deve retornar o exemplo abaixo
  [
    {
      "id": 1,
      "name": "naruto",
      "idade": 25
    },
    {
      "id": 2,
      "name": "harry potter",
      "idade": 30
    }
  ]

 status: 200 ok

## post http://localhost:4000/author
  
  deve enviar o exemplo abaixo
```json
  {
    "name": "naruto",
    "idade": 25
  }
```
  status: 201 Created
  * todosos campos são obrigatórios 

## get http://localhost:4000/books

  deve retornar o exemplo abaixo
[
  {
    "id": 15,
    "name": "teste 10",
    "description": "magia",
    "classification": "30",
    "authorId": 1
  },
  {
    "id": 16,
    "name": "teste 10",
    "description": "magia",
    "classification": "30",
    "authorId": 1
  }
]

## post http://localhost:4000/books

  deve enviar o exemplo abaixo
 
  {
    "name": "teste 10",
    "description": "magia",
    "classification": 30,
    "authorId": 1
  }
 
  status: 201 Created
    * todosos campos são obrigatórios 
    classification deve ser um numero,
    authorId deve ser um id existente,
    Deve enviar um id existente pelo params 

## put http://localhost:4000/books/:id

  deve enviar o exemplo abaixo

  { 
    "name": "teste 10",
    "description": "magia",
    "classification": 30,
    "authorId": 1
  }
  status: 201 Created
    * todosos campos são obrigatórios 
    classification deve ser um numero,
    authorId deve ser um id existente,
    Deve enviar um id existente pelo params 

## get http://localhost:4000/books/all/:id

  deve receber o exemplo abaixo

  [
    {
      "author": "vespa",
      "books": {
        "id": 16,
        "name": "teste 10",
        "classification": "30",
        "description": "magia"
      }
    },
    {
      "author": "Giovanne",
      "books": {
        "id": 17,
        "name": "teste 10",
        "classification": "30",
        "description": "magia"
      }
    },
  ]

A ordem dos books estão em decrescente de acordo com a classificação e 
devera ser passado como params um numero de filtragem da classificação que desejar ver exemplo: se passar 10 so sera mostrado os books com classificação maior que 10
 

## get http://localhost:4000/categories

  deve receber o exemplo abaixo

[
  {
    "id": 5,
    "name": "Humor"
  },
  {
    "id": 1,
    "name": "Terror"
  },
  {
    "id": 6,
    "name": "Receitas"
  },
  {
    "id": 2,
    "name": "Dicas de moda"
  }
]

Essa rota lista todas as categorias

## post http://localhost:4000/categories

  deve enviar o exemplo abaixo

  {
    "name": "Humor"
  }

    status: 201 Created
    o campo name obrigatório 
    Essa rota lista todas as categorias


  
 

 

 