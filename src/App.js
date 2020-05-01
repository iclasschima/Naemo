import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Afriskaut from "./components/Afriskaut"
import Footer from "./components/Footer"
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav"
import About from "./components/About"
import Content from "./components/Homecontent"
import Error from "./components/Error"

import {ThemeProvider} from "styled-components"

function App() {

  const [state, setState] = useState(false)

  const changeState = () => {
      setState(state => !state)
  }

  const theme = {
    color: {
      primary: "#E6702C",
      secondary: "#1B203C"
    },
    fontSize: {
      bg: "1.3rem",
      md: "1rem",
      sm: "0.7rem",
      header: "26px"
    },
    device: {
      ipadPro: "1024px",
      iPad: "768px",
      mobile: "480px"
    }
  }

  return (
    <BrowserRouter>
     
      <ThemeProvider theme={theme}>
      {state ? <MobileNav changeState={changeState}/> : ""}
        <Banner />
        <Navbar changeState={changeState}/>
        <div style={{padding: "5% 0 10%"}}>          
          <Switch>
              <Route path="/" component={Content} exact/>
              <Route path="/about" component={About} exact/>
              <Route path="/contact" component={Contact} exact/>
              <Route path="/afriskaut" component={Afriskaut} exact/>
              <Route component={Error} />
          </Switch>
              
        </div>
        <Footer />
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
