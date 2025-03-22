//import React from 'react'
import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"
import "./scss/App.css"
import "./config/gemini"
import useThemeStore from "./stores/themeStore"

const App = () => {
  const {theme} = useThemeStore();

  return (
    <section id="App" className={theme}>
      <Sidebar/>
      <Main/>
    </section>
  )
}

export default App