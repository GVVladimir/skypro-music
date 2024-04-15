// import Search from "../Search/Search";
// import Filter from "../Filter/Filter";
import Track from "../Track/track";

import * as S from "./PlayList.Styles";
import SelectionCriteria from "../selectionСriteria/selectionСriteria";

function Playlist({ tracks }) {
  return (
    <S.MainCenterblock>
      {/* <Search />
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <Filter /> */}

      <S.MainCenterblockContent>
        <SelectionCriteria />
        <S.MainCenterContentPlayList>
          {tracks.length > 0 &&
            tracks.map((track) => {
              return <Track track={track} key={track.id} />;
            })}
        </S.MainCenterContentPlayList>
      </S.MainCenterblockContent>
    </S.MainCenterblock>
  );
}
export default Playlist;
