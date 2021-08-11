import { FC, useEffect, useState } from 'react';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const Menu: FC = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  const resizer = () => setWidth(document.documentElement.clientWidth);

  useEffect(() => {
    window.addEventListener('resize', resizer);

    return () => {
      window.removeEventListener('resize', resizer);
    };
  }, [width]);

  return width <= 1200 ? <MenuMobile /> : <MenuDesktop />;
};

export default Menu;
