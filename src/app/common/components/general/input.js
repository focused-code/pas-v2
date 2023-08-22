import { createRef, Fragment, Component } from 'react';
import { NumericFormat } from 'react-number-format';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import {
  Button, PopoverHeader, UncontrolledPopover, PopoverBody,
} from 'reactstrap';
import { getFixedCostImpactAmount, getVariableCostImpactAmount, makeid } from './utils';

import { moduleSetName, getImpactAmount } from './helpers';

const styles = {
  impactStyle: {
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  revenueStyle: {
    fontSize: '0.7rem',
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#9b9b9b',
  },
};

const InputField = observer(
  class InputField extends Component {
    constructor(props) {
      super(props);
      this.textRef = createRef();
    }

    state = {
      marginbottom: 0,
      financials: null,
      impact: 0,
      impactError: null,
      assessment: null,
    }

    componentDidMount() {
      const { extra, value } = this.props;

      const properties = (extra) ? extra.properties : null;
      const highlight = (extra) ? extra.highlight : null;
      const question_id = (extra) ? extra.question_id : null;
      const focus = ((highlight !== undefined) && (highlight === question_id) && question_id && highlight);

      if (properties) {
        this.setState({ financials: properties.financials.responses, assessment: properties.selected_assessment }, () => {
          const type = (extra) ? extra.type : null;
          if (type === 'impact') {
            if (value) {
              this.calculateImpact(value);
            }
          }
        });
      }

      if (focus) {
        this.textRef.current.focus();
      }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      const { extra, value } = nextProps;

      const properties = (extra) ? extra.properties : null;
      const highlight = (extra) ? extra.highlight : null;
      const question_id = (extra) ? extra.question_id : null;
      const focus = ((highlight !== undefined) && (highlight === question_id) && question_id && highlight);

      if (properties) {
        this.setState({ financials: properties.financials.responses, assessment: properties.selected_assessment }, () => {
          const type = (extra) ? extra.type : null;
          if (type === 'impact') {
            if (value.length > 0) {
              this.calculateImpact(value);
            } else {
              this.setState({ impact: 0 });
            }
          }
        });
      }

      if (focus) {
        this.textRef.current.focus();
      }
    }

    calculateImpact = (percentage) => {
      const { extra } = this.props;
      const path = (extra) ? extra.path : null;
      let impact = 0;

      if (path === 'costs') {

        // Question ID 5 => impact_5 is the variableimpact
        // Question ID 10 =>impact_10 is the fixedimpact

        // Reduce Fixed Cost
        if (extra.question_id === 5) {
          impact = (percentage.length > 0) ? getVariableCostImpactAmount(Number(percentage)) : 0;
        }
        // Reduce Variable Cost
        if (extra.question_id === 10) {
          impact = (percentage.length > 0) ? getFixedCostImpactAmount(Number(percentage)) : 0;
        }

      } else {
        impact = (percentage.length > 0) ? getImpactAmount(path, Number(percentage)) : 0;
      }
      this.setState({ impact });
    }

    onChange = (e) => {
      const { financials } = this.state;

      if (!financials) {
        this.setState({ impactError: 'Please fill in the financials first...' });
      }
      if (financials) {
        this.calculateImpact(e.target.value);
      }
      this.props.onChange(e);
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

    renderInput = () => {
      // const input = this.props;
      const {
        nomarginbottom, extra, show, name, placeholder, value, label, error,
      } = this.props;

      const { assessment, impact } = this.state;
      const mbottom = (nomarginbottom) ? this.state.marginbottom : null;

      const number = (extra) ? extra.number : null;
      const info = (extra) ? extra.information : null;
      const type = (extra) ? extra.type : null;
      const properties = (extra) ? extra.properties : null;
      const module = (extra) ? extra.module : null;
      const path = (extra) ? extra.path : null;
      const notes = (extra) ? extra.notes : null;
      const customClass = `form-group animate__animated animate__fadeIn ${(show) || ''}`;
      const symbol = (assessment) ? assessment.currency.code.trim() : '$';

      let hidenumber = false;
      if (properties && module) {
        const mname = moduleSetName();
        hidenumber = ((mname === 'FreeProfitDeepDive') || (mname === 'FullDigitalAssessment') || (mname === 'Breakthrough40')) && (module.module_type === 'split');
      }

      const corresponding = (path === 'costs') ? 'Corresponding Profit Impact' : 'Corresponding Revenue Impact';

      if ((type === 'number') || (type === 'impact') || (type === 'decimal') || (type === 'percentage')) {
        if ((path && path === 'dgintro') || (path && path === 'valuation') || (path && path === 'financials')) {
          return (
            <Fragment>
              <div className={customClass} style={{ marginBottom: mbottom }}>
                <label className="question-label" htmlFor={name}>{(!hidenumber) ? <span className="number">{number}</span> : null} {ReactHtmlParser(label) || name}</label>
                <input
                  ref={this.textRef}
                  className="form-control"
                  autoComplete="off"
                  autoCorrect="off"
                  name={name}
                  placeholder={placeholder}
                  onChange={this.onChange}
                  value={value}
                  style={(notes) ? { display: 'inline-block', width: '90%' } : { display: 'block', width: '100%' }}
                  type={type}
                />
                {(notes) ? this.renderPopup(notes) : null}
                {(info) ? <small className="information">{info}</small> : null}
                {(error) ? <div className="error">{error}</div> : null}
              </div>
            </Fragment>
          );
        }

        return (
          <Fragment>
            <div className={customClass} style={{ marginBottom: mbottom }}>
              <label className="question-label" htmlFor={name}>{(!hidenumber) ? <span className="number">{number}</span> : null} {ReactHtmlParser(label) || name}</label>
              <div className="col-md-6 col-lg-6" style={{ display: 'inline-block' }}>
                <input
                  ref={this.textRef}
                  className="form-control"
                  autoComplete="off"
                  autoCorrect="off"
                  name={name}
                  placeholder={placeholder}
                  onChange={this.onChange}
                  value={value}
                  style={(notes) ? { display: 'inline-block', width: '90%' } : { display: 'block', width: '100%' }}
                  type={type}
                />
                {(notes) ? this.renderPopup(notes) : null}
                {(info) ? <small className="information">{info}</small> : null}
                {(error) ? <div className="error">{error}</div> : null}

              </div>
              <div className="col-md-6 col-lg-6" style={{ display: 'inline-block' }}>
                <label style={styles.impactStyle}><NumericFormat value={impact} displayType="text" thousandSeparator prefix={symbol} /> <span style={styles.revenueStyle}>({corresponding})</span></label>
                {(this.state.impactError) ? <span style={{ color: 'red', marginLeft: '15px' }}>{this.state.impactError}</span> : null}
              </div>
            </div>
          </Fragment>
        );
      }

      return (
        <div className={customClass} style={{ marginBottom: mbottom }}>
          <label className="question-label" htmlFor={name}>{(!hidenumber) ? <span className="number">{number}</span> : null} {ReactHtmlParser(label) || name}</label>
          {(module) ? (
            <textarea
              ref={this.textRef}
              name={name}
              autoComplete="off"
              autoCorrect="off"
              onChange={this.onChange}
              placeholder={placeholder}
              className="form-control"
              style={(notes) ? { display: 'inline-block', width: '90%' } : { display: 'block', width: '100%' }}
              value={value}
              rows="2"
            />
          ) : (
            <input
              ref={this.textRef}
              name={name}
              autoComplete="off"
              autoCorrect="off"
              onChange={this.onChange}
              placeholder={placeholder}
              className="form-control"
              style={(notes) ? { display: 'inline-block', width: '90%' } : { display: 'block', width: '100%' }}
              value={value}
            />
          )}
          {(notes) ? this.renderPopup(notes) : null}
          {(info) ? <small className="information">{info}</small> : null}
          {(error) ? <div className="error">{error}</div> : null}
        </div>
      );
    }

    render() {
      return (
        <Fragment>
          {this.renderInput()}
        </Fragment>
      );
    }
  },
);

export default InputField;

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  type: 'text',
};
