import { useDispatch, useSelector } from 'react-redux';
import Classes from './mainUser.module.css';
import { useEffect, useState } from 'react';
import { userProfile } from '../../services/userAuthService';
import { getProfile } from '../../store/actions';

function MainSignIn() {

    const [profile, setProfile] = useState(null);
    const authToken = useSelector(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserProfile = async () => {
        try {
            const result = await userProfile(authToken);

            setProfile({
                firstName: result.firstName, 
                lastName: result.lastName,
            });

            dispatch(getProfile(result.firstName, result.lastName));
        } catch (error) {
            
        }
    };

    if (authToken) {
        fetchUserProfile();
    }

  }, [authToken, dispatch]);

    return (
        <main className={`${Classes.main} ${Classes.bgDark}`}>
            <div className={Classes.header}>
                <h1>Welcome back<br />{profile && `${profile.firstName} ${profile.lastName}`}</h1>
                <button className={Classes.editButton}>Edit Name</button>
            </div>
            <h2 className={Classes.srOnly}>Accounts</h2>
            <section className={Classes.account}>
                <div className={Classes.accountContentWrapper}>
                    <h3 className={Classes.accountTitle}>Argent Bank Checking (x8349)</h3>
                    <p className={Classes.accountAmount}>$2,082.79</p>
                    <p className={Classes.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={`${Classes.accountContentWrapper} ${Classes.cta}`}>
                    <button className={Classes.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={Classes.account}>
                <div className={Classes.accountContentWrapper}>
                    <h3 className={Classes.accountTitle}>Argent Bank Savings (x6712)</h3>
                    <p className={Classes.accountAmount}>$10,928.42</p>
                    <p className={Classes.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={`${Classes.accountContentWrapper} ${Classes.cta}`}>
                    <button className={Classes.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={Classes.account}>
                <div className={Classes.accountContentWrapper}>
                    <h3 className={Classes.accountTitle}>Argent Bank Credit Card (x8349)</h3>
                    <p className={Classes.accountAmount}>$184.30</p>
                    <p className={Classes.accountAmountDescription}>Current Balance</p>
                </div>
                <div className={`${Classes.accountContentWrapper} ${Classes.cta}`}>
                    <button className={Classes.transactionButton}>View transactions</button>
                </div>
            </section>
        </main>
    );
}

export default MainSignIn;