import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = ({ projects }) => {
    console.warn(projects)
    // const projects = projects.map(p => {
    //     return
    //     (
    //         <ProjectSummary summary={p} />
    //     )
    // })
    return (
        <div className="project-list section">
            {projects && projects.map(p => {
                return (
                    <ProjectSummary project={p} key={p.id} />
                )
            })}
        </div>
    )
}

export default ProjectList;