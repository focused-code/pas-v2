import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { Textarea } from './styles';

const Text = (props) => {

    const { error, name, label, placeholder, register } = props;

    const custom_class = 'form-group animate__animated animate__fadeIn';
    return (
        <div className={custom_class}>

            <label className="question-label" htmlFor={name}>{capitalize(label || name)}</label>

            <Textarea
                placeholder={placeholder}
                {...register(name)}
                rows="3"
            />

            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );

};

export default Text;

Text.propTypes = {
    name: PropTypes.string.isRequired,
};