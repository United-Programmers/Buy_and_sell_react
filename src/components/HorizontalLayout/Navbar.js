import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse, } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"
import { AiOutlineShop, AiOutlineHome } from "react-icons/ai";
import { BsLaptop } from "react-icons/bs";
import { RiMentalHealthLine } from "react-icons/ri";
import { GiFruitBowl, GiHollowCat } from "react-icons/gi";
import { MdOutlineToys } from "react-icons/md";
import { BiMusic } from "react-icons/bi";

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
                    <AiOutlineHome size={20} />  Home
                  </Link>
                </li>





                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <AiOutlineShop size={20} /> Fashion
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Clothes </Link>
                          <Link to="/" className="dropdown-item"> T-shirt </Link>
                          <Link to="/" className="dropdown-item"> shirt </Link>
                          <Link to="/" className="dropdown-item"> Pant </Link>
                          <Link to="/" className="dropdown-item"> Underwear </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Accessories </Link>
                          <Link to="/" className="dropdown-item"> Belt </Link>
                          <Link to="/" className="dropdown-item"> Hat </Link>
                          <Link to="/" className="dropdown-item"> Sunglasses </Link>
                          <Link to="/" className="dropdown-item"> Watches </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Shoes </Link>
                          <Link to="/" className="dropdown-item"> Sneakers </Link>
                          <Link to="/" className="dropdown-item"> Sandals </Link>
                          <Link to="/" className="dropdown-item"> Formal </Link>
                          <Link to="/" className="dropdown-item"> Casual </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Bags </Link>
                          <Link to="/" className="dropdown-item"> Backpack </Link>
                          <Link to="/" className="dropdown-item"> Crossbody Bags </Link>
                          <Link to="/" className="dropdown-item"> Side Bags </Link>
                          <Link to="/" className="dropdown-item"> Slides </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>



                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <BsLaptop size={20} /> Electronics
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Smart Phones </Link>
                          <Link to="/" className="dropdown-item"> Apple iPhones </Link>
                          <Link to="/" className="dropdown-item">Huawei Mobiles </Link>
                          <Link to="/" className="dropdown-item"> Samsung Mobiles </Link>
                          <Link to="/" className="dropdown-item"> Vivo Mobiles </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Accessories </Link>
                          <Link to="/" className="dropdown-item"> Phone Cases </Link>
                          <Link to="/" className="dropdown-item"> Power Banks </Link>
                          <Link to="/" className="dropdown-item"> Wireless Chargers </Link>
                          <Link to="/" className="dropdown-item"> Handfrees </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Gaming Consoles </Link>
                          <Link to="/" className="dropdown-item"> PlayStation Consoles </Link>
                          <Link to="/" className="dropdown-item"> PlayStation Games </Link>
                          <Link to="/" className="dropdown-item"> PlayStation Controllers </Link>
                          <Link to="/" className="dropdown-item"> Xbox Games </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Cameras& Drones </Link>
                          <Link to="/" className="dropdown-item"> Video Camera </Link>
                          <Link to="/" className="dropdown-item"> DSLR </Link>
                          <Link to="/" className="dropdown-item"> Drones </Link>
                          <Link to="/" className="dropdown-item"> IP Security Camera </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>







                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <RiMentalHealthLine size={20} /> Health & Beauty
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Bath & Body </Link>
                          <Link to="/" className="dropdown-item"> Body & Massage Oils </Link>
                          <Link to="/" className="dropdown-item"> Body Soaps & Shower Gels </Link>
                          <Link to="/" className="dropdown-item"> Foot Care </Link>
                          <Link to="/" className="dropdown-item"> Body Moisturizers </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Beauty Tools </Link>
                          <Link to="/" className="dropdown-item"> Curling Irons </Link>
                          <Link to="/" className="dropdown-item"> Multi-Stylers </Link>
                          <Link to="/" className="dropdown-item"> Hair Dryers </Link>
                          <Link to="/" className="dropdown-item"> Slimming & Electric Messagers </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Hair Care </Link>
                          <Link to="/" className="dropdown-item"> Shampoo </Link>
                          <Link to="/" className="dropdown-item"> Hair Treatments </Link>
                          <Link to="/" className="dropdown-item"> Hair Coloring </Link>
                          <Link to="/" className="dropdown-item"> Hair Brushes </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Skin Care </Link>
                          <Link to="/" className="dropdown-item"> Serum & Essence </Link>
                          <Link to="/" className="dropdown-item"> Facial Cleansers </Link>
                          <Link to="/" className="dropdown-item"> Face Masks </Link>
                          <Link to="/" className="dropdown-item"> Moisturizers and Cream </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>










                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <GiFruitBowl size={20} /> Groceries
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Beverages </Link>
                          <Link to="/" className="dropdown-item"> Coffee </Link>
                          <Link to="/" className="dropdown-item"> Tea </Link>
                          <Link to="/" className="dropdown-item"> Juices </Link>
                          <Link to="/" className="dropdown-item"> Soft Drinks </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Breakfast & Snacks </Link>
                          <Link to="/" className="dropdown-item"> Biscuit </Link>
                          <Link to="/" className="dropdown-item"> Chocolate </Link>
                          <Link to="/" className="dropdown-item"> Oatmeals </Link>
                          <Link to="/" className="dropdown-item"> Jam,Honey & Spreads </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Fresh Products </Link>
                          <Link to="/" className="dropdown-item"> Fresh Fruits </Link>
                          <Link to="/" className="dropdown-item"> Fresh Vegetables </Link>
                          <Link to="/" className="dropdown-item"> Bread </Link>
                          <Link to="/" className="dropdown-item"> Dry Fruits </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Food Staples </Link>
                          <Link to="/" className="dropdown-item"> Canned Food </Link>
                          <Link to="/" className="dropdown-item"> Grains,Beans & Pulses </Link>
                          <Link to="/" className="dropdown-item"> Rice </Link>
                          <Link to="/" className="dropdown-item"> Noodles </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>






                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <GiHollowCat size={20} /> Pet
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Cat </Link>
                          <Link to="/" className="dropdown-item"> Cat Food </Link>
                          <Link to="/" className="dropdown-item"> Beds, Mats & Houses </Link>
                          <Link to="/" className="dropdown-item"> Gromming </Link>
                          <Link to="/" className="dropdown-item"> Carriers </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Dog </Link>
                          <Link to="/" className="dropdown-item"> Dog Food </Link>
                          <Link to="/" className="dropdown-item"> Cages </Link>
                          <Link to="/" className="dropdown-item"> Leashes & Collars</Link>
                          <Link to="/" className="dropdown-item"> Bowls & Feeders </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>




                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <MdOutlineToys size={20} /> Baby Toys
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Bath Toys </Link>
                          <Link to="/" className="dropdown-item"> Building Block Toys </Link>
                          <Link to="/" className="dropdown-item"> Crib Toys </Link>
                          <Link to="/" className="dropdown-item"> Rattles </Link>
                          <Link to="/" className="dropdown-item"> Push & Pulls Toys</Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Remote Control & Vehicles </Link>
                          <Link to="/" className="dropdown-item"> Die-Cast cars </Link>
                          <Link to="/" className="dropdown-item"> RC Vehicles & Batteries </Link>
                          <Link to="/" className="dropdown-item"> toy drones </Link>
                          <Link to="/" className="dropdown-item"> toy drones </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>



                <li className="nav-item dropdown mega-dropdown">
                  <Link to="/#" onClick={e => {
                    e.preventDefault()
                    setui(!ui)
                  }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <BiMusic size={20} /> Music & Sound
                  </Link>
                  <div className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                    { show: ui })}>
                    <Row>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Sound Accessories </Link>
                          <Link to="/" className="dropdown-item"> Portable Speakers </Link>
                          <Link to="/" className="dropdown-item"> Bluetooth Handsets </Link>
                          <Link to="/" className="dropdown-item"> Mono Headsets </Link>
                          <Link to="/" className="dropdown-item"> Wireless Earbuds </Link>
                        </div>
                      </Col>
                      <Col lg={3}>
                        <div>
                          <Link className="dropdown-item font-weight-bold"> Music </Link>
                          <Link to="/" className="dropdown-item"> Subscription Vouchers </Link>
                          <Link to="/" className="dropdown-item"> amplifiers </Link>
                          <Link to="/" className="dropdown-item"> Guitar & Bass Accessories </Link>
                          <Link to="/" className="dropdown-item"> General Accessories </Link>
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