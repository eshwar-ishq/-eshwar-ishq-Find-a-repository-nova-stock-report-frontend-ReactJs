import './App.css';
// import './js/index';
import './js/main';
import './css/main.css'
import AllStocks from './Pages/AllStocks';
import Belmont from './Pages/Belmont';
import Richmond from './Pages/Richmond';
import Haridwar from './Pages/Hariwdar';
import Hyderabad from './Pages/Hyderabad';
import Error from './Pages/ErrorPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<AllStocks />}/>
        <Route  path='/belmont' element={<Belmont />}/>
        <Route  path='/richmond' element={<Richmond />}/>
        <Route  path='/haridwar' element={<Haridwar />}/>
        <Route  path='/hyderabad' element={<Hyderabad />}/>
        <Route  path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
