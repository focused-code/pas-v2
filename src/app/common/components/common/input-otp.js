import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { OtpInput, Label } from './styles';

const InputFieldOtp = (props) => {
    const { mandatory, error, name, label, register, nomarginbottom, lalign, lwidth, twidth, placeholder } = props;

    const mbottom = (nomarginbottom) ? 0 : null;
    const custom_class = 'form-group animate__animated animate__fadeIn';

    let label_params = {};
    let text_params = {};
    label_params = (lwidth) ? { ...label_params, width: lwidth } : { ...label_params };
    label_params = (lalign) ? { ...label_params, align: lalign } : { ...label_params };
    text_params = (twidth) ? { ...text_params, width: twidth } : { ...text_params };

    return (
        <div className={custom_class} style={{ marginBottom: mbottom }}>
            <Label {...label_params} className="otp-input-label" style={{ marginBottom: '0.5rem', textTransform: 'uppercase' }} htmlFor={name}>{mandatory ? '* ' : null} {capitalize(label || name)}</Label>
            <OtpInput
                placeholder={placeholder}
                {...text_params}
                type="number"
                onKeyPress={(e) => {
                    // Allow numbers only and a max of 6 numbers
                    if (!/[0-9]/.test(e.key) || e.target.value.length >= 6) {
                        e.preventDefault();
                    }
                }}
                {...register(name)}
            />
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );
};

export default InputFieldOtp;


InputFieldOtp.propTypes = {
    type: PropTypes.number,
};

InputFieldOtp.defaultProps = {
    type: null,
};
