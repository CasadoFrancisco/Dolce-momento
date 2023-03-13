import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from '../ImagesCarrucel/Images';
import { motion } from 'framer-motion';

type CarouselProps = {
  images: string[];
  autoChangeInterval?: number;
};

const CarouselWrapper = styled.div`

 
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

const ImageWrapper = styled(motion.div)`
  
  
  width: 100%;
  height: 100%;
`;

const Carousel = ({ images, autoChangeInterval = 5000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      autoChangeInterval
    );
    return () => clearInterval(intervalId);
  }, [images.length, autoChangeInterval]);

  const transition = { duration: 0.5, ease: 'easeInOut' };

  return (
    <CarouselWrapper>
      {images.map((imageUrl, index) => (
        <ImageWrapper
          key={imageUrl}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 1 : 0,
          }}
          transition={transition}
        >
          <Image src={imageUrl} />
        </ImageWrapper>
      ))}
      <Button onClick={() => setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)}>
        Next
      </Button>
    </CarouselWrapper>
  );
};

export default Carousel;
