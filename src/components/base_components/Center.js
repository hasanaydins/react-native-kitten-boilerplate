import {Layout as L} from '@ui-kitten/components';
import styled from 'styled-components';
import {
  compose,
  color,
  typography,
  space,
  flexbox,
  position,
  shadow,
} from 'styled-system';

const Center = styled(L)(
  compose(
    typography,
    space,
    color,
    flexbox,
    position,
    shadow,
  ),
);

Center.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
};

export default Center;
