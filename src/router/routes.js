import Home from '@/views/Home'
import Blog from '@/views/Blog'
import About from '@/views/About'
import Project from '@/views/Project'
import Message from '@/views/Message'
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'blog',
    path: '/article',
    component: Blog
  },
  {
    name: 'categoryBlog',
    path: '/article/cate/:categoryId',
    component: Blog
  },
  {
    name: 'about',
    path: '/about',
    component: About
  },
  {
    name: 'project',
    path: '/project',
    component: Project
  },
  {
    name: 'message',
    path: '/message',
    component: Message
  },
]

export default routes