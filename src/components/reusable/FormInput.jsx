const FormInput = ({
	inputLabel,
	labelFor,
	inputType,
	inputId,
	inputName,
	placeholderText,
	ariaLabelName,
	value,
	onChange,
  }) => {
	return (
	  <div className="form-group-inner">
		<label className="form-label" htmlFor={labelFor}>
		  {inputLabel}
		</label>
		<input
		  className="form-input"
		  type={inputType}
		  id={inputId}
		  name={inputName}
		  placeholder={placeholderText}
		  aria-label={ariaLabelName}
		  value={value}
		  onChange={onChange}
		  required
		/>
	  </div>
	);
  };
  
  export default FormInput;