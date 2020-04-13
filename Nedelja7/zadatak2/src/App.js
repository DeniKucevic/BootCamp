import React from "react";
import Card from "./komponente-funkcije";
import CardKlasa from "./komponente-klase";

function App() {
  return (
    <div className="App">
      <Card description="junior developer" emoji="🐒" />
      <CardKlasa description="senior developer" emoji="🦍" />
    </div>
  );
}

export default App;
