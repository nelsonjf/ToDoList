import React from "react";
import Navbar from "./Components/Navbar";
import Tasklist from "./Components/Tasklist";
import New from "./Components/New";
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Tasklist/>} />
        <Route path='/new' element={<New/>} />
      </Routes>
    </div>
  );
}

export default App;
