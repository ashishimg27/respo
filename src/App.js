import React from "react";
import "./styles.css";
import SimpleDrawer from "./components/SimpleDrawer";
// import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Peristance from "./components/Peristance"
import MiniDrawer from "./components/MiniDrawer";



export default function App() {
  return (
    <div className="App">
      {/* <SimpleDrawer /> */}
   
      {/* <ResponsiveDrawer /> */}
      {/* <Peristance/> */}
      <MiniDrawer/>
    
    </div>
  );
}
