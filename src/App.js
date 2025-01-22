
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
import FeedBackStar from "./playFiles/FeedBackStar/FeedBackStar";
import FilterList from "./playFiles/FilterList/FilterList";
import AnimePortal from "./playFiles/AnimePortal/AnimePortal";
import ImageCarousel from "./playFiles/CustomCarousel/ImageCarousel/ImageCarousel";
function App() {

  return (
    <div className="App">
      
      {/* <Router>
      <Routes>
      
      <Route element={<ProtectedRoute/>}>
      <Route  element={<ApplicationPage/>} path="/app" />
      </Route>
      
      <Route path="/" element={<Login/>}/>
      </Routes>
      </Router> */}
      {/* <FeedBackStar/> */}
      {/* <AnimePortal/> */}
      <ImageCarousel/>
    </div>
  );
}

export default App;
