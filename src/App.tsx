import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import axios from "axios";

export interface FilterMenuInterface  {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface driversInterface {
  Profile: string;
  Driver_Name: string;
  Truck_Type: string;
  Address: string;
  Assigned_Truck: string;
  Status: string;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [jsonData, setJsonData] = useState<driversInterface[]>([]);

  

  // laoding all Drivers Data once app load
  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await axios.get("drivers.json");
        const data = response.data;
        setJsonData(data);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchJsonData();
  }, []);

  // filtering data based on query 
  useEffect(()=>{

  },[])
  return (
    <>
      <Dashboard
        jsonData={jsonData}
        setJsonData={setJsonData}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
}

export default App;
