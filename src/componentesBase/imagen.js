import React from 'react'
import PropTypes from 'prop-types'


const Imagen = (props) => {
  return (<div><img src={props.imagen} className={props.clase} alt={props.txtalt} title={props.txtalt} /></div>)
}

Imagen.propTypes = {
  imagen: PropTypes.string.isRequired,
  className: PropTypes.string,
  txtalt: PropTypes.string,
}
Imagen.defaultProps = {
  className:'',
  txtalt: '',
}

export default Imagen
