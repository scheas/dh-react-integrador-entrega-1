import React from 'react'
import PropTypes from 'prop-types'

//const Encabe = props.size

const Encabezado = (props) => {
  //<div>{`<h${props.size}>${props.text} <small>${props.smalltext}</small></h${props.size}>`}</div>
  // <div>{`<Encabe>${props.text} <small>${props.smalltext}</small></Encabe>`}
  const Encabe = `h${props.size}`
  return (<div><Encabe>{props.text} <small>{props.smalltext}</small></Encabe></div>)
}

Encabezado.PropTypes = {
  size: PropTypes.oneOf(['1','2','3','4','5','6']),
  text: PropTypes.string.isRequired,
  smalltext: PropTypes.string,
}
Encabezado.defaultProps = {
  size:'1',
  smalltext: '',
}

export default Encabezado
