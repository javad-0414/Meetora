
const routes = [
  // صفحات عمومی
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/IndexPage.vue')
      }
    ]
  },

  // صفحات ورود و ثبت نام
  {
    path: '/',
    component: () => import('../layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('../pages/LoginPage.vue')
      },
      {
        path: 'register',
        component: () => import('../pages/RegisterPage.vue')
      }
    ]
  },

  // داشبورد
  {
    path: '/dashboard',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/dashboard/DashboardPage.vue'),
        meta: { title: 'داشبورد' }
      },
      {
        path: 'rooms',
        component: () => import('../pages/dashboard/RoomsPage.vue'),
        meta: { title: 'مدیریت اتاق‌ها' }
      },
      {
        path: 'bookings',
        component: () => import('../pages/dashboard/BookingsPage.vue'),
        meta: { title: 'رزرو جلسات' }
      }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]

export default routes
