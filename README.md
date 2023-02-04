<h1 align="center"> 
Projeto Car
</h1>

## :books: Contexto
O Projeto simula uma pagina de uma concessionaria

- `CADASTRO`
- `LOGIN`

Tudo isso com algumas seguranças como token JWT e Bcrypt para a encriptação de dados sigilosos

Como bônus, foram desenvolvidos alguns testes de integração para algumas rotas do back, esse projeto foi muito divertido de codar e pretendo continuar atualizando, adicionando mais testes para as camadas do back e iniciar os do front.

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

## Autor

[@CristianoV](https://www.github.com/CristianoV)
