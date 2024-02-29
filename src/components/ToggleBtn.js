import React, { useEffect, useState } from "react";
import UseEfectHook from "./UseEffectHook";
import SideBar from "./SideBar";
// import UseEfectHook from "./UseEffectHook";
// import SideBar from "./SideBar;";

const ToggleBtn = () => {
  const [display, setDisplay] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("MouseEvent");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.removeEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>ToggleBtn</button>
      {display && <SideBar/>}
      {/* hook x-{x} y-{y} */}
    </div>
  );
};

export default ToggleBtn;
