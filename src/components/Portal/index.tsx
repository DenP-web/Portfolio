import React, { ReactElement, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactElement;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    const parent = document.getElementById("modal");
    if (!parent) {
      console.error("Modal parent element not found");
      return;
    }
    parent.appendChild(el);
    return () => {
      parent.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
