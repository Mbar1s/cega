import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import DrawingCanvas from "./components/DrawingCanvas";

function App() {
  return (
    <>
      <Navbar />
      <FirstPage />
      <DrawingCanvas />
    </>
  );
}

export default App;
