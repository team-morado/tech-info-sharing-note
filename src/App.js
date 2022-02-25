import "./App.css";
import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import New from "./pages/New";
import Splash from "./pages/Splash";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import ViewPage from "./pages/ViewPage";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, title, category, url, content) => {
    const created_date = new Date().getTime();
    const newItem = {
      id: dataId.current,
      author,
      title,
      category,
      url,
      content,
      created_date,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home dataList={data} />} />
          <Route path="/new" element={<New onCreate={onCreate} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/splash" element={<Splash />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
