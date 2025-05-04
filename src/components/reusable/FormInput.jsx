import PropTypes from 'prop-types';

const FormInput = ({
  inputLabel,
  labelFor,
  inputType = 'text', // default value
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
  value,
  onChange,
  className = '', // additional className
}) => {
  return (
    <div className={`form-group-inner ${className}`.trim()}>
      {inputLabel && (
        <label className="form-label" htmlFor={labelFor}>
          {inputLabel}
        </label>
      )}
      <input
        className="form-input"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName || inputLabel} // fallback to inputLabel
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

FormInput.propTypes = {
  inputLabel: PropTypes.string,
  labelFor: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  ariaLabelName: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  inputType: 'text',
  className: '',
};

export default FormInput;