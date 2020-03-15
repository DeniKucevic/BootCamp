import React from 'react';
import Forma from './komponente-funkcija';
import FormaKlasa from './komponente-klasa';

function App() {
  return (
    <div className="App">
      <Forma string='neki string' />
      <FormaKlasa string='klasa string' />
    </div>
  );
}

export default App;
