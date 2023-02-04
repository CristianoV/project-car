<h1 align="center"> 
Projeto Car
</h1>

## :books: Contexto
Este é um site de simulação de concessionária, desenvolvido para oferecer uma plataforma segura e confiável para gerenciar o estoque de veículos. Ele permite que apenas administradores editem, adicionem e excluam carros, garantindo a integridade dos dados. As tecnologias bcrypt e token JWT são usadas para criptografar as senhas dos usuários e garantir a autenticação, protegendo contra acesso não autorizado ou ataques maliciosos. Além disso, testes de integração foram desenvolvidos para algumas rotas do back-end, e o desenvolvedor tem planos de continuar atualizando o projeto, adicionando mais testes e iniciando o desenvolvimento do front-end. O site pode ser visualizado a partir do link https://cristianocar.vercel.app/. Em resumo, este é um projeto divertido e desafiador que oferece uma plataforma segura para gerenciar o estoque de veículos em uma concessionária virtual.

## :art: Visualizações
Veja como o projeto se parece tanto em dispositivos desktop quanto em dispositivos móveis:

<p align="center">
   <img alt="Desktop" src="https://raw.githubusercontent.com/CristianoV/project-car/master/InicialDesktop.png" width="500px" />
    <img alt="Mobile" src="https://raw.githubusercontent.com/CristianoV/project-car/master/InicialMobile.png" width="120px" />
</p>

# Instruções da aplicação
### Variaveis de ambiente do Back end
<details>
  <summary>Clique aqui para expandir</summary>


```
PORT=   Porta de inicialização Ex: 3333
DB_URL=   Variavel de ambiente responsavel por seeders  Ex: http://localhost:3333/files/

PG_PASS=   Variavel de ambiente responsavel pela senha do banco de dados  Ex: admin
PG_USER=   Variavel de ambiente responsavel pelo usuario do banco  Ex: admin
PG_DB=   Nome do banco de dados  Ex: postgres_db
PGHOST=  Host do banco de dados  Ex: 127.0.0.1
PGPORT=  Porta de acesso ao banco de dados  Ex: 5432
```
</details>

### Variaveis de ambiente do Front end
<details>
  <summary>Clique aqui para expandir</summary>

```
NEXT_PUBLIC_API_URL=  Variavel de ambiente responsavel pelas requisições no banco de dados Ex: http://localhost:3333/
```
</details>

</details>

### Variaveis de ambiente do Banco de dados
<details>
  <summary>Clique aqui para expandir</summary>

```
PG_PASS= Senha do banco de dados
PG_USER= Usuario do banco de dados
PG_DB=   Nome do banco de dados postgress
```
</details>

### Dando start no projeto
<details>
  <summary>Clique aqui para expandir</summary>

### Iniciar Projeto com postgress instalado na maquina
```
npm start
```

### Iniciar Projeto sem postgress instalado na maquina
```
npm run start banco
npm start
```
</details>

### Rodar Testes do Back-end
```
npm run test-back
```

## :star: Usuários
Usuários já criados para visualizações do conteudo:

### Administrador
Usuário: `admin`
Senha: `@Admin1234`

### Usuário Normal
Usuário: `user`
Senha: `@User1234`

## Autor

[@CristianoV](https://www.github.com/CristianoV)
