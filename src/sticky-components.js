import Draggable from "react-draggable";

export function StickyNote(props) {
  return (
    <>
      <Draggable defaultPosition={props.position} key={props.key} nodeRef={props.nodeRef}>
        <div ref={props.nodeRef}>
          <props.color id={props.key}>
            {
              <>
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
