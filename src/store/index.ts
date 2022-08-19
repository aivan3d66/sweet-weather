import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from '../reducers'
import rootSaga from '../saga'

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare),
)

sagaMiddleWare.run(rootSaga)
