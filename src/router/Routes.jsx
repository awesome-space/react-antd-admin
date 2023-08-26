import {
  SmileFilled,
} from '@ant-design/icons';

import { useRoutes } from 'react-router-dom'

import Home from "@/pages/Home"
import MainLayout from "@/layouts/Main"
/**
 * 定义路由
 */
const routes = [
  {
    path: '',
    name: '欢迎',
    icon: <SmileFilled />,
    element: <Home />,
  }
];

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      icon: <SmileFilled />,
      element: <MainLayout />,
      routes: routes,
      children: routes
    }
  ]);
}

export {
  routes
}

export default Routes;