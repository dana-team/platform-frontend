import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green/basic-6 border-t-transparent shadow-md"></div>
    </div>
  );
};

export default Spinner;
