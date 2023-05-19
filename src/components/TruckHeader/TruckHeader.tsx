import { Typography, Input, Button } from "antd";
import {
  StarOutlined,
  AlignCenterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { FilterMenuInterface } from "../../App";
import FilterDrawer from "../FilterDrawer/FilterDrawer";
import React from "react";
const { Text, Title } = Typography;

type TruckHeaderProps = FilterMenuInterface & {
  onApplyFilter: boolean;
  setOnApplyFilter: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTruckStatus: string | null;
  setSelectedTruckStatus: React.Dispatch<React.SetStateAction<string | null>>;
  selectedTruckType: string | null;
  setSelectedTruckType: React.Dispatch<React.SetStateAction<string | null>>;
  selectedAssingedTruck: string[];
  setSelectedAssignedTruck: React.Dispatch<React.SetStateAction<string[]>>;
};
const TruckHeader: React.FC<TruckHeaderProps> = (props) => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    onApplyFilter,
    setOnApplyFilter,
    selectedTruckStatus,
    setSelectedTruckStatus,
    selectedTruckType,
    setSelectedTruckType,
    selectedAssingedTruck,
    setSelectedAssignedTruck
  } = props;

  const handleMenuToggle = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className=" flex flex-row justify-between ">
      <div className=" w-7/12 m-auto  flex flex-col  ">
        <div className=" flex flex-row mt-10  ">
          <Title className="tracking-wider" style={{ fontWeight: "280" }}>
            Driver Management
          </Title>
          <StarOutlined
            className=" w-20 h-18   text-4xl"
            style={{
              fontSize: "34px",
              color: "black",
              transform: "scale(1.0)",
            }}
          />
        </div>

        <div className="text">
          <span className="ml-0"> Dashboard </span> |{" "}
          <span className="ml-2"> Admin </span>|
          <Text
            style={{ color: "blue", cursor: "pointer", marginLeft: "10px" }}
          >
            Driver Management
          </Text>
        </div>
      </div>
      <div className="w-4/12 m-auto  flex flex-row  items-center justify-evenly  ">
        <Input
          placeholder="Search"
          style={{
            width: "200px",
            height: "50px",
            marginRight: "10px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
          }}
          prefix={
            <SearchOutlined
              style={{
                fontSize: "22px",
                backgroundColor: "#ffffff",
              }}
            />
          }
        />
        <Button type="default" className="mr-2 bg-blue-600 text-white h-12">
          Add New Driver
        </Button>
        <AlignCenterOutlined
          className="bg-slate-100 p-1 rounded-md text-4xl"
          onClick={handleMenuToggle}
        />
      </div>
      <FilterDrawer isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default TruckHeader;
