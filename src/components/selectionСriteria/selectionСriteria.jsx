import React from "react";
import * as S from "../PlayList/PlayList.Styles";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";

function SelectionCriteria() {
  return (
    <div>
        <Search />
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <Filter />
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
    </div>
  );
}
export default SelectionCriteria;
