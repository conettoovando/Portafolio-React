import './NavBar.css';
import { Link } from 'react-scroll';


export default function Navbar() {
    return (
        <nav>
            <div className='navContainer'>
                <ul className='ulNav'>
                    <li>
                        <Link
                            activeClass="active"
                            to="inicio"
                            spy={true}
                            smooth={true}
                            duration={500}
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
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
