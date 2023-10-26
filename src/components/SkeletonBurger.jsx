import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonImg() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#696969">
      <Skeleton height={150} width={250} />
    </SkeletonTheme>
  );
}
export default SkeletonImg;