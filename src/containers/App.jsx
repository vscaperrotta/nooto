import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Routes } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import enDictionary from 'Translations/lang-en.json';
import { appRoutes } from 'Routes/routes.jsx';
import { store, persistor } from 'Store/store.js';
import Template from 'Components/Template';

const App = () => {
  return (
    <IntlProvider languageCurrent='en' locale='it' messages={enDictionary}>
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
    </IntlProvider>
  )
};

export default App;
