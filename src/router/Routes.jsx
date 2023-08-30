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


/**
 * 定义路由
 */
const routes = [
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
    name: '列表页',
    icon: <TabletFilled />,
    path: '/list',
    component: './ListTableList',
    routes: [
      {
        path: '/list/sub-page',
        name: '列表页面',
        icon: <CrownFilled />,
        routes: [
          {
            path: 'sub-sub-page1',
            name: '一一级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: 'sub-sub-page2',
            name: '一二级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: 'sub-sub-page3',
            name: '一三级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        path: '/list/sub-page2',
        name: '二级列表页面',
        icon: <CrownFilled />,
        component: './Welcome',
      },
      {
        path: '/list/sub-page3',
        name: '三级列表页面',
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

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      routes: routes,
      children: routes
    }
  ]);
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
    onClick={() => {
      // console.log(item, dom);
      // setPathname(item.path || '/welcome');
    }}
  >
    {dom}
  </Link>
)

export { routes, routeRender }

export default Routes;