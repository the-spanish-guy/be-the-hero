import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImage from '../../assets/logo.svg'
import api from '../../services/api'

export default function Profile() {
  const ongId = localStorage.getItem('ongId')
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  async function handleCreateIncident(e) {

    e.preventDefault()

    try {

      const data = {
        title,
        description,
        value
      }

      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
      
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o incidente')
    }

  }

  return(
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Hero"/>

          <h1>Cadastro novo caso</h1>

          <p>Descreva o caso detalhadamente para encontrar um herói para rsoslver isso.</p>


          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para Home
          </Link>

        </section>
        <form onSubmit={handleCreateIncident}>

          <input
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}