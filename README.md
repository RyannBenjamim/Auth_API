## Endpoints

### Auth

- `POST /auth/api/login`
  - **Descrição**: Faz login de um usuário no sistema.
  - **Parâmetros (body)**:
    ```json
    {
      "email": "johndoe@gmail.com",
      "musics": "john123"
    }
    ```
  - **Exemplo de Resposta**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ5YW5AZ21haWwuY29tIiwiaWF0IjoxNzIzNjc5MDY3LCJleHAiOjE3MjM2ODI2Njd9.eer9treZVjr7FYldMCs4_vzHN1QrPE7dvazAkDpnUko"
    }
    ```

- `POST /auth/api/register`
  - **Descrição**: Faz o registro de um usuário no sistema.
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

- `POST /auth/api/register`
  - **Descrição**: Testa se o token do usuário é valído.
  - **Headers**:
    `Authorization`: `Bearer <token>`
  - **Exemplo de Resposta**:
    ```json
    {
      "message": "Seja bem vindo(a) John Doe"
    }
    ```
