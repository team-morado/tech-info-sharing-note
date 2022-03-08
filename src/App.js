import "./App.css";
import {useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import {createTechInfoFB, loadTechInfoFB} from "./shared/redux/modules/techInfo";
import {useDispatch} from "react-redux";

import { Footer, Header, CommonFunc } from "./components";
import { Home, NotFound, New, Splash, ViewPage, Edit } from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTechInfoFB());
  },[])

  const onCreate = (author, title, category, url, content) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      title,
      category,
      url,
      content,
      created_date,
    };
    dispatch(createTechInfoFB(newItem));
  };

  return (
      <div className="App">
        <Header />
        <div className="ContentInner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New onCreate={onCreate} />} />
          <Route path="/view/:index" element={<ViewPage />} />
          <Route path="/edit/:index" element={<Edit />} />
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
