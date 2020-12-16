import React from 'react';

export default function Person() {
  console.log(typeof React);
  console.log(React);
  return (
      React.createElement("div", null,
      React.createElement("p", { className: "demo" }, "Hello World"))
  );
}
