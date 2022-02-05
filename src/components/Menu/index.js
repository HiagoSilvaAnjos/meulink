import './menu.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <a className="social" href="https://github.com/hiagosilvaanjos" target="_blank" rel="noreferrer">
                <BsGithub color="#fff" size={24} />
            </a>
            <a className="social" href="https://www.linkedin.com/in/hiago-silva-119711224/" target="_blank" rel="noreferrer">
                <BsLinkedin color="#fff" size={24} />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}