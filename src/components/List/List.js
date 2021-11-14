import React, { useState } from 'react'
import './list.css'
import DataJugadores from '../../data/jugadores.json';

export const List = (props) => {

    const [jugadorActive, setJugadorActive] = useState({
        nombre: "Richard Anderson",
        posicion: "Alero",
        universidad: "Stanford University",
        edad: 19,
        altura: 2.01,
        valor: 1200000,
        image: "https://miro.medium.com/max/519/1*-vqDUId4_hjJDFhYxg0LDA.jpeg",
        habilidades: {
            tiro: { intentos: 120, aciertos: 110 },
            pase: { intentos: 190, aciertos: 179 },
            defensa: { intentos: 90, aciertos: 69 },
            dribling: { intentos: 208, aciertos: 183 }
        }
    });

    const hability = jugadorActive.habilidades;

    const changeJugadorActive = (jugador) => {
        setJugadorActive({
            nombre: jugador.nombre,
            posicion: jugador.posicion,
            universidad: jugador.universidad,
            edad: jugador.edad,
            altura: jugador.altura,
            valor: jugador.valor,
            image: jugador.image,
            habilidades: {
                tiro: { intentos: jugador.habilidades.tiro.intentos, aciertos: jugador.habilidades.tiro.aciertos },
                pase: { intentos: jugador.habilidades.pase.intentos, aciertos: jugador.habilidades.pase.aciertos },
                defensa: { intentos: jugador.habilidades.defensa.intentos, aciertos: jugador.habilidades.defensa.aciertos },
                dribling: { intentos:  jugador.habilidades.dribling.intentos, aciertos: jugador.habilidades.dribling.aciertos, }
            }
        })
    }

    return (
        <div className="lista">
            <div className="container lista-container">
                <div className="card-list">
                    <div className="photo-player">
                        <img src={jugadorActive.image} alt="pllayer" />
                    </div>

                    <div className="information">
                        <h3>{jugadorActive.nombre}</h3>
                        <p>{jugadorActive.posicion.toLocaleUpperCase()}</p>
                    </div>

                    <div className="stats">
                        <div>

                            <label>Tiro - ({hability.tiro.aciertos}/{hability.tiro.intentos})</label>
                            <div><div className="barraMedida" style={{
                                width: hability.tiro.aciertos * 100 / hability.tiro.intentos + '%',
                                background: 'tomato'
                            }} />
                                <h6>{(hability.tiro.aciertos * 100 / hability.tiro.intentos).toFixed(1)}%</h6>
                            </div>

                        </div>

                        <div>
                            <label>Pase - ({hability.pase.aciertos}/{hability.pase.intentos})</label>
                            <div>

                                <div className="barraMedida" style={{
                                    width: hability.pase.aciertos * 100 / hability.pase.intentos + '%',
                                    background: 'yellowgreen'
                                }} />
                                <h6>{(hability.pase.aciertos * 100 / hability.pase.intentos).toFixed(1)}%</h6>

                            </div>
                        </div>

                        <div>
                            <label>Defensa - ({hability.defensa.aciertos}/{hability.defensa.intentos})</label>
                            <div>

                                <div className="barraMedida" style={{
                                    width: hability.defensa.aciertos * 100 / hability.defensa.intentos + '%',
                                    background: 'royalblue'
                                }} />
                                <h6>{(hability.defensa.aciertos * 100 / hability.defensa.intentos).toFixed(1)}%</h6>

                            </div>
                        </div>

                        <div>
                            <label>Dribling - ({hability.dribling.aciertos}/{hability.dribling.intentos})</label>
                            <div>

                                <div className="barraMedida" style={{
                                    width: hability.dribling.aciertos * 100 / hability.dribling.intentos + '%',
                                    background: 'cyan'
                                }} />
                                <h6>{(hability.dribling.aciertos * 100 / hability.dribling.intentos).toFixed(1)}%</h6>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="list">
                    <h3>JUGADORES DRAFTEABLES</h3>
                    <div className="jugadores">
                        {DataJugadores.map((jugador, i) => (
                            <div key={i} className="jugador" onClick={() => changeJugadorActive(jugador)}
                                style={jugador.nombre === jugadorActive.nombre ? {borderColor: '#ccc'}:{textDecoration: 'none'}}
                            >
                                <p>{jugador.nombre}</p>
                                <b>{jugador.posicion}</b>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

}