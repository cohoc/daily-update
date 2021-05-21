import './css/App.css';
import Home from './components/Home/Home'
import Weather from './components/Weather/Weather'
import Covid from './components/Covid/Covid'
import News from './components/News/News'
import {SearchProvider} from './contexts/SearchContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
        <SearchProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/covid" component={Covid} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/news" component={News} />
          </Switch>

        </SearchProvider>
    </Router>
    
  );
}

export default App;
