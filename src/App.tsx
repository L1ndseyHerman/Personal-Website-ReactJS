import React from "react";
import Wrapper from "./components/Wrapper";

const App: React.FC = () => {
  return (
    <div>
      <Wrapper title="Some Title">
        <p>Some Other Text</p>
      </Wrapper>
    </div>
  );
};

export default App;
