import { useEffect, useState } from "react";

type Props = {
  imagePaths: string[];
  interval: number;
  altString: string;
};

const FlashingImages = ({ imagePaths, interval = 500, altString }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const imageCount = imagePaths.length;
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, interval);

    return () => clearInterval(intervalId);
  }, [imagePaths, interval]);

  return <img src={imagePaths[imageIndex]} alt={`${altString}${imageIndex + 1}`} />;
};

export default FlashingImages;
