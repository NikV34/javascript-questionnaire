import React from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../error-indicator';

const ErrorBoundary = ({ error, children }) => {

  if (error) {
    return <ErrorIndicator />;
  }

  return children;
}


const mapStateToProps = ({ questionList: { error } }) => {
  return { error };
}

export default connect(mapStateToProps)(ErrorBoundary);