import React from "react";
import useImageHook from "./useImageHook";

const Image = ({ src }) => {
  const { imageSource, onError } = useImageHook(src);

  return <img src={imageSource} title="" alt="" onError={onError} />;
};

export default Image;
