import React from 'react';

type State = { hasError: boolean; error?: Error };

class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 32, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          <h1 style={{ color: '#111827' }}>Something went wrong</h1>
          <p style={{ color: '#374151' }}>An error occurred while rendering the application. Details are shown below (also logged to console).</p>
          <pre style={{ background: '#f3f4f6', padding: 16, borderRadius: 8, overflow: 'auto', color: '#111827' }}>
            {this.state.error ? String(this.state.error.stack || this.state.error.message) : 'Unknown error'}
          </pre>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default ErrorBoundary;
