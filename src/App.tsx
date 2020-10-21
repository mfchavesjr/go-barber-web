import React from 'react';

import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GloboStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GloboStyle />
  </>
);
export default App;
