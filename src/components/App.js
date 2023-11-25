import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './accueil/Accueil';
import SignIn from './signIn/SignIn';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Accueil />} />
            <Route path='/sign-in' element={<SignIn />} />
        </Routes>
    );
}

export default App;
