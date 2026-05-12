type CarouselNavigationButtonProps = {
  direction: "next" | "prev";
};

export function CarouselNavigationButton({
  direction,
}: CarouselNavigationButtonProps) {
  const isNext = direction === "next";

  return (
    <button
      type="button"
      aria-label={isNext ? "Next Slide" : "Previous Slide"}
      className={`absolute top-1/2 z-10 hidden size-9 -translate-y-1/2 items-center justify-center rounded-md bg-white shadow-lg transition-transform duration-200 hover:scale-105 md:flex ${
        isNext
          ? "carousel-next right-0 translate-x-1/2"
          : "carousel-prev left-0 -translate-x-1/2"
      } `}
    >
      {isNext ? "→" : "←"}
    </button>
  );
}
