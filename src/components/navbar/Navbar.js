import React from 'react';
import './navbar.css';

//Icon back
import {TiArrowBack } from 'react-icons/ti'

//Logo Navbar
const logo = "https://res.cloudinary.com/dyntggmrp/image/upload/v1633027305/logo_nrvyyk.png";

//Ubicacion
const ubicURI = window.location.pathname;

export const Navbar = () => {

  return (
    <nav>
      <div className="container nav-container">

        <a className="logo" href="http://localhost:3000">
          <img src={logo} alt="draft" />
          <h3>DRAFT</h3>
        </a>

        <div className="navigation">
          <ul>
            {
              ubicURI === '/' ? (
                <>
                  <li><a href="#acerca-de">Draft</a></li>
                  <li><a href="/jugadores">Jugadores</a></li>
                  <li><a href="#download">Download</a></li>
                </>
              ) : <li><a href="/"><TiArrowBack/> Volver</a></li>
            }

          </ul>
        </div>

      </div>
    </nav>
  )

}