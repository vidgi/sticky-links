import "./App.css";
import "./fonts/segoepr.ttf";

import React, { useState, useRef, useEffect } from "react";
import { StickyLinkData, StickyImageData, ReceivedLinkData } from "./sticky-data";
import { StickyNote, StickyImageNote } from "./sticky-components";
import { YellowSticky, PinkSticky, PurpleSticky, GreenSticky, BlueSticky } from "./colored-sticky-styles";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function getRandomSticky() {
  var stickyColors = [YellowSticky, PinkSticky, PurpleSticky, GreenSticky, BlueSticky];
  const random = Math.floor(Math.random() * stickyColors.length);
  return stickyColors[random];
}

function App() {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const nodeRef = useRef(null);
  let params = new URLSearchParams(window.location.search);
  let queryString = params.get("query");
  let showReceivedLinks = queryString === "received";

  useEffect(() => {
    const existingDivPositions = JSON.parse(localStorage.getItem("positions_div"));
    setPositions(existingDivPositions);
    setHasLoaded(true);
    // console.log(existingDivPositions);
  }, []);

  useEffect(() => {
    localStorage.setItem(`positions_div`, JSON.stringify(positions));
  }, [positions]);

  let shuffledReceivedLinkData = shuffle(ReceivedLinkData);

  return hasLoaded ? (
    <div className="App" style={{ height: "100vh", width: "30vw" }}>
      <>
        {!showReceivedLinks ? (
          <>
            {StickyLinkData.map((item) => (
              <div key={item.key}>
                <StickyNote id={item.id} color={item.color} links={item.links} position={item.position} nodeRef={nodeRef} />
              </div>
            ))}
            {StickyImageData.map((item) => (
              <div key={item.key}>
                <StickyImageNote id={item.id} color={item.color} image={item.image} position={item.position} nodeRef={nodeRef} />
              </div>
            ))}
          </>
        ) : (
          <>
            {shuffledReceivedLinkData.map((item, index) => (
              <div key={index}>
                <StickyNote
                  id={index}
                  name={item.name}
                  color={getRandomSticky()}
                  links={item.link}
                  position={{
                    x: Math.round(Math.random() * 0.7 * window.innerWidth),
                    y: Math.round(Math.random() * 0.7 * window.innerHeight),
                  }}
                  nodeRef={nodeRef}
                />
              </div>
            ))}
          </>
        )}
      </>
    </div>
  ) : null;
}

export default App;
