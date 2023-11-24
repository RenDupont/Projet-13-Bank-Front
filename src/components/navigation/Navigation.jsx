import Classes from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigations() {
    return (
        <nav class={Classes.mainNav}>
            <a class={Classes.mainNavLogo} href="./index.html">
                <img
                class={Classes.mainNavLogoImage}
                src="./img/argentBankLogo.png"
                alt="Argent Bank Logo"
                />
                <h1 class={Classes.srOnly}>Argent Bank</h1>
            </a>
            <div>
                <a class={Classes.mainNavItem} href="./sign-in.html">
                <FontAwesomeIcon icon="fas fa-user-circle" />
                Sign In
                </a>
            </div>
        </nav>
    );
}

export default Navigations;