import React, { useState } from "react";
import SideMenuIcon from "../../components/SideMenuIcon/SideMenuIcon";
import SideMenuItem from "../../components/SideMenuItem/SideMenuItem";
import TruckHeader from "../../components/TruckHeader/TruckHeader";
import ListDrivers from "../../components/ListDrivers/ListDrivers";
import { FilterMenuInterface, driversInterface } from "../../App";

interface DashboardProps extends FilterMenuInterface {
  onApplyFilter: boolean;
  setOnApplyFilter: React.Dispatch<React.SetStateAction<boolean>>;
  jsonData: driversInterface[];
  setJsonData: React.Dispatch<React.SetStateAction<driversInterface[]>>;
  selectedTruckStatus: string | null;
  setSelectedTruckStatus: React.Dispatch<React.SetStateAction<string | null>>;
  selectedTruckType: string | null;
  setSelectedTruckType: React.Dispatch<React.SetStateAction<string | null>>;
  selectedAssingedTruck: string[];
  setSelectedAssignedTruck: React.Dispatch<React.SetStateAction<string[]>>;
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const {
    jsonData,
    setJsonData,
    onApplyFilter,
    setOnApplyFilter,
    selectedTruckStatus,
    setSelectedTruckStatus,
    selectedTruckType,
    setSelectedTruckType,
    selectedAssingedTruck,
    setSelectedAssignedTruck,
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="bg-white-100 w-full h-screen flex flex-row  justify-center ">
      <div className="bg-gray-100 text-center w-14 m-1">
        <SideMenuIcon />
      </div>
      <div className=" bg-gray-100 w-72  m-1">
        {" "}
        <SideMenuItem />
      </div>
      <div className=" w-full m-1">
        <TruckHeader
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onApplyFilter={onApplyFilter}
          setOnApplyFilter={setOnApplyFilter}
          selectedTruckStatus={selectedTruckStatus}
          setSelectedTruckStatus={setSelectedTruckStatus}
          selectedTruckType={selectedTruckType}
          setSelectedTruckType={setSelectedTruckType}
          selectedAssingedTruck={selectedAssingedTruck}
          setSelectedAssignedTruck={setSelectedAssignedTruck}
        />
        <ListDrivers jsonData={jsonData} />
      </div>
    </div>
  );
};

export default Dashboard;
