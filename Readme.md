# Create a SPA react app that matches the following design:

https://github.com/Combyne-Ag/Interview-JS-Pokedex/blob/master/Pokedex%20MUI.png

Note: The design has been created using MUI design and the components available in MUI (https://mui.com/) library.

## Requirements:

1. App should be responsive. The UI image provided is for reference only. You need to optimize the UI for mobile and larger desktop resolutions.
2. App should have pagination. The number of pages can be fixed to 10 for this task.
3. Use of React is a must.

## API

API for data: https://pokeapi.co/

You can use the direct endpoints or the graphql endpoint which reduces the complexity.

If you use the graphql endpoint, you can use the following URL and query to get the data you need:

GraphlQL Endpoint: https://pokeapi.co/docs/graphql

### Query

```graphql
query MyQuery {
  pokemon_v2_pokemon(limit: 20, offset: 0) {
    id
    name
    pokemon_v2_pokemonsprites {
      sprites
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}
```

### Bonus Points:

1. Deploy app to netlify, vercel or any other hosting service for Bonus Points.
2. User should be able to 'like' a pokemon by clicking on the star button in a pokemon card, this information should persist untill the app is closed.

### Things to Consider:

- You can use Javascript or TypeScript.
- You can use the MUI library(https://mui.com/) to develop the UI or any other UI libraries or none.
- Approach this project as you would any new project i.e. use whatever best practices, styles etc. you would normally use.
- Feel free to use StackOverflow or any other online resource as you would normally do (although please do not search for the answer directly!).
- You should be using Git as you normally would in a project.
