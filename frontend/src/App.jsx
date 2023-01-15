import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import './App.css';
import ProjectSpecsScreen from './screens/ProjectSpecsScreen';
import MyProjectsScreen from './screens/MyProjectsScreen';
import AllProjectsScreen from './screens/AllProjectsScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/home" element={<AllProjectsScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/All_Projects" element={<AllProjectsScreen />} />
        <Route path="/testingprojects" element={<SignUpScreen />} />
        <Route path="/project" element={<ProjectSpecsScreen />} />
        <Route path="/My_Projects" element={<MyProjectsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
