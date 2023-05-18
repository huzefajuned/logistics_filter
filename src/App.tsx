import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import axios from "axios";

export type FilterMenuInterface = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ApplyFilterBtnInterface = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export type driversInterface = {
  Profile: string;
  Driver_Name: string;
  Truck_Type: string;
  Address: string;
  Assigned_Truck: string;
  Status: string;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // saving all loaded data
  const [jsonData, setJsonData] = useState<driversInterface[]>([]);

  //  api call after clicking filter button.
  const [onApplyFiter, setOnApplyFilter] = useState<boolean>(false);

  // selectedTruckStatus  from TruckSatus component.
  const [selectedTruckStatus, setSelectedTruckStatus] = useState<string | null>(
    null
  );
  // selectedTruckType  from TruckType component.
  const [selectedTruckType, setSelectedTruckType] = useState<string | null>(
    null
  );

  // selectedAssingedTruck  from AssingedTruck component.
  const [selectedAssingedTruck, setSelectedAssignedTruck] = useState<string[]>(
    []
  );

  console.log("selectedAssingedTruck", selectedAssingedTruck);
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

  // filtering data based on auery after {onApplyFiterBtn==true}
  useEffect(() => {
    if (onApplyFiter === false) return;
    const fetchData = async () => {
      try {
        const response = await axios.get("drivers.json");
        const data = response.data;
        const filteredData = data.filter((item: any) => {
          if (selectedTruckStatus && selectedTruckType && selectedAssingedTruck)
            return (
              item.Status === selectedTruckStatus &&
              item.Truck_Type === selectedTruckType &&
              selectedAssingedTruck.includes(item.Assigned_Truck)
            );
          else if (selectedTruckStatus && selectedTruckType)
            return (
              item.Status === selectedTruckStatus &&
              item.Truck_Type === selectedTruckType
            );
          else if (selectedTruckStatus) {
            return item.Status === selectedTruckStatus;
          } else if (selectedTruckType) {
            return item.Truck_Type === selectedTruckType;
          }
          return true;
        });
        await setJsonData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [onApplyFiter]);
  return (
    <>
      <Dashboard
        jsonData={jsonData}
        setJsonData={setJsonData}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        onApplyFilter={onApplyFiter}
        setOnApplyFilter={setOnApplyFilter}
        selectedTruckStatus={selectedTruckStatus}
        setSelectedTruckStatus={setSelectedTruckStatus}
        selectedTruckType={selectedTruckType}
        setSelectedTruckType={setSelectedTruckType}
        selectedAssingedTruck={selectedAssingedTruck}
        setSelectedAssignedTruck={setSelectedAssignedTruck}
      />
    </>
  );
}

export default App;
