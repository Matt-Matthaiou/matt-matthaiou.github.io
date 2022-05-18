import React from "react";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";

const MainContainer = ()=>
{
   return(
    <>
        <Intro/>
        <div id="list-container">
        <ProjectList/>
        </div>
   </>
   );
}

export default MainContainer;