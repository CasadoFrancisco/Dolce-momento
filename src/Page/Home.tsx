import React from "react";
import styled from "styled-components";
import { BodyComponent } from "../components/body/Body";
import {HeroComponent} from "../components/hero/Hero";
import { NavbarComponent } from "../components/navbar/NavBar";
import {NavbarWithMessage} from "../components/navbar/Upnavbar"


export const HomeComponent: React.FC<{}> = () =>{
    return(
    <>
     <NavbarWithMessage/>
     <NavbarComponent/>
     <HeroComponent/>
     <BodyComponent/>
    </>
    
    )
}

const ContainerHome = styled.div``;