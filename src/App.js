import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/index.scss';
import Contacts from '../src/components/Contacts';
import Header from '../src/components/Header';
import store from '../src/helpers/store';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AddContact from '../src/components/AddContact';
import EditContact from '../src/components/EditContact';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <div className="inner-wrapper">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Contacts/>
              </Route>
              <Route path="/contacts/add">
                <AddContact/>
              </Route>
              <Route path="/contacts/edit/:id">
                <EditContact/>
              </Route>
            </Switch>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
