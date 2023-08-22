// Import dependencies
import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { stringify } from 'qs';
import { getToken, getTokenX } from '../components/general/utils';
import properties from '../services/properties';

const { CancelToken } = axios;
export const source = CancelToken.source();

// Create `axios-cache-adapter` instance
const cache = setupCache({
  maxAge: 15 * 60 * 1000, // 15 min
});

const env = ((`${process.env.REACT_APP_ENV}` === 'production') || (`${process.env.REACT_APP_ENV}` === 'staging') || (`${process.env.REACT_APP_ENV}` === 'develop') || (`${process.env.REACT_APP_ENV}` === 'uat'));

// Create `axios` instance passing `cache.adapter`
const csrf = axios.create({
  // adapter: cache.adapter,
  baseURL: (env) ? `${process.env.REACT_APP_API_URL_PROD}` : `${process.env.REACT_APP_API_URL_DEV}`,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  withCredentials: true,
});

// Create `axios` instance passing `cache.adapter`
const api = axios.create({
  // adapter: cache.adapter,
  baseURL: (env) ? `${process.env.REACT_APP_API_URL_PROD}` : `${process.env.REACT_APP_API_URL_DEV}`,
  responseType: 'json',
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' },
  cancelToken: source.token,
});

const downloadApi = axios.create({
  // adapter: cache.adapter,
  baseURL: (env) ? `${process.env.REACT_APP_API_URL_PROD}` : `${process.env.REACT_APP_API_URL_DEV}`,
  responseType: 'blob',
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  cancelToken: source.token,
});

const reportApi = axios.create({
  baseURL: (env) ? `${process.env.REACT_APP_API_URL_PROD}` : `${process.env.REACT_APP_REPORT_API_URL_DEV}`,
  responseType: 'blob',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  cancelToken: source.token,
});

export const graphapi = axios.create({
  adapter: cache.adapter,
  baseURL: (env) ? `${process.env.REACT_APP_API_URL_PROD}` : `${process.env.REACT_APP_GRAPH_URL_DEV}`,
  responseType: 'json',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  cancelToken: source.token,
});

export const stripeApi = axios.create({
  adapter: cache.adapter,
  baseURL: (env) ? `${process.env.REACT_APP_STRIPE_APP_API_URL_PROD}` : `${process.env.REACT_APP_STRIPE_APP_GRAPH_URL_DEV}`,
  responseType: 'json',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  cancelToken: source.token,
});

export const aweberAuth = axios.create({
  adapter: cache.adapter,
  baseURL: process.env.REACT_APP_AWEBER_AUTH_URL,
  responseType: 'json',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  cancelToken: source.token,
  auth: {
    username: process.env.REACT_APP_AWEBER_CLIENT_ID,
    password: process.env.REACT_APP_AWEBER_CLIENT_SECRET,
  },
});

// Add a request interceptor to add an auth token
api.interceptors.request.use((config) => {
  const x = getToken();
  const token = (x) || getTokenX();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

downloadApi.interceptors.request.use((config) => {
  const x = getToken();
  const token = (x) || getTokenX();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

graphapi.interceptors.request.use((config) => {
  const x = getToken();
  const token = (x) || getTokenX();
  config.headers['x-token'] = `${token}`;
  return config;
});

// Add a request interceptor to add an auth token
stripeApi.interceptors.request.use((config) => {
  const x = getToken();
  const token = (x) || getTokenX();
  config.headers.Authorization = `Bearer ${process.env.REACT_APP_STRIPE_SECRET}`;
  return config;
});

api.interceptors.response.use(undefined, function (error) {
  const status = error.response && error.response.status;
  if (status) {
    switch (status) {
      case 401: // Not logged in
      case 419: { // Session expired
        // case 503: // Down for maintenance
        // Bounce the user to the login screen with a redirect back
        properties.setError({ message: 'Your session Expired. Log in to continue using PAS.' });
        
        Logout();
        break;
      }
      case 500:
        console.log('Ooops, something went wrong!.');
        break;
      default:
        // Allow individual requests to handle other errors
        return Promise.reject(error);
    }
  } else {
    return Promise.reject(error);
  }
});

export const store = {

  // Get user IP, browser and geo location data
  getIP: (details) => api.post('/api/lookup', details),

  // Get user IP address
  getIPAddress: () => fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => data),

  // get all login tracker data
  tracker: () => api.get('/api/v1/tracker'),

  // get all login tracker data filtered by year and month
  monthlyTracker: (details) => api.post('/api/v1/tracker/monthly', details),

  // create a new report
  newReport: details => reportApi.post('/report', details),

  // create a new roadmap
  newRoadmap: details => reportApi.post('/roadmap', details),

  // create a new calendar
  newCalendar: details => reportApi.post('/calendar', details),

  // New Price Extras
  priceExtras: details => api.post('/api/v1/priceextras', details),

  apiLogin: () => csrf.get('sanctum/csrf-cookie'),

  login: user => api.post('/api/auth/login', user),

  logout: () => api.get('/api/auth/logout'),

  // Toggle user show_tour
  toggleShowtour: (user_id, details) => api.post(`/api/v1/users/tour/${user_id}`, details),

  // Toggle user prospects_notify
  toggleProspectsNotify: (user_id, details) => api.post(`/api/v1/users/prospectsnotify/${user_id}`, details),

  // Download users
  downloadUsers: details => api.post('/api/v1/users/download', details),

  // Edit user profile
  editProfile: (user_id, profile) => api.put(`/api/v1/users/${user_id}`, profile),

  editProfileTwo: (profile) => api.post('/api/v1/users/updateprofile/', profile),

  // Create a new user
  registerUser: user => api.post('/api/v1/users', user),

  // Create a new free user
  freeRegisterUser: user => api.post('/api/free/register', user),

  // Notify admin via email
  notifyAdmin: details => api.post('/api/v1/users/notify', details),

  // Reset user password
  registerPassword: user => api.post('/api/password/reset', user),

  // Send password reset email
  resetPasswordEmail: email => api.post('/api/password/create', email),

  // Send assessment analysis email
  sendAnalysisEmail: email => api.post('/api/v1/users/analysis/', email),

  // Add a moduleset to all the users
  addModulesetAllUsers: id => api.post('/api/v1/users/addmoduleset/', id),

  // Get all the users
  users: () => api.get('/api/v1/users'),

  // Get a single user
  getUser: id => api.get(`/api/v1/users/${id}`),

  // Get single users by company
  getSingleUsers: details => api.post('/api/v1/users/company', details),

  // Delete a new member from a group
  delGroupMember: data => api.post('/api/v1/users/del-group-member', data),

  // Get a single company
  company: id => api.get(`/api/v1/companies/${id}`),

  // get all assessments
  assessments: () => api.get('/api/v1/assessments'),

  // get single assessment
  singleAssessment: (assessment_id) => api.get(`/api/v1/assessments/${assessment_id}`),

  // Get companies created by user/coach
  userCompanies: user_id => api.get(`/api/v1/companies/user/${user_id}`),

  // Get assessments created by user/coach
  userAssessments: user_id => api.get(`/api/v1/assessments/user/${user_id}`),

  // Get assessments created by user/coach
  userSimpleAssessments: user_id => api.get(`/api/v1/assessments/user/simple/${user_id}`),

  // Get modulesets assigned to user/coach
  userModuleSets: user_id => api.get(`/api/v1/modulesets/user/${user_id}`),

  // Get specific modules by moduleset_id
  modules: id => api.get(`/api/v1/modules/get_by_order/${id}`),

  // Get all currencies
  currencies: () => api.get('/api/v1/currencies'),

  // Get all user roles
  roles: () => api.get('/api/v1/roles'),

  // Get all modulesets
  modulesets: () => api.get('/api/v1/modulesets'),

  // Get meeting notes by assessment id
  sessions: id => api.get(`/api/v1/sessions/assesssment/${id}`),

  // Create a new support ticket
  newTicket: ticket => api.post('/api/v1/tickets', ticket),

  // Create a new meeting note
  newSession: session => api.post('/api/v1/sessions', session),

  // Delete a meeting note by id
  deleteSession: id => api.delete(`/api/v1/sessions/${id}`),

  // Send meeting note via email
  emailSession: session => api.post('/api/v1/sessions/mail', session),

  // Edit a meeting note
  editSession: (id, note) => api.put(`/api/v1/sessions/${id}`, note),

  // Save coaching details
  saveImpCoaching: details => api.post('/api/v1/impcoaching', details),

  // Remove coaching details
  removeImpCoachingDetails: details => api.post('/api/v1/impcoaching/remove', details),

  // Save coaching action notes
  saveImpCoachingAction: details => api.post('/api/v1/impcoaching/actions', details),

  // Create a new company/contact
  newCompany: company => api.post('/api/v1/companies', company),

  // Edit a company/contact
  editCompany: (id, company) => api.put(`/api/v1/companies/${id}`, company),

  // Edit a company status
  editCompanyStatus: (details) => api.post(`/api/v1/companies/status`, details),

  // New company/client file
  newClientFiles: (details) => api.post('/api/v1/companies/newfiles/', details, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),

  // New company/client image
  newCompanyImage: (details) => api.post('/api/v1/companies/image/', details, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),

  deleteClientFile: (details) => api.post('/api/v1/companies/deletefile/', details),

  // Edit a file
  editFile: (id, file) => api.post('/api/v1/companies/updatefile/', file),

  // Create a new assessment
  newAssessment: assessment => api.post('/api/v1/assessments', assessment),

  // Update the other industry for an assessment by id
  otherIndustryAssessment: (id, details) => api.post(`/api/v1/assessments/otherindustry/${id}`, details),

  // Edit an assessment
  editAssessment: (id, assessment) => api.put(`/api/v1/assessments/${id}`, assessment),

  // Delete a company by id
  deleteCompany: id => api.delete(`/api/v1/companies/${id}`),

  // Delete an assessment by id
  deleteAssessment: id => api.delete(`/api/v1/assessments/${id}`),

  // delete a user by id
  deleteUser: id => api.delete(`/api/v1/users/${id}`),

  // Send an email to a user by id
  emailUser: details => api.post('/api/v1/users/email', details),

  // Add a moduleset by user/coach id
  newUserModuleSets: (user_id, module_id) => api.post(`/api/v1/modulesets/user/${user_id}/${module_id}`),

  // Add module set to a user
  addUserModuleSet: details => api.post('/api/v1/users/add_module_sets', details),

  // Toggle user/coach company permissions
  toggleCompanyPermissions: (user_id, company_id) => api.get(`/api/v1/users/company-permissions/${user_id}/${company_id}`),

  // Toggle user/coach assessment permissions
  toggleAssessmentPermissions: (assessments_id, details) => api.post(`/api/v1/users/edit_assessment_permissions/${assessments_id}`, details),

  // detach a user/coach from an assessment
  detachUserAssessment: (assessments_id, details) => api.post(`/api/v1/users/detach_user_assessment/${assessments_id}`, details),

  // detach a user/coach from an moduleset
  detachUserModuleset: (moduleset_id, details) => api.post(`/api/v1/users/detach_user_moduleset/${moduleset_id}`, details),

  // Get questions
  getQuestions: details => api.post('/api/v1/questions/get_by_module', details), // get questions by module name

  // Get success response
  getSuccessResponses: assessments_id => api.get(`/api/v1/rpmdial/${assessments_id}`),

  // save success questions
  saveSuccessResponses: details => api.post('/api/v1/rpmdial/', details),

  // save priorities
  savePriorities: details => api.post('/api/v1/priorities/', details),

  // save questions responses
  saveQuestionsResponses: (assessments_id, details) => api.post(`/api/v1/assessments/responses/save/${assessments_id}`, details),

  // save a single question response
  saveSingleResponse: (assessments_id, details) => api.post(`/api/v1/assessments/responses/single/${assessments_id}`, details),

  // save questions comment
  saveQuestionsComment: (assessments_id, details) => api.post(`/api/v1/assessments/comments/save/${assessments_id}`, details),

  // get questions responses
  getQuestionsResponses: (assessments_id, details) => api.post(`/api/v1/assessments/questions/get/${assessments_id}`, details),

  // get meta data for a module
  getMeta: details => api.post('/api/v1/meta/', details),

  // save the monthly cost of coaching
  saveCoachingCost: (id, assessment) => api.post(`/api/v1/assessments/cost/save/${id}`, assessment),

  // save the assessment agreements
  saveAgreements: (id, assessment) => api.post(`/api/v1/assessments/agreements/save/${id}`, assessment),

  // save the assessment revenue share
  saveRevenueShare: (id, assessment) => api.post(`/api/v1/assessments/revenue/save/${id}`, assessment),

  // create new or update an assessment trail
  assessmentTrail: (assessment_id, details) => api.put(`/api/v1/trails/${assessment_id}`, details),

  // update an assessment implementation start date
  saveImplementationStartDate: (assessment_id, details) => api.post(`/api/v1/assessments/implementation/save/${assessment_id}`, details),

  // toggle an assessment planning meeting status
  togglePlanningMeeting: (assessment_id, details) => api.post(`/api/v1/assessments/toggleplanningmeetings/save/${assessment_id}`, details),

  // toggle an assessment review meeting status
  toggleReviewMeeting: (assessment_id, details) => api.post(`/api/v1/assessments/togglereviewmeetings/save/${assessment_id}`, details),

  // update an assessment number of planning meetings
  savePlanningMeetings: (assessment_id, details) => api.post(`/api/v1/assessments/planningmeetings/save/${assessment_id}`, details),

  // execute gql query
  graphQuery: (query, variables) => graphapi.post('/gapi', { query, variables }),

  // get all training tracker data
  trainingAnalytics: (details) => api.post('/api/v1/training-analytics/list', details),

  // Get user group-coaching groups
  getUserGroupTemplates: (id) => api.get(`/api/v1/groups/user/${id}`),

  // Edit a custom group
  editCustomGroup: (details) => api.post('/api/v1/groups/editcustomgroup/', details),

  // Add a new group member
  addNewGroupMember: (details) => api.post('/api/v1/members/', details),

  // Stripe
  stripeOnboard: () => graphapi.post('/integrations/stripe/onboard-user'),
  stripeViewAccount: () => graphapi.get('/integrations/stripe/view'),

  // Aweber Endpoints

  getAccessToken: (data) => aweberAuth.post('/oauth2/token', stringify(data)),
  saveAweberIntegration: (details) => api.post('/api/v1/integrations/aweber/', details),

  // save the active campiagn data
  saveActiveCampaignCreds: (details) => api.post('/api/v1/activecampaign/credentials/add', details),

  // Getresponse Endpoints
  getResponseToken: (details) => api.post('/api/v1/integrations/getresponse/token', details),
  saveGetResponseIntegration: (details) => api.post('/api/v1/integrations/getresponse/', details),

  // Pause group sessions
  pauseSessions: (details) => api.post('/api/v1/members/pause/sessions', details),

  // Resume group sessions
  resumeSessions: (details) => api.post('/api/v1/members/resume/sessions', details),

  // Share a report
  shareReport: details => api.post('/api/v1/coachingportal/report/', details),

  // Share a resources
  shareResources: details => api.post('/api/v1/coachingportal/resources/', details),

  // Create a new coaching meeting note
  coachingNote: notes => api.post('/api/v1/coachingportal/', notes),

  // Update coaching next meeting time
  coachingNextMeetingTime: notes => api.post('/api/v1/coachingportal/notes/nextmeetingtime', notes),

  // Create / update a coaching task
  coachingTask: details => api.post('/api/v1/coachingportal/task/', details),

  // Create / update a coaching metrics
  coachingMetrics: details => api.post('/api/v1/coachingportal/metrics/', details),

  // Send metrics email
  sendMetricsEmail: details => api.post('/api/v1/coachingportal/metrics/share/', details),

  // Send history email
  sendHistoryEmail: details => api.post('/api/v1/coachingportal/history/share/', details),

  // Download history
  downloaHistory: details => downloadApi.post('/api/v1/coachingportal/history/download/', details),

  // Update the meeting note time zone
  updateTimeZone: (details) => api.post('/api/v1/coachingportal/updatetimezone/', details),

  // Delete a coaching task
  deleteCoachingTask: details => api.post('/api/v1/coachingportal/task/delete/', details),

  // Delete a coaching note
  deleteCoachingNote: details => api.post('/api/v1/coachingportal/notes/delete/', details),

  // Delete a coaching commitment
  deleteCoachingCommitment: details => api.post('/api/v1/coachingportal/commitment/delete/', details),

  // Update a settings
  updateSettings: details => api.post('/api/v1/coachingportal/settings/', details),

  // Update Commitment status
  updateCommitmentStatus: details => api.post('/api/v1/coachingportal/commitment/status/', details),

  // Edit the meeting note
  updatePreviousMeetingDate: details => api.post('api/v1/coachingportal/notes/meetingtime/update/', details),

  // New / Edit Commitment Task
  newUpdateCommitment: (details) => api.post('/api/v1/coachingportal/commitment/', details),

  // Delete a single resource 
  deleteSingleResource: details => api.post('/api/v1/lessons/resource/delete/', details),

  // Get recordings
  getRecording: (owner_id, user_group_id, lesson_id) => api.post(`/api/v1/lessons/recording/`, owner_id, user_group_id, lesson_id),

  // loginOtp
  loginOtp: (details) => api.post('/api/auth/loginotp', details),

  // get OTP
  getOtp: (details) => api.post('/api/auth/generateOTP', details),

  // verify OTP
  verifyOtp: (details) => api.post('/api/v1/verifyOTP', details),

  // check OTP Status
  checkOtpStatus: (details) => api.post('/api/v1/checkOtpStatus', details),
  

  // recaptcha token
  verifyRecaptchaToken: (details) => csrf.post('/api/auth/verifyRecaptchaToken', details),

  // Disable coach assessment meeting reminders
  disableMeetingReminders: (assessment_id) => api.post(`api/v1/assessments/disable/settings`, assessment_id),

  // Update student profile picture
  updateProfilePicture: (details) => api.post('/api/v1/student/profilephoto/update', details, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),

  // Lead Generation
  // Download Script
  downloadScript: details => downloadApi.post('/api/v1/lead-generation/script/download/', details),

  // Get Survey Responses
  getSurveyResponses: () => api.get(`/api/v1/onboarding/survey/responses`),

};

const Logout = async() => {
  await store.logout().then((data) => {
      localStorage.clear();
      window.location.reload(true);
    
  });
}