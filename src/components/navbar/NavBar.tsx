import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo11.png";

export const NavbarComponent: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerNavbar>
      <ContainerNavbarLeft>
        <Logo src={logo} />
      </ContainerNavbarLeft>
      <ContainerNavbarCenter isOpen={isOpen}>
        <Ul>
          <Li>
            <NavbarLinks>Home</NavbarLinks>
          </Li>
          <Li>
            <NavbarLinks className="Producto">
              Productos <i className="fa-solid fa-chevron-down"></i>
            </NavbarLinks>
            <MenuDesplegableUl>
              <MenuDesplegableLi>
                <NavbarLinkInside>Tortas</NavbarLinkInside>
              </MenuDesplegableLi>
              <MenuDesplegableLi>
                <NavbarLinkInside>Mini cakes</NavbarLinkInside>
              </MenuDesplegableLi>
              <MenuDesplegableLi>
                <NavbarLinkInside>Macarones</NavbarLinkInside>
              </MenuDesplegableLi>
              <MenuDesplegableLi>
                <NavbarLinkInside>Petit food</NavbarLinkInside>
              </MenuDesplegableLi>
              <MenuDesplegableLi>
                <NavbarLinkInside>Boxs</NavbarLinkInside>
              </MenuDesplegableLi>
              <MenuDesplegableLi>
                <NavbarLinkInside>Tortas a medida</NavbarLinkInside>
              </MenuDesplegableLi>
            </MenuDesplegableUl>
          </Li>

          <Li>
            <NavbarLinks>About</NavbarLinks>
          </Li>
          <Li>
            <NavbarLinks>Contacto</NavbarLinks>
          </Li>
          <Li>
            <NavbarLinks>Work shop</NavbarLinks>
          </Li>
        </Ul>
      </ContainerNavbarCenter>
      <ContainerButton>
        <Label className="hamburger">
          <input type="checkbox" checked={isOpen} onClick={handleClick} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </Label>
      </ContainerButton>
    </ContainerNavbar>
  );
};

const ContainerNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9aabb;
  height: 110px;
  width: 100%;
  flex-direction: row;
  font-family: "Shantell Sans", cursive;
  position: absolute;
`;
const ContainerNavbarLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 2;
`;
const Logo = styled.img`
  height: 100px;
  padding-left: 90px;
  @media (max-width: 1000px) {
    height: 50px;
    padding-left: 20px;
  }
`;
const ContainerNavbarCenter = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
  @media (max-width: 1000px) {
    min-height: 100vh;
    position: absolute;
    background-color: #f9aabb;
    top: ${(props) => (props.isOpen ? "0vh" : "-100vh")};
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: 1s;
    
  }
`;
const NavbarLinks = styled.a`
  display: flex;
  text-decoration: none;
  color: white;
  padding-right: 20px;
  font-size: 24px;
  transition: 1.5s;
  cursor: pointer;
  &:hover {
    color: #56091f;
  }
  &.productos-link {
    cursor: pointer;
  }
  i {
    padding-top: 10px;
    padding-left: 5px;
    font-size: 15px;
  }
  @media(max-width:1000px){
    padding-right: 0;
    font-size: 30px;
    i {
    padding-top: 13px;
    padding-left: 8px;
    font-size: 20px;
  }
  }
`;
const NavbarLinkInside = styled.a`
  color: white;
  text-decoration: none;
  padding: 0 30px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  transition: 1s;
  cursor: pointer;
  &:hover {
    color: #56091f;
  }
  @media(max-width:1000px){
    font-size: 16px;
  }
`;
const MenuDesplegableUl = styled.ul`
padding-top: 20px;
  list-style: none;
  transition: clip-path 0.3s;
  clip-path: var(--clip);
  position: absolute;
  bottom: 0;
  width: max-content;
  transform: translateY(100%);
  background-color: #f9aabb;
  @media (max-width: 1000px) {
    display: flex;
    align-items:center;
    justify-content:space-around;
    flex-direction: column;
    height:180px;
    width:max-content;
    background-color:transparent #f9aabb;
    z-index: 2;
    transition: .5s;
    padding-top: 0;
   
   
  }
`;
const MenuDesplegableLi = styled.li``;
const Ul = styled.ul`
  height: 100%;
  transition: transform 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const Li = styled.li`
  list-style: none;
  position: relative;
  height: 100%;
  --clip: polygon(0 0, 100% 0, 100% 0, 0 0);
  display: flex;
  align-items: center;
  justify-content: center;
  

  &:hover {
    --clip: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  @media (max-width: 1000px) {
    padding-bottom: 15px;
  }
`;
const ContainerButton = styled.div`
  @media (max-width: 1000px) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Label = styled.label`
  @media (min-width: 1000px) {
    display: none;
  }
  & {
    cursor: pointer;
  }

  & input {
    display: none;
  }

  & svg {
    /* The size of the SVG defines the overall size */
    height: 3em;
    /* Define the transition for transforming the SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Define the transition for transforming the Stroke */
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  & input:checked + svg {
    transform: rotate(-45deg);
  }

  & input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;
