import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

const InputDate = (props) => {
  const onChange = (selectedDates, dateStr) => {
    props.onChange(dateStr);
  };

  const {
    show, extra, name, error, label, placeholder, value, months,
  } = props;

  const number = (extra) ? extra.number : null;
  const info = (extra) ? extra.information : null;
  const after = (extra) ? extra.after : null;
  let options = (after && after.length > 0) ? { dateFormat: 'M J Y', minDate: after } : { dateFormat: 'M J Y' };
  options = (months) ? {
    ...options,
  } : options;
  return (
    <div className={`form-group animate__animated animate__fadeIn ${(show) || ''}`}>
      <label className="question-label" htmlFor={name}><span className="number">{number}</span> {label || name}</label>
      <Flatpickr
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        options={options}
      />
      {(info) ? <small className="information">{info}</small> : null}
      {(error) ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default InputDate;
