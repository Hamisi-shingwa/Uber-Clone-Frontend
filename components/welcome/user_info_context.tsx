import React, { useState, createContext, ReactNode, useContext } from "react";

interface UserData {
    mobile: number;
    firstname: string;
    lastname: string;
  }

  interface UserContextType {
    data: UserData;
    setData: React.Dispatch<React.SetStateAction<UserData>>;
  }

//then creation of my context by use Generic sysntax
export const RegistryContext = createContext<UserContextType | undefined>(undefined);


export const RegContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<UserData>(
   {mobile:0,
    firstname:'',
    lastname:""
}
   
 
    
  );

  return (
    <RegistryContext.Provider value={{ data, setData }}>
      {children}
    </RegistryContext.Provider>
  );
};

//bellow hooks will made easy to access hooks data
export const useRegData = () => {
  const context = useContext(RegistryContext);
  if (context === undefined) {
    throw new Error("useRideData must be used within a RideDataProvider");
  }
  return context;
};
