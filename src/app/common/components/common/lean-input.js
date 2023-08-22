import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import { CustomIcon } from './styles';

const LeanInput = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // change inverse the boolean state passwordShown
        setShowPassword(!showPassword);
    };

    const renderInput = () => {
        const {
            register, icon, appendicon, type, name, placeholder,
        } = props;

        const customType = (showPassword) ? 'text' : type || 'text';

        if (icon) {
            return (
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><i className={icon} /></InputGroupAddon>
                    <input
                        className="form-control"
                        autoComplete="on"
                        placeholder={placeholder}
                        type={customType}
                        {...register(name)}
                    />
                    {(appendicon) ? <CustomIcon onClick={togglePassword} addonType="append"><i className={(!showPassword) ? "fa fa-eye" : "fa fa-eye-slash"} /></CustomIcon> : null}
                </InputGroup>
            );
        }
        return (
            <input
                className="form-control"
                autoComplete="on"
                placeholder={placeholder}
                type={type || 'text'}
                {...register(name)}
            />
        );
    };

    const {
        nomarginbottom, show, extra, error,
    } = props;

    const mbottom = (nomarginbottom) ? 0 : null;
    const customClass = `form-label-group animate__animated animate__fadeIn ${(show) || ''}`;
    const info = (extra) ? extra.information : null;
    return (
        <div className={customClass} style={{ marginBottom: mbottom }}>
            {renderInput()}
            {(info) ? <small className="information">{info}</small> : null}
            {(error) ? <div className="error">{error}</div> : null}
        </div>
    );
};

export default LeanInput;

LeanInput.propTypes = {
    type: PropTypes.string,
};

LeanInput.defaultProps = {
    type: 'text',
};
