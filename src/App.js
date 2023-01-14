import Header from './components/Header'
import Content from './components/Content'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import './App.css'
import ProjectSpecsScreen from './screens/ProjectSpecsScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route path="/home" component={Content} />
            <Route path="/register" component={SignUpScreen} />
            <Route path="/myprojects" component={SignUpScreen} />
            <Route path="/allprojects" component={SignUpScreen} />
            <Route path="/testingprojects" component={SignUpScreen} />
            <Route path="/project" component={ProjectSpecsScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
