// Entry point for the build script in your package.json

import "@hotwired/turbo-rails"
import "./controllers"
import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./components/Greetings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store"
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);