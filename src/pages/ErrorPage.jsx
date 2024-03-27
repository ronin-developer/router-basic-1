import React from "react";
import { Link } from "react-router-dom";

function ErrorPage({ error }) {
  let title = "An error occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.message || "Internal Server Error";
  }

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource or page.";
  }

  return (
    <div className="container mx-auto mt-9">
      <h1 className="text-3xl mb-5">{title}</h1>
      <p>{message}</p>
      <div className="mt-4">
        <Link to="/" className="text-orange-300 hover:bg-green-300">
          Return to Home page
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
