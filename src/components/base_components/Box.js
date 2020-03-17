import {Layout as View} from '@ui-kitten/components';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius,
  shadow,
} from 'styled-system';

const Box = styled(View)(
  compose(
    color,
    size,
    space,
    border,
    flexbox,
    borderRadius,
    shadow,
  ),
);

export default Box;
