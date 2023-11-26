import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './accueil/Accueil';
import SignIn from './signIn/SignIn';
import User from './user/User';
import Navigations from './navigation/Navigation';
import Footer from './footer/Footer';

function App() {
    return (
        <div>
            <Navigations />
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/user' element={<User />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
