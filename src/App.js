
import "./App.css";
// import CodeSplit from "./InterviewPrep/CodeSplit/CodeSplit";
import React, { Suspense } from 'react';
import Login from "./playFiles/AuthApplication/AuthPage/Login";
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import ApplicationPage from "./playFiles/AuthApplication/ProtectedRoutes/ApplicationPage";
import ProtectedRoute from "./playFiles/AuthApplication/utils/ProtectedRoute";
function App() {

  return (
    <div className="App">
      
      <Router>
      <Routes>
      
      <Route element={<ProtectedRoute/>}>
      <Route  element={<ApplicationPage/>} path="/app" />
      </Route>
      
      <Route path="/" element={<Login/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
