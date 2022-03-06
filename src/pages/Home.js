import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"

import {ListItem, ListOptionGroup} from "../components";

const Home = () => {
  const navigate = useNavigate();
  const techInfo_list = useSelector((state) => state.techInfo.list);

  const [infoData, setInfoData] = useState([
    { id: 1,
      author: "지윤",
      category: "JS",
      content: "공유하고싶다",
      created_date: 1646313227990,
      title: "테스트테스트",
      url: "dgfdg"
    },
    { id: 2,
      author: "규민",
      category: "React",
      content: "공부를 합시다",
      created_date: 1646313227990,
      title: "테스트테스트",
      url: "asdasdas"
    },
    { id: 3,
      author: "다님",
      category: "CSS",
      content: "디자인을 만들어보자",
      created_date: 1646313227990,
      title: "테스트테스트",
      url: "dgfdg"
    },
  ]);

  return (
    <div>
      <ListOptionGroup />
      {
        infoData.map((it, index) => <ListItem key={it.id} {...it} _onClick={() => {navigate('/view/' + index)}} />)
      }
    </div>
  );
};

export default Home;