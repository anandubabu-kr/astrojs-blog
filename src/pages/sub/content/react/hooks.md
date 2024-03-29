---
layout: layouts/MarkdownPostLayout.astro
title: 'Custom Hooks'
pubDate: 2023-22-06
description: ''
author: 'Anandu Babu'
tags: ["astro", "blogging", "learning in public"]

---

# useLocalStorage

```js
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get the stored value from localStorage
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
      return initialValue;
    }
  });

  // Update the stored value in localStorage
  const setValue = (value) => {
    try {
      // Save the value to localStorage
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}
```
