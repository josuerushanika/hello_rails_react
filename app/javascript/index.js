import React from "react";
import { ReactDOM } from "react";
import { Provider } from "react-redux";
import setupStore from "./redux/store";
import App from "./App";

const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);