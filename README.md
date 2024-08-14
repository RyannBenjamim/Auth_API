## Endpoints

### Auth

- `POST /api/auth/login`
  - Descrição: Faz login de um usuário na aplicação.
  - - Parâmetros (body):
    ```json
    {
      "email": "johndoe@gmail.com",
      "password": "john123",
    }
    ```
  - Exemplo de Resposta:
    ```json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ5YW5AZ21haWwuY29tIiwiaWF0IjoxNzIzNjc5MDY3LCJleHAiOjE3MjM2ODI2Njd9.eer9treZVjr7FYldMCs4_vzHN1QrPE7dvazAkDpnUko"
    }
    ```
