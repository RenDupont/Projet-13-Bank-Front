import Classes from './App.module.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './accueil/Accueil';
import SignIn from './signIn/SignIn';
import User from './user/User';
import Navigations from './navigation/Navigation';
import Footer from './footer/Footer';
import SwaggerDocs from './SwaggerDocs';
import SignUp from './signUp/SignUp';

function App() {
    return (
        <div className={Classes.app}>
            <Navigations />
            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/user' element={<User />} />
                <Route path='/api-docs' element={<SwaggerDocs />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
