<<<<<<< HEAD
import React from "react";

const Spinner = ({ size = "md" }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 ${sizes[size]}`}
      />
    </div>
  );
};

export default Spinner; // ✅ MUST be default export
=======
import React from "react";

const Spinner = ({ size = "md" }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 ${sizes[size]}`}
      />
    </div>
  );
};

export default Spinner; // ✅ MUST be default export
>>>>>>> e32ece4e9c0f3570c3b3d9af4dbf9fb821cfd845
