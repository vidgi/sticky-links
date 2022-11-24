import "./App.css";
import "./fonts/segoepr.ttf";

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const YellowSticky = styled.div`
  word-wrap: break-word;
  position: absolute;
  background-color: rgba(232, 224, 149);
  padding: 0.5em 1em;
  border-top: 2rem solid rgba(242, 237, 191);
  width: 15em;
  height: 13em;
  margin: 0.3em;
  cursor: move;
  text-align: left;
  -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(15deg, rgba(2232, 224, 149) 0%, rgba(250, 246, 212) 100%);
`;

const PinkSticky = styled.div`
  word-wrap: break-word;
  position: absolute;
  background-color: LightPink;
  padding: 0.5em 1em;
  border-top: 2rem solid rgb(252, 199, 206);
  width: 15em;
  height: 13em;
  margin: 0.3em;
  cursor: move;
  text-align: left;
  -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(15deg, LightPink 0%, rgba(255, 212, 217) 100%);
`;

const PurpleSticky = styled.div`
  word-wrap: break-word;
  position: absolute;
  background-color: Thistle;
  padding: 0.5em 1em;
  border-top: 2rem solid rgba(227, 197, 227);
  width: 15em;
  height: 13em;
  margin: 0.3em;
  cursor: move;
  text-align: left;
  -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(15deg, Thistle 0%, rgba(235, 211, 235) 100%);
`;

const GreenSticky = styled.div`
  word-wrap: break-word;
  position: absolute;
  background-color: LightGreen;
  padding: 0.5em 1em;
  border-top: 2rem solid rgba(170, 240, 170);
  width: 15em;
  height: 13em;
  margin: 0.3em;
  cursor: move;
  text-align: left;
  -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(15deg, LightGreen 0%, rgba(187, 250, 187) 100%);
`;

const BlueSticky = styled.div`
  word-wrap: break-word;
  position: absolute;
  background-color: LightBlue;
  padding: 0.5em 1em;
  border-top: 2rem solid rgba(185, 225, 237);
  width: 15em;
  height: 13em;
  margin: 0.3em;
  cursor: move;
  text-align: left;
  -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(15deg, LightBlue 0%, rgba(200, 236, 247) 100%);
`;

function App() {
  const [positions, setPositions] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const existingDivPositions = JSON.parse(localStorage.getItem("positions_div"));
    setPositions(existingDivPositions);
    setHasLoaded(true);
    console.log(existingDivPositions);
    console.log("has loaded");
  }, []);

  useEffect(() => {
    localStorage.setItem(`positions_div`, JSON.stringify(positions));
  }, [positions]);

  return hasLoaded ? (
    <div className="App" style={{ height: "100vh", width: "30vw" }}>
      <Draggable defaultPosition={{ x: 20, y: 20 }} key={4} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <BlueSticky id={"d"}>
            {
              <a target="_blank" rel="noreferrer" href="https://ravel.neocities.org/">
                https://ravel.neocities.org/
              </a>
            }
          </BlueSticky>
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 120, y: 350 }} key={1} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <YellowSticky id={"noodledesk"}>
            {
              <a target="_blank" rel="noreferrer" href="https://noodledesk.net/index.html">
                https://noodledesk.net/index.html/
              </a>
            }
          </YellowSticky>
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 370, y: 150 }} key={2} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <PinkSticky id={"poetic-web"}>
            {
              <a target="_blank" rel="noreferrer" href="https://chiaski.github.io/poeticweb/">
                https://chiaski.github.io/poeticweb/
              </a>
            }
          </PinkSticky>
        </div>
      </Draggable>
      <Draggable defaultPosition={{ x: 650, y: 0 }} key={3} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <GreenSticky id={"flooding"}>
            {
              <a target="_blank" rel="noreferrer" href="https://mushroomcoloratlas.com/">
                https://mushroomcoloratlas.com/
              </a>
            }
          </GreenSticky>
        </div>
      </Draggable>

      <Draggable defaultPosition={{ x: 450, y: 300 }} key={4} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <PurpleSticky id={"rubberdust"}>
            {
              <a
                target="_blank"
                rel="noreferrer"
                href="https://kenyonreview.org/kr-online-issue/2019-janfeb/selections/sarah-thankam-mathews-342846/"
              >
                https://kenyonreview.org/kr-online-issue/2019-janfeb/selections/sarah-thankam-mathews-342846/
              </a>
            }
          </PurpleSticky>
        </div>
      </Draggable>

      <Draggable defaultPosition={{ x: 600, y: 500 }} key={5} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <BlueSticky id={"tomine"}>
            {
              <a target="_blank" rel="noreferrer" href="https://adriantomine.substack.com/">
                https://adriantomine.substack.com/
              </a>
            }
          </BlueSticky>
        </div>
      </Draggable>

      <Draggable defaultPosition={{ x: 800, y: 100 }} key={6} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <YellowSticky id={"on-a-sunbean"}>
            {
              <a target="_blank" rel="noreferrer" href="https://www.onasunbeam.com/">
                https://www.onasunbeam.com/
              </a>
            }
          </YellowSticky>
        </div>
      </Draggable>

      <Draggable defaultPosition={{ x: 780, y: 200 }} key={7} nodeRef={nodeRef}>
        <div ref={nodeRef}>
          <PinkSticky id={"datamoshing"}>
            {
              <a target="_blank" rel="noreferrer" href="http://datamoshing.com/">
                http://datamoshing.com/
              </a>
            }
          </PinkSticky>
        </div>
      </Draggable>
    </div>
  ) : // </div>
  null;
}

export default App;
