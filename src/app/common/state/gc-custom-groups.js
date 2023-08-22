import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CustomGroupsContext = createContext({});

export const CustomGroupsProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [draftGroup, setDraftGroup] = useState([]);
    const [draftUserGroup, setDraftUserGroup] = useState([]);
    const [fullPreview, setfullPreview] = useState(false);
    const [draftStatus, setDraftStatus] = useState(false);
    const [gcsLessons, setGcsLessons] = useState([]);
    const [mediaLoading, setMediaLoading] = useState(false);
    const [resourcesPicked, setResourcesPicked] = useState([]);
    const [resourcesStudentPicked, setResourcesStudentPicked] = useState([]);
    const [currentLesson, setCurrentLesson] = useState([]);

    // Make the context object:
    const customgroupsContext = {
        gcsLessons,
        setGcsLessons,
        fullPreview,
        setfullPreview,
        draftGroup,
        setDraftGroup,
        draftUserGroup,
        setDraftUserGroup,
        draftStatus,
        setDraftStatus,
        mediaLoading,
        setMediaLoading,
        resourcesPicked,
        setResourcesPicked,
        resourcesStudentPicked,
        setResourcesStudentPicked,
        currentLesson,
        setCurrentLesson,
    };

    // pass the value in provider and return
    return <CustomGroupsContext.Provider value={customgroupsContext}>{children}</CustomGroupsContext.Provider>;
};


CustomGroupsProvider.propTypes = {
    gcsLessons: PropTypes.object,
    draftGroup: PropTypes.object,
    draftUserGroup: PropTypes.object,
    fullPreview: PropTypes.bool,
    fullLessonPreview: PropTypes.bool,
    draftStatus: PropTypes.bool,
    mediaLoading: PropTypes.bool,
    resourcesPicked: PropTypes.object,
    resourcesStudentPicked: PropTypes.object,
    currentLesson: PropTypes.object,
};

CustomGroupsProvider.defaultProps = {
    gcsLessons: null,
    draftGroup: null,
    draftUserGroup: null,
    fullPreview: false,
    fullLessonPreview: false,
    draftStatus: false,
    mediaLoading: false,
    resourcesPicked: null,
    resourcesStudentPicked: null,
    currentLesson: null,
};
