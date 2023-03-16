import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import presentacionImg from "../../assets/presentacion.png";
import foto1 from "../../assets/fototypo1.png";
import foto2 from "../../assets/fototypo2.png";
import foto3 from "../../assets/fototypo3.png";
import foto4 from "../../assets/fototypo4.png";
import iconowpp from "../../assets/iconowpp.png";
import iconogmail from "../../assets/iconoGmail.png";

const TypeCake = [
  { tipo: "Tortas", img: foto1, link: "#torta" },
  { tipo: "Box", img: foto2, link: "#torta" },
  { tipo: "Tortas especiales", img: foto3, link: "#torta" },
];

export const BodyComponent: React.FC<{}> = () => {
  const openChat = () => {
    const message = encodeURIComponent(
      "Hola, gracias por comunicarte con Dolce. Déjanos tu mensaje y nos pondremos en contacto con vos lo antes posible. ¡Que tengas un lindo día! "
    );
    const whatsappLink = `https://wa.me/+541136281366?text=${message}`;
    window.open(whatsappLink, "_blank");
  };
  return (
    <Container>
      <ContainerOne>
        <ContainerText>
          <SubTitle>Tortas</SubTitle>
          <Title>Echas con mucho amor</Title>
          <Info>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quasi
            libero commodi eos aliquam velit, quo iure ut, error similique non
            dolores sequi magni ullam est ab omnis fugit ea! Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Quod accusamus, sint nostrum
            suscipit omnis mollitia dolor ad ea sequi reprehenderit pariatur
            saepe quo nisi illo architecto at similique molestias minus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </Info>
        </ContainerText>
        <ContainerImg>
          <Img src={presentacionImg} />
        </ContainerImg>
      </ContainerOne>
      <ContainerTwo>
        {TypeCake.map(({ tipo, img, link }) => (
          <CardType>
            <CardImg src={img} alt="cakes" />
            <CardButton onClick={() => console.log(link)}>{tipo}</CardButton>
          </CardType>
        ))}
      </ContainerTwo>
      <Containerthree>
        <PresupuestoImg src={foto4} />
        <PresupuestoInfo>
          <PresupuestoTitle>Presupuestos</PresupuestoTitle>
          <PresupuestoText>
            te asesoramos y armamos la torta a tu gusto y medida !!!
          </PresupuestoText>
          <PresupuestoEnlace>
            Has click en el enlace que mas te conviene
          </PresupuestoEnlace>
          <PresupuestoContainerIcons>
            <PresupuestoIcons
              src={iconogmail}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
            />
            <PresupuestoIcons
              src={iconowpp}
              whileHover={{ scale: [null, 1.2, 1.2] }}
              transition={{ duration: 1 }}
              onClick={openChat}
            />
          </PresupuestoContainerIcons>
        </PresupuestoInfo>
      </Containerthree>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Jost", sans-serif;
  background-color: #ffe5ec;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
`;
const ContainerOne = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  height: 800px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 35px;
  padding-right: 40px;
  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 375px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
const ContainerText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 90%;
  background-color: #ffb3c6;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 60px;
  @media (max-width: 920px) {
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 750px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 375px) {
    height: 70%;
  }
`;
const Title = styled.h1`
  padding-left: 120px;
  padding-right: 120px;
  font-size: 60px;
  font-weight: 400;
  @media (max-width: 1300px) {
    font-size: 50px;
  }
  @media (max-width: 1100px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 1020px) {
    padding-left: 50px;
    padding-right: 50px;
    font-size: 50px;
  }
  @media (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 750px) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 60px;
  }
  @media (max-width: 530px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 40px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
const SubTitle = styled.h3`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 50px;
  color: #fb6f92;
  font-size: 70px;
  font-weight: 200;
  @media (max-width: 1100px) {
    padding-left: 100px;
    padding-right: 100px;
    font-size: 60px;
  }
  @media (max-width: 800px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 750px) {
    font-size: 70px;
  }
  @media (max-width: 530px) {
    font-size: 50px;
  }
  @media (max-width: 450px) {
    padding-left: 0;
    padding-right: 0;
    font-size: 40px;
  }
`;
const Info = styled.p`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 50px;
  font-size: 20px;
  @media (max-width: 1210px) {
    padding-top: 20px;
    font-size: 17px;
  }
  @media (max-width: 1100px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 1100px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (max-width: 920px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 530px) {
    font-size: 15px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 450px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 98%;
  width: 40%;
  @media (max-width: 750px) {
    display: none;
  }
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  flex-direction: row;
  width: 100%;
`;
const CardType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  height: 500px;
  flex-direction: column;
  position: relative;
`;
const CardImg = styled.img`
  height: 100%;
  width: 80%;
  object-fit: cover;
`;
const CardButton = styled.button`
  font-family: "Jost", sans-serif;
  border-radius: 10px;
  height: 11%;
  width: 100px;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 50px;
  border-style: none;
  padding: 8px;
  background-color: #ffc2d1;
  transition: color 0.5s ease-in, background-color 1s ease-in,
    box-shadow 0.1s ease-in;

  &:active {
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  &:hover {
    background-color: rgba(255, 194, 209, 0.8);
    color: white;
  }
`;
const Containerthree = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const PresupuestoImg = styled.img`
  width: 93%;
  height: 500px;
  object-fit: cover;
  border: solid 0.5px #ffc2d1;
`;
const PresupuestoInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: first baseline;
  flex-direction: column;
  position: absolute;
  background-color: #ffe5ec;
  width: 35%;
  height: 220px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
`;
const PresupuestoContainerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  position: absolute;
  top: 170px;
  width: 100%;
`;
const PresupuestoIcons = styled(motion.img)`
  cursor: pointer;
`;
const PresupuestoTitle = styled.h4`
  padding-top: 20px;
  font-size: 30px;
  color: #fb6f92;
`;
const PresupuestoText = styled.p`
  margin-top: 15px;
`;
const PresupuestoEnlace = styled.p`
  margin-top: 20px;
  font-weight: 800;
`;
