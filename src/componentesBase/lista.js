import React from 'react'
import PropTypes from  'prop-types'


const Lista = (props) => (
              <div class="collapse navbar-collapse">
                   <ul className={props.clase}>
                     {props.children}
                  </ul>
              </div>    
            )


Lista.propTypes = {
        clase: PropTypes.string,
}
Lista.defaultProps = {
        clase: ''
}


export default Lista
