import React from "react";
import Nav from "./components/Navigation";
import Playlist from "./components/Playlist";
import "./App.css";
import Bar from "./components/Bar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <Playlist />
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
