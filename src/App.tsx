import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { theme } from './UI/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path='/rooms'>
          <Rooms />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
