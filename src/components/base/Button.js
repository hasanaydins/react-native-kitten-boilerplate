import {Button as B} from '@ui-kitten/components';
import styled from 'styled-components';
import {
  position,
  compose,
  color,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
  variant,
} from 'styled-system';

const Button = styled(B)(
  compose(
    position,
    color,
    size,
    space,
    flexbox,
    layout,
    borderRadius,
  ),
);

export default Button;
