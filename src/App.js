import "./App.css";
import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {createTechInfoFB, loadTechInfoFB} from "./shared/redux/modules/techInfo";

import {handleContentInner} from "./Util/Common";
import {Footer, Header} from "./components";
import {Home, NotFound, New, Splash, ViewPage, Edit, Loading} from "./pages";

function App() {
  const dispatch = useDispatch();
  const is_loaded = useSelector((state) => state.techInfo.is_loaded);

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

  useEffect(() => {
    dispatch(loadTechInfoFB());
    handleContentInner();
    window.addEventListener('resize', handleContentInner);
  })

  return (
    <div className="App">
      <Header/>
      <div className="ContentInner">
        <Routes>
          <Route path="/" element={<Splash/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/new" element={<New onCreate={onCreate}/>}/>
          <Route path="/view/:index" element={<ViewPage/>}/>
          <Route path="/edit/:index" element={<Edit/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
      {!is_loaded && <Loading/>}
    </div>
  );
}

export default App;
