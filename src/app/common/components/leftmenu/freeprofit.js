import { withRouter } from '../../helpers';
import { useNavigate, useParams } from 'react-router-dom';
export const FProfitMenu = (props) => {

    const { assessment } = props;

    const navigate = useNavigate();
    const { id } = useParams();

    if ((!assessment) || (assessment && assessment.module_set_name !== 'FreeProfitJumpstart')) {
        return null;
    }

    const handleClick = () => {
        navigate(`/assessment/${id}/upgrade`);
    };

    const names = [
        'Leads',
        'Drip Campaign',
        'Downsell',
        'Additional Products & Services',
        'Increase Prices',
        'Upsell & Cross-sell',
        'Bundling',
        'Cut Costs',
    ];

    return (
        <>
            {names.map((each, index) => <li key={index}><span className="disabled" onClick={() => handleClick()}>{each}</span></li>)}
        </>
    );
};

export const FreeProfitMenu = withRouter(FProfitMenu);
