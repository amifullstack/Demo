import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

// Reducers
import rootReducer from '../Reducers/index';

// DevTools
import DevTools from '../Components/Shared/DevTools';


const enhancer = compose (
  applyMiddleware(logger),
  DevTools.instrument(),
);

const configurStore = () => {
  const Store = createStore(rootReducer, enhancer);

  // Hot reload reducers
  if (module.hot) {
    module.hot.accept('../Reducers/index', () =>
      Store.replaceReducer(rootReducer)
    );
  }
  return Store;
}

export default configurStore;
