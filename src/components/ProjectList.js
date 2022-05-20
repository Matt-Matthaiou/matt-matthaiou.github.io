import React from "react";

const ProjectList = ()=>
{
    return(
            <>
            
            <div >
            <h1 id="project-header">My Projects:</h1>
            <ul id="project-list">
                <li>
                    <h3>Target Practice Trading</h3>
                    <img src="https://user-images.githubusercontent.com/100124261/166671218-2e28cc9d-96eb-4df8-b517-cc21efe19337.png" width='300px'></img>
                    <a href="https://github.com/Matt-Matthaiou/Target_Practice_Trading"><button class="button">View Code</button></a>
                </li>
                <li>
                
                    <h3>Fake Vet Management</h3>
                    <img src="https://user-images.githubusercontent.com/98904577/168469341-002ec7c6-1f4a-42ad-8c64-da08d34ba7e9.png" width='300px' height='150px'></img>
                    <a href="https://github.com/Matt-Matthaiou/Vet_management_project"><button class="button">View Code</button></a>
                
                </li>
                <li>
                   
                    <h3>Magic the Gathering Deck Builder</h3>
                    <img src="https://user-images.githubusercontent.com/98904577/168470276-07b8cf80-2b35-4525-a945-079e2e93b061.png" width='300' height='150px'></img>
                    <div>
                        <a href="https://github.com/Matt-Matthaiou/week7_hw_mtgDeckBuilder"><button class="button">View Code</button></a>
                        <a href="https://matt-matthaiou.github.io/Mtg_Deck_Builder/"><button class="button">View Demo</button></a>
                    
                    </div>
                </li>
            </ul>
            </div>
            </>
      
    )
}

export default ProjectList;