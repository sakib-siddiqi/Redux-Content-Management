import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorHandler = ({ error }) => {
  let router_error = useRouteError();

  let image = "/error.svg";

  if (error?.code === 404) {
    image = "/404.svg";
  }

  return (
    <main className="bg-gradient-to-bl from-rose-600 to-rose-700 overflow-auto h-screen grid place-items-center">
      <div className="m-3 p-3 rounded-md bg-slate-50/10 border-2 border-slate-50/20">
        <img
          src={image}
          alt="An error occured. Our team is working on it."
          className="w-full"
        />
        <hr className="mt-2 mb-4" />
        <h4 className="text-md text-white tracking-2">
          {error?.message || router_error?.message || `An error occured.`}
        </h4>
        <hr className="mt-2 mb-4 border-rose-300/20" />
        <pre className="text-slate-100">
          {error?.stack || router_error?.stack}
        </pre>
      </div>
    </main>
  );
};

export default ErrorHandler;
