import React, { Component } from 'react';
import { ErrorMessage } from './styled';

import { Props, State } from './types';

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: error.message };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorMessage>Sorry.. there was an error</ErrorMessage>;
    }

    return children;
  }
}
