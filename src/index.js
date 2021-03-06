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
import HomeContainer from './containers/home';
import SignUpContainer from './containers/signup';
import Admin from './admin';
import SettingsContainer from './containers/settings';
import AchievementsContainer from './containers/achievements';
import './components/Layout/Layout.css';
import AddBillContainer from './containers/addBill/AddBillContainer';
import UsageContainer from './containers/usage/UsageContainer';
import { saveState } from './redux/localStorage';


store.subscribe(() =>  {
  saveState(store.getState());
})

const App = () => {
  return (
    <Layout>
      <Routes>
        {/* <> */}
        <Route path='/admin' element={<LoginContainer />} />
        <Route path='/home' element={<HomeContainer />} />
        <Route path='/signup' element={<SignUpContainer />} />
        <Route path='/admin/admin' element={<Admin />} />
        <Route path='/settings' element={<SettingsContainer />} />
        <Route path='/achievements' element={<AchievementsContainer />} />
        <Route path='/' element={<LoginContainer />} />
        <Route path='/home/' element={<HomeContainer />} />
        <Route path='/add-bill/' element={<AddBillContainer />} />
        <Route path='/usage/' element={<UsageContainer/>} />
        {/* </> */}
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
