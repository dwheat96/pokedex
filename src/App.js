import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './index.css';



function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    console.log(data)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return(
    <div className="app-container">
        <h1> Welcome </h1>
        <div className="pokemon-container">
          <div className="all-container">

          </div>
          <button className="load-more">Load More</button>
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


