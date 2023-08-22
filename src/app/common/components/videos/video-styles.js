import styled from 'styled-components/macro';
import { ListGroupItem } from 'reactstrap';

export const ListItem = styled(ListGroupItem)`
  padding: 0.75rem 1rem !important;
  background-color: ${props => (props.selected ? '#009bde' : '#fff')} !important;
  color: ${props => (props.selected ? '#fff' : '#000')} !important;
`;

export const Span = styled.span`
  width: ${props => ((props.hasQuiz) ? '78%' : '100%')};
  display: inline-block;
  font-size: 0.75rem;
`;

export const SmallButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  color: #212529;
  border: 1px solid grey;
  padding: 0 5px;
  border-radius: 0;
  border-color: ${props => (props.border ? '#18d343' : '#179ad6')} !important;
  font-size: 0.75rem;
  text-transform: none !important;
  text-decoration: none;
  margin: 0 5px;
  outline: none;
  box-shadow: none;
  display: inline-block !important;
  float: right;
  background-color: ${props => (props.selected ? '#fff' : 'transparent')} !important;
  &:hover{
    background-color: #14143e !important;
    color: #fff !important;
  }
  &:focus, &:active {
    box-shadow: none;
    outline: none;
  }
  & > i{
    font-size: 17px;
    color: #212529;
    transition: 300ms ease all;
  }
`;

export const VideoItem = styled.section`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 2.5px;
    padding: 1%;
`;

export const VideoDetails = styled.section`
    font-size: 0.7rem;
    width: 100%;
    text-align: left;
    padding: 1%;
    margin-top: 30px;
`;

export const VideoTitle = styled.h4`
    font-size: 0.85rem;
    font-weight: 600;
    text-align: left;
    border-bottom: 1px dotted #868686;
    padding-bottom: 2px;
`;

export const VideoMeta = styled.p`
    font-size: 0.65rem;
    text-align: left;
    margin-bottom: 0;
`;

export const LoaderContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
  `;

export const TrainingGround = styled.section.attrs(props => ({
  className: 'training-ground',
}))`
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
`;

export const MainVideoSection = styled.section`
    width: 100%;
    flex: 2;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.5%;
`;


export const PlaylistSection = styled.section.attrs(props => ({
  className: 'playlist',
}))`
  width: 100%;
  padding: 1%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  height:580px;
  max-height:580px;
  overflow-y: auto;
`;


export const QuizContainer = styled.section.attrs(props => ({
  className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12',
}))`
  align-items: center;
  justify-content: ${props => ((props.questions !== null) ? 'left' : 'center')};
  display: flex;
  font-size: 0.75rem;
  flex-direction: column;
`;

export const QuizCenter = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Open Sans', sans-serif;
    max-height: 700px;
    overflow-y: auto
`;

export const SelectedQuiz = styled.section`
    width: 100%;
    margin-bottom: 5%;
`;

export const QuizTitle = styled.h5`
    text-transform: uppercase;
    margin-bottom: 2%;
    font-size: 1rem;
    color: #179ad6;
    border-bottom: 1px dotted #179ad6;
    padding-bottom: 3px;
`;


export const HeaderButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  background-color: transparent !important;
  width: 100%;
  text-align: left;
  border: none;
  text-decoration: none;
  color: ${props => (props.isOpen ? 'green' : '#212529')};
  padding: 0.3rem;
  font-weight: ${props => (props.isOpen ? '600 !important' : '500')};
  font-size: 0.65rem !important;
  display: inline-block !important;
  &:focus, &:active {
    border: none;
    box-shadow: none;
    outline: none;
    color: ${props => (props.isOpen ? 'green !important' : '#212529')};
  }
  &:hover{
    color: ${props => (props.isOpen ? 'green !important' : '#212529')};
  }
  & > i{
    float: right;
    font-size: 17px;
    color: #212529;
    margin-right: 10px;
    transition: 300ms ease all;
  }
  & > i.fa-angle-double-down{
    color: green;
  }
`;


export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
  &:nth-child(2){
      flex: 12
  }
`;
