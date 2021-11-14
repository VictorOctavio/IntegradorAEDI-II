import React, { useState } from 'react';
import './acercade.css';

//COMPONENTS
import { Card } from '../card/Card';
import { ModalReglas } from './modal';

//Reglas
import DataReglas from '../../data/reglas.json';

export const Acercade = () => {

    //Modal state
    const [show, setShow] = useState(false);
    const [regla, setRegla] = useState({
        title: '',
        texto: '',
        image: ''
    })

    const handleModal = (item) => {
        setRegla({title: item.title, texto: item.texto, image: item.image || null});
        setShow(true);
    }

    console.log(DataReglas)
    return (
        <div className="acerca-de" id="acerca-de">
            <div className="acerca-de-container">
                <div className="acerca-de-content container">

                    <div className="cita">
                        <h3 className="title-acerca-de">DRAFT</h3>
                        <p>Los obstáculos no te tienen que parar. Si te encuentras con un muro, no te des la vuelta y abandones. Averigua como escalarlo, ir a través de el o rodearlo.</p>
                        <h6 style={{ fontSize: '15px', fontStyle: 'italic', fontWeight: '800' }}>-Michael Jordan-</h6>
                    </div>

                    <div className="funcionamiento">
                        <h3 className="title-acerca-de">FUNCIONAMIENTO</h3>
                        <p>Este evento se realiza temporada tras temporada para igualar las condiciones de la NBA. El ultimo equipo en la tabla de posiciones de la liga anterior, va a tener la posibilidad de empezar a fichar primero a los jugadores seleccionados para el DRAFT, incluyendo ademas un mejor presupuesto que el resto. En cambio el primero, va ir ultimo y con un menor presupuesto.
                        </p>
                    </div>

                    <div className="reglas">
                        <h3 className="title-acerca-de">REGLAS</h3>
                        <div className="col-12 cards-container">
                            {DataReglas.map((item, i) => (
                                <div className="col-3" onClick={() => handleModal(item)} key={i}>
                                    <Card item={item}/>
                                </div>
                            ))}
                        </div>

                        {show && (
                            <ModalReglas
                                show={show}
                                setShow={setShow}
                                regla={regla}
                            />
                        )}

                    </div>

                </div>
            </div>
        </div>
    )

}