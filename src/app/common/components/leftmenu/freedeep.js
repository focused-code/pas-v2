import { useNavigate } from 'react-router-dom';
import { withRouter } from '../../helpers';

export const FDeepMenu = (props) => {
    const { assessment, router } = props;

    const { params } = router;

    const navigate = useNavigate();

    if ((!assessment) || (assessment && assessment.module_set_name !== 'FreeProfitDeepDive')) {
        return null;
    }

    const handleClick = () => {
        navigate(`/assessment/${params.id}/upgrade`);
    };

    const names = [
        'Strategy',
        'Trust, Expertise, Education',
        'Policies & Procedures',
        'Leads',
        'Referral Systems',
        'Publicity & PR',
        'Direct Mail',
        'Advertising',
        'Drip Campaign',
        'Scripts',
        'Initial Close Rate',
        'Follow - up Close Rate',
        'Reactivate Former Customers',
        'More Appointments',
        'Downsell',
        'Additional Products & Services',
        'Increase Frequency of Purchase',
        'Increase Prices',
        'Bundling',
        'Upsell & Cross - sell',
        'Increase Longevity',
        'Cut Costs',
        'Sales General Questions',
        'Sales Manager',
        'Sales Compensation',
        'Sales Superstars',
        'Sales Training',
        'Sales Prospecting and Lists',
        'Sales Dream Clients',
        'Sales Trade Shows',
        'Sales Dealing With Decision Makers',
        'Sales Closing the Sale',
        'Sales Order Fulfillment',
        'Sales Buyers Remorse',
    ];

    return (
        <ul className="free-deep">
            {names.map((each, index) => <li key={index}><span className="disabled" onClick={() => handleClick()}>{each}</span></li>)}
        </ul>
    );
};

export const FreeDeepMenu = withRouter(FDeepMenu);
