import React from 'react'
import PropTypes from 'prop-types'


const Encabezado = (props) => {
  const Encabe = `h${props.size}`
  return (<div><Encabe>{props.text} <small>{props.smalltext}</small></Encabe></div>)
}

Encabezado.propTypes = {
  size: PropTypes.oneOf(['1','2','3','4','5','6']),
  text: PropTypes.string.isRequired,
  smalltext: PropTypes.string,
}
Encabezado.defaultProps = {
  size:'1',
  smalltext: '',
}

export default Encabezado
