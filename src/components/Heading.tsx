import styled from 'styled-components';
import colors from '../utils/colors';

type HeadingProps = {
  marginBottom?: boolean;
};

const Heading = styled.h2<HeadingProps>`
  color: ${colors.heading};
  font-size: 1.75rem;
  margin: 0.2rem 0;
  margin-bottom: ${(props) => (props.marginBottom ? '3.2rem' : '.2rem')};
`;
export default Heading;
