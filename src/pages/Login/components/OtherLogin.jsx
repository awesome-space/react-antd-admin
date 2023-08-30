
import {
  AlipayOutlined,
  TaobaoOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import { Divider, Space } from 'antd';


const iconStyles = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
}
const OthersLogin = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Divider plain>
        <span
          style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}
        >
          其他登录方式
        </span>
      </Divider>
      <Space align="center" size={24}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 40,
            width: 40,
            border: '1px solid #D4D8DD',
            borderRadius: '50%',
          }}
        >
          <AlipayOutlined style={{
            color: 'rgba(0, 0, 0, 0.2)',
            fontSize: '18px',
            verticalAlign: 'middle',
            cursor: 'pointer',
            color: '#1677FF',
          }} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 40,
            width: 40,
            border: '1px solid #D4D8DD',
            borderRadius: '50%',
          }}
        >
          <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: 40,
            width: 40,
            border: '1px solid #D4D8DD',
            borderRadius: '50%',
          }}
        >
          <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
        </div>
      </Space>
    </div>
  )
}


export default OthersLogin;