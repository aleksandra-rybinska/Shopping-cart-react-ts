import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 1rem;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 30px;
  top: 30px;
  background: rgba(255, 255, 255, 0.8);
  transform: scale(1.5);
`;
