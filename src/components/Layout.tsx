import styled from 'styled-components';
import { device } from '../utils/breakpoints';

const Layout = styled.div`
  min-height: 100vh;
  padding: 0 1rem;

  @media ${device.tablet} {
    padding: 0 10rem;
  }

  @media ${device.laptop} {
    padding: 0 15rem;
  }

  @media ${device.laptopL} {
    padding: 0 25rem;
  }
`;
export default Layout;
