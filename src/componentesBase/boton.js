import React from 'react'
import PropTypes from 'prop-types'

const Boton = (props) => (<button className={props.clase}  title={props.mensaje}>{props.children}</button>)


Boton.propTypes = {
                clase: PropTypes.string,
                mensaje: PropTypes.string,

}

Boton.defaultProps = {
              clase: '',
              mensaje: '',

}

export default Boton
