# COMP426_final_project

### Final Project for COMP 426: Modern Web Programming

A Wordle (https://www.nytimes.com/games/wordle/index.html) clone with additional features such as hints from ChatGPT.

Front-End: Angular.js\
Back-End: Express.js

# Back-End Routes

- `GET /word` -- Returns a new unique word
```
{
	"word": string
}
```

- `GET /hint` -- Returns a hint
```
{
	"hint": string
}
```

- `GET /score` -- Returns an array of scores in ascending order
```
{
	"guesses": number[]
}
```

- `PUT /score` -- Updates the given score and returns an array of scores in ascending order
```
INPUT
{
	"guess": number
}

OUPUT
{
	"guesses": number[]
}
```
