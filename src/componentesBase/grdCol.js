import React from 'react'
import PropTypes from  'prop-types'


const GrdCol = (props) => (
                   <div className={`col`}>
                     {props.children}
                  </div>
            )


GrdCol.propTypes = {
        alineacion: PropTypes.oneOf(['start','end','center'])
}
GrdCol.defaultProps = {
        alineacion: "start"
}


export default GrdCol
