import { capitalize } from 'lodash';
import { Controller } from 'react-hook-form';
import { CSelect, Label, Box } from './styles';

const colourStyles = {
    menuPortal: styles => ({
        ...styles,
        zIndex: 2000,
        borderRadius: 0,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
    }),
    control: styles => ({
        ...styles,
        borderRadius: '0.125rem',
        minHeight: '2.063rem',
        maxHeight: '2.063rem',
    }),
    placeholder: styles => ({
        ...styles,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
        top: '41%',
    }),
    indicatorsContainer: styles => ({
        ...styles,
        padding: '0',
    }),
    singleValue: styles => ({
        ...styles,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
        top: '50%',
    }),
    menuList: styles => ({
        ...styles,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        textTransform: 'capitalize',
        background: isFocused
            ? '#eee'
            : isSelected
                ? '#179ad6'
                : undefined,
        zIndex: 1,
    }),
    menu: base => ({
        ...base,
        zIndex: 100,
    }),
};

const SelectSearchField = (props) => {

    const { options, nomarginbottom, show, error, name, label, placeholder, control } = props;

    const onChange = (value) => {
        props.setCustomValue(name, value);
    };

    const mbottom = (nomarginbottom) ? 0 : null;
    const custom_class = 'form-group animate__animated animate__fadeIn';

    return (
        <Box className={custom_class} style={{ marginBottom: mbottom, textTransform: 'capitalize' }}>
            <Label className="question-label" style={{ marginBottom: '0.5rem' }} htmlFor={name}>{props.mandatory ? '* ' : ''} {capitalize(label || name)}</Label>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onBlur } }) => (
                    <CSelect
                        menuPortalTarget={document.body}
                        styles={colourStyles}
                        className="c-select"
                        classNamePrefix="c-select"
                        name={name}
                        value={value}
                        isClearable
                        onBlur={onBlur}
                        placeholder={placeholder}
                        onChange={onChange}
                        options={options}
                    />
                )}
            />

            {error ? (<div className="error">{error}</div>) : null}
        </Box>
    );
};

export default SelectSearchField;