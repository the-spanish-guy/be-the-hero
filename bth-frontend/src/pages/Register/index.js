import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImage from '../../assets/logo.svg'

export default function Register() {
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
        <form action="">

          <input type="text" placeholder="Nome da ONG"/>
          <input type="email" placeholder="E-mail"/>
          <input type="text" placeholder="Whatsapp"/>
          <div className="inpout-group">
            <input type="text" placeholder="Cidade"/>
            <input type="text" placeholder="UF" style={{ width: 80 }}/>
          </div>

          <div className="button" type="submit">Cadastrar</div>
        </form>
      </div>
    </div>
  )
}