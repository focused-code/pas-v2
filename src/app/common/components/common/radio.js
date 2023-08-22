import PropTypes from 'prop-types';

const Radio = (props) => {

    const { options, error, name, register } = props;

    return (
        <div className="radio">
            {
                options.map((item, i) => (
                    <label key={i}>
                        <input
                            name={name}
                            value={item.value}
                            type="radio"
                            {...register(name)}
                        />
                        {item.label}
                    </label>
                ))
            }
            {error ? (<div className="error">{error}</div>) : null}
        </div>
    );
};

export default Radio;

Radio.propTypes = {
    name: PropTypes.string.isRequired,
};
