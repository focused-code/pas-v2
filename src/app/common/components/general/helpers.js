import { toJS } from 'mobx';
import properties from '../../services/properties';


export const moduleSetName = () => {
    const assessment = toJS(properties.selected_assessment);
    if (assessment) {
        const { module_set_name } = assessment;
        return module_set_name;
    }
    return null;
};


export const addExpense = (expense, impact) => {
    if (expense > 0) {
        // Add expense to impact percentage
        return (1 - (parseFloat(expense) / 100)) * parseFloat(impact);
    }
    return impact;
};


export const getImpactAmount = (path, impact) => {
    const revenue = toJS(properties.financialSummary.currentRevenue);

    let npath = path;

    if (npath.length === 0) {
        const array = toJS(properties.initialUrl).split('/');
        npath = array[array.length - 1];
    }

    const { expense } = toJS(properties[npath]);

    // Add expense to impact percentage
    const actual_impact = (impact > 0) ? (1 - (parseFloat(expense) / 100)) * parseFloat(impact) : 0;

    const amount = (actual_impact > 0) ? (parseFloat(actual_impact) / 100) * parseFloat(revenue) : 0;

    return Math.round(amount);
};


export const processSalesImpact = (increase) => {
    const amount = getImpactAmount('sales', increase);
    properties.saveAmount('sales', amount);
    properties.saveImpact('sales', increase);
};


export const saveSalesIncrease = () => {
    const props = toJS(properties);

    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
    const salessuperstars = addExpense(props.salessuperstars.expense, props.salessuperstars.impact);
    const salestraining = addExpense(props.salestraining.expense, props.salestraining.impact);
    const salesprospecting = addExpense(props.salesprospecting.expense, props.salesprospecting.impact);
    const salesclients = addExpense(props.salesclients.expense, props.salesclients.impact);
    const salestrade = addExpense(props.salestrade.expense, props.salestrade.impact);
    const salesdm = addExpense(props.salesdm.expense, props.salesdm.impact);
    const salesclosing = addExpense(props.salesclosing.expense, props.salesclosing.impact);
    const salesorder = addExpense(props.salesorder.expense, props.salesorder.impact);
    const salesremorse = addExpense(props.salesremorse.expense, props.salesremorse.impact);

    const a = (parseFloat(salesgeneral) / 100);
    const b = (parseFloat(salesmanager) / 100);
    const c = (parseFloat(salescompensation) / 100);
    const d = (parseFloat(salessuperstars) / 100);
    const e = (parseFloat(salestraining) / 100);
    const f = (parseFloat(salesprospecting) / 100);
    const g = (parseFloat(salesclients) / 100);
    const h = (parseFloat(salestrade) / 100);
    const i = (parseFloat(salesdm) / 100);
    const j = (parseFloat(salesclosing) / 100);
    const k = (parseFloat(salesorder) / 100);
    const l = (parseFloat(salesremorse) / 100);
    const newimpact = ((100
        * (1 + a)
        * (1 + b)
        * (1 + c)
        * (1 + d)
        * (1 + e)
        * (1 + f)
        * (1 + g)
        * (1 + h)
        * (1 + i)
        * (1 + j)
        * (1 + k)
        * ((1 + l) / 100)) - 1);
    const imp = (newimpact * 100);
    const result = Number(imp.toFixed(1));
    properties.saveIncrease('sales', result);
    processSalesImpact(result);
};


export const impactmodules = [
    'Coremdp',
    'Corestrategy',
    'Coretrust',
    'Corepolicies',
    'Coreleads',
    'Corealliances',
    'Corereferral',
    'Coreinternetmarketing',
    'Corepublicity',
    'Coremail',
    'Coreadvertising',
    'Corecompellingoffer',
    'Coredripcampaign',
    'Corescripts',
    'Coreinitialclose',
    'Corefollowupclose',
    'Corereactivatecustomers',
    'Coreappointments',
    'Coredownsell',
    'Coreadditionalproducts',
    'Coreincreasepurchases',
    'Coreincreaseprice',
    'Corebundling',
    'Coreupsellcrosssell',
    'Coreincreaselongevity',
    'Corecutcosts',
    'Coresales',
    'Additionalproductsservices',
    'Alliances',
    'Bundling',
    'CutCosts',
    'Downsell',
    'Dripcampaign',
    'Increasepricemay2019',
    'InternetMarketing',
    'Leadsmay2019',
    'Usp',
    'Strategy',
    'Trust',
    'Policies',
    'Referral',
    'Publicity',
    'DirectMail',
    'Advertising',
    'CompellingOffer',
    'Scripts',
    'InitialCloseRate',
    'FollowUpCloseRate',
    'ReactivateCustomers',
    'Appointments',
    'IncreaseFrequency',
    'IncreaseLongevity',
    'SalesForceGeneral',
    'SalesForceSalesManager',
    'SalesForceCompensation',
    'SalesForceSuperstar',
    'SalesForceTraining',
    'SalesForceProspectingAndList',
    'SalesForceDreamClients',
    'SalesForceTradeShows',
    'SalesForceDealingWithDm',
    'SalesForceClosingTheSale',
    'SalesForceOrderFulfillment',
    'SalesForceBuyersRemorse',
    'Upsell',
    'Valuation',
    'DigitalIntroduction',
    'DigitalContent',
    'DigitalWebsite',
    'DigitalEmail',
    'DigitalSeo',
    'DigitalAdvertising',
    'DigitalSocial',
    'DigitalVideo',
    'DigitalMetrics',
    'DigitalCutCosts',
    'DigitalMdp',
    'DigitalOffer',
    'DigitalUpsell',
    'DigitalDownsell',
    'DigitalCampaign',
    'DigitalPrices',
];


export const getModuleSummaryPage = () => ({
    leads: toJS(properties.leads),
    mdp: toJS(properties.mdp),
    products: toJS(properties.products),
    alliances: toJS(properties.alliances),
    bundling: toJS(properties.bundling),
    costs: toJS(properties.costs),
    downsell: toJS(properties.downsell),
    campaign: toJS(properties.campaign),
    prices: toJS(properties.prices),
    internet: toJS(properties.internet),
    introduction: toJS(properties.introduction),
    upsell: toJS(properties.upsell),
    financials: toJS(properties.financials),
    valuation: toJS(properties.valuation),
    foundational: toJS(properties.foundational),
    advertising: toJS(properties.advertising),
    appointments: toJS(properties.appointments),
    followupclose: toJS(properties.followupclose),
    initialclose: toJS(properties.initialclose),
    formercustomers: toJS(properties.formercustomers),
    longevity: toJS(properties.longevity),
    mail: toJS(properties.mail),
    offer: toJS(properties.offer),
    policies: toJS(properties.policies),
    publicity: toJS(properties.publicity),
    purchase: toJS(properties.purchase),
    referral: toJS(properties.referral),
    scripts: toJS(properties.scripts),
    strategy: toJS(properties.strategy),
    trust: toJS(properties.trust),
    salesgeneral: toJS(properties.salesgeneral),
    salesmanager: toJS(properties.salesmanager),
    salescompensation: toJS(properties.salescompensation),
    salessuperstars: toJS(properties.salessuperstars),
    salestraining: toJS(properties.salestraining),
    salesprospecting: toJS(properties.salesprospecting),
    salesclients: toJS(properties.salesclients),
    salestrade: toJS(properties.salestrade),
    salesdm: toJS(properties.salesdm),
    salesclosing: toJS(properties.salesclosing),
    salesorder: toJS(properties.salesorder),
    salesremorse: toJS(properties.salesremorse),
    salesteam: toJS(properties.salesteam),
    dgcontent: toJS(properties.dgcontent),
    dgwebsite: toJS(properties.dgwebsite),
    dgemail: toJS(properties.dgemail),
    dgseo: toJS(properties.dgseo),
    dgadvertising: toJS(properties.dgadvertising),
    dgsocial: toJS(properties.dgsocial),
    dgvideo: toJS(properties.dgvideo),
    dgmetrics: toJS(properties.dgmetrics),
    dgmdp: toJS(properties.dgmdp),
    dgoffer: toJS(properties.dgoffer),
    dgupsell: toJS(properties.dgupsell),
    dgdownsell: toJS(properties.dgdownsell),
    dgcampaign: toJS(properties.dgcampaign),
});


export const getModuleSummary = () => ({
    leads: toJS(properties.leads),
    mdp: toJS(properties.mdp),
    products: toJS(properties.products),
    alliances: toJS(properties.alliances),
    bundling: toJS(properties.bundling),
    costs: toJS(properties.costs),
    downsell: toJS(properties.downsell),
    campaign: toJS(properties.campaign),
    prices: toJS(properties.prices),
    internet: toJS(properties.internet),
    introduction: toJS(properties.introduction),
    upsell: toJS(properties.upsell),
    financials: toJS(properties.financials),
    valuation: toJS(properties.valuation),
    foundational: toJS(properties.foundational),
    advertising: toJS(properties.advertising),
    appointments: toJS(properties.appointments),
    followupclose: toJS(properties.followupclose),
    initialclose: toJS(properties.initialclose),
    formercustomers: toJS(properties.formercustomers),
    longevity: toJS(properties.longevity),
    mail: toJS(properties.mail),
    offer: toJS(properties.offer),
    policies: toJS(properties.policies),
    publicity: toJS(properties.publicity),
    purchase: toJS(properties.purchase),
    referral: toJS(properties.referral),
    scripts: toJS(properties.scripts),
    strategy: toJS(properties.strategy),
    trust: toJS(properties.trust),
    sales: toJS(properties.sales),
    salesteam: toJS(properties.salesteam),
    dgintro: toJS(properties.dgintro),
    dgcontent: toJS(properties.dgcontent),
    dgwebsite: toJS(properties.dgwebsite),
    dgemail: toJS(properties.dgemail),
    dgseo: toJS(properties.dgseo),
    dgadvertising: toJS(properties.dgadvertising),
    dgsocial: toJS(properties.dgsocial),
    dgvideo: toJS(properties.dgvideo),
    dgmetrics: toJS(properties.dgmetrics),
    dgmdp: toJS(properties.dgmdp),
    dgoffer: toJS(properties.dgoffer),
    dgupsell: toJS(properties.dgupsell),
    dgdownsell: toJS(properties.dgdownsell),
    dgcampaign: toJS(properties.dgcampaign),
});


export const getTitle = (pathname) => {
    const array = pathname.split('/');

    const url = (array.length > 4) ? array[array.length - 2] : array[array.length - 1];

    switch (url) {
        case 'dgcontent':
            return 'Content Marketing';
        case 'dgwebsite':
            return 'Website Optimization';
        case 'dgemail':
            return 'Email Marketing';
        case 'dgseo':
            return 'Search Engine Optimization';
        case 'dgsocial':
            return 'Social Media';
        case 'dgvideo':
            return 'Video Marketing';
        case 'dgmetrics':
            return 'Metrics & KPIs';
        case 'dgupsell':
            return 'One Time Offers & Cross-sell';
        case 'dgdownsell':
            return 'Downsell & Pop-Up Windows';
        case 'dgcampaign':
            return 'List Building & Drip Campaign';
        case 'upgrade':
            return 'Upgrade Account';
        case 'summary':
            return 'Summary';
        case 'priorities':
            return 'Priorities';
        case 'implementation':
            return 'Implementation';
        case 'meeting-notes':
            return 'Meeting Notes';
        case 'roi':
            return 'Coaching ROI';
        case 'agreements':
            return 'Agreements';
        case 'guides':
            return 'Strategies';
        case 'leads':
            return 'Leads';
        case 'mdp':
        case 'dgmdp':
            return 'Market Dominating Position';
        case 'alliances':
            return 'Alliances & Joint Ventures';
        case 'internet':
            return 'Digital Marketing';
        case 'downsell':
            return 'Downsell';
        case 'upsell':
            return 'Upsell & Cross-sell';
        case 'campaign':
            return 'Drip Campaign';
        case 'products':
            return 'Additional Products & Services';
        case 'bundling':
            return 'Bundling';
        case 'prices':
            return 'Increase Prices';
        case 'costs': {
            const name = moduleSetName();
            return (name && name.includes('Digital')) ? 'Digital Costs & Increase Margins' : 'Cut Costs';
        }
        case 'financials':
            return 'Financials';
        case 'valuation':
            return 'Valuation';
        case 'introduction':
        case 'dgintro':
            return 'Introduction';
        case 'foundational':
            return 'Foundational';
        case 'success':
            return 'Success Gauge';
        case 'reports':
            return 'Reports';
        case 'salesgeneral':
            return 'Sales General Questions';
        case 'salesmanager':
            return 'Sales Manager';
        case 'salescompensation':
            return 'Sales Compensation';
        case 'salessuperstars':
            return 'Sales Superstars';
        case 'salestraining':
            return 'Sales Training';
        case 'salesprospecting':
            return 'Sales Prospecting and Lists';
        case 'salesclients':
            return 'Sales Dream Clients';
        case 'salestrade':
            return 'Sales Trade Shows';
        case 'salesdm':
            return 'Sales Dealing With Decision Makers';
        case 'salesclosing':
            return 'Sales Closing The Sale';
        case 'salesorder':
            return 'Sales Order Fulfillment';
        case 'salesremorse':
            return 'Sales Buyers Remorse';
        case 'salesteam':
            return 'Sales Team';
        case 'strategy':
            return 'Strategy';
        case 'trust':
            return 'Trust, Expertise, Education';
        case 'policies':
            return 'Policies & Procedures';
        case 'referral':
            return 'Referral Systems';
        case 'publicity':
            return 'Publicity & PR';
        case 'mail':
            return 'Direct Mail';
        case 'advertising':
        case 'dgadvertising':
            return 'Advertising';
        case 'dgoffer':
        case 'offer':
            return 'Compelling Offer';
        case 'scripts':
            return 'Scripts';
        case 'initialclose':
            return 'Initial Close Rate';
        case 'followupclose':
            return 'Follow-up Close Rate';
        case 'formercustomers':
            return 'Reactivate Former Customers';
        case 'appointments':
            return 'More Appointments';
        case 'purchase':
            return 'Increase Frequency of Purchase';
        case 'longevity':
            return 'Increase Longevity';
        default:
            return null;
    }
};

export const getAlias = (name) => {
    switch (name) {
        case 'planning-meeting':
            return 'Planning Meeting';
        case 'quarterly-review':
            return 'Quarterly Review';
        case 'dgcontent':
            return 'Content Marketing';
        case 'dgwebsite':
            return 'Website Optimization';
        case 'dgemail':
            return 'Email Marketing';
        case 'dgseo':
            return 'Search Engine Optimization';
        case 'dgsocial':
            return 'Social Media';
        case 'dgvideo':
            return 'Video Marketing';
        case 'dgmetrics':
            return 'Metrics & KPIs';
        case 'dgupsell':
            return 'One Time Offers & Cross-sell';
        case 'dgdownsell':
            return 'Downsell & Pop-Up Windows';
        case 'dgcampaign':
            return 'List Building & Drip Campaign';
        case 'products':
            return 'Additional Products & Services';
        case 'alliances':
            return 'Alliances & Joint Ventures';
        case 'bundling':
            return 'Bundling';
        case 'costs': {
            const mname = moduleSetName();
            return (mname && mname.includes('Digital')) ? 'Digital Costs & Increase Margins' : 'Cut Costs';
        }
        case 'downsell':
            return 'Downsell';
        case 'campaign':
            return 'Drip Campaign';
        case 'prices':
            return 'Increase Prices';
        case 'internet':
            return 'Digital Marketing';
        case 'introduction':
        case 'dgintro':
            return 'Introduction';
        case 'leads':
            return 'Leads';
        case 'mdp':
        case 'dgmdp':
            return 'Market Dominating Position';
        case 'upsell':
            return 'Upsell & Cross-sell';
        case 'foundational':
            return 'Foundational';
        case 'financials':
            return 'Financials';
        case 'valuation':
            return 'Valuation';
        case 'salesgeneral':
            return 'General Questions';
        case 'salesmanager':
            return 'Sales Manager';
        case 'salescompensation':
            return 'Compensation';
        case 'salessuperstars':
            return 'Superstars';
        case 'salestraining':
            return 'Training';
        case 'salesprospecting':
            return 'Prospecting and Lists';
        case 'salesclients':
            return 'Dream Clients';
        case 'salestrade':
            return 'Trade Shows';
        case 'salesdm':
            return 'Dealing With Decision Makers';
        case 'salesclosing':
            return 'Closing the Sale';
        case 'salesorder':
            return 'Order Fulfillment';
        case 'salesremorse':
            return 'Buyers Remorse';
        case 'salesteam':
            return 'Sales Team';
        case 'strategy':
            return 'Strategy';
        case 'trust':
            return 'Trust, Expertise, Education';
        case 'policies':
            return 'Policies & Procedures';
        case 'referral':
            return 'Referral Systems';
        case 'publicity':
            return 'Publicity & PR';
        case 'mail':
            return 'Direct Mail';
        case 'advertising':
        case 'dgadvertising':
            return 'Advertising';
        case 'dgoffer':
        case 'offer':
            return 'Compelling Offer';
        case 'scripts':
            return 'Scripts';
        case 'initialclose':
            return 'Initial Close Rate';
        case 'followupclose':
            return 'Follow-up Close Rate';
        case 'formercustomers':
            return 'Reactivate Former Customers';
        case 'appointments':
            return 'More Appointments';
        case 'purchase':
            return 'Increase Frequency of Purchase';
        case 'longevity':
            return 'Increase Longevity';
        default:
            return null;
    }
};
