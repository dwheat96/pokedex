import React, { useState, useEffect } from 'react';
// import PokemonList from './PokemonList'
import axios from 'axios'
import Pagination from './Pagination';
import './index.css';


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
    <div className="app-contaner">
        <div className="pokemon-container">
            <div className="all-container">
              {/* <PokemonList /> */}
            </div>
        </div>
    <Pagination 
    gotoNextPage={ nextPageURL ? gotoNextPage : null}
    gotoPrevPage={ prevPageURL ? gotoPrevPage : null}
    />
    </div>
  );
}

export default App;
