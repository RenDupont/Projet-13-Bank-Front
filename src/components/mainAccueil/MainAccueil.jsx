import Classes from './MainAccueil.module.css';

function MainAccueil() {
    return (
        <main>
            <div className={Classes.hero}>
                <section className={Classes.heroContent}>
                    <h2 className={Classes.srOnly}>Promoted Content</h2>
                    <p className={Classes.subtitle}>No fees.</p>
                    <p className={Classes.subtitle}>No minimum deposit.</p>
                    <p className={Classes.subtitle}>High interest rates.</p>
                    <p className={Classes.text}>Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className={Classes.features}>
                <h2 className={Classes.srOnly}>Features</h2>
                <div className={Classes.featureItem}>
                    <img src="./img/icon-chat.png" alt="Chat Icon" className={Classes.featureIcon} />
                    <h3 className={Classes.featureItemTitle}>You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div className={Classes.featureItem}>
                    <img
                        src="./img/icon-money.png"
                        alt="Chat Icon"
                        className={Classes.featureIcon}
                    />
                    <h3 className={Classes.featureItemTitle}>More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div className={Classes.featureItem}>
                    <img
                        src="./img/icon-security.png"
                        alt="Chat Icon"
                        className={Classes.featureIcon}
                    />
                    <h3 className={Classes.featureItemTitle}>Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default MainAccueil;