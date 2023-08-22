
import { sortBy } from 'lodash';
import { saveAs } from 'file-saver';
import { successToast, errorToast, formatError } from '../general/utils';
import { store } from '../../services/data';

// On the previous notes, update the tasks
export const updateSettings = async (data, actions) => {
    actions.setProcessing(true);
    try {
        const response = await store.updateSettings(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            actions.setSettings(response.data.data);
        }
        actions.setProcessing(false);
        actions.reset();
        actions.close();
    } catch (err) {
        actions.setProcessing(false);
        const message = formatError(err);
        errorToast(message, true, false);
        actions.close();
    }
};


export const processMetricsEmail = async (details, actions) => {
    try {
        actions.setProcessing(true);
        const response = await store.sendMetricsEmail(details);
        const { status } = response;
        if (status === 200) {
            successToast(response.data.data);
        }
        actions.setProcessing(false);
        actions.reset();
        actions.close();
    } catch (error) {
        actions.setProcessing(false);
        actions.close();
        let msg = null;
        if (error.response) {
            const { response } = error;
            msg = response.data.message;
        } else {
            msg = 'Unable to send email';
        }
        errorToast(msg, true, false);
    }
};


export const processHistoryEmail = async (details, actions) => {
    try {

        actions.setProcessing(true);
        const response = await store.sendHistoryEmail(details);
        const { status } = response;
        if (status === 200) {
            successToast(response.data.data);
        }
        actions.setProcessing(false);
        actions.reset();
        actions.close();
    } catch (error) {
        actions.setProcessing(false);
        actions.close();
        let msg = null;
        console.log(error);
        if (error.response) {
            const { response } = error;
            msg = response.data.message;
        } else {
            msg = 'Unable to send email';
        }
        errorToast(msg, true, false);
    }
};



export const downloadHistory = async (details, actions) => {
    try {
        const response = await store.downloaHistory(details);
        const { status } = response;
        if (status === 200) {
            const { file_name } = details;
            saveAs(response.data, file_name);
        }
        actions.close();
    } catch (error) {
        actions.close();
        let msg = null;
        console.log(error);
        if (error.response) {
            const { response } = error;
            msg = response.data.message;
        } else {
            msg = 'Unable to send email';
        }
        errorToast(msg, true, false);
    }
};

export const downloadScript = async (details, actions) => {
    try {
        const response = await store.downloadScript(details);
        const { status } = response;
        if (status === 200) {
            const { title } = details;
            saveAs(response.data, title);
        }
        actions.close();
    } catch (error) {
        actions.close();
        let msg = null;
        console.log(error);
        if (error.response) {
            const { response } = error;
            msg = response.data.message;
        } else {
            msg = 'Unable to send email';
        }
        errorToast(msg, true, false);
    }
};


export const shareReport = async (data, actions) => {
    actions.setProcessing(true);

    try {
        const response = await store.shareReport(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            // just return the updated whole note not just the tasks
            successToast(response.data.data.message);
        }
        actions.setProcessing(false);
        actions.reset();
        actions.close();
    } catch (err) {
        actions.setProcessing(false);
        const message = formatError(err);
        errorToast(message, true, false);
        actions.close();
    }

};

export const shareResources = async (data, actions) => {
    actions.setProcessing(true);

    try {
        const response = await store.shareResources(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            // just return the updated whole note not just the tasks
            successToast('Resources shared successfully');
        }
        actions.setProcessing(false);
        actions.reset();
        actions.close();
    } catch (err) {
        actions.setProcessing(false);
        const message = formatError(err);
        errorToast(message, true, false);
        actions.close();
    }

};

export const newCompanyImage = async (data, actions) => {

    actions.setProcessing(true);

    try {
        const formData = new FormData();
        formData.append('company_id', data.company_id);
        if (data.companyfile) {
            formData.append('companyfile', data.companyfile);
        }

        formData.append('_method', 'POST');

        const response = await store.newCompanyImage(formData);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else {
            if (response.data.status === 200) {

                actions.setClient(response.data.data);

                const { company_id } = data;

                const index = actions.companies.findIndex((e) => Number(e.id) === Number(company_id));

                if (index > -1) {
                    const array = [...actions.companies];
                    array[index] = response.data.data;
                    actions.setCompanies(array);
                }

                successToast('Client image changed');
            }
        }
        actions.setProcessing(false);
        setTimeout(() => {
            actions.close();
        }, 500);

    } catch (err) {
        console.log('error: ', err);
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setProcessing(false);
    }

};

export const updateCommitmentStatus = async (data, actions) => {
    actions.setProcessing(true);

    try {
        const response = await store.updateCommitmentStatus(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            if (actions.update) {
                actions.setSelected(response.data.data);
            } else {
                actions.setCurrent(response.data.data);
            }

            successToast('Commitment status updated successfully');
        }
        actions.setProcessing(false);
    } catch (err) {
        actions.setProcessing(false);
        const message = formatError(err);
        errorToast(message, true, false);
    }
}


export const newCommitment = async (data, actions) => {

    actions.setProcessing(true);

    try {
        const response = await store.newUpdateCommitment(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else {
            if (response.data.status === 200) {

                if (actions.setSelected) {
                    if (actions.setPrevious) {
                        actions.setPrevious(response.data.data);
                    }
                    actions.setSelected(response.data.data);
                } else {
                    actions.setCurrent(response.data.data);
                }
                successToast('New commitment task saved successfully');
            }
            actions.reset();
        }
        actions.setProcessing(false);
        actions.close();

    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setProcessing(false);
    }

};



export const updateCommitment = async (data, actions) => {

    actions.setProcessing(true);

    try {
        const response = await store.newUpdateCommitment(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else {
            if (response.data.status === 200) {
                if (actions.setPrevious) {
                    actions.setPrevious(response.data.data);
                }
                actions.setSelected(response.data.data);
                successToast('Commitment task updated successfully');
            }
            actions.reset();
        }
        actions.setProcessing(false);
        actions.close();

    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setProcessing(false);
    }

};


export const deleteCommitment = async (data, actions) => {
    try {

        actions.setProcessing(true);

        const response = await store.deleteCoachingCommitment(data);

        if (response.data.error) {
            errorToast(response.data.error, true, false);
        } else if (response.data.status === 200) {
            const { meeting_note_id } = data;
            let index = null;
            const found = actions.notes.find((e, i) => {
                index = i;
                return Number(e.id) === Number(meeting_note_id);
            });
            if (found) {
                const edited = { ...found, reminder: null };
                const array = [...actions.notes];
                array[index] = edited;
                actions.setNotes(array);
            }

            successToast('Reminder DELETED successfully');
        }

        actions.close();

    } catch (err) {
        const message = formatError(err);
        actions.setProcessing(false);
        errorToast(message, true, false);
    }
};




// On the previous notes, update the tasks
export const updateTask = async (data, actions) => {
    actions.setProcessing();
    try {
        const response = await store.coachingTask(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            // just return the updated whole note not just the tasks

            actions.setSelected({ ...actions.selected, tasks: response.data.data }); // save the current selected note
            const { meeting_note_id } = data;
            let index = null;
            const found = actions.notes.find((e, i) => {
                index = i;
                return Number(e.id) === Number(meeting_note_id);
            });
            if (found) {
                const edited = { ...found, tasks: response.data.data };
                const array = [...actions.notes];
                array[index] = edited;
                actions.setNotes(array);
            }
        }
        actions.reset();
        actions.close();
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.close();
    }
};

// On the current notes, create or update the tasks
export const newUpdateTask = async (data, actions) => {
    actions.setProcessing();
    try {
        const response = await store.coachingTask(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            actions.setTasks(response.data.data);
            successToast('Task added/updated successfully');
        }
        actions.reset();
        actions.close();
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.close();
    }
};


export const newUpdateMetric = async (data, actions) => {

    try {
        const response = await store.coachingMetrics(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            actions.setNotes(response.data.data);
        }
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
    }
};

// On the previous notes, update the metrics
export const updateMetric = async (data, actions) => {

    try {
        const { meeting_note_id, from } = data;

        const response = await store.coachingMetrics(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {

            if (from === 'previous') {
                // Upate from the previous note
                actions.setNotes(response.data.data);

                const found = response.data.data.find((e) => Number(e.id) === Number(meeting_note_id));

                if (found) {
                    actions.setSelected(found);
                }
            } else {

                // Update From history
                actions.setSelected(response.data.data);

                const index = actions.history.findIndex((e) => Number(e.id) === Number(meeting_note_id));
                const temp = [...actions.history];
                temp[index] = response.data.data;

                actions.setHistory(temp);
            }

            actions.closeEditing();
            localStorage.removeItem('pas-coaching-edit-metrics');

        }
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
    }
};


export const deleteTask = async (data, actions) => {
    try {

        actions.processing();

        const response = await store.deleteCoachingTask(data);

        if (response.data.error) {
            errorToast(response.data.error, true, false);
        } else {
            // save the returned tasks from the response
            actions.setTasks(response.data.data);
            successToast('Task DELETED successfully');
        }

        actions.close();

    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
    }
};


export const deleteNote = async (data, actions) => {
    try {

        actions.setProcessing(true);

        const response = await store.deleteCoachingNote(data);

        if (response.data.error) {
            errorToast(response.data.error, true, false);
        } else if (response.data.status === 200) {
            // save the returned notes from the response
            actions.setNotes(response.data.data);
            successToast('Notes DELETED successfully');
        }

        actions.close();

    } catch (err) {
        const message = formatError(err);
        actions.setProcessing(false);
        errorToast(message, true, false);
    }
};


export const newNote = async (data, actions) => {
    try {
        const response = await store.coachingNote(data);
        if (response.data.status === 200) {
            actions.setNotes(response.data.data);
        }
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        console.error('error saving a note: ', message);
    }
};


export const updateTimeZone = async (data, actions) => {
    const { item, setProcessing, setItem } = actions;
    try {
        setProcessing(true);
        const response = await store.updateTimeZone(data);
        if (response.data.status === 200) {
            setItem({ ...item, time_zone: data.timezone })
        }
        successToast('Time zone updated');
        setProcessing(false);
    } catch (err) {
        setProcessing(false);
        const message = formatError(err);
        errorToast(message, true, false);
        console.error('error saving a note: ', message);
    }
};

export const updateNote = async (data, actions) => {

    try {
        const response = await store.coachingNote(data);
        const { id, from } = data;
        if (response.data.status === 200) {

            if (from === 'previous') {
                // Upate from the previous note
                actions.setNotes(response.data.data);

                const found = response.data.data.find((e) => Number(e.id) === Number(id));

                if (found) {
                    actions.setSelected(found);
                }
            } else {

                // Update From history
                actions.setSelected(response.data.data);
                const index = actions.history.findIndex((e) => Number(e.id) === Number(id));
                const temp = [...actions.history];
                temp[index] = response.data.data;

                actions.setHistory(temp);

                // update previous note
                if (actions.previous && (Number(actions.previous.id) === Number(id))) {
                    actions.setPrevious(response.data.data);
                }

            }
            actions.closeEditing();
            localStorage.removeItem('pas-coaching-edit-note');
        }
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        console.error('error saving a note: ', message);
    }
};

export const updateNextMeetingTime = async (data, actions) => {

    try {
        const response = await store.coachingNextMeetingTime(data);
        const { id, from } = data;
        if (response.data.status === 200) {

            if (from === 'previous') {
                // Upate from the previous note
                actions.setNotes(response.data.data);

                const found = response.data.data.find((e) => Number(e.id) === Number(id));

                if (found) {
                    actions.setSelected(found);
                }
            } else {

                // Update From history
                actions.setSelected(response.data.data);

                const index = actions.history.findIndex((e) => Number(e.id) === Number(id));
                const temp = [...actions.history];
                temp[index] = response.data.data;

                actions.setHistory(temp);
            }

            actions.closeEditing();
        }
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        console.error('error saving a note: ', message);
    }
};

export const closeNote = async (data, actions) => {
    actions.setShowSpinner(true);
    try {
        const response = await store.coachingNote(data);

        if (response.data.status === 200) {
            actions.setNotes(response.data.data);
        }
        actions.setClosing(false);
        actions.reset();
        actions.setShowSpinner(false);

    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        console.error('error closing a note: ', message);
        actions.setShowSpinner(false);
    }
};

export const editCompany = async (data) => {
    try {
        await store.editCompany(data.id, data);
    } catch (err) {
        const message = formatError(err);
        console.log('error updating company: ', message);
        errorToast(message, true, false);
    }
};

export const editCompanyStatus = async (data) => {
    try {
        await store.editCompanyStatus(data);
    } catch (err) {
        const message = formatError(err);
        console.log('error updating company: ', message);
        errorToast(message, true, false);
    }
};


export const newFiles = async (data, actions) => {

    actions.setShowSpinner(true);

    try {
        const formData = new FormData();
        formData.append('company_id', data.company_id);
        formData.append('user_type', 'client');

        if (data.files) {
            data.files.forEach(file => {
                formData.append('files[]', file);
            });
        }

        if (data.description && data.description.length) {
            formData.append('description', data.description);
        }

        formData.append('_method', 'POST');

        const response = await store.newClientFiles(formData);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else {
            if (response.data.status === 201) {
                // also sort the newest on top
                actions.setFiles(response.data.data);
                successToast('New file saved successfully');
            }
            actions.reset();
        }
        actions.setShowSpinner(false);
        actions.close();

    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setShowSpinner(false);
    }

};

export const newCompany = async (data, actions) => {

    actions.setShowSpinner(true);

    try {
        const response = await store.newAssessment(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else {
            if (response.data.status === 201) {
                // make sure the returned assessment structure , matches the others
                // also sort the newest on top
                const { id, name, company_id, currency, module_set_id } = response.data.data;
                const all = [...actions.allassessments, { id, name, company_id, currency_id: currency.id, module_set_id }];
                const sorted = sortBy(all, [(e) => e.id]).reverse();
                actions.setAllAssessments(sorted);
                successToast('New assessment saved successfully');
                // Redirect to dashboard...
            }
            actions.reset();
        }
        actions.setShowSpinner(false);
        actions.close();
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setShowSpinner(false);
    }

};

export const newAssessment = async (data, actions) => {

    actions.setShowSpinner(true);

    try {
        const response = await store.newAssessment(data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else {
            if (response.data.status === 201) {
                // make sure the returned assessment structure , matches the others
                // also sort the newest on top
                const { id, name, company_id, currency, module_set_id } = response.data.data;
                const all = [...actions.allassessments, { id, name, company_id, currency_id: currency.id, module_set_id }];
                const sorted = sortBy(all, [(e) => e.id]).reverse();
                actions.setAllAssessments(sorted);
                successToast('New assessment saved successfully');
                // Redirect to dashboard...
            }
            actions.reset();
        }
        actions.setShowSpinner(false);
        actions.close();
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setShowSpinner(false);
    }

};

export const editAssessment = async (data, actions) => {

    actions.setShowSpinner(true);

    try {
        const response = await store.editAssessment(data.id, data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            actions.setAllAssessments(response.data.data);
            successToast('Assessment updated successfully');
        }
        actions.setShowSpinner(false);
        actions.close();
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setShowSpinner(false);
    }

};

export const editFile = async (data, actions) => {

    actions.setShowSpinner(true);

    try {
        const response = await store.editFile(data.id, data);
        if (response.data.error) {
            const message = formatError(response.data.error);
            errorToast(message, true, false);
        } else if (response.data.status === 200) {
            actions.setFiles(response.data.data);
            successToast('File updated successfully');
        }
        actions.setShowSpinner(false);
        actions.close();
    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
        actions.setShowSpinner(false);
    }

};

export const deleteAssessment = async (id, actions) => {
    try {

        actions.processing();

        const { data } = await store.deleteAssessment(id);

        if (data.error) {
            errorToast(data.error, true, false);
        } else {
            // save the returned assessments from the response
            actions.setAllAssessments(data.data);
            successToast('Assessment DELETED successfully');
        }

        actions.close();

    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
    }
};

export const deleteFile = async (file, actions) => {
    try {

        actions.processing();

        const { data } = await store.deleteClientFile(file);

        if (data.error) {
            errorToast(data.error, true, false);
        } else {
            // save the returned files from the response
            actions.setFiles(data.data);
            successToast('File DELETED successfully');
        }

        actions.close();

    } catch (err) {
        const message = formatError(err);
        errorToast(message, true, false);
    }
};

// Disable coach assessment meeting reminders
export const disableMeetingReminders = async (details, actions) => {
    const { setIsLoading, setIsDisabled, setIsDeleted } = actions;
    try {
        setIsLoading(true);

        const { data } = await store.disableMeetingReminders(details);

        if (data.error) {
            errorToast(data.error, true, false);
        } else {
            // save the returned response
            setIsLoading(false);
            setIsDeleted(true);
            successToast(data.data.data);
            setIsDisabled(true)
        }

    } catch (err) {
        setIsLoading(false);
        const message = formatError(err);
        errorToast(message, true, false);
    }
};

