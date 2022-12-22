import React from "react"
import { Redirect } from "react-router-dom"


//* AUTHENTICATION OR  PAGES
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
import ShoppingCart from "../pages/Products/Shopping-Cart/index"
import WishList from "../pages/Products/Wishlist/index"


// * USER OR BUYERS PAGES
import Account from "../pages/User-Account/Profile-info/Account"
import UserOrders from "../pages/User-Account/Orders/index"
import ProfileInfo from "../pages/User-Account/Profile-info/index"
import PaymentDetails from "../pages/User-Account/Payments/index"


//* PAGE MESSAGES
import UserMessage from "../pages/Messages/User/index"
import AdminMessage from "../pages/Messages/Admin/index"
import DriversMessage from "../pages/Messages/Drivers/index"
import VendorsMessage from "../pages/Messages/Vendors/index"


// * VENDORS PAGES 
import Vendors from "../pages/Vendors/All-vendors/index"
import VendorList from "../pages/Vendors/List-of-vendors/index"
import VendorShop from "../pages/Vendors/Vendors-shops/index"
import VendorAccount from "../pages/Vendors/Profile-account/index"
import VendorDashboard from "../pages/Vendors/Profile-account/Dashboard/index"
import VendorAddProduct from "../pages/Vendors/Profile-account/Add-Products/index"
import VendorProducts from "../pages/Vendors/Profile-account/My-Products/index"
import VendorOrders from "../pages/Vendors/Profile-account/Orders/index"
import VendorAccountSettings from "../pages/Vendors/Profile-account/Account-settings/index"



const userRoutes = [

  //* DASHBOARD PAGES
  { path: "/home", component: Products },
  { path: "/details/:id", component: ProductDetail },
  { path: "/shopping-cart", component: ShoppingCart },
  { path: "/wishlist", component: WishList },
  //*END 


  //* USER OR BUYERS ACCOUNT
  { path: "/account", component: Account },
  { path: "/user-orders", component: UserOrders },
  { path: "/user-profile", component: ProfileInfo },
  //* END


  //* MESSAGE ROUTES
  { path: "/user-message", component: UserMessage },
  { path: "/admin-message", component: AdminMessage },
  { path: "/driver-message", component: DriversMessage },

  { path: "/vendor-message", component: VendorsMessage },
  { path: "/payment-details", component: PaymentDetails },
  // * END


  //* VENDORS ROUTES
  { path: "/vendors", component: Vendors },
  { path: "/vendors-list", component: VendorList },
  { path: "/vendor-shop/:id", component: VendorShop },
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
  { path: "/logout", component: Logout }, //* logout
  { path: "/login", component: Login }, //* login
  { path: "/reset-password", component: ResetPassword }, //* reset password
  { path: "/forgot-password", component: ForgetPwd }, //* forgot password

  { path: "/user-register", component: UserRegister }, //* user Register
  { path: "/admin-register", component: AdminRegister }, //* Admin Register
  { path: "/driver-register", component: DriverRegister }, //* Driver Register
  { path: "/sellers-register", component: SellerRegister }, //* Vendor Register

]

export { userRoutes, authRoutes }
