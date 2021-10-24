// import logo from './logo.svg';
import { Switch, Route, Link } from "react-router-dom"
import Chat from "./Chat"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Link to="chat">Go to chat</Link>
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
