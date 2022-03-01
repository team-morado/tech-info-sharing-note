import "./App.css";
import { useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, NotFound, New, Splash, ViewPage } from "./pages";
import { Footer, Header } from "./components";
import CommonFunc from "./components/Common";
import {createTechInfo} from "./shared/redux/modules/techInfo";
import {useDispatch} from "react-redux";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const dispatch = useDispatch();


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
    dispatch(createTechInfo(newItem))
  };

  return (
      <div className="App">
        <Header />
        <div className="ContentInner">
        <Routes>
          <Route path="/" element={<Home dataList={data} />} />
          <Route path="/new" element={<New onCreate={onCreate} />} />
          <Route path="/view" element={<ViewPage dataList={data} />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer />
        {CommonFunc()}
      </div>
  );
}

export default App;
