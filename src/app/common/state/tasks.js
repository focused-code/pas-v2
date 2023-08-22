import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [tasks, setTasks] = useState([]);
    const [showCalendar, setShowCalendar] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [editing, setEditing] = useState(false);
    const [selected, setSelected] = useState(null);

    const edit = (item) => {
        setEditing(true);
        setSelected(item);
    };

    const closeEdit = () => {
        setEditing(false);
        setSelected(null);
    };

    // Make the context object:
    const context = {
        tasks,
        setTasks,
        showCalendar,
        setShowCalendar,
        processing,
        setProcessing,
        editing,
        setEditing,
        selected,
        setSelected,
        edit,
        closeEdit,
    };

    // pass the value in provider and return
    return <TasksContext.Provider value={context}>{children}</TasksContext.Provider>;
};

TasksProvider.propTypes = {
    tasks: PropTypes.array,
    showCalendar: PropTypes.bool,
    processing: PropTypes.bool,
    editing: PropTypes.bool,
    selected: PropTypes.object,
};

TasksProvider.defaultProps = {
    tasks: [],
    showCalendar: false,
    processing: false,
    editing: false,
    selected: null,
};
