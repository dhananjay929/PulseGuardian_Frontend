import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState("");

  const updateData = (newData) => {
    setSharedData(newData);
  };

  return (
    <MyContext.Provider value={{ sharedData, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
