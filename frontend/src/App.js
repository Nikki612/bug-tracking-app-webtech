import Header from './components/Header'
import Content from './components/Content'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import './App.css'
import ProjectSpecsScreen from './screens/ProjectSpecsScreen'
import MyProjectsScreen from './screens/MyProjectsScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LoginScreen} />
            <Route path="/home" component={Content} />
            <Route path="/register" component={SignUpScreen} />
            <Route path="/All_Projects" component={Content} />
            <Route path="/testingprojects" component={SignUpScreen} />
            <Route path="/project" component={ProjectSpecsScreen} />
            <Route path="/My_Projects" component={MyProjectsScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
