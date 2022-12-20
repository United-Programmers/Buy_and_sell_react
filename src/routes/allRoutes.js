import React from "react"
import { Redirect } from "react-router-dom"

//* AUTHENTICATION PAGES
import Login from "../pages/Authentication/Login/Login"
import Logout from "../pages/Authentication/Logout/Logout"
import UserRegister from "../pages/Authentication/Users/UserRegister"
import AdminRegister from "../pages/Authentication/Admin/AdminRegister"
import DriverRegister from "../pages/Authentication/Driver/DriverRegister"
import SellerRegister from "../pages/Authentication/Sellers/SellerRegister"
import ForgetPwd from "../pages/Authentication/Forgot password/ForgetPassword"
import ResetPassword from "../pages/Authentication/Reset password/ResetPassword"


//* DASHBOARD PAGES
import Products from "../pages/Products/Home-Products/index"
import ProductDetail from "../pages/Products/Products-Details/index"
import UserOrders from "../pages/User-Account/Orders/index"
import ProfileInfo from "../pages/User-Account/Profile-info/index"
import ShoppingCart from "../pages/Products/Shopping-Cart/index"
import WishList from "../pages/Products/Wishlist/index"
import Vendors from "../pages/Vendors/All-vendors/index"
import VendorShop from "../pages/Vendors/Vendors-shops/index"
import UserMessage from "../pages/Messages/User/index"
import AdminMessage from "../pages/Messages/Admin/index"
import DriversMessage from "../pages/Messages/Drivers/index"
import VenorsMessage from "../pages/Messages/Vendors/index"


const userRoutes = [
  { path: "/home", component: Products },
  { path: "/details/:id", component: ProductDetail },
  { path: "/user-orders", component: UserOrders },
  { path: "/user-profile", component: ProfileInfo },
  { path: "/shopping-cart", component: ShoppingCart },
  { path: "/wishlist", component: WishList },
  { path: "/vendors", component: Vendors },
  { path: "/vendor-shop/:id", component: VendorShop },
  { path: "/user-message", component: UserMessage },
  { path: "/admin-message", component: AdminMessage },
  { path: "/driver-message", component: DriversMessage },
  { path: "/vendor-message", component: VenorsMessage },
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/reset-password", component: ResetPassword },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/user-register", component: UserRegister },
  { path: "/admin-register", component: AdminRegister },
  { path: "/driver-register", component: DriverRegister },
  { path: "/sellers-register", component: SellerRegister },
]

export { userRoutes, authRoutes }
