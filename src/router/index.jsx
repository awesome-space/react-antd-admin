
import Routes, { menus, routeRender } from "./Routes"
import { useLocation } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom'




const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export { menus, routeRender }

export default Router;