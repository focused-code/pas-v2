import { CustomInput } from 'reactstrap';
import { Controller } from 'react-hook-form';
import { observer } from 'mobx-react';

const Switch = observer((props) => {
    const {
        error, nomarginbottom, show, name, label, control,
    } = props;

    const mbottom = (nomarginbottom) ? 30 : null;
    const customClass = `form-group animate__animated animate__fadeIn ${(show) || ''}`;

    const onChange = (e) => {
        props.setCustomValue(name, e.target.checked);
    };

    return (
        <div className={customClass} style={{ marginBottom: mbottom }}>
            <Controller
                control={control}
                name={name}
                render={({ field: { value } }) => {
                    return (
                        <CustomInput
                            type="switch"
                            id={name}
                            name={name}
                            value={value}
                            defaultChecked={value}
                            label={label}
                            onClick={onChange}
                        />
                    )
                }}
            />
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );
});

export default Switch;