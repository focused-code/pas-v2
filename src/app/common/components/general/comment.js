import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

const Comment = observer((props) => {
  const {
    show, extra, name, label, placeholder, onChange, value,
  } = props;
  const number = (extra) ? extra.number : null;
  const custom_class = `form-group animate__animated animate__fadeIn ${(show) || ''}`;

  return (
    <div className={custom_class}>
      <label className="question-label" htmlFor={name}><span className="number">{number}</span> {label || name}</label>

      <textarea
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        className="form-control"
        value={value}
        rows="2"
      />

    </div>
  );
});

export default Comment;

Comment.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
