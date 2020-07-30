import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
import ButtonLink from '../ButtonLink'

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </a>


            <ButtonLink href="/" className="ButtonLink">
                Novo vídeo
            </ButtonLink>
        </nav>
    )
}

export default Menu;