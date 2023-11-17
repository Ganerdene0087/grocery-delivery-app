import './App.css';
import './Pages/LoginPage/LoginPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import UserApp from './Pages/UserApp/UserApp';
import DriverApp from './Pages/DriverApp/DriverApp';
import { LoginContext } from './Contexts/LoginContext';
import {useState} from 'react';

const GOOGLE_MAP_API_KEY = '<YOUR_GOOGLE_MAP_API_KEY>';

function App() {
  const [userName, setUserName] = useState('');
  const [selectedTypeOption, setSelectedTypeOption] = useState('shop');
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="App">
      <LoginContext.Provider value={{userName, setUserName, selectedTypeOption, setSelectedTypeOption, loggedIn, setLoggedIn }}>
        {loggedIn === false ? <LoginPage/> :
        selectedTypeOption === 'shop' ? <UserApp/> :  
        <DriverApp />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
