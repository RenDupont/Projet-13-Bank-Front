import Classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigations() {
    return (
        <nav className={Classes.mainNav}>
            <a className={Classes.mainNavLogo} href="./index.html">
                <img
                className={Classes.mainNavLogoImage}
                src="../../assets/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 className={Classes.srOnly}>Argent Bank</h1>
            </a>
            <div>
                <a className={Classes.mainNavItem} href="#">
                    <FontAwesomeIcon icon="fas fa-user-circle" />
                    Sign In
                </a>
            </div>
        </nav>
    );
}

export default Navigations;