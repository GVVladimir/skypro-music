import React, { useState } from "react";

import Singer from "../Singer/Singer";
import Year from "../Year/Year";
import Genre from "../Genre/Genre";

import * as S from "./Filter.styles";

function Filter() {
  const [filterSinger, setSingerFilter] = useState(false);
  const [filterYear, setYearFilter] = useState(false);
  const [filterGenre, setGenreFilter] = useState(false);

  const getSingerFilter = () => {
    setSingerFilter(!filterSinger);
    setYearFilter(false);
    setGenreFilter(false);
  };

  const getYearFilter = () => {
    setYearFilter(!filterYear);
    setSingerFilter(false);
    setGenreFilter(false);
  };

  const getGenreFilter = () => {
    setGenreFilter(!filterGenre);
    setSingerFilter(false);
    setYearFilter(false);
  };

  return (
    <S.CenterblockFilter>
      <S.CenterblockFilterTitel>Искать по:</S.CenterblockFilterTitel>

      <div>
        <S.CenterblockFilterButton  onClick={getSingerFilter}>
          исполнителю
        </S.CenterblockFilterButton>
        {filterSinger ? <Singer /> : false}
      </div>
      <div>
        <S.CenterblockFilterButton  onClick={getYearFilter}>
          году выпуска
        </S.CenterblockFilterButton>
        {filterYear ? <Year /> : false}
      </div>
      <div>
        <S.CenterblockFilterButton onClick={getGenreFilter}>
          жанру
        </S.CenterblockFilterButton>
        {filterGenre ? <Genre /> : false}
      </div>
    </S.CenterblockFilter>
  );
}

export default Filter;
