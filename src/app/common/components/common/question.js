import { capitalize } from 'lodash';
import Radio from './radio';

const Question = (props) => {

    const { label, answers, name, value, error, show, register } = props;
    const custom_class = 'form-group animate__animated animate__fadeIn';

    return (
        <div className={custom_class}>

            <label className="question-label">{capitalize(label || name)}</label>

            <Radio
                options={answers}
                name={name}
                register={register}
                value={value}
                error={error}
            />
        </div>
    );
};

export default Question;