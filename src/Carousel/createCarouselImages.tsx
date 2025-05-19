export type Props = {
  amount: number;
  width: number;
  height: number;
};

/** Create an array of random sample images */
export const createCarouselImages = ({ amount, height, width }: Props) =>
  new Array(amount)
    .fill('')
    .map((_, i) => (
      <img
        src={`https://picsum.photos/${width}/${height}?${i}`}
        alt={`Mock image ${i}`}
        key={`mock-image-${i}`}
        width={width}
        height={height}
        loading="lazy"
      />
    ));
