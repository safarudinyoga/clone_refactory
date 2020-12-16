import React from 'react';
import PropTypes from 'prop-types';

const InputTextarea = ({
  type = 'text',
  className = '',
  placeholder = '',
  value = '',
  name = '',
  onChange = () => {},
  autoComplete = 'on',
  id = '',
  refprops,
}) => {
  return (
    <textarea
      autoComplete={autoComplete}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      ref={refprops}
    />
  );
};

InputTextarea.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
};

InputTextarea.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
  name: '',
  id: '',
  onChange: () => {},
};

export default InputTextarea;
