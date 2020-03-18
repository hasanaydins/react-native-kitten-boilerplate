import {Text as T} from '@ui-kitten/components';
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

const Text = styled(T)(
  compose(
    typography,
    space,
    color,
    flexbox,
    position,
    shadow,
  ),
);

Text.defaultProps = {
  fontFamily: 'Poppins-Regular',
};

export default Text;
