import Draggable from "react-draggable";

export function StickyNote(props) {
  return (
    <>
      <Draggable defaultPosition={props.position} key={props.key} nodeRef={props.nodeRef}>
        <div ref={props.nodeRef}>
          <props.color id={props.key}>
            {
              <>
                {props.name !== undefined ? (
                  <>
                    {props.name}: <br />
                  </>
                ) : (
                  <></>
                )}
                {props.links.map((item) => (
                  <HtmlLink key={item} value={item} />
                ))}
              </>
            }
          </props.color>
        </div>
      </Draggable>
    </>
  );
}

export function StickyImageNote(props) {
  return (
    <>
      <Draggable defaultPosition={props.position} key={props.key} nodeRef={props.nodeRef}>
        <div ref={props.nodeRef}>
          <props.color id={props.key}>
            {
              <>
                <img height="190em" className="multiply" src={props.image} alt="notes" />
              </>
            }
          </props.color>
        </div>
      </Draggable>
    </>
  );
}

export function HtmlLink(props) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={props.value}>
        {props.value}
      </a>
      <br />
    </>
  );
}
