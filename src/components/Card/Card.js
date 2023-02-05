import * as React from "react";
import Box from "@mui/material/Box";
import { getEachCharacter } from "../../services/pokemon.service";
import { useState, useEffect } from "react";
import './card.style.css'
export default function Card(props) {
  const { url, name } = props.data;
  const [pokemonDet, setPokemonDet] = useState('');
  const [isFav,setIsFav] = useState('');

 
  const favHandler = ()=>{
    isFav?setIsFav(''):setIsFav('active');
  }
  useEffect(() => {
    const getDetails = async() => {
      const data =await  getEachCharacter(url);
      setPokemonDet({
       types: data.types,
       imgUrl: data.sprites.front_default
      })
    };
    getDetails();
  }, [name,url]);
  return (
    <Box
      className='card__type'
      sx={{
        boxShadow: 3,
        width: "100%",
        height: "100%",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        borderRadius: 1,
        textAlign: "center",
        fontFamily:'emoji',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        background:'#FFFFFA',
        padding:'10px 5px',
        position:'relative'
      }}
    >
      <svg onClick={favHandler} className={`card__type__cn__str ${isFav}`}  xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 24 24" width="28"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
      
        <p className="card__type__cn__tle">{name}</p>
        <div className="card__type__img" > <img  src={pokemonDet.imgUrl} alt={name} /> </div>
        <div className="types__cn">{
           pokemonDet && pokemonDet.types.map((r,index)=>{ return <p key={index} className={`card__type__cn ${r.type.name}`}> <span className="card__type__cn__nm"> {r.type.name} </span>  </p>})
        }
        </div>
    </Box>
  );
}
