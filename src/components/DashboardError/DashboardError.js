import React, { Component } from 'react';

class DashboardError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h2>Oh no! Something went wrong.</h2>;
    }
    return children;
  }
}

export default DashboardError;
