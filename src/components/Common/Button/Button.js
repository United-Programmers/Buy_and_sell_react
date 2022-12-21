import React from "react"
import "./style.scss"

export default function Button({ children, btnType }) {
  return <button className={`btn btn-${btnType}`}>{children}</button>
}
