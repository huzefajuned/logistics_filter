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

const AssingnedTruck: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);


  const items: MenuItem[] = [
    {
      label: " Assigned Truck",
      key: "assignedTruck",
      children: [
        { label: "Ford ", key: "Ford" },
        { label: " Volvo", key: "Volvo" },
        { label: "Chevrolet Silverado ", key: "ChevroletSilverado" },
        { label: "Toyota Tundra ", key: "ToyotaTundra" },
        { label: "Nissan Titan ", key: "NissanTitan" },
        { label: "Jeep Gladiator  ", key: "JeepGladiator" },
        { label: "Honda Ridgeline  ", key: "HondaRidgeline" },
        { label: "RAM 1500 ", key: "RAM1500" }
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

export default AssingnedTruck;
