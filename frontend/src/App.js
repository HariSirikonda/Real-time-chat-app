import './App.css';
import HomePage from './Pages/HomePage';
import ChatsPage from './Pages/ChatsPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          {isSignedUp ? <Redirect to="/chats" /> : <HomePage setIsSignedUp={setIsSignedUp} />}
        </Route>
        <Route path='/chats' component={ChatsPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
