import SkeletonList from "../Skeleton/Skeleton";
import * as S from "../PlayList/PlayList.Styles";
import { getTrack } from "../../Store/slice";
import { useDispatch } from "react-redux";

export const Track = ({
  isLoading,
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
}) => {
  const dispatch = useDispatch();
  return (
    <S.MainCenterContentPlayListItem
      onClick={() => dispatch(getTrack({ name, author, album, track_file }))}
    >
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
                {name}
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
              {author}
            </S.MainCenterContentPlayListTrackTitleAuthorLink>
          </S.MainCenterContentPlayListTrackTitleAuthor>
        )}
        {isLoading ? (
          <SkeletonList />
        ) : (
          <S.MainCenterContentPlayListTrackAlbum>
            <S.MainCenterContentPlayListTrackAlbumLink href="http://">
              {album}
            </S.MainCenterContentPlayListTrackAlbumLink>
          </S.MainCenterContentPlayListTrackAlbum>
        )}
        <div className="track__time">
          <S.MainCenterContentPlayListTrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.MainCenterContentPlayListTrackTimeSvg>
          <S.MainCenterContentPlayListTrackTimeText>
            {`${Math.floor(duration_in_seconds / 60)}: ${Math.floor(
              duration_in_seconds % 60
            )}`}
            {/* {duration_in_seconds} */}
          </S.MainCenterContentPlayListTrackTimeText>
        </div>
      </S.MainCenterContentPlayListTrack>
    </S.MainCenterContentPlayListItem>
  );
};
export default Track;
