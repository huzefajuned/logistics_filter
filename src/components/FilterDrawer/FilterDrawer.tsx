import React, { useState } from "react";
import { FilterMenuInterface } from "../../App";
import { Button, Typography, Dropdown, Space, Drawer } from "antd";
import type { MenuProps } from "antd";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";
import TruckStatus from "../TruckStatus/TruckStatus";
import AssingnedTruck from "../AssingnedTruck/AssingnedTruck";
import TruckType from "../TruckType/TruckType";
const { Title } = Typography;

const FilterDrivers = (props: FilterMenuInterface) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  const [placement, setPlacement] = useState<string | any>("right");

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <Drawer
      placement={placement}
      width={500}
      extra={false}
      closable={false}
      // onClose={onClose}
      open={isMenuOpen}
      style={{  
        backgroundColor: "white",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
      }}
    >
      {/* header component */}
      <div className="  flex  flex-row w-full items-center justify-around h-24 rounded">
        <div className="flex flex-row w-full items-center ">
          <Title
            level={2}
            className="text-white text-center justify-center items-center  mt-3"
          >
            Filters
          </Title>
        </div>
        <div className="text-center p-2 w-6/12 flex flex-row items-center justify-center ">
          <Button
            type="primary"
            className="tracking-wider  font-sans bg-blue-600 h-12 w-36 "
            style={{ fontWeight: "280" }}
          >
            Apply Filter
          </Button>
          <CloseOutlined
            className="text-4xl text-black  p-1 ml-4 rounded 0 bg-slate-100 "
            type="default"
            shape="circle"
            onClick={handleMenuClose}
          />
        </div>
      </div>
      {/* dropdown menu for status of driver */}
      <div className=" bg-white w-full mt-5 p-2">
        <TruckStatus />
        <AssingnedTruck />
        <TruckType />
      </div>
    </Drawer>
  );
};

export default FilterDrivers;
