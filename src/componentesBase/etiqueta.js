import React from 'react'
import PropTypes from  'prop-types'

const Etiqueta = (props) => (<p className={props.class} align={props.align} style={props.style}>{props.text}</p>);


Etiqueta.propTypes = {
  align: PropTypes.oneOf(['left','right','center']),
  style: PropTypes.object,
  text: PropTypes.string.isRequired,
  class: PropTypes.string,
}

Etiqueta.defaultProps = {
  style: {color: 'black'},
  align: 'left',
  class: ''
}
export default Etiqueta
