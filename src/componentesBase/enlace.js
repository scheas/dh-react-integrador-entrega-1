import React from 'react'
import PropTypes from  'prop-types'

const Enlace = (props) => (
                   <a className={props.clase} href={props.enlace} title={props.txtalt}>
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
