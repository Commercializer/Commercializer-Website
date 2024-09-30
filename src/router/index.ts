import { createRouter, createWebHistory } from 'vue-router'
import { allRoutes } from '@/router/routes'
import { useFakeAuthStore } from '@/stores/fakeAuth'

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes
})

// Before each route for page title
router.beforeEach((to, from, next) => {
  const title = to.meta.title as string | undefined
  if (title) {
    document.title = title
  }
  next()
})

// Before each route for login
router.beforeEach((routeTo, routeFrom, next) => {
  // Check if auth is required on this route
  // (including nested routes).
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)

  // If auth isn't required for the route, just continue.
  if (!authRequired) return next()

  let useFakeAuth = useFakeAuthStore()
  // If auth is required and the user is logged in...
  if (useFakeAuth.isAuthenticated) {
    return next()
  }

  // If auth is required and the user is NOT currently logged in,
  // redirect to login.
  redirectToLogin()

  function redirectToLogin() {
    // Pass the original route to the login component
    next({ name: 'account.sign-in', query: { redirectFrom: routeTo.fullPath } })
  }
})

export default router
