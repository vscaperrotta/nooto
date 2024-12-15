import { Route } from "react-router-dom";
import Home from './Home';
import Detail from './Detail';
import About from './About';
// @generator routes:import

export const appRoutes = () => ({
  routes: [
    {
      component: () => (
        <Route
          path="/"
          key="Home"
          element={
            <Home />
          }
        />
      ),
    },
    {
      component: () => (
        <Route
          path="/note"
          key="Detail"
          element={
            <Detail />
          }
        />
      ),
    },
    {
      component: () => (
        <Route
          path="/about"
          key="About"
          element={
            <About />
          }
        />
      ),
    },
    // @generator routes:define:auth


  ]
});
