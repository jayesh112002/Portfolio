import "./WorkCardStyle.css";
import WorkCard from "./WorkCard.js";
import WorkCardData from "./WorkCardData.js"

import React from 'react'

const Work = () => {
    console.log(WorkCardData[0].title);
  return (
    <div className="work-container">
        <h1 className="project-heading">Project</h1>
        <div className="project-container">
           {
           WorkCardData.map((val,ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source ={val.source}/>
                )
            })
           }
        </div> 
    </div>
  )
}

export default Work;
