import Classes from './MainSignIn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function MainSignIn() {
    return (
        <main className={`${Classes.main} ${Classes.bgDark}`}>
            <section className={Classes.signInContent}>
                <FontAwesomeIcon className={Classes.signInIcon} icon={faUserCircle} />
                <h1>Sign In</h1>
                <form>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className={Classes.inputRemember}>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className={Classes.signInButton}>Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default MainSignIn;