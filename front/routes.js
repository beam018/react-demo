import PageLayout from './pages/PageLayout'

import PageIndex from './pages/PageIndex'
import PageSearch from './pages/PageSearch'

import PageNotFound from './pages/PageNotFound'

const routes = {
  path: '/',
  component: PageLayout,
  indexRoute: { component: PageIndex },
  childRoutes: [
    { path: 'search', component: PageSearch },
    // 404
    { path: '*', component: PageNotFound },
  ]
}

export default routes
