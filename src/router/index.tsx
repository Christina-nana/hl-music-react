import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

// 路由懒加载
// 一级路由懒加载
const Focus = lazy(() => import('../views/focus'))
const Discover = lazy(() => import('../views/discover'))
const Download = lazy(() => import('../views/download'))
const Mine = lazy(() => import('../views/mine'))
// 二级路由懒加载
const Album = lazy(() => import('../views/discover/c-views/album'))
const Artist = lazy(() => import('../views/discover/c-views/artist'))
const Djradio = lazy(() => import('../views/discover/c-views/djradio'))
const Ranking = lazy(() => import('../views/discover/c-views/ranking'))
const Recommend = lazy(() => import('../views/discover/c-views/recommend'))
const Songs = lazy(() => import('../views/discover/c-views/songs'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend"></Navigate>
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]
export default routes
