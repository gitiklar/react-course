import React from 'react';

function PagesContainer(props) {
  return (
    <div>
      <h1>Hello World</h1>
      {props.children}
      <h1>Hi all</h1>
    </div>
  );
}

export function Page1(props) {
  return (
    <PagesContainer>
      <p>Page 1</p>
      <p>Page 111</p>
    </PagesContainer>
  );
}

export function Page2(props) {
  return (
    <PagesContainer>
      <p>Page 2</p>
      <p>Page 222</p>
    </PagesContainer>
  );
}


