import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import './App.css';
import AllProjectsScreen from './screens/AllProjectsScreen';
import ProjectSpecsScreen from './screens/ProjectSpecsScreen';
import MyProjectsScreen from './screens/MyProjectsScreen';
import SignUpScreen from './screens/SignUpScreen';
import AddProjectScreen from './screens/AddProjectScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/home" element={<AllProjectsScreen />} />
        <Route path="/register" element={<SignUpScreen />} />
        <Route path="/All_Projects" element={<AllProjectsScreen />} />
        {/* <Route path="/testingprojects" element={<SignUpScreen />} /> */}
        <Route path="/project" element={<ProjectSpecsScreen />} />
        <Route path="/My_Projects" element={<MyProjectsScreen />} />
        <Route path="/addProject" element={<AddProjectScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
