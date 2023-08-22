import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import { Input, Label, Box } from './styles';

const InputFileField = (props) => {
    const { error, name, label, nomarginbottom, multiple, accept, register, placeholder, onChange } = props;

    const mbottom = (nomarginbottom) ? 0 : null;
    const custom_class = 'form-group animate__animated animate__fadeIn';

    return (
        <Box className={custom_class} style={{ marginBottom: mbottom }}>
            <Label fontsize="0.8rem" className="question-label" htmlFor={name}>{capitalize(label || name)}</Label>
            {(multiple) ? (
                <Input
                    placeholder={placeholder}
                    type="file"
                    accept={(accept) ? accept : '*'}
                    multiple
                    {...register(name)}
                    onChange={onChange}
                />
            )
                : (
                    <Input
                        placeholder={placeholder}
                        type="file"
                        accept={(accept) ? accept : '*'}
                        {...register(name)}
                        onChange={onChange}
                    />
                )}


            {error ? (<div className="error">{error}</div>) : null}
        </Box>
    );
};

export default InputFileField;


InputFileField.propTypes = {
    type: PropTypes.string,
};

InputFileField.defaultProps = {
    type: 'text',
};
