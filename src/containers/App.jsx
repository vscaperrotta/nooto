import { Provider } from 'react-redux';
import { BrowserRouter, Routes } from "react-router-dom";
import store from 'Store/store.js';
import { appRoutes } from 'Routes/routes.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {appRoutes().routes.map(({ component }) => component())}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
