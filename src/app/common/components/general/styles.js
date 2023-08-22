import styled from 'styled-components/macro';
import Image from 'react-graceful-image';

export const StyledImage = styled(Image)`
  width: 100%;
`;

export const ImagePlaceholder = styled.section`
  align-items: center;
  justify-content: center;
  display: flex;
  color: #16163f;
  width: 100%;
  height: 232px;
  z-index: 2;
  background-color: #eee;
  text-align: center;
`;