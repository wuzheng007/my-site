import Home from '@/views/Home'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/Detail'
import About from '@/views/About'
import Project from '@/views/Project'
import Message from '@/views/Message'
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
    component: Blog,
    meta: {
      title: '文章'
    }
  },
  {
    name: 'categoryBlog',
    path: '/article/cate/:categoryId',
    component: Blog,
    meta: {
      title: '文章详情'
    }
  },
  {
    name: 'blogDetail',
    path: '/article/:id',
    component: BlogDetail,
    meta: {
      title: '文章详情'
    }
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    name: 'project',
    path: '/project',
    component: Project,
    meta: {
      title: '项目&效果'
    }
  },
  {
    name: 'message',
    path: '/message',
    component: Message,
    meta: {
      title: '留言板'
    }
  },
]

export default routes