import "./App.css";
import {useState, useRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Home, NotFound, New, Splash, ViewPage} from "./pages"
import {Footer, Header} from "./components"

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      author: "효순",
      title: "안녕하세요",
      category: "HTML",
      url: "http://www.naver.com",
      content: "유용한거 같아서 공유합니다.",
      created_date: new Date().toLocaleString(),
    },
    {
      id: 2,
      author: "미진",
      title: "반가워요",
      category: "CSS",
      url: "http://www.google.com",
      content: "유용한거 같아서 공유합니다.",
      created_date: new Date().toLocaleString(),
    },
    {
      id: 3,
      author: "규민",
      title: "react dom에 관하여",
      category: "React",
      url: "http://velog.io",
      content: "react dom에 관한 글입니다.",
      created_date: new Date().toLocaleString(),
    },
  ]);

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
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home dataList={data}/>}/>
          <Route path="/new" element={<New onCreate={onCreate}/>}/>
          <Route path="/view" element={<ViewPage dataList={data}/>}/>
          <Route path="/splash" element={<Splash/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
