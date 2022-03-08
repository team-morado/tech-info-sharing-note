import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { ListItem, ListOptionGroup} from "../components";


const Home = () => {
  const navigate = useNavigate();
  const techInfo_list = useSelector((state) => state.techInfo.list);

  const firstData = [
  { id: 1,
    txt_author: "지윤",
    category: "JS",
    content: "공유하고싶다",
    created_date: 1646313227990,
    title: "테스트테스트",
    url: "dgfdg",
    author: "jy"
  },
  { id: 2,
    txt_author: "규민",
    category: "React",
    content: "공부를 합시다",
    created_date: 1646313227990,
    title: "테스트테스트",
    url: "asdasdas",
    author: "km"
  },
  { id: 3,
    txt_author: "다님",
    category: "CSS",
    content: "디자인을 만들어보자",
    created_date: 1646313227990,
    title: "테스트테스트",
    url: "dgfdg",
    author: 'tina'
  },
  { id: 4,
    txt_author: "미진",
    category: "CSS",
    content: "디자인을 만들어보자",
    created_date: 1646313227990,
    title: "테스트테스트",
    url: "dgfdg",
    author: 'mj'
  }
]
  const [authorChecked, setAuthorChecked] = useState([]);
  const [catChecked, setCatChecked] = useState([]);
  const [infoData, setInfoData] = useState(firstData);
  
const addChecked = (groupName, value)=> {

  let arr1 = authorChecked.length === 0 ? [] : firstData.filter((obj) => { return authorChecked.includes(obj.author) !== false } );
  let arr2 = firstData.filter((obj) => obj[groupName] === value);
  let arr3 = catChecked.length === 0 ? [] : firstData.filter((obj) => { return catChecked.includes(obj.category) !== false } );
  let arr4 = arr1.concat(arr2).concat(arr3);
  setInfoData(arr4);
  

  if (groupName === 'author') {
    setAuthorChecked(
      [...authorChecked, value]
    )
  }
  
  if (groupName === 'category') {
    setCatChecked(
      [...catChecked, value]
    )
  }

}

const removeChecked = (groupName ,value) => {

  if (groupName === 'author') {
    const newAuthorList = authorChecked.filter((it) => it !== value);
    setAuthorChecked(newAuthorList);
  }
  
  if (groupName === 'category') {
    const newCatList = catChecked.filter((it) => it !== value);
    setCatChecked(newCatList);
  }
}

  return (
    <div>
      <ListOptionGroup addChecked={addChecked} removeChecked={removeChecked} />
      {infoData.map((it, index) => {
          return(
              <ListItem key={it.id} {...it} _onClick={() => {navigate('/view/' + index)}} />
          )
      })}
    </div>
  );
};

export default Home;
