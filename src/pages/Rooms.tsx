import styled from '@emotion/styled';
import { FC } from 'react';
import PageBanner from '../components/Banner/PageBanner';
import Footer from '../components/Footer/Footer';
import GetReservation from '../components/GetReservation/GetReservation';
import Photos from '../components/Photos/Photos';
import RoomsGrid from '../components/Rooms/RoomsGrid';
import ComponentTitle from '../UI/ComponentTitle';
import Wrapper from '../UI/Wrapper';

const Rooms: FC = () => (
  <RoomsStyled>
    <PageBanner
      bannerTitle='Rooms'
      currentURL='/rooms'
      pageTitle='rooms in hotel'
    />
    <Wrapper>
      <ComponentTitle
        text='Trust and quality are our atuus'
        mt={110}
        maxWidth={374}
      />
      <div className='rooms-grid__wrapper'>
        <RoomsGrid />
      </div>
      <GetReservation />
    </Wrapper>
    <Photos />
    <Footer />
  </RoomsStyled>
);

const RoomsStyled = styled.div`
  .rooms-grid__wrapper {
    margin-top: ${({ theme }) => theme.sizes.sm(50)}vw;
    margin-bottom: ${({ theme }) => theme.sizes.sm(70)}vw;

    ${({ theme }) => theme.media(1)} {
      margin-top: ${({ theme }) => theme.sizes.md(50)}vw;
      margin-bottom: ${({ theme }) => theme.sizes.md(70)}vw;
    }
  }
`;

export default Rooms;
