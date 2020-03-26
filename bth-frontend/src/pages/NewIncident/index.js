import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImage from '../../assets/logo.svg'

export default function Profile() {
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
        <form action="">

          <input type="text" placeholder="Titulo do caso"/>
          <textarea placeholder="Descrição"/>
          <input type="text" placeholder="Valor em reais"/>

          <div className="button" type="submit">Cadastrar</div>
        </form>
      </div>
    </div>
  )
}