import Image from 'next/image';
import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return width, height;
};

const BackGroundImage = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = getWindowDimensions();

      setWidth(width);
      setHeight(height);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width && height) {
    return (
      <Image
        alt=""
        src={`https://source.unsplash.com/${width}x${height}/?nature,water,mountains,landscape`}
        width={width}
        height={height}
      />
    );
  }
  return null;
};

export default BackGroundImage;
