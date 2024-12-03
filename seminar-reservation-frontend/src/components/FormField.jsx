import React from 'react';

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  errorMessage = '',
}) => {
  return (
    <div className="form-field">
      {/* Label */}
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>

      {/* Input Field */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />

      {/* Error Message */}
      {errorMessage && <span className="error">{errorMessage}</span>}
    </div>
  );
};

export default FormField;
