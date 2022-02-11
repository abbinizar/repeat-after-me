import React, { useState } from "react";

export const DataContext = React.createContext<any>(null);

export const DataProvider = ({ children }: any) => {
  const [selectedSentence, setSelectedSentence] = useState("");

  const state = {
    selectedSentence,
    setSelectedSentence,
  };

  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};
