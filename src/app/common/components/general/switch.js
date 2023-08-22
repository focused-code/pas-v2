import { CustomInput } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const SwitchField = observer((props) => {
  const {
    nomarginbottom, show, name, value, label, type, onChange,
  } = props;
  const mbottom = (nomarginbottom) ? 30 : null;
  const customClass = `form-group animate__animated animate__fadeIn ${(show) || ''}`;
  return (
    <div className={customClass} style={{ marginBottom: mbottom }}>
      <CustomInput
        type={type}
        id={label}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
      />
    </div>
  );
});

export default SwitchField;

SwitchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

SwitchField.defaultProps = {
  type: 'switch ',
};
