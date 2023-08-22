import { Spinner } from 'reactstrap';
import './style.scss';

export const Loading = (props) => {
    const { size } = props;
    return (
        <div className="spinner-container">
            <Spinner size={size} type="border" color="info" />
        </div>
    );
};
