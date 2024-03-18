// Muhammed Abdelhakeem

// CustomToast.js
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FaCheck, FaTimes } from "react-icons/fa";

const CustomToast = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timerSeconds, setTimerSeconds] = useState(7);

  const progressBarAnimation = useSpring({
    width: `${(timerSeconds / 7) * 100}%`,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    setTimeout(() => {
      setIsVisible(false);
      onClose();
      clearInterval(timer);
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [onClose]);

  return (
    <animated.div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-20px)",
      }}
      className={`z-50 transition-all fixed top-5 right-5 p-2 w-96 rounded-md shadow-md  ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white flex flex-col items-center justify-between`}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            {type === "success" ? <FaCheck /> : <FaTimes />}
            <div>{message}</div>
          </div>

          <button
            className="text-white ml-2 focus:outline-none"
            onClick={() => {
              setIsVisible(false);
              onClose();
            }}
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* <div className="text-xs">{Math.ceil(isVisible ? timerSeconds : 0)}s</div> */}
      <div className="w-full h-2 mt-2 rounded-full overflow-hidden bg-gray-300">
        <animated.div
          className="h-full bg-white"
          style={progressBarAnimation}
        ></animated.div>
      </div>
    </animated.div>
  );
};

export default CustomToast;
