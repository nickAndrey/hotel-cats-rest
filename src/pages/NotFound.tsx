import { FC } from 'react';
import { Link } from 'react-router-dom';
import ComponentTitle from '../UI/ComponentTitle';
import Wrapper from '../UI/Wrapper';

const NotFound: FC = () => (
  <Wrapper>
    <ComponentTitle text='404 Page not found ' />
    <Link to='/'>Go Home</Link>
  </Wrapper>
);

export default NotFound;
