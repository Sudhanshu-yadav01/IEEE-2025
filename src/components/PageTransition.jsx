import React from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useLocation} from "react-router-dom";

const PageTransition = ({children}) => {
  const location = useLocation();
  const nodeRef = React.useRef(null);
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="fade-page"
        timeout={350}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className="fade-page-wrapper w-full h-full">
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransition;
