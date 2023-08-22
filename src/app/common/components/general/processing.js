import { toJS } from 'mobx';
import properties from '../../services/properties';
import { saveSalesIncrease, addExpense, moduleSetName } from './helpers';


export const processJS12Increase = (type, impact) => {
    const name = moduleSetName();
    if (!name.includes('Digital')) {
        const props = toJS(properties);
        switch (type) {
            case 'mdp': {
                const mdp = addExpense(props.mdp.expense, impact);
                const a = (parseFloat(mdp) / 100);
                const costs = (parseFloat(props.costs.increase) / 100);
                const newimpact = ((100 * (1 + a) * ((1 + costs) / 100)) - 1);
                const imp = (newimpact * 100);
                properties.saveIncrease(type, Number(imp));
                break;
            }

            case 'offer':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const newimpact = ((100 * (1 + costs) * (1 + a) * ((1 + b) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'prices':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + costs) * ((1 + c) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'upsell':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + costs) * ((1 + d) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'bundling':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const bundling = addExpense(props.bundling.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const e = (parseFloat(bundling) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + costs) * ((1 + e) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'downsell':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const downsell = addExpense(props.downsell.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const e = (parseFloat(bundling) / 100);
                    const f = (parseFloat(downsell) / 100);

                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + costs) * ((1 + f) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'products':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const e = (parseFloat(bundling) / 100);
                    const f = (parseFloat(downsell) / 100);
                    const g = (parseFloat(products) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + costs) * ((1 + g) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'alliances':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const alliances = addExpense(props.alliances.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const e = (parseFloat(bundling) / 100);
                    const f = (parseFloat(downsell) / 100);
                    const g = (parseFloat(products) / 100);
                    const h = (parseFloat(alliances) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * (1 + costs) * ((1 + h) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'campaign':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const campaign = addExpense(props.campaign.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const e = (parseFloat(bundling) / 100);
                    const f = (parseFloat(downsell) / 100);
                    const g = (parseFloat(products) / 100);
                    const h = (parseFloat(alliances) / 100);
                    const i = (parseFloat(campaign) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * (1 + h) * (1 + costs) * ((1 + i) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'leads':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const leads = addExpense(props.leads.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const e = (parseFloat(bundling) / 100);
                    const f = (parseFloat(downsell) / 100);
                    const g = (parseFloat(products) / 100);
                    const h = (parseFloat(alliances) / 100);
                    const i = (parseFloat(campaign) / 100);
                    const j = (parseFloat(leads) / 100);
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
                        * (1 + costs)
                        * ((1 + j) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            case 'internet':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const internet = addExpense(props.internet.expense, impact);
                    const costs = (parseFloat(props.costs.increase) / 100);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(offer) / 100);
                    const c = (parseFloat(prices) / 100);
                    const d = (parseFloat(upsell) / 100);
                    const e = (parseFloat(bundling) / 100);
                    const f = (parseFloat(downsell) / 100);
                    const g = (parseFloat(products) / 100);
                    const h = (parseFloat(alliances) / 100);
                    const i = (parseFloat(campaign) / 100);
                    const j = (parseFloat(leads) / 100);
                    const k = (parseFloat(internet) / 100);
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
                        * (1 + costs)
                        * ((1 + k) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }

            default:
                break;
        }
    }
};


export const processDigitalIncrease = (type, impact) => {
    const name = moduleSetName();
    if (name.includes('Digital')) {
        const props = toJS(properties);
        switch (type) {
            case 'dgcontent':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, impact);
                    properties.saveIncrease(type, Number(dgcontent));
                    break;
                }
            case 'dgwebsite':
                {
                    // =((100*(1+F11)*(1+F12)/100)-100%)
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const newimpact = ((100 * (1 + a) * ((1 + b) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgemail':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * ((1 + c) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgseo':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * ((1 + d) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgadvertising':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * ((1 + e) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgsocial':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * ((1 + f) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgvideo':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * ((1 + g) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgmetrics':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, props.dgvideo.impact);
                    const dgmetrics = addExpense(props.dgmetrics.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const h = (parseFloat(dgmetrics) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * ((1 + h) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'prices':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, props.dgvideo.impact);
                    const dgmetrics = addExpense(props.dgmetrics.expense, props.dgmetrics.impact);
                    const prices = addExpense(props.prices.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const h = (parseFloat(dgmetrics) / 100);
                    const i = (parseFloat(prices) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * (1 + h) * ((1 + i) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgmdp':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, props.dgvideo.impact);
                    const dgmetrics = addExpense(props.dgmetrics.expense, props.dgmetrics.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const dgmdp = addExpense(props.dgmdp.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const h = (parseFloat(dgmetrics) / 100);
                    const i = (parseFloat(prices) / 100);
                    const j = (parseFloat(dgmdp) / 100);
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
                        * ((1 + j) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgoffer':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, props.dgvideo.impact);
                    const dgmetrics = addExpense(props.dgmetrics.expense, props.dgmetrics.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const dgmdp = addExpense(props.dgmdp.expense, props.dgmdp.impact);
                    const dgoffer = addExpense(props.dgoffer.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const h = (parseFloat(dgmetrics) / 100);
                    const i = (parseFloat(prices) / 100);
                    const j = (parseFloat(dgmdp) / 100);
                    const k = (parseFloat(dgoffer) / 100);
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
                        * ((1 + k) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgupsell':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, props.dgvideo.impact);
                    const dgmetrics = addExpense(props.dgmetrics.expense, props.dgmetrics.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const dgmdp = addExpense(props.dgmdp.expense, props.dgmdp.impact);
                    const dgoffer = addExpense(props.dgoffer.expense, props.dgoffer.impact);
                    const dgupsell = addExpense(props.dgupsell.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const h = (parseFloat(dgmetrics) / 100);
                    const i = (parseFloat(prices) / 100);
                    const j = (parseFloat(dgmdp) / 100);
                    const k = (parseFloat(dgoffer) / 100);
                    const l = (parseFloat(dgupsell) / 100);
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
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgdownsell':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, props.dgvideo.impact);
                    const dgmetrics = addExpense(props.dgmetrics.expense, props.dgmetrics.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const dgmdp = addExpense(props.dgmdp.expense, props.dgmdp.impact);
                    const dgoffer = addExpense(props.dgoffer.expense, props.dgoffer.impact);
                    const dgupsell = addExpense(props.dgupsell.expense, props.dgupsell.impact);
                    const dgdownsell = addExpense(props.dgdownsell.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const h = (parseFloat(dgmetrics) / 100);
                    const i = (parseFloat(prices) / 100);
                    const j = (parseFloat(dgmdp) / 100);
                    const k = (parseFloat(dgoffer) / 100);
                    const l = (parseFloat(dgupsell) / 100);
                    const m = (parseFloat(dgdownsell) / 100);
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
                        * (1 + l)
                        * ((1 + m) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'dgcampaign':
                {
                    const dgcontent = addExpense(props.dgcontent.expense, props.dgcontent.impact);
                    const dgwebsite = addExpense(props.dgwebsite.expense, props.dgwebsite.impact);
                    const dgemail = addExpense(props.dgemail.expense, props.dgemail.impact);
                    const dgseo = addExpense(props.dgseo.expense, props.dgseo.impact);
                    const dgadvertising = addExpense(props.dgadvertising.expense, props.dgadvertising.impact);
                    const dgsocial = addExpense(props.dgsocial.expense, props.dgsocial.impact);
                    const dgvideo = addExpense(props.dgvideo.expense, props.dgvideo.impact);
                    const dgmetrics = addExpense(props.dgmetrics.expense, props.dgmetrics.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const dgmdp = addExpense(props.dgmdp.expense, props.dgmdp.impact);
                    const dgoffer = addExpense(props.dgoffer.expense, props.dgoffer.impact);
                    const dgupsell = addExpense(props.dgupsell.expense, props.dgupsell.impact);
                    const dgdownsell = addExpense(props.dgdownsell.expense, props.dgdownsell.impact);
                    const dgcampaign = addExpense(props.dgcampaign.expense, impact);

                    const a = (parseFloat(dgcontent) / 100);
                    const b = (parseFloat(dgwebsite) / 100);
                    const c = (parseFloat(dgemail) / 100);
                    const d = (parseFloat(dgseo) / 100);
                    const e = (parseFloat(dgadvertising) / 100);
                    const f = (parseFloat(dgsocial) / 100);
                    const g = (parseFloat(dgvideo) / 100);
                    const h = (parseFloat(dgmetrics) / 100);
                    const i = (parseFloat(prices) / 100);
                    const j = (parseFloat(dgmdp) / 100);
                    const k = (parseFloat(dgoffer) / 100);
                    const l = (parseFloat(dgupsell) / 100);
                    const m = (parseFloat(dgdownsell) / 100);
                    const n = (parseFloat(dgcampaign) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * ((1 + n) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            default:
                break;
        }
    }
};


export const processIncrease = (type, impact) => {
    const name = moduleSetName();
    if (name && !name.includes('Digital')) {
        const props = toJS(properties);
        switch (type) {
            case 'mdp':
                properties.saveIncrease(type, Number(impact));
                break;
            case 'strategy':
                {
                    // =((100*(1+F11)*(1+F12)/100)-100%)
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const newimpact = ((100 * (1 + a) * ((1 + b) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'trust':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * ((1 + c) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'policies':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * ((1 + d) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'leads':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * ((1 + e) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'alliances':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);

                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * ((1 + f) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'referral':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * ((1 + g) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'internet':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * ((1 + h) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'publicity':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * (1 + h) * ((1 + i) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'mail':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
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
                        * ((1 + j) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'advertising':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
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
                        * ((1 + k) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'offer':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
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
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'scripts':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
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
                        * (1 + l)
                        * ((1 + m) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'initialclose':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * ((1 + n) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'followupclose':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * ((1 + o) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'campaign':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * ((1 + p) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'formercustomers':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * ((1 + q) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'appointments':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * ((1 + r) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'downsell':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * ((1 + s) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'products':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * ((1 + t) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'purchase':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * ((1 + u) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'prices':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * ((1 + v) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'upsell':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * ((1 + w) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'longevity':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * ((1 + x) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'bundling':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * ((1 + y) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'salesteam':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesteam = addExpense(props.salesteam.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesteam) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * ((1 + z) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'salesgeneral':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * ((1 + z) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salesmanager':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * ((1 + zz) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salescompensation':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * ((1 + aa) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salessuperstars':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
                    const salessuperstars = addExpense(props.salessuperstars.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * ((1 + ab) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salestraining':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
                    const salessuperstars = addExpense(props.salessuperstars.expense, props.salessuperstars.impact);
                    const salestraining = addExpense(props.salestraining.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * ((1 + ac) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salesprospecting':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
                    const salessuperstars = addExpense(props.salessuperstars.expense, props.salessuperstars.impact);
                    const salestraining = addExpense(props.salestraining.expense, props.salestraining.impact);
                    const salesprospecting = addExpense(props.salesprospecting.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
                    const ad = (parseFloat(salesprospecting) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * (1 + ac)
                        * ((1 + ad) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salesclients':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
                    const salessuperstars = addExpense(props.salessuperstars.expense, props.salessuperstars.impact);
                    const salestraining = addExpense(props.salestraining.expense, props.salestraining.impact);
                    const salesprospecting = addExpense(props.salesprospecting.expense, props.salesprospecting.impact);
                    const salesclients = addExpense(props.salesclients.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
                    const ad = (parseFloat(salesprospecting) / 100);
                    const ae = (parseFloat(salesclients) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * (1 + ac)
                        * (1 + ad)
                        * ((1 + ae) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salestrade':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
                    const salessuperstars = addExpense(props.salessuperstars.expense, props.salessuperstars.impact);
                    const salestraining = addExpense(props.salestraining.expense, props.salestraining.impact);
                    const salesprospecting = addExpense(props.salesprospecting.expense, props.salesprospecting.impact);
                    const salesclients = addExpense(props.salesclients.expense, props.salesclients.impact);
                    const salestrade = addExpense(props.salestrade.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
                    const ad = (parseFloat(salesprospecting) / 100);
                    const ae = (parseFloat(salesclients) / 100);
                    const af = (parseFloat(salestrade) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * (1 + ac)
                        * (1 + ad)
                        * (1 + ae)
                        * ((1 + af) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salesdm':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
                    const salessuperstars = addExpense(props.salessuperstars.expense, props.salessuperstars.impact);
                    const salestraining = addExpense(props.salestraining.expense, props.salestraining.impact);
                    const salesprospecting = addExpense(props.salesprospecting.expense, props.salesprospecting.impact);
                    const salesclients = addExpense(props.salesclients.expense, props.salesclients.impact);
                    const salestrade = addExpense(props.salestrade.expense, props.salestrade.impact);
                    const salesdm = addExpense(props.salesdm.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
                    const ad = (parseFloat(salesprospecting) / 100);
                    const ae = (parseFloat(salesclients) / 100);
                    const af = (parseFloat(salestrade) / 100);
                    const ag = (parseFloat(salesdm) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * (1 + ac)
                        * (1 + ad)
                        * (1 + ae)
                        * (1 + af)
                        * ((1 + ag) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salesclosing':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const salesgeneral = addExpense(props.salesgeneral.expense, props.salesgeneral.impact);
                    const salesmanager = addExpense(props.salesmanager.expense, props.salesmanager.impact);
                    const salescompensation = addExpense(props.salescompensation.expense, props.salescompensation.impact);
                    const salessuperstars = addExpense(props.salessuperstars.expense, props.salessuperstars.impact);
                    const salestraining = addExpense(props.salestraining.expense, props.salestraining.impact);
                    const salesprospecting = addExpense(props.salesprospecting.expense, props.salesprospecting.impact);
                    const salesclients = addExpense(props.salesclients.expense, props.salesclients.impact);
                    const salestrade = addExpense(props.salestrade.expense, props.salestrade.impact);
                    const salesdm = addExpense(props.salesdm.expense, props.salesdm.impact);
                    const salesclosing = addExpense(props.salesclosing.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
                    const ad = (parseFloat(salesprospecting) / 100);
                    const ae = (parseFloat(salesclients) / 100);
                    const af = (parseFloat(salestrade) / 100);
                    const ag = (parseFloat(salesdm) / 100);
                    const ah = (parseFloat(salesclosing) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * (1 + ac)
                        * (1 + ad)
                        * (1 + ae)
                        * (1 + af)
                        * (1 + ag)
                        * ((1 + ah) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salesorder':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
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
                    const salesorder = addExpense(props.salesorder.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
                    const ad = (parseFloat(salesprospecting) / 100);
                    const ae = (parseFloat(salesclients) / 100);
                    const af = (parseFloat(salestrade) / 100);
                    const ag = (parseFloat(salesdm) / 100);
                    const ah = (parseFloat(salesclosing) / 100);
                    const ai = (parseFloat(salesorder) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * (1 + ac)
                        * (1 + ad)
                        * (1 + ae)
                        * (1 + af)
                        * (1 + ag)
                        * (1 + ah)
                        * ((1 + ai) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            case 'salesremorse':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const prices = addExpense(props.prices.expense, props.prices.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, props.longevity.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
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
                    const salesremorse = addExpense(props.salesremorse.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(scripts) / 100);
                    const n = (parseFloat(initialclose) / 100);
                    const o = (parseFloat(followupclose) / 100);
                    const p = (parseFloat(campaign) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(appointments) / 100);
                    const s = (parseFloat(downsell) / 100);
                    const t = (parseFloat(products) / 100);
                    const u = (parseFloat(purchase) / 100);
                    const v = (parseFloat(prices) / 100);
                    const w = (parseFloat(upsell) / 100);
                    const x = (parseFloat(longevity) / 100);
                    const y = (parseFloat(bundling) / 100);
                    const z = (parseFloat(salesgeneral) / 100);
                    const zz = (parseFloat(salesmanager) / 100);
                    const aa = (parseFloat(salescompensation) / 100);
                    const ab = (parseFloat(salessuperstars) / 100);
                    const ac = (parseFloat(salestraining) / 100);
                    const ad = (parseFloat(salesprospecting) / 100);
                    const ae = (parseFloat(salesclients) / 100);
                    const af = (parseFloat(salestrade) / 100);
                    const ag = (parseFloat(salesdm) / 100);
                    const ah = (parseFloat(salesclosing) / 100);
                    const ai = (parseFloat(salesorder) / 100);
                    const aj = (parseFloat(salesremorse) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * (1 + y)
                        * (1 + z)
                        * (1 + zz)
                        * (1 + aa)
                        * (1 + ab)
                        * (1 + ac)
                        * (1 + ad)
                        * (1 + ae)
                        * (1 + af)
                        * (1 + ag)
                        * (1 + ah)
                        * (1 + ai)
                        * ((1 + aj) / 100)) - 1);
                    const imp = (newimpact * 100);

                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    saveSalesIncrease();
                    break;
                }
            default:
                break;
        }
    }
};


export const processJS40Increase = (type, impact) => {
    const name = moduleSetName();
    if (name == 'Jumpstart40') {
        const props = toJS(properties);
        switch (type) {
            case 'mdp':
                properties.saveIncrease(type, Number(impact));
                break;
            case 'strategy':
                {
                    // =((100*(1+F11)*(1+F12)/100)-100%)
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const newimpact = ((100 * (1 + a) * ((1 + b) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'trust':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * ((1 + c) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'policies':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * ((1 + d) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'leads':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * ((1 + e) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'alliances':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);

                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * ((1 + f) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'referral':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * ((1 + g) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'internet':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * ((1 + h) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'publicity':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const newimpact = ((100 * (1 + a) * (1 + b) * (1 + c) * (1 + d) * (1 + e) * (1 + f) * (1 + g) * (1 + h) * ((1 + i) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'mail':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
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
                        * ((1 + j) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'advertising':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
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
                        * ((1 + k) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'offer':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
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
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'campaign':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
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
                        * (1 + l)
                        * ((1 + m) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'scripts':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * ((1 + n) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'initialclose':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * ((1 + o) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'followupclose':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * ((1 + p) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'formercustomers':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * ((1 + q) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'salesteam':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * ((1 + r) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'appointments':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, props.salesteam.impact);
                    const appointments = addExpense(props.appointments.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
                    const s = (parseFloat(appointments) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * ((1 + s) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'downsell':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, props.salesteam.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
                    const s = (parseFloat(appointments) / 100);
                    const t = (parseFloat(downsell) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * ((1 + t) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'products':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, props.salesteam.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
                    const s = (parseFloat(appointments) / 100);
                    const t = (parseFloat(downsell) / 100);
                    const u = (parseFloat(products) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * ((1 + u) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'purchase':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, props.salesteam.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
                    const s = (parseFloat(appointments) / 100);
                    const t = (parseFloat(downsell) / 100);
                    const u = (parseFloat(products) / 100);
                    const v = (parseFloat(purchase) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * ((1 + v) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'bundling':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, props.salesteam.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const bundling = addExpense(props.bundling.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
                    const s = (parseFloat(appointments) / 100);
                    const t = (parseFloat(downsell) / 100);
                    const u = (parseFloat(products) / 100);
                    const v = (parseFloat(purchase) / 100);
                    const w = (parseFloat(bundling) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * ((1 + w) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'upsell':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, props.salesteam.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const upsell = addExpense(props.upsell.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
                    const s = (parseFloat(appointments) / 100);
                    const t = (parseFloat(downsell) / 100);
                    const u = (parseFloat(products) / 100);
                    const v = (parseFloat(purchase) / 100);
                    const w = (parseFloat(bundling) / 100);
                    const x = (parseFloat(upsell) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * ((1 + x) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'longevity':
                {
                    const mdp = addExpense(props.mdp.expense, props.mdp.impact);
                    const strategy = addExpense(props.strategy.expense, props.strategy.impact);
                    const trust = addExpense(props.trust.expense, props.trust.impact);
                    const policies = addExpense(props.policies.expense, props.policies.impact);
                    const leads = addExpense(props.leads.expense, props.leads.impact);
                    const alliances = addExpense(props.alliances.expense, props.alliances.impact);
                    const referral = addExpense(props.referral.expense, props.referral.impact);
                    const internet = addExpense(props.internet.expense, props.internet.impact);
                    const publicity = addExpense(props.publicity.expense, props.publicity.impact);
                    const mail = addExpense(props.mail.expense, props.mail.impact);
                    const advertising = addExpense(props.advertising.expense, props.advertising.impact);
                    const offer = addExpense(props.offer.expense, props.offer.impact);
                    const campaign = addExpense(props.campaign.expense, props.campaign.impact);
                    const scripts = addExpense(props.scripts.expense, props.scripts.impact);
                    const initialclose = addExpense(props.initialclose.expense, props.initialclose.impact);
                    const followupclose = addExpense(props.followupclose.expense, props.followupclose.impact);
                    const formercustomers = addExpense(props.formercustomers.expense, props.formercustomers.impact);
                    const salesteam = addExpense(props.salesteam.expense, props.salesteam.impact);
                    const appointments = addExpense(props.appointments.expense, props.appointments.impact);
                    const downsell = addExpense(props.downsell.expense, props.downsell.impact);
                    const products = addExpense(props.products.expense, props.products.impact);
                    const purchase = addExpense(props.purchase.expense, props.purchase.impact);
                    const bundling = addExpense(props.bundling.expense, props.bundling.impact);
                    const upsell = addExpense(props.upsell.expense, props.upsell.impact);
                    const longevity = addExpense(props.longevity.expense, impact);

                    const a = (parseFloat(mdp) / 100);
                    const b = (parseFloat(strategy) / 100);
                    const c = (parseFloat(trust) / 100);
                    const d = (parseFloat(policies) / 100);
                    const e = (parseFloat(leads) / 100);
                    const f = (parseFloat(alliances) / 100);
                    const g = (parseFloat(referral) / 100);
                    const h = (parseFloat(internet) / 100);
                    const i = (parseFloat(publicity) / 100);
                    const j = (parseFloat(mail) / 100);
                    const k = (parseFloat(advertising) / 100);
                    const l = (parseFloat(offer) / 100);
                    const m = (parseFloat(campaign) / 100);
                    const n = (parseFloat(scripts) / 100);
                    const o = (parseFloat(initialclose) / 100);
                    const p = (parseFloat(followupclose) / 100);
                    const q = (parseFloat(formercustomers) / 100);
                    const r = (parseFloat(salesteam) / 100);
                    const s = (parseFloat(appointments) / 100);
                    const t = (parseFloat(downsell) / 100);
                    const u = (parseFloat(products) / 100);
                    const v = (parseFloat(purchase) / 100);
                    const w = (parseFloat(bundling) / 100);
                    const x = (parseFloat(upsell) / 100);
                    const y = (parseFloat(longevity) / 100);
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
                        * (1 + l)
                        * (1 + m)
                        * (1 + n)
                        * (1 + o)
                        * (1 + p)
                        * (1 + q)
                        * (1 + r)
                        * (1 + s)
                        * (1 + t)
                        * (1 + u)
                        * (1 + v)
                        * (1 + w)
                        * (1 + x)
                        * ((1 + y) / 100)) - 1);
                    const imp = (newimpact * 100);
                    properties.saveIncrease(type, Number(imp.toFixed(1)));
                    break;
                }
            case 'prices':
                {
                    properties.saveIncrease(type, 0);
                    break;
                }
            default:
                break;
        }
    }
};