import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import "./tailwind.css";
import ErrorHandler from "./views/Error-Handler/ErrorHandler";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
try {
  root.render(
    <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  root.render(
    <ErrorHandler error={error} />
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
