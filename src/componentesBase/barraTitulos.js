import React from 'react'
import PropTypes from  'prop-types'

const BarraTitulo = (props) => (
                   <nav className={props.clase}>
                     {props.children}
                  </nav>)


BarraTitulo.propTypes = {
        esFluido: PropTypes.bool,
        clase: PropTypes.string,
}
BarraTitulo.defaultProps = {
        esFluido: false,
        clase: '',
}

export default BarraTitulo
