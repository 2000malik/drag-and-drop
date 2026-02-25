import { Fragment } from 'react';

import { Dashboard } from './features';
import { Header, Main, SideBar } from './components';

import './App.css';

function App() {
  return (
    <Fragment>
      <SideBar />
      <Header />
      <Main>
        <Dashboard />
      </Main>
    </Fragment>
  );
}

export default App;
