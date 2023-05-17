import React from "react";
import { Table, Button, Space, Avatar, Spin } from "antd";
import { ColumnsType } from "antd/es/table";

import { driversInterface } from "../../App";
import {
  PlusOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

// const driversdata: driversInterface[] = [{} as driversInterface];

const columns: ColumnsType<driversInterface> = [
  {
    title: "Profile",
    dataIndex: "Profile",
    key: "Serial_Number",
    render: (url) => <Avatar src={url} />,
    ellipsis: true,
  },
  {
    title: "Driver Name",
    dataIndex: "Driver_Name",
    key: "name",
    ellipsis: true,
  },
  {
    title: "Truck Type",
    dataIndex: "Truck_Type",
    key: "Truck_Number",
    ellipsis: true,
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Miles",
    ellipsis: true,
  },
  {
    title: "Assined Truck",
    dataIndex: "Assigned_Truck",
    key: "Miles",
    ellipsis: true,
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "status",
    ellipsis: true,
  },
  {
    title: "Action",
    key: "Action",
    ellipsis: true,
    render: () => (
      <Space>
        <Button icon={<EyeOutlined />}></Button>
        <Button icon={<EditOutlined />}></Button>
        <Button danger icon={<DeleteOutlined />}></Button>
      </Space>
    ),
  },
];
const ListLoads: React.FC<{ jsonData: driversInterface[] }> = (props) => {
  console.log(props.jsonData);
  return (
    <div className=" mt-4 p-2 flex flex-row justify-center z-0">
      <Table
        className="w-12/12 p-0 border border-1 border-#D4D4D4-400  rounded"
        dataSource={props.jsonData}
        columns={columns}
        pagination={{
          pageSize: 8,
          showQuickJumper: false,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default ListLoads;
