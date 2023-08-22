import { observer, inject } from 'mobx-react';
import { NumericFormat } from 'react-number-format';
import { useLocation } from 'react-router-dom';
import { toJS } from 'mobx';
import { withRouter } from '../../helpers';
import { getTitle } from '../general/helpers';

const TSummary = inject('properties')(observer((props) => {
  const { properties } = props;
  const assessment = toJS(properties.selected_assessment);
  const { pathname } = useLocation();
  const company = () => ((assessment) ? assessment.company_name : null);
  const { financialSummary } = properties;


  const summary = toJS(financialSummary);

  const symbol = (assessment) ? assessment.currency.code.trim() : '$';

  const business_type = (assessment && assessment?.business_type) ? ((assessment?.business_type == 'Other - No AI Included') ? '' : ` - (${assessment?.business_type})`) : '';

  return (
    <section className="top-section">
      <section className="top-row">
        <section className="top-left">
          <h5>{company()}{business_type}</h5>
        </section>
        <section className="top-right">
          <h5>Total Profit Impact: </h5>
          <h5 className="color">
            <NumericFormat value={summary.totalProfitImpact} displayType="text" thousandSeparator prefix={symbol} />
          </h5>
          <h5>/</h5>
          <h5 className="color">{summary.actualPercentageImpact}%+</h5>
        </section>
      </section>
      <section className="bottom-row">
        <section className="cols">
          <h5>{getTitle(pathname)}</h5>
        </section>
        <section className="cols">
          <ul className="revenue">
            <li>Current Revenue<span><NumericFormat value={summary.currentRevenue} displayType="text" thousandSeparator prefix={symbol} /></span></li>
            <li>Expected Increase in Revenue<span><NumericFormat value={summary.expectedIncreaseRevenue} displayType="text" thousandSeparator prefix={symbol} /></span></li>
            <li>New Annual Gross Revenue<span><NumericFormat value={summary.newAnnualGrossRevenue} displayType="text" thousandSeparator prefix={symbol} /></span></li>
          </ul>
        </section>
        <section className="cols">
          <ul className="profit">
            <li>Current Profit<span><NumericFormat value={summary.currentProfit} displayType="text" thousandSeparator prefix={symbol} /></span></li>
            <li>New Annual Profit<span><NumericFormat value={summary.newAnnualProfit} displayType="text" thousandSeparator prefix={symbol} /></span></li>
            <li>5 Year Profit Impact<span><NumericFormat value={summary.fiveYearProfitImpact} displayType="text" thousandSeparator prefix={symbol} /></span></li>
          </ul>
        </section>
      </section>
    </section>
  );
}));

export const TopSummary = withRouter(TSummary);
