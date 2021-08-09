import { FC } from 'react';
import About from '../components/About/About';
import HomeBanner from '../components/Banner/HomeBanner';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import Photos from '../components/Photos/Photos';
import Restaurant from '../components/Restaurant/Restaurant';

const Home: FC = () => (
  <>
    <HomeBanner
      bigText='The best hotel you will ever need'
      smallText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    />
    <About />
    <Restaurant />
    <Blog />
    <Photos />
    <Footer />
  </>
);

export default Home;
