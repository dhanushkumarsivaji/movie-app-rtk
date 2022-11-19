import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import "./App.css";
function App() {
  const { test } = useSelector((state) => ({ ...state.movie }));
  useEffect(() => {
    if(test){
      console.log("test",test)
    }
  },[test])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
