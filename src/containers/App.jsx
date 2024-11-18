import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Routes } from "react-router-dom";
import { appRoutes } from 'Routes/routes.jsx';
import { store, persistor } from 'Store/store.js';
import Template from 'Components/Template';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Template>
            <Routes>
              {appRoutes().routes.map(({ component }) => component())}
            </Routes>
          </Template>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
};

export default App;
