import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  background-color:#ffc000;
`;

export const ChromeWarningSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0rem;
  background-color: #ec2027;
`;

export const ChromeWarningSpan = styled.span`
  display: flex;
  width: 97%;
  justify-content: center;
  align-items: center;
  margin-bottom: 0rem;
  color:#fff;
  font-family: "Open Sans", sans-serif !important;
  font-weight: 400;
  font-size: 14px;
`;

export const ChromeWarningButton = styled.button`
  display: flex;
  background: none;
  border: none;
  color: #fff;
  padding-right: 10px;
`;

export const NotificationListItem = styled.li`
  display: flex;
  place-content: center;
  align-items: center;
  justify-content: center;
  margin: 0 1%;
  padding-right: .5rem;
  padding-left: .5rem;
`;


const bell = keyframes`
 0%, 25%, 75%, 100% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(10deg);
    }
    45% {
      transform: rotate(-10deg);
    }
    55% {
      transform: rotate(5deg);
    }
    60% {
      transform: rotate(-5deg);
    }
`;

const bellClapper = keyframes`
  0%, 25%, 75%, 100% {
      transform: translateX(0);
    }
    40% {
      transform: translateX(-0.25em);
    }
    45% {
      transform: translateX(0.25em);
    }
    55% {
      transform: translateX(-0.5em);
    }
    60% {
      transform: translateX(0.5em);
    }
`;

const notification = keyframes`
 0%, 25%, 75%, 100% { opacity: 1;}
 30%, 70% { opacity: 0;}
`;

export const Bell = styled.main`
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &.active .notification svg > path{
    fill: #029cdd;
  }

  & > .notification {
    position: relative;
    display: flex;
    place-content: center;
    width: 1.4rem;
    height: 1.4rem;
  }

  & > .notification svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  & > .notification svg > path {
    fill: #c0c0c0;
  }
  & > .notification svg > path:hover {
    fill: #029cdd;
  }

  & > .notification svg > path.notification--bell {
    fill: #029cdd;
  }

  & > .notification svg > path.notification--bellClapper {
    fill: #029cdd;
  }

  & > .notification .notification--num{
    position: absolute;
    top: 0%;
    left: 60%;
    font-size: 0.7rem;
    border-radius: 50%;
    width: 1.6em;
    height: 1.6em;
    background-color: #FF4C13;
    border: 1px solid #fff;
    color: #FFFFFF;
    text-align: center;
    line-height: 1.3em;
    animation: ${notification} 3.2s ease;
  }

  & > .notification svg > path.notification--bell {
    animation: ${bell} 2.2s linear infinite;
    transform-origin: 50% 0%;
  }

  & > .notification svg > path.notification--bellClapper {
    animation: ${bellClapper} 2.2s 0.1s linear infinite;
  }
`;
