import "./App.css";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { getPokemonData } from "./services/pokemon.service";
import Card from "./components/Card/Card";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const fetchRecords = async (page) => {
    const data = await getPokemonData(page);
    data && setPokemonData(data);
  };

  const changePage = (e,page)=>{
    fetchRecords(page-1);
  }
  useEffect(() => {
    fetchRecords();
  }, []);
  return (
    <div className="app__cn">
      <h1 className='app__cn__tle'> Pokedex</h1>
      <div className="app__cn__lst">
        {pokemonData.map((r,index) => {
          return <Card key={index}  data={r}/>;
        })}
      </div>
       <div className="app__cn__page"> <Pagination onChange={changePage} count={10} /> </div>
    </div>
  );
}

export default App;
