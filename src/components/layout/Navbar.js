import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logoicon.png'

function Navbar(){
    return(
        <nav class={styles.navbar}>
            <Container>
            <Link to="/">
                    <img src={logo} alt="template" />
                </Link>
                <ul class={styles.list}>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to="/contact">Dúvidas Frequentes</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link to="/company">Quem Somos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar