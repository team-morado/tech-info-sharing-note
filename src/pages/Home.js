import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

import {useDispatch, useSelector} from "react-redux";
import {addCategoryFB, removeCategoryFB} from "../shared/redux/modules/techInfo";

import {ListItem, ListOptionGroup} from "../components";


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const techInfo_list = useSelector((state) => state.techInfo.list);

  const [authorChecked, setAuthorChecked] = useState([]);
  const [catChecked, setCatChecked] = useState([]);

  const addChecked = (groupName, value) => {
    let authorStandard = authorChecked;
    let cateStandard = catChecked;

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
      cateStandard = [...catChecked, value]
    }
    dispatch(addCategoryFB(authorStandard, cateStandard, groupName, value))
  }

  const removeChecked = (groupName, value) => {
    let authorStandard = authorChecked;
    let cateStandard = catChecked;

    if (groupName === 'author') {
      const newAuthorList = authorChecked.filter((it) => it !== value);
      setAuthorChecked(newAuthorList);
      authorStandard = authorChecked.filter((it) => it !== value);
    }

    if (groupName === 'category') {
      const newCatList = catChecked.filter((it) => it !== value);
      setCatChecked(newCatList);
      cateStandard = catChecked.filter((it) => it !== value);
    }
    dispatch(removeCategoryFB(authorStandard, cateStandard))
  }

  return (
    <div>
      <ListOptionGroup addChecked={addChecked} removeChecked={removeChecked}/>
      <ItemListContainer>
        {techInfo_list.sort((a, b) => b.created_date - a.created_date).map((it, index) => {
          return (
            <ListItem key={it.id} {...it} _onClick={() => {
              navigate('/view/' + index)
            }}/>
          )
        })}
      </ItemListContainer>
    </div>
  );
};

export default Home;

const ItemListContainer = styled.div`
  padding: 0 1.25rem;
  box-sizing: border-box;
`