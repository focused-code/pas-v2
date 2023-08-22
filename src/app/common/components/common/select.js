import PropTypes from 'prop-types';
import { capitalize } from 'lodash';

const SelectField = (props) => {
    const { options, nomarginbottom, name, label, placeholder, error, register } = props;
    const mbottom = (nomarginbottom) ? 0 : null;
    const complex = !!(props.complex);

    return (
        <div className="form-group animate__animated animate__fadeIn" style={{ marginBottom: mbottom }}>
            <label className="question-label" htmlFor={name}>{capitalize(label || name)}</label>
            <select
                name={name}
                placeholder={placeholder}
                {...register(name)}
            >
                {
                    (complex) ? options.map((item, i) => (<option key={i} value={item.value}>{item.label}</option>)) : options.map((item, i) => (<option key={i} value={item}>{item}</option>))

                }
            </select>
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );
};

export default SelectField;

SelectField.propTypes = {
    name: PropTypes.string.isRequired,
};
