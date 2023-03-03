import React from "react";
import {Routes,Route} from "react-router-dom"
import { HomeComponent } from "./Page/Home";






export const RoutesComponent:React.FC<{}> = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomeComponent/>}/>
        </Routes>
    )
}