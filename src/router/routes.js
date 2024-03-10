import Home from '@/views/Home'
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    name: 'blog',
    path: '/article',
    component: () => import('@/views/Blog'),
    meta: {
      title: '文章'
    }
  },
  {
    name: 'categoryBlog',
    path: '/article/cate/:categoryId',
    component: () => import('@/views/Blog'),
    meta: {
      title: '文章详情'
    }
  },
  {
    name: 'blogDetail',
    path: '/article/:id',
    component: () => import('@/views/Blog/Detail'),
    meta: {
      title: '文章详情'
    }
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/About'),
    meta: {
      title: '关于'
    }
  },
  {
    name: 'project',
    path: '/project',
    component: ()=> import('@/views/Project'),
    meta: {
      title: '项目&效果'
    }
  },
  {
    name: 'message',
    path: '/message',
    component: () => import('@/views/Message'),
    meta: {
      title: '留言板'
    }
  },
]

export default routes