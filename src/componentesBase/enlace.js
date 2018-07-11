import React from 'react'
import PropTypes from  'prop-types'

const Enlace = (props) => (
                   <a href={props.enlace} title={props.txtalt} className={props.clase}>
                     {props.children}
                  </a>
            )


Enlace.propTypes = {
        clase: PropTypes.string,
        enlace: PropTypes.string,
        txtalt: PropTypes.string
}
Enlace.defaultProps = {
        clase: '',
        enlace:'#',
        txtalt: '',

}


export default Enlace
