# DNC Book Hub

DNC Book Hub é uma aplicação web que permite aos usuários pesquisar livros de um conjunto de dados mock. O projeto foi criado com React e consiste em uma única página com uma funcionalidade de pesquisa. Os usuários podem marcar livros como "Já Li!" ou "Quero Ler!".

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios e arquivos:

```
dnc-book-hub
│   README.md
│   package.json
│
└───src
│   │   App.jsx
│   │   index.js
│   │   mock.js
│   │
│   └───assets
│       │   image
│
└───public
    │   index.html
```

## App.jsx

Este é o arquivo principal da aplicação que define o layout e a funcionalidade do aplicativo. A aplicação possui uma barra de navegação, uma entrada de pesquisa e uma seção para exibir detalhes do livro pesquisado. O estado do aplicativo é gerenciado usando React Hooks.

Os usuários podem pesquisar livros inserindo um termo de pesquisa. A aplicação procura um livro que corresponda ao termo em seu nome, autor ou categoria. Quando um livro é encontrado, seus detalhes são exibidos na seção de detalhes do livro. Os usuários podem então marcar o livro como lido ou adicionar à sua lista de leitura. Quando uma dessas ações é realizada, uma mensagem é exibida por 3 segundos​1​.

## mock.js

Este arquivo contém um array de objetos de livro. Cada objeto representa um livro e contém as seguintes propriedades: nome, categoria, imagem, descricao e autor. Esta é a base de dados a partir da qual os livros são pesquisados.

```
[
  {
    nome: "Nome do Livro 1",
    categoria: "Categoria do Livro 1",
    imagem: "Link da Imagem do Livro 1",
    descricao: "Descrição do Livro 1",
    autor: "Autor do Livro 1",
  },
  // Mais livros...
]
```

Por favor, note que a citação acima é apenas um exemplo de um objeto de livro no arquivo mock.js. A estrutura real pode variar, e a citação acima pode não representar o conteúdo exato do arquivo mock.js​2​.

## Como usar

1. Clone o repositório
2. Instale as dependências com npm install
3. Inicie o aplicativo com npm start

## Contribuindo

Este é um projeto aberto e aceitamos contribuições. Sinta-se à vontade para abrir um issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT.

Por favor, note que esta descrição é baseada na estrutura e no código disponíveis no repositório até a data de minha última visualização (29 de maio de 2023). Para informações mais atualizadas, consulte o repositório diretamente.
