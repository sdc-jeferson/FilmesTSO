# 🍿 FilmesTSO

FilmesTSO é um aplicativo web simples para visualização de informações sobre filmes, salvar filmes favoritos e assistir a trailers.

## 🌐 Deploy

O FilmesTSO está hospedado e pode ser acessado online. Você pode experimentar a versão online em [FilmesTSO](https://prime-flix-azure.vercel.app/).

## 📽️ Funcionalidades

- Visualizar filmes em cartaz
- Visualizar detalhes de um filme específico
- Salvar filmes como favoritos
- Assistir a trailers dos filmes

## 💻 Tecnologias Utilizadas

- React.js
- React Router
- API do The Movie Database (TMDb)
- HTML
- CSS

## 🚀 Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/sdc-jeferson/FilmesTSO.git
```

2. Instale as dependências:

```
cd FilmesTSO
npm install

#or

yarn
```

3. Execute o aplicativo:

```
npm run dev

#or

yarn dev
```

## 📁 Estrutura de Arquivos

- src/components: Componentes reutilizáveis
- src/pages: Páginas do aplicativo
- src/services: Configuração da API e funções de requisição
- src/App.js: Componente principal que define as rotas do aplicativo
- public: Arquivos públicos, incluindo o ícone do aplicativo e o HTML base

## 🛣️ Rotas

| Rota             | Componente  | Descrição                                                  |
| ---------------- | ----------- | ---------------------------------------------------------- |
| `/`              | `Home`      | Página inicial, exibe os filmes em cartaz                  |
| `/movie/:id`     | `Movie`     | Detalhes de um filme específico                            |
| `/favorites`     | `Favorites` | Lista dos filmes salvos como favoritos                     |
| `Qualquer outra` | `Error`     | Página de erro 404, exibida quando a rota não é encontrada |

## 🤝 Contribuindo

1. Fork este repositório.
2. Crie uma branch com a sua feature (git checkout -b minha-feature).
3. Faça commit das suas mudanças (git commit -m 'Adicionar nova .
4. funcionalidade').
5. Faça push para a branch (git push origin minha-feature)
   Abra um Pull Request.

## ✍️ Autor

Desenlvido por Jeferson 🚀.

## 📝 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/license/mit).
