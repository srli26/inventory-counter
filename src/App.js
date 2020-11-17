import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';



function App() {
  return (
    <div className="app">
      <div className="mb-3">
        <Header />
      </div>
      <div className="mainContent container-fluid">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
