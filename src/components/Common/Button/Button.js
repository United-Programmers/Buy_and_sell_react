import React from "react"
import "./style.scss"

export default function Button({ isDisable = false, children, btnType }) {
  return (
    <button disabled={isDisable} className={`btn btn-${btnType}`}>
      {children}
    </button>
  )
}
