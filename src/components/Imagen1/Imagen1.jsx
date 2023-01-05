import React from 'react'
import './Imagen1.css'
import Cata from '../../assets/cata.pdf'
import IMG1 from '../../assets/cata.png'

const Descripcion1 = () => {
  return (
    <section id='descripcion1'>
        <div className="container img__container">
            <div className="img-container">
                <img src={IMG1} alt="" />
            </div>
        </div>
        <div className='cta'>
            <a href={Cata} download className='btn'>DESCARGAR IMAGEN</a>
        </div>
        <br/>
        <br/>
        <br/>
    </section>
  )
}

export default Descripcion1