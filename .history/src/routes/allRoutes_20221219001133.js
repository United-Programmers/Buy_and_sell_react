import React from "react"
import { Redirect } from "react-router-dom"


//* AUTHENTICATION PAGES
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import UserRegister from "../pages/Authentication/UserRegister"
import AdminRegister from "../pages/Authentication/AdminRegister"
import DriverRegister from "../pages/Authentication/DriverRegister"
import SellerRegister from "../pages/Authentication/SellerRegister"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"


//* DASHBOARD PAGES
import Products from "../pages/Products/Home-Products/index"
import ProductDetail from "../pages/Products/Products-Details/index"
import UserOrders from "../pages/User-Account/Orders/index"
import ProfileInfo from "../pages/User-Account/Profile-info/index"
import ShoppingCart from "../pages/Products/Shopping-Cart/index"


const userRoutes = [
  { path: "/home", component: Products },
  { path: "/details/:id", component: ProductDetail },
  { path: "/user-orders", component: UserOrders },
  { path: "/user-profile", component: ProfileInfo },
  { path: "/shopping-cart", component: ShoppingCart },
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
