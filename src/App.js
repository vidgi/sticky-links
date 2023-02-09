import "./App.css";
import "./fonts/segoepr.ttf";

import React, { useState, useRef, useEffect } from "react";
import { StickyLinkData, StickyImageData } from "./sticky-data";
import { StickyNote, StickyImageNote } from "./sticky-components";

function App() {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const existingDivPositions = JSON.parse(localStorage.getItem("positions_div"));
    setPositions(existingDivPositions);
    setHasLoaded(true);
    // console.log(existingDivPositions);
  }, []);

  useEffect(() => {
    localStorage.setItem(`positions_div`, JSON.stringify(positions));
  }, [positions]);

  return hasLoaded ? (
    <div className="App" style={{ height: "100vh", width: "30vw" }}>
      <>
        {StickyLinkData.map((item) => (
          <StickyNote key={item.key} id={item.id} color={item.color} links={item.links} position={item.position} nodeRef={nodeRef} />
        ))}
        {StickyImageData.map((item) => (
          <StickyImageNote key={item.key} id={item.id} color={item.color} image={item.image} position={item.position} nodeRef={nodeRef} />
        ))}
      </>
    </div>
  ) : null;
}

export default App;
