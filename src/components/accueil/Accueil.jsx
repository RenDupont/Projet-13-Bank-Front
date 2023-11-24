import Footer from '../footer/Footer';
import MainAccueil from '../mainAccueil/MainAccueil';
import Navigations from '../navigation/Navigation';
import Classes from './Accueil.module.css';

function Accueil() {
    return (
        <>
            <Navigations />
            <MainAccueil />
            <Footer />
        </>
    );
}

export default Accueil;