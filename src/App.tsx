import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { theme } from './UI/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import NotFound from './pages/NotFound';
import Restaurant from './pages/Restaurant';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rooms' component={Rooms} />
        <Route path='/restaurant' component={Restaurant} />
        <Route path='/about' component={AboutUs} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
