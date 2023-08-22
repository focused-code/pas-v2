import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AIContext = createContext({});

export const AIProvider = (props) => {
    const {
        children,
    } = props;

    const location = useLocation();

    const { state } = location;
    const module = state && state.module;

    // Use State to keep the values
    const [params, setParams] = useState(null);
    const [responses, setResponses] = useState([]);
    const [responsescollection, setResponsesCollection] = useState([]);
    const [howtocollection, setHowToCollection] = useState([]);
    const [showsuggestions, setShowSuggestions] = useState(false);
    const [showai, setShowAi] = useState(false);
    const [showsolution, setShowSolution] = useState(false);
    const [showhow, setShowHow] = useState(false);
    const [showhistory, setShowHistory] = useState(false);

    useEffect(() => {
        if (!showsuggestions) {
            setShowSolution(false);
            setShowHow(false);
        }
    }, [showsuggestions]);

    useEffect(() => {
        if (module && module?.module_path) {
            setParams({ alias: '', path: module.module_path, module: module.module_alias });
            setShowSolution(false);
            setShowHow(false);
            setResponsesCollection([]);
            setHowToCollection([]);
            setResponses([]);
            setShowHistory(false);
        }
    }, [module?.module_path]);

    // Make the context object:
    const context = {
        params,
        setParams,
        responses,
        setResponses,
        showsuggestions,
        setShowSuggestions,
        showsolution,
        setShowSolution,
        showhow,
        setShowHow,
        showai, setShowAi,
        responsescollection,
        setResponsesCollection,
        howtocollection,
        setHowToCollection,
        showhistory,
        setShowHistory,
    };

    // pass the value in provider and return
    return <AIContext.Provider value={context}>{children}</AIContext.Provider>;
};

AIProvider.propTypes = {
    params: PropTypes.object,
    responses: PropTypes.array,
    showsolution: PropTypes.bool,
    showhow: PropTypes.bool,
    showhistory: PropTypes.bool,
    showsuggestions: PropTypes.bool,
    showai: PropTypes.bool,
    responsescollection: PropTypes.array,
    howtocollection: PropTypes.array,
};

AIProvider.defaultProps = {
    params: null,
    responses: [],
    showsolution: false,
    showhow: false,
    showhistory: false,
    showai: false,
    showsuggestions: false,
    responsescollection: [],
    howtocollection: [],
};