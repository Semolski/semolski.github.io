import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ConfigureStore } from "./redux/configureStore";

// importing Provider allows the Store to be available across the application.

// This makes the 'store' available to use below to make it available to all components.
const store = ConfigureStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
