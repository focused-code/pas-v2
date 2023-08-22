import styled from 'styled-components/macro';


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

export const LessonItemContainer = styled.section.attrs(props => ({
    className: 'col-md-4',
}))`
  display: flex;
  flex: 0 0 30%;
  padding: 0;
  flex-direction: column;
  background-color: #fff;
  margin-right: 3%;
  margin-bottom: 2rem;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  justify-content: space-between;
  img{
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export const LessonItemContainerSM = styled.section.attrs(props => ({
  className: 'col-md-3',
}))`
display: flex;
flex: 0 0 24%;
padding: 0;
flex-direction: column;
background-color: #fff;
margin-right: 3%;
margin-bottom: 2rem;
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
justify-content: space-between;
img{
  width: 100%;
  max-width: 100%;
  height: auto;
}
`;

export const Summary = styled.section`
  display: flex;
  width: 100%;
  padding: 4%;
  font-size: 0.75rem;
`;

export const Session = styled.section`
  display: flex;
  width: 100%;
  font-size: 0.75rem;
  font-weight: bold;
  color: #c0c0c0;
  padding: 4%;
`;

export const Buttons = styled.section`
  display: flex;
  width: 100%;
  padding: 4%;
  justify-content: space-between;
  background-color: #0f123f;
`;

export const StyledNote = styled.section`
    p{
      color: #11143c;
      font-size: 0.78rem;
      width: 100%;
      padding: 0.4rem 0;
      display: inline;
      margin-bottom: 0;
    }
    p:hover{
      color: #15153e;
    }
  
    span{
      font-size: 0.65rem;
    }

    span.view-more{
      color: #029cdd;
      margin-left: 0.3rem;
      cursor: pointer;
    }
    span.view-more:hover{
      text-decoration: underline;
    }
`;