import styled from '@emotion/styled';
import { FC } from 'react';
import Icon from '../../UI/icons/Icon';
import Wrapper from '../../UI/Wrapper';
import LinkList from './LinkList';

const Footer: FC = () => (
  <FooterStyled>
    <Wrapper>
      <div className='footer-info'>
        <h5 className='footer-info__title'>Cat's rest Hotel</h5>
        <p className='footer-info__text'>
          Our hotel is an image of quality and profesionalism combined with hard
          work and precision. You can expect only the best services from our
          staff.
        </p>
        <ul className='footer-info__social-links'>
          <li>
            <Icon name='fb' size={12} color='#ffffff' />
          </li>
          <li>
            <Icon name='twitter' size={12} color='#ffffff' />
          </li>
          <li>
            <Icon name='gplus' size={12} color='#ffffff' />
          </li>
        </ul>
      </div>
      <div className='useful-links'>
        <h5 className='list-title'>Useful Links</h5>
        <LinkList listOf='usefulLinks' />
      </div>
      <div className='privacy'>
        <h5 className='list-title'>Privacy</h5>
        <LinkList listOf='privacy' />
      </div>
      <div className='contact-info'>
        <h5 className='list-title'>Contact Info</h5>
        <LinkList listOf='contactInfo' />
      </div>
    </Wrapper>
  </FooterStyled>
);

const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.black2};
  padding-top: ${({ theme }) => theme.sizes.sm(90)}vw;
  padding-bottom: ${({ theme }) => theme.sizes.sm(90)}vw;

  ${({ theme }) => theme.media(1)} {
    padding-top: ${({ theme }) => theme.sizes.md(90)}vw;
    padding-bottom: ${({ theme }) => theme.sizes.md(90)}vw;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;

    ${({ theme }) => theme.media(1)} {
      grid-template-columns: 2fr repeat(3, 1fr);
    }
  }

  & > div > div {
    margin: ${({ theme }) => theme.sizes.sm(30)}vw 0 0 0;
    ${({ theme }) => theme.media(1)} {
      margin: 0;
    }
  }

  .footer-info {
    &__title {
      font-size: ${({ theme }) => theme.sizes.sm(24)}vw;
      line-height: ${({ theme }) => theme.sizes.sm(35)}vw;
      margin: 0 0 ${({ theme }) => theme.sizes.sm(20)}vw 0;
      color: ${({ theme }) => theme.colors.white};

      ${({ theme }) => theme.media(1)} {
        font-size: ${({ theme }) => theme.sizes.md(24)}vw;
        line-height: ${({ theme }) => theme.sizes.md(35)}vw;
        margin: 0 0 ${({ theme }) => theme.sizes.md(20)}vw 0;
      }
    }

    &__text {
      font-size: ${({ theme }) => theme.sizes.sm(14)}vw;
      line-height: ${({ theme }) => theme.sizes.sm(21)}vw;
      margin: 0 0 ${({ theme }) => theme.sizes.sm(20)}vw 0;
      max-width: ${({ theme }) => theme.sizes.sm(260)}vw;
      color: ${({ theme }) => theme.colors.grey6};

      ${({ theme }) => theme.media(1)} {
        font-size: ${({ theme }) => theme.sizes.md(14)}vw;
        line-height: ${({ theme }) => theme.sizes.md(21)}vw;
        margin: 0 0 ${({ theme }) => theme.sizes.md(20)}vw 0;
        max-width: ${({ theme }) => theme.sizes.md(260)}vw;
      }
    }

    &__social-links {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        width: ${({ theme }) => theme.sizes.sm(35)}vw;
        height: ${({ theme }) => theme.sizes.sm(35)}vw;

        ${({ theme }) => theme.media(1)} {
          width: ${({ theme }) => theme.sizes.md(35)}vw;
          height: ${({ theme }) => theme.sizes.md(35)}vw;
        }

        &:nth-of-type(1) {
          background: #3b5998;
        }

        &:nth-of-type(2) {
          background: #55acee;
        }

        &:nth-of-type(3) {
          background: #dc4e41;
        }

        &:not(:last-child) {
          margin-right: ${({ theme }) => theme.sizes.sm(10)}vw;

          ${({ theme }) => theme.media(1)} {
            margin-right: ${({ theme }) => theme.sizes.md(10)}vw;
          }
        }
      }
    }
  }

  .list-title {
    font-size: ${({ theme }) => theme.sizes.sm(18)}vw;
    line-height: ${({ theme }) => theme.sizes.sm(27)}vw;
    margin: 0 0 ${({ theme }) => theme.sizes.sm(20)}vw 0;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.media(1)} {
      font-size: ${({ theme }) => theme.sizes.md(18)}vw;
      line-height: ${({ theme }) => theme.sizes.md(27)}vw;
      margin: 0 0 ${({ theme }) => theme.sizes.md(20)}vw 0;
    }
  }
`;

export default Footer;
