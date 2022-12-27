import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import "./styles/home.css"

const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {

        e.preventDefault()
        
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        
        e.target.name.value= ""

        navigate("/pokedex")
    }


  return (
    <>
    <div className='home-container'>
      <div className='home__card'>
        <header className='home__header'>
          <img className='home__img' src="/Home/pokedex.png" alt="" />
        </header>
        <section className='home__body'>
          <h1 className='home__title'>Hi Trainer!</h1>
          <p className='home__paragraph'>Put your name to start</p>
        </section>
          <form className='home__form' onSubmit={handleSubmit}>
              <input placeholder='Name...' className='home__input' id = 'name' type="text" />
              <button className='home__btn'>Start</button>
          </form>
      </div>

    </div>
      <footer className='footer'>
         <div className='footer__black'>
            <div className='footer__circle'>

            </div>
         </div>
      </footer>
    </>
  )
}

export default Home