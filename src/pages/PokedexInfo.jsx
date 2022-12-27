import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/pokeInfo.css"


const PokedexInfo = () => {

    const {id} = useParams()

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [id])

    console.log(pokemon)

  return (
    <div className='poke-info'>
      <section className = 'poke-info__body'>

      <header className = {`poke-info__header bg-${pokemon?.types[0].type.name}`}>
        <img className='poke-info__sprite' src = {pokemon?.sprites.other['official-artwork'].front_default
} alt="" />
      </header>


      <div className='poke-info__squareId'>
        <h3 className={`poke-info__id color-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h3>
      </div>

      <div className='poke-info__title'>
        <div className='poke-info__one-line'></div>
        <h3 className={`poke-info__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <div className='poke-info__second-line'></div>
      </div>

        <ul className='poke-info__wh-container'>
          <li className='poke-info__wh-left'><span>Weight</span><span className='poke-info__wh-number'>{pokemon?.weight}</span></li>
          <li className='poke-info__wh-right'><span>Height</span><span className='poke-info__wh-number'>{pokemon?.height}</span></li>
        </ul>


        <div className='poke-info__abilitiesTypes-container'>
          <ul className='poke-info__types-container'>
            <li className='poke-info__type-title'><span>Type</span></li>
            {
              pokemon?.types.map(type => (
                <li className = {`poke-info__type bg-${type.type.name}`} key={type.type.name}><span className='poke-info__type-letter'>{type.type.name}</span></li>
                ))
              }
          </ul>

          <ul className='poke-info__abilities-container'>
            <li className='poke-info__abilities-title'><span >Abilities</span></li>
            {
              pokemon?.abilities.map(ability => (
                <li className='poke-info__ability' key={ability.ability.name}><span>{ability.ability.name}</span></li>
              ))
            }
          </ul>
        </div>


        <ul className='poke-info__stats-container'>
          {/* <h2 className='poke-info__stats-title'>Stats</h2> */}

          <div className='poke-info__movements-header'>

            <div className='poke-info__movements-title'>
            Stats
            </div>

            <div className='poke-info__movements-line-container'>
              <div className='poke-info__movements-line'></div>
            </div>

            <div className='pokeball'>
              <div className='poke__ball-big'>
                <div className='poke__ball-mini'>
                  <div className='poke__ball-mini-mini'></div>
                </div>
            </div>

            <div className='poke__ball-line'></div>
            <div className='poke__ball-line2'></div>
        </div>
        </div>
          {
            pokemon?.stats.map(stat => (
              <li className='poke-info__stat' key={stat.stat.name}>
                <div className='poke-info__div'>
                    <span className='poke-info__stat-name'>{stat.stat.name}:</span>
                    <span className='poke-info__stat-stat'>{stat.base_stat}/150</span> 
                </div>
                <div className='progress'>
                  <div className="progress-bar" style={{ width: `${stat.base_stat / 1.5}%` }}>
                  </div>
                </div>
              </li> 
            ))
          }
        </ul>
      </section>

          {/* <div className='progress-bar__padre'>
            <div className='progress-bar'></div>
          </div> */}

      <section className = 'poke-info__footer'>

        <div className='poke-info__movements-header'>

          <div className='poke-info__movements-title'>
            Movements
          </div>

          <div className='poke-info__movements-line-container'>
            <div className='poke-info__movements-line'></div>
          </div>

          <div className='pokeball'>
            <div className='poke__ball-big'>
              <div className='poke__ball-mini'>
                <div className='poke__ball-mini-mini'></div>
              </div>
            </div>

            <div className='poke__ball-line'></div>
            <div className='poke__ball-line2'></div>
          </div>

        </div>

        <ul className='poke-info__movements-container'>
          {
            pokemon?.moves.map(move => (
              <li className='poke-info__movements'>{move.move.name}</li>
            ))
          }
        </ul>
      </section> 
    </div>
  )
}

export default PokedexInfo