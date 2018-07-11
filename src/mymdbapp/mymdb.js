import React, {Component} from 'react'
import PropTypes from 'prop-types'


import BotonFavAdd, {BotonFavDel,BotonVista,BarraMenu,TituloItem,MisFavoritos,PeliculasMasVistas,SeriesMasVistas} from '../componentesApp/'
import Etiqueta,{Encabezado, Boton,Imagen} from '../componentesBase/'
import TestComponent from '../componentesApp/testComponent'

class Mymdb extends Component {
      constructor(props) {
            super(props)
      }
      render() {
          return (
            <div>
            <Etiqueta text='Prueba 1' />
            <Encabezado size="1" text="texto 1" />
            <Encabezado size="3" text="texto 1" smalltext="(2018)" />
            <Encabezado text="Solo Texto" />
            <Boton>Este Boton</Boton>

            <BotonFavAdd />
            <BotonFavDel />
            <BotonVista />

            <br />
            <br />
            <hr />
                        <MisFavoritos />
                        <PeliculasMasVistas />
                        <SeriesMasVistas />
            <hr />
            <br />
            <br />


            <Imagen imagen='./favicon.png' txtalt='Texto Alt' />

            <BarraMenu />

            <TituloItem accion="http://www.5hispanos.com" imagen="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" textoAlternativo="TEST" nombreTitulo="Titulo" fechaTitulo="20/03/1975" itemsPorFila={4}  />



            <TestComponent />
            </div>
          )
      }
}

Mymdb.propTypes = {


}

Mymdb.defaultProps = {


}


export default Mymdb
