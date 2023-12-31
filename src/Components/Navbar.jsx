import './NavBar.css';
import { Link } from 'react-scroll';


export default function Navbar() {
    return (
        <nav>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor='menu-toggle'>
                <div className='burger'></div>
            </label>
                <ul className='ulNav'>
                    <li>
                        <Link
                            activeClass="active"
                            to="inicio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="sobremi"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                        >
                            Sobre mi
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="proyectos"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                        >
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contacto"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='link'
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>

        </nav>
    )
}
