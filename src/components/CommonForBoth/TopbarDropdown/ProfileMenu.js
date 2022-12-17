import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// users
import user1 from "../../../assets/images/users/user-4.jpg"

const ProfileMenu = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false)

  const [username, setusername] = useState("Admin")

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.displayName)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        const obj = JSON.parse(localStorage.getItem("authUser"))
        setusername(obj.username)
      }
    }
  }, [props.success])

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={user1}
            alt="Header Avatar"
          />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile">
            {" "}
            <i className="bx bx-user font-size-16 align-middle me-1" />
            {props.t("Profile")}{" "}
          </DropdownItem>
          <DropdownItem tag="a" href="auth-lock-screen">
            <i className="bx bx-lock-open font-size-16 align-middle me-1" />
            {props.t("Lock screen")}
          </DropdownItem>
          <div className="dropdown-divider" />
          <Link to="/logout" className="dropdown-item">
            <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
            <span>{props.t("Logout")}</span>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

ProfileMenu.propTypes = {
  success: PropTypes.any,
  t: PropTypes.any
}

const mapStatetoProps = state => {
  const { error, success } = state.Profile
  return { error, success }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
)
