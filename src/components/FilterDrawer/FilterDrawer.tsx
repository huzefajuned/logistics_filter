import React, { Children, useState } from "react";
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
    label: "Truck Status",
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

interface FilterInputsProps {
  [key: string]: string[];
}
// USE THIS INTERFACE FOR  {isMenuOpen, setIsMenuOpen}
//  FilterMenuInterface = {
//   isMenuOpen: boolean;
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }
const FilterDrawer: React.FC<FilterMenuInterface> = (props) => {
  // const [onApplyFiter, setOnApplyFilter ] = useState()

  // HERE ALL INPUTS ARE SAVED IN A ARRAY OF OBJECT NAMED- filterInputs---
  const [filterInputs, setFilterInputs] = useState<FilterInputsProps>({});

  // PROPS FOR OPEN AND CLOSE MENU
  const { isMenuOpen, setIsMenuOpen } = props;

  // FOR PLACEMENT OF MENU { LEFT SIDE }
  const [placement, setPlacement] = useState<string | any>("right");

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuItemChange = (
    menuItemlabel: string | any,
    childItemlabel: string | any,
    childItemid: string | any
  ) => {
    setFilterInputs((prevFilterInputs) => {
      const updatedFilterInputs = { ...prevFilterInputs };

      if (updatedFilterInputs[menuItemlabel]) {
        // Array already exists, check if item is checked or unchecked
        const itemIndex = updatedFilterInputs[menuItemlabel].indexOf(
          childItemlabel!
        );

        if (itemIndex !== -1) {
          // Item is already checked, remove it
          updatedFilterInputs[menuItemlabel].splice(itemIndex, 1);
        } else {
          // Item is unchecked, add it
          updatedFilterInputs[menuItemlabel].push(childItemlabel!);
        }
      } else {
        // Array doesn't exist, create it and add the item
        updatedFilterInputs[menuItemlabel] = [childItemlabel!];
      }
      return updatedFilterInputs;
    });
  };

  //  CREATES SUB-MENUS  FOR MULTIPLE CASES -- { multiselect, radio etc..}
  const renderMenuItems = () => {
    return menuOptions.map((menuItem) => {
      switch (menuItem.type) {
        case "multiselect":
          return (
            <SubMenu
              title={menuItem.label}
              className="bg-red text-left p-0 relative right-5  text-xl w-full"
              style={{ color: "#6B7280" }}
            >
              <div className="">
                <ul className="w-full mt-2 rounded shadow">
                  {menuItem.entries?.map((childItem) => (
                    <li
                      key={childItem.id}
                      className="px-4 p-2 ml-4 bg-none shadow-none "
                      style={{ background: "white" }}
                    >
                      <input
                        type="checkbox"
                        className="cursor-pointer  bg-black shadow-none w-4 h-4 mt-1 "
                        onChange={() =>
                          handleMenuItemChange(
                            menuItem.label,
                            childItem.label,
                            childItem.id
                          )
                        }
                      />
                      <span className="text-lg tracking-wide font-extralighttext-black p-2    bg-transparent shadow-none">
                        {childItem.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SubMenu>
          );
        case "radio":
          return (
            <SubMenu
              key={menuItem.label}
              title={menuItem.label}
              style={{ color: "#6B7280", background: "none" }}
              className="text-black text-lg  relative right-5"
            >
              <Radio.Group className="flex flex-row justify-between   m-auto p-6">
                {menuItem.entries?.map((childItem) => (
                  <Radio
                    key={childItem.id}
                    className="bg-white text-lg"
                    style={{ color: "#6B7280" }}
                    value={childItem.label}
                    onChange={() =>
                      handleMenuItemChange(
                        menuItem.label,
                        childItem.label,
                        childItem.id
                      )
                    }
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
      <div className="flex flex-row w-full items-center justify-around h-20 rounded">
        <div className="flex flex-row w-full items-center">
          <Title
            level={2}
            className="text-white text-center justify-center items-center ml-2 mt-3"
          >
            Filters
          </Title>
        </div>
        <div className="text-center p-2 w-6/12 flex flex-row items-center justify-center">
          <Button
            type="primary"
            className="tracking-wider font-sans bg-blue-500 h-11 w-32"
            style={{ fontWeight: "280" }}
            onClick={() => console.log(filterInputs)}
          >
            Apply Filter
          </Button>
          <CloseOutlined
            className="text-xl text-black p-2 ml-4 rounded 0 bg-slate-100"
            type="default"
            shape="circle"
            onClick={handleMenuClose}
          />
        </div>
      </div>
      {/* MENU --  WHERE ALL MENU OPTIONS WILL SHOWN-- */}
      <Menu mode="inline" theme="light" selectedKeys={selectedKeys}>
        {/* THIS FUNCTION RENDERS MENU-ITEMS ISNIDE MENU */}
        {renderMenuItems()}
      </Menu>
    </Drawer>
  );
};

export default FilterDrawer;
