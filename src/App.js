import './App.css';
import Form from './components/Form';
import {Switch, Route, Redirect} from 'react-router-dom'
import Overview from './components/Overview';
import Login from './components/Login';

function App() {
  return <div>
    <Switch>
      <Route path='/form' render={(props)=><Form {...props}/>}/>
      <Route path='/:id/:companyname' render={(props)=><Overview {...props}/>}/>
      <Route path='/login' render={(props)=><Login {...props }/>}/>
      <Redirect from='/' to='/form' />
    </Switch>
  </div>
}

export default App;
