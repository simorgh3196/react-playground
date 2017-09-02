import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { counter } from './modules/counter/Reducer';
import { StoreState } from './StoreState';
import Counter from './containers/Counter';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(counter, {
  count: 0
});

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
