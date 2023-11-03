import React from "react";

import * as S from "./Search.Styles";

function Search() {
  return (
    <S.CenterblockSearch>
      <S.CenterblockSearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.CenterblockSearchSvg>
      <S.CenterblockSearchText
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  );
}

export default Search;
