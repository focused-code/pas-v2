import { Component } from 'react';
import * as Sentry from '@sentry/browser';
import ErrorPage from './containers/ErrorPage/index.js';
import './error-page.scss';

export default class Errors extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    Sentry.withScope((scope) => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId, errorInfo });
    });  
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { errorInfo, error, hasError } = this.state;

    if (hasError || error) {
      // Error path
      return (
        <ErrorPage error={error} errorInfo={errorInfo} eventID={this.state.eventId} version={this.props.version} />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
