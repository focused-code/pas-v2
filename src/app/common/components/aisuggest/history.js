import { memo, useEffect, useState } from "react";
import { useQuery } from 'react-query';
import Loading from './loader';
import NewlineText from './newline';
import { Heading, SubHeading, Container, Solution, Response } from './history-styles';

const History = (props) => {

    const { getHowTosHistory, getResponsesHistory, path, userid } = props;

    const [resphistory, setRespHistory] = useState([]);
    const [howthistory, setHowtHistory] = useState([]);

    const responses = useQuery(['ai-responses-history', userid], () => getResponsesHistory(userid));
    const howtos = useQuery(['ai-howtos-history', userid], () => getHowTosHistory(userid));

    useEffect(() => {
        if (responses?.data?.data?.data?.payload) {
            // Filter the history by path first
            const list = responses?.data?.data?.data?.payload.filter(e => e.path == path);
            setRespHistory(list);
        }
    }, [responses?.data, path]);

    useEffect(() => {
        if (howtos?.data?.data?.data?.payload) {
            // Filter the history by path first
            const list = howtos?.data?.data?.data?.payload.filter(e => e.path == path);
            setHowtHistory(list);
        }
    }, [howtos?.data, path]);

    const renderResponseExtra = () => {
        return responses.isError ? <Response className="error">Error: {responses?.error?.message}</Response> : <Response>No Responses History</Response>;
    }

    const renderHowTosExtra = () => {
        return howtos.isError ? <Response className="error">Error: {howtos?.error?.message}</Response> : <Response>No How Tos History</Response>;
    }

    const renderResponsesHistory = () => {
        if (resphistory.length) {
            return (
                <ol>
                    {resphistory.map(e => <li key={e?.id?.$oid}>
                        <NewlineText text={e.description} />
                    </li>)}
                </ol>
            )
        } else {
            return (<p style={{ color: '#000000' }}>No history found</p>);
        }
    }

    const renderHowTosHistory = () => {
        if (howthistory.length) {
            return (
                <ol>
                    {howthistory.map(e => <li key={e?.id?.$oid}>
                        <NewlineText text={e.description} />
                    </li>)}
                </ol>
            )
        } else {
            return (<p style={{ color: '#000000' }}>No history found</p>);
        }
    }

    return (
        <Container>
            <Heading>History</Heading>
            <Solution>
                <section className="solution-box">
                    <SubHeading>Responses:</SubHeading>
                    {(responses.isLoading) ? <Loading /> : !responses.isError ? renderResponsesHistory() : renderResponseExtra()}
                </section>
                <hr />
                <section className="howto-box">
                    <SubHeading>How Tos:</SubHeading>
                    {(howtos.isLoading) ? <Loading /> : !howtos.isError ? renderHowTosHistory() : renderHowTosExtra()}
                </section>
            </Solution>
        </Container>
    );
}

export default memo(History);