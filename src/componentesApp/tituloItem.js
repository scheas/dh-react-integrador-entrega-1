import React from 'react'
import PropTypes from  'prop-types'
import {Imagen,Enlace,GrdCol} from '../componentesBase/'

const TituloItem = (props) => {
                   const EstiloColumna = `col-md-${12/props.itemsPorFila}`
        return (           <div>
                        <GrdCol clase={EstiloColumna}>
                            <Enlace enlace={props.accion} clase="grid-item">
                                <Imagen imagen={props.imagen} txtalt={props.textoAlternativo} clase="img-fluid list-item-img" />
                                    <span className="grid-item-body">
                                      <span className="grid-item-title">{props.nombreTitulo}</span>
                                      <span className="grid-item-date">{props.fechaTitulo}</span>
                                    </span>
                            </Enlace>
                        </GrdCol>
                  </div>)
}

TituloItem.propTypes = {
            accion: PropTypes.string,
            imagen: PropTypes.string.isRequired,
            textoAlternativo: PropTypes.string,
            nombreTitulo: PropTypes.string.isRequired,
            fechaTitulo: PropTypes.string.isRequired,
            itemsPorFila: PropTypes.number,
}
TituloItem.defaultProps = {
       accion: '#',
       textoAlternativo: '',
       itemsPorFila: 6,
}

export default TituloItem
