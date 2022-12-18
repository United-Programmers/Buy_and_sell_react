import React from "react"
import { Redirect } from "react-router-dom"

import UserProfile from "../pages/Authentication/user-profile"
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"


import Products from "../pages/Products/Home-Products/index"
import ProductDetail from "../pages/Products/Products-Details/index"

const userRoutes = [
  { path: "/home", component: Products },
  { path: "/details/:id", component: ProductDetail },
  { path: "/profile", component: UserProfile },
  { path: "/", exact: true, component: () => <Redirect to="/home" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
