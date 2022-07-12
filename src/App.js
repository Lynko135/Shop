import React from "react";
import "./App.css"
import Shop from "./components/Shop/Shop";
import data from "./data/phonesData.json"

function App() {
  return (
    <React.StrictMode>
      <Shop phonesArr={data}/>
    </React.StrictMode>
    
  );
}

export default App;
