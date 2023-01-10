import Login from '@/pages/auth/login'
import { useRoutes, RouteObject } from 'react-router-dom'

const routes: Array<RouteObject> = [{ path: '/', element: <Login /> }]

const Router = () => useRoutes(routes)

export default Router
