import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import logoImage from '../../assets/logo.svg'

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [estado, setEstado] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()
    const data = {
      name,
      email,
      whatsapp,
      estado,
      uf
    }

    try {
      const response = await api.post('/ongs', data)
      alert(`Seu ID de acesso: ${response.data.id}`)
      history.push('/')
    } catch (error) {
      alert(`Ocorreu um erro ao realizar o cadastro.`)      
      throw error
    }
  }

  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Hero"/>

          <h1>Cadastro</h1>

          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>


          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para o Login
          </Link>

        </section>
        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="inpout-group">
            <input
              type="text"
              placeholder="Cidade"
              value={estado}
              onChange={e => setEstado(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}