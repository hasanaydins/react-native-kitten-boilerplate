import {Layout as L} from '@ui-kitten/components';
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

const View = styled(L)(
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

export default View;
