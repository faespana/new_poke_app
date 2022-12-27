import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pokedex/Pagination'
import PokeCard from '../components/Pokedex/PokeCard'
import "./styles/pokedex.css"

const Pokedex = () => {

  const {trainer} = useSelector(state => state)

  const [pokemons, setPokemons] = useState()

  const [types, setTypes] = useState()

  const [typeSelected , setTypeSelected] = useState("All pokemons")

  const navigate = useNavigate()

  useEffect(() => {
    if(typeSelected !== "All pokemons"){
      //hacer la peticion de los pokemones por tipo
      axios.get(typeSelected)
        .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
        .catch(err => console.log(err))
    }else{
      //hacer la peticion de todos los pokemons
      const URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000000`
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelected])

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type`
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const input = e.target.search.value.trim().toLowerCase()
    navigate(`/pokedex/${input}`)
  }

  const handleChange = e => {
    setTypeSelected(e.target.value)
    setPage(1)
  }

  //Logica de paginacion

  const [page, setPage] = useState(1)

  const [pokePerPage, setPokePerPage] = useState(8)

  const initialPoke = (page - 1) * pokePerPage

  const finalPoke = page * pokePerPage

  const maxPage = pokemons && Math.ceil(pokemons.length / pokePerPage)



  return (
    <div className='poke-all'>
      
      <h2 className='poke__welcome'><span className='poke__welcome-span'>Welcome {trainer}</span>, here you can find your favorite pokemon</h2>
      
      <div className='poke__searcher'>

        <form className='poke__form' onSubmit={handleSubmit}>
          <input className='poke__form-input' id = 'search' type="text" />
          <button className='poke__form-btn'>Search</button>
        </form>
        <select className='poke__select' onChange={handleChange}>
          <option className='poke__select-option' value = "All pokemons">All pokemons</option>
            {
              types?.map(type => (
                <option key = {type.url} value = {type.url}>{type.name}</option>
              ))
            }
        </select>

      </div>

      <div className='poke-container'>
        {
          pokemons?.slice(initialPoke, finalPoke).map(poke => (
            <PokeCard
            key = {poke.url}
            url = {poke.url} 
            />
            ))
          }
      </div>
          <Pagination 
            page = {page} 
            maxPage = {maxPage}
            setPage = {setPage}
          />
    </div>
  )
}

export default Pokedex