import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './screens/main';
import Name from './screens/name';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Main/>} />
                <Route path='/names' element = {<Name/>} />

            </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
