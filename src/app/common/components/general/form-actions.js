import * as Sentry from "@sentry/react";
import { toJS } from 'mobx';
import { find } from 'lodash';
import { encrypt, encryptID, decrypt, decryptID } from '../../components/general/cypher';
import { store } from '../../services/data';
import properties from '../../services/properties';
import {
  errorToast,
  successToast,
  setUser,
  updateCompany,
  updateUser,
  calculateSuccessFactor,
  processResponsesImpact,
  resetToken,
  resetTokenX,
  resetCurrencies,
  resetUser,
  formatError,
  getUser
} from './utils';
import { GET_GROUP, CREATE_LESSONS, UPDATE_LESSONS, CREATE_GROUP, UPDATE_GROUP, CREATE_MEMBER, UPDATE_MEMBER, UPDATE_LESSON_MEETING_SETTINGS, UPDATE_LESSON_MEETING } from '../../services/gql-queries';

export const validateUniqueEmail = (id, email) => {
  const users = toJS(properties.users);
  const found = find(users, o => o.email === email);
  if (found) {
    if (id && (Number(found.id) === Number(id))) {
      return true;
    }
    return false;
  }
  return true;
};

const startProcessing = () => {
  properties.setShowSpinner(true);
  properties.setError(null);
  properties.setSuccess(null);
};

const processingError = (error) => {
  Sentry.captureException(error);
  if (error.response) {
    const { data } = error.response;
    const message = (data.error) ? Object.values(data.error).join('') : data.message;
    if (message) {
      properties.setError({ message });
    }
  } else {
    properties.setError({ message: JSON.stringify(error) });
  }
  properties.setShowSpinner(false);
  properties.setShowModuleSetSpinner(false);
  properties.setLoaderMessage(null);
  properties.setShowLoader(false);
};

export const sendResetPasswordEmail = async (params, actions) => {
  startProcessing();

  try {
    const response = await store.resetPasswordEmail(params);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else {
      properties.setSuccess({ message: response.data.data.message });
      actions.reset();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};


export const newMeetingNote = async (form) => {
  startProcessing();

  try {
    const response = await store.newSession(form.values());
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else {
      if (response.data.status === 201) {
        properties.setSuccess({ message: 'Meeting note saved successfully' });
      }
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const emailMeetingNote = async (form) => {
  startProcessing();
  try {
    const note = { ...form.values(), ...form.note };
    store.newSession(note);

    const response = await store.emailSession(note);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else if (response.data.status === 200) {
      properties.setSuccess({ message: 'Meeting note sent successfully' });
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const editMeetingNote = async (form) => {
  startProcessing();

  try {
    const note = form.values();
    const response = await store.editSession(note.note_id, note);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else if (response.data.status === 200) {
      properties.setSuccess({ message: 'Meeting note updated successfully' });
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const savePricesExtraResponses = async (form) => {
  startProcessing();

  const d = form.values();

  const params = {
    current_customer_number: Number(d.current_customer_number),
    leaving_customer_number: Number(d.leaving_customer_number),
    may_happen: Number(d.may_happen),
    assessment_id: Number(d.assessment_id),
  };

  try {
    const response = await store.priceExtras(params);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else if (response.data.status === 201) {
      properties.saveExtras('prices', { ...response.data.data });
      properties.setSuccess({ message: 'Extra details saved successfully' });
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const addUserModuleSet = async (form) => {
  properties.setShowModuleSetSpinner(true);
  properties.setError(null);
  properties.setSuccess(null);
  const user = toJS(properties.selected_user);

  try {
    const response = await store.addUserModuleSet({ user_id: user.id, ...form.values() });
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else {
      if (response.data.status === 200) {
        properties.saveUserModuleSets(response.data.data);
        properties.setSuccess({ message: 'Module set added successfully' });
      }
      form.clear();
    }
    properties.setShowModuleSetSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const newAssessment = async (form) => {
  startProcessing();

  try {
    const response = await store.newAssessment(form.values());
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else {
      if (response.data.status === 201) {
        properties.setSuccess({ message: 'New assessment saved successfully' });
        // Redirect to dashboard
      }
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const editAssessment = async (form) => {
  startProcessing();

  try {
    const assessment = form.values();
    const response = await store.editAssessment(assessment.id, assessment);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else {
      if (response.data.status === 200) {
        properties.setSuccess({ message: 'Assessment updated successfully' });
        // Redirect to dashboard
      }
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const newCompany = async (data, actions) => {
  const { reset } = actions;
  startProcessing();

  try {
    const response = await store.newCompany(data);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else {
      if (response.data.status === 201) {
        properties.addOneCompany(response.data.data);
        properties.setSuccess({ message: 'New contact saved successfully' });
        // Redirect to dashboard
      }
      reset();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const editCompany = async (data) => {
  startProcessing();
  const company_id = encryptID(data.id, process.env.REACT_APP_HASHING_SALT);

  try {
    const response = await store.editCompany(company_id, data);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    }
    if (response.data.status === 200) {
      updateCompany(response.data.data);
      properties.setSuccess({ message: 'Contact updated successfully' });
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const editProfile = async (form) => { 
  startProcessing();
  const profile = form.values();
  profile.role_id = encryptID(profile.role_id, process.env.REACT_APP_HASHING_SALT);
  profile.id = encryptID(profile.id, process.env.REACT_APP_HASHING_SALT);
  const status = validateUniqueEmail(profile.id, profile.email);
  if (status) {
    try {
      const response = await store.editProfile(profile.id, profile);
      if (response.data.error) {
        properties.setError({ message: response.data.error });
      }
      if (response.data.status === 200) {
        const temp = JSON.parse(window.atob(decrypt(process.env.REACT_APP_HASHING_SALT, localStorage.getItem('pas-user'))));     
        const updated = { ...temp, ...profile, pas_token: localStorage.getItem('pas-token') };
        delete updated.password;
        delete updated.verify_password;
        delete updated.edit_password;
        const stringify = JSON.stringify(updated);
        const encrypted = window.btoa(stringify);
        localStorage.setItem('pas-user', window.btoa(encrypt(encrypted, process.env.REACT_APP_HASHING_SALT)));
        setUser(updated);
        properties.setSuccess({ message: 'Profile updated successfully' });
        successToast("Profile updated successfully")
      }
      properties.setShowSpinner(false);
    } catch (error) {
      processingError(error);
    }
  } else {
    properties.setError({ message: 'The email address you entered already exists' });
    properties.setShowSpinner(false);
  }
};


// Edit a user
export const editUser = async (form) => {
  properties.setShowEditSpinner(true);
  properties.setEditUserError(null);
  properties.setEditUserSuccess(null);
  const user = {
    edit_password: false,
    change_description: properties.description,
    ...form.values()
  };
  const status = validateUniqueEmail(user.id, user.email);
  if (status) {
    try {
      const user_id = encryptID(user.id, process.env.REACT_APP_HASHING_SALT);
      user.id = encryptID(user.id, process.env.REACT_APP_HASHING_SALT);
      user.role_id = encryptID(user.role_id, process.env.REACT_APP_HASHING_SALT);
      const response = await store.editProfile(user_id, user);
      if (response.data.error) {
        properties.setEditUserError({ message: response.data.error });
      }
      if (response.data.status === 200) {
        updateUser(response.data.data);
        properties.setEditUserSuccess({ message: 'Profile updated successfully' });
      }
      properties.setShowEditSpinner(false);
      properties.setDescription(null);
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        const message = (data.error) ? Object.values(data.error).join('') : data.message;
        properties.setEditUserError({ message });
      } else {
        properties.setEditUserError({ message: JSON.stringify(error) });
      }
      properties.setShowEditSpinner(false);
      properties.setDescription(null);
    }
  } else {
    properties.setEditUserError({ message: 'The email address you entered already exists' });
    properties.setShowEditSpinner(false);
    properties.setDescription(null);
  }
};

export const toggleShowtour = async ({ id, show_tour }) => {
  try {
    await store.toggleShowtour(id, { show_tour });
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      const message = (data.error) ? Object.values(data.error).join('') : data.message;
      console.error(message);
    } else {
      console.error(JSON.stringify(error));
    }
  }
};

export const toggleProspectsNotify = async ({ id, prospects_notify }) => {
  try {
    await store.toggleProspectsNotify(id, { prospects_notify });
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      const message = (data.error) ? Object.values(data.error).join('') : data.message;
      console.error(message);
    } else {
      console.error(JSON.stringify(error));
    }
  }
};

// System logout
export const logout = async () => {
  try {
    await store.logout().then(({data}) => {
      if (data.data.logout){
        localStorage.clear();
        window.location.reload(true);
      }
    });
  } 
  catch (error) {
    if (error.response) {
      const { data } = error.response;
      let message = null;
      if (data.error) {
        message = Object.values(data.error).join(' ');
        console.log(`%c${message}`, 'color:#d82057');
      } else if (data.message) {
        message = Object.values(data.message).join('');
        console.log(`%c${message}`, 'color:#d82057');
      } else {
        console.log(`%c${message}`, 'color:#d82057');
      }
    } else {
      console.log(`%c${error}`, 'color:#d82057');
    }
  }
};

// System login
export const loginOtp = async (params, actions) => {
  const { browser, lookup, reset } = actions;
  properties.setLoginParams(params);
  startProcessing();

  try {
    const status = ((`${process.env.REACT_APP_ENV}` === 'production') || (`${process.env.REACT_APP_ENV}` === 'staging') || (`${process.env.REACT_APP_ENV}` === 'develop') || (`${process.env.REACT_APP_ENV}` === 'uat'));
    const pa = (status) ? {
      ...params,
      browser,
      lookup,
    } : params;

    const response = await store.loginOtp(pa);
    if (response.data.data.status === 'inactive') {
      properties.setError({ message: 'Sorry, your account is temporarily suspended' });
    }
    properties.setUserId(response.data.data.user_id);

    if (response.data.data.verified) {
      if (decryptID(process.env.REACT_APP_HASHING_SALT, response.data.data.verified) === 'true') {
        login(pa, { browser, lookup, reset});
      }else{
        properties.setUserId(response.data.data.user_id);
        properties.setShowSpinner(false);
        properties.setShowOtpForm(true);
        properties.setRememberMe(pa.remember_me);
        reset();
      }
    }

  } catch (error) {
    processingError(error);
  }
};

export const login = async (params, actions) => {
  const { browser, lookup } = actions;

  startProcessing();

  try {
    const status = ((`${process.env.REACT_APP_ENV}` === 'production') || (`${process.env.REACT_APP_ENV}` === 'staging') || (`${process.env.REACT_APP_ENV}` === 'develop') || (`${process.env.REACT_APP_ENV}` === 'uat'));
    const pa = (status) ? {
      ...params,
      browser,
      lookup,
    } : params;

    store.apiLogin().then(async (response) => {

      store.login(pa).then((resp) => {
        const { data } = resp;
        const user = {
          id: data.data.id,
          first_name: data.data.first_name,
          last_name: data.data.last_name,
          email: data.data.email,
          company: data.data.company,
          website: data.data.website,
          role_id: data.data.role_id,
          tos_check: data.data.tos_check,
          licensee: data.data.licensee,
          onboarding: data.data.onboarding,
          monthly_income: data.data.monthly_income,
          meeting_url: data.data.meeting_url,
          calendarurls: data.data.calendarurls,
          annual_income: data.data.annual_income,
          show_tour: data.data.show_tour,
          prospects_notify: data.data.prospects_notify,
          trainings: data.data.trainings,
          integrations: data.data.integrations,
          module_sets: data.data.module_sets,
          profile_pic: data.data.profile_pic,
          title: data.data.title,
          location: data.data.location,
          time_zone: data.data.time_zone,
          phone_number: data.data.phone_number,
          birthday: data.data.birthday,
          facebook: data.data.facebook,
          twitter: data.data.twitter,
          linkedin: data.data.linkedin,
          status: data.data.status,
          created_at: data.created_at,
          pas_token: data.data.access_token
        };
        setUser(user);
        localStorage.setItem('pas-token', data.data.access_token);
        localStorage.setItem('pas-tokenx', data.data.access_token);
        const encrypted = JSON.stringify(user);
        localStorage.setItem('pas-user', encrypt(window.btoa(encrypted), process.env.REACT_APP_HASHING_SALT));
        properties.setShowSpinner(false);
        properties.setLoggedIn(true);
      }).catch((error) => {
        console.log('error', error);
        properties.setOtpFailed(true),
        properties.setShowSpinner(false);
        processingError(error);
      });
    });

  } catch (error) {
    processingError(error);
  }
};

// get OTP
export const getOTP = async (data) => {
  try {
    properties.setShowOtpForm(true);
    const response = await store.getOtp(data);
    if (response.status === 200) {
      properties.setOtpData(response.data.data);
      properties.setShowOtpForm(true);
      properties.setOtpFailed(false);
      properties.setSuccess("A One-Time Password (OTP) has been sent to your email");
      properties.setError(null);
    } else {
      properties.setShowOtpForm(false);
      properties.setOtpData([]);
    }
  } catch (error) {
    console.log('---', error);
    processingError(error);
  }
}

// Register a new user
export const register = async (form) => {
  startProcessing();
  const user = form.values();
  const status = validateUniqueEmail(user.id, user.email);
  if (status) {
    try {
      const response = await store.registerUser(user);
      if (response.data.error) {
        properties.setError(JSON.stringify({ message: response.data.error }));
      } else {
        if (response.data.status === 201) {
          properties.saveOneUser(response.data.data);
          properties.setSuccess({ message: 'New user added successfully' });
        }
        form.clear();
      }
      properties.setShowSpinner(false);
    } catch (error) {
      processingError(error);
    }
  } else {
    properties.setError({ message: 'The email address you entered already exists' });
    properties.setShowSpinner(false);
  }
};

// Free register a new user
export const freeRegister = async (form) => {
  startProcessing();

  try {
    const response = await store.freeRegisterUser(form.values());
    if (response.data.error) {
      properties.setError(JSON.stringify({ message: response.data.error }));
    } else {
      if (response.data.status === 201) {
        properties.setSuccess({ message: 'Your brand new free account is ready! Please check your email.' });
      }
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const notifyAdmin = async (details) => {
  try {
    await store.notifyAdmin(details);
  } catch (error) {
    const message = formatError(error);
    console.log(`%c${message}`, 'color:#d82057');
  }
};

// Register a new single user
export const registerSingleUser = async (form) => {
  properties.setSecondSpinner(true);
  const { company, website, id } = form.user;
  const data = {
    ...form.values(),
    company,
    website,
    owner: id,
    role_id: 6,
  };

  try {
    const response = await store.registerUser(data);
    if (response.data.error) {
      errorToast(response.data.error, true, false);
    } else {
      if (response.data.status === 201) {
        const obj = {
          current_user_first_name: form.user.first_name,
          current_user_last_name: form.user.last_name,
          current_user_email: form.user.email,
          new_user_first_name: data.first_name,
          new_user_last_name: data.last_name,
          new_user_email: data.email,
        };
        notifyAdmin(obj);
        properties.saveSingleUser(response.data.data);
        successToast('New user added successfully');
      }
      form.clear();
    }
    properties.setSecondSpinner(false);
  } catch (error) {
    if (error.response) {
      const { response } = error;
      const message = Object.values(response.data.error).join(' ');
      errorToast(message, true, false);
    } else {
      errorToast('Unable to add a new user', true, false);
    }
    properties.setSecondSpinner(false);
  }
};

// reset user password
export const resetPassword = async (form) => {
  startProcessing();

  try {
    const response = await store.registerPassword(form.values());
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else {
      if (response.data.status === 200) {
        properties.setSuccess({ message: response.data.data.message });
      }
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

export const saveCoachingCost = async ({ id, initial_coaching_cost, monthly_coaching_cost }) => {
  properties.setLoaderMessage('Saving Investment in Coaching ...');
  properties.setShowLoader(true);
  try {
    const response = await store.saveCoachingCost(id, { initial_coaching_cost, monthly_coaching_cost });
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else if (response.data.status === 200) {
      properties.setSuccess({ message: 'Investment in Coaching saved successfully' });
    }
    properties.setLoaderMessage(null);
    properties.setShowLoader(false);
  } catch (error) {
    processingError(error);
  }
};

export const saveRevenueShare = async ({ id, revenue_share, shared }) => {
  try {
    const response = await store.saveRevenueShare(id, { revenue_share, shared });
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else if (response.data.status === 200) {
      successToast('Revenue share saved successfully');
    }
  } catch (error) {
    processingError(error);
  }
};

export const saveAssessmentTrail = async ({
  assessment_id, path, module_name, trail,
}) => {
  try {
    const response = await store.assessmentTrail(assessment_id, { path, module_name, trail });
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    }
  } catch (error) {
    const message = formatError(error);
    console.log(`%c${message}`, 'color:#d82057');
  }
};

// Success form
export const saveSuccessResponses = async (form) => {
  startProcessing();
  properties.setSuccessFactorError(null);

  const fact = calculateSuccessFactor(form.values());

  const factor = parseFloat(fact);

  if (factor > 0) {
    properties.setSuccessFactor(factor);
    const payload = { success_factor: factor, ...form.values() };
    properties.saveSuccessResponses(payload);

    try {
      const response = await store.saveSuccessResponses(payload);
      if (response.data.error) {
        properties.setError({ message: response.data.error });
      } else {
        if (response.data.status === 201) {
          properties.setSuccess({ message: 'Success response saved successfully' });
        }
        form.clear();
      }
      properties.setShowSpinner(false);
    } catch (error) {
      processingError(error);
    }
  } else {
    properties.setSuccessFactorError('Total profit impact needs to be greater than zero');
  }
};

const cleanObject = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
      delete obj[key];
    }
  });
};

const flattenResponses = (results) => {
  const { module_name, responses } = results;

  const flat = {
    module: module_name,
    ...responses,
  };

  const resp = [];

  Object.keys(flat).forEach((key) => {
    const value = flat[key];
    if (value.length > 0) { // Get the questions with responses
      if (key.startsWith('question') || key.startsWith('impact')) {
        const array = key.split('_');
        const res = { module: flat.module, response: value, question_id: array[1] };
        resp.push(res);
      }
    }
  });

  const response = { response: resp };

  return response;
};

// Save questions responses
export const saveQuestionsResponses = async (form) => {
  // Show spinner if we are not saving prices responses
  // The spinner for prices form will be triggered by the prices-extras form
  if (form.type !== 'prices') {
    properties.setShowSpinner(true);
  }
  properties.setError(null);
  properties.setSuccess(null);

  const results = form.values();

  const { assessment_id, responses } = results;

  cleanObject(responses); // remove empty responses

  properties.saveResponses(form.type, { assessment_id: results.assessment_id, ...responses });
  processResponsesImpact(form.type, responses);

  const flat_responses = flattenResponses(results);

  try {
    const response = await store.saveQuestionsResponses(assessment_id, flat_responses);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else if (response.data.status === 201) {
      properties.setSuccess({ message: 'Question responses saved successfully' });
    }
    if (form.type !== 'prices') {
      properties.setShowSpinner(false);
    }
  } catch (error) {
    if (form.type !== 'prices') {
      properties.setShowSpinner(false);
    }

    const message = formatError(error);
    properties.setError({ message });
  }
};

// Save questions responses in the background
export const saveQuestionsInbackground = async (form) => {
  // Show spinner if we are not saving prices responses
  // The spinner for prices form will be triggered by the prices-extras form
  
  const results = form.values();

  const { assessment_id, responses } = results;

  cleanObject(responses); // remove empty responses

  properties.saveResponses(form.type, { assessment_id: results.assessment_id, ...responses });
  processResponsesImpact(form.type, responses);

  const flat_responses = flattenResponses(results);

  try {
    const response = await store.saveQuestionsResponses(assessment_id, flat_responses);   
   
  } catch (error) {
   console.log('error :>> ', error);
  }
};

// Save split questions responses
export const savePriceExtraResponsesInBg = async (form) => {

  const d = form.values();

  const params = {
    current_customer_number: Number(d.current_customer_number),
    leaving_customer_number: Number(d.leaving_customer_number),
    may_happen: Number(d.may_happen),
    assessment_id: Number(d.assessment_id),
  };

  try {
    const response = await store.priceExtras(params);
    
      properties.saveExtras('prices', { ...response.data.data });
      properties.setSuccess({ message: 'Extra details saved successfully' });
   
  } catch (error) {
    processingError(error);
  }
};

// Save split questions responses
export const saveSplitQuestionsResponses = async (form) => {
  startProcessing();

  const results = form.values();
  const { assessment_id, responses } = results;
  cleanObject(responses); // remove empty responses
  const current_responses = toJS(properties[form.type].responses);
  const params = (current_responses) ? { assessment_id, ...current_responses, ...responses } : { assessment_id, ...responses };
  properties.saveResponses(form.type, params);
  processResponsesImpact(form.type, params);

  const flat_responses = flattenResponses(results);

  try {
    const response = await store.saveQuestionsResponses(assessment_id, flat_responses);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    } else if (response.data.status === 201) {
      properties.setSuccess({ message: 'Question responses saved successfully' });
    }
    properties.setShowSpinner(false);
  } catch (error) {
    processingError(error);
  }
};

// Save  priorities to DB
export const savePriorities = async (selected) => {
  properties.setError(null);
  properties.setSuccess(null);

  const filtered = selected.map((each, index) => ({
    assessment_id: each.assessment_id,
    time: each.time,
    module_name: each.module_name,
    order: (index + 1),
  }));

  const { assessment_id } = filtered[0];

  try {
    const response = await store.savePriorities({ assessment_id, modules: filtered });
    if (response.data.error) {
      return false;
    } if (response.data.status === 201) {
      return true;
    }
  } catch (error) {
    return false;
  }

};


export const saveImplementationStartDate = async ({ assessment_id, sdate }) => {
  try {
    const response = await store.saveImplementationStartDate(assessment_id, { imp_date: sdate });
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    }
  } catch (error) {
    const message = formatError(error);
    console.log(`%c${message}`, 'color:#d82057');
  }
};

export const togglePlanningMeeting = async ({ assessment_id, status }) => {
  try {
    const response = await store.togglePlanningMeeting(assessment_id, { add_planning_meetings: status });
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    }
  } catch (error) {
    const message = formatError(error);
    console.log(`%c${message}`, 'color:#d82057');
  }
};

export const toggleReviewMeeting = async ({ assessment_id, status }) => {
  try {
    const response = await store.toggleReviewMeeting(assessment_id, { add_review_meetings: status });
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    }
  } catch (error) {
    const message = formatError(error);
    console.log(`%c${message}`, 'color:#d82057');
  }
};

export const savePlanningMeetings = async ({ assessment_id, meetings }) => {
  try {
    const response = await store.savePlanningMeetings(assessment_id, { planning_meetings: meetings });
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    }
  } catch (error) {
    const message = formatError(error);
    console.log(`%c${message}`, 'color:#d82057');
  }
};

export const newLesson = async (form) => {
  startProcessing();

  try {

    const response = await store.graphQuery(CREATE_LESSONS, form.values());
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    } else {
      properties.setSuccess({ message: response.data.data.message });
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    console.log(`%c${error}`, 'color:#d82057');
  }
};

export const editLesson = async (form) => {
  startProcessing();

  try {
    // const results = form.values();
    const {
      group_id, title, slug, short_desc, full_desc, lesson_img, published, free, price, resource_type, file_upload,
    } = form.values();

    const response = await store.graphQuery(UPDATE_LESSONS, form.values());
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    } else {
      properties.setSuccess({ message: response.data.data.message });
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    console.log(`%c${error}`, 'color:#d82057');
  }
};

export const newGroup = async (form) => {
  startProcessing();

  try {
    const results = form.values();
    const {
      group_name, group_img, group_custom_price, group_description, payment_frequency, template,
    } = results;

    const reformatValues = { title: group_name, slug: group_name, group_img, price: Number(group_custom_price), description: group_description, payment_frequency };
    const response = await store.graphQuery(CREATE_GROUP, reformatValues);
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    } else {
      properties.setSuccess({ message: response.data.data.message });
      form.clear();
    }
    properties.setShowSpinner(false);
  } catch (error) {
    console.log(`%c${error}`, 'color:#d82057');
  }
};

export const editGroup = async (form) => {
  startProcessing();

  try {
    const results = form.values();
    const {
      group_id, group_name, group_img, group_custom_price, group_description, payment_frequency, template,
    } = results;

    const reformatValues = { id: group_id, title: group_name, slug: group_name, price: Number(group_custom_price), description: group_description, payment_frequency };


    const response = await store.graphQuery(UPDATE_GROUP, reformatValues);
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    }
  } catch (error) {
    console.log(`%c${error}`, 'color:#d82057');
  }
};

export const newMember = async (form) => {
  startProcessing();

  try {
    const results = form.values();
    const {
      first_name, last_name, email,
    } = results;

    const user = toJS(properties.user);

    const reformatValues = { first_name, last_name, email, invited_by: Number(user.id), user_group_id: Number(form.user_group_id), group_id: Number(form.group_id) };

    const response = await store.addNewGroupMember(reformatValues);

    if (response.data.error) {
      const message = formatError(response.data.error);
      properties.setError({ message });
      properties.setSuccess(null);
      errorToast(message, true, false);
    } else if (response.data.status === 201) {
      properties.setSuccess({ message: response.data.data });
      properties.setError(null);
      // Fetch group details again
      setTimeout(() => {
        form.closeModal(false);
        form.setLoading(true);
        form.getGroup(GET_GROUP, { id: Number(form.group_id), user_id: Number(user.id), user_group_id: Number(form.user_group_id) });
      }, 1000);
    } else if (response.data.status === 200) {
      // This user is already a member of this group
      properties.setError({ message: response.data.data });
      properties.setSuccess(null);
    }

    properties.setShowSpinner(false);

  } catch (error) {
    console.log(`%c${error}`, 'color:#d82057');
  }
};

export const editMember = async (form) => {
  startProcessing();

  try {
    const results = form.values();
    const {
      user_id, first_name, last_name, email, phone, profile_pic, title, country, industry,
    } = results;

    const reformatValues = { member_id: Number(user_id), first_name, last_name, email, phone, profile_pic, title, country, industry: Number(industry) };

    const response = await store.graphQuery(UPDATE_MEMBER, reformatValues);
    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    }
  } catch (error) {
    console.log(`%c${error}`, 'color:#d82057');
  }
};

export const editlessonMeetingSettings = async (form) => {
  startProcessing();
  try {
    const {
      lesson_meeting_setting_id, one_day_after, one_day_before, one_hour_before,
      three_day_before, three_day_before_coach,
    } = form.values();
    const apply_to_all = (form.applyToAllLessons) ? form.applyToAllLessons : false;
    const notification = { three_day_before_coach: Boolean(three_day_before_coach), one_day_after: Boolean(one_day_after), one_day_before: Boolean(one_day_before), one_hour_before: Boolean(one_hour_before), three_day_before: Boolean(three_day_before) };
    const reformatValues = { id: lesson_meeting_setting_id, meeting_settings: notification, apply_to_all };

    const response = await store.graphQuery(UPDATE_LESSON_MEETING_SETTINGS, reformatValues);

    if (response.data.error) {
      const message = formatError(response.data.error);
      console.log(`%c${message}`, 'color:#d82057');
    } else {
      properties.saveLessonSettings(response.data.data.updateLessonMeetingSetting.data);
      successToast(response.data.data.updateLessonMeetingSetting.message);
      form.clear();
    }
    form.closeCoachModal();
    form.closePreStepsModal();
    properties.setShowSpinner(false);
  } catch (error) {
    console.log(`%c${error}`, 'color:#d82057');
  }
};

export const saveActiveCampaignCreds = async (form) => {
  startProcessing();

  try {
    const active_campaign = form.values();
    const user = toJS(properties.user);
    const response = await store.saveActiveCampaignCreds({ ...active_campaign, user_id: user.id });
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    }
    if (response.data.status === 200) {
      successToast('Active Campaign Credentials added successfully');
      form.clear();
      form.navigate('/dashboard/coaching/integrations/');
    }
    properties.setShowSpinner(false);
  } catch (error) {
    console.log('Failed to save active campaign credentials', error.message);
    errorToast('Failed to save active campaign credentials', true, false);
  }
};

// Update profile picture
export const updateProfilePicture = async (data) => {
  properties.setShowSpinnerProfilePic(true);
  try {
    const formData = new FormData();
    const user_id = encryptID(data.id, process.env.REACT_APP_HASHING_SALT)
    formData.append('id', user_id);
    formData.append('file', data.file);
    formData.append('_method', 'POST');
   
      const response = await store.updateProfilePicture(formData);
      if (response.data.error) {
          const message = formatError(response.data.error);
          errorToast(message, true, false);
      } else {
        if (response.data.status === 200) {
          const resp = response.data.data
          const user = getUser ();

          // Save the updates to localstorage
          if (user) {
            const u = JSON.parse (decrypt(user, process.env.REACT_APP_HASHING_SALT));
            const temp = { ...u, profile_pic: resp.profile_pic }
            localStorage.setItem('pas-user', encrypt(window.btoa(JSON.stringify(temp)), process.env.REACT_APP_HASHING_SALT ));
          }

        setUser(response.data.data);
        successToast('Profile picture changed successfully');
      }
    }
    properties.setShowSpinnerProfilePic(false);
    properties.setChangePic(false);

  } catch (err) {
    const message = formatError(err);
    errorToast(message, true, false);
    properties.setShowSpinnerProfilePic(false);
    properties.setChangePic(false);
  }

};

export const EditPreviousMeetingDate = async (data) => {
  try{
    const response = await store.updatePreviousMeetingDate(data);
    if (response.data.error) {
      properties.setError({ message: response.data.error });
    }
  } catch (err) {
    const message = formatError(err);
    errorToast(message, true, false);
  }
}


