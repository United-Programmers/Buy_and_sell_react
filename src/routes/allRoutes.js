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
import RelatedProducts from "../pages/Products/Products-Details/components/RelatedProducts"
import ShoppingCart from "../pages/Products/Shopping-Cart/index"
import WishList from "../pages/Products/Wishlist/index"
import DeliverOption from "../pages/Products/Deliver-Option/DeliverOption"
import DeliverAddress from "../pages/Products/Deliver-Option/DeliverAddress"


// * USER OR BUYERS PAGES
import Account from "../pages/User-Account/Profile-info/Account"
import UserOrders from "../pages/User-Account/Orders/index"
import ProfileInfo from "../pages/User-Account/Profile-info/index"
import PaymentDetails from "../pages/User-Account/Payments/index"


//* PAGE MESSAGES
import Messages from "../pages/Messages/index"
// import UserMessage from "../pages/Messages/User/index"
// import AdminMessage from "../pages/Messages/Admin/index"
// import DriversMessage from "../pages/Messages/Drivers/index"
// import VendorsMessage from "../pages/Messages/Vendors/index"


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


// * DRIVER PAGES 
import DriverAccount from "../pages/Driver-dashboard/index"
import DriverDashboard from "../pages/Driver-dashboard/Dashboard/index"
import ProductToDeliver from "../pages/Driver-dashboard/Product-Delivered/index"
import DeliverHistory from "../pages/Driver-dashboard/Deliver-History/index"
import DriverAccountSettings from "../pages/Driver-dashboard/Account-Settings/index"


// * ADMIN PAGES 
import AdminDashboard from "../pages/Admin-dashboard/Dashboard/index"
import AdminNewOrders from "../pages/Admin-dashboard/NewOrders/index"
import AdminAssignOrders from "../pages/Admin-dashboard/AssignOrders/index"
import AdminOrderHistory from "../pages/Admin-dashboard/OrderHistory/index"
import AdminAccountSettings from "../pages/Admin-dashboard/AccountSettings/index"
import AdminDrivers from "../pages/Admin-dashboard/Drivers/index"
import AdminBuyers from "../pages/Admin-dashboard/Buyers/index"
import AdminVendors from "../pages/Admin-dashboard/Vendors/index"
import AdminTotalProducts from "../pages/Admin-dashboard/TotalProducts/index"
import AdminDeliveredProducts from "../pages/Admin-dashboard/DeliveredProducts/index"



const userRoutes = [

  //* DASHBOARD PAGES
  { path: "/home", component: Products },
  { path: "/details/:id", component: ProductDetail },
  { path: "/related-products", component: RelatedProducts },
  { path: "/shopping-cart", component: ShoppingCart },
  { path: "/wishlist", component: WishList },
  { path: "/deliver-option", component: DeliverOption },
  { path: "/deliver-address-details", component: DeliverAddress },

  //*END 


  //* USER OR BUYERS ACCOUNT
  { path: "/account", component: Account },
  { path: "/user-orders", component: UserOrders },
  { path: "/user-profile", component: ProfileInfo },
  //* END


  //* MESSAGE ROUTES
  { path: "/messages", component: Messages },
  // { path: "/user-message", component: UserMessage },
  // { path: "/admin-message", component: AdminMessage },
  // { path: "/driver-message", component: DriversMessage },
  // { path: "/vendor-message", component: VendorsMessage },


  { path: "/payment-details", component: PaymentDetails },
  // * END


  //* VENDORS ROUTES
  { path: "/vendors-products", component: Vendors },
  { path: "/vendors-list", component: VendorList },
  { path: "/vendor-shop/:id", component: VendorShop },
  { path: "/vendor-account", component: VendorAccount },
  { path: "/vendor-dashboard", component: VendorDashboard },
  { path: "/vendor-addProduct", component: VendorAddProduct },
  { path: "/vendor-products", component: VendorProducts },
  { path: "/vendor-orders", component: VendorOrders },
  { path: "/vendor-account-settings", component: VendorAccountSettings },
  //* END



  //* DRIVER ROUTES
  { path: "/driver-account", component: DriverAccount },
  { path: "/driver-dashboard", component: DriverDashboard },
  { path: "/driver-products-delivery", component: ProductToDeliver },
  { path: "/deliver-history", component: DeliverHistory },
  { path: "/driver-account-settings", component: DriverAccountSettings },
  //* END



  //* ADMIN ROUTES
  { path: "/admin-dashboard", component: AdminDashboard },
  { path: "/admin-account", component: AdminAccountSettings },
  { path: "/new-orders", component: AdminNewOrders },
  { path: "/assign-orders", component: AdminAssignOrders },
  { path: "/order-history", component: AdminOrderHistory },
  { path: "/drivers", component: AdminDrivers },
  { path: "/buyers", component: AdminBuyers },
  { path: "/vendors", component: AdminVendors },
  { path: "/all-product", component: AdminTotalProducts },
  { path: "/delivered-products", component: AdminDeliveredProducts },
  //* END


  { path: "/", exact: true, component: () => <Redirect to="/home" /> },




  { path: "/logout", component: Logout }, //* logout
  { path: "/login", component: Login }, //* login
  { path: "/reset-password", component: ResetPassword }, //* reset password
  { path: "/forgot-password", component: ForgetPwd }, //* forgot password

  { path: "/user-register", component: UserRegister }, //* user Register
  { path: "/admin-register", component: AdminRegister }, //* Admin Register
  { path: "/driver-register", component: DriverRegister }, //* Driver Register
  { path: "/sellers-register", component: SellerRegister }, //* Vendor Register
]

const authRoutes = [

  // { path: "/logout", component: Logout }, //* logout
  // { path: "/login", component: Login }, //* login
  // { path: "/reset-password", component: ResetPassword }, //* reset password
  // { path: "/forgot-password", component: ForgetPwd }, //* forgot password

  // { path: "/user-register", component: UserRegister }, //* user Register
  // { path: "/admin-register", component: AdminRegister }, //* Admin Register
  // { path: "/driver-register", component: DriverRegister }, //* Driver Register
  // { path: "/sellers-register", component: SellerRegister }, //* Vendor Register
]

export { userRoutes, authRoutes }
