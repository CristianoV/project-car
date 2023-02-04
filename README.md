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
PORT=<porta_de_inicialização> (obrigatório)
Esta variável especifica a porta utilizada pelo servidor para inicializar a aplicação. Por exemplo, o valor "3333" fará com que o servidor inicialize na porta 3333.

DB_URL=<URL_do_banco_de_dados> (obrigatório)
Esta variável é usada para definir a URL do banco de dados usado pelo sistema. Exemplo: "http://localhost:3333/files/".

PG_PASS=<senha_do_banco_de_dados> (obrigatório)
Esta variável contém a senha de acesso ao banco de dados PostgreSQL. Por exemplo, o valor "admin".

PG_USER=<usuário_do_banco_de_dados> (obrigatório)
Esta variável contém o nome de usuário para acessar o banco de dados PostgreSQL. Por exemplo, o valor "admin".
   
PG_DB=<nome_do_banco_de_dados> (obrigatório)
Este é o nome do banco de dados PostgreSQL que o sistema irá utilizar. Por exemplo, o valor "postgres_db".

PGHOST=<host_do_banco_de_dados> (obrigatório)
Este é o host do banco de dados PostgreSQL que o sistema irá utilizar. Por exemplo, o valor "127.0.0.1".

PGPORT=<porta_do_banco_de_dados> (obrigatório)
Este é a porta de acesso ao banco de dados PostgreSQL que o sistema irá utilizar. Por exemplo, o valor "5432".
```
</details>

### Variaveis de ambiente do Front end
<details>
  <summary>Clique aqui para expandir</summary>

```
NEXT_PUBLIC_API_URL:<Link_para_requisição_no_Back_end> (obrigatório)
Essa variável é crucial para o funcionamento do front-end, pois define a URL que será utilizada para realizar requisições ao banco de dados. Ela é responsável por estabelecer a conexão entre a interface do usuário e o back-end, permitindo que as informações sejam exibidas corretamente na tela. O valor padrão é `http://localhost:3333/`, mas pode ser alterado de acordo com a necessidade do projeto.

```
</details>

</details>

### Variaveis de ambiente do Banco de dados
<details>
  <summary>Clique aqui para expandir</summary>

```
PG_PASS= Senha utilizada para acessar o banco de dados PostgreSQL
PG_USER= Nome de usuário para acessar o banco de dados PostgreSQL
PG_DB=   Nome do banco de dados PostgreSQL
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
