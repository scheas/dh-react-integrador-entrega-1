import React from 'react'
import PropTypes from  'prop-types'


const GrdCol = (props) => (
                   <div className={props.clase}>
                     {props.children}
                  </div>
            )


GrdCol.propTypes = {
        alineacion: PropTypes.oneOf(['start','end','center']),
        clase: PropTypes.string,
}
GrdCol.defaultProps = {
        alineacion: "start",
        clase: "col-md-2",
}


export default GrdCol
