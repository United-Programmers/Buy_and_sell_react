import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
// import "../Styles.scss"
import SimpleBar from "simplebar-react"
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import { withTranslation } from "react-i18next"
// import { useStore1Selector } from '../../index';
// import { userDetails } from '../../Redux/Slices/userSlice'
import { FaUserCircle, FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { FcBookmark, FcClapperboard, FcEnteringHeavenAlive, FcReadingEbook } from 'react-icons/fc';
import { MdLiveTv, MdOutlineDashboardCustomize, MdOutlineStarBorder, MdProductionQuantityLimits } from "react-icons/md"
import { BsChatSquareQuote } from "react-icons/bs"
import { BiBookAdd } from "react-icons/bi"
import { RiAccountCircleLine } from "react-icons/ri"

const SidebarContent = props => {
    const ref = useRef()

    // const userDet = useStore1Selector(userDetails);
    // const pic = userDet?.data?.data?.photo;
    // const name = userDet?.data?.data?.firstName;
    // const role = userDet?.data?.data?.role;
    // const userImg = `${process.env.REACT_APP_IMG_API}img/users/`;

    useEffect(() => {
        const pathName = props.location.pathname

        const initMenu = () => {
            new MetisMenu("#side-menu")
            let matchingMenuItem = null
            const ul = document.getElementById("side-menu")
            const items = ul.getElementsByTagName("a")
            for (let i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i]
                    break
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem)
            }
        }
        initMenu()
    }, [props.location.pathname])

    useEffect(() => {
        ref.current.recalculate()
    })

    function scrollElement(item) {
        if (item) {
            const currentPosition = item.offsetTop
            if (currentPosition > window.innerHeight) {
                ref.current.getScrollElement().scrollTop = currentPosition - 300
            }
        }
    }

    function activateParentDropdown(item) {
        item.classList.add("active")
        const parent = item.parentElement
        const parent2El = parent.childNodes[1]
        if (parent2El && parent2El.id !== "side-menu") {
            parent2El.classList.add("mm-show")
        }

        if (parent) {
            parent.classList.add("mm-active")
            const parent2 = parent.parentElement

            if (parent2) {
                parent2.classList.add("mm-show")

                const parent3 = parent2.parentElement

                if (parent3) {
                    parent3.classList.add("mm-active")
                    parent3.childNodes[0].classList.add("mm-active")
                    const parent4 = parent3.parentElement
                    if (parent4) {
                        parent4.classList.add("mm-show")
                        const parent5 = parent4.parentElement
                        if (parent5) {
                            parent5.classList.add("mm-show")
                            parent5.childNodes[0].classList.add("mm-active")
                        }
                    }
                }
            }
            scrollElement(item);
            return false
        }
        scrollElement(item);
        return false
    }

    return (
        <React.Fragment>
            <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        {/* <li className="menu-title">{props.t("Admin Account")} </li> */}
                        <li>
                            <Link to="/vendor-dashboard" className="waves-effect">
                                <MdOutlineDashboardCustomize size={22} className="me-2" />
                                <span >{props.t("Dashboard")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/vendor-products" className="waves-effect">
                                <MdProductionQuantityLimits size={22} className="me-2" />
                                <span >{props.t("Products")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/vendor-addProduct" className="waves-effect">
                                <BiBookAdd size={22} className="me-2" />
                                <span >{props.t("Add new products")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/vendor-orders" className="waves-effect">
                                <MdOutlineStarBorder size={22} className="me-2" />
                                <span >{props.t("Orders")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/vendor-account-settings" className="waves-effect">
                                <RiAccountCircleLine size={22} className="me-2" />
                                <span >{props.t("Account settings")}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </SimpleBar>
        </React.Fragment >
    )
}

SidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))