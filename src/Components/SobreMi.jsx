import './SobreMi.css'
import profileImage from '../assets/profileImage.png'
import React, { useState } from 'react';
import { options } from '../constants/devTools';

export default function SobreMi() {
    const [selected, setSelected] = useState(0);

    const handleSelected = (value) => {
        setSelected(value);
    }

    return (
        <main className='mainSobremi'>
            <article className='sobreMi'>
                <div className="contentWrapper">
                    <img src={profileImage} alt="Foto personal" className='imgProfile' />
                    <section className='right'>
                        <div>
                            <h2 className='title'>🤓 Sobre mi</h2>
                        </div>
                        <div>
                            <p className='text'>Soy un joven ingeniero informático de 22 años con una gran pasión por el mundo de la programación y la tecnología.<br /><br />
                                Me interesa profundizar mis conocimientos sin limitarme, por lo qué, estoy comprometido al aprendizaje constante asumiendo nuevos desafíos y explorando diversas tecnologías.<br /><br />Mis conocimientos constan de:</p>
                        </div>
                        <div className='buttons'>
                            {options.map(option => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSelected(option.value)}
                                    value={option.value}
                                    className={selected === option.value ? 'selectedOption' : 'noSelectedOption'}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                        <div className='tecContainer'>
                            {options[selected].description.map(option => (
                                <div key={option.name} className={`tecDescription ${selected !== option.value ? 'hide' : ''}`}>
                                    <p>{option.name}</p>
                                    <img src={option.icon} className='tecIcon' alt={option.name} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </article>
        </main>
    )
}
