import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  FrownOutlined,
} from '@ant-design/icons';
import { useRoutes, Link } from 'react-router-dom'
import MainLayout from "@/layouts/Main"

import ServerState from "@/pages/ServerState"
import Login from '@/pages/Login';
import NoAuth from '@/pages/Exception/401';
import NotFound from '@/pages/Exception/404';
import ServerError from '@/pages/Exception/500';
import { lazy } from 'react';

/**
 * 定义 ProLayout 所需要的菜单
 */
const menus = [
  {
    path: '/',
    name: '欢迎',
    icon: <SmileFilled />,
    element: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/state',
    name: '服务器状态',
    icon: <SmileFilled />,
    element: <ServerState />,
  },
  {
    path: '/exception',
    name: '异常页面',
    icon: <FrownOutlined />,
    access: 'canAdmin',
    children: [
      {
        path: '/exception/401',
        name: '无权访问（401）',
        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
        element: <NoAuth />,
      },
      {
        path: '/exception/500',
        name: '服务异常（500）',
        icon: <CrownFilled />,
        element: <ServerError />,
      },
      {
        path: '/exception/404',
        name: '页面丢失（404）',
        icon: <CrownFilled />,
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/admin',
    name: '管理页',
    icon: <CrownFilled />,
    access: 'canAdmin',
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
  },
  {
    path: '*',
    element: <NotFound />,
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