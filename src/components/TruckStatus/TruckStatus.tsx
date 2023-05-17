import React, { useState } from "react";
import { Checkbox, Menu, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { SubMenu } = Menu;

interface MenuItem {
  label: string;
  key: string;
  children?: MenuItem[];
}

const TruckStatus: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const items: MenuItem[] = [
    {
      label: "Truck Status",
      key: "truckStatus",
      children: [
        { label: "All Trucks", key: "allTrucks" },
        { label: "Available Trucks", key: "availableTrucks" },
        { label: "UnAvailable  Trucks", key: "unAvailableTrucks" },
      ],
    },
  ];

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      className="bg-white w-full h-full"
    >
      {items.map((item) => (
        <SubMenu
          key={item.key}
          title={item.label}
          className=" text-black text-lg"
        >
          {item.children?.map((childItem) => (
            <Menu.Item key={childItem.key} className="bg-white">
              <Checkbox className="bg-white">{childItem.label}</Checkbox>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default TruckStatus;
