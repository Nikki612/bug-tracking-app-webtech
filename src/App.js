import Header from './components/Header'
import Content from './components/Content'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route path="/home" component={Content} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
