import Nav from "./components/NavMain/Navigation";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Bar from "./components/Bar/Bar";
import Playlist from "./components/PlayList/Playlist";

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
