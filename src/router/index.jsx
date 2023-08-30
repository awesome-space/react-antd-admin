
import Routes, { routes, routeRender } from "./Routes"
import { BrowserRouter } from 'react-router-dom'



const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export { routes, routeRender }

export default Router;