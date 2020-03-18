import {Card as C} from '@ui-kitten/components';
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

const Card = styled(C)(
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

export default Card;
