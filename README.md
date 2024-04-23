# COMP426_final_project

### Final Project for COMP 426: Modern Web Programming

A Wordle (https://www.nytimes.com/games/wordle/index.html) clone with additional features such as hints from ChatGPT.

Front-End: Angular.js\
Back-End: Express.js

# Back-End Routes

- `GET /start/run` -- Start the run (starts a game as well)

```
{
	"success": boolean
}
```

- `GET /start/game` -- Start a game

```
{
	"success": boolean
}
```

- `GET /end/run` -- Ends the run

```
{
	"score": number
}
```

- `GET /guess/:word` -- Check the guessed word

```
Correct
	{
		"correct": true,
		"results": []
	}

Incorrect
	{
		"correct": false,
		"results": [
			{
				"inWord": boolean,
				"inPlace": boolean
			},
			{
				"inWord": boolean,
				"inPlace": boolean
			},
			...
		]
	}
```

- `GET /hint/generate` -- Generate a hint

```
{
	"hintLeft": number,
	"hint": string
}
```

- `GET /hint/amount` -- Returns the remaining number of hints

```
{
	"hintLeft": number
}
```

- `PUT /hint/amount` -- Update the number of hints (+1) and return the new amount of hints

```
{
	"hintLeft": number
}
```

- `GET /score` -- Returns the score for the current game

```
{
	"score": number
}
```

- `PUT /score` -- Update the score (+1) and return the new score

```
{
	"score": number
}
```

- `GET /score/top/:amount` -- Returns the top `amount` scores in descending order

```
{
	"scores": number[]
}
```
