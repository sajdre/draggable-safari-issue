import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend, getEmptyImage } from "react-dnd-html5-backend";

const Box = () => {
  const [, dragSource, preview] = useDrag({
    item: { type: "Box" },
    begin: () => {
      console.log("drag start");
    },
    end: () => {
      console.log("drag end");
    }
  });

  useEffect(() => {
    preview(getEmptyImage());
  }, []);

  const style = {};
  // useMemo(() => isDragging ? (preview?.style || {}) : {}, [isDragging, preview])

  return (
    <div
      ref={dragSource}
      style={{
        width: "100px",
        height: "100px",
        border: "solid 1px black"
      }}
    ></div>
  );
};

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <DndProvider backend={HTML5Backend}>
        <Box />
      </DndProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
