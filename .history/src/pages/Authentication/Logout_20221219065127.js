import PropTypes from 'prop-types'
import React, { useEffect } from "react"

const Logout = () => {
  return <div>
    <h1>LOGOUT</h1>
  </div>
}

Logout.propTypes = {
  history: PropTypes.object,
  logoutUser: PropTypes.func
}

export default Logout
