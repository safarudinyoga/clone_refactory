import React from 'react';
import PropTypes from 'prop-types';

import './_spinner.scss';

const Spinner = ({
  styleContainer = {},
  styleBigSpinner = {},
  className = '',
}) => {
  return (
    <div
      className={`spinner ${className}`}
      style={styleContainer}
    >
      <span className="spinnerinner1" />
      <span className="spinnerinner2" />
      <span
        className="spinnerinner3"
        style={styleBigSpinner}
      />
    </div>
  );
};

Spinner.propTypes = {
  styleContainer: PropTypes.objectOf(PropTypes.string),
  styleBigSpinner: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
};

Spinner.defaultProps = {
  styleContainer: {},
  styleBigSpinner: {},
  className: '',
};

export default Spinner;
