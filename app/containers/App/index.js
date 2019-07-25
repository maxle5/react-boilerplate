/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

// libs
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// containers/components
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// utils
import GlobalStyle from 'global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
