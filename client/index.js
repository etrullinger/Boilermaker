const React = require("react");
const { createRoot } = require("react-dom/client");
const { Provider } = require('react-redux');
const store = require('./store');

const app = document.getElementById("app");
const root = createRoot(app); 

root.render(
  <Provider store={store}>
    {/* rest of app goes here */}
  </Provider>
);