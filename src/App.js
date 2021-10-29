import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import {Switch, Route, Redirect} from 'react-router-dom'
import Overview from './components/Overview';

function App() {
  return <div>
    
    <Switch>
      <Route path='/form' render={(props)=><Form {...props}/>}/>
      <Route path='/overview' render={(props)=><Overview {...props}/>}/>
      <Redirect from='/' to='/form' />
    </Switch>

  </div>
}

export default App;
