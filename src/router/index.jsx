
import Routes, { menus, routeRender } from "./Routes"
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