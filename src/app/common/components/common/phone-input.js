import { forwardRef, useContext } from 'react';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { Controller } from 'react-hook-form';
import { Label, PhoneInputInput } from './styles';
import { ProfileContext } from '../../state/profile-state';

const PhoneInputField = forwardRef((props, ref) => {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".

    const { setPhoneNumberError } = useContext(ProfileContext);

    const { error, name, show, label, type, nomarginbottom, control, lalign, lwidth, setCustomValue, placeholder, className } = props;
    const mbottom = (nomarginbottom) ? 0 : null;
    const custom_class = `form-group animate__animated animate__fadeIn ${show}`;

    const isDisabled = (props.disabled) ? props.disabled : false;

    const my_class = (className) ? className : null;

    let label_params = {};
    label_params = (lwidth) ? { ...label_params, width: lwidth } : { ...label_params };
    label_params = (lalign) ? { ...label_params, align: lalign } : { ...label_params };

    const onChange = (e) => {
        if (e){
            if (isValidPhoneNumber(e) == false) {
                setPhoneNumberError('The phone number is invalid');
            }else{
                setPhoneNumberError('');
            }
        }
        setCustomValue(name, e);
    };

    return (
        <div ref={ref} className={custom_class} style={{ marginBottom: mbottom }}>
            <Label {...label_params} className="question-label" htmlFor={name}>{capitalize(label || name)}</Label>
            <Controller
                control={control}
                name={name}
                render={({ field: { onBlur, value } }) => (
                    <PhoneInputInput
                        name={name}
                        type={type || 'text'}
                        onBlur={onBlur}
                        defaultCountry="US"
                        placeholder={placeholder}
                        className={my_class}
                        disabled={isDisabled}
                        onChange={onChange}
                        value={value}
                    />
                )}
            />
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    )
});

export default PhoneInputField;

PhoneInputField.propTypes = {
    name: PropTypes.string.isRequired,
};