import React, { useState } from "react";
import { Menu, Radio } from "antd";

const { SubMenu } = Menu;

interface MenuItem {
  label: string;
  key: string;
  children?: MenuItem[];
}

type filterDarwerProps = {
  selectedTruckStatus: string | null;
  setSelectedTruckStatus: React.Dispatch<React.SetStateAction<string | null>>;
};
const TruckStatus: React.FC<filterDarwerProps> = (props) => {
  const { selectedTruckStatus, setSelectedTruckStatus } = props;
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const items: MenuItem[] = [
    {
      label: "Truck Status",
      key: "truckStatus",
      children: [
        { label: "All Trucks", key: "all" },
        { label: "Available Trucks", key: "Available" },
        { label: "UnAvailable  Trucks", key: "Unavailable" },
      ],
    },
  ];

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const handleRadioChange = (value: string) => {
    setSelectedTruckStatus(value);
  };

  // console.log("selectedTruckStatus is", selectedTruckStatus);
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      theme="light"
      className=" text-black w-full h-full border-b-2 border-gray-200 "
    >
      {items.map((item) => (
        <SubMenu
          key={item.key}
          title={item.label}
          className=" text-black text-lg"
          theme="light"
          style={{ background: "none" }}
        >
          {item.children?.map((childItem) => (
            <Menu.Item key={childItem.key} style={{ background: "none" }}>
              <Radio.Group
                onChange={() => handleRadioChange(childItem.key)}
                value={selectedTruckStatus}
              >
                <Radio
                  disabled={Number(childItem.label) === 0}
                  value={childItem.key}
                >
                  {childItem.label}
                </Radio>
              </Radio.Group>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default TruckStatus;
