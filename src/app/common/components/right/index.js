import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { NavLink, useLocation } from 'react-router-dom';
import { Gauge } from '../gauge';
import { Impact } from '../impact';
import { isFullWidth } from '../general/utils';
import './style.scss';

const RightColumn = inject('properties')(observer((props) => {
    const style = (props.impact) ? 'notblured' : 'blured';
    const { properties, assessment } = props;
    const location = useLocation();
    const { pathname } = location;
    // If on implementation or coaching page hide this component
    if (isFullWidth(pathname)) {
        return null;
    }

    const assessment_id = pathname.split('/')[2];
    const symbol = (assessment) ? assessment.currency.code.trim() : '$';
    const error = toJS(properties.successFactorError);
    const factor = toJS(properties.successFactor);

    const summary = toJS(properties.financialSummary);

    return (
        <section className="right">
            <div className="card">
                <div className="card-header">
                    1 Year Impacts
                </div>
                <div className="card-body">
                    <section className={style}>
                        <Impact symbol={symbol} summary={summary} />
                    </section>
                </div>

            </div>

            <div className="card">
                <div className="card-header">
                    Success Gauge
                </div>
                <div className="card-body success-graph">
                    <Gauge factor={factor} />
                    {(error) ? <span style={{ color: 'red' }}>{error}</span> : null}
                    <NavLink className="btn btn-primary btn-sm reverse" to={`/assessment/${assessment_id}/success`}>Success Questionnaire</NavLink>
                </div>

            </div>
        </section>
    );
}));

export default RightColumn;
