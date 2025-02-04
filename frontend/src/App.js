import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ChatsPage from './Pages/ChatsPage';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage} exact />
      <Route path='/chats' component={ChatsPage} exact />
    </div>
  );
}

export default App;
