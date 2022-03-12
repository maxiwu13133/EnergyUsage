import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import LoginContainer from './containers/login';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (  
    <Layout>
      <Routes>
          <>
            <Route path="/" element={<LoginContainer/>} />
          </>
      </Routes>
    </Layout>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App /> 
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

