import React, { FunctionComponent } from 'react'
import { Home } from 'src/pages/home'
import { Provider } from 'react-redux'
import store, { persistor } from 'src/shared/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Test } from 'src/pages/test/Test'

export const App: FunctionComponent = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>
)
