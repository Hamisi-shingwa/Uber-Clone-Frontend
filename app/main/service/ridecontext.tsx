import React, { useState, createContext, ReactNode, useContext } from "react";

//data type wil be available on api
interface Service {
  name: string;
  type: string;
  id: number;
}

//data type will pas on my context
interface RideDataType {
  data: Service[]; 
  setData: (newData: Service[]) => void; 
}

//then creation of my context by use Generic sysntax
export const RideDataContext = createContext<RideDataType | undefined>(undefined);


export const RideDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Service[]>([
    { name: "Ride", type: "promo", id: 1 },
    { name: "Poa", type: "faster", id: 2 },
    { name: "Food", type: "food", id: 3 },
    { name: "Reserve", type: "reserve", id: 4 },
    { name: "Boda", type: "faster", id: 5 },
    
  ]);

  return (
    <RideDataContext.Provider value={{ data, setData }}>
      {children}
    </RideDataContext.Provider>
  );
};

//bellow hooks will made easy to access hooks data
export const useRideData = () => {
  const context = useContext(RideDataContext);
  if (context === undefined) {
    throw new Error("useRideData must be used within a RideDataProvider");
  }
  return context;
};
