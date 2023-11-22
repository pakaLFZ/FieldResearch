import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import {
  renderRoutes
} from 'react-router-config'

const Home_ = React.lazy(() => import('pages/Home/index.jsx'))


const Home = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Home_ />
  </Suspense>
)


const RedirectTo404 = () => <Redirect to='/404' />
RedirectTo404.displayName = '404redirection'
const p404 = {
  path: '*',
  component: RedirectTo404
}

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },

]

const GetRouter = () => {
  return (
    <Router>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Router>
  )
}

export default GetRouter
