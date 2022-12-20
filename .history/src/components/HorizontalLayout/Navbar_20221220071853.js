import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse, } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import { AiOutlineShop } from "react-icons/ai";

const Navbar = props => {
  const [ui, setui] = useState(false)

  const [email, setemail] = useState(false)

  const [component, setcomponent] = useState(false)
  const [form, setform] = useState(false)
  const [table, settable] = useState(false)
  const [chart, setchart] = useState(false)
  const [icon, seticon] = useState(false)
  const [map, setmap] = useState(false)
  const [extra, setextra] = useState(false)
  const [auth, setauth] = useState(false)

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })
  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="home">
                    <i className="ti-home me-2" />
                    {props.t("Home")} {props.menuOpen}
                  </Link>

                </li>

                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <AiOutlineShop size={20} /> Clothes
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={4}>
                        <div>
                          <span>Man</span>
                          <Link to="/" className="dropdown-item"> T-shirt </Link>
                          <Link to="/" className="dropdown-item">
                            {props.t("Buttons")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {props.t("Cards")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {props.t("Carousel")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {props.t("Dropdowns")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {props.t("Grid")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {props.t("Images")}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link to="/#" className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setcomponent(!component)
                    }}
                  >
                    <AiOutlineShop size={22} /> Others
                  </Link>
                  <div className={classname("dropdown-menu", { show: component })}>
                    <div className="dropdown">
                      <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setemail(!email)
                        }}>
                        Fashion <div className="arrow-down"></div>
                      </Link>
                      <div className={classname("dropdown-menu", { show: email })}>
                        <Row>
                          <Col md={6}>
                            <ul>
                              <li> <Link to="/"> Shirt </Link> </li>
                              <li> <Link to="/"> T-Shirt </Link> </li>
                              <li> <Link to="/"> Pant </Link> </li>
                              <li> <Link to="/"> Underwear </Link> </li>
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          seticon(!icon)
                        }}
                      >
                        {props.t("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >
                        <Link
                          to="/"
                          className="dropdown-item"
                        >
                          {props.t("Material Design")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {props.t("Font awesome")}{" "}
                        </Link>

                        <Link to="/" className="dropdown-item">Ion Icons</Link>

                        <Link to="/" className="dropdown-item">Themify Icons</Link>

                        <Link to="/" className="dropdown-item">
                          {props.t("Dripicons")}
                        </Link>

                        <Link to="/" className="dropdown-item">Typicons Icons</Link>

                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setmap(!map)
                        }}
                      >
                        {props.t("Maps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: map })}
                      >
                        <Link to="/" className="dropdown-item">
                          {props.t("Google Maps")}{" "}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {props.t("Vector Maps")}{" "}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {props.t("Leaflet Maps")}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)