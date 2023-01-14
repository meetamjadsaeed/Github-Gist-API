import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";

const items = [
  {
    label: "Navigation One",
    key: "One",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation two",
    key: "two",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation three",
    key: "three",
    icon: <MailOutlined />,
  },
];

const MainNav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MainNav;
