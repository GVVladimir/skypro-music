import Nav from "./components/NavMain/Navigation";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Bar from "./components/Bar/Bar";
import Playlist from "./components/PlayList/Playlist";

import * as S from "./App.Styles";

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Nav />
          <Playlist />
          <Sidebar />
        </S.Main>
        <Bar />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
