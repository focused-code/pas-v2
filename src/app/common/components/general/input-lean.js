import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon } from 'reactstrap';
import { observer } from 'mobx-react';

const LeanInput = observer((props) => {
  const renderInput = () => {
    const {
      icon, type, onChange, name, placeholder, value,
    } = props;

    if (icon) {
      return (
        <InputGroup>
          <InputGroupAddon addonType="prepend"><i className={icon} /></InputGroupAddon>
          <input
            className="form-control"
            autoComplete="on"
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            type={type}
          />
        </InputGroup>
      );
    }
    return (
      <input 
        className="form-control"
        autoComplete="on"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
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
});

export default LeanInput;

LeanInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

LeanInput.defaultProps = {
  type: 'text',
};
