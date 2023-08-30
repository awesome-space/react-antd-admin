import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';
import { useRoutes, Link } from 'react-router-dom'

import MainLayout from "@/layouts/Main"

import Home from "@/pages/Home"
import ServerState from "@/pages/ServerState"
import Login from '@/pages/Login';


/**
 * 定义 ProLayout 所需要的菜单
 */
const menus = [
  {
    path: '/',
    name: '欢迎',
    icon: <SmileFilled />,
    element: <Home />,
  },
  {
    path: '/state',
    name: '服务器状态',
    icon: <SmileFilled />,
    element: <ServerState />,
  },
  {
    path: '/admin',
    name: '管理页',
    icon: <CrownFilled />,
    access: 'canAdmin',
    element: <Home />,
    children: [
      {
        path: '/admin/sub-page1',
        name: '一级页面',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        component: './Welcome',
      },
      {
        path: '/admin/sub-page2',
        name: '二级页面',
        icon: <CrownFilled />,
        component: './Welcome',
      },
      {
        path: '/admin/sub-page3',
        name: '三级页面',
        icon: <CrownFilled />,
        component: './Welcome',
      },
    ],
  },
  {
    path: 'https://ant.design',
    name: 'Ant Design 官网外链',
    icon: <ChromeFilled />,
  },
]

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: menus
  },
  {
    path: '/login',
    element: <Login />,
  }
]


const Routes = () => {
  return useRoutes(routes);
}


/**
 * 在 ProLayout 中渲染路由
 * @param {*} item 
 * @param {*} dom 
 * @returns 
 */
const routeRender = (item, dom) => (
  <Link
    to={item.path || '/welcome'}
  >
    {dom}
  </Link>
)

export { menus, routeRender }

export default Routes;