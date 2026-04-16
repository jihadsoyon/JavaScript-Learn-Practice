//  createStore implementation
function createStore(reducer, preloadedState, enhancer) {
  // 👉 Support middleware (enhancer)
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState);
  }

  let state = preloadedState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);

    // unsubscribe
    return function () {
      listeners = listeners.filter(l => l !== listener);
    };
  }

  // initialize state
  dispatch({ type: "@@INIT" });

  return {
    getState,
    dispatch,
    subscribe
  };
}

//////////////////////////////////////////////////////
// 🔥 applyMiddleware (BONUS)

function applyMiddleware(...middlewares) {
  return (createStore) => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);

    let dispatch = store.dispatch;

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    };

    const chain = middlewares.map(mw => mw(middlewareAPI));

    dispatch = chain.reduceRight((a, b) => b(a), dispatch);

    return {
      ...store,
      dispatch
    };
  };
}

//////////////////////////////////////////////////////
// 🔥 Logger Middleware (example)

const logger = ({ getState }) => (next) => (action) => {
  console.log("Prev State:", getState());
  console.log("Action:", action);

  const result = next(action);

  console.log("Next State:", getState());
  console.log("------------------------");

  return result;
};

//////////////////////////////////////////////////////
// 🔥 Reducer

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "ADD":
      return { count: state.count + action.payload };

    default:
      return state;
  }
}

//////////////////////////////////////////////////////
// 🔥 Create Store with Middleware

const store = createStore(
  counterReducer,
  undefined,
  applyMiddleware(logger)
);

//////////////////////////////////////////////////////
// 🔥 Subscribe

const unsubscribe = store.subscribe(() => {
  console.log("Subscriber:", store.getState());
});

//////////////////////////////////////////////////////
// 🧪 Dispatch Actions

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", payload: 5 });
store.dispatch({ type: "DECREMENT" });

// Stop listening
unsubscribe();

store.dispatch({ type: "INCREMENT" });