import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonList() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#696969">
      <Skeleton height={20} width={250} />
    </SkeletonTheme>
  );
}
export default SkeletonList;
