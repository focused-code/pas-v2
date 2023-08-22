import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LessonsContext = createContext({});

export const LessonsProvider = (props) => {
    const {
        children,
    } = props;


    // Use State to keep the values
    const [selectedLessons, setSelectedLessons] = useState([]);
    const [lessonOrder, setLessonOrder] = useState([]);
    const [sumsessions, setSumsessions] = useState(0);
    const [contextLessons, setContextLessons] = useState([]);

    const reset = () => {
        setSelectedLessons([]);
        setLessonOrder([]);
        setSumsessions(0);
    };

    // Make the context object:
    const lessonContext = {
        selectedLessons,
        setSelectedLessons,
        lessonOrder,
        setLessonOrder,
        sumsessions,
        setSumsessions,
        reset,
        contextLessons, 
        setContextLessons,
    };

    // pass the value in provider and return
    return <LessonsContext.Provider value={lessonContext}>{children}</LessonsContext.Provider>;
};


LessonsProvider.propTypes = {
    selectedLessons: PropTypes.array,
    lessonOrder: PropTypes.array,
    sumsessions: PropTypes.number,
    contextLessons: PropTypes.array,
};

LessonsProvider.defaultProps = {
    selectedLessons: [],
    lessonOrder: [],
    sumsessions: 0,
    contextLessons: [],
};
