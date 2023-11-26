import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './accueil/Accueil';
import SignIn from './signIn/SignIn';
import User from './user/User';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/user' element={<User />} />
        </Routes>
    );
}

export default App;
