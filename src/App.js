import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Components
import { Navbar } from './components/navbar/Navbar';
import { ScrollTop } from './components/ScrollTop';
import { JugadoresEquiposPage } from './pages/JugadoresEquipos';

//Pages
import { MainPage } from './pages/mainPage';
import { NofoundPage } from './pages/noFound';


function App() {

  const [press, setPress] = useState(false);

  document.addEventListener('keydown', (e) => {
    function onKeyDownHandler(e) {
      if(e.key === 'F11') {
        setPress(!press);
      };
      
    }
    onKeyDownHandler(e);
  })

   
  return (
    <React.Fragment>
      <Router>
        <ScrollTop/>
        <Navbar/>
        
        {!press && (
          <div style={{position: 'fixed', background: 'rgb(255, 255, 255, .2)', padding: '0 10px', borderRadius: '5px', marginTop: '80px', right: '1%'}}>
            presiona <b>F11</b> para mejor experiencia
          </div>
        )}
        
        <Switch>

          <Route path="/" component={MainPage} exact />
          <Route path="/jugadores" component={JugadoresEquiposPage} exact/>
          <Route path="/equipos" component={JugadoresEquiposPage} exact/>
          <Route path={`*`} component={NofoundPage}/>

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
