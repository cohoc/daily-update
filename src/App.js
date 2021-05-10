import './css/App.css';
import Header from './components/Header';
import Home from './components/Home/Home'
import Weather from './components/Weather/Weather'
import {SearchProvider} from './contexts/SearchContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {


  return (
    <Router>
        <SearchProvider>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weather/:cityId" component={Weather} />
          </Switch>

        </SearchProvider>
    </Router>
    
  );
}

export default App;
