import { memo, useContext, useEffect, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { AIContext } from '../../state';
import { NextIcon } from './next-icon';
import { BackIcon } from './back-icon';
import Loading from './loader';
import Bubble from './bubble';
import History from './history';
import { useDB } from './data';
import { Button, ButtonBox, Buttons, Container, Solution, Response } from './content-styles';

function getRandom(list) {
    return list && list.length ? list[Math.floor((Math.random() * list.length))] : null;
}

function find(list, key) {
    return list && list.length ? list.find(e => e._id == key) : null;
}

const Content = (props) => {

    const [questions, setQuestions] = useState([]);
    const [solution, setSolution] = useState(null);
    const [howtohistory, setHowToHistory] = useState([]);
    const [disablehowtobutton, setHowToButton] = useState(false);
    const [disablerespbutton, setResponseButton] = useState(false);
    const [howto, setHowTo] = useState(null);
    const [howindex, setHowIndex] = useState(0);
    const [solindex, setSolIndex] = useState(0);
    const [responses, setResponses] = useState([]);
    const [responsescollection, setResponsesCollection] = useState([]);
    const [howtocollection, setHowToCollection] = useState([]);
    const [showsolution, setShowSolution] = useState(false);
    const [showhow, setShowHow] = useState(false);
    const [question, setQuestion] = useState(null);
    const [client_question, setClientQuestion] = useState(null);
    const [qid, setQid] = useState('');

    const { params, showhistory } = useContext(AIContext);

    const {
        getResponses,
        saveResponsesHistory,
        saveHowTosHistory,
        getResponsesHistory,
        getHowTosHistory,
        getQuestionsList
    } = useDB();

    const { path } = params;
    const module = props.module_set_name ? props.module_set_name : '';
    const business = props.business ? props.business : '';
    const alias = props.alias ? props.alias : '';

    const { userid, assessment_id } = props;

    const queryClient = useQueryClient();

    const { isLoading, isError, error } = useQuery(['ai-suggestions', path, business, alias], () => getResponses(path, business, alias), {
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
            if (res?.data?.data?.responses) {
                if (res?.data?.data?.question) {
                    setQuestion(res?.data?.data?.question);
                }
                if (res?.data?.data?._id) {
                    setQid(res?.data?.data?._id.$oid);
                }
                const resps = res?.data?.data?.responses;
                if (resps) {
                    setResponses(resps);
                    const sol = getRandom(resps);
                    setSolution(sol);
                    if (path != 'costs') {
                        setHowTo(getRandom(sol?.howtos));
                    }
                }
            } else {
                setSolution(null);
                setHowTo(null);
            }
        }
    });

    const reshist = useQuery(['ai-responses-history', userid], () => getResponsesHistory(userid), {
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
            if (res?.data?.data?.payload) {
                // TODO: Should filter this list with the path first
                const list = res?.data?.data?.payload.filter(e => e.path == path);
                const filtered = list.map(e => e.id.$oid);
                setResponseButton(false);
                setResponsesCollection([...new Set([...filtered])]);
            }
        }
    });
    const howhist = useQuery(['ai-howtos-history', userid], () => getHowTosHistory(userid), {
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
            if (res?.data?.data?.payload) {
                // TODO: Should filter this list with the path first
                const list = res?.data?.data?.payload.filter(e => e.path == path);
                setHowToHistory(list);
                setHowToButton(false);
                const filtered = list.map(e => e.id.$oid);
                setHowToCollection([...new Set([...filtered])]);
            }
        }
    });
    const qlist = useQuery(['ai-questions-list'], () => getQuestionsList(), {
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
            if (res?.data?.data) {

                setQuestions(res?.data?.data);

                if (question) {
                    const found = res?.data?.data.find(e => e.question == question);
                    if (found) {
                        setClientQuestion(found.client_question);
                    }
                }
            }
        }
    });

    const responsesMutation = useMutation(saveResponsesHistory, {
        onSuccess: () => {
            // mark responses history queries as stale and potentially refetch them too!
            queryClient.invalidateQueries('ai-responses-history');
        },
    });

    const howtosMutation = useMutation(saveHowTosHistory, {
        onSuccess: () => {
            // mark howtos history queries as stale and potentially refetch them too!
            queryClient.invalidateQueries('ai-howtos-history');
        },
    });

    useEffect(() => {
        if (question) {
            if (questions.length) {
                const found = questions.find(e => e.question == question);
                if (found) {
                    setClientQuestion(found.client_question);
                }
            }
        }
    }, [question]);

    const getAnotherSolution = () => {
        if (responses && responses.length) {
            const sol = getRandom(responses);
            setSolution(sol);
            if (path != 'costs') {
                setHowTo(getRandom(sol?.howtos));
            }
        }
    }

    const getAnotherHowto = () => {
        if (solution) {
            if (path != 'costs') {
                setHowTo(getRandom(solution?.howtos));
            }
        }
    }

    useEffect(() => {
        if (howtocollection.length) {
            setHowIndex(howtocollection.length - 1);
        } else {
            setHowIndex(0);
        }
    }, [howtocollection]);

    useEffect(() => {
        if (responsescollection.length) {
            setSolIndex(responsescollection.length - 1);
        } else {
            setSolIndex(0);
        }
    }, [responsescollection]);

    useEffect(() => {
        getAnotherSolution();
    }, []);

    const collectResponse = () => {
        // Only save at most 5 items 
        if (responsescollection.length < 5) {
            // save unique
            setResponsesCollection([...new Set([...responsescollection, solution._id?.$oid])]);

            // Save the history to DB
            const params = {
                path,
                response: solution?.description,
                user_id: props.userid,
                assessment_id,
            };
            setResponseButton(true);
            responsesMutation.mutate(params);
        }
    }
    const collectHowto = () => {
        // Only save at most 5 items 
        if (howtocollection.length < 5) {

            // save unique
            setHowToCollection([...new Set([...howtocollection, howto._id?.$oid])]);

            // Save the history to DB
            const params = {
                question_id: qid,
                response_id: solution._id?.$oid,
                howto: howto?.description,
                user_id: userid,
                assessment_id,
                path,
            };
            setHowToButton(true);
            howtosMutation.mutate(params);
        }
    }

    const getPreviousHowTo = () => {
        const how = howtohistory.find(e => e?.id?.$oid == howtocollection[howindex]);
        if (how) {
            setHowTo(how);
            if (howindex > 0) {
                const a = howindex - 1;
                setHowIndex(a);
            }
        }
    };

    const getNextHowTo = () => {
        const how = howtohistory.find(e => e?.id?.$oid == howtocollection[howindex]);
        if (how) {
            setHowTo(how);
            if (howindex < (howtocollection.length - 1)) {
                const a = howindex + 1;
                setHowIndex(a);
            }
        }
    };

    const getPreviousSol = () => {
        const sol = find(responses, responsescollection[solindex]);
        if (sol) {
            setSolution(sol);
            if (solindex > 0) {
                const a = solindex - 1;
                setSolIndex(a);
            }
        }
    };

    const getNextSol = () => {
        const sol = find(responses, responsescollection[solindex]);
        if (sol) {
            setSolution(sol);
            if (solindex < (responsescollection.length - 1)) {
                const a = solindex + 1;
                setSolIndex(a);
            }
        }
    };

    const renderSolution = () => {
        return (
            <>
                <Buttons>
                    <ButtonBox>
                        <Button type="button" onClick={getAnotherSolution} className="btn-submit">Suggest another solution</Button>
                        <Bubble alias={alias} id={qid} question={client_question} />
                    </ButtonBox>
                    {(responsescollection.length > 1) ? <>
                        <Button type="button" onClick={getPreviousSol} disabled={solindex == 0} className="btn-outline"><BackIcon /></Button>
                        <Button type="button" onClick={getNextSol} disabled={solindex == (responsescollection.length - 1)} className="btn-outline"><NextIcon /></Button>
                    </> : null}
                    <Button type="button" disabled={responsescollection.length == 5 || disablerespbutton} onClick={collectResponse} className="btn-submit">Add to History</Button>
                </Buttons>
                <Response>
                    {solution ? solution?.description : null}
                </Response>
            </>
        )
    }

    const renderExtra = () => {
        return isError ? <Response className="error">Error: {error?.message}</Response> : <Response>No suggestion found for this module</Response>;
    }

    const renderHowto = () => {
        return (
            <>
                <hr />
                <section className="howto-box">
                    <Buttons>
                        {showhow ? (
                            <>
                                <Button type="button" onClick={getAnotherHowto} className="btn-submit">Suggest Another Answer</Button>
                                {(howtocollection.length > 1) ? <>
                                    <Button type="button" onClick={getPreviousHowTo} disabled={howindex == 0} className="btn-outline"><BackIcon /></Button>
                                    <Button type="button" onClick={getNextHowTo} disabled={howindex == (howtocollection.length - 1)} className="btn-outline"><NextIcon /></Button>
                                </> : null}
                                <Button type="button" disabled={howtocollection.length == 5 || disablehowtobutton} onClick={collectHowto} className="btn-submit">Add to History</Button>
                            </>
                        ) : <Button type="button" onClick={() => setShowHow(true)} className="btn-submit">Have AI Suggest How To Use It</Button>}

                    </Buttons>
                    {showhow ? <Response className="howto">
                        {howto.description}
                    </Response> : null}
                </section>
            </>
        );
    }

    return (
        <Container>
            {showhistory ? <History {...props} qid={qid} getHowTosHistory={getHowTosHistory} getResponsesHistory={getResponsesHistory} path={path} /> : showsolution ? (
                <Solution>
                    <section className="solution-box">
                        {(isLoading) ? <Loading /> : solution && !isError ? renderSolution() : renderExtra()}
                    </section>
                    {howto ? renderHowto() : null}
                </Solution>
            ) : <>
                <Button type="button" onClick={() => setShowSolution(true)} className="btn-submit">Have AI suggest a solution</Button>
                    <Bubble alias={alias} id={qid} question={client_question} />
            </>}
        </Container>
    )
}

export default memo(Content);
