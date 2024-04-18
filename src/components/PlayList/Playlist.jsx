// import Search from "../Search/Search";
// import Filter from "../Filter/Filter";
import Track from "../Track/track";

import * as S from "./PlayList.Styles";
import SelectionCriteria from "../selectionСriteria/selectionСriteria";
import { useAllTracksQuery } from "../../redux/ApiMusic";
import { useEffect } from "react";

function Playlist() {
  const{data = []} = useAllTracksQuery()
  useEffect(() => {
    console.log(data)
  },[data])
  return (
    <S.MainCenterblock>
      {/* <Search />
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <Filter /> */}

      <S.MainCenterblockContent>
        <SelectionCriteria />
        <S.MainCenterContentPlayList>
          {data.length > 0 &&
            data.map((track) => {
              return <Track track={track} key={track.id} />;
            })}
        </S.MainCenterContentPlayList>
      </S.MainCenterblockContent>
    </S.MainCenterblock>
  );
}
export default Playlist;
