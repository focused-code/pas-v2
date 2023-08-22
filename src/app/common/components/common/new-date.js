import { capitalize } from 'lodash';
import { Controller } from 'react-hook-form';
import { CustomDate, Label } from './styles';

const NewDateField = (props) => {
    const { name, error, after, timepick, label, placeholder, control } = props;

    const onChange = (_, dateStr) => {
        props.setCustomValue(name, dateStr);
    };

    let options = (after && after.length > 0) ? { dateFormat: 'M j Y', minDate: after } : { dateFormat: 'M j Y' };
    options = (timepick) ? { enableTime: true, noCalendar: true, dateFormat: 'h:i K' } : options;

    return (
        <div className="form-group animate__animated animate__fadeIn">
            <Label className="question-label" htmlFor={name}>{capitalize(label || name)}</Label>

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

export default NewDateField;