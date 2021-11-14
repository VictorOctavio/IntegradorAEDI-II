import React from 'react';
import './download.css';

export const Download = (props) => {
    return (
        <div className="download" id="download">
            <div className="download-container">
                <div className="download-content container">

                    <div className="cardd">

                        <div className="cardd-body">
                            <h3>DRAFT</h3>
                            <strong>2021</strong>
                        </div>

                        <div className="cardd-footer">
                            <a href="#" download className="btn btn-warning">DESCARGA</a>
                        </div>

                    </div>

                    <div className="cita2" style={{ textAlign: 'center' }}>
                        <p>El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos..</p>
                        <h6 style={{ fontSize: '15px', fontStyle: 'italic', fontWeight: '800' }}>-Michael Jordan-</h6>
                    </div>
                </div>
            </div>
        </div>
    )

}