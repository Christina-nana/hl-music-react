import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeMessageAction } from './store/modules/counter'
// 状态管理-useSelector中state类型
import store from './store'
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>

function App() {
  // 状态管理-数据
  const { count, message } = useSelector(
    (state: IRootState) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  // 状态管理-修改状态
  const dispatch = useDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('呵呵呵'))
  }

  return (
    <div className="App">
      <div>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="loading.............">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <button onClick={handleChangeMessage}>修改Message</button>
    </div>
  )
}

export default App
