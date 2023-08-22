import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EventsContext = createContext({});

export const EventsProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [selectedResource, setSelectedResource] = useState(null);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [analysis, setAnalysis] = useState(null);
    const [events, setEvents] = useState([]);
    const [showResourceModal, setShowResourceModal] = useState(false);

    // Make the context object:
    const resourceContext = {
        selectedResource,
        setSelectedResource,
        showVideoModal,
        setShowVideoModal,
        selectedVideo,
        setSelectedVideo,
        showResourceModal,
        setShowResourceModal,
        analysis,
        setAnalysis,
        events, setEvents
    };

    // pass the value in provider and return
    return <EventsContext.Provider value={resourceContext}>{children}</EventsContext.Provider>;
};


EventsProvider.propTypes = {
    selectedResource: PropTypes.object,
    analysis: PropTypes.object,
    events: PropTypes.object,
    showVideoModal: PropTypes.bool,
    selectedVideo: PropTypes.object,
    showResourceModal: PropTypes.bool,
};

EventsProvider.defaultProps = {
    selectedResource: null,
    analysis: null,
    events: null,
    showVideoModal: false,
    selectedVideo: null,
    showResourceModal: false,
};
