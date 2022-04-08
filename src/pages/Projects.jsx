import React from 'react'
import { Footer, NavBar } from '../components'
import { useSelector } from 'react-redux'
import { projectsSelector } from '../features/projects/projectSlice';

const Projects = () => {
    const { projects } = useSelector(projectsSelector);
    return (
        <div>
            <NavBar />
            <div className="app-body">
                <h1> Projects </h1>
                {
                    projects.map(project => (
                        <div key={project.id}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Projects