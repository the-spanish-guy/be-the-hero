import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'

import logoImage from '../../assets/logo.svg'

export default function Profile() {
  return(
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be The Hero"/>

        <span>Bem-Vinda, APAD</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        
        <button type="button">
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>


          <strong>Descrição:</strong>
          <p>Caso descrição</p>


          <strong>Valor:</strong>
          <p>Caso Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>


        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>


          <strong>Descrição:</strong>
          <p>Caso descrição</p>


          <strong>Valor:</strong>
          <p>Caso Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>


        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>


          <strong>Descrição:</strong>
          <p>Caso descrição</p>


          <strong>Valor:</strong>
          <p>Caso Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>


        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>


          <strong>Descrição:</strong>
          <p>Caso descrição</p>


          <strong>Valor:</strong>
          <p>Caso Valor</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>

    </div>
  )
}