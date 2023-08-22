import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { NumericFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

const InputFormat = (props) => {

    const { nomarginbottom, show, error, name, label, placeholder, control, type } = props;
    const mbottom = (nomarginbottom) ? 0 : null;
    const custom_class = 'form-group animate__animated animate__fadeIn';

    return (
        <div className={custom_class} style={{ marginBottom: mbottom }}>
            <label className="question-label" htmlFor={name}>{capitalize(label || name)}</label>

            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value, name, ref } }) => (
                    <NumericFormat
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        value={value}
                        thousandSeparator
                        type={type}
                    />
                )}
            />
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );

};

export default InputFormat;


InputFormat.propTypes = {
    type: PropTypes.string,
};

InputFormat.defaultProps = {
    type: 'text',
};
