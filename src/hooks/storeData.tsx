import { useState } from "react";
import { json } from "react-router-dom";

export function useCustomHookToStoreLocalData(
  key: string,
  initValue: any
): any {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item: any = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initValue;
    } catch (error) {
      console.error(error);
    }

    const setStoredValue = (value: Function) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        console.log(value);
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(error);
      }
    };
  });
  console.log(storedValue);
  return [storedValue, setStoredValue];
}
