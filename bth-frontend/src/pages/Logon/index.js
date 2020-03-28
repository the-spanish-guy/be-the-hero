import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './styles.css'

import logoImage from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'
import api from '../../services/api'

export default function Logon () {

  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e) {

    e.preventDefault()

    try {
      const response = await api.post('/sessions', { id })
console.log(id)
      localStorage.setItem('ongId', id )
      localStorage.setItem('ongName', response.data.name )

      history.push('/profile')
    } catch (error) {
      alert('Ocorreu um erro ao tentar realizar o login')
      throw error
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          
          <input
            type="text"
            placeholder="Sua Id"
            value={id}
            onChange={e => {setId(e.target.value)}}
          />
          
          <button className="button" type="submit">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes"/>
    </div>
  )
}