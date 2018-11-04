import React from 'react';

const ProjectSummary = ({ project }) => {
    console.log( '-' , project)
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-conternt grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
                <span className="grey-text">3rd September 2pm</span>
            </div>
        </div> 
    )
}

export default ProjectSummary;