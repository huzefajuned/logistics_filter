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

interface FilterDrawerProps {
  selectedAssingedTruck: string[];
  setSelectedAssignedTruck: React.Dispatch<React.SetStateAction<string[]>>;
}
const AssingnedTruck: React.FC<FilterDrawerProps> = (props) => {
  const { selectedAssingedTruck, setSelectedAssignedTruck } = props;
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleCheckedTrucks =
    (value: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;

      if (checked) {
        setSelectedAssignedTruck((prevCheckedItems) => {
          if (!prevCheckedItems.includes(value)) {
            return [...prevCheckedItems, value];
          }
          return prevCheckedItems;
        });
      } else {
        setSelectedAssignedTruck((prevCheckedItems) =>
          prevCheckedItems.filter((item) => item !== value)
        );
      }
    };
  const items: MenuItem[] = [
    {
      label: " Assigned Truck",
      key: "assignedTruck",
      children: [
        { label: "Ford", key: "Fordd" },
        { label: "Volvo", key: "Volvo" },
        { label: "Chevrolet Silverado", key: "ChevroletSilverado" },
        { label: "Toyota Tundra", key: "ToyotaTundra" },
        { label: "Nissan Titan", key: "NissanTitan" },
        { label: "Jeep Gladiator", key: "JeepGladiator" },
        { label: "Honda Ridgeline ", key: "HondaRidgeline" },
        { label: "RAM 1500", key: "RAM1500" },
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
      className="bg-white w-full h-full border-b-2 border-gray-200"
      theme="light"
      style={{ background: "none" }}
    >
      {items.map((item) => (
        <SubMenu
          key={item.key}
          title={item.label}
          className=" text-black text-lg"
          style={{ background: "none" }}
        >
          {item.children?.map((childItem) => (
            <Menu.Item
              key={childItem.key}
              className="bg-transparent"
              style={{ background: "none" }}
            >
              <Checkbox
                onChange={(event: any) =>
                  handleCheckedTrucks(childItem.label)(event)
                }
                className="bg-white checked:bg-transparent checked:border-gray-300"
              >
                {childItem.label}
              </Checkbox>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default AssingnedTruck;
