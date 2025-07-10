import { createContext, useEffect } from "react";
// import { main } from "./gemini/main";
// Make sure to import it correctly

export const Context = createContext();

const ContextProvider = (props) => {

  const onsSent = async (prompt) => {
    await main(prompt);
  };

  useEffect(() => {
    // Call once on mount
    onsSent("Hello, how are you?");
  }, []);

  const contextValue = {
    onsSent, // Expose function to consumers
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
