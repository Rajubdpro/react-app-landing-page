import { useState } from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {

    const [nav, setnav] = useState(false);
    const [active, setActive] = useState('home')
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="/" className="logo">
                <img src={logo} alt="" />
            </a>
            <input type="checkbox" className='menu-btn' name="" id="menu-btn" />
            <label htmlFor="menu-btn" className='menu-icon' >
                <span className='nav-icon'></span>
            </label>
            <ul className="menu">
                <li onClick={() => setActive('home')}><a href="#home" className={`${active === 'home' && 'active'}`}> Home </a></li>
                <li onClick={() => setActive('features')}><a href="#features" className={`${active === 'features' && 'active'}`}> Feautures </a></li>
                <li onClick={() => setActive('about')}><a href="#about" className={`${active === 'about' && 'active'}`}> About </a></li>
                <li onClick={() => setActive('presentaion')}><a href="#presentaion" className={`${active === 'presentaion' && 'active'}`}> UI & Presentation </a></li>
                <li onClick={() => setActive('download')}><a href="#download" className={`${active === 'download' && 'active'}`}> Download </a></li>
                <li onClick={() => setActive('contact')}><a href="#contact" className={`${active === 'contact' && 'active'}`}> Contact </a></li>
            </ul>
        </nav>
    )

}

export default Navbar