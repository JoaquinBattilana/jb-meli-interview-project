import React from 'react';

function TestComponent(props) {
  return (
    <>
      <h1>Hola!</h1>
      {(props?.hola?.chau ? <h1>Chau</h1> : null)}
    </>
  );
}

export default TestComponent;
