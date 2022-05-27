import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Todo from './screens/Todo';
import Header from './screens/Header';
import Header2 from './screens/Header2';
import NavBar from '../src/components/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
        
       
      <Routes >
      
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/todo" element={<Todo/>}/>
      <Route exact path="/header" element={<Header/>}/>
      </Routes >
     
     </Router>
    </div>
  );
}

export default App;
