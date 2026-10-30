
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <div className="wrap flex min-h-[60vh] flex-col items-start justify-center py-24">
          <AlertTriangle size={32} strokeWidth={1.5} className="mb-4 text-ink-3" aria-hidden="true" />
          <h1 className="mb-2 text-[28px] font-bold">Something went wrong</h1>
          <p className="prose-col text-ink-2">
            The page hit an unexpected error. Reloading usually fixes it.
          </p>
          <button 
            onClick={() => window.location.reload()}
            type="button"
            className="btn btn-primary mt-6"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
