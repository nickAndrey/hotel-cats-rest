import { FC } from 'react';
import About from '../components/About/About';
import HomeBanner from '../components/Banner/HomeBanner';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import Photos from '../components/Photos/Photos';
import RestaurantGrid from '../components/Restaurant/RestaurantGrid';
import ComponentTitle from '../UI/ComponentTitle';
import Wrapper from '../UI/Wrapper';

const Home: FC = () => (
  <>
    <HomeBanner
      bigText='The best hotel you will ever need'
      smallText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    />
    <About />
    <Wrapper>
      <ComponentTitle
        text='Explore our menu and eat what you want'
        mt={111}
        maxWidth={498}
      />
      <RestaurantGrid />
    </Wrapper>
    <Blog />
    <Photos />
    <Footer />
  </>
);

export default Home;
