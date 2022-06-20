import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import { ContextProvider } from "./context/context-provider";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhhQlFacF9JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNiUH5fcHdWQWRbV0E="
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
