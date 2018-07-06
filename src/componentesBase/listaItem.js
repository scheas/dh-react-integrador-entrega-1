import React from 'react'
import PropTypes from  'prop-types'


const ListaItem = (props) => (
                   <li className={props.clase}>
                     {props.children}
                  </li>
            )


ListaItem.propTypes = {
        clase: PropTypes.string,
}
ListaItem.defaultProps = {
        clase: ''
}


export default ListaItem
