
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import Trak from "../Trak/trak"

import * as S from "./PlayList.Styles";

function Playlist({ traks, isLoading, setCarentTrak }) {
  return (
    <S.MainCenterblock>
      <Search />
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <Filter />

      <S.MainCenterblockContent>
        <S.MainCenterContentTitle>
          <S.MainCenterContentTitleCol01>Трек</S.MainCenterContentTitleCol01>
          <S.MainCenterContentTitleCol02>
            ИСПОЛНИТЕЛЬ
          </S.MainCenterContentTitleCol02>
          <S.MainCenterContentTitleCol03>АЛЬБОМ</S.MainCenterContentTitleCol03>
          <S.MainCenterContentTitleCol04>
            <S.MainCenterContentTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.MainCenterContentTitleSvg>
          </S.MainCenterContentTitleCol04>
        </S.MainCenterContentTitle>
        <S.MainCenterContentPlayList>
          {traks.map((trak) => {
            return (<Trak {...trak}
            isLoading={isLoading}
            setCarentTrak={setCarentTrak}
            key={trak.id}/> );
          })}
        </S.MainCenterContentPlayList>
      </S.MainCenterblockContent>
    </S.MainCenterblock>
  );
}
export default Playlist;
