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
        className={`cursor-pointer relative flex items-center w-10 h-4 bg-neutral-700 rounded-full transition duration-300 ease-in-out ${
          isChecked ? "bg-gradient-to-l to-blue-500 from-sky-400" : ""
        }`}
      >
        <span
          className={`absolute left-[2px] w-3 h-3 bg-zinc-200 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            isChecked ? "translate-x-6 " : ""
          }`}
        ></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
