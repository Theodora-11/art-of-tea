import Header from './components/Header'
import Main from './components/Main'
import {  useState, useEffect } from 'react'
import { Theme } from './Context/Theme'
import '../styles/index.css'

function App() {

  const [themeMod, setThemeMod] = useState('light');
  const toggleTheme = () => {setThemeMod(prev => prev === 'light'? 'dark' : 'light')}

  useEffect(() => {
    document.body.className = themeMod;
  }, [themeMod])

  const themeContext = {
    themeMod,
    toggleTheme
  }

  return(

    <Theme.Provider value={ themeContext }>
      <Header />
      <Main />
    </Theme.Provider>
  )
}

export default App;