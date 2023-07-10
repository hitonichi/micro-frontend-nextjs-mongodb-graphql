import React from "react";
import Nav from "./components/Nav";

const App = () => {
  const card = {
    border: "1px solid #1F778D",
    backgroundColor: "#d0f3fb",
    textAlign: "center",
    padding: "20px 0px",
    color: "#1f778d",
  };
  return (
    <div>
      <div style={card}>Child: React Component</div>;<Nav></Nav>
    </div>
  );
};

export default App;
