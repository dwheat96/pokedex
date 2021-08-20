import React, { useState, useEffect } from 'react';

export default function PokemonList() {
    const [pokemon, setPokemon] = useState([])
    const [setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextPageURL, setNextPageUrl] = useState()
  
    const getAllPokemon = async () => {
      const res = await fetch(nextPageURL)
      const data = await res.json()
  
      setNextPageUrl(data.next)
  
      function createPokemonObject(result) {
        result.forEach( async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json()
    
          setPokemon(currentList => [...currentList, data])
        })
      }
      createPokemonObject(data.result)
      console.log(pokemon)
    }
    
    useEffect(() => {
        getAllPokemon()
    }, [])
 }

