import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import New from "./pages/New";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<New />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
