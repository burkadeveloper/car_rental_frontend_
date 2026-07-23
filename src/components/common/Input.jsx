<<<<<<< HEAD
import React from "react";

const Input = ({ label, error, className, ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="label">{label}</label>}
      <input
        className={`input ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
=======
import React from "react";

const Input = ({ label, error, className, ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="label">{label}</label>}
      <input
        className={`input ${error ? "border-red-500" : ""} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
>>>>>>> e32ece4e9c0f3570c3b3d9af4dbf9fb821cfd845
