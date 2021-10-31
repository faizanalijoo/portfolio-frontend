import './App.css';
import Form from './components/Form';
import {Switch, Route, Redirect} from 'react-router-dom'
import Overview from './components/Overview';

function App() {
  return <div>
    
    <Switch>
      <Route path='/form' render={(props)=><Form {...props}/>}/>
      <Route path='/:id/:companyname' render={(props)=><Overview {...props}/>}/>
      <Redirect from='/' to='/form' />
    </Switch>

  </div>
}

export default App;
