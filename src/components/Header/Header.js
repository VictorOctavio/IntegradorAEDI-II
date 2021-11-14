import React from 'react'
import './header.css'

//React Iconst arraow
import {CgChevronDoubleDown} from 'react-icons/cg';

const wallpaper = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/14/07/kobe-bryant.jpg'

export const Header = (props) => {
  return(
    <header style={{background: `background: url(${wallpaper})`}}>
        <div className="header-container">
            <div className="container header-content">
               <h1>DRAFT</h1>
               <div>
                   <p> Siempre tienes que estar al límite. Tienes que   hacer cada entrenamiento, cada partido, como si fuese el último.</p>
                   <h6>-KOBE BRYANT-</h6>
               </div>

               <div className="arrow">
                <CgChevronDoubleDown/>
                </div>
            </div>

           
        </div>
    </header>
   )

 }