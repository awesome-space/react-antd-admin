import Avatar from "@/assets/images/avatar.png";

import { Dropdown } from "antd"
import { GlobalOutlined, LogoutOutlined } from "@ant-design/icons"
const avatarProps = {
  src: Avatar,
  size: 'small',
  title: 'XiaoHe',
  render: (props, dom) => {
    return (
      <Dropdown
        menu={{
          items: [
            {
              key: 'language',
              icon: <GlobalOutlined />,
              label: '语言',
            },
            {
              key: 'logout',
              icon: <LogoutOutlined />,
              label: '退出登录',
            }
          ],
          onClick: ({ key }) => {
            console.log(key);
            switch (key) {
              case 'logout': {
                window.localStorage.removeItem('token');
                redirect("/login");
              }
            }
          }
        }}
      >
        {dom}
      </Dropdown>
    );
  },
}

export default avatarProps;