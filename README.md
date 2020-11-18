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
GET http://localhost:3333/recipes/?i=onion,tomato

```

Uma possível resposta vai ser o seguinte:

```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
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

Depois de clonar o projeto na sua máquina, entre na pasta do projeto e execute esse comando para instalar as dependências:

`yarn`

Por último, basta executar o servidor com o seguinte comando:

`yarn dev:server`


## Como faço para executar os testes?
Bem simples! Entre na pasta do projeto e execute o comando:
`yarn test`

