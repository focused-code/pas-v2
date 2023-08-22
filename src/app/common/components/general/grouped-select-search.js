import Select from 'react-select';
import { observer } from 'mobx-react';

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
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const groupLabelStyles = {
  color: '#172B4D',
  fontSize: 12,
  fontWeight: 'bold',
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

const GroupSelectSearchField = observer((props) => {
  const onChange = (value, { name }) => {
    props.setValue({ value, name });
  };

  const {
    styled, nomarginbottom, extra, show, name, label, value, placeholder, error, options,
  } = props;

  const mbottom = (nomarginbottom) ? 0 : null;
  const number = (extra) ? extra.number : null;
  const info = (extra) ? extra.information : null;
  const custom_class = `form-group animate__animated animate__fadeIn ${(show) || ''}`;

  return (
    <div className={custom_class} style={{ marginBottom: mbottom }}>
      <label className="question-label" htmlFor={name}><span className="number">{number}</span> {label || name}</label>
      {
        (styled) ? (
          <Select
            menuPortalTarget={document.body}
            styles={{
              menuPortal: styles => ({ ...styles, zIndex: 100, borderRadius: 0 }),
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
            }}
            className="styled-select"
            classNamePrefix="styled-select"
            name={name}
            value={value}
            placeholder={placeholder}
            formatGroupLabel={formatGroupLabel}
            onChange={onChange}
            options={options}
          />
        ) : (
            <Select
              menuPortalTarget={document.body}
              styles={{
                menuPortal: styles => ({ ...styles, zIndex: 100, borderRadius: 0 }),
              }}
              className="search-select"
              classNamePrefix="search-select"
              name={name}
              value={value}
              placeholder={placeholder}
              formatGroupLabel={formatGroupLabel}
              onChange={onChange}
              options={options}
            />
          )
      }

      {(info) ? <small className="information">{info}</small> : null}
      {(error) ? <div className="error">{error}</div> : null}
    </div>
  );
});

export default GroupSelectSearchField;
