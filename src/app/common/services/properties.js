import {
  observable, action, decorate, toJS,
} from 'mobx';

class Properties {
  history = null

  selectedmodules = null

  impcoaching = null

  impsettings = null

  lessonsettings = null

  prioritiesmodules = []

  training_analysis = []

  user = null

  users = null

  error = null

  success = null

  editusererror = null

  editusersuccess = null

  isAdmin = null

  isAdvisor = null

  isLicensee = null

  industry = null

  showSpinner = false

  singleUsers = null

  secondSpinner = false

  showEditSpinner = false

  showModuleSetSpinner = false

  showLoader = false

  loaderMessage = null

  initialUrl = null

  loggedIn = false

  oneYearImpact = false

  valuationForecast = false

  currency_symbol = null

  time_zone = null

  selected_company = null

  selected_user = null

  selected_moduleset = null

  selected_role = null

  companies = null

  summary = null

  processedsummary = false

  tabs = null

  selected_assessment = null

  currencies = null

  roles = null

  modulesets = null

  usermodulesets = null

  notes = null

  allcompanies = null

  all = null

  allassessments = null

  modules = null

  cumulativeExpectedIncrease = 0

  annualCostOfCoaching = 12000

  monthlyCostOfCoaching = 12000

  successFactor = 0

  successFactorError = null

  alllessons = null

  // for login state pentest
  otp = null

  otpData = []

  showOtpForm = false

  otpVerified = false

  otpFailed = false

  loginParams = null

  userId = null

  recaptchaValue = null

  rememberMe = false
  description = null

  reSendOtpDisabled = false

  // profile picture
  showSpinnerProfilePic = false

  changePic = false

  dgintro = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgcontent = {
    priority: null, comments: null, trail: [], extras: null, expense: 19.90, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgwebsite = {
    priority: null, comments: null, trail: [], extras: null, expense: 21.57, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgemail = {
    priority: null, comments: null, trail: [], extras: null, expense: 5.17, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgseo = {
    priority: null, comments: null, trail: [], extras: null, expense: 31.81, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgadvertising = {
    priority: null, comments: null, trail: [], extras: null, expense: 29.97, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgsocial = {
    priority: null, comments: null, trail: [], extras: null, expense: 19.23, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgvideo = {
    priority: null, comments: null, trail: [], extras: null, expense: 23.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgmetrics = {
    priority: null, comments: null, trail: [], extras: null, expense: 2.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgmdp = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgoffer = {
    priority: null, comments: null, trail: [], extras: null, expense: 15.53, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgupsell = {
    priority: null, comments: null, trail: [], extras: null, expense: 10.01, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgdownsell = {
    priority: null, comments: null, trail: [], extras: null, expense: 11.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  dgcampaign = {
    priority: null, comments: null, trail: [], extras: null, expense: 9.93, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  leads = {
    priority: null, comments: null, trail: [], extras: null, expense: 12.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  mdp = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  products = {
    priority: null, comments: null, trail: [], extras: null, expense: 7.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  alliances = {
    priority: null, comments: null, trail: [], extras: null, expense: 18.89, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  bundling = {
    priority: null, comments: null, trail: [], extras: null, expense: 9.87, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  costs = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, impact: 0, defaultvariableimpact: 7, defaultfixedimpact: 7, variableamount: 0, fixedamount: 0, increase: 0, fixedimpact: 0, variableimpact: 0, meta: null, questions: null, responses: null, time: '',
  }

  downsell = {
    priority: null, comments: null, trail: [], extras: null, expense: 11.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  campaign = {
    priority: null, comments: null, trail: [], extras: null, expense: 9.93, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  prices = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  internet = {
    priority: null, comments: null, trail: [], extras: null, expense: 21.13, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  introduction = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  upsell = {
    priority: null, comments: null, trail: [], extras: null, expense: 10.01, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  financials = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  valuation = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  foundational = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesgeneral = {
    priority: null, comments: null, trail: [], extras: null, expense: 9.03, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesmanager = {
    priority: null, comments: null, trail: [], extras: null, expense: 11.33, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salescompensation = {
    priority: null, comments: null, trail: [], extras: null, expense: 14.65, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salessuperstars = {
    priority: null, comments: null, trail: [], extras: null, expense: 28.37, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salestraining = {
    priority: null, comments: null, trail: [], extras: null, expense: 15.21, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesprospecting = {
    priority: null, comments: null, trail: [], extras: null, expense: 12.49, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesclients = {
    priority: null, comments: null, trail: [], extras: null, expense: 17.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salestrade = {
    priority: null, comments: null, trail: [], extras: null, expense: 26.99, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesdm = {
    priority: null, comments: null, trail: [], extras: null, expense: 13.47, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesclosing = {
    priority: null, comments: null, trail: [], extras: null, expense: 15.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesorder = {
    priority: null, comments: null, trail: [], extras: null, expense: 11.16, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesremorse = {
    priority: null, comments: null, trail: [], extras: null, expense: 12.34, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesreps = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  salesteam = {
    priority: null, comments: null, trail: [], extras: null, expense: 29.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  sales = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  strategy = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  advertising = {
    priority: null, comments: null, trail: [], extras: null, expense: 35.33, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  appointments = {
    priority: null, comments: null, trail: [], extras: null, expense: 5.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  followupclose = {
    priority: null, comments: null, trail: [], extras: null, expense: 7.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  initialclose = {
    priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  formercustomers = {
    priority: null, comments: null, trail: [], extras: null, expense: 4.94, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  longevity = {
    priority: null, comments: null, trail: [], extras: null, expense: 5.13, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  mail = {
    priority: null, comments: null, trail: [], extras: null, expense: 22.23, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  offer = {
    priority: null, comments: null, trail: [], extras: null, expense: 15.53, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  policies = {
    priority: null, comments: null, trail: [], extras: null, expense: 7.21, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  publicity = {
    priority: null, comments: null, trail: [], extras: null, expense: 6.09, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  purchase = {
    priority: null, comments: null, trail: [], extras: null, expense: 6.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  referral = {
    priority: null, comments: null, trail: [], extras: null, expense: 19.91, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  scripts = {
    priority: null, comments: null, trail: [], extras: null, expense: 7.94, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  trust = {
    priority: null, comments: null, trail: [], extras: null, expense: 5.12, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
  }

  successResponses = null

  financialSummary = {
    currentRevenue: 0,
    grossProfitMargin: 0,
    netProfitMargin: 0,
    expectedIncreaseRevenue: 0,
    expectedIncreaseGrossProfit: 0,
    newAnnualGrossRevenue: 0,
    revenueImpact: 0,
    currentProfit: 0,
    currentExpenses: 0,
    newAnnualProfit: 0,
    fiveYearProfitImpact: 0,
    totalProfitImpact: 0,
    actualPercentageImpact: 0,
    startingValuation: 0,
    potentialValuation: 0,
    grossProfit: 0,
    fixedCost: 0,
    variableCost: 0,
    breakEvenPoint: 0,
    profitCostReduced: 0,
    monthlyGain: 0,
  };

  reset() {
    this.selectedmodules = null;
    this.impcoaching = null;
    this.impsettings = null;
    this.lessonsettings = null;
    this.user = null;
    this.users = null;
    this.error = null;
    this.success = null;
    this.prioritiesmodules = [];
    this.tabs = null;
    this.summary = null;
    this.processedsummary = false;
    this.industry = null;
    this.editusererror = null;
    this.editusersuccess = null;
    this.isAdmin = null;
    this.isAdvisor = null;
    this.isLicensee = null;
    this.singleUsers = null;
    this.showSpinner = false;
    this.secondSpinner = false;
    this.showEditSpinner = false;
    this.showModuleSetSpinner = false;
    this.showLoader = false;
    this.loaderMessage = null;
    this.initialUrl = null;
    this.loggedIn = false;
    this.oneYearImpact = false;
    this.valuationForecast = false;
    this.currency_symbol = null;
    this.selected_company = null;
    this.selected_assessment = null;
    this.selected_user = null;
    this.selected_moduleset = null;
    this.selected_role = null;
    this.companies = null;
    this.currencies = null;
    this.roles = null;
    this.modulesets = null;
    this.usermodulesets = null;
    this.notes = null;
    this.allcompanies = null;
    this.allassessments = null;
    this.modules = null;
    this.cumulativeExpectedIncrease = 0;
    this.annualCostOfCoaching = 12000;
    this.monthlyCostOfCoaching = 0;
    this.successFactor = 0;
    this.successFactorError = null;
    this.successResponses = null;
    this.alllessons = null;
    this.lesson = null;
    this.lessons = null;
    this.group = null;
    this.groups = null;

    // for login pentest
    this.otp = null;
    this.otpData = [];
    this.showOtpForm = false;
    this.otpVerified = false;
    this.loginParams = [];
    this.userId = null;
    this.recaptchaValue = null;
    this.rememberMe = false;
    this.description = null;
    this.otpFailed = false;
    this.reSendOtpDisabled = false;

    // profile picture changes
    this.showSpinnerProfilePic = false;

    this.changePic = false;

    this.dgintro = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgcontent = {
      priority: null, comments: null, trail: [], extras: null, expense: 19.90, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgwebsite = {
      priority: null, comments: null, trail: [], extras: null, expense: 21.57, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgemail = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.17, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgseo = {
      priority: null, comments: null, trail: [], extras: null, expense: 31.81, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgadvertising = {
      priority: null, comments: null, trail: [], extras: null, expense: 29.97, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgsocial = {
      priority: null, comments: null, trail: [], extras: null, expense: 19.23, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgvideo = {
      priority: null, comments: null, trail: [], extras: null, expense: 23.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgmetrics = {
      priority: null, comments: null, trail: [], extras: null, expense: 2.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgmdp = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgoffer = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.53, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgupsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 10.01, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgdownsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgcampaign = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.93, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.leads = {
      priority: null, comments: null, trail: [], extras: null, expense: 12.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.mdp = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.products = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.alliances = {
      priority: null, comments: null, trail: [], extras: null, expense: 18.89, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.bundling = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.87, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.costs = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, impact: 0, defaultvariableimpact: 7, defaultfixedimpact: 7, variableamount: 0, fixedamount: 0, increase: 0, fixedimpact: 0, variableimpact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.downsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.campaign = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.93, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.prices = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.internet = {
      priority: null, comments: null, trail: [], extras: null, expense: 21.13, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.introduction = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.upsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 10.01, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.financials = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.valuation = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.foundational = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.sales = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesteam = {
      priority: null, comments: null, trail: [], extras: null, expense: 29.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesgeneral = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.03, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesmanager = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.33, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salescompensation = {
      priority: null, comments: null, trail: [], extras: null, expense: 14.65, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salessuperstars = {
      priority: null, comments: null, trail: [], extras: null, expense: 28.37, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salestraining = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.21, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesprospecting = {
      priority: null, comments: null, trail: [], extras: null, expense: 12.49, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesclients = {
      priority: null, comments: null, trail: [], extras: null, expense: 17.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salestrade = {
      priority: null, comments: null, trail: [], extras: null, expense: 26.99, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesdm = {
      priority: null, comments: null, trail: [], extras: null, expense: 13.47, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesclosing = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesorder = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.16, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesremorse = {
      priority: null, comments: null, trail: [], extras: null, expense: 12.34, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesreps = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.strategy = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.advertising = {
      priority: null, comments: null, trail: [], extras: null, expense: 35.33, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.appointments = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.followupclose = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.initialclose = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.formercustomers = {
      priority: null, comments: null, trail: [], extras: null, expense: 4.94, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.longevity = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.13, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.mail = {
      priority: null, comments: null, trail: [], extras: null, expense: 22.23, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.offer = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.53, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.policies = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.21, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.publicity = {
      priority: null, comments: null, trail: [], extras: null, expense: 6.09, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.purchase = {
      priority: null, comments: null, trail: [], extras: null, expense: 6.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.referral = {
      priority: null, comments: null, trail: [], extras: null, expense: 19.91, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.scripts = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.94, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.trust = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.12, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.financialSummary = {
      currentRevenue: 0,
      grossProfitMargin: 0,
      netProfitMargin: 0,
      expectedIncreaseRevenue: 0,
      expectedIncreaseGrossProfit: 0,
      newAnnualGrossRevenue: 0,
      revenueImpact: 0,
      currentProfit: 0,
      currentExpenses: 0,
      newAnnualProfit: 0,
      fiveYearProfitImpact: 0,
      totalProfitImpact: 0,
      actualPercentageImpact: 0,
      startingValuation: 0,
      potentialValuation: 0,
      grossProfit: 0,
      fixedCost: 0,
      variableCost: 0,
      breakEvenPoint: 0,
      profitCostReduced: 0,
      monthlyGain: 0,
    };
  }

  resetAssessment() {
    this.selectedmodules = null;
    this.impcoaching = null;
    this.impsettings = null;
    this.lessonsettings = null;
    this.oneYearImpact = false;
    this.valuationForecast = false;
    this.currency_symbol = null;
    this.selected_company = null;
    this.selected_assessment = null;
    this.selected_user = null;
    this.selected_moduleset = null;
    this.selected_role = null;
    this.notes = null;
    this.industry = null;
    this.prioritiesmodules = [];
    this.tabs = null;
    this.singleUsers = null;
    this.cumulativeExpectedIncrease = 0;
    this.annualCostOfCoaching = 12000;
    this.monthlyCostOfCoaching = 0;
    this.successFactor = 0;
    this.successFactorError = null;
    this.successResponses = null;

    this.dgintro = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgcontent = {
      priority: null, comments: null, trail: [], extras: null, expense: 19.90, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgwebsite = {
      priority: null, comments: null, trail: [], extras: null, expense: 21.57, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgemail = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.17, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgseo = {
      priority: null, comments: null, trail: [], extras: null, expense: 31.81, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgadvertising = {
      priority: null, comments: null, trail: [], extras: null, expense: 29.97, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgsocial = {
      priority: null, comments: null, trail: [], extras: null, expense: 19.23, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgvideo = {
      priority: null, comments: null, trail: [], extras: null, expense: 23.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgmetrics = {
      priority: null, comments: null, trail: [], extras: null, expense: 2.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgmdp = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgoffer = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.53, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgupsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 10.01, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgdownsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.dgcampaign = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.93, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.leads = {
      priority: null, comments: null, trail: [], extras: null, expense: 12.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.mdp = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.products = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.alliances = {
      priority: null, comments: null, trail: [], extras: null, expense: 18.89, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.bundling = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.87, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.costs = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, impact: 0, defaultvariableimpact: 7, defaultfixedimpact: 7, variableamount: 0, fixedamount: 0, increase: 0, fixedimpact: 0, variableimpact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.downsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.campaign = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.93, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.prices = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.internet = {
      priority: null, comments: null, trail: [], extras: null, expense: 21.13, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.introduction = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.upsell = {
      priority: null, comments: null, trail: [], extras: null, expense: 10.01, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.financials = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.valuation = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.foundational = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.sales = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesteam = {
      priority: null, comments: null, trail: [], extras: null, expense: 29.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesgeneral = {
      priority: null, comments: null, trail: [], extras: null, expense: 9.03, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesmanager = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.33, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salescompensation = {
      priority: null, comments: null, trail: [], extras: null, expense: 14.65, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salessuperstars = {
      priority: null, comments: null, trail: [], extras: null, expense: 28.37, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salestraining = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.21, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesprospecting = {
      priority: null, comments: null, trail: [], extras: null, expense: 12.49, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesclients = {
      priority: null, comments: null, trail: [], extras: null, expense: 17.77, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salestrade = {
      priority: null, comments: null, trail: [], extras: null, expense: 26.99, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesdm = {
      priority: null, comments: null, trail: [], extras: null, expense: 13.47, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesclosing = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesorder = {
      priority: null, comments: null, trail: [], extras: null, expense: 11.16, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesremorse = {
      priority: null, comments: null, trail: [], extras: null, expense: 12.34, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.salesreps = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.strategy = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.advertising = {
      priority: null, comments: null, trail: [], extras: null, expense: 35.33, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.appointments = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.11, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.followupclose = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.initialclose = {
      priority: null, comments: null, trail: [], extras: null, expense: 0, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.formercustomers = {
      priority: null, comments: null, trail: [], extras: null, expense: 4.94, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.longevity = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.13, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.mail = {
      priority: null, comments: null, trail: [], extras: null, expense: 22.23, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.offer = {
      priority: null, comments: null, trail: [], extras: null, expense: 15.53, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.policies = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.21, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.publicity = {
      priority: null, comments: null, trail: [], extras: null, expense: 6.09, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.purchase = {
      priority: null, comments: null, trail: [], extras: null, expense: 6.22, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.referral = {
      priority: null, comments: null, trail: [], extras: null, expense: 19.91, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.scripts = {
      priority: null, comments: null, trail: [], extras: null, expense: 7.94, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };

    this.trust = {
      priority: null, comments: null, trail: [], extras: null, expense: 5.12, complete: false, amount: 0, increase: 0, impact: 0, meta: null, questions: null, responses: null, time: '',
    };
    this.financialSummary = {
      currentRevenue: 0,
      grossProfitMargin: 0,
      netProfitMargin: 0,
      expectedIncreaseRevenue: 0,
      newExpectedIncreaseRevenue: 0,
      expectedIncreaseGrossProfit: 0,
      revenueImpact: 0,
      newAnnualGrossRevenue: 0,
      currentProfit: 0,
      currentExpenses: 0,
      newAnnualProfit: 0,
      fiveYearProfitImpact: 0,
      totalProfitImpact: 0,
      actualPercentageImpact: 0,
      startingValuation: 0,
      potentialValuation: 0,
      grossProfit: 0,
      fixedCost: 0,
      variableCost: 0,
      breakEvenPoint: 0,
      profitCostReduced: 0,
      monthlyGain: 0,
    };
  }

  saveMeta(type, value) {
    this[type].meta = value;
  }

  savePriority(type, value) {
    this[type].priority = value;
  }

  saveImpact(type, value) {
    this[type].impact = value;
  }

  saveAmount(type, value) {
    this[type].amount = value;
  }

  saveComplete(type, value) {
    this[type].complete = value;
  }

  saveIncrease(type, value) {
    this[type].increase = value;
  }

  saveQuestions(type, value) {
    this[type].questions = value;
  }

  saveResponses(type, value) {
    this[type].responses = value;
  }

  saveComments(type, value) {
    this[type].comments = value;
  }

  saveExtras(type, value) {
    this[type].extras = value;
  }

  saveTime(type, value) {
    this[type].time = value;
  }

  saveTrail(type, value) {
    this[type].trail = value;
  }

  saveCostDetails(value) {
    this.costs = { ...this.costs, ...value };
  }

  saveHistory(value) {
    this.history = value;
  }


  moduleSetName() {
    const assessment = toJS(this.selected_assessment);
    if (assessment) {
      const { module_set_name } = assessment;
      return module_set_name;
    }
    return null;
  };


  addExpense(expense, impact) {
    if (expense > 0) {
      // Add expense to impact percentage
      return (1 - (parseFloat(expense) / 100)) * parseFloat(impact);
    }
    return impact;
  };



  getCutCostImpact() {
    const { grossProfitMargin, netProfitMargin, currentRevenue } = toJS(this.financialSummary);
    if ((grossProfitMargin === 0) || (currentRevenue === 0)) {
      return { increase: 0, impact: 0 };
    }

    const summary = toJS(this.financialSummary);
    const costs = toJS(this.costs);

    const impact = (parseFloat(currentRevenue) * (1 - (parseFloat(netProfitMargin) / 100))) * ((parseFloat(costs.impact) / 100));
    const increase = (parseFloat(impact) / parseFloat(summary.currentProfit)) * 100;
    return { increase: Math.round(increase), impact: Math.round(impact) };
  }


  calculateBusinessValuation = (type, revenue, margin, responses) => {
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
    const cost = this.getCutCostImpact();
    const timesThree = (type === 'start') ? 0 : Number(cost.impact) * 3;

    const sum = (result + timesThree);

    const valuation = Math.round((ten + sum) / 2);

    return Math.round(valuation);
  }


  updateFinancialSummary() {
    this.saveSingleFinancialSummary('CurrentRevenue');
    this.saveSingleFinancialSummary('GrossProfitMargin');
    this.saveSingleFinancialSummary('NetProfitMargin');
    this.saveSingleFinancialSummary('ExpectedIncreaseRevenue');
    this.saveSingleFinancialSummary('NewAnnualGrossRevenue');
    this.saveSingleFinancialSummary('RevenueImpact');
    this.saveSingleFinancialSummary('CurrentProfit');
    this.saveSingleFinancialSummary('GrossProfit');
    this.saveSingleFinancialSummary('ExpectedIncreaseGrossProfit');
    this.saveSingleFinancialSummary('CurrentExpenses');
    this.saveSingleFinancialSummary('VariableCost');
    this.saveSingleFinancialSummary('TotalProfitImpact');
    this.saveSingleFinancialSummary('FixedCost');
    this.saveSingleFinancialSummary('NewAnnualProfit');
    this.saveSingleFinancialSummary('5YearProfitImpact');
    this.saveSingleFinancialSummary('ActualPercentageImpact');
    this.saveSingleFinancialSummary('StartingValuation');
    this.saveSingleFinancialSummary('PotentialValuation');
    this.saveSingleFinancialSummary('BreakEvenPoint');
    this.saveSingleFinancialSummary('ProfitImpactCostReduced');
    this.saveSingleFinancialSummary('MonthlyGain');
  }

  // In increase prices we are supposed to take all the revenue impact to profits
  // So since we had not taken the 100% of its impact, we get the remainder and
  // add it to the total profit impact
  getRestOfIncreasePriceImpact = () => {
    const { grossProfitMargin } = toJS(this.financialSummary);
    const { amount } = toJS(this.prices);
    if (amount > 0) {
      const rem = 100 - grossProfitMargin;
      const result = ((parseFloat(rem) / 100) * parseFloat(amount));
      return Math.round(result);
    }
    return amount;
  }


  calculateExpectedIncreaseRevenue = () => {

    const mdp = this.addExpense(this.mdp.expense, this.mdp.impact);
    const offer = this.addExpense(this.offer.expense, this.offer.impact);
    const upsell = this.addExpense(this.upsell.expense, this.upsell.impact);
    const bundling = this.addExpense(this.bundling.expense, this.bundling.impact);
    const downsell = this.addExpense(this.downsell.expense, this.downsell.impact);
    const products = this.addExpense(this.products.expense, this.products.impact);
    const alliances = this.addExpense(this.alliances.expense, this.alliances.impact);
    const campaign = this.addExpense(this.campaign.expense, this.campaign.impact);
    const leads = this.addExpense(this.leads.expense, this.leads.impact);
    const internet = this.addExpense(this.internet.expense, this.internet.impact);

    const a = (parseFloat(mdp) / 100);
    const b = (parseFloat(offer) / 100);
    const d = (parseFloat(upsell) / 100);
    const e = (parseFloat(bundling) / 100);
    const f = (parseFloat(downsell) / 100);
    const g = (parseFloat(products) / 100);
    const h = (parseFloat(alliances) / 100);
    const i = (parseFloat(campaign) / 100);
    const j = (parseFloat(leads) / 100);
    const k = (parseFloat(internet) / 100);
    const newimpact = (
      (100
        * (1 + a)
        * (1 + b)
        * (1 + d)
        * (1 + e)
        * (1 + f)
        * (1 + g)
        * (1 + h)
        * (1 + i)
        * (1 + j)
        * ((1 + k) / 100)) - 1);
    return newimpact;
  }


  saveSingleFinancialSummary(type) {
    switch (type) {
      case 'CurrentRevenue': {
        const response = toJS(this.financials.responses);
        if (response) {
          const { question_3 } = response;
          this.financialSummary.currentRevenue = parseFloat(question_3);
        }
        break;
      }
      case 'GrossProfitMargin': {
        const response = toJS(this.financials.responses);
        if (response) {
          const { question_1 } = response;
          this.financialSummary.grossProfitMargin = parseFloat(question_1);
        }
        break;
      }
      case 'NetProfitMargin': {
        const response = toJS(this.financials.responses);
        if (response) {
          const { question_2 } = response;
          this.financialSummary.netProfitMargin = parseFloat(question_2);
        }
        break;
      }
      case 'ExpectedIncreaseRevenue':
        {
          const name = this.moduleSetName();
          if (name === 'ProfitJumpstart') {
            const { currentRevenue } = toJS(this.financialSummary);
            const a = this.calculateExpectedIncreaseRevenue();
            const temp = a * Number(currentRevenue);
            const prices = (parseFloat(this.prices.impact) / 100) * Number(currentRevenue);
            const result = temp + prices;
            this.financialSummary.expectedIncreaseRevenue = Math.round(result);
          } else {
            const { currentRevenue } = toJS(this.financialSummary);
            const cumulativeExpectedIncrease = toJS(this.cumulativeExpectedIncrease);
            const result = (parseFloat(currentRevenue) * (parseFloat(cumulativeExpectedIncrease)) / 100);
            this.financialSummary.expectedIncreaseRevenue = Math.round(result);
          }
          break;
        }
      case 'NewAnnualGrossRevenue': {
        const { currentRevenue, expectedIncreaseRevenue } = toJS(this.financialSummary);
        const result = (parseFloat(currentRevenue) + parseFloat(expectedIncreaseRevenue));
        this.financialSummary.newAnnualGrossRevenue = Math.round(result);
        break;
      }
      case 'RevenueImpact': {
        const { currentRevenue, expectedIncreaseRevenue } = toJS(this.financialSummary);
        const result = (parseFloat(expectedIncreaseRevenue) / parseFloat(currentRevenue)) * 100;
        this.financialSummary.revenueImpact = Number(result.toFixed(2)); // Math.round(result);
        break;
      }
      case 'ExpectedIncreaseGrossProfit': {
        const { grossProfitMargin, expectedIncreaseRevenue } = toJS(this.financialSummary);
        const result = ((parseFloat(grossProfitMargin) / 100) * parseFloat(expectedIncreaseRevenue));
        this.financialSummary.expectedIncreaseGrossProfit = Math.round(result);
        break;
      }
      case 'CurrentProfit': {
        const { currentRevenue, netProfitMargin } = toJS(this.financialSummary);
        const result = ((parseFloat(netProfitMargin)) / 100 * parseFloat(currentRevenue));
        this.financialSummary.currentProfit = Math.round(result);
        break;
      }
      case 'GrossProfit': {
        const { currentRevenue, grossProfitMargin } = toJS(this.financialSummary);
        const result = ((parseFloat(grossProfitMargin)) / 100 * parseFloat(currentRevenue));
        this.financialSummary.grossProfit = Math.round(result);
        break;
      }
      case 'VariableCost': {
        const status = Number(this.costs.variableimpact) > 0;
        const { currentRevenue, grossProfitMargin } = toJS(this.financialSummary);
        const a = Number(currentRevenue) * (1 - (Number(grossProfitMargin) / 100));
        const b = (status) ? (Number(this.costs.variableimpact) / 100) : (Number(this.costs.defaultvariableimpact) / 100);
        const result = a * b;
        this.financialSummary.variableCost = Math.round(result);
        break;
      }
      case 'FixedCost': {
        const status = Number(this.costs.fixedimpact) > 0;
        const { currentRevenue, grossProfitMargin, netProfitMargin } = toJS(this.financialSummary);
        const gpm = (Number(grossProfitMargin) / 100);
        const npm = (Number(netProfitMargin) / 100);
        const a = Number(currentRevenue) * (gpm - npm);
        const b = (status) ? (Number(this.costs.fixedimpact) / 100) : (Number(this.costs.defaultfixedimpact) / 100);
        const result = a * b;
        this.financialSummary.fixedCost = Math.round(result);
        break;
      }
      case 'BreakEvenPoint': {
        const { fixedCost, grossProfitMargin } = toJS(this.financialSummary);
        let result = Number(fixedCost) / (Number(grossProfitMargin) / 100);
        if (isNaN(result)) {
          result = 0;
        }
        this.financialSummary.breakEvenPoint = Math.round(result);
        break;
      }
      case 'ProfitImpactCostReduced': {
        const { currentProfit } = toJS(this.financialSummary);
        const { amount } = toJS(this.costs);
        const result = Number(currentProfit) + Number(amount);
        this.financialSummary.profitCostReduced = Math.round(result);
        break;
      }
      case 'CurrentExpenses': {
        const { currentRevenue, currentProfit } = toJS(this.financialSummary);
        const result = ((parseFloat(currentRevenue)) - parseFloat(currentProfit));
        this.financialSummary.currentExpenses = Math.round(result);
        break;
      }
      case 'NewAnnualProfit':
        {
          const { currentProfit, totalProfitImpact } = toJS(this.financialSummary);
          const result = parseFloat(currentProfit) + parseFloat(totalProfitImpact);
          this.financialSummary.newAnnualProfit = Math.round(result);
          break;
        }
      case '5YearProfitImpact':
        {
          const { totalProfitImpact } = toJS(this.financialSummary);
          const result = (parseFloat(totalProfitImpact) * 5);
          this.financialSummary.fiveYearProfitImpact = Math.round(result);
          break;
        }
      case 'ActualPercentageImpact':
        {
          const { currentProfit, totalProfitImpact } = toJS(this.financialSummary);
          let result = ((parseFloat(totalProfitImpact) / parseFloat(currentProfit)) * 100);
          if (isNaN(result)) {
            result = 0;
          }
          this.financialSummary.actualPercentageImpact = Math.round(result);
          break;
        }
      case 'TotalProfitImpact': {

        const name = this.moduleSetName();
        if (name === 'ProfitJumpstart') {

          const { grossProfitMargin, netProfitMargin, currentRevenue } = toJS(this.financialSummary);
          const a = (Number(grossProfitMargin) / 100) * Number(currentRevenue);
          const b = this.calculateExpectedIncreaseRevenue();
          const c = a * b;
          const costs = parseFloat(this.costs.amount);
          const prices = (parseFloat(this.prices.impact) / 100) * Number(currentRevenue);
          const result = c + costs + prices;
          this.financialSummary.totalProfitImpact = Math.round(result);

        } else {
          const { amount } = toJS(this.costs);
          const { expectedIncreaseGrossProfit } = toJS(this.financialSummary);
          const result = Number(amount) + Number(expectedIncreaseGrossProfit);
          const pricesRemainder = this.getRestOfIncreasePriceImpact();
          this.financialSummary.totalProfitImpact = Math.round(result) + pricesRemainder;
        }

        break;
      }
      case 'StartingValuation': {
        const { grossProfitMargin, currentRevenue } = toJS(this.financialSummary);
        const responses = toJS(this.valuation.responses);
        const valuation = this.calculateBusinessValuation('start', currentRevenue, grossProfitMargin, responses);
        this.financialSummary.startingValuation = Math.round(Number(valuation));
        break;
      }
      case 'PotentialValuation': {
        const { grossProfitMargin, newAnnualGrossRevenue } = toJS(this.financialSummary);
        const responses = toJS(this.valuation.responses);
        const valuation = this.calculateBusinessValuation('potential', newAnnualGrossRevenue, grossProfitMargin, responses);
        this.financialSummary.potentialValuation = Math.round(Number(valuation));

        break;
      }
      case 'MonthlyGain': {
        const { newAnnualGrossRevenue, currentRevenue } = toJS(this.financialSummary);
        // POWER(newAnnualGrossRevenue / currentRevenue, 1 / 12) - 1
        let result = (Number(newAnnualGrossRevenue) / Number(currentRevenue));
        result = ((result ** (1 / 12)) - 1) * 100; // multiple by 100 to get percentage
        this.financialSummary.monthlyGain = Number(result.toFixed(2));

        break;
      }
      default:
        return null;
    }
    return null;
  }

  saveTabs(value) {
    this.tabs = value;
  }

  saveFinancialSummary(value) {
    this.financialSummary = value;
  }

  saveMaxIncrease(value) {
    this.cumulativeExpectedIncrease = value;
  }

  saveModules(value) {
    this.modules = value;
  }

  saveSelectedAssessment(value) {
    this.selected_assessment = value;
  }

  saveSuccessResponses(value) {
    this.successResponses = value;
  }

  setAdmin(user) {
    this.isAdmin = !!(user && user.role_id === 1);
  }

  setAdvisor(user) {
    this.isAdvisor = !!((user && user.role_id === 11) || user && user.role_id === 12);
  }

  setLicensee(user) {
    this.isLicensee = !!((user && user.role_id === 9));
  }

  saveRoles(value) {
    this.roles = value;
  }

  saveIndustry(value) {
    this.industry = value;
  }

  saveAllCompanies(value) {
    this.allcompanies = value;
  }

  saveAllAssessments(value) {
    this.allassessments = value;
  }

  toggleOneYearImpact(value) {
    this.oneYearImpact = value;
  }

  toggleValuationForecast(value) {
    this.valuationForecast = value;
  }

  saveUsers(value) {
    this.users = value;
  }

  saveOneUser(value) {
    this.users = (this.users) ? [...this.users, value] : [value];
  }

  saveLessons(value) {
    this.lessons = value;
  }

  saveOneLesson(value) {
    this.lesson = (this.lesson) ? [...this.lesson, value] : [value];
  }

  saveGroups(value) {
    this.groups = value;
  }

  saveOneGroup(value) {
    this.group = (this.group) ? [...this.group, value] : [value];
  }

  saveSummary(value) {
    this.summary = (this.summary) ? [...this.summary, value] : [value];
  }

  saveProcessedSummary(value) {
    this.processedsummary = value;
  }

  saveNotes(value) {
    this.notes = value;
  }

  saveModuleSets(value) {
    this.modulesets = value;
  }

  saveTrainingAnalysis(value) {
    this.training_analysis = value;
  }

  saveUserModuleSets(value) {
    this.usermodulesets = value;
  }

  saveTimeZone(value) {
    this.time_zone = value;
  }

  saveCurrencies(value) {
    this.currencies = value;
  }

  saveCompanies(value) {
    this.companies = value;
  }

  addOneCompany(value) {
    this.companies = (this.companies) ? [...this.companies, value] : [value];
  }

  saveCurrencySymbol(value) {
    this.currency_symbol = value;
  }

  saveCompanySelected(value) {
    this.selected_company = value;
  }

  saveUserSelected(value) {
    this.selected_user = value;
  }

  saveLessonSelected(value) {
    this.selected_lesson = value;
  }

  saveGroupSelected(value) {
    this.selected_group = value;
  }

  saveMemberSelected(value) {
    this.selected_member = value;
  }

  saveModuleSetSelected(value) {
    this.selected_moduleset = value;
  }

  saveRoleSelected(value) {
    this.selected_role = value;
  }

  setInitialURL(value) {
    this.initialUrl = value;
  }

  setLoggedIn(value) {
    this.loggedIn = value;
  }

  setShowSpinner(value) {
    this.showSpinner = value;
  }

  setSecondSpinner(value) {
    this.secondSpinner = value;
  }

  saveSingleUsers(value) {
    this.singleUsers = value;
  }

  saveSingleUser(value) {
    this.singleUsers = (this.singleUsers) ? [...this.singleUsers, value] : [value];
  }

  saveMembers(value) {
    this.members = value;
  }

  saveMember(value) {
    this.members = (this.members) ? [...this.members, value] : [value];
  }

  setShowEditSpinner(value) {
    this.showEditSpinner = value;
  }

  setShowModuleSetSpinner(value) {
    this.showModuleSetSpinner = value;
  }

  setError(value) {
    this.error = value;
  }

  setSuccess(value) {
    this.success = value;
  }

  setEditUserError(value) {
    this.editusererror = value;
  }

  setEditUserSuccess(value) {
    this.editusersuccess = value;
  }

  setUser(value) {
    this.user = value;
  }

  setShowLoader(value) {
    this.showLoader = value;
  }

  setLoaderMessage(value) {
    this.loaderMessage = value;
  }

  setAnnualCostOfCoaching(value) {
    this.annualCostOfCoaching = value;
  }

  setMonthlyCostOfCoaching(value) {
    this.monthlyCostOfCoaching = value;
  }

  setSuccessFactor(value) {
    this.successFactor = value;
  }

  setSuccessFactorError(value) {
    this.successFactorError = value;
  }

  saveSelectedModules(value) {
    this.selectedmodules = value;
  }

  saveImpCoaching(value) {
    this.impcoaching = value;
  }

  saveImpSettings(value) {
    this.impsettings = value;
  }

  saveLessonSettings(value) {
    this.lessonsettings = value;
  }

  savePrioritiesModules(value) {
    this.prioritiesmodules = value;
  }

  clearNotices() {
    this.setError(null);
    this.setShowSpinner(false);
    this.setSuccess(null);
  }

  saveAllLessons(value) {
    this.alllessons = value;
  }

  setOtp(value) {
    this.otp = value;
  }

  setOtpData(value) {
    this.otpData = value;
  }

  setShowOtpForm(value) {
    this.showOtpForm = value;
  }

  setOtpVerified(value) {
    this.otpVerified = value;
  }

  setLoginParams(value) {
    this.loginParams = value;
  }

  setUserId(value) {
    this.userId = value;
  }

  setRecaptchaValue(value) {
    this.recaptchaValue = value;
  }

  setRememberMe(value) {
    this.rememberMe = value;
  }

  setDescription(value) {
    this.description = value;
  }

  setOtpFailed(value) {
    this.otpFailed = value
  }

  setReSendOtpDisabled(value) {
    this.reSendOtpDisabled = value
  }

  setShowSpinnerProfilePic(value) {
    this.showSpinnerProfilePic = value;
  }

  setChangePic(value) {
    this.changePic = value;
  }

}

decorate(Properties, {

  // profile picture
  showSpinnerProfilePic: observable,
  
  setShowSpinnerProfilePic: action,

  changePic: observable,

  setChangePic: action,

  user: observable,

  lesson: observable,

  error: observable,

  success: observable,

  initialUrl: observable,

  loggedIn: observable,

  showSpinner: observable,

  secondSpinner: observable,

  currency_symbol: observable,

  time_zone: observable,

  selected_company: observable,

  selected_moduleset: observable,

  companies: observable,

  showLoader: observable,

  prioritiesmodules: observable,

  industry: observable,

  training_analysis: observable,

  users: observable,

  lessons: observable,

  groups: observable,

  members: observable,

  member: observable,

  currencies: observable,

  modulesets: observable,

  usermodulesets: observable,

  singleUsers: observable,

  notes: observable,

  summary: observable,

  processedsummary: observable,

  isAdmin: observable,

  isAdvisor: observable,

  isLicensee: observable,

  roles: observable,

  selected_role: observable,

  selected_user: observable,

  selected_lesson: observable,

  selected_member: observable,

  selected_group: observable,

  showEditSpinner: observable,

  showModuleSetSpinner: observable,

  oneYearImpact: observable,

  valuationForecast: observable,

  editusererror: observable,

  editusersuccess: observable,

  allcompanies: observable,

  allassessments: observable,

  modules: observable,

  successResponses: observable,

  selected_assessment: observable,

  loaderMessage: observable,

  financialSummary: observable,

  cumulativeExpectedIncrease: observable,

  annualCostOfCoaching: observable,

  monthlyCostOfCoaching: observable,

  successFactor: observable,

  successFactorError: observable,

  selectedmodules: observable,

  impcoaching: observable,

  impsettings: observable,

  lessonsettings: observable,

  tabs: observable,

  savePrioritiesModules: action,

  saveTabs: action,

  clearNotices: action,

  reset: action,

  saveSingleUsers: action,

  saveSingleUser: action,

  saveMember: action,

  saveSummary: action,

  saveProcessedSummary: action,

  saveSelectedModules: action,

  saveImpCoaching: action,

  saveImpSettings: action,

  saveLessonSettings: action,

  saveCurrencySymbol: action,

  saveTimeZone: action,

  saveCompanySelected: action,

  saveModuleSetSelected: action,

  saveRoleSelected: action,

  setInitialURL: action,

  setShowSpinner: action,

  setSecondSpinner: action,

  setAdmin: action,

  setAdvisor: action,

  setLicensee: action,

  setLoggedIn: action,

  setError: action,

  setSuccess: action,

  setUser: action,

  setMember: action,

  setLesson: action,

  saveCompanies: action,

  addOneCompany: action,

  saveCurrencies: action,

  saveModuleSets: action,

  saveUserModuleSets: action,

  saveNotes: action,

  setShowLoader: action,

  saveUsers: action,

  saveLessons: action,

  saveMembers: action,

  saveOneLesson: action,

  saveGroups: action,

  saveOneGroup: action,

  saveRoles: action,

  setShowEditSpinner: action,

  setShowModuleSetSpinner: action,

  saveUserSelected: action,

  saveLessonSelected: action,

  saveGroupSelected: action,

  saveMemberSelected: action,

  toggleOneYearImpact: action,

  toggleValuationForecast: action,

  setEditUserError: action,

  setEditUserSuccess: action,

  saveAllAssessments: action,

  saveAllCompanies: action,

  saveTrainingAnalysis: action,

  saveModules: action,

  saveQuestions: action,

  saveResponses: action,

  saveComments: action,

  saveExtras: action,

  saveImpact: action,

  saveMeta: action,

  savePriority: action,

  saveIncrease: action,

  saveHistory: action,

  saveTime: action,

  saveTrail: action,

  saveComplete: action,

  saveAmount: action,

  saveSuccessResponses: action,

  saveSelectedAssessment: action,

  setLoaderMessage: action,

  saveSingleFinancialSummary: action,

  saveFinancialSummary: action,

  saveMaxIncrease: action,

  updateFinancialSummary: action,

  setAnnualCostOfCoaching: action,

  setMonthlyCostOfCoaching: action,

  setSuccessFactor: action,

  setSuccessFactorError: action,

  resetAssessment: action,

  saveAllLessons: action,

  alllessons: observable,

  otp: observable,

  setOtp: action,

  otpData: observable,

  setOtpData: action,

  showOtpForm: observable,

  setShowOtpForm: action,

  otpVerified: observable,

  setOtpVerified: action,

  loginParams: observable,

  setLoginParams: action,

  userId: observable,

  setUserId: action,

  recaptchaValue: observable,

  setRecaptchaValue: action,

  rememberMe: observable,

  setRememberMe: action,

  setDescription: action,

  description: observable,

  otpFailed: observable,

  setOtpFailed: action,

  reSendOtpDisabled: observable,

  setReSendOtpDisabled: action,
  dgintro: observable,
  dgcontent: observable,
  dgwebsite: observable,
  dgemail: observable,
  dgseo: observable,
  dgadvertising: observable,
  dgsocial: observable,
  dgvideo: observable,
  dgmetrics: observable,
  dgmdp: observable,
  dgoffer: observable,
  dgupsell: observable,
  dgdownsell: observable,
  dgcampaign: observable,
  leads: observable,
  mdp: observable,
  products: observable,
  alliances: observable,
  bundling: observable,
  costs: observable,
  downsell: observable,
  campaign: observable,
  prices: observable,
  internet: observable,
  introduction: observable,
  upsell: observable,
  financials: observable,
  valuation: observable,
  foundational: observable,
  salesgeneral: observable,
  salesmanager: observable,
  salescompensation: observable,
  salessuperstars: observable,
  salestraining: observable,
  salesprospecting: observable,
  salesclients: observable,
  salestrade: observable,
  salesdm: observable,
  salesclosing: observable,
  salesorder: observable,
  salesremorse: observable,
  salesreps: observable,
  salesteam: observable,
  sales: observable,
  strategy: observable,
  advertising: observable,
  appointments: observable,
  followupclose: observable,
  initialclose: observable,
  formercustomers: observable,
  longevity: observable,
  mail: observable,
  offer: observable,
  policies: observable,
  publicity: observable,
  purchase: observable,
  referral: observable,
  scripts: observable,
  trust: observable,

});

export default new Properties();