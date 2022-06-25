import React from "react";
import { ImageProps, ImageComponent } from "../ImageComponent";

type ImageCollageProps = {
  images: ImageProps[];
};

export const ImageCollage: React.FC<ImageCollageProps> = ({ images }) => {
  return (
    <div className='image-collage'>
      <ImageComponent src={images[0].src} label={""} index={0} />
      {(JSON.parse(JSON.stringify(images)) as ImageProps[]).splice(1, 3).map(({ src, label }, index) => (
        <ImageComponent src={src} key={label + index} label={""} index={index} />
      ))}
      {images.length > 4 ? <p>+{images.length - 4}</p> : <></>}
    </div>
  );
};
