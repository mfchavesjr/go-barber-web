import React from 'react';

import SignIn from './pages/Signin';
//import SignUp from './pages/SignUp';
import GloboStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GloboStyle />
  </>
);
export default App;
