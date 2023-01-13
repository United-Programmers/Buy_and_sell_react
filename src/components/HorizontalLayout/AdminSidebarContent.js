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
import { MdLiveTv, MdOutlineAssignmentTurnedIn, MdOutlineDashboardCustomize, MdOutlineProductionQuantityLimits, MdOutlineStarBorder, MdProductionQuantityLimits } from "react-icons/md"
import { BsChatSquareQuote, BsTruck, BsClockHistory } from "react-icons/bs"
import { RiAccountCircleLine } from "react-icons/ri"
import { GrUserAdmin, GrUserSettings } from "react-icons/gr"
import { SlUserFollow } from "react-icons/sl"
import { HiOutlineUserRemove } from "react-icons/hi"
import { CiDeliveryTruck } from "react-icons/ci"

const AdminSidebarContent = props => {
    const ref = useRef()

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
                        <li>
                            <Link to="/admin-dashboard" className="waves-effect">
                                <MdOutlineDashboardCustomize size={22} className="me-2" />
                                <span >{props.t("Dashboard")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/new-orders" className="waves-effect">
                                <BsTruck size={22} className="me-2" />
                                <span >{props.t("New Orders")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/assign-orders" className="waves-effect">
                                <MdOutlineAssignmentTurnedIn size={22} className="me-2" />
                                <span >{props.t("Assigned Orders")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/order-history" className="waves-effect">
                                <BsClockHistory size={22} className="me-2" />
                                <span >{props.t("Order-history")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/buyers" className="waves-effect">
                                <SlUserFollow size={22} className="me-2" />
                                <span >{props.t("Buyers (Users)")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/vendors" className="waves-effect">
                                <HiOutlineUserRemove size={22} className="me-2" />
                                <span >{props.t("Vendors (Users)")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/drivers" className="waves-effect">
                                <GrUserAdmin size={22} className="me-2" />
                                <span >{props.t("Drivers (users)")}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/all-product" className="waves-effect">
                                <MdOutlineProductionQuantityLimits size={22} className="me-2" />
                                <span >{props.t("All Products")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/delivered-products" className="waves-effect">
                                <CiDeliveryTruck size={22} className="me-2" />
                                <span >{props.t("Delivered products")}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-account" className="waves-effect">
                                <GrUserSettings size={22} className="me-2" />
                                <span >{props.t("Account settings")}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </SimpleBar>
        </React.Fragment >
    )
}

AdminSidebarContent.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}

export default withRouter(withTranslation()(AdminSidebarContent))