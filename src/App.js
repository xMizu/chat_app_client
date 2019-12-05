import React from "react";
import Room from "./components/Room";
import Chat from "./components/Chat";
import Message from "./components/Message";

const App = () => {
  const outerContainer = {
    width: "80%",
    margin: "auto",
    background: "grey",
    display: "flex"
  };

  const innerContainer = {
    flexDirection: "column",
    width: "100%",
    margin: "none"
  };

  return (
    <div style={outerContainer}>
      <Room />
      <div style={innerContainer}>
        <Chat />
        <Message />
      </div>
    </div>
  );
};

export default App;