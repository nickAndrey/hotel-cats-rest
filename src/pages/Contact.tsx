import styled from '@emotion/styled';
import { FC } from 'react';
import PageBanner from '../components/Banner/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer/Footer';
import Photos from '../components/Photos/Photos';
import ComponentTitle from '../UI/ComponentTitle';
import Wrapper from '../UI/Wrapper';

const Contact: FC = () => (
  <ContactStyled>
    <PageBanner
      bannerTitle='Contact'
      currentURL='/contact'
      pageTitle='cats hotel contact'
    />
    <Wrapper>
      <ComponentTitle
        text='Contact us to get free support'
        mt={76}
        maxWidth={378}
      />
      <ContactForm />
    </Wrapper>
    <Photos />
    <Footer />
  </ContactStyled>
);

const ContactStyled = styled.div``;

export default Contact;
