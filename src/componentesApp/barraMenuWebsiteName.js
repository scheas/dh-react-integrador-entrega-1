import React from 'react'
import PropTypes from  'prop-types'

const BarraMenuWebsiteName = (props) => (
            <div className="navbar-header">
              <a className={props.clase} href="#">{props.nombreWebsite}</a>
            </div>
)

BarraMenuWebsiteName.propTypes = {
      clase: PropTypes.string,
      nombreWebsite: PropTypes.string,
}
BarraMenuWebsiteName.defaultProps = {
       clase: 'navbar-brand',
       nombreWebsite: 'Default-WebSite'
}

export default BarraMenuWebsiteName
