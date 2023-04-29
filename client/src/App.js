import React from "react";
import Navbar from "./Components/Navbar";
import Tasklist from "./Components/Tasklist";
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Tasklist/>} />
      </Routes>
    </div>
  );
}

export default App;
