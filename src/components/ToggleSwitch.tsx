import React, { useState } from "react";

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleSwitch}
        className="hidden"
        id="toggleSwitch"
      />
      <label
        htmlFor="toggleSwitch"
        className={`relative flex items-center w-10 h-4 bg-gray-300 rounded-full transition duration-300 ease-in-out ${
          isChecked ? "bg-zinc-500" : ""
        }`}
      >
        <span
          className={`absolute left-[2px] w-3 h-3 bg-zinc-700 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isChecked ? "translate-x-6 bg-blue-400 " : ""
          }`}
        ></span>
      </label>
     
    </div>
  );
};

export default ToggleSwitch;
