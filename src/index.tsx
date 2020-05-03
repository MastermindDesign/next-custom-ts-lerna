import * as React from "react";
import * as ReactDOM from "react-dom";

import { Calendar } from "./views/calendar/calendar";


ReactDOM.render(
    <Calendar compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);