import React from 'react';
import './error-indicator.css';

const ErrorIndicator = (props) => {
  const { error } = props;
  const errorMessage = error ? error.message : 'Unknown Error';

  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
};

export default ErrorIndicator;
