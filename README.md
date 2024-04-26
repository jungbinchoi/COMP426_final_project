# COMP426_final_project

### Final Project for COMP 426: Modern Web Programming

A Wordle (https://www.nytimes.com/games/wordle/index.html) clone with additional features such as hints from ChatGPT.

Front-End: Angular.js\
Back-End: Express.js

# Back-End Routes

- `GET /word` -- Returns a new unique word
```
{
	"word": str
}
```

- `GET /hint` -- Returns a hint
```
{
	"hint": str
}
```

- `GET /score` -- Returns a dictionary of scores
```
{
	"1": number,
	...
	"6": number
}
```

- `PUT /score` -- Updates the given score
```
INPUT
{
	"guesses": number
}

OUPUT
{
	"1": number,
	...
	"6": number
}
```
