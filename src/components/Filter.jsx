import React, { useState } from "react";

import Singer from "./Singer";
import Year from "./Year";
import Genre from "./Genre";

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <div>
        <div
          tabindex="0"
          className="filter__button button-author _btn-text"
          onClick={getSingerFilter}
        >
          исполнителю
        </div>
        {filterSinger ? <Singer /> : false}
      </div>
      <div>
        <div
          tabindex="1"
          className="filter__button button-year _btn-text"
          onClick={getYearFilter}
        >
          году выпуска
        </div>
        {filterYear ? <Year /> : false}
      </div>

      <div
        tabindex="2"
        className="filter__button button-genre _btn-text"
        onClick={getGenreFilter}
      >
        жанру
      </div>
      {filterGenre ? <Genre /> : false}
    </div>
  );
}

export default Filter;
