import React from 'react'
import PropTypes from 'prop-types'
import TitluloItem from './tituloItem'
import ClassTitulo from '../accesoADatos/'


const TituloItemsListado = ({itemsPorFila,titulos, onClickDeleteTitulo}) => titulos.map ((item,i ) =>
    <TitluloItem key={`MyIndex${i}`}
                 nombreTitulo={item.nombre}
                 fechaTitulo={item.fechaTitulo}
                 imagen={item.imagen}
                 textoAlternativo={item.nombre}
                 itemsPorFila = {itemsPorFila}
                 accion = {item.linkdestino}
                 onClickDeleteItem  = { onClickDeleteTitulo(item)} />
              )



TituloItemsListado.propTypes = {
  titulos: PropTypes.arrayOf(ClassTitulo).isRequired,
  itemsPorFila: PropTypes.numeric,
   onClickDeleteTitulo: PropTypes.func.isRequired
}

TituloItemsListado.defaultProps = {
  itemsPorFila: 6,
}

export default TituloItemsListado
