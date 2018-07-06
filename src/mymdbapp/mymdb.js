import React, {Component} from 'react'
import PropTypes from 'prop-types'


import Etiqueta from '../componentesBase/etiqueta'
import Encabezado from '../componentesBase/encabezado'

class Mymdb extends Component {
      constructor() {
            super()
      }
      render() {
          return (
            <div>
            <Etiqueta text='Prueba 1' />
            <Encabezado size="1" text="texto 1" />
            <Encabezado size="3" text="texto 1" smalltext="(2018)" />
            <Encabezado text="Solo Texto" />
            </div>
          )
      }
}




export default Mymdb
