import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/configureStore';

Meteor.startup(() => {
	window.addEventListener('DOMContentLoaded', () => {
    let root = document.createElement('root');
    document.body.appendChild(root);

    ReactDOM.render(
      <Provider store={Store}>
        <div>
          <AppContainer />
        </div>
      </Provider>
      ,
      root
    );
  });
});