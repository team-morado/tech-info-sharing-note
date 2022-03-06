import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import { useState } from 'react';
import { ListItem, ListOptionGroup} from "../components";


const Home = () => {
  const navigate = useNavigate();
  const techInfo_list = useSelector((state) => state.techInfo.list);
  const [optChecked, setOptChecked] = useState({
    author: [],
    category: [],
  })

  
const addChecked = (groupName, value)=> {
  setOptChecked({
      ...optChecked,
      [groupName] : [...optChecked[groupName], value],
    }
  );
}

const removeChecked = (groupName ,value) => {
  const newChkList = optChecked[groupName].filter((it) => it !== value);

  setOptChecked({
    ...optChecked,
    [groupName] : newChkList,
  });
}

  return (
    <div>
      <ListOptionGroup addChecked={addChecked} removeChecked={removeChecked} />
      {techInfo_list.map((it, index) => {
                    return(
                      
                        <ListItem key={it.id} {...it} _onClick={() => {navigate('/view/' + index)}} />
                    )
                })}
    </div>
  );
};

export default Home;
