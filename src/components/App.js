import React from "react";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import Introduction from "./Introduction/Introduction";
import Support from "./Support/Support";


function App() {
  return (
    <div className="App navbar-expand-lg" >
      <Introduction/>
      <Content/>
      <Support/>
      <Footer/>   
    </div>
  );
}

export default App;
