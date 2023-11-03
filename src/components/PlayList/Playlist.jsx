import React, { useState } from "react";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import SkeletonList from "../Skeleton/Skeleton";
import { useEffect } from "react";
import * as S from "./PlayList.Styles";

function Playlist() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <S.MainCenterblock>
      <Search />
      <S.MainCenterblockH2>Треки</S.MainCenterblockH2>
      <Filter />

      <S.MainCenterblockContent>
        <S.MainCenterContentTitle>
          <S.MainCenterContentTitleCol>Трек</S.MainCenterContentTitleCol>
          <S.MainCenterContentTitleCol>ИСПОЛНИТЕЛЬ</S.MainCenterContentTitleCol>
          <S.MainCenterContentTitleCol>АЛЬБОМ</S.MainCenterContentTitleCol>
          <S.MainCenterContentTitleCol>
            <S.MainCenterContentTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.MainCenterContentTitleSvg>
          </S.MainCenterContentTitleCol>
        </S.MainCenterContentTitle>
        <S.MainCenterContentPlayList>
          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Guilt{" "}
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>

              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Nero
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Welcome Reality
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  4:44
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Elektro{" "}
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Dynoro, Outwork, Mr. Gee
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Elektro
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  2:22
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      I’m Fire{" "}
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Ali Bakgor
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    I’m Fire
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  2:22
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Non Stop
                      <S.MainCenterContentPlayListTrackTitleSpan>
                        (Remix)
                      </S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Стоункат, Psychopath
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Non Stop
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  4:12
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Run Run
                      <S.MainCenterContentPlayListTrackTitleSpan>
                        (feat. AR/CO)
                      </S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Jaded, Will Clarke, AR/CO
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Run Run
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  2:54
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Eyes on Fire
                      <S.MainCenterContentPlayListTrackTitleSpan>
                        (Zeds Dead Remix)
                      </S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Blue Foundation, Zeds Dead
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Eyes on Fire
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  5:20
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Mucho Bien
                      <S.MainCenterContentPlayListTrackTitleSpan>
                        (Hi Profile Remix)
                      </S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Mucho Bien
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  3:41
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Knives n Cherries
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    minthaze
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Captivating
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  1:48
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Knives n Cherries
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    minthaze
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Captivating
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  1:48
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Knives n Cherries
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    minthaze
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Captivating
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  1:48
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Knives n Cherries
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    minthaze
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Captivating
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  1:48
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Knives n Cherries
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    minthaze
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Captivating
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  1:48
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Knives n Cherries
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    minthaze
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Captivating
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  1:48
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Knives n Cherries
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    minthaze
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Captivating
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  1:48
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      How Deep Is Your Love
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Calvin Harris, Disciples
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    How Deep Is Your Love
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  3:32
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Morena{" "}
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    Tom Boxer
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Soundz Made in Romania
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}
              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  3:36
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>

          <S.MainCenterContentPlayListItem>
            <S.MainCenterContentPlayListTrack>
              <S.MainCenterContentPlayListTrackTitle>
                <S.MainCenterContentPlayListTrackTitleImg>
                  <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.MainCenterContentPlayListTrackTitlSvg>
                </S.MainCenterContentPlayListTrackTitleImg>
                {isLoading ? (
                  <SkeletonList />
                ) : (
                  <div className="track__title-text">
                    <S.MainCenterContentPlayListTrackTitleLink href="http://">
                      Иванушки Int
                      <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
                    </S.MainCenterContentPlayListTrackTitleLink>
                  </div>
                )}
              </S.MainCenterContentPlayListTrackTitle>
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackTitleAuthor>
                  <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
                    рыжий из Иванушек
                  </S.MainCenterContentPlayListTrackTitleAuthorLink>
                </S.MainCenterContentPlayListTrackTitleAuthor>
              )}
              {isLoading ? (
                <SkeletonList />
              ) : (
                <S.MainCenterContentPlayListTrackAlbum>
                  <S.MainCenterContentPlayListTrackAlbumLink href="http://">
                    Что то с тучами связано
                  </S.MainCenterContentPlayListTrackAlbumLink>
                </S.MainCenterContentPlayListTrackAlbum>
              )}

              <div className="track__time">
                <S.MainCenterContentPlayListTrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                </S.MainCenterContentPlayListTrackTimeSvg>
                <S.MainCenterContentPlayListTrackTimeText>
                  из 90-х
                </S.MainCenterContentPlayListTrackTimeText>
              </div>
            </S.MainCenterContentPlayListTrack>
          </S.MainCenterContentPlayListItem>
        </S.MainCenterContentPlayList>
      </S.MainCenterblockContent>
    </S.MainCenterblock>
  );
}
export default Playlist;
