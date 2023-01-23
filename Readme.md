Readme.md

Create a SPA react app that matches the following design:

https://drive.google.com/file/d/1WFvHPvDfsDX3pMF9fNp01rtAaxc58ki_/view?usp=sharing

# Requirements:

1. App should be responsive. The UI image provided is for reference only. You need to optimize the UI for mobile and larger desktop resolutions.
2. App should have pagination. The number of pages can be fixed to 10 for this task.
3. User should be able to 'like' a pokemon. For this task, you need not persist the data. Having a working button should be enough.

BONUS POINTS:

Deploy app to netlify, vercel or any other hosting service.

# API

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
