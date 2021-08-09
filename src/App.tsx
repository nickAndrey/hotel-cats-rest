import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { theme } from './UI/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import NotFound from './pages/NotFound';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rooms' component={Rooms} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
