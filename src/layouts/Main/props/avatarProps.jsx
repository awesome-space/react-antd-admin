import Avatar from "@/assets/images/avatar.png";

import { Dropdown } from "antd"
import { GlobalOutlined, LogoutOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { message } from "antd";


const AvatarDropdown = ({ props, dom }) => {
  const navigate = useNavigate();
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
          switch (key) {
            case 'logout': {
              window.localStorage.removeItem('token');
              message.success('退出成功');
              setTimeout(() => {
                navigate("/login");
              },1000)
            }
          }
        }
      }}
    >
      {dom}
    </Dropdown>
  );
}


const avatarProps = {
  src: Avatar,
  size: 'small',
  title: 'XiaoHe',
  render: (props, dom) => <AvatarDropdown {...props} dom={dom} />,
}

export default avatarProps;