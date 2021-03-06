import styled from 'styled-components';
import { Text } from 'rebass';

const Allcaps = styled(Text)`
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.
`;

Allcaps.defaultProps = {
  fontSize: 1,
};

export default Allcaps;
