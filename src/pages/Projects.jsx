import React, { useEffect } from 'react';
import { Footer, NavBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectsAsync, projectsSelector } from '../features/projects/projectSlice';

const Projects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(projectsSelector);

  useEffect(() => {
    dispatch(fetchProjectsAsync());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div className="app-body">
        <h1> Projects </h1>
        {projects?.map((project) => (
          <div key={project.id}>
            <h2>{project.question}</h2>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
