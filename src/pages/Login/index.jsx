import {
  LoginFormPage,
  ProFormCheckbox,
} from '@ant-design/pro-components';
import { message, Tabs } from 'antd';
import { useState } from 'react';
import PhoneLoginForm from './components/PhoneLogin';
import AccountLoginForm from './components/AccountLogin';
import OthersLogin from './components/OtherLogin';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('account');
 


  const onFinish = () => {
    message.success('登录成功');
    setTimeout(() => {
      navigate("/");
    },1000)
  }



  return (
    <LoginFormPage
      backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
      // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      title="React Antd Admin"
      subTitle="基于 React、Antd 的管理系统"
      style={
        { overflow: "hidden", flexDirection: "row-reverse" }
      }
      onFinish={onFinish}
      actions={<OthersLogin />}
    >
      <Tabs
        centered
        activeKey={loginType}
        onChange={(activeKey) => setLoginType(activeKey)}

        items={[
          {
            key: 'account',
            label: '账号密码登录',
          },
          {
            key: 'phone',
            label: '手机号登录',
          }
        ]}
      >
      </Tabs>

      {loginType === 'account' ? <AccountLoginForm /> : <PhoneLoginForm />}

      <div
        style={{
          marginBlockEnd: 24,
        }}
      >
        <ProFormCheckbox noStyle name="autoLogin">
          自动登录
        </ProFormCheckbox>
        <a
          style={{
            float: 'right',
          }}
        >
          忘记密码
        </a>
      </div>
    </LoginFormPage>
  );
};

export default Login;