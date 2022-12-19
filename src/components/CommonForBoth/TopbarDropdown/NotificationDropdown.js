import React, { useState } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap"
import SimpleBar from "simplebar-react"
import { withTranslation } from "react-i18next"
import { BsCart4 } from 'react-icons/bs';

const Cart = props => {
  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
        <DropdownToggle className="btn header-item noti-icon waves-effect" tag="button" id="page-header-notifications-dropdown">
          <BsCart4 />
          <span className="badge bg-danger rounded-pill">3</span>
        </DropdownToggle>

    </React.Fragment>
  )
}

export default Cart