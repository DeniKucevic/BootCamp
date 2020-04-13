import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import InputKafic from "./komponente/render_kafic/index";
import Header from "./komponente/header";

const App = () => {
  // Чувамо стање за сваки клик посебно
  // Почетно стање за све оцене је 0
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);

  return (
    <div>
      <Header />
      <InputKafic kafic="neki kafic"></InputKafic>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
