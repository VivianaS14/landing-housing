import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FC } from "react";

interface Props {
  images: string[];
}

export const Carrousel: FC<Props> = ({ images }) => {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true}>
        {images.map((e, i) => (
          <div key={i}>
            <img src={e} alt={`Slide ${i + 1}`} width="300" />
            <p className="legend">Slide {i + 1}</p>
          </div>
        ))}
      </Carousel>
    </>
  );
};
