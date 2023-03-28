# mybooks

  uma pequena pratica sobre o typescript

## Detalhes

   mybooks é um aplicativo de navegador da web com o qual você pode gerenciar entrada e saida de livros na plataforma.

## como testar as rotas ?
 ## link `http://localhost:4000`
## Exemplo

## get `/author`
- deve retornar o exemplo abaixo
```json
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
```

* status: 200 ok

## post `/author`

deve enviar o exemplo abaixo

```json
{
  "name": "naruto",
  "idade": 25
}
```

* status: 201 Created
* todosos campos são obrigatórios

## get `/books`

- deve retornar o exemplo abaixo

```json
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
```

## post `/books`

- deve enviar o exemplo abaixo
```json
  {
    "name": "teste 10",
    "description": "magia",
    "classification": 30,
    "authorId": 1
  }
```
* status: 201 Created 
\* todosos campos são obrigatórios,
* classification deve ser um numero,
* authorId deve ser um id existente,
* Deve enviar um id existente pelo params

## put `/books/:id`

- deve enviar o exemplo abaixo
```json
  {
    "name": "teste 10",
    "description": "magia",
    "classification": 30,
    "authorId": 1
  }
```
* status: 201 Created 
\* todosos campos são obrigatórios,
* classification deve ser um numero,
* authorId deve ser um id existente,
* Deve enviar um id de um book existente pelo params

## get `/books/all/:id`

- deve receber o exemplo abaixo
```json
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
```
A ordem dos books estão em decrescente de acordo com a classificação e
devera ser passado como params um numero de filtragem da classificação que desejar ver exemplo: se passar 10 so sera mostrado os books com classificação maior que 10

## get `/categories`

- deve receber o exemplo abaixo
```json
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
```
* Essa rota lista todas as categorias

## post  `/categories`

- deve enviar o exemplo abaixo
```json
  {
   "name": "Humor"
  }
```
* status: 201 Created
* o campo name obrigatório
* Essa rota lista todas as categorias
