import React, { useState } from "react";
import SideMenuIcon from "../../components/SideMenuIcon/SideMenuIcon";
import SideMenuItem from "../../components/SideMenuItem/SideMenuItem";
import ActiveLoadsHeader from "../../components/TruckHeader/TruckHeader";
import ListLoads from "../../components/ListDrivers/ListDrivers";
import { FilterMenuInterface, driversInterface } from "../../App";

type DashBoardProps = FilterMenuInterface & {
  jsonData: driversInterface[];
  setJsonData: React.Dispatch<React.SetStateAction<driversInterface[]>>;
};

const Dashboard: React.FC<DashBoardProps> = (props) => {
  const { jsonData, setJsonData } = props;
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
        <ActiveLoadsHeader
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <ListLoads jsonData={jsonData}  />
      </div>
    </div>
  );
};

export default Dashboard;
