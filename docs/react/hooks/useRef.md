---
id: useRef hook
title: useRef Hook Concept
sidebar_label: useRef Hook
sidebar_position: 7
tags: [react, create-react-app, useRef, hooks, react-scripts, react-dom, react-app]
hide_table_of_contents: true
---

The `useRef` hook is a built-in React hook that allows you to create mutable references to DOM elements or any other value that persists across renders in functional components.

<AdsComponent />

<br />

**Explanation:**

`useRef` is used to maintain mutable references to elements or values across renders without triggering a re-render. It's particularly useful for accessing the DOM elements directly or storing any mutable value that persists for the entire lifetime of the component.

When you call `useRef`, it returns a mutable `ref` object whose `.current` property is initialized to the passed argument (`null` in the absence of an argument). This property can hold any mutable value.

**Example:**

```jsx title="FocusInput.js"
import React, { useRef } from 'react';

function FocusInput() {
  // Create a 'ref' object initialized to 'null'
  const inputRef = useRef(null);

  // Function to focus on the input element
  const handleClick = () => {
    inputRef.current.focus(); // Access and focus the input element
  };

  return (
    <div>
      {/* Assign 'inputRef' to the input element */}
      <input ref={inputRef}

 type="text" />
      {/* Button uses 'handleClick' function to focus on input */}
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
```

In this example, `useRef` is used to create a reference (`inputRef`) to the input element. When the button is clicked, `handleClick` function accesses `inputRef.current` to focus on the input element without causing a re-render of the component.
