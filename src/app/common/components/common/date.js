import { capitalize } from 'lodash';
import { Controller } from 'react-hook-form';
import { CustomDate, Label } from './styles';
import 'flatpickr/dist/themes/material_blue.css';

const InputDate = (props) => {
    const { name, error, min, max, timepick, label, placeholder, control, lalign, lwidth, twidth } = props;

    const onChange = (_, dateStr) => {
        props.setCustomValue(name, dateStr);
    };

    let options = (min && min.length > 0) ? { dateFormat: 'Y-m-d', minDate: min } : { dateFormat: 'Y-m-d' };
    options = (max && max.length > 0) ? { maxDate: new Date() } : { ...options };
    options = (timepick) ? { enableTime: true, noCalendar: true, dateFormat: 'h:i K' } : options;

    let label_params = {};
    let text_params = {};
    label_params = (lwidth) ? { ...label_params, width: lwidth } : { ...label_params };
    label_params = (lalign) ? { ...label_params, align: lalign } : { ...label_params };
    text_params = (twidth) ? { ...text_params, width: twidth } : { ...text_params };

    return (
        <div className="form-group animate__animated animate__fadeIn">
            <Label {...label_params} className="question-label" htmlFor={name}>{capitalize(label || name)}</Label>

            <Controller
                control={control}
                name={name}
                render={({ field: { onBlur, value } }) => (
                    <CustomDate
                        onChange={onChange}
                        placeholder={placeholder}
                        onBlur={onBlur}
                        {...text_params}
                        value={value}
                        options={options}
                    />
                )}
            />
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );
};

export default InputDate;