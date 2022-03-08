import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { ListItem, ListOptionGroup} from "../components";


const Home = () => {
  const navigate = useNavigate();
  const techInfo_list = useSelector((state) => state.techInfo.list);

  const firstData = [
  { id: 1,
    author: "지윤",
    category: "JS",
    content: "공유하고싶다",
    created_date: 1646313227990,
    title: "테스트테스트",
    url: "dgfdg",
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
  { id: 4,
    author: "미진",
    category: "CSS",
    content: "디자인을 만들어보자",
    created_date: 1646313227990,
    title: "테스트테스트",
    url: "dgfdg"
  },
  { id: 5,
    author: "미진",
    category: "HTML",
    content: "HTML내용이지요",
    created_date: 1646313227990,
    title: "테스트테스트",
    url: "dgfdg"
  }
]

  const [authorChecked, setAuthorChecked] = useState([]);
  const [catChecked, setCatChecked] = useState([]);
  const [infoData, setInfoData] = useState(firstData);

const addChecked = (groupName, value)=> {

  let authorStandard = authorChecked;
  let CateStandard = catChecked;
  
  if (groupName === 'author') {
    setAuthorChecked(
      [...authorChecked, value]
    )
    authorStandard = [...authorChecked, value];
  }
  
  if (groupName === 'category') {
    setCatChecked(
      [...catChecked, value]
    )
    CateStandard = [...catChecked, value]
  }


  let authorChkData = firstData.filter((obj) => { return authorStandard.includes(obj.author) !== false});
  let CateChkData = firstData.filter((obj) => { return CateStandard.includes(obj.category) !== false});
  let DobuleChkData = authorChkData.filter((obj) => { return CateStandard.includes(obj.category) !== false});

  if(authorStandard.length !== 0 && CateStandard.length === 0) {
    return setInfoData(authorChkData)
  } else if (authorStandard.length === 0 && CateStandard.length !== 0) {
    return setInfoData(CateChkData)
  } else if (authorStandard.length !== 0 && CateStandard.length !== 0) {
    return setInfoData(DobuleChkData)
  }
  
}

const removeChecked = (groupName ,value) => {

  let authorStandard = authorChecked;
  let CateStandard = catChecked;

  if (groupName === 'author') {
    const newAuthorList = authorChecked.filter((it) => it !== value);
    setAuthorChecked(newAuthorList);
    authorStandard = authorChecked.filter((it) => it !== value);
  }
  
  if (groupName === 'category') {
    const newCatList = catChecked.filter((it) => it !== value);
    setCatChecked(newCatList);
    CateStandard = catChecked.filter((it) => it !== value);
  }

  let authorChkData = firstData.filter((obj) => { return authorStandard.includes(obj.author) !== false});
  let CateChkData = firstData.filter((obj) => { return CateStandard.includes(obj.category) !== false});
  let removedData = infoData.filter((obj) => obj[groupName] !== value);

  if (authorStandard.length === 0 && CateStandard.length === 0) {
    return setInfoData(firstData)
  } else if (authorStandard.length !== 0 && CateStandard.length === 0) {
    return setInfoData(authorChkData);
  } else if (CateStandard.length !== 0 && authorStandard.length === 0) {
    return setInfoData(CateChkData);
  } else {
    return setInfoData(removedData)
  }

}

  return (
    <div>
      <ListOptionGroup addChecked={addChecked} removeChecked={removeChecked}  />
      {infoData.map((it, index) => {
          return(
              <ListItem key={it.id} {...it} _onClick={() => {navigate('/view/' + index)}} />
          )
      })}
    </div>
  );
};

export default Home;
