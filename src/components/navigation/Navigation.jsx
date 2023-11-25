import Classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/argentBankLogo.png';

function Navigations() {
    return (
        <nav className={Classes.mainNav}>
            <a className={Classes.mainNavLogo} href="./index.html">
                <img
                className={Classes.mainNavLogoImage}
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className={Classes.srOnly}>Argent Bank</h1>
            </a>
            <div>
                <a className={Classes.mainNavItem} href="#">
                    <FontAwesomeIcon icon={faUserCircle} />
                    Sign In
                </a>
            </div>
        </nav>
    );
}

export default Navigations;