import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeProvider';

function App() {

const {themeDark,handleThemeDark} = useContext(ThemeContext)

  return (
    <div className="App">
     

      <button onClick={handleThemeDark}>Swit theme</button>
      {themeDark ? 'aaaaaa':'bbbbbb'}



    </div>
  );
}

export default App;
