import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ResourceContext = createContext({});

export const ResourceProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [selectedResource, setSelectedResource] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [resourceType, setResourceType] = useState(null);
    const [showResourceModal, setShowResourceModal] = useState(false);

    // Make the context object:
    const resourceContext = {
        selectedResource,
        setSelectedResource,
        showModal,
        setShowModal,
        resourceType,
        setResourceType,
        showResourceModal,
        setShowResourceModal,
    };

    // pass the value in provider and return
    return <ResourceContext.Provider value={resourceContext}>{children}</ResourceContext.Provider>;
};


ResourceProvider.propTypes = {
    selectedResource: PropTypes.object,
    showModal: PropTypes.bool,
    resourceType: PropTypes.string,
    showResourceModal: PropTypes.bool,
};

ResourceProvider.defaultProps = {
    selectedResource: null,
    showModal: false,
    resourceType: null,
    showResourceModal: false,

};
