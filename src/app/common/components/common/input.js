import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { Input, Label } from './styles';

const InputField = forwardRef((props, ref) => {
    const { error, name, label, register, type, nomarginbottom, lalign, lwidth, twidth, placeholder } = props;

    const mbottom = (nomarginbottom) ? 0 : null;
    const custom_class = (placeholder !== 'Enter One Time Password')? 'form-group animate__animated animate__fadeIn otp-input-label' : 'animate__animated animate__fadeIn';
    const checkDisabled = (props.disabled)? props.disbaled : false; 

    let label_params = {};
    let text_params = {};
    label_params = (lwidth) ? { ...label_params, width: lwidth } : { ...label_params };
    label_params = (lalign) ? { ...label_params, align: lalign } : { ...label_params };
    text_params = (twidth) ? { ...text_params, width: twidth } : { ...text_params };

    return (
        <div ref={ref} className={custom_class} style={{ marginBottom: mbottom }}>
            <Label {...label_params} className="question-label" style={{ marginBottom: '0.5rem' }} htmlFor={name}>{props.mandatory ? '* ' : ''} {capitalize(label || name)}</Label>
            <Input
                placeholder={placeholder}
                type={type || 'text'}
                min={(type === 'number') ? '0' : ''}
                mix={(props.max) ? props.max : ''}
                disabled={checkDisabled}
                {...text_params}
                {...register(name)}
            />
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );
});

export default InputField;


InputField.propTypes = {
    type: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
};
