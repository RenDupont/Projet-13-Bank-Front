import Classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/argentBankLogo.png';
import { Link, useLocation } from "react-router-dom";



function Navigations() {

    const location = useLocation();

    const renderContent = () => {
        if (location.pathname === '/user') {
            return (
                <div>
                    <Link className={Classes.mainNavItem} to={'/user'}>
                        <FontAwesomeIcon icon={faUserCircle} /> Tony
                    </Link>
                    <Link className={Classes.mainNavItem} to={'/'}>
                        <FontAwesomeIcon icon={faUserCircle} /> Sign Out
                    </Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link className={Classes.mainNavItem} to={'/sign-in'}>
                        <FontAwesomeIcon icon={faUserCircle} /> Sign In
                    </Link>
                </div>
            );
        }
    };

    return (
        <nav className={Classes.mainNav}>
            <Link className={Classes.mainNavLogo} to={'/'}>
                <img
                className={Classes.mainNavLogoImage}
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 className={Classes.srOnly}>Argent Bank</h1>
            </Link>
            {renderContent()}
        </nav>
    );
}

export default Navigations;