import React, { useState } from "react";
import { FilterMenuInterface } from "../../App";
import { Button, Typography, Checkbox, Radio, Drawer, Menu } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { SubMenu } = Menu;

interface MenuItem {
  type?: "multiselect" | "radio";
  label?: string;
  entries?: { label: string; id: string }[];
}

const menuOptions: MenuItem[] = [
  {
    type: "multiselect",
    label: " Truck Status",
    entries: [
      { label: "Unavailable", id: "1" },
      { label: "Available", id: "2" },
    ],
  },
  {
    type: "multiselect",
    label: "Assigned Truck",
    entries: [
      { label: "BMW", id: "1" },
      { label: "Toyota", id: "2" },
      { label: "Honda", id: "3" },
      { label: "Volvo VNL 760", id: "4" },
      { label: "Ford E-450", id: "5" },
      { label: "Chevrolet Express", id: "6" },
      { label: "International LT 6X4", id: "7" },
    ],
  },
  {
    type: "radio",
    label: "Truck Type",
    entries: [
      { label: "All", id: "1" },
      { label: "Company Driven", id: "2" },
      { label: "Self Driven", id: "3" },
    ],
  },
];

// USE THIS INTERFACE FOR  {isMenuOpen, setIsMenuOpen}

//  FilterMenuInterface = {
//   isMenuOpen: boolean;
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }
const FilterDrawer: React.FC<FilterMenuInterface> = (props) => {
  // PROPS FOR OPEN AND CLOSE MENU
  const { isMenuOpen, setIsMenuOpen } = props;

  // FOR PLACEMENT OF MENU { LEFT SIDE }
  const [placement, setPlacement] = useState<string | any>("right");

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  //  CREATES SUB-MENUS  FOR MULTIPLE CASES -- { multiselect, radio etc..}
  const renderMenuItems = () => {
    return menuOptions.map((menuItem) => {
      switch (menuItem.type) {
        case "multiselect":
          return (
            <SubMenu
              key={menuItem.label}
              title={menuItem.label}
              className="text-black text-lg border-b-2 border-gray-200"
              style={{ background: "none" }}
            >
              {menuItem.entries?.map((childItem) => (
                <Menu.Item key={childItem.id}>
                  <Checkbox
                    className="bg-red checked:bg-transparent"
                    onChange={() => console.log(childItem.label)}
                    style={{ background: "none" }}
                  >
                    {childItem.label}
                  </Checkbox>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        case "radio":
          return (
            <SubMenu
              key={menuItem.label}
              title={menuItem.label}
              className="text-black text-lg  border-b-2 border-gray-200"
            >
              <Radio.Group className="flex flex-row justify-between bg-white  m-auto p-2">
                {menuItem.entries?.map((childItem) => (
                  <Radio
                    key={childItem.id}
                    className="bg-white"
                    value={childItem.label}
                  >
                    {childItem.label}
                  </Radio>
                ))}
              </Radio.Group>
            </SubMenu>
          );
        default:
          return null;
      }
    });
  };

  return (
    <Drawer
      placement={placement}
      width={500}
      extra={false}
      closable={false}
      open={isMenuOpen}
      style={{
        backgroundColor: "white",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
      }}
    >
      {/* HEADER--  */}
      <div className="flex flex-row w-full items-center justify-around h-24 rounded">
        <div className="flex flex-row w-full items-center">
          <Title
            level={2}
            className="text-white text-center justify-center items-center mt-3"
          >
            Filters
          </Title>
        </div>
        <div className="text-center p-2 w-6/12 flex flex-row items-center justify-center">
          <Button
            type="primary"
            className="tracking-wider font-sans bg-blue-600 h-12 w-36"
            style={{ fontWeight: "280" }}
            onClick={() => console.log("filter Applied")}
          >
            Apply Filter
          </Button>
          <CloseOutlined
            className="text-4xl text-black p-1 ml-4 rounded 0 bg-slate-100"
            type="default"
            shape="circle"
            onClick={handleMenuClose}
          />
        </div>
      </div>
      {/* MENU --  WHERE ALL MENU OPTIONS WILL SHOWN-- */}
      <div className="bg-white w-full mt-5 p-2">
        <Menu
          mode="inline"
          theme="light"
          selectedKeys={selectedKeys}
          style={{
            backgroundColor: "white",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            width: "400px",
            margin: "auto",
          }}
        >
          {/* THIS FUNCTION RENDERS MENU-ITEMS ISNIDE MENU */}
          {renderMenuItems()}
        </Menu>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
