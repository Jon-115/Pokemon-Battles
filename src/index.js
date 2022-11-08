import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from '../src/reducers/reducer';

import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './components/App';
import Deck from './components/Deck'
import Battle from './components/Battle'
import Donate from './components/Donate'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={< App/>}/>
            <Route path="/deck" element={< Deck/>}/>
            <Route path="/battle" element={< Battle/>}/>
            <Route path="/donate" element={< Donate/>}/>
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>
);


