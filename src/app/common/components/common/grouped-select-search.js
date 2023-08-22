import { capitalize } from 'lodash';
import { Controller } from 'react-hook-form';

import { CSelect, Label } from './styles';

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const groupLabelStyles = {
    color: '#172B4D',
    fontSize: '0.72rem',
    fontWeight: 'bold',
};

const colourStyles = {
    menuPortal: styles => ({
        ...styles,
        zIndex: 100,
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
    }),
    indicatorsContainer: styles => ({
        ...styles,
        padding: '0',
    }),
    singleValue: styles => ({
        ...styles,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
    }),
    menuList: styles => ({
        ...styles,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
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

const groupedStyles = {
    menuPortal: styles => ({
        ...styles,
        zIndex: 100,
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
    }),
    indicatorsContainer: styles => ({
        ...styles,
        padding: '0',
    }),
    singleValue: styles => ({
        ...styles,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
    }),
    menuList: styles => ({
        ...styles,
        fontFamily: 'Open Sans',
        fontSize: '0.72rem',
    }),
    option: (styles, {
        data, isDisabled, isFocused, isSelected,
    }) => {
        const color = getBackgroundColor(data.value);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? color
                    : isFocused
                        ? color
                        : color,
            color: getColor(data.value),
            ':active': {
                ...styles[':active'],
                backgroundColor: color,
            },
        };
    },
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span style={groupLabelStyles}>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

const getBackgroundColor = (id) => {
    switch (id) {
        case 1:
            return '#a774e8';
        case 2:
            return '#613894';
        case 3:
            return '#3fe9d3';
        case 4:
            return '#3fe99f';
        case 5:
            return '#e5c448';
        case 6:
            return '#e9983f';
        case 7:
            return '#8cb740';
        default:
            return '#ffffff';
    }
};

const getColor = (id) => {
    switch (id) {
        case 1:
        case 2:
            return '#ffffff';
        default:
            return '#0e123d';
    }
};

const GroupSelectSearchField = (props) => {

    const {
        styled, nomarginbottom, show, name, label, placeholder, error, options, control,
    } = props;

    const onChange = (value) => {
        props.setCustomValue(name, value);
    };

    const mbottom = (nomarginbottom) ? 0 : null;
    const custom_class = 'form-group animate__animated animate__fadeIn';

    return (
        <div className={custom_class} style={{ marginBottom: mbottom }}>
            <Label className="question-label" htmlFor={name}>{capitalize(label || name)}</Label>
            {
                (styled) ? (
                    <Controller
                        control={control}
                        name={name}
                        render={({ field: { value, onBlur } }) => (
                            <CSelect
                                menuPortalTarget={document.body}
                                styles={groupedStyles}
                                className="c-select"
                                classNamePrefix="c-select"
                                name={name}
                                value={value}
                                isClearable
                                placeholder={placeholder}
                                formatGroupLabel={formatGroupLabel}
                                onChange={onChange}
                                options={options}
                            />
                        )}
                    />

                ) : (
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
                )
            }
            {(error) ? <div className="error">{error}</div> : null}
        </div>
    );
};

export default GroupSelectSearchField;
