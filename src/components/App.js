import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './accueil/Accueil';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Accueil />} />
        </Routes>
    );
}

export default App;
