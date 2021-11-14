import React from 'react'

const wallpaper = 'https://wallpaperbat.com/img/75434-nba-4k-wallpaper-top-free-nba-4k-background.jpg';

export const NofoundPage = (props) => {
  return(
    <div style={{
        background: `url('${wallpaper}')`, width: '100%', height: '100vh', backgroundSize: 'cover'
    }}>
        <div style={{
            width: '100%', height: '100vh', background: '#000', opacity: '0.8', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>

            <div className="card">

                <div className="card-body">
                    <h6 className="text-center" style={{fontWeight: 'bold'}}>UPS, NO SE ENCONTRO PAGINA SOLICITADA :(</h6>
                </div>

                <div className="card-footer">
                    <a href={`http://localhost:3000`} className="btn btn-warning btn-block" style={{width: '100%'}}>Volver</a>
                </div>

            </div>

        </div>
    </div>
   )

 }