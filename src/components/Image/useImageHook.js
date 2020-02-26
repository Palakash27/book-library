import { useState, useEffect } from "react";

const useImageHook = src => {
  const fallBackImage =
    "https://www.hultafors.com/assets/img/noimage.png?width=300";

  const [imageSource, setImageSource] = useState(src);

  useEffect(() => {
    setImageSource(src);
  }, [src]);

  const onError = () => {
    setImageSource(fallBackImage);
  };

  return { imageSource, onError };
};

export default useImageHook;
