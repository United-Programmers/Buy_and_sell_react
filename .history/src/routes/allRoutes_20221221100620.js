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
import VendorsMessage from "../pages/Messages/Vendors/index"
import Account from "../pages/User-Account/Profile-info/Account"

// * Vendors
import VendorAccount from "../pages/Vendors/Profile-account/index"
import VendorDashboard from "../pages/Vendors/Profile-account/Dashboard/index"
import VendorAddProduct from "../pages/Vendors/Profile-account/Add-Products/index"
import VendorProducts from "../pages/Vendors/Profile-account/My-Products/index"
import VendorOrders from "../pages/Vendors/Profile-account/Orders/index"
import VendorAccountSettings from "../pages/Vendors/Profile-account/Account-settings/index"


const userRoutes = [
  { path: "/home", component: Products },
  { path: "/details/:id", component: ProductDetail },
  { path: "/user-orders", component: UserOrders },
  { path: "/user-profile", component: ProfileInfo },
  { path: "/shopping-cart", component: ShoppingCart },
  { path: "/wishlist", component: WishList },
  { path: "/user-message", component: UserMessage },
  { path: "/admin-message", component: AdminMessage },
  { path: "/driver-message", component: DriversMessage },
  { path: "/account", component: Account },


  { path: "/vendors", component: Vendors },
  { path: "/vendor-shop/:id", component: VendorShop },

  //* VENDORS ROUTES
  { path: "/vendor-account", component: VendorAccount },
  { path: "/vendor-dashboard", component: VendorDashboard },
  { path: "/vendor-addProduct", component: VendorAddProduct },
  { path: "/vendor-products", component: VendorProducts },
  { path: "/vendor-orders", component: VendorOrders },
  { path: "/vendor-account-settings", component: VendorAccountSettings },
  //* END

  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/reset-password", component: ResetPassword },
  { path: "/forgot-password", component: ForgetPwd },

  { path: "/user-register", component: UserRegister }, //* user Register
  { path: "/admin-register", component: AdminRegister }, //* Admin Register
  { path: "/driver-register", component: DriverRegister }, //* Driver Register
  { path: "/sellers-register", component: SellerRegister }, //* Vendor Register
]

export { userRoutes, authRoutes }
