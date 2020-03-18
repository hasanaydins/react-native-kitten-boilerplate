import {TouchableOpacity as TO} from 'react-native';
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
} from 'styled-system';

const Tbutton = styled(TO)(
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

export default Tbutton;
