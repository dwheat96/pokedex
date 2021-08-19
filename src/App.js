import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageURL, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextPageURL, setNextPageUrl] = useState()
  const [prevPageURL, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageURL, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => cancel()

  }, [currentPageURL])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageURL)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageURL)
  }


  if (loading) return "loading..."

  return (
    <>
    <PokemonList pokemon={pokemon} />
    <Pagination 
    gotoNextPage={gotoNextPage}
    gotoPrevPage={gotoPrevPage}
    />
    </>
  );
}

export default App;
