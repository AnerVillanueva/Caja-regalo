import React from 'react'
import './Descripcion1.css'
import IMG1 from '../../assets/vino1.jpg'

const Descripcion1 = () => {
  return (
    <section id='descripcion1'>
        <div className="container Description__container">
            <div className="img-container">
                <img src={IMG1} alt="" />
            </div>
            <div className='text-container'>
                <h5>¿A quien le gusta el vino mas que el agua?</h5>
                <p>Pues esto es para vosotros, pareja. Los reyes magos han recaudado información sobre vuestros alimentos favoritos y han notado que en la mesa siempre hay mas vino que agua</p>
            </div> 
        </div>
    </section>
  )
}

export default Descripcion1