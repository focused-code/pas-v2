import { createRef, Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {
  Button, PopoverHeader, UncontrolledPopover, PopoverBody,
} from 'reactstrap';
import { makeid } from './utils';
import { moduleSetName } from './helpers';

const styles = {
  container: {
    marginBottom: '3%',
  },
  question: {
    display: 'block',
  },
  answer: {
    display: 'inline',
    marginRight: '2%',
    marginLeft: '2%',
  },
  longanswer: {
    display: 'block',
    marginLeft: '2%',
  },
  input: {
    marginRight: '1%',
  },
};
const RadioField = observer(
  class RadioField extends Component {
    constructor(props) {
      super(props);
      this.radioRef = createRef();
    }

    componentDidMount() {
      const { extra } = this.props;
      const highlight = (extra) ? extra.highlight : null;
      const question_id = (extra) ? extra.question_id : null;
      const focus = ((highlight !== undefined) && (highlight === question_id) && question_id && highlight);
      if (focus) {
        this.radioRef.current.focus();
      }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      const { extra } = nextProps;

      const highlight = (extra) ? extra.highlight : null;
      const question_id = (extra) ? extra.question_id : null;
      const focus = ((highlight !== undefined) && (highlight === question_id) && question_id && highlight);
      if (focus) {
        this.radioRef.current.focus();
      }
    }

    renderPopup = (note) => {
      const id = makeid(6);

      const styled_note = (note.note_text.length > 500) ? 'big-popover' : '';

      return (
        <Fragment>
          <Button tabIndex="-1" id={`popup-${note.id}`} className="inputpopup" type="button">?</Button>
          <UncontrolledPopover className={styled_note} trigger="legacy" placement="left" target={`popup-${note.id}`}>
            <PopoverHeader>Information</PopoverHeader>
            <PopoverBody>
              {note.note_text}
            </PopoverBody>
          </UncontrolledPopover>
        </Fragment>
      );
    }

    render() {
      const {
        extra, show, name, options, onChange, value, label, error,
      } = this.props;
      const number = (extra) ? extra.number : null;
      const long = (extra) ? extra.long : null;
      const notes = (extra) ? extra.notes : null;
      const answerStyle = (long) ? styles.longanswer : styles.answer;
      const module = (extra) ? extra.module : null;
      const properties = (extra) ? extra.properties : null;
      let hidenumber = false;
      if (properties && module) {
        const mname = moduleSetName();
        hidenumber = ((mname === 'FreeProfitDeepDive') || (mname === 'FullDigitalAssessment') || (mname === 'Breakthrough40')) && (module.module_type === 'split');
      }

      const customClass = `form-group animate__animated animate__fadeIn ${(show) || ''}`;

      return (
        <div className={customClass} style={styles.container}>
          <label className="question-label" style={styles.question}>{(!hidenumber) ? <span className="number">{number}</span> : null} {label || name}</label>
          {
            options.map((item, i) => (
              <label style={answerStyle} key={i}>
                <input
                  ref={this.radioRef}
                  style={styles.input}
                  name={name}
                  onChange={onChange}
                  autoComplete="off"
                  autoCorrect="off"
                  value={item.value}
                  checked={value === item.value}
                  type={item.type}
                />
                {item.label}
              </label>
            ))
          }
          {(notes) ? this.renderPopup(notes) : null}
          {(error) ? <div className="error">{error}</div> : null}
        </div>
      );
    }
  },
);

export default RadioField;

RadioField.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

RadioField.defaultProps = {
  type: 'radio',
};
