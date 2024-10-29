import React from "react";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-500 hover:underline text-lg">
        Go back to Home
      </a>
    </div>
  );
}

export default Error;
