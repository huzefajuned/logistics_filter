import React, { useState } from "react";
import { Checkbox, Menu, Radio, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { SubMenu } = Menu;

interface MenuItem {
  label: string;
  key: string;
  children?: MenuItem[];
}

const TruckType: React.FC = () => {
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
              <Radio.Group>
                <Radio>{childItem.label}</Radio>
              </Radio.Group>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default TruckType;
