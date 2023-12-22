import React from "react";
import Control from "./layouts/Control";
import ItemContextProvider from "./Store/itemContext";

const App = () => {
  return (
    <ItemContextProvider>
      <Control />
    </ItemContextProvider>
  );
};

export default App;
