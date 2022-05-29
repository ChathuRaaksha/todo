import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Todo from './screens/Todo';
import Header from './screens/Header';
import Header2 from './screens/Header2';
import NavBar from '../src/components/Navbar';
import MaterialTable from './screens/MaterialTable';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
        
       
      <Routes >
   
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/todo" element={<Todo/>}/>
      <Route exact path="/materialtable" element={<MaterialTable/>}/>
      <Route exact path="/header" element={<Header/>}/>
      </Routes >
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
