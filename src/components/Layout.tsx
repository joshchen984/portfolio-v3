import styled from 'styled-components';
import { device } from '../utils/breakpoints';

type LayoutProps = {
  smallPadding?: boolean;
};

const Layout = styled.div<LayoutProps>`
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: ${(props) => (props.smallPadding ? '0 3rem' : '0 10rem')};
  }

  @media ${device.laptop} {
    padding: ${(props) => (props.smallPadding ? '0 8rem' : '0 12rem')};
  }

  @media ${device.laptopL} {
    padding: 0 20rem;
  }

  @media ${device.laptopXL} {
    padding: 0 25rem;
  }
  @media ${device.desktop} {
    padding: 0 30rem;
  }
`;
export default Layout;
