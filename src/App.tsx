import { FC } from 'react';
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { theme } from './UI/theme';
import Banner from './components/Banner/Banner';
import About from './components/About/About';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Banner
      bigText='The best hotel you will ever need'
      smallText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    />
    <About />
  </ThemeProvider>
);

export default App;
