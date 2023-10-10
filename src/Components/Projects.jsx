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
        <div className='container'>
          <h2>💻Proyectos</h2>
          <div className='projectContainer'>
            {projects.map((project) => (
              <article className='project' key={project.id}>
                <div className="content">
                  <h3>{project.name}</h3>
                  <p className='textDescription'>{project.pre_description}</p>
                  <div className='imageContainer'>
                    <img src={project.Images?.[0]} alt={project.name} />
                  </div>
                  <div className="links">
                    <a className='btn' href={project.gh} target='_blank' rel="noreferrer">Code</a>
                    <button className='btn' onClick={() => toggleModal(project.id)}>Ver más</button>
                  </div>
                </div>
                <Modal show={showModal[project.id]} closeModal={() => toggleModal(project.id)}>
                    <h2>{project.name}</h2>
                    <p>{project.pre_description}</p>
                    <p>{project.description}</p>
                </Modal>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }