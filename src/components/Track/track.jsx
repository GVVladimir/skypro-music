import SkeletonList from "../Skeleton/Skeleton";
import * as S from "../PlayList/PlayList.Styles";
import { useDispatch, useSelector } from "react-redux";
import { getTrack } from "../../Store/slice";

export const Track = ({
  // isLoading,
  // name,
  // author,
  // album,
  // duration_in_seconds,
  // track_file,
  track,
}) => {
  const dispatch = useDispatch();
  const currentTrack = useSelector((state) => state.music.currentTrack);
  const $isPlaying = useSelector((state) => state.music.$isPlaying);
  return (
    <S.MainCenterContentPlayListItem
      onClick={() => dispatch(getTrack({ ...track }))}
    >
      <S.MainCenterContentPlayListTrack key={track.id}>
        <S.MainCenterContentPlayListTrackTitle>
          <S.MainCenterContentPlayListTrackTitleImg>
            {currentTrack && currentTrack.id === track.id ? (
              <S.MainCenterContentPlayListTrackTitlPlaySvge
                $isPlaying={$isPlaying}
              ></S.MainCenterContentPlayListTrackTitlPlaySvge>
            ) : (
              <S.MainCenterContentPlayListTrackTitlSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.MainCenterContentPlayListTrackTitlSvg>
            )}
          </S.MainCenterContentPlayListTrackTitleImg>
          {track.isLoading ? (
            <SkeletonList />
          ) : (
            <div className="track__title-text">
              <S.MainCenterContentPlayListTrackTitleLink href="http://">
                {track.name}
                <S.MainCenterContentPlayListTrackTitleSpan></S.MainCenterContentPlayListTrackTitleSpan>
              </S.MainCenterContentPlayListTrackTitleLink>
            </div>
          )}
        </S.MainCenterContentPlayListTrackTitle>

        {track.isLoading ? (
          <SkeletonList />
        ) : (
          <S.MainCenterContentPlayListTrackTitleAuthor>
            <S.MainCenterContentPlayListTrackTitleAuthorLink href="http://">
              {track.author}
            </S.MainCenterContentPlayListTrackTitleAuthorLink>
          </S.MainCenterContentPlayListTrackTitleAuthor>
        )}
        {track.isLoading ? (
          <SkeletonList />
        ) : (
          <S.MainCenterContentPlayListTrackAlbum>
            <S.MainCenterContentPlayListTrackAlbumLink href="http://">
              {track.album}
            </S.MainCenterContentPlayListTrackAlbumLink>
          </S.MainCenterContentPlayListTrackAlbum>
        )}
        <div className="track__time">
          <S.MainCenterContentPlayListTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.MainCenterContentPlayListTrackTimeSvg>
          <S.MainCenterContentPlayListTrackTimeText>
            {`${Math.floor(track.duration_in_seconds / 60)}: ${Math.floor(
              track.duration_in_seconds % 60
            )}`}
            {/* {duration_in_seconds} */}
          </S.MainCenterContentPlayListTrackTimeText>
        </div>
      </S.MainCenterContentPlayListTrack>
    </S.MainCenterContentPlayListItem>
  );
};
export default Track;
