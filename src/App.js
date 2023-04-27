import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contacts from './components/Contacts';
import { createContext,useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme,setTheme] = useState("dark")

  const toggleTheme = () => {
     setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    
    <ThemeContext.Provider value={{theme,toggleTheme}}>



    <div className="App" id={theme}>
      <NavBar theme= {theme} toggleTheme= {toggleTheme} />
        <div className="sectionAll mx-0">
          <Home/>
          <About/>
          <Services/>
          <Work/>
          <Contacts/>
         
        </div>
     </div>
  </ThemeContext.Provider>
  );
}

export default App;
