import React from 'react'
import PropTypes from  'prop-types'

const GrdRow = (props) => (
                   <div className={`row justify-content-${props.alineacion} ${props.clase}`}>
                     {props.children}
                  </div>
            )



GrdRow.propTypes = {
        alineacion: PropTypes.oneOf(['start','end','center']),
        clase:PropTypes.string,
}
GrdRow.defaultProps = {
        alineacion: "start",
        clase: '',
}
export default GrdRow
