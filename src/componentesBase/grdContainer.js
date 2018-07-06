import React from 'react'
import PropTypes from  'prop-types'

const GrdContainer = (props) =>
                   <div className={props.esFluido ? "container-fluid" : "container" }>
                     {props.children}
                  </div>


GrdContainer.propTypes = {
        esFluido: PropTypes.bool
}
GrdContainer.defaultProps = {
        esFluido: false
}

export default GrdContainer
