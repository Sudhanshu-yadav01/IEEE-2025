"use client"

import React from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { useLocation } from "react-router-dom"

const PageTransition = ({ children, transitionType = "fade" }) => {
  const location = useLocation()
  const nodeRef = React.useRef(null)

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames={`${transitionType}-page`}
        timeout={350}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className={`${transitionType}-page-wrapper w-full h-full`}>
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default PageTransition
