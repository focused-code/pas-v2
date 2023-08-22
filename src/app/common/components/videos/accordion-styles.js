import styled from 'styled-components/macro';
import { ListGroupItem, CardHeader } from 'reactstrap';

export const ListItem = styled(ListGroupItem)`
  padding: 0.75rem 1rem !important;
  background-color: ${props => (props.selected ? '#009bde' : '#fff')} !important;
  color: ${props => (props.selected ? '#fff' : '#000')} !important;
  font-size: 0.75rem;
`;

export const Span = styled.span`
  width: ${props => ((props.hasQuiz) ? '81%' : '100%')};
  display: inline-block;
  font-size: 0.75rem;
`;

export const HeaderButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  background-color: transparent !important;
  width: 100%;
  text-align: left;
  border: none;
  text-decoration: none;
  color: ${props => (props.isOpen ? 'green' : '#fff')};
  padding: 0.3rem;
  font-weight: ${props => (props.isOpen ? '600 !important' : '500')};
  font-size: 0.65rem !important;
  display: inline-block !important;
  &:focus, &:active {
    border: none;
    box-shadow: none;
    outline: none;
    color: ${props => (props.isOpen ? 'green !important' : '#fff')};
  }
  &:hover{
    color: ${props => (props.isOpen ? 'green !important' : '#fff !important')};
  }
  & > i{
    float: right;
    font-size: 17px;
    color: #fff;
    margin-right: 10px;
    transition: 300ms ease all;
  }
  & > i.fa-angle-double-down{
    color: green;
  }
`;

export const SmallButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  background-color: ${props => (props.selected ? '#fff' : 'transparent')} !important;
  color: ${props => (props.selected ? '#212529' : '#000')} !important;
  text-transform: none !important;
  text-decoration: none;
  margin: 0 5px;
  outline: none;
  box-shadow: none;
  display: inline-block !important;
  float: right;
  border: 1px solid grey;
  border-color: ${props => (props.border ? '#18d343' : '#179ad6')} !important;
  padding: 0 5px;
  border-radius: 2.5px;
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

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AccHeader = styled(CardHeader)`
  background-color: #14143f !important;
  color: #fff  !important;
  &.active-item{
    background-color: green !important;
  }
`;

export const HeaderItem = styled.div`
  flex: 1;
  text-align: center;
  &:nth-child(2){
      flex: 12
  }
`;


export const MainContainer = styled.section.attrs(props => ({
  className: 'accordion',
}))`
  width: 100%;
`;