import { Component } from "react";

export class CustomErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      return <p>something went wrong.</p>;
    }

    return (this.props as any).children;
  }
}
