import Classes from './MainSignIn.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginUser } from '../../services/userAuthService';
import { login } from '../../store/actions';
import { Link } from 'react-router-dom';

function MainSignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
    
        try {
          const userData = { email: username, password: password };
          const result = await loginUser(userData);
          
          dispatch(login(result.token));
    
          navigate(`/user`);
        } catch (error) {
          console.error('Erreur lors de la connexion de l\'utilisateur', error);
        }
      };

    return (
        <main className={`${Classes.main} ${Classes.bgDark}`}>
            <section className={Classes.signInContent}>
                <FontAwesomeIcon className={Classes.signInIcon} icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={handleSignIn}>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className={Classes.inputRemember}>
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <div className={Classes.inputRemember}>
                        <Link className={Classes.signUpLink} to={`/sign-up`}>New account ?</Link>
                    </div>
                    <button type="submit" className={Classes.signInButton}>Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default MainSignIn;