import React, { useState } from "react";
import { Checkbox, Menu, Radio, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd";

const { Title } = Typography;
const { SubMenu } = Menu;

interface MenuItem {
  label: string;
  key: string;
  children?: MenuItem[];
}
type FilterDrawerProps = {
  selectedTruckType: string | null;
  setSelectedTruckType: React.Dispatch<React.SetStateAction<string | null>>;
};
const TruckType: React.FC<FilterDrawerProps> = (props) => {
  const { selectedTruckType, setSelectedTruckType } = props;
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const items: MenuItem[] = [
    {
      label: "Truck Type",
      key: "truckStatus",
      children: [
        { label: "Self Driven", key: "SelfDriven" },
        { label: "Company Driven", key: "CompanyDriven" },
      ],
    },
  ];

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  // console.log(selectedTruckType);
  const handleRadioChange = (value: string) => {
    setSelectedTruckType(value);
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      className="bg-white w-full h-full border-b-2 border-gray-200"
      theme="light"
    >
      {items.map((item) => (
        <SubMenu
          key={item.key}
          title={item.label}
          className=" text-black text-lg"
        >
          {item.children?.map((childItem) => (
            <Menu.Item
              key={childItem.key}
              className="bg-white flex flex-row"
              style={{ background: "none" }}
            >
              <Radio.Group
                onChange={() => handleRadioChange(childItem.label)}
                value={selectedTruckType}
                className=" flex flex-row"
              >
                <Radio className="" value={childItem.label}>
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

export default TruckType;
