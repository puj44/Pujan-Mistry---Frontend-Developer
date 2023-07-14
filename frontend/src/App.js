
import Navbar from './Components/Navbar';
import {  UserContext } from './Components/UserContext';
import './App.css';
import { useContext } from 'react';
function App() {
  const { token } = useContext(UserContext);
  return (
     
        <Navbar/>
      
  );
}

export default App;
