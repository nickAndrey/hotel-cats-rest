import styled from '@emotion/styled';
import { FC } from 'react';
import ComponentTitle from '../../UI/ComponentTitle';
import Wrapper from '../../UI/Wrapper';
import Menu from '../header/Menu';
import banner from '../../assets/img/banner-background.jpg';
import { Link } from 'react-router-dom';

type PageBannerType = {
  bannerTitle: string;
  currentURL: string;
  pageTitle: string;
};

const PageBanner: FC<PageBannerType> = ({
  bannerTitle,
  currentURL,
  pageTitle,
}) => (
  <PageBannerStyled>
    <img className='image' src={banner} alt='hotel rooms' />
    <Wrapper>
      <h1 className='visually-hidden'>{pageTitle}</h1>
      <Menu />
      <ComponentTitle text={bannerTitle} color='white' mt={96} />
      <BreadCrumbs>
        <Link to='/'>Home</Link>
        <span className='separator'>|</span>
        <Link to={currentURL}>{bannerTitle}</Link>
      </BreadCrumbs>
    </Wrapper>
  </PageBannerStyled>
);

const BreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  .separator {
    margin: 0 ${({ theme }) => theme.sizes.sm(15)}vw;

    ${({ theme }) => theme.media(1)} {
      margin: 0 ${({ theme }) => theme.sizes.md(15)}vw;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
    text-decoration: none;

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(14)}vw;
      line-height: ${({ theme }) => theme.sizes.md(21)}vw;
    }
  }
`;

const PageBannerStyled = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.sizes.sm(85)}vw;

  ${({ theme }) => theme.media(1)} {
    padding-bottom: ${({ theme }) => theme.sizes.md(85)}vw;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
`;

export default PageBanner;
