## API de Autenticação com JWT e Middlewares

Esta API foi desenvolvida com o objetivo de estudar a criação de APIs de autenticação utilizando tokens JWT (JSON Web Tokens) e o uso de middlewares no Express. A API fornece funcionalidades essenciais para autenticação e autorização de usuários, além de demonstrar como os middlewares podem ser utilizados para proteger rotas e gerenciar a lógica de autenticação.

- **Registro de Usuário**: Implementa o fluxo de cadastro de novos usuários, armazenando suas credenciais de forma segura.
- **Login de Usuário**: Autentica os usuários registrados, gerando um token JWT que deve ser utilizado para acessar rotas protegidas.
- **Validação de Token**: Um middleware personalizado verifica a validade dos tokens JWT em cada requisição, garantindo que apenas usuários autenticados possam acessar determinadas rotas.
- **Proteção de Rotas**: A API utiliza middlewares para proteger rotas sensíveis, assegurando que o usuário esteja autenticado antes de permitir o acesso.


## Endpoints

### Auth

- `POST /api/auth/login`
  - **Descrição**: Faz login de um usuário na aplicação.
  - **Parâmetros (body)**:
    ```json
    {
      "email": "johndoe@gmail.com",
      "password": "john123"
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ5YW5AZ21haWwuY29tIiwiaWF0IjoxNzIzNjc5MDY3LCJleHAiOjE3MjM2ODI2Njd9.eer9treZVjr7FYldMCs4_vzHN1QrPE7dvazAkDpnUko"
    }
    ```

- `POST /api/auth/register`
  - **Descrição**: Faz o registro de um usuário na aplicação.
  - **Parâmetros (body)**:
    ```json
    {
      "username": "John Doe",
      "email": "johndoe@gmail.com",
      "password": "john123"
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "data": {
          "username": "John Doe",
          "email": "johndoe@gmail.com",
          "role": "standard",
          "createdAt": "2024-08-14T23:51:19.121Z",
          "updatedAt": "2024-08-14T23:51:19.121Z"
      }
    }
    ```

- `POST /api/auth/register`
  - **Descrição**: Testa se o token do usuário é valído.
  - **Headers**:
    `Authorization`: `Bearer <token>`
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "Seja bem vindo(a) John Doe"
    }
    ```
    
### Auth

- `GET /api/admin/users`
  - **Descrição**: Retorna os dados dos usuários da aplicação.
  - **Headers**:
    `Authorization`: `Bearer <token>`
  - **Exemplo de Resposta**:
    ```json
    {
      "data": [
          {
              "id": "fe286d20-8f06-4f1b-83c0-c0e015d0eb17",
              "username": "Ryan",
              "email": "ryan@gmail.com",
              "role": "admin"
          },
          {
              "id": "8bff695f-9ee1-4bf5-aa7a-52a43de712ab",
              "username": "John Doe",
              "email": "johndoe@gmail.com",
              "role": "standard"
          }
      ]
    }
    ```

- `PUT /api/admin/users/:id`
  - **Descrição**: Atualiza o cargo de um usuário da aplicação.
  - **Headers**:
    `Authorization`: `Bearer <token>`
  - **Parâmetros (body)**:
    ```json
    {
      "role": "admin"
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "John Doe had his role updated to admin."
    }
    ```

- `GET /api/admin/users/:id`
  - **Descrição**: Retorna os dados de um usuário da aplicação.
  - **Headers**:
    `Authorization`: `Bearer <token>`
  - **Exemplo de Resposta**:
    ```json
    {
      "data": {
          "id": "8bff695f-9ee1-4bf5-aa7a-52a43de712ab",
          "username": "John Doe",
          "email": "johndoe@gmail.com",
          "role": "admin",
          "createdAt": "2024-08-15T12:38:23.231Z",
          "updatedAt": "2024-08-15T12:38:23.231Z"
      }
    }
    ```

- `DELETE /api/admin/users/:id`
  - **Descrição**: Deleta um usuário da aplicação.
  - **Headers**:
    `Authorization`: `Bearer <token>`
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "User deleted successfully.",
      "data": {
          "id": "fe286d20-8f06-4f1b-83c0-c0e015d0eb17",
          "username": "John Doe",
          "email": "johndoe@gmail.com",
          "role": "standard",
          "createdAt": "2024-08-15T12:56:44.239Z",
          "updatedAt": "2024-08-15T12:56:44.239Z"
      }
    }
    ```

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado

### Passos para execução

1. Clone este repositório:

```env
git clone https://github.com/RyannBenjamim/Auth_API
```

2. Instale as dependências:

```env
npm install
```

3. Inicie o servidor:

```env
npm run dev
```

## Contato

Se você tiver alguma dúvida ou sugestão sobre este projeto, sinta-se à vontade para entrar em contato com Ryan Costa Benjamim via [meu site](https://ryancostaportfolio.netlify.app/)

Espero que este README ajude você a entender melhor o projeto! Sinta-se à vontade para personalizá-lo de acordo com suas necessidades e informações específicas.
