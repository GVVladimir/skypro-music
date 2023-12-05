
import SkeletonFooter from "../SkeletonBar/SkeletonBar";

import * as S from "./bar.Styles";

function Bar({ isLoading, carentTrak }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarProgress></S.BarProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.BarPlayerControls>
              <S.BarPlayerPrev>
                <S.BarPlayerPrevSvg alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.BarPlayerPrevSvg>
              </S.BarPlayerPrev>
              <S.BarPlayerBtn>
                <S.BarPlayerBtnSvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.BarPlayerBtnSvg>
              </S.BarPlayerBtn>
              <S.BarPlayerNext>
                <S.BarPlayerNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.BarPlayerNextSvg>
              </S.BarPlayerNext>
              <S.BarPlayerRepeat>
                <S.BarPlayerRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.BarPlayerRepeatSvg>
              </S.BarPlayerRepeat>
              <S.BarPlayerShuffle>
                <S.BarPlayerShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.BarPlayerShuffleSvg>
              </S.BarPlayerShuffle>
            </S.BarPlayerControls>

            <S.PlayerTrackPlay>
              <S.BarNrackPlayContain>
                <S.BarNrackPlayImage>
                  <S.BarNrackPlaySvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.BarNrackPlaySvg>
                </S.BarNrackPlayImage>
                {isLoading ? (
                  <SkeletonFooter />
                ) : (
                  <S.BarTrackPlyAutor>
                    <S.BarTrackPlyAutorLink href="http://">
                      {carentTrak.name}
                    </S.BarTrackPlyAutorLink>
                  </S.BarTrackPlyAutor>
                )}
                {isLoading ? (
                  <SkeletonFooter />
                ) : (
                  <S.BarTrackPlyApbum>
                    <S.BarTrackPlyAlbumLink href="http://">
                      {carentTrak.author}
                    </S.BarTrackPlyAlbumLink>
                  </S.BarTrackPlyApbum>
                )}
              </S.BarNrackPlayContain>

              <S.BarTrackPlyLikeDis>
                <S.BarTrackPlyLike>
                  <S.BarTrackPlyLikeSvg alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.BarTrackPlyLikeSvg>
                </S.BarTrackPlyLike>
                <S.BarTrackDisLike>
                  <S.BarTrackDisLikeSvg alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.BarTrackDisLikeSvg>
                </S.BarTrackDisLike>
              </S.BarTrackPlyLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarNVolumeBlock>
            <S.BarNVolumeContent>
              <S.BarNVolumeImage>
                <S.BarNVolumeSvg alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.BarNVolumeSvg>
              </S.BarNVolumeImage>
              <S.BarVolumeProgress>
                <S.BarVolumeProgressLine type="range" name="range" />
              </S.BarVolumeProgress>
            </S.BarNVolumeContent>
          </S.BarNVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default Bar;
