import React, { useState } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions"
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"
import { withTranslation } from "react-i18next"
import logodarkImg from "../../assets/images/logo-dark.png";
import logosmImg from "../../assets/images/logo-sm.png";
import logolightImg from "../../assets/images/logo-light.png";

const Header = props => {

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }


  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/dashboard" className="logo logo-dark">
                {/* <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logodarkImg} alt="" height="17" />
                </span> */}
                <h3>Buy & sell</h3>
              </Link>

              <Link to="/dashboard" className="logo logo-light">
                {/* <span className="logo-sm">
                  <img src={logosmImg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logolightImg} alt="" height="18" />
                </span> */}
                <h3>Buy & sell</h3>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => {
                props.toggleLeftmenu(!props.leftMenu)
              }}
              className="btn btn-sm me-2 font-size-24 d-lg-none header-item waves-effect waves-light"
              id="vertical-menu-btn"
            >
              <i className="mdi mdi-menu"></i>
            </button>
          </div>
          <div className="d-flex">
            {/* <LanguageDropdown /> */}
            <div className="dropdown d-none d-lg-inline-block">
              <button type="button" className="btn header-item noti-icon waves-effect" onClick={() => {
                toggleFullscreen()
              }} data-bs-toggle="fullscreen">
                <i className="mdi mdi-fullscreen"></i>
              </button>
            </div>
            <NotificationDropdown />
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout
  return { layoutType, showRightSidebar, leftMenu }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header))
