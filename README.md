# Happy Food API

## Que projeto é esse?

É uma API muito simples que vai te dar uma lista de receitas de acordo com os ingredientes que você passar para ela.

Você pode passar até 3 ingredientes. Como resposta você pode esperar os parâmetros usados na requisição mais uma lista de receita que vai ter o seguinte:

- Título da receita;
- Lista de ingredientes;
- Link para acessar a receita;
- Link de um gif para a receita (porque nós gostamos de GIFs).


Quer um exemplo? Imagina que você chamou a API dessa maneira:
```
GET http://localhost:3333/recipes/?i=tomato,hamburger,milk

```

Uma possível resposta vai ser o seguinte:

```
{
	"keywords": ["tomato", "hamburger", "milk"],
	"recipes": [{
		"title": "Cheesy Cheeseburger Casserole",
		"ingredients": ["tomato", "hamburger", "milk","elbow macaroni"],
		"link": "http://www.recipe4living.com/recipes/cheesy_cheeseburger_casserole.htm",
		"gif": "https://media2.giphy.com/media/uQvxobRExS9nG/giphy.gif?cid=2d89829dfojttkebkdzua1bg0q7ai2e6rltxrc41ei6o7ssm&rid=giphy.gif"
	   }
	]
}
```

## O que esse projeto tem de legal (tecnologias \o/)?
- Usa NodeJS com Typescript;
- Está "dockerizado";
- Usa as APIs do Giphy e do RecipePuppy como fonte de dados;
- E tem configurações de lint :)


## Como faço para executar esse projeto na minha máquina?

Fico contente pelo interesse! Primeiro preciso que você confira se tem o seguinte instalado na sua máquina:

- NodeJS
- Yarn
- Docker
- Docker Compose

Depois de clonar o projeto na sua máquina, entre na pasta do projeto, copie o arquivo `.env.example` renomeando para `.env`. As variáveis que possuem vários pontos de interrogação (????) são para que você lembre de preecher com os seus valores e são pessoais, como a váriavel "PROVIDER_GIPHY_API_KEY", que é onde você deve colocar a chave da API do Giphy.

Agora execute esse comando para instalar as dependências:

`yarn`

Por último, basta executar o servidor com o seguinte comando:

`yarn dev:server`

Após rodar esse último comando, o servidor vai iniciar na porta 3333.

Você pode conferir se deu tudo certo chamando o endpoint "http://localhost:3333/health".


### Psiu! Se quiser rodar a aplicação usando Docker, dá também!
Execute os comandos:

```
docker build -t happy-food-api .
docker run -p 3333:3333 -d happy-food-api

```


## Como faço para executar os testes?
Bem simples! Entre na pasta do projeto e execute o comando:
`yarn test`

