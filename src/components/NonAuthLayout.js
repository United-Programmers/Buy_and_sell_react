import PropTypes from 'prop-types'
import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class NonAuthLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.capitalizeFirstLetter.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  // componentDidMount() {
  //   let currentage = this.capitalizeFirstLetter(this.props.location.pathname)

  //   document.title =
  //     currentage + " | Veltrix - Responsive Bootstrap 5 Admin Dashboard"
  // }
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>
  }
}

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
}

export default withRouter(NonAuthLayout)
