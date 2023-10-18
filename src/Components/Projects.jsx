import './Projects.css';
import Modal from './Modal';
import { useState } from 'react';

export default function Projects({ projects = [] }) {
    const [showModal, setShowModal] = useState(Array(projects.length).fill(false));
  
    const toggleModal = (index) => {
      const newShowModal = [...showModal];
      newShowModal[index] = !newShowModal[index];
      setShowModal(newShowModal);
    };
  
    return (
      <section className='projectScreen'>
        <div className="container">
          <h2>💻Proyectos</h2>
          <section className='projectContainer'>
            {projects.map((project) => (
              <article className='project' key={project.id}>
                  <h3>{project.name}</h3>
                  <p className='textDescription'>{project.pre_description}</p>
                  <img src={project.Images?.[0]} alt={project.name} />
                  <div className="link-container">
                    <a  href={project.gh} target='_blank' rel="noreferrer">Code</a>
                    <a className='yellow' onClick={() => toggleModal(project.id)}>Ver más</a>
                  </div>
                  <Modal show={showModal[project.id]} closeModal={() => toggleModal(project.id)}>
                      <h2>{project.name}</h2>
                      <p>{project.pre_description}</p>
                      <p>{project.description}</p>
                  </Modal>
              </article>
            ))}
          </section>
          </div>
      </section>
    );
  }