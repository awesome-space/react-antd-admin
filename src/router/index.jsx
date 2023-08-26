
import Routes, { routes } from "./Routes"
import { BrowserRouter } from 'react-router-dom'



const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export { routes }

export default Router;