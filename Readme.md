# JS Technical Interview - Pokedex

## Instructions

Create an SPA React app that matches [this design][1]. The design has been created using MUI design and the components are available in the [MUI](https://mui.com/) library.

Once this React app is complete, send us the link to your repository via email. If it is a private repository, be sure to provide `vramanalj` read access. 

[1]: https://github.com/Combyne-Ag/Interview-JS-Pokedex/blob/main/Pokedex%20MUI.png

## Requirements

* The app should be responsive. The UI image provided is for reference only. You should be optimizing the UI for mobile and larger desktop resolutions.
* The app should have pagination. The number of pages can be fixed to 10 for this task.
* React must be used.

## API

The API for the data can be found [here](https://pokeapi.co/).

You can use the direct endpoints or the GraphQL endpoint which reduces the complexity.

If you use the GraphQL endpoint, you can use [this URL](https://pokeapi.co/docs/graphql) and the following query to get the data you need:


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

### Bonus Points

* Deploy app to netlify, vercel or any other hosting service for Bonus Points.
* User should be able to 'like' a pokemon by clicking on the star button in a pokemon card, this information should persist until the app is closed.

### Things to Consider

* You can use Javascript or TypeScript.
* You can use the [MUI library](https://mui.com/) to develop the UI if desired, but it is not required.
* Approach this project as you would any new project i.e. use whatever best practices, styles etc. you would normally use.
* Feel free to use StackOverflow or any other online resource as you would normally do (although please do not search for the answer directly!).
* You should be using Git as you normally would in a project.
