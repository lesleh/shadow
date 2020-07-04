/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Title = styled.h1`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <Title>This is shielded from global styles</Title>
    </div>
  );
}

export default App;
