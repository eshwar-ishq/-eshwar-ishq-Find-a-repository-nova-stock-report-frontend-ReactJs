import logo from './logo.svg';
import './App.css';
// import './js/index';
import './js/main';
import './css/main.css'
import Header from './Pages/Header'
import Table from './Pages/Table_data';
import Search from './Pages/SearchBar';
import NavigationButtons from './Pages/NavigationBut';
import Sidebar from './Pages/Sidebar';
import AllStocks from './Pages/AllStocks';
import Belmont from './Pages/Belmont';
import Richmond from './Pages/Richmond';
import Haridwar from './Pages/Hariwdar';
import Hyderabad from './Pages/Hyderabad';

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
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
