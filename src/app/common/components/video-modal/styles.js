import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Image from 'react-graceful-image';

export const StyledImage = styled(Image)`
  width: 100%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 2px;
`;


export const VideoContainer = styled.section`
  width: 100%;
`;

export const PlayerContainer = styled.section`
  width: 100%;
  & .react-player__preview{
    background-position: inherit !important;
  }
`;

export const ImagePlaceholder = styled.section`
  align-items: center;
  justify-content: center;
  display: flex;
  color: #16163f;
  width: 100%;
  height: 178px;
  z-index: 2;
  background-color: #eee;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 2px;
`;

export const LoaderContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
  `;

export const EventDetails = styled.section`
    display: flex;
    width: 100%;
  `;

export const EventBox = styled.section`
    display: flex;
    width: ${props => props.width || '100%'};
    flex-direction: column;
    h5{
       font-size: 0.85rem;
       text-transform: uppercase;
       color: #04b0f1;
       width: 90%;
       border-bottom: 1px dotted #04b0f1;
    }
    ol{
        margin: 0;
        padding: 0;
        margin-left: 1rem;
    }
    ol li{
        margin-bottom: 0.5rem;
    }
  `;

export const Speakers = styled.section`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  `;

export const SpeakerContainer = styled.section`
    display: flex;
    width: ${props => props.width || '20%'};
    flex-direction: column;
    place-content: center;
    align-items: center;
    border-bottom: 1px dotted grey;
    margin-bottom: 1rem;
    h6{
       font-size: 0.7rem;
       padding-top: 0.5rem;
       text-align: center;
    }
    img{
        width: 70%;
        border-radius: 2.5px;
    }
  `;

export const SmallButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  background-color: #179ad6 !important;
  color: #fff;
  border: 1px solid #fff !important;
  border-radius: 2.5px !important;
  padding: 0 5px;
  text-transform: capitalize !important;
  text-decoration: none;
  text-align: center;
  margin: 0 5px;
  outline: none;
  box-shadow: none;
  display: inline-block !important;
  &:hover{
    background-color: #fff !important;
    color: #000;
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

export const SmallDownloadButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  background-color: #179ad6 !important;
  color: #fff;
  border: 1px solid #fff !important;
  border-radius: 2.5px !important;
  padding: 0 5px;
  text-transform: capitalize !important;
  text-decoration: none;
  text-align: center;
  margin: 0 5px;
  outline: none;
  box-shadow: none;
  display: inline-block !important;
  font-size: 14px;
  &:hover{
    background-color: #408f4d !important;
    color: #fff;
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


export const SmallLink = styled.a.attrs(props => ({
  type: 'button',
}))`
  color: #fff;
  border: ${props => props.border || '1px solid #fff !important'};
  padding: 0 5px;
  border-radius: 0;
  text-transform: none !important;
  text-decoration: none;
  margin: 0 5px;
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.background || 'transparent !important'};
  outline: none;
  text-decoration: none;
  box-shadow: none;
  display: inline-block !important;
  &:hover{
    background-color: #fff !important;
    color: #212529;
    text-decoration: none;
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


export const LocalLink = styled(NavLink).attrs(props => ({
  type: 'button',
}))`
  background-color: transparent !important;
  color: #fff;
  border: 1px solid #fff !important;
  padding: 0 5px;
  border-radius: 2.5px;
  text-transform: none !important;
  text-decoration: none;
  margin: 0 5px;
  outline: none;
  text-decoration: none;
  box-shadow: none;
  display: inline-block !important;
  &:hover{
    background-color: #fff !important;
    color: #212529;
    text-decoration: none;
    i{
      color: #212529;
    }
  }
  &:focus, &:active {
    box-shadow: none;
    outline: none;
  }
  & > i{
    font-size: 17px;
    color: #fff;
    transition: 300ms ease all;
  }
`;

export const EventsGround = styled.section.attrs(props => ({
  className: 'training-ground',
}))`
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
`;

export const EventsSection = styled.section`
    width: 100%;
    font-family: 'Open Sans', sans-serif;
`;

export const EventsContainer = styled.section.attrs(props => ({
  className: 'row',
}))`
  display: flex;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  padding-left: 0.7rem;
`;

export const MainCard = styled.section.attrs(props => ({
  className: 'card',
}))`
  margin-bottom: 1rem;
`;

export const EventCard = styled.section.attrs(props => ({
  className: 'col-xs-6 col-sm-6 col-md-4 col-lg-4',
}))`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 0.75rem;
  margin-bottom: 20px;
  div.details{
    width: 100%;
    display: none;
    background-color: #04b0f1;
    min-height: 178px;
    padding: 10px;
    color: #fff;
    border-radius: 2px;
    place-items: center;
    justify-content: center;
    flex-direction: column;
  }
  &:hover img {
    display: none;
  }
  &:hover div.details {
    display: flex;
  }
`;

export const DetailsButtons = styled.section`
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
`;

export const PreviewContainer = styled.section`
    min-height: 560px;
    max-height: 550px;
    overflow-y: auto;
    display: flex;
    & > div{
      min-height: 550px;
      width: 100%;
    }
    & > div.alert{
      text-align: center;
    }
`;

export const UpcomingEvent = styled.section`
    display: flex;
    flex-direction: column;
    & > h6{
        font-size: 0.7rem
    }
`;

export const EventParagraph = styled.p`
    font-size: 0.8rem;
    margin: ${props => props.margin || '0'};
    font-weight: bold;
`;

export const EventLink = styled.a.attrs(props => ({
  className: 'btn btn-primary btn-sm',
}))`
  width: ${props => props.width || 'auto'};
  &:hover {
    background-color: #ebebeb !important;
    border-color: #fff !important;
    color: #14143f !important;
  }import { Box } from '../coaching/customized-groups/styles';

  & i{
        margin-right: 5px;
    }
`;

export const EventsGroundResponsive = styled.section.attrs(props => ({
  className: 'events-ground',
}))`

  width: 100%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #f3f3f3;
`;


export const PlaylistContainer = styled.section`
  width: 25%;
  padding: 1%;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height:550px;
  max-height:550px;
  overflow-y: auto; 
  flex-direction: column;
`;


export const ResourceButton = styled.button.attrs(props => ({
  type: 'button',
}))`
  color: #212529;
  border: 1px solid grey;
  padding: 0.5rem;
  border-radius: 2.5px;
  font-size: 0.8rem;
  text-transform: none;
  text-decoration: none;
  margin: 5px;
  outline: none;
  box-shadow: none;
  text-align: left;
  display: inline-block !important;
  background-color: ${props => (props.selected ? '#fff' : 'transparent')};
  &.selected{
    background-color: #14143e !important;
    color: #fff;
  }
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

