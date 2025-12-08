import React from "react";

const GradientBar: React.FC = () => {
  return (
    <div className="mx-4 my-4 h-4 w-full max-w-[300px] rounded-full bg-gradient-to-r from-purple-300 via-blue-200 to-white dark:from-purple-700 dark:via-blue-400 md:h-6 xl:mx-10" />
  );
};

export default GradientBar;
