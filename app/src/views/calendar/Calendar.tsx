import * as React from "react";

export interface CalendarProps {
  compiler: string;
  framework: string;
}

export class Calendar extends React.Component<CalendarProps, {}> {
  render() {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}
