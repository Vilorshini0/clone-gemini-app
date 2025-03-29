//import React from 'react'
import Main from "./components/main/Main"
import "./scss/App.css"
import "./config/gemini"
import useThemeStore from "./stores/themeStore"
import SidebarView from "./components/sidebar/SidebarView"

const App = () => {
  const {theme} = useThemeStore();

  return (
    <section id="App" className={theme}>
      <SidebarView/>
      <Main/>
    </section>
  )
}

export default App