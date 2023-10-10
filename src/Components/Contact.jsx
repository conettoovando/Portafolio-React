import './Contact.css';
import CV from '../assets/Cristian_Onetto_CV.pdf'

export default function Contact(){
    return ( 
        <section className="contactContainer">
            <div className='container'>
                <h2>📥 Contacto</h2>
                <div className='contentContainer'>
                    <p>Puedes contactarme por diferentes medios puedes optar por el que más te interese o prefieras.
                        Estoy disponible para responder tus preguntas y discutir oportunidades emocionantes ¡No olvides descargar mi CV!
                    </p>
                   <div className="center">
                    <a className='btn' href={CV} target='_blank' rel="noreferrer">
                        Descargar CV
                    </a>
                   </div>
                    <p> Puedes contactarme de las siguientes maneras:</p>
                    <div className="center">
                        <ul className='listContact'>
                            <li className='liContact'>
                                <p> 📧  Correo electronico <a href="mailto:cris.onetto01@gmail.com" className="personalMail" target='_blank' rel="noreferrer">cris.onetto01@gmail.com</a></p></li>
                            <li className='liContact'>
                                <p>🤙 Agendar una videollamada</p>
                            </li>
                        </ul>
                        <div className="center">
                            <a href="https://tidycal.com/crisonetto01" className="btn" target='_blank' rel="noreferrer">Agendar</a>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
    )
}