import MaxWidthWrapper from "../MaxWidthWrapper";
import ReviewGrid from "./ReviewGrid";

export default function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        src="/what-people-are-buying.png"
        alt="what people are buying"
        aria-hidden="true"
        className="absolute select-none hidden lg:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
