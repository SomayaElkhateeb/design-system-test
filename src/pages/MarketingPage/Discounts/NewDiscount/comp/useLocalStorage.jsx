import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    const current = window.localStorage.getItem(key);
    if (current) {
      setValue(JSON.parse(current));
    } else {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
    }
  }, [key, defaultValue]);

  const updateValue = (newValue) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      setValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, updateValue];
};

export default useLocalStorage;
