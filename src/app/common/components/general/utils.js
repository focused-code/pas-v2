import { Fragment } from 'react';
import { toJS } from 'mobx';
import { toast } from 'react-toastify';
import numeral from 'numeral';
import moment from 'moment';
import { encrypt, decrypt, decryptSpecial, encryptSpecial } from '../../components/general/cypher';
import {
    startCase,
    toLower,
    forEach,
    sortBy,
    max,
    each,
    findIndex,
    find,
    startsWith,
    delay,
    reduce,
} from 'lodash';
import { industries_data, getIndustry } from '../../containers/forms/industries';
import properties from '../../services/properties';
import { moduleSetName, getImpactAmount, impactmodules, getModuleSummary, getAlias } from './helpers';
import { processJS12Increase, processJS40Increase, processDigitalIncrease, processIncrease } from './processing';
import { logout, toggleShowtour, toggleProspectsNotify } from './form-actions';

export const getToken = () => localStorage.getItem('pas-token');
export const getTokenX = () => localStorage.getItem('pas-tokenx');
export const getUser = () => localStorage.getItem('pas-user');
export const resetToken = () => localStorage.removeItem('pas-token');
export const resetTokenX = () => localStorage.removeItem('pas-tokenx');
export const resetUser = () => localStorage.removeItem('pas-user');
export const resetCurrencies = () => localStorage.removeItem('currencies');
export const getVersion = () => localStorage.getItem('pasversion');
export const setVersion = (version) => localStorage.setItem('pasversion', version);

export const resetAllLocalData = () => {
    localStorage.removeItem('quick_modules');
    localStorage.removeItem('full_modules');
    localStorage.removeItem('quick_full_modules');
    localStorage.removeItem('free_quick_modules');
    localStorage.removeItem('free_full_modules');
    localStorage.removeItem('digital_jumpstart_modules');
    localStorage.removeItem('full_digital_modules');

    localStorage.removeItem('quick_questions');
    localStorage.removeItem('full_questions');
    localStorage.removeItem('quick_full_questions');
    localStorage.removeItem('free_quick_questions');
    localStorage.removeItem('free_full_questions');
    localStorage.removeItem('digital_jumpstart_questions');
    localStorage.removeItem('full_digital_questions');
    localStorage.removeItem('currencies');
};

const replaceAt = (array, index, value) => {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
};

export const formatModulesets = (list) => list.map(each => {
    switch (each.id) {
        case 7:
            return { ...each, alias: 'Jumpstart 40 (To close a sale or perform a faster full assessment)' };
        case 6:
            return { ...each, alias: 'Deep Dive 40 (To perform a full assessment)' };
        case 5:
            return { ...each, alias: 'Jumpstart 12 (To close a sale)' };
        case 4:
            return { ...each, alias: 'Free Deep Dive (Limited)' };
        case 3:
            return { ...each, alias: 'Free Jumpstart 12 (Limited)' };
        case 2:
            return { ...each, alias: 'Deep Dive (To perform a full assessment with a digital marketing focus)' };
        case 1:
            return { ...each, alias: 'Jumpstart (To close a sale with a digital marketing focus)' };
        default:
            return { ...each };
    }
});

export const setUser = (user) => {
    properties.setUser(user);
    properties.setAdmin(user);
    properties.setAdvisor(user);
    properties.setLicensee(user);
};

export const updateLoggedinUser = () => {
    const token = getToken();
    if (token) {
        const user = JSON.parse(window.atob(decrypt(process.env.REACT_APP_HASHING_SALT, getUser())));
        const initial = toJS(properties.initialUrl);
        properties.setLoggedIn(true);
        setUser(user);
        if (initial) {
            properties.setInitialURL(initial);
        }
    }
};

export const log = (message, type) => {
    let color = null;
    switch (type) {
        case 'success':
            color = '#02b050';
            break;
        case 'info':
            color = '#029cdd';
            break;
        case 'error':
            color = '#d82057';
            break;
        case 'warning':
            color = '#fe7e4e';
            break;
        default:
            color = '#ffc000';
    }

    console.log(`%c${message}`, `color:${color}`);
};

export const errorToast = (message, closeOnClick, autoClose) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        closeOnClick,
        autoClose,
    });
};

export const successToast = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
    });
};

export const infoToast = (message, closeOnClick, autoClose) => {
    toast.info(message, {
        position: toast.POSITION.BOTTOM_CENTER,
        closeOnClick,
        autoClose,
    });
};

export const formatError = (error) => {
    let message = '';
    if (error.response) {
        const { data } = error.response;
        message = (data && data.error) ? Object.values(data.error).join('') : data.message || error.response;
    } else {
        message = JSON.stringify(error);
    }
    return message;
};

export const fetchModuleSetName = (id) => {
    const modulesets = toJS(properties.modulesets);
    if (modulesets) {
        const array = [...modulesets[0].options, ...modulesets[1].options];
        const found = find(array, each => Number(each.id) === Number(id));
        if (found) {
            return found.alias;
        }
    }
    return '...';
};

export const updateUser = (user) => {
    const users = toJS(properties.users);
    if (users) {
        const index = findIndex(users, { id: user.id });
        if (index !== -1) {
            const new_users = replaceAt(users, index, user);
            properties.saveUsers(new_users);
        }
    }
};

export const updateUserTos = () => {
    try {
        const user = JSON.parse(window.atob(decrypt(process.env.REACT_APP_HASHING_SALT, getUser())));
        const new_user = { ...user, tos_check: 1 };
        setUser(new_user);
        localStorage.setItem('pas-user', encrypt(window.btoa(JSON.stringify(new_user)), process.env.REACT_APP_HASHING_SALT));
        updateUser(new_user);
    } catch (error) {
        console.error('updateUserTos; ', error.message);
    }
};

export const disableUserShowTour = () => {
    try {
        const user = JSON.parse(window.atob(decrypt(process.env.REACT_APP_HASHING_SALT, getUser())));
        const new_user = { ...user, show_tour: 0 };
        setUser(new_user);
        localStorage.setItem('pas-user', encrypt(window.btoa(JSON.stringify(new_user)), process.env.REACT_APP_HASHING_SALT));
        updateUser(new_user);
        toggleShowtour(new_user);
    } catch (error) {
        console.error('disableUserShowTour: ', error.message);
    }
};

export const disableUserProspectsNotify = () => {
    try {
        const user = JSON.parse(window.atob(decrypt(process.env.REACT_APP_HASHING_SALT, getUser())));
        const new_user = { ...user, prospects_notify: 0 };
        setUser(new_user);
        localStorage.setItem('pas-user', encrypt(window.btoa(JSON.stringify(new_user)), process.env.REACT_APP_HASHING_SALT));
        updateUser(new_user);
        toggleProspectsNotify(new_user);
    } catch (error) {
        console.error('disableUserProspectsNotify; ', error.message);
    }
};

export const makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export const upgradeAccount = () => {
    const assessment = toJS(properties.selected_assessment);

    if (assessment) {
        switch (assessment.module_set_name) {
            case 'FreeProfitJumpstart':
            case 'FreeProfitDeepDive':
                return true;
            default:
                return false;
        }
    }

    return null;
};

export const capitalize = str => startCase(toLower(str));

export const calculateCoachingCost = (icost, mcost) => {
    return (parseFloat(Number(mcost)) * 12) + parseFloat(Number(icost));
}

export const shouldUpdate = (version) => {
    const local = getVersion();

    if (!local) {
        if (version) { setVersion(version); }
        return true;
    }
    const status = (version > local);

    if (version) { setVersion(version); }
    return status;
};

export const getModuleSetStyle = (key) => {
    switch (key) {
        case 'ProfitJumpstart':
            return 'jumpstart';
        case 'Jumpstart40':
            return 'jumpstart40';
        case 'Breakthrough40':
            return 'breakthrough';
        case 'FreeProfitJumpstart':
            return 'free-jumpstart';
        case 'FreeProfitDeepDive':
            return 'free-breakthrough';
        case 'DigitalJumpstart':
            return 'digital-jumpstart';
        case 'FullDigitalAssessment':
            return 'full-digital';
        default:
            return '';
    }
};

export const getModuleSetName = (key) => {
    switch (key) {
        case 'ProfitJumpstart':
            return 'Profit Acceleration Jumpstart 12';
        case 'Jumpstart40':
            return 'Profit Acceleration Jumpstart 40';
        case 'Breakthrough40':
            return 'Profit Acceleration Deep Dive 40';
        case 'FreeProfitJumpstart':
            return 'Free Profit Acceleration Jumpstart 12 (Limited)';
        case 'FreeProfitDeepDive':
            return 'Free Profit Acceleration Deep Dive 40 (Limited)';
        case 'DigitalJumpstart':
            return 'Digital Acceleration Jumpstart';
        case 'FullDigitalAssessment':
            return 'Digital Acceleration Deep Dive';
        default:
            return '';
    }
};

export const getUserAssessments = (id, all) => {
    const assessments = [];
    forEach(all, each => {
        if (each.users.length > 0) {
            find(each.users, item => {
                if (item.id === id) {
                    assessments.push(each);
                }
            });
        }
    });
    return assessments;
};

export const isAuthenticated = () => {
    const token = getToken();
    //TODO WIP
    try {
        if(token){

            return true;

        }
    } catch (err) {
        logout();
        return false;
    }
    
};

export const getUpgradeImage = (path) => {
    const url = `${process.env.REACT_APP_CONTENT_URL}/images/upgrade/`;
    switch (path) {
        case 'reports':
            return `${url}reports.jpeg`;
        case 'agreements':
            return `${url}agreements.jpeg`;
        case 'guides':
            return `${url}guides.jpeg`;
        case 'meeting-notes':
            return `${url}meeting-notes.jpeg`;
        default:
            return `${url}modules.jpeg`;
    }
};

export const getCoachingROI = (details) => {
    const { current, coaching, newone } = details;

    const rate = ((Number(newone) - Number(current)) / Number(coaching)) * 100;
    return Math.round(rate);
};

export const getURLPath = (path) => {
    const array = path.split('/');
    return array[array.length - 2];
};

export const getDefaultBusinessValuation = (financials) => {
    if (financials) {
        const annualRevenue = parseFloat(financials.question_3);
        const grossProfitMargin = parseFloat(financials.question_1) / 100;
        const val = (annualRevenue * grossProfitMargin) * 2;
        return val.toFixed(2);
    }
    return '0';
};

export const getCutCostImpact = () => {
    const { grossProfitMargin, netProfitMargin, currentRevenue } = toJS(properties.financialSummary);
    if ((grossProfitMargin === 0) || (currentRevenue === 0)) {
        return { increase: 0, impact: 0 };
    }

    const summary = toJS(properties.financialSummary);
    const costs = toJS(properties.costs);

    const impact = (parseFloat(currentRevenue) * (1 - (parseFloat(netProfitMargin) / 100))) * ((parseFloat(costs.impact) / 100));
    const increase = (parseFloat(impact) / parseFloat(summary.currentProfit)) * 100;
    return { increase: Math.round(increase), impact: Math.round(impact) };
};

const sortQuestions = questions => [questions[2], questions[1], questions[0], questions[3]];

const checkType = type => (!!(((type === 'impact') || (type === 'number') || (type === 'decimal') || (type === 'percentage'))));

export const questionName = question => ((question.question_type === 'impact') ? `impact_${question.id}` : `question_${question.id}`);

// To round off to 1 decimal place
export const round = (number) => Math.round((number) * 10) / 10;

export const computedError = (details) => {
    const { path } = details;
    switch (path) {
        case 'costs':
            return (!toJS(properties.industry));
        default:
            return false;
    }
};

const calculateDefaultVariableCost = () => {
    const financials = toJS(properties.financialSummary);
    const costs = toJS(properties.costs);
    const industry = toJS(properties.industry);
    const igpm = (industry) ? Number(industry.Gross_Margin) : 0;

    const { currentRevenue } = financials;
    const a = Number(currentRevenue) * (1 - (Number(igpm) / 100));
    const b = (Number(costs.defaultvariableimpact) / 100);
    const result = a * b;
    return Math.round(result);
}

const calculateDefaultFixedCost = () => {
    const financials = toJS(properties.financialSummary);
    const costs = toJS(properties.costs);
    const industry = toJS(properties.industry);
    const inpm = (industry) ? Number(industry.Net_Margin) : 0;
    const igpm = (industry) ? Number(industry.Gross_Margin) : 0;

    const { currentRevenue } = financials;
    const gpm = (Number(igpm) / 100);
    const npm = (Number(inpm) / 100);
    const a = Number(currentRevenue) * (gpm - npm);
    const b = (Number(costs.defaultfixedimpact) / 100);
    const result = a * b;
    return Math.round(result);
}


const getComputedValues = (details) => {
    const { path, question } = details;
    const industry = toJS(properties.industry);
    const inpm = (industry) ? Number(industry.Net_Margin) : 0;
    const igpm = (industry) ? Number(industry.Gross_Margin) : 0;
    const assessment = toJS(properties.selected_assessment);
    const financials = toJS(properties.financialSummary);
    const symbol = (assessment) ? assessment.currency.code.trim() : '$';
    switch (path) {
        case 'costs':
            {
                switch (Number(question.id)) {
                    case 1:
                        {
                            if (!industry) {
                                return 'Please select your industry under the financials module first...';
                            }

                            const currentRevenue = Number(financials.currentRevenue);
                            const currentProfit = currentRevenue * (Number(inpm) / 100);

                            const variableCost = calculateDefaultVariableCost();
                            const fixedCost = calculateDefaultFixedCost();
                            const result = (Number(variableCost) + Number(fixedCost)) / currentProfit;
                            const one_1 = `${Math.round(result * 100)}`;

                            const two_1 = inpm;
                            const three_1 = igpm;

                            const a = (1 / Number(igpm)) * 100;

                            const four_1 = `${symbol}${a.toFixed(2)}`;

                            const b = Number(variableCost) + Number(fixedCost);
                            const five_1 = `${symbol}${numeral(b).format('0,0')}`;

                            const c = Number(variableCost) + Number(fixedCost);
                            const d = (Number(igpm) / 100);
                            const e = Math.round(c / d);

                            const six_1 = `${symbol}${numeral(e).format('0,0')}`;
                            return eval(question.question);
                        }

                    case 2:
                        {
                            if (!industry) {
                                return 'Please select your industry under the financials module first...';
                            }

                            // NOTE: round(number) ==> to round off to 1 decimal place

                            const netProfit = Number(financials.currentProfit);

                            const inp = Number(financials.currentRevenue) * (inpm / 100);
                            const inetProfit = round(inp);

                            const difference = inetProfit - netProfit;
                            const one_2 = `${symbol}${numeral(difference).format('0,0')
                                } `;

                            const percent = round((difference / netProfit) * 100);
                            const two_2 = `${percent}% `;

                            const three_2 = `${symbol}${numeral(difference * 5).format('0,0')} `;
                            return eval(question.question);
                        }

                    case 7:
                        {
                            if (!industry) {
                                return 'Please select your industry under the financials module first...';
                            }

                            // NOTE: round(number) ==> to round off to 1 decimal place

                            const grossProfit = Number(financials.grossProfit);

                            const igp = Number(financials.currentRevenue) * (igpm / 100);
                            const igrossProfit = round(igp);

                            const difference = igrossProfit - grossProfit;
                            const one_7 = `${symbol}${numeral(difference).format('0,0')} `;

                            const percent = round((difference / grossProfit) * 100);
                            const two_7 = `${percent}% `;

                            const three_7 = `${symbol}${numeral(difference * 5).format('0,0')} `;
                            return eval(question.question);
                        }

                    case 11:
                        {
                            if (!industry) {
                                return 'Please select your industry under the financials module first...';
                            }
                            const costs = toJS(properties.costs);
                            const { amount } = costs;
                            const one_11 = `${symbol}${numeral(amount).format('0,0')} `;
                            return eval(question.question);
                        }
                    default:
                        return null;
                }
            }
        default:
            return null;
    }
};

export const updateForm = (form, quests, module) => {
    let questions = quests;

    const { highlight } = form;
    const path = (module && module.module_path) ? module.module_path.trim() : '';

    // Reorder financials module questions
    if (path === 'financials') {
        questions = sortQuestions(questions);
    }

    const defaultBusinessValuation = (name) => {
        if (path === 'valuation' && (name === 'impact_1' || name === 'question_1')) {
            const financials = toJS(properties.financials.responses);
            return getDefaultBusinessValuation(financials);
        }

        return '0';
    };

    const introduction = (path === 'introduction');

    // get the saved responses from state
    const { responses } = toJS(properties[path]);

    // get the saved comments from state
    const comments = toJS(properties[path].comments);

    let number = 1;

    const getValue = (answers, question_name) => {
        if (answers) {
            const found = answers[question_name.trim()];
            return (found) ? found : '';
        }
        return '';
    };

    const getComment = (answers, question_name) => {
        if (answers) {
            return (answers[question_name.trim()]) ? answers[question_name.trim()] : '';
        }
        return '';
    };

    const impactValue = (answers, question_name) => {
        if (answers) {
            return (answers[question_name.trim()]) ? answers[question_name.trim()].toString() : defaultBusinessValuation(question_name.trim());
        }
        return defaultBusinessValuation(question_name.trim());
    };

    forEach(questions, (question) => {
        const question_id = question.id;
        const notes = (typeof question.notes === 'object') ? question.notes : null;
        const comment = getComment(comments, `question_${question.id} `);
        if (question.question_type === 'text') {
            const name = `question_${question.id}`;
            const label = question.question;
            const field = form.$('responses');
            field.add({ key: name, value: getValue(responses, name) });
            field.$(name).set('label', label);
            field.$(name).set('type', (introduction) ? 'textarea' : 'text');
            field.$(name).set('default', getValue(responses, name));
            field.$(name).set('extra', {
                module,
                path,
                question_id,
                highlight,
                notes,
                comment,
                properties,
                number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
                type: question.question_type,
                next_question: question.next_question,
            });
            field.$(name).set('error', '');
            field.$(name).set('rules', 'string');
            number += 1;
        } else if (question.question_type === 'simpletext') {
            const name = `question_${question.id}`;
            const label = question.question;
            const field = form.$('responses');
            field.add({ key: name, value: getValue(responses, name) });
            field.$(name).set('label', label);
            field.$(name).set('type', (introduction) ? 'textarea' : 'text');
            field.$(name).set('default', getValue(responses, name));
            field.$(name).set('extra', {
                path,
                question_id,
                highlight,
                comment,
                properties,
                number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
                type: question.question_type,
                next_question: question.next_question,
            });
            field.$(name).set('error', '');
            field.$(name).set('rules', 'string');
            number += 1;
        } else if (question.question_type === 'select') {
            const name = `question_${question.id}`;
            const label = question.question;
            const field = form.$('responses');
            field.add({ key: name, value: getValue(responses, name) });
            field.$(name).set('label', label);
            field.$(name).set('type', 'select');
            field.$(name).set('default', getValue(responses, name));
            field.$(name).set('extra', {
                module,
                path,
                question_id,
                highlight,
                notes,
                comment,
                properties,
                number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
                type: question.question_type,
                next_question: question.next_question,
                picked: (getValue(responses, name) !== '') ? getIndustry(getValue(responses, name)) : null,
            });
            field.$(name).set('error', '');
            field.$(name).set('options', industries_data);
            field.$(name).set('rules', 'required|string');
            number += 1;
        } else if (checkType(question.question_type)) {
            const name = questionName(question);
            const label = question.question;
            const field = form.$('responses');
            field.add({ key: name, value: impactValue(responses, name) });
            field.$(name).set('label', label);
            field.$(name).set('type', 'text');
            field.$(name).set('default', impactValue(responses, name));
            field.$(name).set('extra', {
                module,
                path,
                question_id,
                highlight,
                notes,
                comment,
                number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
                type: question.question_type,
                next_question: question.next_question,
                properties,
            });
            field.$(name).set('error', '');

            if (path === 'foundational') {
                field.$(name).set('rules', 'integer');
            } else if (path === 'dgintro') {
                field.$(name).set('rules', 'required|digits_between:1,10');
            } else {
                field.$(name).set('rules', 'required|digits_between:1,100');
            }
            number += 1;
        } else if (question.question_type === 'split_y_n') {
            const options = [
                { type: 'radio', label: 'Yes', value: 'y' },
                { type: 'radio', label: 'No', value: 'n' },
            ];
            const name = `question_${question.id}`;
            const label = question.question;
            const field = form.$('responses');
            field.add({ key: name, value: getValue(responses, name) });
            field.$(name).set('label', label);
            field.$(name).set('type', 'radio');
            field.$(name).set('default', getValue(responses, name));
            field.$(name).set('extra', {
                module,
                path,
                question_id,
                highlight,
                notes,
                properties,
                comment,
                number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
                type: question.question_type,
                next_question: question.next_question,
            });
            field.$(name).set('error', '');
            field.$(name).set('options', options);
            if (path === 'foundational') {
                field.$(name).set('rules', 'string');
            } else {
                field.$(name).set('rules', 'required|string');
            }
            number += 1;
        } else if (question.question_type === 'blank') {
            const name = `blank_${question.id}`;
            const label = question.question;
            const field = form.$('responses');
            field.add({ key: name, value: 'NEXT' });
            field.$(name).set('label', label);
            if (path === 'costs') {
                field.$(name).set('extra', {
                    notes,
                    number: `${question.id}.`,
                    type: question.question_type,
                    properties,
                    nomargin: true,
                    next_question: question.next_question,
                });
            } else {
                field.$(name).set('extra', {
                    notes,
                    number: `${question.id}.`,
                    type: question.question_type,
                    properties,
                    next_question: question.next_question,
                });
            }

            field.$(name).set('type', 'label');
        } else if (question.question_type === 'computed') {
            const name = `computed_${question.id}`;
            const label = getComputedValues({ path, question });
            const field = form.$('responses');
            field.add({ key: name, value: 'COMPUTED' });
            field.$(name).set('label', label);
            field.$(name).set('extra', {
                notes,
                number: `${question.id}.`,
                type: question.question_type,
                properties,
                next_question: question.next_question,
                error: computedError({ path, question }),
            });
            field.$(name).set('type', 'label');
        } else if (question.question_type === 'separator') {
            const name = `separator_${question.id}`;
            const label = question.question;
            const field = form.$('responses');
            field.add({ key: name, value: 'SEPARATOR' });
            field.$(name).set('label', label);
            field.$(name).set('extra', {
                type: question.question_type,
                properties,
                next_question: question.next_question,
            });
            field.$(name).set('type', 'separator');
        }
    });

    return form;
};

export const updateSingleQuestionForm = (form, quest, module) => {
    const question = quest;
    const { question_number, highlight } = form;
    const path = (module && module.module_path) ? module.module_path.trim() : '';
    // get the saved responses from state

    const { responses } = toJS(properties[path]);

    // get the saved comments from state
    const comments = toJS(properties[path].comments);

    const introduction = (path === 'introduction');

    const getValue = (answers, question_name) => {
        if (answers) {
            const found = answers[question_name.trim()];
            return (found) ? found : '';
        }
        return '';
    };

    const getComment = (answers, question_name) => {
        if (answers) {
            return (answers[question_name.trim()]) ? answers[question_name.trim()] : '';
        }
        return '';
    };

    const defaultBusinessValuation = (name) => {
        if (path === 'valuation' && (name === 'impact_1' || name === 'question_1')) {
            const financials = toJS(properties.financials.responses);
            return getDefaultBusinessValuation(financials);
        }

        return '0';
    };

    const impactValue = (answers, question_name) => {
        if (answers) {
            return (answers[question_name.trim()]) ? answers[question_name.trim()].toString() : defaultBusinessValuation(question_name.trim());
        }
        return defaultBusinessValuation(question_name.trim());
    };

    const question_id = question.id;
    const notes = (typeof question.notes === 'object') ? question.notes : null;
    const comment = getComment(comments, `question_${question.id} `);

    const number = `${question_number}.`;
    if (question.question_type === 'text') {
        const name = `question_${question.id}`;
        const label = question.question;
        const field = form.$('responses');

        field.add({ key: name, value: getValue(responses, name) });
        field.$(name).set('label', label);
        field.$(name).set('type', (introduction) ? 'textarea' : 'text');
        field.$(name).set('default', getValue(responses, name));
        field.$(name).set('extra', {
            module,
            path,
            highlight,
            question_id,
            notes,
            comment,
            number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
            properties,
            type: question.question_type,
            next_question: question.next_question,
        });
        field.$(name).set('error', '');
        field.$(name).set('rules', 'string');
    } else if (question.question_type === 'simpletext') {
        const name = `question_${question.id}`;
        const label = question.question;
        const field = form.$('responses');

        field.add({ key: name, value: getValue(responses, name) });
        field.$(name).set('label', label);
        field.$(name).set('type', (introduction) ? 'textarea' : 'text');
        field.$(name).set('default', getValue(responses, name));
        field.$(name).set('extra', {
            path,
            highlight,
            question_id,
            comment,
            number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
            properties,
            type: question.question_type,
            next_question: question.next_question,
        });
        field.$(name).set('error', '');
        field.$(name).set('rules', 'string');
    } else if (checkType(question.question_type)) {
        const name = questionName(question);
        const label = question.question;
        const field = form.$('responses');

        field.add({ key: name, value: impactValue(responses, name) });
        field.$(name).set('label', label);
        field.$(name).set('type', 'text');
        field.$(name).set('default', impactValue(responses, name));
        field.$(name).set('extra', {
            module,
            path,
            question_id,
            highlight,
            notes,
            comment,
            number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
            type: question.question_type,
            next_question: question.next_question,
            properties,
        });
        field.$(name).set('error', '');

        if (path === 'foundational') {
            field.$(name).set('rules', 'integer');
        } else if (path === 'dgintro') {
            field.$(name).set('rules', 'required|digits_between:1,10');
        } else {
            field.$(name).set('rules', 'required|digits_between:1,100');
        }
    } else if (question.question_type === 'split_y_n') {
        const options = [
            { type: 'radio', label: 'Yes', value: 'y' },
            { type: 'radio', label: 'No', value: 'n' },
        ];
        const name = `question_${question.id}`;
        const label = question.question;
        const field = form.$('responses');

        field.add({ key: name, value: getValue(responses, name) });
        field.$(name).set('label', label);
        field.$(name).set('type', 'radio');
        field.$(name).set('default', getValue(responses, name));
        field.$(name).set('extra', {
            module,
            path,
            question_id,
            highlight,
            notes,
            comment,
            properties,
            number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
            type: question.question_type,
            next_question: question.next_question,
        });
        field.$(name).set('error', '');
        field.$(name).set('options', options);
        if (path === 'foundational') {
            field.$(name).set('rules', 'string');
        } else {
            field.$(name).set('rules', 'required|string');
        }
    } else if (question.question_type === 'blank') {
        const name = `blank_${question.id}`;
        const label = question.question;
        const field = form.$('responses');

        field.add({ key: name, value: 'NEXT' });
        field.$(name).set('label', label);

        if (path === 'costs') {
            field.$(name).set('extra', {
                notes,
                path,
                number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
                properties,
                nomargin: true,
                type: question.question_type,
                next_question: question.next_question,
            });
        } else {
            field.$(name).set('extra', {
                notes,
                path,
                number: (question.question_number) ? `${question.question_number} ` : `${number}.`,
                properties,
                type: question.question_type,
                next_question: question.next_question,
            });
        }

        field.$(name).set('type', 'label');
    } else if (question.question_type === 'computed') {
        const name = `computed_${question.id}`;
        const label = getComputedValues({ path, question });

        const field = form.$('responses');

        field.add({ key: name, value: 'COMPUTED' });
        field.$(name).set('label', label);
        field.$(name).set('extra', {
            notes,
            path,
            number: `${question.id}.`,
            highlight,
            properties,
            type: question.question_type,
            next_question: question.next_question,
            error: computedError({ path, question }),
        });
        field.$(name).set('type', 'label');
    } else if (question.question_type === 'separator') {
        const name = `separator_${question.id}`;
        const label = question.question;
        const field = form.$('responses');
        field.add({ key: name, value: 'SEPARATOR' });
        field.$(name).set('label', label);
        field.$(name).set('extra', {
            type: question.question_type,
            path,
            properties,
            next_question: question.next_question,
        });
        field.$(name).set('type', 'separator');
    }

    return form;
};

export const sortDescending = (array) => {
    const ascending = sortBy(array, o => o.value);
    return ascending.reverse(); // decending
};

export const sortSingleModule = (questions, module) => {
    let array = questions;
    // corecutcost questions have been ordered by next_question column
    if (module && module.module_path === 'costs') {
        array = array.sort((a, b) => b.next_question - a.next_question);
        array.reverse();
    } else {
        const names = ['Valuation', 'Foundational'];

        if (module && (names.includes(module.module_name))) {
            array = array.sort((a, b) => b.id - a.id);
            if (array[0].next_question === 0) { // move the first question to last if next_question == 0
                const last = array.shift();
                array.push(last);
            }
        }
    }

    return array;
};

export const sortSplitModule = (questions) => {
    let array = questions;
    array = array.sort((a, b) => b.start - a.start);
    return array;
};

export const processPriorityRevenueAmount = ({ type, time, revenueAmount }) => {
    let multipler = 1;
    if ((type === 'mdp') || (type === 'dgmdp')) {
        multipler = 3;
    }
    // ($impact / $time / 100) * $multiplier
    const result = (parseFloat(revenueAmount) / Number(time) / 100) * multipler;

    return Math.round(result);
};

export const calculateSuccessFactor = (responces) => {
    const annualCostOfCoaching = toJS(properties.annualCostOfCoaching);
    const totalProfitImpact = toJS(properties.financialSummary.totalProfitImpact);

    if (totalProfitImpact > 0) {

        let multiple = parseFloat(totalProfitImpact) / parseFloat(annualCostOfCoaching);
        multiple = Number(multiple.toFixed(2));

        let q1_indicator = 0;
        let q2_indicator = 0;
        let q3_indicator = 0;
        let q4_indicator = 0;
        let q5_indicator = 0;
        let q6_indicator = 0;

        q1_indicator = (responces.q1 === 'Yes') ? 1.5 : 0.5;
        q2_indicator = (responces.q2 === 'Yes') ? 0.75 : 1.25;

        if (responces.q2 === 'Yes') {
            q3_indicator = (responces.q3 === 'Yes') ? 0.75 : 1.25;
        }

        if (responces.q4 === 'a') {
            q4_indicator = 1.5;
        } else if (responces.q4 === 'b') {
            q4_indicator = 1;
        } else if (responces.q4 === 'c') {
            q4_indicator = 0.5;
        } else {
            q4_indicator = 0.25;
        }

        q5_indicator = (responces.q5 === 'Yes') ? 1.25 : 0.75;

        if (responces.q6 === '1') {
            q6_indicator = 0.3;
        } else if (responces.q6 === '2') {
            q6_indicator = 0.4;
        } else if (responces.q6 === '3') {
            q6_indicator = 0.5;
        } else if (responces.q6 === '4') {
            q6_indicator = 0.6;
        } else if (responces.q6 === '5') {
            q6_indicator = 0.7;
        } else if (responces.q6 === '6') {
            q6_indicator = 0.8;
        } else if (responces.q6 === '7') {
            q6_indicator = 0.9;
        } else if (responces.q6 === '8') {
            q6_indicator = 1;
        } else if (responces.q6 === '9') {
            q6_indicator = 1.3;
        } else if (responces.q6 === '10') {
            q6_indicator = 1.5;
        } else {
            q6_indicator = 0.3;
        }

        let factor = multiple * q1_indicator * q2_indicator * q4_indicator * q5_indicator * q6_indicator;

        factor = (q3_indicator) ? factor * q3_indicator : factor;

        return Number(factor.toFixed(2));
    }
    return 0;
};


export const getMaxIncrease = () => {
    const name = moduleSetName();
    const increase = [
        parseFloat(toJS(properties.upsell.increase)),
        parseFloat(toJS(properties.internet.increase)),
        parseFloat(toJS(properties.prices.increase)),
        parseFloat(toJS(properties.campaign.increase)),
        parseFloat(toJS(properties.downsell.increase)),
        parseFloat(toJS(properties.bundling.increase)),
        parseFloat(toJS(properties.alliances.increase)),
        parseFloat(toJS(properties.products.increase)),
        parseFloat(toJS(properties.leads.increase)),
        parseFloat(toJS(properties.mdp.increase)),
        parseFloat(toJS(properties.strategy.increase)),
        parseFloat(toJS(properties.advertising.increase)),
        parseFloat(toJS(properties.appointments.increase)),
        parseFloat(toJS(properties.followupclose.increase)),
        parseFloat(toJS(properties.initialclose.increase)),
        parseFloat(toJS(properties.formercustomers.increase)),
        parseFloat(toJS(properties.longevity.increase)),
        parseFloat(toJS(properties.mail.increase)),
        parseFloat(toJS(properties.offer.increase)),
        parseFloat(toJS(properties.policies.increase)),
        parseFloat(toJS(properties.publicity.increase)),
        parseFloat(toJS(properties.purchase.increase)),
        parseFloat(toJS(properties.referral.increase)),
        parseFloat(toJS(properties.scripts.increase)),
        parseFloat(toJS(properties.strategy.increase)),
        parseFloat(toJS(properties.trust.increase)),
        parseFloat(toJS(properties.salesteam.increase)),
        parseFloat(toJS(properties.salesgeneral.increase)),
        parseFloat(toJS(properties.salesmanager.increase)),
        parseFloat(toJS(properties.salescompensation.increase)),
        parseFloat(toJS(properties.salessuperstars.increase)),
        parseFloat(toJS(properties.salestraining.increase)),
        parseFloat(toJS(properties.salesprospecting.increase)),
        parseFloat(toJS(properties.salesclients.increase)),
        parseFloat(toJS(properties.salestrade.increase)),
        parseFloat(toJS(properties.salesdm.increase)),
        parseFloat(toJS(properties.salesclosing.increase)),
        parseFloat(toJS(properties.salesorder.increase)),
        parseFloat(toJS(properties.salesremorse.increase)),
        parseFloat(toJS(properties.dgcontent.increase)),
        parseFloat(toJS(properties.dgwebsite.increase)),
        parseFloat(toJS(properties.dgemail.increase)),
        parseFloat(toJS(properties.dgseo.increase)),
        parseFloat(toJS(properties.dgadvertising.increase)),
        parseFloat(toJS(properties.dgsocial.increase)),
        parseFloat(toJS(properties.dgvideo.increase)),
        parseFloat(toJS(properties.dgmetrics.increase)),
        parseFloat(toJS(properties.dgmdp.increase)),
        parseFloat(toJS(properties.dgoffer.increase)),
        parseFloat(toJS(properties.dgupsell.increase)),
        parseFloat(toJS(properties.dgdownsell.increase)),
        parseFloat(toJS(properties.dgcampaign.increase)),
    ];

    const maxIncrease = max(increase);

    if (name == 'Jumpstart40') {
        properties.saveMaxIncrease(maxIncrease + parseFloat(toJS(properties.prices.impact)));
    } else {
        properties.saveMaxIncrease(maxIncrease);
    }
};

export const saveQuestions = (values, modules) => {
    forEach(modules, (module, key) => {
        const path = module.module_path;
        properties.saveQuestions(path, values[key]);
    });
};


export const decryptLocal = (name,hasSpecial=false) => {
    try {
        const string = localStorage.getItem(name);
        if (string) {
           if(!hasSpecial){
            return JSON.parse(window.atob(decrypt(process.env.REACT_APP_HASHING_SALT, string)));
           }
           else{
            return JSON.parse(window.atob(decryptSpecial(process.env.REACT_APP_HASHING_SALT, string)));
           }
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};


export const encryptLocal = (name, content, hasSpecial=false) => {
    try {
        if(!hasSpecial){
            localStorage.setItem(name, encrypt(window.btoa(unescape(encodeURIComponent(content))), process.env.REACT_APP_HASHING_SALT));
           }
           else{
            localStorage.setItem(name, encryptSpecial(window.btoa(unescape(encodeURIComponent(content))), process.env.REACT_APP_HASHING_SALT));
           }
        
    } catch (error) {
        console.error('error saving assessment questions: ', error.message);
    }

};


export const checkQuestionsLocalStorage = () => {
    if (!toJS(properties.selected_assessment)) {
        return null;
    }

    const name = moduleSetName();
    switch (name) {
        case 'Jumpstart40':
            return decryptLocal('quick_full_questions', true);
        case 'ProfitJumpstart':
            return decryptLocal('quick_questions', true);
        case 'Breakthrough40':
            return decryptLocal('full_questions', true);
        case 'FreeProfitJumpstart':
            return decryptLocal('free_quick_questions', true);
        case 'FreeProfitDeepDive':
            return decryptLocal('free_full_questions', true);
        case 'DigitalJumpstart':
            return decryptLocal('digital_jumpstart_questions', true);
        case 'FullDigitalAssessment':
            return decryptLocal('full_digital_questions', true);
        default:
            return null;
    }
};

export const saveCurrenciesLocalStorage = (currencies) => {
    encryptLocal('currencies', currencies);
};

export const checkCurrenciesLocalStorage = () => decryptLocal('currencies');


export const saveQuestionsLocalStorage = (questions) => {
    if (toJS(properties.selected_assessment)) {
        const name = moduleSetName();
        if (name) {
            switch (name) {
                case 'Jumpstart40':
                    encryptLocal('quick_full_questions', questions, true);
                    break;
                case 'ProfitJumpstart':
                    encryptLocal('quick_questions', questions, true);
                    break;
                case 'Breakthrough40':
                    encryptLocal('full_questions', questions, true);
                    break;
                case 'FreeProfitJumpstart':
                    encryptLocal('free_quick_questions', questions, true);
                    break;
                case 'FreeProfitDeepDive':
                    encryptLocal('free_full_questions', questions, true);
                    break;
                case 'DigitalJumpstart':
                    encryptLocal('digital_jumpstart_questions', questions, true);
                    break;
                case 'FullDigitalAssessment':
                    encryptLocal('full_digital_questions', questions, true);
                    break;
                default:
                    break;
            }
        }
    }
};


export const checkModulesLocalStorage = () => {
    if (!toJS(properties.selected_assessment)) {
        return null;
    }
    const name = moduleSetName();

    switch (name) {
        case 'Jumpstart40':
            return decryptLocal('quick_full_modules');
        case 'ProfitJumpstart':
            return decryptLocal('quick_modules');
        case 'Breakthrough40':
            return decryptLocal('full_modules');
        case 'FreeProfitJumpstart':
            return decryptLocal('free_quick_modules');
        case 'FreeProfitDeepDive':
            return decryptLocal('free_full_modules');
        case 'DigitalJumpstart':
            return decryptLocal('digital_jumpstart_modules');
        case 'FullDigitalAssessment':
            return decryptLocal('full_digital_modules');
        default:
            return null;
    }
};

export const saveModulesLocalStorage = (modules) => {
    if (toJS(properties.selected_assessment)) {
        const name = moduleSetName();
        switch (name) {
            case 'Jumpstart40':
                encryptLocal('quick_full_modules', modules);
                break;
            case 'ProfitJumpstart':
                encryptLocal('quick_modules', modules);
                break;
            case 'Breakthrough40':
                encryptLocal('full_modules', modules);
                break;
            case 'FreeProfitJumpstart':
                encryptLocal('free_quick_modules', modules);
                break;
            case 'FreeProfitDeepDive':
                encryptLocal('free_full_modules', modules);
                break;
            case 'DigitalJumpstart':
                encryptLocal('digital_jumpstart_modules', modules);
                break;
            case 'FullDigitalAssessment':
                encryptLocal('full_digital_modules', modules);
                break;
            default:
                break;
        }
    }
};

export const saveAlternateModulesLocalStorage = (modules) => {
    if (toJS(properties.selected_assessment)) {
        const name = moduleSetName();
        switch (name) {
            case 'ProfitJumpstart':
                encryptLocal('full_modules', modules);
                break;
            case 'Breakthrough40':
                encryptLocal('quick_modules', modules);
                break;
            case 'FreeProfitJumpstart':
                encryptLocal('free_full_modules', modules);
                break;
            case 'FreeProfitDeepDive':
                encryptLocal('free_quick_modules', modules);
                break;
            case 'DigitalJumpstart':
                encryptLocal('full_digital_modules', modules);
                break;
            case 'FullDigitalAssessment':
                encryptLocal('digital_jumpstart_modules', modules);
                break;
            default:
                break;
        }
    }
};

export const checkAlternateModulesLocalStorage = () => {
    if (!toJS(properties.selected_assessment)) {
        return null;
    }

    const name = moduleSetName();

    switch (name) {
        case 'ProfitJumpstart':
            return decryptLocal('full_modules');
        case 'Breakthrough40':
            return decryptLocal('quick_modules');
        case 'FreeProfitJumpstart':
            return decryptLocal('free_full_modules');
        case 'FreeProfitDeepDive':
            return decryptLocal('free_quick_modules');
        case 'DigitalJumpstart':
            return decryptLocal('full_digital_modules');
        case 'FullDigitalAssessment':
            return decryptLocal('digital_jumpstart_modules');
        default:
            return null;
    }
};

export const checkAlternateQuestionsLocalStorage = () => {
    if (!toJS(properties.selected_assessment)) {
        return null;
    }

    const name = moduleSetName();

    switch (name) {
        case 'ProfitJumpstart':
            return decryptLocal('full_questions', true);
        case 'Breakthrough40':
            return decryptLocal('quick_questions, true');
        case 'FreeProfitJumpstart':
            return decryptLocal('free_full_questions', true);
        case 'FreeProfitDeepDive':
            return decryptLocal('free_quick_questions', true);
        case 'DigitalJumpstart':
            return decryptLocal('full_digital_questions', true);
        case 'FullDigitalAssessment':
            return decryptLocal('digital_jumpstart_questions', true);
        default:
            return null;
    }
};

export const saveAlternateQuestionsLocalStorage = (questions) => {
    if (toJS(properties.selected_assessment)) {
        const name = moduleSetName();

        switch (name) {
            case 'ProfitJumpstart':
                encryptLocal('full_questions', questions, true);
                break;
            case 'Breakthrough40':
                encryptLocal('quick_questions', questions, true);
                break;
            case 'FreeProfitJumpstart':
                encryptLocal('free_full_questions', questions, true);
                break;
            case 'FreeProfitDeepDive':
                encryptLocal('free_quick_questions', questions, true);
                break;
            case 'DigitalJumpstart':
                encryptLocal('full_digital_questions', questions, true);
                break;
            case 'FullDigitalAssessment':
                encryptLocal('digital_jumpstart_questions', questions, true);
                break;
            default:
                break;
        }
    }
};

export const updateCompany = (company) => {
    const companies = toJS(properties.companies);

    if (companies) {
        const index = findIndex(companies, { id: company.id });

        if (index !== -1) {
            const new_companies = replaceAt(companies, index, company);
            properties.saveCompanies(new_companies);
        }
    }
};

export const isFullWidth = (path) => {
    const array = path.split('/');
    return (array[array.length - 1] === 'implementation') || (array[array.length - 3] === 'coaching') || (array[array.length - 1] === 'coachingportal') || (array[array.length - 1] === 'tasks');
};

export const getFullLink = (url, type) => {
    switch (type) {
        case 'salesmanager':
        case 'salesgeneral':
        case 'salescompensation':
        case 'salessuperstars':
        case 'salestraining':
        case 'salesprospecting':
        case 'salesclients':
        case 'salestrade':
        case 'salesdm':
        case 'salesclosing':
        case 'salesorder':
        case 'salesremorse':
            return `${url} /sales`;
        default:
            return `${url}/${type}`;
    }
};

export const getModule = (modules, name) => find(modules, module => module.module_name === name);

export const getTotalImpact = responses => reduce(responses, (result, value, key) => ((startsWith(key, 'impact')) ? result + parseFloat(value) : result), 0);

export const getFixedCostImpactAmount = (impact) => {
    const status = (Number(impact) > 0);
    if (status) {
        const { currentRevenue, grossProfitMargin, netProfitMargin } = toJS(properties.financialSummary);
        const gpm = (Number(grossProfitMargin) / 100);
        const npm = (Number(netProfitMargin) / 100);
        const a = Number(currentRevenue) * (gpm - npm);
        const b = Number(impact) / 100;
        const result = a * b;
        return Math.round(result);
    } else {
        return 0;
    }
};

export const getVariableCostImpactAmount = (impact) => {
    const status = (Number(impact) > 0);
    if (status) {
        const { currentRevenue, grossProfitMargin } = toJS(properties.financialSummary);
        const a = Number(currentRevenue) * (1 - (Number(grossProfitMargin) / 100));
        const b = (Number(impact) / 100);
        const result = a * b;
        return Math.round(result);
    } else {
        return 0;
    }
};

export const processResponsesImpact = (path, responses) => {
    if (path !== 'costs') {
        const name = moduleSetName();
        const impact = getTotalImpact(responses);
        properties.saveImpact(path, impact);
        const amount = getImpactAmount(path, impact);
        properties.saveAmount(path, amount);
        properties.saveComplete(path, true);

        if (name === 'ProfitJumpstart') {
            processJS12Increase(path, impact);
        } else if (name === 'Jumpstart40') {
            processJS40Increase(path, impact);
        } else {
            processIncrease(path, impact);
        }

        processDigitalIncrease(path, impact);

        if (name.includes('Digital')) {
            if (path !== 'prices') { // Prices increase has all the modules in it
                const imp = toJS(properties.prices.impact);
                processDigitalIncrease('prices', Number(imp));
            } else {
                processDigitalIncrease(path, impact);
            }
        } else if (path !== 'prices') { // Prices increase has all the modules in it
            const imp = toJS(properties.prices.impact);
            if (name === 'ProfitJumpstart') {
                processJS12Increase('prices', Number(imp));
            } else if (name === 'Jumpstart40') {
                processJS40Increase('prices', Number(imp));
            } else {
                processIncrease('prices', Number(imp));
            }
        } else {
            if (name === 'ProfitJumpstart') {
                processJS12Increase(path, impact);
            } else if (name === 'Jumpstart40') {
                processJS40Increase(path, impact);
            } else {
                processIncrease(path, impact);
            }
        }

        delay(() => getMaxIncrease(), 100);

        const oneYearImpact = toJS(properties.oneYearImpact);
        const valuationForecast = toJS(properties.valuationForecast);

        if (impact > 0) {
            if (!oneYearImpact) {
                properties.toggleOneYearImpact(true);
            }

            if (!valuationForecast) {
                properties.toggleValuationForecast(true);
            }
        }
        delay(() => properties.updateFinancialSummary(), 400);
    } else {
        // Process costs
        const { impact_5, impact_10 } = responses;
        // Question ID 5 => impact_5 is the variableimpact
        // Question ID 10 =>impact_10 is the fixedimpact
        const fixedimpact = (impact_10) ? Number(impact_10) : 0;
        const variableimpact = (impact_5) ? Number(impact_5) : 0;
        const impact = getTotalImpact(responses);
        const variableamount = (variableimpact > 0) ? getVariableCostImpactAmount(Number(impact_5)) : 0;
        const fixedamount = (fixedimpact > 0) ? getFixedCostImpactAmount(Number(impact_10)) : 0;
        const amount = Number(fixedamount) + Number(variableamount);

        const details = {
            impact,
            amount,
            fixedamount,
            variableamount,
            fixedimpact,
            variableimpact,
            complete: true,
        };

        properties.saveCostDetails(details);
        delay(() => properties.updateFinancialSummary(), 100);
        const oneYearImpact = toJS(properties.oneYearImpact);
        const valuationForecast = toJS(properties.valuationForecast);

        if (impact > 0) {
            if (!oneYearImpact) {
                properties.toggleOneYearImpact(true);
            }

            if (!valuationForecast) {
                properties.toggleValuationForecast(true);
            }
        }
    }
};

export const getIsolatedRevenueIncrease = (type) => {
    if (type === 'costs' || type === 'quarterly-review' || type === 'planning-meeting') {
        return 0;
    }
    const { currentRevenue } = toJS(properties.financialSummary);
    if (currentRevenue === 0) {
        return 0;
    }

    const details = toJS(properties[type]);

    return getImpactAmount(type, parseFloat(details.impact));
};

// In increase prices we are supposed to take all the revenue impact to profits
export const getModuleProfitImpact = (type) => {
    if (type === 'quarterly-review' || type === 'planning-meeting') {
        return 0;
    }
    const revenueIncrease = getIsolatedRevenueIncrease(type);
    const { grossProfitMargin } = toJS(properties.financialSummary);
    const amount = (type === 'prices') ? parseFloat(revenueIncrease) : (parseFloat(grossProfitMargin) / 100) * parseFloat(revenueIncrease);
    return (type === 'costs') ? Math.round(toJS(properties.costs.amount)) : Math.round(amount);
};

const getModulePath = (module) => {
    const path = module.module_path.trim();
    switch (path) {
        case 'salesgeneral':
        case 'salesmanager':
        case 'salescompensation':
        case 'salessuperstars':
        case 'salestraining':
        case 'salesprospecting':
        case 'salesclients':
        case 'salestrade':
        case 'salesdm':
        case 'salesclosing':
        case 'salesorder':
        case 'salesremorse':
            return null;
        default:
            return module;
    }
};

export const getSalesModulesWithImpact = () => {
    const modules = [
        { path: 'salesgeneral', alias: 'General Questions' },
        { path: 'salesmanager', alias: 'Sales Manager' },
        { path: 'salescompensation', alias: 'Compensation' },
        { path: 'salessuperstars', alias: 'Superstars' },
        { path: 'salestraining', alias: 'Training' },
        { path: 'salesprospecting', alias: 'Prospecting and Lists' },
        { path: 'salesclients', alias: 'Dream Clients' },
        { path: 'salestrade', alias: 'Trade Shows' },
        { path: 'salesdm', alias: 'Dealing With Decision Makers' },
        { path: 'salesclosing', alias: 'Closing the Sale' },
        { path: 'salesorder', alias: 'Order Fulfillment' },
        { path: 'salesremorse', alias: 'Buyers Remorse' },
    ];
    const filtered = [];
    forEach(modules, h => {
        const mod = toJS(properties[h.path]);
        if (Number(mod.impact) > 0) {
            filtered.push(h);
        }
    });

    return filtered;
};

export const removeSalesModules = (modules) => {
    const results = modules.map((module) => getModulePath(module));
    return results.filter(item => item !== null); // remove all null values
};

export const processPriorities = (modules, assessment) => {
    if (!modules) {
        return null;
    }

    const { module_set_name } = assessment;

    let array = modules;

    if (module_set_name === 'Breakthrough40') {
        array = removeSalesModules(modules);

        const salesfound = find(array, (e) => e.module_path === 'sales');

        const sales = {
            id: 999,
            module_alias: 'Sales Team',
            module_name: 'Sales',
            module_path: 'sales',
        };

        // If we dont have a sales module in our list add it
        if (!salesfound) {
            array.push(sales);
        }
    }

    const symbol = (assessment) ? assessment.currency.code.trim() : '$';

    const checkModule = name => ((name === 'dgintro') || (name === 'financials') || (name === 'valuation') || (name === 'introduction'));

    const results = array.map((module) => {
        if (checkModule(module.module_path.trim())) {
            return null;
        }

        const type = module.module_path.trim();

        if (parseFloat(properties[type].impact) === 0) {
            return null;
        }

        // Cut cost module has no revenue impact
        const revenueAmount = getIsolatedRevenueIncrease(type);

        const profitAmount = getModuleProfitImpact(type);

        const { time } = properties[type];

        let value = 0;

        if (Number(time) > 0) {
            value = processPriorityRevenueAmount({ type, time, revenueAmount });
        }

        const selected = {
            ...module,
            assessment_id: assessment.id,
            time: Number(time),
            value,
            type,
            path: type,
            symbol,
            revenueAmount,
            profitAmount,
            impact: properties[type].impact,
        };

        return selected;
    });

    const filtered = results.filter(item => item !== null); // remove all null values

    forEach(filtered, (each, i) => {
        properties.savePriority(each.type, (i + 1));
    });

    properties.saveSelectedModules(filtered);
    return filtered;
}; // End of processPriorities

export const processModules = (modules, assessment) => {
    if (!modules) {
        return null;
    }

    const { module_set_name } = assessment;

    let array = modules;
    

    if (module_set_name === 'Breakthrough40') {
        array = removeSalesModules(modules);

        const salesfound = find(array, (e) => e.module_path === 'sales');

        const sales = {
            id: 999,
            module_alias: 'Sales Team',
            module_name: 'Sales',
            module_path: 'sales',
        };

        // If we dont have a sales module in our list add it
        if (!salesfound) {
            array.push(sales);
        }
    }

    const symbol = (assessment) ? assessment.currency.code.trim() : '$';

    const checkModule = name => ((name === 'dgintro') || (name === 'financials') || (name === 'valuation') || (name === 'introduction'));

    const results = array.map((module) => {
        if (checkModule(module.module_path.trim())) {
            return null;
        }

        const type = module.module_path.trim();

        // Cut cost module has no revenue impact
        const revenueAmount = getIsolatedRevenueIncrease(type);

        const profitAmount = getModuleProfitImpact(type);

        const { time } = properties[type];

        let value = 0;

        if (Number(time) > 0) {
            value = processPriorityRevenueAmount({ type, time, revenueAmount });
        }

        const selected = {
            ...module,
            assessment_id: assessment.id,
            time: Number(time),
            value,
            type,
            path: type,
            symbol,
            revenueAmount,
            profitAmount,
            impact: properties[type].impact,
        };

        return selected;
    });

    const filtered = results.filter(item => item !== null); // remove all null values

    forEach(filtered, (each, i) => {
        properties.savePriority(each.type, (i + 1));
    });

    properties.saveSelectedModules(filtered);
    return filtered;
}; // End of processPriorities

export const sortPriorities = (list) => {
    if (list && list.length > 0) {
        const cost = list.find(a => (a.module_path === 'costs'));
        const filtered = list.filter(item => (item.module_path !== 'costs')); // Remove cut cost module from list
        const sorted = sortDescending(filtered); // sort descending
        if (cost) {
            sorted.unshift(cost); // Return cut cost module at the top
        }
        const array = sorted.map((e, i) => ({ ...e, priority_order: (i + 1), order: (i + 1) }));
        return array;
    }
    return [];
};

export const getSlots = (number) => {
    if (number > 0) {
        if (number > 1) {
            const array = [...Array(number)];
            return (
                <Fragment>
                    {
                        array.map((each, i) => <td key={i + 1} />)
                    }
                </Fragment>
            );
        }
        return <td />;
    }
    return null;
};


export const getStartEndDate = (start_date, modules, index) => {
    const start = moment(start_date);
    let weeks = 0;
    if (index > 0) {
        const array = modules.slice(0, index);
        weeks = reduce(array, (sum, value) => sum + Number(value.time), 0);
        const temp = start.clone();
        const startdate = temp.add(weeks * 6, 'days');
        const endtemp = startdate.clone();
        const end = endtemp.add(Number(modules[index].time) * 6, 'days');
        return {
            startdate: startdate.format('YYYY-MM-DD'),
            enddate: end.format('YYYY-MM-DD'),
        };
    }
    const endtemp = start.clone();
    const end = endtemp.add(Number(modules[index].time) * 6, 'days');
    return {
        startdate: start.format('YYYY-MM-DD'),
        enddate: end.format('YYYY-MM-DD'),
    };
};

export const getTopImplementation = (modules, assessment) => {
    let array = [];
    const mtime = [];

    let list = [...modules];
    const { planning_meetings, add_planning_meetings, add_review_meetings, implementation_start_date } = assessment;
    const planning_status = Boolean(add_planning_meetings);
    const review_status = Boolean(add_review_meetings);
    if (planning_status) {
        if (Number(planning_meetings) > 0) {
            const meeting = {
                id: makeid(6),
                type: 'planning-meeting',
                time: Number(planning_meetings),
                module_alias: 'Initial Planning Meeting',
            };
            list = [meeting, ...list];
        }
    }

    if (review_status) {
        let cnt = 1;
        // Break the modules list to have a single week each
        // e.g if MDP has 3 weeks, break it into 3 modules with a time of 1 week each
        each(list, (module) => {
            const t = Number(module.time);

            if (t > 1) {
                const a = [...Array(t)];
                forEach(a, (each) => {
                    mtime.push({ ...module, time: 1 });
                });
            } else {
                mtime.push(module);
            }
        });

        // Add the quarterly review meetings on every 12th week
        each(mtime, (a, i) => {
            if (i > 0) {
                const r = (i + 1) % 12; // Add a quarterly meeting after every 12 weeks
                if (r === 0) {
                    const meeting = {
                        id: makeid(6),
                        type: 'quarterly-review',
                        time: 1,
                        module_alias: 'Quarterly Review',
                    };
                    mtime.splice(i, 0, meeting);
                }
            }
        });

        // Consolodate the modules list adding it to the final list 
        each(mtime, (a, i) => {

            const next = mtime[i + 1];

            if (next) {
                const status = (a.type === next.type);
                if (!status) {
                    array.push({ ...a, time: (cnt === 0) ? 1 : cnt });
                    cnt = 1;
                } else {
                    cnt++;
                }
            } else {
                array.push({ ...a, time: (cnt === 0) ? 1 : cnt });
            }
        });
    } else {
        array = [...list];
    }

    const adddates = array.map((each, index) => {
        const { startdate, enddate } = getStartEndDate(implementation_start_date, array, index);
        return { ...each, startdate, enddate };
    });

    return adddates;
};

export const calculateBusinessValuation = (type, revenue, margin, responses) => {
    const annualRevenue = parseFloat(revenue);
    const grossProfitMargin = parseFloat(margin) / 100;

    if (!responses) {
        return 0;
    }

    const one = parseFloat(responses.impact_10) / 100;
    const two = parseFloat(responses.impact_9) / 100;
    const three = parseFloat(responses.question_8); // inventory sales
    const four = (responses.question_7 === 'y') ? 1.123459876 : 0.92349876;
    const five = (responses.question_6 === 'y') ? 0.9 : 1.1;
    const six = (responses.question_5 === 'y') ? 1.1 : 0.9;
    const seven = (responses.question_4 === 'y') ? 1.1 : 0.75;
    const eight = (responses.question_3 === 'y') ? 1.1 : 0.9;
    const nine = (responses.question_2 === 'y') ? 1.1 : 0.75;
    const ten = (responses.impact_1) ? parseFloat(responses.impact_1) : parseFloat(responses.question_1); // business valued at...

    const result = (annualRevenue * grossProfitMargin * 2 * one * two * four * five * six * seven * eight * nine) + three;
    const cost = getCutCostImpact();
    const timesThree = (type === 'start') ? 0 : Number(cost.impact) * 3;

    const sum = (result + timesThree);

    const valuation = Math.round((ten + sum) / 2);

    return Math.round(valuation);
};

export const getIsolatedAnnualProfit = (type) => {
    const { grossProfitMargin, currentRevenue, currentProfit } = toJS(properties.financialSummary);
    if ((grossProfitMargin === 0) || (currentRevenue === 0)) {
        return { profit: 0, increase: 0, impact: 0 };
    }

    const profitImpact = getModuleProfitImpact(type);

    const newAnnualProfit = Math.round(parseFloat(currentProfit) + parseFloat(profitImpact));

    const increase = (parseFloat(profitImpact) / parseFloat(currentProfit)) * 100;

    const profitDifference = parseFloat(newAnnualProfit) - Math.round(parseFloat(currentProfit));

    return {
        profitDifference,
        currentProfit,
        profit: Number(newAnnualProfit),
        increase: Math.round(increase),
        impact: Math.round(parseFloat(profitImpact)),
    };
};

export const formatResponses = (responses) => {
    const results = {};
    const comments = {};

    forEach(responses, (answer) => {
        const {
            comment, question_type, response, question_id,
        } = answer;
        if (comment) {
            const name = `question_${question_id}`;
            comments[name] = comment;
        }

        if ((question_type !== 'blank') || (question_type !== 'computed') || (question_type !== 'separator')) {
            const name = (question_type === 'impact') ? `impact_${question_id}` : `question_${question_id}`;
            if ((question_type === 'split_y_n') || question_type === 'select') {
                results[name] = response;
            } else {
                results[name] = ((question_type === 'text') || (question_type === 'simpletext')) ? response : Number(response);
            }
        }
    });

    return { results, comments };
};

export const getCompleteModules = (modules, array) => {
    const filtered = [];
    forEach(array, (name) => {
        const found = find(modules, o => o.module_name === name);
        if (found) {
            filtered.push(found);
        }
    });

    return sortBy(filtered, o => o.module_order);
};

export const getImpactList = () => {
    const modules = getModuleSummary();
    const list = [];
    let filtered = null;

    forEach(modules, (module, key) => {
        const name = key;
        const alias = getAlias(name);
        if (parseFloat(module.impact) > 0 && name !== 'valuation') {
            const revenue = getIsolatedRevenueIncrease(name);
            const profit = getIsolatedAnnualProfit(name);
            const params = { type: name, time: module.time, revenueAmount: revenue };
            const value = processPriorityRevenueAmount(params);
            list.push({
                name,
                alias,
                ...module,
                revenue,
                profit,
                value,
            });
        }
    });

    // Sort the modules by Priority
    if (list.length > 0) {
        filtered = sortBy(list, o => o.priority);
    }

    return filtered;
};

export const evaluateCompleteModules = (modules) => {
    let status = false;
    each(modules, (mod) => {
        if (impactmodules.includes(mod)) {
            status = true;
        }
    });
    return status;
};

export const getID = (input, type) => {
    const string = input;
    const array = string.split('/');
    return (type === 'assessment') ? array[2] : array[array.length - 1];
};

export const completeModules = (name) => {
    const assessment = toJS(properties.selected_assessment);
    const { modules } = assessment.complete;
    if (modules.length > 0) {
        const x = modules.find(each => each === name);
        if (!x) {
            let list = null;
            if (name === 'Financial') {
                list = [name, ...modules];
            } else {
                list = [...modules, name];
            }
            assessment.complete.modules = list;
            properties.saveSelectedAssessment({ ...assessment });
        }
    } else {
        assessment.complete.modules = [name];
        properties.saveSelectedAssessment({ ...assessment });
    }
};

export const getAssessedModules = () => {
    const assessment = toJS(properties.selected_assessment);
    const list = toJS(properties.modules);
    const { module_set_name, complete } = assessment;
    const { modules } = complete;
    const found = [];

    forEach(modules, (module) => {
        const x = list.find(each => each.module_name === module);
        if (x) {
            const a = properties[x.module_path];
            let params = null;
            if (module_set_name.includes('Jumpstart')) {
                params = {
                    extras: a.extras, path: x.module_path, alias: x.module_alias, name: x.module_name, questions: a.questions, responses: a.responses, comments: a.comments,
                };
            } else {
                params = {
                    extras: a.extras, category: (x.module_meta) ? x.module_meta.module_category : '', path: x.module_path, alias: x.module_alias, name: x.module_name, questions: a.questions, responses: a.responses, comments: a.comments,
                };
            }

            found.push(params);
        }
    });

    return found;
};

export const getPriceExtraQuestions = (customer_number) => ({
    current_customer_number: 'Approximately how many customers do you have that account for your current revenue ?',
    leaving_customer_number: `How many of those ${customer_number} customers do you think would leave you ?`,
    may_happen: 'Do you think that will happen ?',
});

