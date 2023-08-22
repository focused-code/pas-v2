import styled from 'styled-components/macro';

export const Container = styled.section`
    width: 100%;
    min-height: 250px;
`;

export const Heading = styled.h4`
    text-transform: uppercase;
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 0.9rem;
    color: #179ad6;
    border-bottom: 1px dotted #179ad6;
    padding-bottom: 3px;
    font-weight: 600;
`;

export const SubHeading = styled.h5`
    margin-bottom: 2%;
    font-size: 0.8rem;
    color: #6a7280;
    padding-bottom: 3px;
    font-weight: 600;
`;

export const Solution = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #4898d1;
    font-size: 0.85rem;
    & > .solution-box{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        border-radius: 4px;
        box-shadow: var(--ds-shadow-overlay, 0 3px 3px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
        padding: 0.6rem;
        width: 100%;
        & > ol{
            padding-left: 1.5rem;
        }
        & > ol li{
            margin-bottom: 0.5rem;
        }
    }
    & > hr{
        margin-left: 0.6rem;
        border-color: #868686;
        border-top: 1px dotted #868686;
        width: 100%;
    }
    & > .howto-box{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        border-radius: 4px;
        box-shadow: var(--ds-shadow-overlay, 0 3px 3px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
        padding: 0.6rem;
        width: 100%;
        & > ol{
            padding-left: 1.5rem;
        }
        & > ol li{
            margin-bottom: 0.5rem;
        }
    }
`;

export const Response = styled.section`
    width: 100%;
    display: flex;
    padding: 0.6rem;
    &.error{
      color: red;
    }
    &.howto{
        font-style: italic;
    }
`;