
import Routes, { menus, routeRender } from "./Routes"
import { BrowserRouter, useLocation } from 'react-router-dom'

import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

import React, { useEffect, Fragment,Suspense } from 'react';

const NProgress = () => {
  useEffect(() => {
    nprogress.start()
    return () => {
      nprogress.done()
    }
  }, [])
  return (
    <Fragment />
  );
};



const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<NProgress />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  )
}

export { menus, routeRender }

export default Router;