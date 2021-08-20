import React, { useState, useEffect } from 'react';
import './index.css';
import PokemonThumbnail from './components/PokemonThumbnail';



function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(result) {
        result.forEach( async (pokemon) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            const data = await res.json()

            setAllPokemon(currentList => [...currentList, data])
          
          })
    }
    createPokemonObject(data.results)
    await console.log(allPokemon)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return(
    <div className="app-container">
        <h1> Welcome </h1>
        <div className="pokemon-container">
          <div className="all-container">
              { allPokemon.map( (pokemon , index) => 
                <PokemonThumbnail 
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
                />
                )}
          </div>
          <button className="load-more" onClick={() => getAllPokemon()}>Load More</button>
        </div>
    </div>
  )
}
export default App;




// function App() {
//   const [pokemon, setPokemon] = useState([])
//   const [currentPageURL, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
//   const [nextPageURL, setNextPageUrl] = useState()
//   const [prevPageURL, setPrevPageUrl] = useState()
//   const [loading, setLoading] = useState(true)
  

//   useEffect(() => {
//     setLoading(true)
//     let cancel
//     axios.get(currentPageURL, {
//       cancelToken: new axios.CancelToken(c => cancel = c)
//     }).then(res => {
//       setLoading(false)
//       setNextPageUrl(res.data.next)
//       setPrevPageUrl(res.data.previous)
//       setPokemon(res.data.results.map(p => p.name))
//     })

//     return () => cancel()

//   }, [currentPageURL])

//   function gotoNextPage() {
//     setCurrentPageUrl(nextPageURL)
//   }

//   function gotoPrevPage() {
//     setCurrentPageUrl(prevPageURL)
//   }

//   if (loading) return "loading..."

//   return (
//     <div className="app-contaner">
//         <div className="pokemon-container">
//             <div className="all-container">
//               {/* <PokemonList /> */}
//             </div>
//         </div>
//     <Pagination 
//     gotoNextPage={ nextPageURL ? gotoNextPage : null}
//     gotoPrevPage={ prevPageURL ? gotoPrevPage : null}
//     />
//     </div>
//   );
// }


