import React, { useState, useEffect } from "react";
import styled from "styled-components";
import foto1 from "../../assets/foto1.webp";
import foto2 from "../../assets/foto2.webp";
import foto3 from "../../assets/foto3.webp";
import foto4 from "../../assets/foto4.webp";
import flechaIzq from "../../assets/flechaIzq.png";
import flechaDer from "../../assets/flechaDer.png";

export const HeroComponent: React.FC<{}> = () => {
  const img = [foto1, foto2, foto3, foto4];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(img[0]);
  const [louded, setLouded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedIndex]);

  const selectNewImage = (index: number, img: string[], next = true) => {
    setLouded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < img.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : img.length - 1;
      setSelectedImg(img[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, img, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, img);
  };

  return (
    <>
      <Container>
        <Img
          src={selectedImg}
          alt="cakes"
          onLoad={() => setLouded(true)}
          className={louded ? "louded" : ""}
        />
        <ContainerButton>
          <Button> Productos</Button>
        </ContainerButton>
        <ContainerButtons>
          <ButtonIcon onClick={previous} src={flechaIzq} />
          <ButtonIcon onClick={next} src={flechaDer} />
        </ContainerButtons>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 550px;
  background-color: #ffe5ec;
  padding-top: 150px;
  @media (max-width: 1000px) {
    padding-top: 110px;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transition: 1s;
  &.louded {
    opacity: 1;
  }
`;
const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
`;
const ButtonIcon = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  transition: 1s;
  border-radius: 20px;
  &:hover {
    background-color: rgba(255, 229, 236, 0.4);
  }
`;

const ContainerButton = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 600px;
  position: absolute;
`;
const Button = styled.button`
  position: absolute;
  font-family: "Jost", sans-serif;
  height: 40px;
  width: 200px;
  font-size: 25px;
  font-weight: 400;
  border-radius: 5px;
  border-style: none;
  color: #56091f;
  background-color: #ffc2d1;
  cursor: pointer;
  z-index: 90;
  transition: 1s;
  &:hover {
    background-color: rgba(255, 194, 209, 0.5);
    color: #ffc2d1;
  }
`;
