import { Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import PageNotfound from './Pages/PageNotfound';
import './bootstrap.min.css'
import Add from './Pages/Add';

function App() {
  return (
    <div className="App">
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth/>}/>
    <Route path='/register' element={<Auth register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='*' element={<PageNotfound/>}/>
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
