import {useEffect,useState} from 'react'

const PREFIX = 'whatsapp-clone';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(prefixedKey);
      if (jsonValue != null) return JSON.parse(jsonValue);
    } catch (error) {
      // Handle JSON parsing error here, such as setting a default value
      console.error('Error parsing JSON:', error);
    }

    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(prefixedKey, JSON.stringify(value));
    } catch (error) {
      // Handle error while saving to localStorage
      console.error('Error saving to localStorage:', error);
    }
  }, [prefixedKey, value]);

  return [value, setValue];
}

