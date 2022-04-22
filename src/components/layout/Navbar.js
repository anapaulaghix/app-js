import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/template.png'

function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/contact">Dúvidas Frequentes</Link>
            <Link to="/company">Quem Somos</Link>
        </div>
    )
}

export default Navbar