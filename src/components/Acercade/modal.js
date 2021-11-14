import React from 'react'

//React bootstrap
import { Modal } from 'react-bootstrap';

export const ModalReglas = ({show, setShow, regla}) => {

    const handleClose = () => setShow(false);
    const img = 'https://images8.alphacoders.com/108/thumb-1920-1084924.png';

    return (
        <Modal size="lg" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{regla.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img style={{width: '70%'}} 
                src={regla.image || img} alt={regla.title}/>
                <p className="mb-0 mt-2" style={{textAlign: 'justify'}}>{regla.texto}</p>
            </Modal.Body>
        </Modal>
    )

}