import styled from "styled-components";

export const PreviewContainer = styled.section`
  min-height: ${props => (((props.type === 'audio') || (props.isZip === 'true')) ? '30px' : '550px')};
  max-height: ${props => (((props.type === 'audio') || (props.isZip === 'true')) ? 'auto' : '550px')};
  overflow-y: auto;
`;