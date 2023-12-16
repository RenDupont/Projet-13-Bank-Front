import Classes from './SignUp.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { CreateUser } from '../../services/userAuthService';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async  (e) => {
        e.preventDefault();
        const newUser = {email: email, password: password, firstName: firstName, lastName: lastName};
        
        try {
            await CreateUser(newUser);
            navigate(`/sign-in`);   
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de l\'utilisateur:', error);
        }
    };

    return (
        <main className={`${Classes.main} ${Classes.bgDark}`}>
            <section className={Classes.signInContent}>
                <FontAwesomeIcon className={Classes.signInIcon} icon={faUserCircle} />
                <h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={Classes.inputWrapper}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className={Classes.signInButton}>
                        Sign Up
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignUp;